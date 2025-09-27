import { v } from "convex/values";
import { internalQuery } from "../_generated/server";

// Can only be called within other convex functions / actions
export const getOne = internalQuery({
  args: {
    contactSessionId: v.id("contactSessions"),
  },

  handler: async (ctx, args) => {
    return await ctx.db.get(args.contactSessionId);
  },
});
