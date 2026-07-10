import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/page-shell";
import printing from "@/assets/printing.jpg";
import fabModular from "@/assets/fab-modular.jpg";
import fabVenue from "@/assets/fab-venue.jpg";
import events from "@/assets/events.jpg";
import creative from "@/assets/creative.jpg";

export const Route = createFileRoute("/services/")({
  head: ()  => ({
    meta: [
      { title: "Services — Outdoor Advertising, Printing, Fabrication & Events | ADS DOT COM" },
      { name: "description", content: "Six integrated services: outdoor advertising, precision printing, spatial fabrication, rigging & installation, event production and creative design. All in-house, Lahore Pakistan." },
      { property: "og:title", content: "Services | ADS DOT COM" },
      { property: "og:description", content: "Six integrated services built in-house since 2006. Outdoor, print, fabrication, installation, events and creative direction." },
      { property: "og:url", content: "https://adsdotcom.net/services" },
    ],
    links: [
      { rel: "canonical", href: "https://adsdotcom.net/services" },
    ],
  }),
  component: ServicesPage,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setShown(true); io.disconnect(); }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

const slugToPath: Record<string, string> = {
  outdoor: "/services/outdoor-advertising",
  printing: "/services/printing-services",
  fabrication: "/services/fabrication-installation",
  installation: "/services/fabrication-installation",
  events: "/services/event-management",
  creative: "/services/creative-development",
  website: "/services/website-development",
};

const ArrowRight = () => (
  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const services = [
  {
    id: "01",
    slug: "outdoor",
    color: "accent-blue",
    title: "Outdoor Advertising",
    tagline: "Billboards, transit & ambient — commanding presence at scale.",
    desc: "Our founding division since 2006. We design, produce, place, and maintain outdoor advertising installations across Pakistan. From single-site billboards to multi-city corridor campaigns.",
    image: fabVenue,
    capabilities: [
      { name: "Billboard Hoarding", note: "Single, double & tri-vision formats" },
      { name: "Transit Advertising", note: "Buses, bus stops & shelters" },
      { name: "Street Furniture", note: "Benches, kiosks & pedestrian signage" },
      { name: "Logo Sign Plates", note: "Branded municipal & directional" },
    ],
    stats: [{ v: "20+", l: "Years Operating" }, { v: "100s", l: "Sites Managed" }, { v: "Nationwide", l: "Coverage" }],
  },
  {
    id: "02",
    slug: "printing",
    color: "accent-yellow",
    title: "Printing Services",
    tagline: "UV, DTF, Flex, Roland & Offset — every format in-house.",
    desc: "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland and Offset printing — all produced in our own print facility. Every substrate, every format, every size.",
    image: printing,
    capabilities: [
      { name: "UV Roll-to-Roll & DTF", note: "Flexible media & transfers" },
      { name: "UV Flatbed", note: "Direct on rigid boards & panels" },
      { name: "Digital Flex & Roland", note: "Large-format banners & graphics" },
      { name: "Offset Printing", note: "Brochures, catalogues, packaging" },
    ],
    stats: [{ v: "12m", l: "Max Format Width" }, { v: "6", l: "Print Technologies" }, { v: "100%", l: "In-house Press" }],
  },
  {
    id: "03",
    slug: "fabrication",
    color: "accent-coral",
    title: "Fabrication & Installation",
    tagline: "Billboards, signage, 3D letters — built and installed.",
    desc: "Billboard fabrication, custom signage, 3D sign boards and stainless steel letters — all designed, fabricated and installed in-house by our certified crew. Zero subcontractors.",
    image: fabModular,
    capabilities: [
      { name: "Billboard Structures", note: "Single, double & tri-vision" },
      { name: "Custom Signage", note: "Illuminated & architectural" },
      { name: "3D Sign Boards", note: "Acrylic, foam & composite" },
      { name: "Stainless Steel Letters", note: "Brushed, polished & backlit" },
    ],
    stats: [{ v: "In-house", l: "Full Workshop" }, { v: "Custom", l: "Every Build" }, { v: "Zero", l: "Subcontractors" }],
  },
  {
    id: "04",
    slug: "events",
    color: "accent-purple",
    title: "Event Management",
    tagline: "Weddings, birthdays, corporate & exhibitions.",
    desc: "Complete event management from brief to breakdown — weddings, shadi events, birthdays, corporate dinners, product launches and exhibition stalls. Full décor, stage setup and branded environments.",
    image: events,
    capabilities: [
      { name: "Weddings & Shadi Events", note: "Complete décor & stage" },
      { name: "Birthday Celebrations", note: "Themed setups & backdrops" },
      { name: "Corporate Events", note: "Branded environments & stages" },
      { name: "Exhibition Stalls", note: "Custom booths & displays" },
    ],
    stats: [{ v: "Turnkey", l: "Delivery" }, { v: "All Venues", l: "Coverage" }, { v: "Custom", l: "Every Event" }],
  },
  {
    id: "05",
    slug: "creative",
    color: "accent-mint",
    title: "Creative Design",
    tagline: "Brand identity, graphic design and UI/UX.",
    desc: "Brand identity systems, graphic design, UI/UX, environmental design — a physical-first creative studio that designs for production, not just screens.",
    image: creative,
    capabilities: [
      { name: "Brand Identity & Logos", note: "Physical visual language" },
      { name: "Graphic Design", note: "Print-ready marketing materials" },
      { name: "UI/UX Design", note: "Websites & app interfaces" },
      { name: "Environmental Design", note: "Spatial graphics & wayfinding" },
    ],
    stats: [{ v: "End-to-end", l: "Studio Direction" }, { v: "Physical", l: "Every Output" }, { v: "Bespoke", l: "No Templates" }],
  },
  {
    id: "06",
    slug: "website",
    color: "accent-blue",
    title: "Website Development",
    tagline: "Fast, modern websites that work for your business.",
    desc: "Business websites, e-commerce stores, landing pages and web apps — built with modern technology, optimised for search engines and designed to convert visitors into leads.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
    capabilities: [
      { name: "Business Websites", note: "5–15 pages, mobile responsive" },
      { name: "E-commerce Stores", note: "Product catalogue & payments" },
      { name: "Landing Pages", note: "High-conversion, fast load" },
      { name: "Web Applications", note: "Custom functionality & dashboards" },
    ],
    stats: [{ v: "SEO", l: "Optimised" }, { v: "Mobile", l: "First" }, { v: "Fast", l: "Load Time" }],
  },
];

/* ─── SERVICE CARD ─────────────────────────────────────────────────────── */
function ServiceBlock({ s, reverse }: { s: typeof services[0]; reverse: boolean }) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center transition-all duration-1000 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Image */}
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lift border border-ink/5">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          <div className="absolute top-5 left-5 flex gap-2">
            <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-ink">{s.id}</span>
            <span className={`px-2.5 py-1 rounded-full bg-${s.color} text-ink text-[10px] font-bold uppercase tracking-wider`}>{s.title}</span>
          </div>
        </div>
        {/* Floating stat bar */}
        <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-3 gap-2 p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-ink/5 shadow-soft">
          {s.stats.map((st) => (
            <div key={st.l} className="text-center">
              <div className="text-base font-semibold text-ink">{st.v}</div>
              <div className="text-[9px] text-ink-mute uppercase tracking-wider mt-0.5">{st.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`pt-8 lg:pt-0 space-y-6 ${reverse ? "lg:order-1" : ""}`}>
        <div>
          <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${s.color} mb-2`}>Service {s.id}</div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
            {s.title}
          </h2>
          <p className="mt-1 font-serif italic text-ink-soft text-lg">{s.tagline}</p>
        </div>
        <p className="text-ink-soft leading-relaxed">{s.desc}</p>
        <ul className="space-y-2.5">
          {s.capabilities.map((c) => (
            <li key={c.name} className="flex items-center gap-3 group p-3 rounded-2xl hover:bg-surface transition-colors cursor-default">
              <div className={`size-2 rounded-full bg-${s.color} shrink-0`} />
              <div className="min-w-0 flex-1">
                <span className="text-sm font-medium text-ink">{c.name}</span>
                <span className="text-xs text-ink-mute ml-2">— {c.note}</span>
              </div>
              <svg className="size-3.5 text-ink-mute opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 flex-wrap">
          <a
            href={`https://wa.me/923349955475`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform"
          >
            WhatsApp Us <ArrowRight />
          </a>
          <a
            href={slugToPath[s.slug]}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink/15 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors"
          >
            Full details <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────────── */
function ServicesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-4 bg-surface overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(oklch(0.185 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.185 0.01 60) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-white/60 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute animate-reveal-up">
            <span className="size-1 rounded-full bg-accent-blue" /> What We Do
          </div>
          <h1 className="text-4xl md:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-balance animate-reveal-up" style={{ animationDelay: "80ms" }}>
            Six divisions. <span className="font-serif italic text-accent-blue">One integrated</span> studio.
          </h1>
          <p className="mt-5 text-ink-soft text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-reveal-up" style={{ animationDelay: "160ms" }}>
            From the first billboard we ever hung in 2006 to complex multi-city brand activations today — every service we offer is produced in-house, with zero subcontractors.
          </p>

          {/* Quick-nav pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 animate-reveal-up" style={{ animationDelay: "240ms" }}>
            {services.map((s) => (
              <button
                key={s.slug}
                onClick={() => {
                  setActive(s.slug);
                  document.getElementById(s.slug)?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={`px-4 py-2 rounded-full border text-[12px] font-semibold transition-all ${active === s.slug ? "bg-ink text-canvas border-ink" : "border-ink/10 text-ink-soft hover:border-ink/30 hover:text-ink"}`}
              >
                {s.id} · {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-32">
        {services.map((s, i) => (
          <div key={s.slug} id={s.slug}>
            <ServiceBlock s={s} reverse={i % 2 !== 0} />
          </div>
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="px-4 pb-24 max-w-4xl mx-auto">
        <div className="relative bg-ink text-canvas rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden grain-overlay">
          <div className="text-[10px] uppercase font-bold tracking-widest text-canvas/40 mb-4">Ready to build?</div>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Every campaign starts<br />
            <span className="font-serif italic text-accent-yellow">with a conversation.</span>
          </h3>
          <p className="text-canvas/60 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Tell us your brief. We'll walk you through which services, materials, and approach will deliver the best result for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@adsdotcom.net"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-canvas text-ink rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform">
              info@adsdotcom.net <ArrowRight />
            </a>
            <a href="tel:+923349955475"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors">
              +92 334 9955475
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
