import { Message } from "discord.js";
import { Command } from "../types/command";

export const avatar : Command = {
    name: "avatar",
    async execute(message: Message) {
        const user = message.mentions.users.first() || message.author;

        const avatarURL = user.displayAvatarURL({
            size: 4096,
            extension: "png"
        });

        await message.reply(`UID: ${user.id}\n Name: ${user.username}\n Avatar: ${avatarURL}`);
    }
}