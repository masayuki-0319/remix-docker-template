import { drizzle } from 'drizzle-orm/mysql2';
import { createConnection } from 'mysql2';

const USER = process.env.DB_USER || 'root';
const PASS = process.env.DB_PASS || 'password';
const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || '3306';
const credentials = {
  host: HOST,
  port: Number(PORT),
  database: 'remix-docker-template',
  user: USER,
  password: PASS,
};

const connection = createConnection(credentials);
if (connection.authorized === false) {
  throw new Error('Database connection failed.');
}

export const db = drizzle(connection);
