import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getGallery = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("globalGallery").order("desc").collect();
  },
});

export const addImage = mutation({
  args: {
    imageUrl: v.string(),
    caption: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }
    return await ctx.db.insert("globalGallery", args);
  },
});

export const deleteImage = mutation({
  args: { id: v.id("globalGallery") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }
    await ctx.db.delete(args.id);
  },
});
