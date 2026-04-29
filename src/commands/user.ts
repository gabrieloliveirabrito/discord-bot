import { Command } from "../types/command";

export const user : Command = {
    name: "user",
    async execute(message) {
        const member = message.member;

        await message.reply(`Nick: ${member?.displayName}\n UID: ${message.author.id}`);
    }
}