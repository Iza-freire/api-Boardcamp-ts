import pg, { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const connectionDB: Pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export { connectionDB };