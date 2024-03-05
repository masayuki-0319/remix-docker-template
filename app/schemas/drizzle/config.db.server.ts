import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2';

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
if (!(USER && PASS && HOST && PORT)) {
  throw new Error('environment variable: DATABASE_URL is missing.');
}

const connection = mysql.createConnection({
  host: HOST,
  port: Number(PORT),
  database: 'remix-docker-template',
  user: USER,
  password: PASS,
});
if (connection.authorized === false) {
  throw new Error('Database connection failed.');
}

export const db = drizzle(connection);
