import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

export const sendTelegramMessage = async (message: string) => {
  await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID!, message);
};

export const sendPrivateTelegramMessage = async (
  phoneNumber: string,
  message: string
) => {
  await bot.telegram.sendMessage(phoneNumber, message);
};
