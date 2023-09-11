import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

export const setupDiscordClient = async () => {
  await client.login(process.env.DISCORD_BOT_TOKEN);
  client.on('ready', () => {
    console.log(`Discord watcher ready`);
  });

  return client;
};
