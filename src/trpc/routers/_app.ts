import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { counts } from "@/db/schema";
export const appRouter = createTRPCRouter({
  getCounts: baseProcedure
    .query(async ({ ctx, input }) => {
      const { db } = ctx;
      return await db.select().from(counts);
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
