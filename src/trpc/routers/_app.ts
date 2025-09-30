import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../init";
import { counts } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
export const appRouter = createTRPCRouter({
  getCounts: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx;
    return await db.select().from(counts);
  }),
  updateCounts: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx;
      console.log("updating for id: ", input.id);
      try {
        await db.transaction(async (tx) => {
          await tx
            .update(counts)
            .set({ count1: sql`${counts.count1} + 1` })
            .where(eq(counts.id, input.id));
          await tx
            .update(counts)
            .set({ count2: sql`${counts.count2} + 1` })
            .where(eq(counts.id, input.id));
        });
      } catch (error) {
        console.error("Failed to update counts: ", error);
        throw new Error("Failed to update counts");
      }
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
