import dayjs from 'dayjs';
import { eq } from 'drizzle-orm';
import { db } from '../db/db';
import { messageAggregation } from '../db/schema/schema';

export const getMessageCount = async () => {
  const records = await db
    .select()
    .from(messageAggregation)
    .where(eq(messageAggregation.date, dayjs(new Date()).format('DD.MM.YYYY')));

  if (!records) {
    throw new Error('No records found');
  }

  return records.reduce((acc, record) => {
    if (record.dayCount) {
      return acc + record.dayCount;
    }
    return acc;
  }, 0);
};
