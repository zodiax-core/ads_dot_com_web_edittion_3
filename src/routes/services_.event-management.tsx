import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";

import bday1 from "@/assets/event-management-images/Birthday-1.jpg";
import bday2 from "@/assets/event-management-images/Birthday-2.jpg";
import bday3 from "@/assets/event-management-images/Birthday-3.jpg";
import bday4 from "@/assets/event-management-images/Birthday-4.jpg";
import bday5 from "@/assets/event-management-images/Birthday-5.jpg";
import marry1 from "@/assets/event-management-images/Marriage-1.avif";
import wed2 from "@/assets/event-management-images/Wedding-2.webp";
import wed3 from "@/assets/event-management-images/Wedding-3.jpg";
import office1 from "@/assets/event-management-images/Office-1.jpg";
import pres1 from "@/assets/event-management-images/Presestation-1.jpg";
import pres2 from "@/assets/event-management-images/Presentation-2.jpg";
import pres3 from "@/assets/event-management-images/Presentation-3.jpg";
import pres4 from "@/assets/event-management-images/Presentation-4.jpg";
import stall1 from "@/assets/event-management-images/Stalls-1.jpg";
import stall2 from "@/assets/event-management-images/stalls-2.jpg";
import stall3 from "@/assets/event-management-images/Stalls-3.webp";
import stall4 from "@/assets/event-management-images/Stalls-4.jpg";

export const Route = createFileRoute("/services_/event-management")({
  head: () => ({
    meta: [
      { title: "Event Management in Lahore | Weddings, Corporate, Birthdays | ADS DOT COM" },
      { name: "description", content: "Professional event management in Lahore — weddings, corporate events, birthdays, exhibitions and stalls. Full decoration & setup by ADS DOT COM. Get a quote." },
      { property: "og:url", content: "https://adsdotcom.net/services/event-management" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/event-management" }],
  }),
  component: EventManagementPage,
});

const WA = "https://wa.me/923349955475";

const categories = [
  {
    id: "01", slug: "weddings", title: "Weddings & Shaadi Events", color: "accent-blue",
    tagline: "Your special day — styled to perfection.",
    desc: "From intimate Nikkah ceremonies to grand wedding receptions — we handle complete event décor, stage design, floral arrangements, lighting and branded setups. Every detail is planned and executed by our team so you can focus on the moments that matter.",
    images: [marry1, wed2, wed3],
    alts: ["Elegant wedding stage decoration with floral backdrop in Lahore", "Branded wedding reception setup with custom lighting and décor", "Shadi event stage with premium decoration and seating arrangement"],
  },
  {
    id: "02", slug: "birthdays", title: "Birthday Celebrations", color: "accent-coral",
    tagline: "Memorable birthdays — big or small.",
    desc: "Kids' parties, milestone birthdays, surprise setups — we create themed event environments with custom backdrops, balloon décor, table setups, lighting and props. Tell us the theme and we handle the rest.",
    images: [bday1, bday2, bday3, bday4, bday5],
    alts: ["Themed birthday party decoration with balloon arch", "Birthday event setup with custom backdrop and lighting", "Kids birthday party decoration in full setup", "Milestone birthday celebration décor with custom signage", "Surprise birthday party setup with themed decoration"],
  },
  {
    id: "03", slug: "corporate", title: "Corporate & Office Events", color: "accent-yellow",
    tagline: "Professional environments for serious occasions.",
    desc: "Annual dinners, award ceremonies, product launches, office parties and corporate milestones — we design and execute branded corporate event environments with stage setups, LED displays, branded backdrops and professional lighting.",
    images: [office1, pres1, pres2, pres3, pres4],
    alts: ["Corporate office event setup with branded backdrop", "Business presentation stage with branded setup", "Corporate award ceremony stage decoration", "Product launch event with LED backdrop and branded stage", "Professional corporate event décor and stage setup"],
  },
  {
    id: "04", slug: "stalls", title: "Exhibition Stalls & Branded Booths", color: "accent-mint",
    tagline: "Stand out at every exhibition and trade show.",
    desc: "Custom exhibition stalls, branded booths and display setups for trade shows, expos, melas and public events. We design and fabricate the structure, graphics and branding — then install it on-site at your event location.",
    images: [stall1, stall2, stall3, stall4],
    alts: ["Branded exhibition stall at trade show with custom signage", "Custom display booth at expo with graphics and lighting", "Exhibition stall fabrication and setup at public event", "Branded booth at mela with promotional display"],
  },
];

function Gallery({ images, alts }: { images: string[]; alts: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3">
      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
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

function EventManagementPage() {
  return (
    <PageShell>
      <section className="relative pt-36 pb-16 px-4 bg-ink text-canvas overflow-hidden grain-overlay">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[11px] text-canvas/40 font-medium mb-8">
            <a href="/" className="hover:text-canvas/70">Home</a><span>/</span>
            <a href="/services" className="hover:text-canvas/70">Services</a><span>/</span>
            <span className="text-canvas/70">Event Management</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-canvas/20 bg-canvas/10 text-[10px] uppercase tracking-[0.18em] font-bold text-canvas/60">
            <span className="size-1.5 rounded-full bg-accent-mint" /> Event Management
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Event Management in <span className="font-serif italic text-accent-mint">Lahore</span>
          </h1>
          <p className="text-canvas/60 text-base max-w-2xl mx-auto leading-relaxed">
            Weddings · Birthdays · Corporate Events · Exhibition Stalls — complete décor, setup and branded environments for every occasion.
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

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {categories.map((cat, i) => (
          <section key={cat.slug} id={cat.slug}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <Gallery images={cat.images} alts={cat.alts} />
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${cat.color} mb-2`}>Category {cat.id}</div>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink">{cat.title}</h2>
                  <p className="mt-2 font-serif italic text-ink-soft text-lg">{cat.tagline}</p>
                </div>
                <p className="text-ink-soft leading-relaxed">{cat.desc}</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                  Get Quote
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="px-4 pb-20 max-w-4xl mx-auto">
        <div className="bg-ink text-canvas rounded-[2.5rem] p-10 md:p-14 text-center grain-overlay">
          <h2 className="text-3xl font-medium mb-3">Planning an event in Lahore?</h2>
          <p className="text-canvas/60 text-sm max-w-md mx-auto mb-8">Tell us the date, venue and guest count — we'll send you a concept and quote within 24 hours.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform">
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </PageShell>
  );
}
