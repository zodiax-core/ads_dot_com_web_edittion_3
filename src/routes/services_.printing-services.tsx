import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { ServiceThumbnailGallery } from "@/components/ServiceThumbnailGallery";

// Printing service images
import uvRoll1 from "@/assets/printing-service-images/uv-roll-to-roll-1.jpg";
import uvRoll2 from "@/assets/printing-service-images/uv-roll-to-roll-2.jpg";
import uvRoll3 from "@/assets/printing-service-images/uv-roll-to-roll-3.webp";
import uvDtf1 from "@/assets/printing-service-images/UV-DTF-1.jpg";
import uvDtf2 from "@/assets/printing-service-images/UV-DTF-2.webp";
import uvDtf3 from "@/assets/printing-service-images/UV-DTF-3.jpg";
import uvDtf4 from "@/assets/printing-service-images/UV-DTF-4.jpg";
import uvFlat1 from "@/assets/printing-service-images/UV-Flatbed-1.avif";
import uvFlat2 from "@/assets/printing-service-images/UV-Flatbed-2.webp";
import uvFlat3 from "@/assets/printing-service-images/UV-Flatbed-3.webp";
import flex1 from "@/assets/printing-service-images/Flex-printing-1.jpg";
import flex2 from "@/assets/printing-service-images/Flex-printing-2.jpg";
import flex3 from "@/assets/printing-service-images/Flex-printing-3.avif";
import rolland1 from "@/assets/printing-service-images/Digital-Rolland-Printing-1.jpg";
import offset1 from "@/assets/printing-service-images/offset-printing-1.jpg";
import offset2 from "@/assets/printing-service-images/offset-printing-2.avif";
import offset3 from "@/assets/printing-service-images/offset-printing-3.jpg";
import offset4 from "@/assets/printing-service-images/offset-printing-4.jpg";

