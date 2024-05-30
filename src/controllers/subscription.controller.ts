import { Request, Response } from "express";
import { User } from "../models/user.model";
import { sendTelegramMessage } from "../utils/telegramBot";

export const subscribe = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    // check if the user is already subscribed
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return res.status(409).json({ message: "Already subscribed!" });
    }

    // create and save the new user
    const newUser = new User({ name, email });
    console.log("newUser", newUser);
    const saved = await newUser.save();

    // count emails
    const count = await User.countDocuments();
    const message = `New Subscription ${email} [${name}]
    Subscription ${count}`;

    // send message
    await sendTelegramMessage(message);
    return res.status(201).json({ message: "Subscribed successfully", count });
  } catch (error: unknown) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
