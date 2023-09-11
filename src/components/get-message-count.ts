import dayjs from 'dayjs';
import { prisma } from '../db/prisma';

export const getMessageCount = async () => {
  const records = await prisma.messageAggregation.findMany({
    where: {
      date: dayjs(new Date()).format('DD.MM.YYYY'),
    },
  });

  return records.reduce((acc, curr) => acc + curr.dayCount, 0);
};
