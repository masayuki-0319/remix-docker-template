import { defineConfig } from 'drizzle-kit';

const USER = process.env.DB_USER || 'root';
const PASS = process.env.DB_PASS || 'password';
const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || '33060';
const credentials = {
  host: HOST,
  port: Number(PORT),
  database: 'remix-docker-template',
  user: USER,
  password: PASS,
};

export default defineConfig({
  schema: './app/drizzle/schemas/*',
  out: './migrations',
  driver: 'mysql2',
  dbCredentials: credentials,
  verbose: true,
  strict: true,
});
