import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { mysqlTable, int, text, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  profileUrl: varchar('profile_url', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  password: text('password').notNull(),
});

export type User = InferSelectModel<typeof users>;

export type NewUser = InferInsertModel<typeof users>;

export type UserProfile = Pick<User, 'firstName' | 'lastName' | 'profileUrl'>;
