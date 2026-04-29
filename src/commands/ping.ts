import { parseEmoji } from "discord.js";
import { Command } from "../types/command";

export const ping: Command = {
    name: "ping",
    async execute(message, args) {
        const reply = await message.reply("Pong");
        reply.react("🏓");
    }
};