import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getPosts = query({
  args: { category: v.optional(v.string()) },
  handler: async (ctx, { category }) => {
    const all = await ctx.db
      .query("blogPosts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .order("desc")
      .collect();
    if (category && category !== "All") {
      return all.filter((p) => p.category === category);
    }
    return all;
  },
});

export const getAllPosts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("blogPosts").order("desc").collect();
  },
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();
  },
});

export const getRelatedPosts = query({
  args: { category: v.string(), excludeSlug: v.string() },
  handler: async (ctx, { category, excludeSlug }) => {
    const posts = await ctx.db
      .query("blogPosts")
      .withIndex("by_category", (q) => q.eq("category", category))
      .filter((q) => q.eq(q.field("published"), true))
      .collect();
    return posts.filter((p) => p.slug !== excludeSlug).slice(0, 3);
  },
});

export const createPost = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    body: v.string(),
    category: v.string(),
    featuredImage: v.string(),
    featuredImageAlt: v.string(),
    authorName: v.string(),
    publishedDate: v.string(),
    updatedDate: v.string(),
    readTimeMinutes: v.number(),
    relatedServiceSlug: v.optional(v.string()),
    relatedServiceTitle: v.optional(v.string()),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    // Check slug uniqueness
    const existing = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
    if (existing) throw new Error(`Slug "${args.slug}" already exists`);
    return await ctx.db.insert("blogPosts", args);
  },
});

export const updatePost = mutation({
  args: {
    id: v.id("blogPosts"),
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    body: v.string(),
    category: v.string(),
    featuredImage: v.string(),
    featuredImageAlt: v.string(),
    authorName: v.string(),
    publishedDate: v.string(),
    updatedDate: v.string(),
    readTimeMinutes: v.number(),
    relatedServiceSlug: v.optional(v.string()),
    relatedServiceTitle: v.optional(v.string()),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

export const deletePost = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    await ctx.db.delete(args.id);
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    return await ctx.storage.generateUploadUrl();
  },
});
