import pgPromise from "pg-promise";
import 'dotenv/config';

const pgp = pgPromise();
// 
const connection = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const db = pgp(connection);


export default db;
