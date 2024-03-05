require('dotenv/config');

const { drizzle } = require('drizzle-orm/mysql2');
const { migrate } = require('drizzle-orm/mysql2/migrator');
const { createConnection } = require('mysql2');

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

const connection = createConnection(credentials);
const db = drizzle(connection);

migrate(db, { migrationsFolder: 'migrations' })
  .then(() => {
    console.log('Migrations ran successfully');
    process.exit();
  })
  .catch((error) => {
    console.log('Error running migrations', error);
    process.exit(1);
  })
  .finally(() => {
    connection.end();
  });
