import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/services/printing")({
  head: () => ({
    meta: [
      { title: "Printing Services in Lahore | ADS DOT COM" },
      { name: "description", content: "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland & Offset printing in Lahore. In-house printing division for large-format and precision output." },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/printing" }],
  }),
  component: PrintingService,
});

const SUB = [
  {
    title: "UV Roll to Roll",
    desc: "High-resolution, durable prints on flexible media. Perfect for backlit signs, vehicle wraps, and large-format displays that need to withstand the elements while maintaining vibrant colours.",
    images: [
      "/gallery/printing-service-images/uv-roll-to-roll-1.jpg",
      "/gallery/printing-service-images/uv-roll-to-roll-2.jpg",
      "/gallery/printing-service-images/uv-roll-to-roll-3.webp",
    ],
    reverse: false,
    accent: "accent-blue",
  },
  {
    title: "UV DTF (Direct to Film)",
    desc: "Innovative transfer printing that applies highly detailed, full-colour graphics to hard, irregular, or cylindrical surfaces. Ideal for custom packaging and promotional items.",
    images: [
      "/gallery/printing-service-images/UV-DTF-1.jpg",
      "/gallery/printing-service-images/UV-DTF-2.webp",
      "/gallery/printing-service-images/UV-DTF-3.jpg",
    ],
    reverse: true,
    accent: "accent-coral",
  },
  {
    title: "UV Flat Bed Printing",
    desc: "Direct-to-substrate printing on rigid materials like acrylic, wood, metal, and glass. UV curing ensures instant drying and extreme scratch resistance for premium architectural signage.",
    images: [
      "/gallery/printing-service-images/UV-Flatbed-1.avif",
      "/gallery/printing-service-images/UV-Flatbed-2.webp",
      "/gallery/printing-service-images/UV-Flatbed-3.webp",
    ],
    reverse: false,
    accent: "accent-purple",
  },
  {
    title: "Digital Flex Printing",
    desc: "Fast, cost-effective wide-format printing for massive outdoor hoardings, banners, and backdrops. Our industrial flex machines output thousands of square feet daily with precision colour matching.",
    images: [
      "/gallery/printing-service-images/Flex-printing-1.jpg",
      "/gallery/printing-service-images/Flex-printing-2.jpg",
      "/gallery/printing-service-images/Flex-printing-3.avif",
    ],
    reverse: true,
    accent: "accent-mint",
  },
  {
    title: "Digital Roland Printing",
    desc: "Unmatched photorealistic quality using advanced eco-solvent inks. The go-to choice for premium indoor graphics, fine art reproductions, and high-fidelity retail window displays.",
    images: [
      "/gallery/printing-service-images/Digital-Rolland-Printing-1.jpg",
      "/gallery/printing-service-images/uv-roll-to-roll-2.jpg",
    ],
    reverse: false,
    accent: "accent-yellow",
  },
  {
    title: "Offset Printing",
    desc: "High-volume traditional offset printing for corporate collateral, brochures, magazines, and packaging. Strict colour calibration ensures brand consistency across massive runs.",
    images: [
      "/gallery/printing-service-images/offset-printing-1.jpg",
      "/gallery/printing-service-images/offset-printing-2.avif",
      "/gallery/printing-service-images/offset-printing-3.jpg",
      "/gallery/printing-service-images/offset-printing-4.jpg",
    ],
    reverse: true,
    accent: "accent-blue",
  },
];

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
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                {s.images.slice(0, 1).map((img) => (
                  <div key={img} className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lift border border-ink/5 group">
                    <img src={img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-ink">0{idx + 1}</span>
                    </div>
                  </div>
                ))}
                {s.images.slice(1, 3).map((img) => (
                  <div key={img} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-ink/5 group">
                    <img src={img} alt={`${s.title} sample`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-5">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink">{s.title}</h2>
                <p className="text-ink-soft leading-relaxed text-lg">{s.desc}</p>
                <div className={`h-1 w-12 rounded-full bg-${s.accent}`} />
                <a
                  href="https://wa.me/923349955475"
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
