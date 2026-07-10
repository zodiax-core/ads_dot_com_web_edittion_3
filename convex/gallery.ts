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
    const resolved = await Promise.all(
      images.map(async (img) => {
        const looksLikeStorageId = img.imageUrl &&
          !img.imageUrl.startsWith("http") &&
          !img.imageUrl.startsWith("/") &&
          !img.imageUrl.includes(".") &&
          img.imageUrl.length > 20;
        if (looksLikeStorageId) {
          const url = await ctx.storage.getUrl(img.imageUrl as any);
          if (!url) return null; // storageId not found — skip
          return { ...img, imageUrl: url };
        }
        return img;
      })
    );
    // Filter out nulls (unresolvable storageIds)
    return resolved.filter(Boolean);
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


export const seedGalleryManual = mutation(async (ctx) => {
  const images = [
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-1.jpeg",
    "caption": "design 1"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-10.jpg",
    "caption": "design 10"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-11.jpg",
    "caption": "design 11"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-2.jpeg",
    "caption": "design 2"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-3.png",
    "caption": "design 3"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-4.jpg",
    "caption": "design 4"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-5.jpg",
    "caption": "design 5"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-6.jpg",
    "caption": "design 6"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-7.jpeg",
    "caption": "design 7"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-8.jpeg",
    "caption": "design 8"
  },
  {
    "imageUrl": "/gallery/Creative Design & Website development Images/design-9.jpeg",
    "caption": "design 9"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Birthday-1.jpg",
    "caption": "Birthday 1"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Birthday-2.jpg",
    "caption": "Birthday 2"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Birthday-3.jpg",
    "caption": "Birthday 3"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Birthday-4.jpg",
    "caption": "Birthday 4"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Birthday-5.jpg",
    "caption": "Birthday 5"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Marriage-1.avif",
    "caption": "Marriage 1"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Office-1.jpg",
    "caption": "Office 1"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Presentation-2.jpg",
    "caption": "Presentation 2"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Presentation-3.jpg",
    "caption": "Presentation 3"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Presentation-4.jpg",
    "caption": "Presentation 4"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Presestation-1.jpg",
    "caption": "Presestation 1"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Stalls-1.jpg",
    "caption": "Stalls 1"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/stalls-2.jpg",
    "caption": "stalls 2"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Stalls-3.webp",
    "caption": "Stalls 3"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Stalls-4.jpg",
    "caption": "Stalls 4"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Wedding-2.webp",
    "caption": "Wedding 2"
  },
  {
    "imageUrl": "/gallery/Event-Management Images/Wedding-3.jpg",
    "caption": "Wedding 3"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/3D-signboards-1.jpg",
    "caption": "3D signboards 1"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/3D-signboards-2.jpg",
    "caption": "3D signboards 2"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/3D-signboards-3.webp",
    "caption": "3D signboards 3"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/birdboard-1.webp",
    "caption": "birdboard 1"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/birdboard-2.webp",
    "caption": "birdboard 2"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/birdboard-3.jpg",
    "caption": "birdboard 3"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/birdboard-4.jpg",
    "caption": "birdboard 4"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/birdboard-5.jpg",
    "caption": "birdboard 5"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/Signage-1.jpg",
    "caption": "Signage 1"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/Signage-2.jpg",
    "caption": "Signage 2"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/Signage-3.jpg",
    "caption": "Signage 3"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/Signage-4.jpg",
    "caption": "Signage 4"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/Signage-5.jpg",
    "caption": "Signage 5"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/Signage-6.avif",
    "caption": "Signage 6"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/ss-singage-1.jpg",
    "caption": "ss singage 1"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/ss-singage-2.jpg",
    "caption": "ss singage 2"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/ss-singage-3.jpg",
    "caption": "ss singage 3"
  },
  {
    "imageUrl": "/gallery/Fabrication & Installation Images/ss-singage-4.webp",
    "caption": "ss singage 4"
  },
  {
    "imageUrl": "/gallery/printing-service-images/Digital-Rolland-Printing-1.jpg",
    "caption": "Digital Rolland Printing 1"
  },
  {
    "imageUrl": "/gallery/printing-service-images/Flex-printing-1.jpg",
    "caption": "Flex printing 1"
  },
  {
    "imageUrl": "/gallery/printing-service-images/Flex-printing-2.jpg",
    "caption": "Flex printing 2"
  },
  {
    "imageUrl": "/gallery/printing-service-images/Flex-printing-3.avif",
    "caption": "Flex printing 3"
  },
  {
    "imageUrl": "/gallery/printing-service-images/offset-printing-1.jpg",
    "caption": "offset printing 1"
  },
  {
    "imageUrl": "/gallery/printing-service-images/offset-printing-2.avif",
    "caption": "offset printing 2"
  },
  {
    "imageUrl": "/gallery/printing-service-images/offset-printing-3.jpg",
    "caption": "offset printing 3"
  },
  {
    "imageUrl": "/gallery/printing-service-images/offset-printing-4.jpg",
    "caption": "offset printing 4"
  },
  {
    "imageUrl": "/gallery/printing-service-images/offset-printing-5.jpg",
    "caption": "offset printing 5"
  },
  {
    "imageUrl": "/gallery/printing-service-images/offset-printing-6.jpg",
    "caption": "offset printing 6"
  },
  {
    "imageUrl": "/gallery/printing-service-images/offset-printing-7.jpg",
    "caption": "offset printing 7"
  },
  {
    "imageUrl": "/gallery/printing-service-images/UV-DTF-1.jpg",
    "caption": "UV DTF 1"
  },
  {
    "imageUrl": "/gallery/printing-service-images/UV-DTF-2.webp",
    "caption": "UV DTF 2"
  },
  {
    "imageUrl": "/gallery/printing-service-images/UV-DTF-3.jpg",
    "caption": "UV DTF 3"
  },
  {
    "imageUrl": "/gallery/printing-service-images/UV-DTF-4.jpg",
    "caption": "UV DTF 4"
  },
  {
    "imageUrl": "/gallery/printing-service-images/UV-DTF-5.jpg",
    "caption": "UV DTF 5"
  },
  {
    "imageUrl": "/gallery/printing-service-images/UV-Flatbed-1.avif",
    "caption": "UV Flatbed 1"
  },
  {
    "imageUrl": "/gallery/printing-service-images/UV-Flatbed-2.webp",
    "caption": "UV Flatbed 2"
  },
  {
    "imageUrl": "/gallery/printing-service-images/UV-Flatbed-3.webp",
    "caption": "UV Flatbed 3"
  },
  {
    "imageUrl": "/gallery/printing-service-images/uv-roll-to-roll-1.jpg",
    "caption": "uv roll to roll 1"
  },
  {
    "imageUrl": "/gallery/printing-service-images/uv-roll-to-roll-2.jpg",
    "caption": "uv roll to roll 2"
  },
  {
    "imageUrl": "/gallery/printing-service-images/uv-roll-to-roll-3.webp",
    "caption": "uv roll to roll 3"
  }
];
  for (const img of images) {
    await ctx.db.insert('globalGallery', img);
  }
});