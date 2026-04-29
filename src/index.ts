import "dotenv/config";
import { client } from "./bot/client";
import { initHandler, registerCommand } from "./bot/handler";

import { ping, avatar, user } from "./commands";

const prefix = process.env.PREFIX || "!";

registerCommand(ping);
registerCommand(avatar);
registerCommand(user);

initHandler(prefix);

client.once("ready", () => {
    console.log(`Bot online has ${client.user?.tag}`);
});

client.login(process.env.DISCORD_TOKEN);