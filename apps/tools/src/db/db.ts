import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
 throw new Error("Please set the DATABASE_URL environment variable");
}

export const connection = postgres(connectionString);
export const db = drizzle(connection);
