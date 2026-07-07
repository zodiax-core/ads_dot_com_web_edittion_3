export type BlogCategory =
  | "Outdoor Advertising"
  | "Printing"
  | "Events"
  | "Fabrication"
  | "Creative Design"
  | "Industry News";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  featuredImage: string;
  featuredImageAlt: string;
  publishedDate: string; // ISO 8601 e.g. "2025-03-15"
  updatedDate: string;
  readTimeMinutes: number;
  author: {
    name: string;
    bio: string;
    avatar: string; // URL or initials placeholder
  };
  relatedServiceSlug?: string; // e.g. "outdoor-advertising"
  relatedServiceTitle?: string;
  body: BlogBlock[];
  faqs?: { q: string; a: string }[];
  relatedPostSlugs?: string[];
}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string; cite?: string };

// ─── POSTS ────────────────────────────────────────────────────────────────────
export const posts: BlogPost[] = [
  {
    slug: "how-to-choose-outdoor-billboard-location-lahore",
    title: "How to Choose the Right Billboard Location in Lahore",
    excerpt:
      "Site selection is the single most impactful decision in any outdoor campaign. Here's the framework we use after 20+ years of placing sites across Lahore.",
    category: "Outdoor Advertising",
    featuredImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    featuredImageAlt:
      "Busy commercial street intersection in Lahore with billboard structures visible",
    publishedDate: "2025-04-10",
    updatedDate: "2025-04-10",
    readTimeMinutes: 6,
    author: {
      name: "ADS DOT COM Editorial",
      bio: "The ADS DOT COM editorial team draws on 20+ years of outdoor advertising experience across Pakistan.",
      avatar: "AD",
    },
    relatedServiceSlug: "outdoor-advertising",
    relatedServiceTitle: "Outdoor Advertising",
    relatedPostSlugs: [
      "wide-format-printing-substrate-guide",
      "event-stage-design-brief-checklist",
    ],
    body: [
      {
        type: "paragraph",
        text: "Billboard location determines roughly 70% of a campaign's effectiveness. The best creative in the world delivers nothing from a site with poor sightlines, low dwell time, or the wrong audience profile. Yet most brands still choose sites based on availability and price rather than data.",
      },
      {
        type: "h2",
        text: "Understand Your Audience's Movement Pattern",
      },
      {
        type: "paragraph",
        text: "Before requesting a site list, define which roads your target audience actually uses. For B2B brands in Lahore, Walton Road, Canal Road and the Cantt. corridor carry the decision-maker commuter traffic. For consumer brands targeting families, arterial routes feeding Defence, Johar Town and Gulberg are higher priority.",
      },
      {
        type: "h2",
        text: "Evaluate Sightline and Dwell Time",
      },
      {
        type: "paragraph",
        text: "A billboard is only effective if it can be read. The minimum sightline we recommend for a standard 20×10 ft board is 150 metres of unobstructed visibility at the approach angle. Intersections and signal points are valuable specifically because they create forced dwell time — the vehicle is stationary and the driver has nothing else to look at.",
      },
      {
        type: "ul",
        items: [
          "Minimum 150m approach sightline for standard formats",
          "Intersection and signal placement adds dwell time",
          "Avoid sites where signage, trees or structures cut sightlines",
          "Check both daytime and night-time visibility if illumination is planned",
        ],
      },
      {
        type: "h2",
        text: "Check Permit Status Before Committing",
      },
      {
        type: "paragraph",
        text: "Not every site in Lahore has a current permit. Cantonment sites are governed by the Cantonment Board, while civil areas fall under LDA or the relevant municipal authority. An unpermitted site risks removal mid-campaign — always confirm permit status before signing any placement agreement.",
      },
      {
        type: "blockquote",
        text: "[DRAFT - replace with a real insight from your team's experience with permit timelines in specific Lahore zones]",
        cite: "ADS DOT COM Site Assessment Team",
      },
      {
        type: "h2",
        text: "Match Format to Distance",
      },
      {
        type: "paragraph",
        text: "Larger formats work for highway placements where reading distance is high. Smaller, more frequent formats work better in dense urban areas where proximity compensates for size. The format decision should follow the site — not the other way around.",
      },
      {
        type: "h2",
        text: "Request a Site Audit",
      },
      {
        type: "paragraph",
        text: "We conduct site surveys for all campaign placements before any commitment is made. The audit covers sightline measurement, permit verification, structural condition, traffic count (where available), and a competitor audit of existing signage on the same road. [DRAFT - add specific audit outputs your team provides]",
      },
    ],
    faqs: [
      {
        q: "How much does billboard placement cost in Lahore?",
        a: "Rental rates vary significantly by zone, format and duration. Cantonment premium intersections command higher rates than suburban arterial sites. Contact us for a site-specific quote — we don't publish rate cards because rates change with availability.",
      },
      {
        q: "How long does it take to book and install a billboard in Lahore?",
        a: "From confirmed brief to live installation, the typical timeline is 2–3 weeks for permit verification, artwork production and installation. Rush installations with pre-approved artwork can be done in 5–7 working days.",
      },
      {
        q: "Do you handle permits for outdoor advertising in Lahore Cantonment?",
        a: "Yes. We manage cantonment and LDA permit applications on your behalf for all outdoor sites. Permit timelines vary by authority — typically 1–3 weeks depending on the specific zone.",
      },
    ],
  },
  {
    slug: "wide-format-printing-substrate-guide",
    title: "A Practical Guide to Wide-Format Printing Substrates",
    excerpt:
      "PVC flex, mesh, backlit film, wallpaper — choosing the wrong substrate is the most common and most avoidable print production mistake.",
    category: "Printing",
    featuredImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featuredImageAlt:
      "Close-up of wide-format printer outputting colourful vinyl graphic roll",
    publishedDate: "2025-05-02",
    updatedDate: "2025-05-02",
    readTimeMinutes: 7,
    author: {
      name: "ADS DOT COM Editorial",
      bio: "The ADS DOT COM editorial team draws on 20+ years of production experience across Pakistan.",
      avatar: "AD",
    },
    relatedServiceSlug: "printing",
    relatedServiceTitle: "Precision Printing",
    relatedPostSlugs: [
      "how-to-choose-outdoor-billboard-location-lahore",
      "brand-identity-physical-production",
    ],
    body: [
      {
        type: "paragraph",
        text: "Wide-format printing covers an enormous range of materials, and each has specific applications, durability characteristics and installation requirements. Specifying the wrong substrate wastes budget, causes installation problems, and produces results that deteriorate faster than they should.",
      },
      {
        type: "h2",
        text: "PVC Flex (Frontlit Banner)",
      },
      {
        type: "paragraph",
        text: "The most common substrate for outdoor banners, hoarding panels and event backdrops. Standard frontlit flex is typically 440gsm with a gloss or matte finish. It is lightweight, cost-effective and handles solvent and eco-solvent inks well. Suitable for 12–18 months of outdoor exposure depending on UV load.",
      },
      {
        type: "h2",
        text: "Mesh Banner",
      },
      {
        type: "paragraph",
        text: "Perforated PVC that allows wind to pass through — essential for large elevated structures, scaffolding wraps and any application where wind load is a structural concern. The perforation reduces colour saturation, so mesh graphics are typically designed with higher contrast and simpler messaging.",
      },
      {
        type: "h2",
        text: "Backlit Film",
      },
      {
        type: "paragraph",
        text: "Used for lightboxes, illuminated signage panels and backlit displays. Backlit film is translucent, allowing the light source behind it to pass through while maintaining colour accuracy. Ink coverage and colour profiles differ significantly from frontlit materials — always specify the end application before production begins.",
      },
      {
        type: "ul",
        items: [
          "Frontlit flex: general outdoor banners, hoarding panels",
          "Mesh: elevated structures, scaffolding wraps, windy sites",
          "Backlit film: illuminated lightboxes, signage panels",
          "Self-adhesive vinyl: vehicle graphics, window graphics, wall murals",
          "Fabric: exhibition, indoor events, premium retail environments",
        ],
      },
      {
        type: "h2",
        text: "Self-Adhesive Vinyl",
      },
      {
        type: "paragraph",
        text: "Used for vehicle wraps, window graphics, wall murals and any application requiring adhesive application to a substrate. Cast vinyl is thinner and more conformable than calendered vinyl — it is the correct specification for vehicle wraps and complex surface applications. Calendered vinyl is suitable for flat, simple surfaces.",
      },
      {
        type: "h2",
        text: "Fabric",
      },
      {
        type: "paragraph",
        text: "Dye-sublimation fabric printing produces premium-quality, wrinkle-resistant graphics for exhibition stands, pop-up displays, branded environments and high-end retail. Fabric graphics are lighter than PVC, pack down compactly, and can be washed and reused. [DRAFT - add specific fabric substrates your press can handle]",
      },
      {
        type: "blockquote",
        text: "The substrate decision should be made before artwork is created, not after. Different materials require different colour profiles, bleed margins and installation tolerances.",
        cite: "ADS DOT COM Production Team",
      },
    ],
    faqs: [
      {
        q: "What substrate should I specify for an outdoor hoarding panel in Lahore?",
        a: "For standard outdoor hoarding panels, 440gsm frontlit PVC flex with UV-stable solvent inks is the most common and cost-effective specification. For premium sites or longer campaigns, consider 510gsm or above for added durability.",
      },
      {
        q: "How do I send print-ready artwork?",
        a: "We accept PDF (print-ready, CMYK, minimum 100dpi at final print size), AI, EPS and TIFF. Contact our production team and we will provide a setup guide specific to your substrate and format.",
      },
    ],
  },
  {
    slug: "event-stage-design-brief-checklist",
    title: "What to Include in Your Event Stage Design Brief",
    excerpt:
      "A poorly written brief is the single biggest cause of rework, cost overruns and missed deadlines in event production. Here's the information we actually need.",
    category: "Events",
    featuredImage:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    featuredImageAlt:
      "Empty event stage with lighting rig set up inside a large venue hall",
    publishedDate: "2025-06-01",
    updatedDate: "2025-06-01",
    readTimeMinutes: 5,
    author: {
      name: "ADS DOT COM Editorial",
      bio: "The ADS DOT COM editorial team draws on 20+ years of event production experience across Pakistan.",
      avatar: "AD",
    },
    relatedServiceSlug: "events",
    relatedServiceTitle: "Event Production",
    relatedPostSlugs: [
      "how-to-choose-outdoor-billboard-location-lahore",
      "wide-format-printing-substrate-guide",
    ],
    body: [
      {
        type: "paragraph",
        text: "Most event production delays originate in the brief, not the build. When key information is missing at the outset — venue access restrictions, load-in windows, structural weight limits, content format — the production team has to stop, ask, wait for answers, and restart. A complete brief eliminates that cycle.",
      },
      {
        type: "h2",
        text: "Event Date and Load-In Window",
      },
      {
        type: "paragraph",
        text: "The event date is obvious. The load-in window is not. We need to know the earliest time our crew can access the venue before the event, the latest time we must be cleared post-event, and any hard cutoff times driven by venue management, municipal noise restrictions or back-to-back bookings.",
      },
      {
        type: "h2",
        text: "Venue Details and Structural Information",
      },
      {
        type: "ul",
        items: [
          "Venue address and access route for large vehicles",
          "Floor load capacity (kg/m²) — critical for heavy stage structures",
          "Ceiling height at the stage position",
          "Rigging points and their rated load capacity",
          "Power availability: total kW, distribution board location",
          "Existing AV equipment that will be reused vs. replaced",
        ],
      },
      {
        type: "h2",
        text: "Audience and Programme",
      },
      {
        type: "paragraph",
        text: "The stage design should serve the programme. A conference keynote has different requirements to a product launch, an awards dinner or a live performance. Tell us the audience size, the seating or standing arrangement, and the programme sequence — these directly affect stage dimensions, screen positioning and sightline design.",
      },
      {
        type: "h2",
        text: "Brand and Visual References",
      },
      {
        type: "paragraph",
        text: "Brand guidelines, colour palette, logo files and any visual references (mood boards, reference events, competitors' events you want to match or exceed) should be included with the brief. If your brand team has a visual direction already, share it early — it saves a full round of concept revisions.",
      },
      {
        type: "h2",
        text: "Content Format for Screens",
      },
      {
        type: "paragraph",
        text: "If screens are part of the build, we need to know the content format: presentation slides, video playback, live feed, social wall, or a combination. Each has different technical requirements for the media server, output resolution and content mapping. [DRAFT - add any specific content production services your team offers]",
      },
      {
        type: "blockquote",
        text: "The more complete the brief, the more accurate the first quote. Every item of missing information becomes a change order later.",
        cite: "ADS DOT COM Event Production Team",
      },
    ],
    faqs: [
      {
        q: "How early should we submit a brief for event production in Lahore?",
        a: "For a straightforward branded event with stage and lighting, we need a minimum of 2–3 weeks from confirmed brief to event day. For complex builds with custom fabrication, 4–8 weeks is more realistic. Contact us as early as possible — dates book quickly around peak season.",
      },
      {
        q: "Can you produce event content (motion graphics, videos) as well as the physical build?",
        a: "Yes. Our creative studio can produce motion graphics, looping visuals and branded content for use on your event screens. This is available as an add-on to any technical production booking.",
      },
    ],
  },
  {
    slug: "brand-identity-physical-production",
    title: "Why Brand Identity Must Be Designed for Physical Production",
    excerpt:
      "Most brand identity projects are designed entirely on screen and then handed to a production team. This creates problems that are entirely avoidable.",
    category: "Creative Design",
    featuredImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    featuredImageAlt:
      "Design studio desk with brand identity layouts, material swatches and colour reference cards",
    publishedDate: "2025-06-20",
    updatedDate: "2025-06-20",
    readTimeMinutes: 6,
    author: {
      name: "ADS DOT COM Editorial",
      bio: "The ADS DOT COM editorial team draws on 20+ years of brand design and production experience across Pakistan.",
      avatar: "AD",
    },
    relatedServiceSlug: "creative-design",
    relatedServiceTitle: "Creative & Design",
    relatedPostSlugs: [
      "wide-format-printing-substrate-guide",
      "how-to-choose-outdoor-billboard-location-lahore",
    ],
    body: [
      {
        type: "paragraph",
        text: "A brand identity that looks perfect on screen can fail completely in the physical world. Colours shift between RGB and CMYK. Thin typefaces disappear at large scale. Gradients that look elegant on a monitor become muddy on vinyl. These are not production errors — they are design errors made upstream.",
      },
      {
        type: "h2",
        text: "The CMYK Problem",
      },
      {
        type: "paragraph",
        text: "Screen design works in RGB. Print production works in CMYK. The two colour spaces do not map perfectly, and certain RGB colours — particularly saturated blues, bright greens and vivid oranges — have no accurate CMYK equivalent. If a brand colour is specified in RGB only, the printed result will differ from the screen version. This difference becomes a brand consistency problem across every physical touchpoint.",
      },
      {
        type: "h2",
        text: "Scale and Legibility",
      },
      {
        type: "paragraph",
        text: "A logotype that works at 200px on a website may not work at 2 metres on a billboard. Thin strokes disappear. Tight kerning becomes illegible. The spacing ratios that feel refined on screen can feel cramped or lost at architectural scale. Good brand identity work includes legibility testing at the actual sizes the identity will be used.",
      },
      {
        type: "ul",
        items: [
          "Test logotype legibility at minimum and maximum application sizes",
          "Specify both RGB and CMYK (and Pantone where applicable) values in brand guidelines",
          "Include a clear size exclusion zone below which the logo should not be used",
          "Design simplified versions for small-scale applications (favicon, embossing, embroidery)",
        ],
      },
      {
        type: "h2",
        text: "Material Sampling as Part of the Design Process",
      },
      {
        type: "paragraph",
        text: "In our studio, material sampling is not an afterthought — it is part of the design process. Before any production run, we produce physical prototypes: printed panels at full colour density, substrate samples, ink tests on the actual material specified. This proofing stage catches colour deviations and material issues before they become expensive full-production problems.",
      },
      {
        type: "blockquote",
        text: "Every brand identity we produce is stress-tested against the physical surfaces it will appear on — signage, print, vehicle graphics, packaging — before the final guidelines are delivered.",
        cite: "ADS DOT COM Creative Studio",
      },
      {
        type: "h2",
        text: "What to Ask Your Design Agency",
      },
      {
        type: "paragraph",
        text: "Before commissioning a brand identity project, ask your agency how they handle physical production testing. Do they produce print proofs as part of the process? Do they specify CMYK and Pantone values alongside RGB? Have they tested the identity at the scales it will actually be used? If these questions get vague answers, the physical production will be a problem.",
      },
    ],
    faqs: [
      {
        q: "Do you offer brand identity design as a standalone project without production?",
        a: "Yes. We can deliver a brand identity programme as a standalone design project with digital brand guidelines. However, our strength is taking that identity through to physical production — signage, print and fabrication — in the same studio.",
      },
      {
        q: "How long does a brand identity project take?",
        a: "A focused brand identity project typically takes 3–5 weeks from brief to final files. Larger programmes including environmental design and packaging can take 8–12 weeks.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(
  post: BlogPost,
  count = 3
): BlogPost[] {
  const bySlug = (post.relatedPostSlugs ?? [])
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean) as BlogPost[];
  if (bySlug.length >= count) return bySlug.slice(0, count);
  // Fill with same-category posts
  const byCat = posts.filter(
    (p) => p.slug !== post.slug && p.category === post.category && !bySlug.find((b) => b.slug === p.slug)
  );
  return [...bySlug, ...byCat].slice(0, count);
}

export const POSTS_PER_PAGE = 9;
export const ALL_CATEGORIES: BlogCategory[] = [
  "Outdoor Advertising",
  "Printing",
  "Events",
  "Fabrication",
  "Creative Design",
  "Industry News",
];
