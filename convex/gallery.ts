import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    return await ctx.storage.generateUploadUrl();
  },
});

export const getGallery = query({
  args: {},
  handler: async (ctx) => {
    const images = await ctx.db.query("globalGallery").order("desc").collect();
    return await Promise.all(
      images.map(async (img) => {
        const looksLikeStorageId = img.imageUrl &&
          !img.imageUrl.startsWith("http") &&
          !img.imageUrl.startsWith("/") &&
          !img.imageUrl.includes(".") &&
          img.imageUrl.length > 20;
        if (looksLikeStorageId) {
          const url = await ctx.storage.getUrl(img.imageUrl as any);
          return { ...img, imageUrl: url ?? img.imageUrl };
        }
        return img;
      })
    );
  },
});

export const addImage = mutation({
  args: {
    imageUrl: v.string(),
    caption: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    return await ctx.db.insert("globalGallery", args);
  },
});

// Store storageId directly (called after upload)
export const addImageByStorageId = mutation({
  args: {
    storageId: v.string(),
    caption: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    return await ctx.db.insert("globalGallery", {
      imageUrl: args.storageId,
      caption: args.caption,
    });
  },
});

export const deleteImage = mutation({
  args: { id: v.id("globalGallery") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    await ctx.db.delete(args.id);
  },
});
