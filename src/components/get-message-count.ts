import dayjs from 'dayjs';
import { eq } from 'drizzle-orm';
import { db } from '../db/db';
import { messageAggregation, user } from '../db/schema/schema';

export const getMessageCount = async () => {
  const recordsToday = await db
    .select()
    .from(messageAggregation)
    .where(eq(messageAggregation.date, dayjs(new Date()).format('DD.MM.YYYY')));

  const recordsAllTime = await db.select().from(user);

  if (!recordsToday) {
    throw new Error('No recordsToday found');
  }

  if (!recordsAllTime) {
    throw new Error('No recordsAllTime found');
  }

  const countToday = recordsToday.reduce((acc, record) => {
    if (record.dayCount) {
      return acc + record.dayCount;
    }
    return acc;
  }, 0);

  const countAllTime = recordsAllTime.reduce((acc, record) => {
    if (record.totalMessageCount) {
      return acc + record.totalMessageCount;
    }
    return acc;
  }, 0);

  return {
    countToday,
    countAllTime,
  };
};
