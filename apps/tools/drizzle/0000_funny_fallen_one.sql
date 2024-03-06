CREATE TABLE IF NOT EXISTS "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"prompt" text,
	"revised_prompt" text,
	"url" varchar(256)
);
