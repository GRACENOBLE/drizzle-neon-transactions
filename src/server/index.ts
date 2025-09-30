"use server";
import { db } from "@/db";
import { counts } from "@/db/schema";
import { sql } from "drizzle-orm";

export const updateEntry = async (endtryId: string) => {
  console.log(`Updating entry ${endtryId} ...`);
  await db.update(counts).set({ count1: sql`counts.count_1 + 1` });
  await db.update(counts).set({ count2: sql`counts.count_2 + 1` });
};

export const fetchEntries = async () => {
  return await db.query.counts.findMany();
};
