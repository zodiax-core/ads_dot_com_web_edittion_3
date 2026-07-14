import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { ServiceImageGrid } from "@/components/ServiceImageGrid";

import bb1 from "@/assets/fabrication-images/birdboard-1.webp";
import bb2 from "@/assets/fabrication-images/birdboard-2.webp";
import bb3 from "@/assets/fabrication-images/birdboard-3.jpg";
import bb4 from "@/assets/fabrication-images/birdboard-4.jpg";
import sg1 from "@/assets/fabrication-images/Signage-1.jpg";
import sg2 from "@/assets/fabrication-images/Signage-2.jpg";
import sg3 from "@/assets/fabrication-images/Signage-3.jpg";
import sg4 from "@/assets/fabrication-images/Signage-4.jpg";
import sd1 from "@/assets/fabrication-images/3D-signboards-1.jpg";
import sd2 from "@/assets/fabrication-images/3D-signboards-2.jpg";
import sd3 from "@/assets/fabrication-images/3D-signboards-3.webp";
import ss1 from "@/assets/fabrication-images/ss-singage-1.jpg";
import ss2 from "@/assets/fabrication-images/ss-singage-2.jpg";
import ss3 from "@/assets/fabrication-images/ss-singage-3.jpg";
import ss4 from "@/assets/fabrication-images/ss-singage-4.webp";

const phone = "923349955475";
const wa = (msg: string) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

const SUB = [
  {
    title: "Billboard Hoarding",
    desc: "Massive, high-impact outdoor billboard structures engineered for structural integrity and maximum visibility. We handle everything from approvals and foundation pouring to the final bolt.",
    images: [bb1, bb2, bb3, bb4],
    reverse: false,
    accent: "accent-coral",
    waMsg: "Hi ADS DOT COM! I'm interested in Billboard Hoarding fabrication & installation. Please send me a quote.",
  },
  {
    title: "Custom Signage",
    desc: "Bespoke architectural signage for corporate campuses, retail storefronts, and wayfinding systems. Designed to integrate seamlessly with your environment while reinforcing your brand identity.",
    images: [sg1, sg2, sg3, sg4],
    reverse: true,
    accent: "accent-blue",
    waMsg: "Hi ADS DOT COM! I'm interested in Custom Signage fabrication & installation. Please send me a quote.",
  },
  {
    title: "3D Sign Boards",
    desc: "Dimensional signage that literally stands out. We fabricate illuminated and non-illuminated 3D elements using acrylic, aluminum, and advanced LED systems for day and night impact.",
    images: [sd1, sd2, sd3],
    reverse: false,
    accent: "accent-purple",
    waMsg: "Hi ADS DOT COM! I'm interested in 3D Sign Boards. Please send me a quote.",
  },
  {
    title: "3D Stainless Steel Letters",
    desc: "Premium, highly durable stainless steel lettering for a sophisticated corporate look. Available in brushed, polished, or titanium-coated finishes, often paired with elegant halo backlighting.",
    images: [ss1, ss2, ss3, ss4],
    reverse: true,
    accent: "accent-yellow",
    waMsg: "Hi ADS DOT COM! I'm interested in 3D Stainless Steel Letters. Please send me a quote.",
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
        { "@type": "ListItem", "position": 3, "name": "Fabrication & Installation", "item": "https://adsdotcom.net/services/fabrication" },
      ],
    },
    {
      "@type": "Service",
      "name": "Fabrication & Installation",
      "url": "https://adsdotcom.net/services/fabrication",
      "description": "Billboard fabrication, custom signage, 3D sign boards and stainless steel letters — designed, fabricated and installed in-house in Lahore.",
      "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
      "areaServed": { "@type": "Country", "name": "Pakistan" },
      "serviceType": "Fabrication and Installation",
    },
  ],
};

export const Route = createFileRoute("/services/fabrication")({
  head: () => ({
    meta: [
      { title: "Billboard & Signage Fabrication in Lahore | 3D Signs | ADS DOT COM" },
      { name: "description", content: "In-house billboard fabrication, custom signage, 3D sign boards & stainless steel letters in Lahore. Zero subcontractors — designed, built & installed by our own crew." },
      { property: "og:title", content: "Fabrication & Installation in Lahore | ADS DOT COM" },
      { property: "og:description", content: "Billboards, custom signage, 3D sign boards & stainless steel letters — all in-house in Lahore. No subcontractors." },
      { property: "og:url", content: "https://adsdotcom.net/services/fabrication" },
      { property: "og:image", content: "https://adsdotcom.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fabrication & Installation Lahore | ADS DOT COM" },
      { name: "twitter:description", content: "Billboards, 3D signs, stainless steel letters — built & installed in-house in Lahore." },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/fabrication" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schemaData) },
    ],
  }),
  component: FabricationService,
});

function FabricationService() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      <Nav ready={true} />

      {/* ── Hero ─────────────────────────────────── */}
      <header className="pt-40 pb-20 px-4 bg-ink text-canvas relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bb1} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-canvas/20 bg-canvas/10 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-canvas/80">
            <span className="size-1 rounded-full bg-accent-coral" /> Fabrication & Installation
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-balance text-canvas">
            Where geometry meets the{" "}
            <span className="font-serif italic text-accent-coral">physical plane.</span>
          </h1>
          <p className="mt-6 text-canvas/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Billboards, 3D sign boards, stainless steel letters, custom signage — all designed, fabricated and installed in-house by our own crew. Zero subcontractors.
          </p>
          <a
            href={wa("Hi ADS DOT COM! I need a quote for fabrication & installation services. Please get in touch.")}
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
      <section className="py-16 md:py-24 px-4 bg-surface">
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
