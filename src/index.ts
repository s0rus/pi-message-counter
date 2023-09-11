import { Events } from 'discord.js';
import app from './app';
import { getMessageCount } from './components/get-message-count';
import { setupDiscordClient } from './components/setup-discord-client';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

void (async () => {
  try {
    const client = await setupDiscordClient();
    let messageCount = await getMessageCount();
    console.log(`Today's message count: ${messageCount}`);

    client.on(Events.MessageCreate, (_message) => {
      messageCount += 1;
      console.log(`New message count: ${messageCount}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
