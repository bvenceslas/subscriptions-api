import { Request, Response } from "express";
import { User } from "../models/user.model";
import {
  sendPrivateTelegramMessage,
  sendTelegramMessage,
} from "../utils/telegramBot";

export const subscribe = async (req: Request, res: Response) => {
  const { name, phoneNumber, email } = req.body;

  console.log("data", name, email, phoneNumber);

  try {
    // check if the user is already subscribed
    const foundUserByEmail = await User.findOne({ email });

    console.log("foundUserByEmail", foundUserByEmail);

    if (foundUserByEmail) {
      return res.status(409).json({ message: "Email already subscribed!" });
    }

    const foundUserByPhoneNumber = await User.findOne({ phoneNumber });

    if (foundUserByPhoneNumber) {
      return res
        .status(409)
        .json({ message: "Phone Number already subscribed!" });
    }

    console.log("foundUserByPhoneNumber", foundUserByPhoneNumber);

    // create and save the new user
    const newUser = new User({ name, email, phoneNumber });
    await newUser.save();

    // count emails
    const count = await User.countDocuments();

    const chanelMessage = `New Subscription 
    Email: ${email} 
    Name: ${name}
    Phone Number: ${phoneNumber}

    Subscription #${count}`;

    // const privateMessage = `Dear ${name},
    // Thanks for your subscription to Brain-Subscription-Bot,
    // Let's keep in touch`;

    // get message from the bot
    await sendTelegramMessage(chanelMessage);

    // send the telegram message to the subscribed user
    // await sendPrivateTelegramMessage(phoneNumber, privateMessage);
    return res.status(201).json({ message: "Subscribed successfully", count });
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
