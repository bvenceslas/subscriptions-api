import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

export const sendTelegramMessage = async (message: string) => {
  await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID!, message);
};
