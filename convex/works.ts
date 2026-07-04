import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getWorks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("works").order("desc").collect();
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
        smallDescription:
          "A temporary architectural installation exploring the interplay of natural and artificial light within a modular framework.",
        client: "Design Week 2024",
        year: "2024",
        projectDetail:
          "The Lumos Pavilion was commissioned as the centerpiece for the annual Design Week. Our challenge was to create a space that felt both monumental and ephemeral. We developed a custom modular aluminum framework that could be assembled on-site in under 48 hours. The exterior was clad in a custom dichroic film that shifted colors depending on the viewer's angle and the time of day, while the interior housed an interactive lighting array that responded to ambient sound.",
        mainImage: "/src/assets/project-lumos.jpg",
      },
      {
        title: "Monolith Exhibition",
        serviceCategory: "Event Production & Curation",
        tags: ["Exhibition", "Curation", "Set Design"],
        smallDescription:
          "A brutalist-inspired group exhibition showcasing emerging industrial designers, featuring custom concrete display plinths.",
        client: "Objekt Gallery",
        year: "2023",
        projectDetail:
          "For 'Monolith', we handled the entire spatial design and production. The concept required a stark, brutalist aesthetic to contrast with the delicate objects on display. We fabricated 24 custom display plinths using a specialized lightweight concrete composite, allowing for the look of solid concrete without the logistical nightmares. We also designed the directional lighting system to cast dramatic, structural shadows across the exhibition hall.",
        mainImage: "/src/assets/project-monolith.jpg",
      },
      {
        title: "Print Campaign: tactile",
        serviceCategory: "High-Fidelity Printing",
        tags: ["Print", "Editorial", "Typography"],
        smallDescription:
          "A limited-edition publication exploring experimental print techniques including blind debossing and thermal ink.",
        client: "Paper & Co.",
        year: "2023",
        projectDetail:
          "This project pushed the boundaries of our print capabilities. We produced a 120-page book exploring sensory design. The cover featured a deep blind deboss on heavy cotton stock, while interior sections utilized thermal-reactive inks that revealed hidden typography when touched. The entire edition of 500 copies was hand-bound in our studio.",
        mainImage: "/src/assets/printing.jpg",
      },
      {
        title: "Echo Festival Stages",
        serviceCategory: "Fabrication & Event Management",
        tags: ["Stage Design", "Festival", "Live Event"],
        smallDescription:
          "Complete stage design, fabrication, and structural engineering for a three-day outdoor music festival.",
        client: "Echo Arts Group",
        year: "2024",
        projectDetail:
          "We were tasked with designing and building three distinct stages for the Echo Festival. The main stage featured a 40-foot kinetic sculpture that moved in sync with the headlining performances. We managed everything from the initial structural engineering and safety sign-offs to the final on-site build and tear-down, coordinating with lighting, sound, and visual teams to ensure a seamless execution.",
        mainImage: "/src/assets/events.jpg",
      },
      {
        title: "Kinetic Retail Display",
        serviceCategory: "Creative Direction & Fabrication",
        tags: ["Retail", "Kinetic", "Visual Merchandising"],
        smallDescription:
          "A dynamic, motor-driven window display for a flagship streetwear store launch.",
        client: "Vektor",
        year: "2023",
        projectDetail:
          "To launch Vektor's new flagship, we designed a window display that wouldn't just sit there. We engineered a series of motorized, rotating acrylic panels that continuously fractured and reformed the mannequin displays behind them. The project required precise timing mechanisms and custom gearings hidden within the display base.",
        mainImage: "/src/assets/fab-kinetic.jpg",
      },
      {
        title: "Permanent Wayfinding",
        serviceCategory: "Installation & Fabrication",
        tags: ["Wayfinding", "Signage", "Permanent"],
        smallDescription:
          "A comprehensive signage and wayfinding system for a newly developed creative campus.",
        client: "The Foundry",
        year: "2022",
        projectDetail:
          "We designed and produced over 150 individual signage pieces for The Foundry campus. The system utilized a combination of laser-cut weathering steel and illuminated frosted acrylic. The challenge was creating a system that felt cohesive across very different architectural spaces while remaining highly durable and legible.",
        mainImage: "/src/assets/installation.jpg",
      },
    ];

    for (const work of dummyWorks) {
      await ctx.db.insert("works", work);
    }

    return { success: true, message: "Dummy data seeded successfully." };
  },
});
