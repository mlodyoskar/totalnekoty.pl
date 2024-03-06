import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const images = pgTable("images", {
 id: serial("id").primaryKey(),
 prompt: text("prompt"),
 revisedPrompt: text("revised_prompt"),
 url: varchar("url", { length: 256 }),
});
