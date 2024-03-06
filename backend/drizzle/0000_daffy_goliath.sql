CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"email" varchar,
	"password" varchar,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
