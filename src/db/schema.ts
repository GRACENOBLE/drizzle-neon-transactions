import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const counts = pgTable("counts", {
  id: uuid().primaryKey().defaultRandom().notNull(),
  count1: integer("count_1").notNull(),
  count2: integer("count_2").notNull(),
});
