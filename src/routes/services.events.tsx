import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

import marry1 from "@/assets/event-management-images/Marriage-1.avif";
import wed2 from "@/assets/event-management-images/Wedding-2.webp";
import wed3 from "@/assets/event-management-images/Wedding-3.jpg";
import bday1 from "@/assets/event-management-images/Birthday-1.jpg";
import bday2 from "@/assets/event-management-images/Birthday-2.jpg";
import bday3 from "@/assets/event-management-images/Birthday-3.jpg";
import pres1 from "@/assets/event-management-images/Presestation-1.jpg";
import pres2 from "@/assets/event-management-images/Presentation-2.jpg";
import pres3 from "@/assets/event-management-images/Presentation-3.jpg";
import stall1 from "@/assets/event-management-images/Stalls-1.jpg";
import stall2 from "@/assets/event-management-images/stalls-2.jpg";
import stall3 from "@/assets/event-management-images/Stalls-3.webp";

const phone = "923349955475";
const wa = (msg: string) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

const SUB = [
  {
    title: "Weddings & Shadi Events",
    desc: "Bespoke wedding and shadi event production. We handle end-to-end décor, floral arrangements, stage setups, lighting and ambiance to create unforgettable memories tailored precisely to your vision.",
    images: [marry1, wed2, wed3],
    reverse: false,
    accent: "accent-purple",
    waMsg: "Hi ADS DOT COM! I'm looking to book event management for a Wedding/Shadi. Please send me details and a quote.",
  },
  {
    title: "Birthday Parties",
    desc: "From intimate gatherings to grand celebrations — balloons, themed stage sets, photo walls, and custom lighting designed to make every birthday feel extraordinary.",
    images: [bday1, bday2, bday3],
    reverse: true,
    accent: "accent-coral",
    waMsg: "Hi ADS DOT COM! I'm interested in Birthday Party event management. Please send me a quote.",
  },
  {
    title: "Corporate & Presentation Events",
    desc: "High-end corporate events, product launches, and presentations. Seamless AV integration, premium stage builds, custom branded backdrops and professional lighting for polished results.",
    images: [pres1, pres2, pres3],
    reverse: false,
    accent: "accent-blue",
    waMsg: "Hi ADS DOT COM! I need event management for a Corporate/Presentation event. Please send me a quote.",
  },
  {
    title: "Exhibitions & Branded Stalls",
    desc: "Stand out on the expo floor. We design, fabricate, and install custom exhibition stalls and brand activations that drive foot traffic and facilitate meaningful business engagement.",
    images: [stall1, stall2, stall3],
    reverse: true,
    accent: "accent-mint",
    waMsg: "Hi ADS DOT COM! I'm interested in Exhibition Stall design & setup. Please send me a quote.",
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
        { "@type": "ListItem", "position": 3, "name": "Event Management", "item": "https://adsdotcom.net/services/events" },
      ],
    },
    {
      "@type": "Service",
      "name": "Event Management",
      "url": "https://adsdotcom.net/services/events",
      "description": "Weddings, corporate events, birthday parties, exhibitions and branded stalls in Lahore. Full décor, stage setup and event management.",
      "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
      "areaServed": { "@type": "AdministrativeArea", "name": "Lahore" },
      "serviceType": "Event Management",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you manage outdoor weddings in Lahore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle full décor, stage, lighting and logistics for outdoor and indoor weddings and shadi events across Lahore." } },
        { "@type": "Question", "name": "Can you set up exhibition stalls?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We design, fabricate and install custom branded exhibition stalls for expos and trade shows." } },
      ],
    },
  ],
};

export const Route = createFileRoute("/services/events")({
  head: () => ({
    meta: [
      { title: "Event Management in Lahore | Weddings, Corporate & Exhibitions | ADS DOT COM" },
      { name: "description", content: "Professional event management in Lahore: weddings, shadi events, birthday parties, corporate launches & exhibition stalls. Full décor, stage & lighting — turnkey delivery." },
      { property: "og:title", content: "Event Management Lahore | ADS DOT COM" },
      { property: "og:description", content: "Weddings, shadi events, birthdays, corporate events & stalls in Lahore — turnkey delivery, full décor & stage setup." },
      { property: "og:url", content: "https://adsdotcom.net/services/events" },
      { property: "og:image", content: "https://adsdotcom.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Event Management Lahore | ADS DOT COM" },
      { name: "twitter:description", content: "Weddings, birthdays, corporate events & exhibition stalls — full turnkey event management in Lahore." },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/events" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schemaData) },
    ],
  }),
  component: EventsService,
});

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
          <a
            href={wa("Hi ADS DOT COM! I need a quote for event management. Please get in touch.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-md"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z"/></svg>
            Plan Your Event on WhatsApp
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
                  href={wa(s.waMsg)}
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
