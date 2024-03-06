import "dotenv/config";
import type { Config } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
 throw new Error("Please set the DATABASE_URL environment variable");
}

export default {
 schema: "./src/db/schema.ts",
 out: "./drizzle",
 driver: "pg",
 dbCredentials: {
  connectionString: DATABASE_URL,
 },
} satisfies Config;
