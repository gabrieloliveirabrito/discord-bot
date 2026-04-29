import { Command } from "../types/command";

export const ping: Command = {
    name: "ping",
    async execute(message, args) {
        await message.reply("Pong");
    }
};