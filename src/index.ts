import { Events } from 'discord.js';
import app from './app';
import { getMessageCount } from './components/get-message-count';
import { setupDiscordClient } from './components/setup-discord-client';
import { setupLcd, writeToLcd } from './components/write-to-lcd';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

const writeTodayMessageCount = (messageCountToday: number) => `Today: ${messageCountToday}`;
const writeAllTimeMessageCount = (messageCountAllTime: number) => `All time: ${messageCountAllTime}`;

void (async () => {
  try {
    const client = await setupDiscordClient();
    await setupLcd();
    await writeToLcd('Loading...');
    let { countToday, countAllTime } = await getMessageCount();
    await writeToLcd([writeTodayMessageCount(countToday), writeAllTimeMessageCount(countAllTime)]);

    client.on(Events.MessageCreate, async (_message) => {
      countToday += 1;
      countAllTime += 1;
      await writeToLcd([writeTodayMessageCount(countToday), writeAllTimeMessageCount(countAllTime)]);
    });
  } catch (error) {
    console.error(error);
  }
})();
