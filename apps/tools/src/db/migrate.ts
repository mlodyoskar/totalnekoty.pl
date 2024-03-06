import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, connection } from "./db";

const runMigrate = async () => {
 await migrate(db, { migrationsFolder: "./drizzle" });
 console.log("Migrated 🎉");
 await connection.end();
};

runMigrate();
