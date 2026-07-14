import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { ServiceImageGrid } from "@/components/ServiceImageGrid";

import d1 from "@/assets/creative-design-images/design-1.jpeg";
import d2 from "@/assets/creative-design-images/design-2.jpeg";
import d3 from "@/assets/creative-design-images/design-3.png";
import d4 from "@/assets/creative-design-images/design-4.jpg";
import d5 from "@/assets/creative-design-images/design-5.jpg";
import d6 from "@/assets/creative-design-images/design-6.jpg";
import d7 from "@/assets/creative-design-images/design-7.jpeg";
import d8 from "@/assets/creative-design-images/design-8.jpeg";
import d9 from "@/assets/creative-design-images/design-9.jpeg";
import d10 from "@/assets/creative-design-images/design-10.jpg";
import d11 from "@/assets/creative-design-images/design-11.jpg";

const phone = "923349955475";
const wa = (msg: string) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

const SUB = [
  {
    title: "Brand Identity & Strategy",
    desc: "More than just a logo — we develop comprehensive brand systems encompassing visual guidelines, tone of voice, typography, and core messaging to ensure your brand resonates across all touchpoints.",
    images: [d1, d2, d3],
    reverse: false,
    accent: "accent-mint",
    waMsg: "Hi ADS DOT COM! I'm interested in Brand Identity & Strategy design services. Please send me a quote.",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric interface design for web and mobile. We map out user journeys, create wireframes, and deliver high-fidelity prototypes that balance aesthetics with frictionless usability.",
    images: [d4, d5, d6],
    reverse: true,
    accent: "accent-blue",
    waMsg: "Hi ADS DOT COM! I'm interested in UI/UX Design services. Please send me a quote.",
  },
  {
    title: "Print & Packaging Design",
    desc: "Physical design that feels as good as it looks. From premium corporate brochures to innovative retail packaging, our designs are optimised for real-world printing and fabrication.",
    images: [d7, d8, d9],
    reverse: false,
    accent: "accent-coral",
    waMsg: "Hi ADS DOT COM! I'm interested in Print & Packaging Design services. Please send me a quote.",
  },
  {
    title: "Environmental & Spatial Design",
    desc: "Translating your brand into physical space. We design office interiors, retail environments, and wayfinding systems that turn static spaces into immersive brand experiences.",
    images: [d10, d11, d1],
    reverse: true,
    accent: "accent-purple",
    waMsg: "Hi ADS DOT COM! I'm interested in Environmental & Spatial Design services. Please send me a quote.",
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
        { "@type": "ListItem", "position": 3, "name": "Creative Design", "item": "https://adsdotcom.net/services/creative-design" },
      ],
    },
    {
      "@type": "Service",
      "name": "Creative Design",
      "url": "https://adsdotcom.net/services/creative-design",
      "description": "Brand identity, graphic design, UI/UX and environmental design in Lahore. Physical-first creative studio.",
      "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
      "areaServed": { "@type": "Country", "name": "Pakistan" },
      "serviceType": "Creative Design",
    },
  ],
};

export const Route = createFileRoute("/services/creative-design")({
  head: () => ({
    meta: [
      { title: "Creative Design Agency in Lahore | Brand Identity, UI/UX | ADS DOT COM" },
      { name: "description", content: "Creative design agency in Lahore: brand identity, UI/UX, print & packaging, and environmental design. Physical-first studio designing for production." },
      { property: "og:title", content: "Creative Design Agency Lahore | ADS DOT COM" },
      { property: "og:description", content: "Brand identity, UI/UX, print, packaging & environmental design — physical-first creative studio in Lahore." },
      { property: "og:url", content: "https://adsdotcom.net/services/creative-design" },
      { property: "og:image", content: "https://adsdotcom.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Creative Design Agency Lahore | ADS DOT COM" },
      { name: "twitter:description", content: "Brand identity, UI/UX, print & environmental design — physical-first creative studio in Lahore." },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/creative-design" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schemaData) },
    ],
  }),
  component: CreativeDesignService,
});

function CreativeDesignService() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      <Nav ready={true} />

      {/* ── Hero ─────────────────────────────────── */}
      <header className="pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-surface text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute">
            <span className="size-1 rounded-full bg-accent-mint" /> Creative Studio
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-balance">
            Design for the{" "}
            <span className="font-serif italic text-accent-mint">real world.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            Brand identity, graphic design, UI/UX and environmental design — a physical-first creative studio that designs for production, not just screens.
          </p>
          <a
            href={wa("Hi ADS DOT COM! I'm looking for creative design services. Please send me a quote.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-md"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z"/></svg>
            Start a Project on WhatsApp
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
                  Start a Project →
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
