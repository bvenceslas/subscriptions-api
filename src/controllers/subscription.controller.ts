import { Request, Response } from "express";
import { User } from "../models/user.model";
import { sendTelegramMessage } from "../utils/telegramBot";

export const subscribe = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    // create and save the new user
    const newUser = new User({ name, email });
    await newUser.save();

    // count emails
    const count = await User.countDocuments();
    const message = `New Subscription ${email} [${name}]
    Subscription ${count}`;

    // send message
    await sendTelegramMessage(message);
    res.status(201).json({ message: "Subscribed successfully", count });
  } catch (error: unknown) {
    if (error instanceof Error && "code" in error) {
      const mongoError = error as { code: number };
      if (mongoError.code === 11000) {
        // Duplicate key error
        res.status(400).json({ message: "Email already subscribed" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
