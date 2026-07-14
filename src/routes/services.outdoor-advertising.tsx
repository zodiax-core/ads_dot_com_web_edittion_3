import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { ServiceImageGrid } from "@/components/ServiceImageGrid";

import bb1 from "@/assets/fabrication-images/birdboard-1.webp";
import bb2 from "@/assets/fabrication-images/birdboard-2.webp";
import bb3 from "@/assets/fabrication-images/birdboard-3.jpg";
import sg1 from "@/assets/fabrication-images/Signage-1.jpg";
import fabVenue from "@/assets/fab-venue.jpg";
import projectLumos from "@/assets/project-lumos.jpg";
import projectMonolith from "@/assets/project-monolith.jpg";

const phone = "923349955475";
const wa = (msg: string) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/services/outdoor-advertising")({
  head: () => ({
    meta: [
      { title: "Outdoor Advertising in Lahore | ADS DOT COM" },
      { name: "description", content: "Billboard hoarding, transit & ambient outdoor advertising in Lahore, Pakistan. Get a quote from ADS DOT COM — operating since 2006 with nationwide coverage." },
      { property: "og:title", content: "Outdoor Advertising in Lahore | ADS DOT COM" },
      { property: "og:description", content: "Billboard hoarding, transit advertising and street furniture across Pakistan. In-house production since 2006. Get a quote today." },
      { property: "og:url", content: "https://adsdotcom.net/services/outdoor-advertising" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/outdoor-advertising" }],
  }),
  component: OutdoorAdvertisingService,
});

const SUB = [
  {
    title: "Billboard Hoarding",
    desc: "Single, double & tri-vision formats. We design, fabricate and install billboard structures — single-face, double-sided and tri-vision rotating formats. Steel-frame construction with UV-stable vinyl production handled fully in-house.",
    images: [bb1, bb2, bb3],
    reverse: false,
    accent: "accent-blue",
    waMsg: "Hi ADS DOT COM! I'm interested in Billboard Hoarding outdoor advertising. Please send me a quote.",
  },
  {
    title: "Transit Advertising",
    desc: "Buses, bus stops & shelters. Fleet wraps, bus back panels, bus stop advertising and shelter branding. We manage artwork production, printing and installation across Lahore and other major cities.",
    images: [fabVenue, projectLumos, projectMonolith],
    reverse: true,
    accent: "accent-coral",
    waMsg: "Hi ADS DOT COM! I'm interested in Transit Advertising (buses, shelters). Please send me a quote.",
  },
  {
    title: "Street Furniture",
    desc: "Benches, kiosks & pedestrian signage. Branded street benches, information kiosks and pedestrian-level directional signage. Ideal for campus, commercial district and municipal branding programmes.",
    images: [sg1, bb1, bb2],
    reverse: false,
    accent: "accent-mint",
    waMsg: "Hi ADS DOT COM! I'm interested in Street Furniture advertising (benches, kiosks). Please send me a quote.",
  },
  {
    title: "Logo Sign Plates",
    desc: "Branded municipal & directional signs. Fabricated identification signs, corporate name plates and wayfinding systems. Available in aluminium, acrylic and weathering steel with illuminated options.",
    images: [bb3, fabVenue, sg1],
    reverse: true,
    accent: "accent-yellow",
    waMsg: "Hi ADS DOT COM! I'm interested in Logo Sign Plates / branded signage. Please send me a quote.",
  },
];

function OutdoorAdvertisingService() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      <Nav ready={true} />

      {/* ── Hero ─────────────────────────────────── */}
      <header className="pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-surface text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute">
            <span className="size-1 rounded-full bg-accent-blue" /> Outdoor Media
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-balance">
            Commanding presence at{" "}
            <span className="font-serif italic text-accent-blue">scale.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            Outdoor advertising remains the most undeniable form of brand communication. Since 2006, we've built a reputation for dominating the physical landscape of Lahore and across Pakistan.
          </p>
          <a
            href={wa("Hi ADS DOT COM! I need a quote for outdoor advertising. Please get in touch.")}
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
                  Start Your Campaign →
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
