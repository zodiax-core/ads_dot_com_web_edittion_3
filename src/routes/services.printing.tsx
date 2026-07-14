import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { ServiceImageGrid } from "@/components/ServiceImageGrid";

import uvRoll1 from "@/assets/printing-service-images/uv-roll-to-roll-1.jpg";
import uvRoll2 from "@/assets/printing-service-images/uv-roll-to-roll-2.jpg";
import uvRoll3 from "@/assets/printing-service-images/uv-roll-to-roll-3.webp";
import uvDtf1 from "@/assets/printing-service-images/UV-DTF-1.jpg";
import uvDtf2 from "@/assets/printing-service-images/UV-DTF-2.webp";
import uvDtf3 from "@/assets/printing-service-images/UV-DTF-3.jpg";
import uvFlat1 from "@/assets/printing-service-images/UV-Flatbed-1.avif";
import uvFlat2 from "@/assets/printing-service-images/UV-Flatbed-2.webp";
import uvFlat3 from "@/assets/printing-service-images/UV-Flatbed-3.webp";
import flex1 from "@/assets/printing-service-images/Flex-printing-1.jpg";
import flex2 from "@/assets/printing-service-images/Flex-printing-2.jpg";
import flex3 from "@/assets/printing-service-images/Flex-printing-3.avif";
import roland1 from "@/assets/printing-service-images/Digital-Rolland-Printing-1.jpg";
import offset1 from "@/assets/printing-service-images/offset-printing-1.jpg";
import offset2 from "@/assets/printing-service-images/offset-printing-2.avif";
import offset3 from "@/assets/printing-service-images/offset-printing-3.jpg";
import offset4 from "@/assets/printing-service-images/offset-printing-4.jpg";

const phone = "923349955475";
const wa = (msg: string) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

const SUB = [
  {
    title: "UV Roll to Roll",
    desc: "High-resolution, durable prints on flexible media. Perfect for backlit signs, vehicle wraps, and large-format displays that need to withstand the elements while maintaining vibrant colours.",
    images: [uvRoll1, uvRoll2, uvRoll3],
    reverse: false,
    accent: "accent-blue",
    waMsg: "Hi ADS DOT COM! I'm interested in UV Roll to Roll printing. Please send me a quote.",
  },
  {
    title: "UV DTF (Direct to Film)",
    desc: "Innovative transfer printing that applies highly detailed, full-colour graphics to hard, irregular, or cylindrical surfaces. Ideal for custom packaging and promotional items.",
    images: [uvDtf1, uvDtf2, uvDtf3],
    reverse: true,
    accent: "accent-coral",
    waMsg: "Hi ADS DOT COM! I'm interested in UV DTF (Direct to Film) printing. Please send me a quote.",
  },
  {
    title: "UV Flat Bed Printing",
    desc: "Direct-to-substrate printing on rigid materials like acrylic, wood, metal, and glass. UV curing ensures instant drying and extreme scratch resistance for premium architectural signage.",
    images: [uvFlat1, uvFlat2, uvFlat3],
    reverse: false,
    accent: "accent-purple",
    waMsg: "Hi ADS DOT COM! I'm interested in UV Flatbed printing. Please send me a quote.",
  },
  {
    title: "Digital Flex Printing",
    desc: "Fast, cost-effective wide-format printing for massive outdoor hoardings, banners, and backdrops. Our industrial flex machines output thousands of square feet daily with precision colour matching.",
    images: [flex1, flex2, flex3],
    reverse: true,
    accent: "accent-mint",
    waMsg: "Hi ADS DOT COM! I'm interested in Digital Flex printing. Please send me a quote.",
  },
  {
    title: "Digital Roland Printing",
    desc: "Unmatched photorealistic quality using advanced eco-solvent inks. The go-to choice for premium indoor graphics, fine art reproductions, and high-fidelity retail window displays.",
    images: [roland1, uvRoll2],
    reverse: false,
    accent: "accent-yellow",
    waMsg: "Hi ADS DOT COM! I'm interested in Digital Roland printing. Please send me a quote.",
  },
  {
    title: "Offset Printing",
    desc: "High-volume traditional offset printing for corporate collateral, brochures, magazines, and packaging. Strict colour calibration ensures brand consistency across massive runs.",
    images: [offset1, offset2, offset3, offset4],
    reverse: true,
    accent: "accent-blue",
    waMsg: "Hi ADS DOT COM! I'm interested in Offset printing. Please send me a quote.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://adsdotcom.net/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://adsdotcom.net/services" },
        { "@type": "ListItem", "position": 3, "name": "Printing Services", "item": "https://adsdotcom.net/services/printing" },
      ],
    },
    {
      "@type": "Service",
      "name": "Printing Services",
      "url": "https://adsdotcom.net/services/printing",
      "description": "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland and Offset printing in Lahore, Pakistan.",
      "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
      "areaServed": { "@type": "Country", "name": "Pakistan" },
      "serviceType": "Printing Services",
    },
  ],
};

export const Route = createFileRoute("/services/printing")({
  head: () => ({
    meta: [
      { title: "Printing Services in Lahore | UV, DTF, Flex & Offset | ADS DOT COM" },
      { name: "description", content: "Professional printing in Lahore: UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland & Offset. In-house facility, fast turnaround. WhatsApp for a quote." },
      { property: "og:title", content: "Printing Services in Lahore | ADS DOT COM" },
      { property: "og:description", content: "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland & Offset — all in-house in Lahore. Fast turnaround, in-house press." },
      { property: "og:url", content: "https://adsdotcom.net/services/printing" },
      { property: "og:image", content: "https://adsdotcom.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Printing Services Lahore | ADS DOT COM" },
      { name: "twitter:description", content: "UV, DTF, Flex, Roland & Offset — all in-house in Lahore." },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/printing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schemaData) },
    ],
  }),
  component: PrintingService,
});

function PrintingService() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      <Nav ready={true} />

      {/* ── Hero ─────────────────────────────────── */}
      <header className="pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-surface text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute">
            <span className="size-1 rounded-full bg-accent-blue" /> Precision Printing
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-balance">
            Ink and paper, <span className="font-serif italic text-accent-blue">engineered.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            From industrial-scale flex banners to micro-precision UV transfers — we operate at the intersection of traditional craftsmanship and advanced printing technology.
          </p>
          <a
            href={wa("Hi ADS DOT COM! I need a quote for printing services. Please get in touch.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-md"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z"/></svg>
            Get a Quote on WhatsApp
          </a>
        </div>
      </header>

      {/* ── Services ─────────────────────────────── */}
      <section className="py-4 md:py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-36">
          {SUB.map((s, idx) => (
            <div
              key={s.title}
              className={`flex flex-col gap-10 md:gap-16 items-center ${s.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* Image grid */}
              <ServiceImageGrid images={s.images} title={s.title} idx={idx} />

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-5">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink">{s.title}</h2>
                <p className="text-ink-soft leading-relaxed text-lg">{s.desc}</p>
                <div className={`h-1 w-12 rounded-full bg-${s.accent}`} />
                <a
                  href={wa(s.waMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                >
                  Get a Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
