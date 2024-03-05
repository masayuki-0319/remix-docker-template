import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { mysqlTable, int, text, json, timestamp } from 'drizzle-orm/mysql-core';

import type { KudoStyle } from '~/utils/constants';
import { users } from './users.db.server';

const defaultStyle: KudoStyle = {
  backgroundColor: 'red',
  textColor: 'white',
  emoji: 'thumbsup',
};

export const kudos = mysqlTable('kudos', {
  id: int('id').primaryKey().autoincrement(),
  message: text('message').notNull(),
  style: json('style').notNull().default(defaultStyle).$type<KudoStyle>(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow(),
  authorId: int('author_id')
    .references(() => users.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  recipientId: int('recipient_id')
    .references(() => users.id, {
      onDelete: 'cascade',
    })
    .notNull(),
});

export type Kudo = InferSelectModel<typeof kudos>;

export type NewKudo = InferInsertModel<typeof kudos>;
