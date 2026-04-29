import { client } from "./client";
import { Command } from "../types/command";

const commands = new Map<string, Command>();

export function registerCommand(command: Command) : void {
    commands.set(command.name, command);
}

export function initHandler(prefix: string) : void {
    client.on("messageCreate", async (message) => {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const name = args.shift()?.toLowerCase();

        if (!name) return;

        const command = commands.get(name);
        if (!command) return;

        await command.execute(message, args);
    });
}