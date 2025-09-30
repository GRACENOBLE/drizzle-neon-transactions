CREATE TABLE "counts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "counts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"count_1" integer NOT NULL,
	"count_2" integer NOT NULL
);
--> statement-breakpoint
DROP TABLE "users" CASCADE;