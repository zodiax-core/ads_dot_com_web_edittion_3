import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/services/fabrication")({
  head: () => ({
    meta: [
      { title: "Fabrication & Installation in Lahore | ADS DOT COM" },
      { name: "description", content: "Custom billboard, signage, 3D sign boards & stainless steel letter fabrication and installation in Lahore. Zero subcontractors — all in-house." },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/fabrication" }],
  }),
  component: FabricationService,
});

const SUB = [
  {
    title: "Billboard Hoarding",
    desc: "Massive, high-impact outdoor billboard structures engineered for structural integrity and maximum visibility. We handle everything from approvals and foundation pouring to the final bolt.",
    images: [
      "/gallery/fabrication-images/birdboard-1.webp",
      "/gallery/fabrication-images/birdboard-2.webp",
      "/gallery/fabrication-images/birdboard-3.jpg",
      "/gallery/fabrication-images/birdboard-4.jpg",
    ],
    reverse: false,
    accent: "accent-coral",
  },
  {
    title: "Custom Signage",
    desc: "Bespoke architectural signage for corporate campuses, retail storefronts, and wayfinding systems. Designed to integrate seamlessly with your environment while reinforcing your brand identity.",
    images: [
      "/gallery/fabrication-images/Signage-1.jpg",
      "/gallery/fabrication-images/Signage-2.jpg",
      "/gallery/fabrication-images/Signage-3.jpg",
      "/gallery/fabrication-images/Signage-4.jpg",
    ],
    reverse: true,
    accent: "accent-blue",
  },
  {
    title: "3D Sign Boards",
    desc: "Dimensional signage that literally stands out. We fabricate illuminated and non-illuminated 3D elements using acrylic, aluminum, and advanced LED systems for day and night impact.",
    images: [
      "/gallery/fabrication-images/3D-signboards-1.jpg",
      "/gallery/fabrication-images/3D-signboards-2.jpg",
      "/gallery/fabrication-images/3D-signboards-3.webp",
    ],
    reverse: false,
    accent: "accent-purple",
  },
  {
    title: "3D Stainless Steel Letters",
    desc: "Premium, highly durable stainless steel lettering for a sophisticated corporate look. Available in brushed, polished, or titanium-coated finishes, often paired with elegant halo backlighting.",
    images: [
      "/gallery/fabrication-images/ss-singage-1.jpg",
      "/gallery/fabrication-images/ss-singage-2.jpg",
      "/gallery/fabrication-images/ss-singage-3.jpg",
      "/gallery/fabrication-images/ss-singage-4.webp",
    ],
    reverse: true,
    accent: "accent-yellow",
  },
];

function FabricationService() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      <Nav ready={true} />

      {/* ── Hero ─────────────────────────────────── */}
      <header className="pt-40 pb-20 px-4 bg-ink text-canvas relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/gallery/fabrication-images/birdboard-1.webp"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
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
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lift border border-ink/5 group">
                  <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-ink">0{idx + 1}</span>
                  </div>
                </div>
                {s.images.slice(1, 3).map((img) => (
                  <div key={img} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-ink/5 group">
                    <img src={img} alt={`${s.title} detail`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
