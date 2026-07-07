import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  works: defineTable({
    title: v.string(),
    serviceCategory: v.string(),
    tags: v.array(v.string()),
    smallDescription: v.string(),
    client: v.string(),
    year: v.string(),
    projectDetail: v.string(),
    mainImage: v.string(),
    gallery: v.optional(v.array(v.string())),
  }),
  globalGallery: defineTable({
    imageUrl: v.string(),
    caption: v.optional(v.string()),
  }),
  messages: defineTable({
    name: v.string(),
    email: v.string(),
    projectType: v.optional(v.string()),
    message: v.string(),
    read: v.boolean(),
  }),
  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    body: v.string(), // HTML/Markdown string
    category: v.string(),
    featuredImage: v.string(),
    featuredImageAlt: v.string(),
    authorName: v.string(),
    publishedDate: v.string(), // ISO date string
    updatedDate: v.string(),
    readTimeMinutes: v.number(),
    relatedServiceSlug: v.optional(v.string()),
    relatedServiceTitle: v.optional(v.string()),
    published: v.boolean(),
  }).index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_category", ["category"]),
});
