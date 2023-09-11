import { relations } from 'drizzle-orm';
import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const messageAggregation = mysqlTable('MessageAggregation', {
  id: varchar('id', {
    length: 255,
  }).primaryKey(),
  dayCount: int('dayCount').default(0),
  date: varchar('date', {
    length: 255,
  }),
  userId: varchar('userId', {
    length: 255,
  }),
});

export const user = mysqlTable('User', {
  id: varchar('id', {
    length: 255,
  }).primaryKey(),
  userId: varchar('userId', {
    length: 255,
  }).unique(),
  avatar: varchar('avatar', {
    length: 255,
  }).default(''),
  name: varchar('name', {
    length: 255,
  }),
  totalMessageCount: int('totalMessageCount').default(0),
});

export const messageAggregationRelations = relations(messageAggregation, ({ one }) => ({
  aggregations: one(messageAggregation, {
    fields: [messageAggregation.userId],
    references: [messageAggregation.id],
  }),
}));