export const Route = createFileRoute("/services_/printing-services")({
  head: () => ({
    meta: [
      { title: "Printing Services in Lahore | UV, DTF, Flex, Offset | ADS DOT COM" },
      { name: "description", content: "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland & Offset printing in Lahore. Professional printing services by ADS DOT COM. Get a quote today." },
      { property: "og:url", content: "https://adsdotcom.net/services/printing-services" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/printing-services" }],
  }),
  component: PrintingServicesPage,
});

const WA = "https://wa.me/923349955475";

const services = [
  {
    id: "01",
    slug: "uv-roll-to-roll",
    title: "UV Roll to Roll",
    color: "accent-blue",
    tagline: "Continuous UV printing on flexible media — vibrant, durable, fast.",
    desc: "UV Roll-to-Roll printing uses ultraviolet light to instantly cure inks on flexible substrates. Perfect for banners, vehicle wraps, window graphics, PVC flex and backlit films. The UV-cured finish is scratch-resistant, fade-proof and ready for immediate use.",
    images: [uvRoll1, uvRoll2, uvRoll3],
    imageAlts: ["UV Roll-to-Roll printer outputting large vinyl banner", "UV printed flex banner on roll", "Wide format UV roll to roll machine in operation"],
    specs: ["Substrates: PVC flex, vinyl, mesh, backlit film", "Width: up to 3.2m continuous", "UV-cured inks — scratch and fade resistant", "Indoor & outdoor applications"],
  },
  {
    id: "02",
    slug: "uv-dtf",
    title: "UV DTF",
    color: "accent-yellow",
    tagline: "Transfer-ready UV prints on any hard surface.",
    desc: "UV DTF (Direct to Film) printing creates transfer stickers that can be applied to virtually any surface — glass, metal, wood, ceramics, phone cases, packaging and more. No heat required. The transfer is crystal-clear with sharp detail and a premium glossy finish.",
    images: [uvDtf1, uvDtf2, uvDtf3, uvDtf4],
    imageAlts: ["UV DTF printed transfer stickers on glass surface", "UV DTF transfer film output", "UV DTF prints on various products", "Detailed UV DTF printing close up"],
    specs: ["Applies to: glass, metal, wood, ceramics, plastic", "No heat press required", "Crystal clear transfer film", "Ideal for product branding, packaging & gifts"],
  },
  {
    id: "03",
    slug: "uv-flatbed",
    title: "UV Flatbed",
    color: "accent-coral",
    tagline: "Direct printing on rigid boards, panels and objects.",
    desc: "UV Flatbed printing prints directly onto rigid flat surfaces — aluminium composite, acrylic, wood boards, foamex, glass and more. No substrate curling, no wrapping. Exceptional detail with raised ink textures available. Ideal for signage, displays, exhibition panels and architectural graphics.",
    images: [uvFlat1, uvFlat2, uvFlat3],
    imageAlts: ["UV Flatbed printer printing directly on acrylic board", "UV flatbed output on aluminium composite panel", "UV flatbed printing on rigid display board"],
    specs: ["Prints directly on rigid substrates", "ACM, acrylic, foamex, wood, glass", "Optional raised ink texture (varnish effect)", "Ideal for signage, displays & exhibition panels"],
  },
  {
    id: "04",
    slug: "digital-flex",
    title: "Digital Flex Printing",
    color: "accent-mint",
    tagline: "Large-format flex banners for outdoor and events.",
    desc: "Digital Flex printing is the backbone of outdoor advertising in Pakistan. We produce high-resolution flex banners for billboards, hoarding panels, event backdrops, retail signage and shop fronts. Available in frontlit, backlit and mesh variants with UV-stable solvent inks.",
    images: [flex1, flex2, flex3],
    imageAlts: ["Large digital flex banner being printed for billboard use", "Flex printing machine outputting outdoor banner", "Digital flex print for event backdrop"],
    specs: ["Frontlit, backlit and mesh formats", "Up to 12m continuous print width", "UV-stable solvent inks for outdoor use", "Billboard hoarding, events, retail, shop fronts"],
  },
  {
    id: "05",
    slug: "digital-roland",
    title: "Digital Roland Printing",
    color: "accent-purple",
    tagline: "Precision colour printing with Roland's acclaimed technology.",
    desc: "Roland digital printers deliver exceptional colour accuracy and fine detail — ideal for short-run posters, point-of-sale graphics, brand materials and photographic prints. The ECO-SOL MAX ink system produces vivid, durable output on a wide range of media.",
    images: [rolland1],
    imageAlts: ["Roland digital printer in operation producing high quality colour output"],
    specs: ["Roland ECO-SOL MAX ink system", "High colour accuracy and fine detail", "Short-run posters, POS, brand materials", "Wide media compatibility"],
  },
  {
    id: "06",
    slug: "offset",
    title: "Offset Printing",
    color: "accent-blue",
    tagline: "The gold standard for high-volume, high-quality print.",
    desc: "Offset printing delivers the highest quality results for mass print production — corporate brochures, catalogues, stationery, packaging, books and magazines. Precise Pantone colour matching, rich ink density and superior paper quality make offset the choice for premium printed materials.",
    images: [offset1, offset2, offset3, offset4],
    imageAlts: ["Offset printing press in operation", "Offset printed corporate brochures", "High quality offset print output", "Offset press producing marketing collateral"],
    specs: ["Pantone & CMYK colour matching", "Paper: coated, uncoated, textured, specialty", "Applications: brochures, catalogues, packaging, stationery", "Minimum runs from 500 copies"],
  },
];

function ImageGallery({ images, alts }: { images: string[]; alts: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3">
      <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-surface">
        <img src={images[active]} alt={alts[active]} className="w-full h-full object-cover" loading="eager" />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`size-16 rounded-xl overflow-hidden border-2 transition-all ${i === active ? "border-accent-blue" : "border-transparent opacity-60 hover:opacity-100"}`}>
              <img src={img} alt={alts[i]} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PrintingServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 bg-ink text-canvas overflow-hidden grain-overlay">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[11px] text-canvas/40 font-medium mb-8">
            <a href="/" className="hover:text-canvas/70 transition-colors">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-canvas/70 transition-colors">Services</a>
            <span>/</span>
            <span className="text-canvas/70">Printing Services</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-canvas/20 bg-canvas/10 text-[10px] uppercase tracking-[0.18em] font-bold text-canvas/60">
            <span className="size-1.5 rounded-full bg-accent-yellow" /> Printing Services
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">
            Professional Printing in <span className="font-serif italic text-accent-yellow">Lahore</span>
          </h1>
          <p className="text-canvas/60 text-base max-w-2xl mx-auto leading-relaxed">
            UV Roll-to-Roll · UV DTF · UV Flatbed · Digital Flex · Roland · Offset — every format, every substrate, all in-house.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
              WhatsApp for Quote
            </a>
            <a href="tel:+923349955475"
              className="inline-flex items-center gap-2 px-6 py-3 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors">
              +92 334 9955475
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <ServiceThumbnailGallery images={s.images} alts={s.imageAlts} />
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${s.color} mb-2`}>Service {s.id} of 6</div>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink">{s.title}</h2>
                  <p className="mt-2 font-serif italic text-ink-soft text-lg">{s.tagline}</p>
                </div>
                <p className="text-ink-soft leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className={`mt-1.5 size-1.5 rounded-full bg-${s.color} shrink-0`} />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                  Get Quote for {s.title}
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="px-4 pb-20 max-w-4xl mx-auto">
        <div className="bg-ink text-canvas rounded-[2.5rem] p-10 md:p-14 text-center grain-overlay">
          <h2 className="text-3xl font-medium mb-3">Not sure which print format you need?</h2>
          <p className="text-canvas/60 text-sm max-w-md mx-auto mb-8">Talk to our production team — we'll recommend the right format for your substrate, budget and application.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform">
              WhatsApp Us
            </a>
            <a href="mailto:info@adsdotcom.net"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors">
              info@adsdotcom.net
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
