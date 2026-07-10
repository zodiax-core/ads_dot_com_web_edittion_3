import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/services/events")({
  head: () => ({
    meta: [
      { title: "Event Management in Lahore | ADS DOT COM" },
      { name: "description", content: "Weddings, corporate events, birthdays, stalls & exhibitions in Lahore. Full décor, stage setup and event management from brief to breakdown." },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/events" }],
  }),
  component: EventsService,
});

const SUB = [
  {
    title: "Weddings & Shadi Events",
    desc: "Bespoke wedding and shadi event production. We handle end-to-end décor, floral arrangements, stage setups, lighting and ambiance to create unforgettable memories tailored precisely to your vision.",
    images: [
      "/gallery/event-management-images/Marriage-1.avif",
      "/gallery/event-management-images/Wedding-2.webp",
      "/gallery/event-management-images/Wedding-3.jpg",
    ],
    reverse: false,
    accent: "accent-purple",
  },
  {
    title: "Birthday Parties",
    desc: "From intimate gatherings to grand celebrations — balloons, themed stage sets, photo walls, and custom lighting designed to make every birthday feel extraordinary.",
    images: [
      "/gallery/event-management-images/Birthday-1.jpg",
      "/gallery/event-management-images/Birthday-2.jpg",
      "/gallery/event-management-images/Birthday-3.jpg",
    ],
    reverse: true,
    accent: "accent-coral",
  },
  {
    title: "Corporate & Presentation Events",
    desc: "High-end corporate events, product launches, and presentations. Seamless AV integration, premium stage builds, custom branded backdrops and professional lighting for polished results.",
    images: [
      "/gallery/event-management-images/Presestation-1.jpg",
      "/gallery/event-management-images/Presentation-2.jpg",
      "/gallery/event-management-images/Presentation-3.jpg",
    ],
    reverse: false,
    accent: "accent-blue",
  },
  {
    title: "Exhibitions & Branded Stalls",
    desc: "Stand out on the expo floor. We design, fabricate, and install custom exhibition stalls and brand activations that drive foot traffic and facilitate meaningful business engagement.",
    images: [
      "/gallery/event-management-images/Stalls-1.jpg",
      "/gallery/event-management-images/stalls-2.jpg",
      "/gallery/event-management-images/Stalls-3.webp",
    ],
    reverse: true,
    accent: "accent-mint",
  },
];

function EventsService() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      <Nav ready={true} />

      {/* ── Hero ─────────────────────────────────── */}
      <header className="pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-surface text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute">
            <span className="size-1 rounded-full bg-accent-purple" /> Live Production
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-balance">
            Events managed to{" "}
            <span className="font-serif italic text-accent-purple">perfection.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            Weddings, corporate launches, birthday parties, exhibitions and branded stalls — full décor, stage setup and event management from the initial brief to the final breakdown.
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
                  Plan Your Event →
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
