import { query } from "./_generated/server";

export const hasAdmin = query({
  args: {},
  handler: async (ctx) => {
    const user = await ctx.db.query("users").first();
    return user !== null;
  },
});
