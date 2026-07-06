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

// Maps old broken /src/assets/ paths → working Unsplash URLs
const IMAGE_FIX_MAP: Record<string, string> = {
  "/src/assets/project-lumos.jpg":   "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
  "/src/assets/project-monolith.jpg":"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  "/src/assets/printing.jpg":        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "/src/assets/events.jpg":          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  "/src/assets/fab-kinetic.jpg":     "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
  "/src/assets/installation.jpg":    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  "/src/assets/fab-modular.jpg":     "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  "/src/assets/fab-venue.jpg":       "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  "/src/assets/creative.jpg":        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "/src/assets/hero-scene.jpg":      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
};

// Run this once from Admin panel to fix all broken image paths in the DB
export const fixBrokenImages = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    const works = await ctx.db.query("works").collect();
    let fixed = 0;
    for (const work of works) {
      const fixedUrl = IMAGE_FIX_MAP[work.mainImage];
      if (fixedUrl) {
        await ctx.db.patch(work._id, { mainImage: fixedUrl });
        fixed++;
      }
    }
    return { success: true, message: `Fixed ${fixed} broken image(s).` };
  },
});

// Delete ALL works (for a clean re-seed)
export const clearAllWorks = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    const works = await ctx.db.query("works").collect();
    for (const work of works) await ctx.db.delete(work._id);
    return { success: true, message: `Deleted ${works.length} work(s).` };
  },
});

export const getWorks = query({
  args: {},
  handler: async (ctx) => {
    const works = await ctx.db.query("works").order("desc").collect();
    return await Promise.all(
      works.map(async (work) => {
        const looksLikeStorageId = work.mainImage &&
          !work.mainImage.startsWith("http") &&
          !work.mainImage.startsWith("/") &&
          !work.mainImage.includes(".") &&
          work.mainImage.length > 20;
        if (looksLikeStorageId) {
          const url = await ctx.storage.getUrl(work.mainImage as any);
          return { ...work, mainImage: url ?? work.mainImage };
        }
        return work;
      })
    );
  },
});

export const addWork = mutation({
  args: {
    title: v.string(),
    serviceCategory: v.string(),
    tags: v.array(v.string()),
    smallDescription: v.string(),
    client: v.string(),
    year: v.string(),
    projectDetail: v.string(),
    mainImage: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }
    return await ctx.db.insert("works", args);
  },
});

export const updateWork = mutation({
  args: {
    id: v.id("works"),
    title: v.string(),
    serviceCategory: v.string(),
    tags: v.array(v.string()),
    smallDescription: v.string(),
    client: v.string(),
    year: v.string(),
    projectDetail: v.string(),
    mainImage: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

export const deleteWork = mutation({
  args: { id: v.id("works") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }
    await ctx.db.delete(args.id);
  },
});

export const seedDummyData = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }
    
    const existingWorks = await ctx.db.query("works").collect();
    // Allow seeding even if not empty to restore dummy data alongside existing tests
    const dummyWorks = [
      {
        title: "Lumos Pavilion",
        serviceCategory: "Fabrication & Installation",
        tags: ["Architecture", "Experiential", "Lighting"],
        smallDescription: "A temporary architectural installation exploring the interplay of natural and artificial light within a modular framework.",
        client: "Design Week 2024",
        year: "2024",
        projectDetail: "The Lumos Pavilion was commissioned as the centerpiece for the annual Design Week. Our challenge was to create a space that felt both monumental and ephemeral. We developed a custom modular aluminum framework that could be assembled on-site in under 48 hours.",
        mainImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
      },
      {
        title: "Monolith Exhibition",
        serviceCategory: "Event Production & Curation",
        tags: ["Exhibition", "Curation", "Set Design"],
        smallDescription: "A brutalist-inspired group exhibition showcasing emerging industrial designers, featuring custom concrete display plinths.",
        client: "Objekt Gallery",
        year: "2023",
        projectDetail: "For 'Monolith', we handled the entire spatial design and production. The concept required a stark, brutalist aesthetic to contrast with the delicate objects on display.",
        mainImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      },
      {
        title: "Print Campaign: tactile",
        serviceCategory: "High-Fidelity Printing",
        tags: ["Print", "Editorial", "Typography"],
        smallDescription: "A limited-edition publication exploring experimental print techniques including blind debossing and thermal ink.",
        client: "Paper & Co.",
        year: "2023",
        projectDetail: "This project pushed the boundaries of our print capabilities. We produced a 120-page book exploring sensory design.",
        mainImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        title: "Echo Festival Stages",
        serviceCategory: "Fabrication & Event Management",
        tags: ["Stage Design", "Festival", "Live Event"],
        smallDescription: "Complete stage design, fabrication, and structural engineering for a three-day outdoor music festival.",
        client: "Echo Arts Group",
        year: "2024",
        projectDetail: "We were tasked with designing and building three distinct stages for the Echo Festival. The main stage featured a 40-foot kinetic sculpture.",
        mainImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      },
      {
        title: "Kinetic Retail Display",
        serviceCategory: "Creative Direction & Fabrication",
        tags: ["Retail", "Kinetic", "Visual Merchandising"],
        smallDescription: "A dynamic, motor-driven window display for a flagship streetwear store launch.",
        client: "Vektor",
        year: "2023",
        projectDetail: "To launch Vektor's new flagship, we designed a window display that wouldn't just sit there.",
        mainImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
      },
      {
        title: "Permanent Wayfinding",
        serviceCategory: "Installation & Fabrication",
        tags: ["Wayfinding", "Signage", "Permanent"],
        smallDescription: "A comprehensive signage and wayfinding system for a newly developed creative campus.",
        client: "The Foundry",
        year: "2022",
        projectDetail: "We designed and produced over 150 individual signage pieces for The Foundry campus.",
        mainImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      },
    ];

    for (const work of dummyWorks) {
      await ctx.db.insert("works", work);
    }

    return { success: true, message: "Dummy data seeded successfully." };
  },
});
