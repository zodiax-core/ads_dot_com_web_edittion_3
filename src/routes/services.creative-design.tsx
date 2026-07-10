import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/services/creative-design")({
  head: () => ({
    meta: [
      { title: "Creative Design in Lahore | ADS DOT COM" },
      { name: "description", content: "Brand identity, graphic design, UI/UX and environmental design in Lahore. Physical-first creative studio designing for production, not just screens." },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/creative-design" }],
  }),
  component: CreativeDesignService,
});

const SUB = [
  {
    title: "Brand Identity & Strategy",
    desc: "More than just a logo — we develop comprehensive brand systems encompassing visual guidelines, tone of voice, typography, and core messaging to ensure your brand resonates across all touchpoints.",
    images: [
      "/gallery/creative-design-images/design-1.jpeg",
      "/gallery/creative-design-images/design-2.jpeg",
      "/gallery/creative-design-images/design-3.png",
    ],
    reverse: false,
    accent: "accent-mint",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric interface design for web and mobile. We map out user journeys, create wireframes, and deliver high-fidelity prototypes that balance aesthetics with frictionless usability.",
    images: [
      "/gallery/creative-design-images/design-4.jpg",
      "/gallery/creative-design-images/design-5.jpg",
      "/gallery/creative-design-images/design-6.jpg",
    ],
    reverse: true,
    accent: "accent-blue",
  },
  {
    title: "Print & Packaging Design",
    desc: "Physical design that feels as good as it looks. From premium corporate brochures to innovative retail packaging, our designs are optimised for real-world printing and fabrication.",
    images: [
      "/gallery/creative-design-images/design-7.jpeg",
      "/gallery/creative-design-images/design-8.jpeg",
      "/gallery/creative-design-images/design-9.jpeg",
    ],
    reverse: false,
    accent: "accent-coral",
  },
  {
    title: "Environmental & Spatial Design",
    desc: "Translating your brand into physical space. We design office interiors, retail environments, and wayfinding systems that turn static spaces into immersive brand experiences.",
    images: [
      "/gallery/creative-design-images/design-10.jpg",
      "/gallery/creative-design-images/design-11.jpg",
      "/gallery/creative-design-images/design-1.jpeg",
    ],
    reverse: true,
    accent: "accent-purple",
  },
];

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
                <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lift border border-ink/5 group">
                  <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-ink">0{idx + 1}</span>
                  </div>
                </div>
                {s.images.slice(1).map((img) => (
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
