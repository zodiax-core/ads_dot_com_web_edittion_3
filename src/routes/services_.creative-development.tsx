import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";

import d1 from "@/assets/creative-design-images/design-1.jpeg";
import d2 from "@/assets/creative-design-images/design-2.jpeg";
import d3 from "@/assets/creative-design-images/design-3.png";
import d4 from "@/assets/creative-design-images/design-4.jpg";
import d5 from "@/assets/creative-design-images/design-5.jpg";
import d6 from "@/assets/creative-design-images/design-6.jpg";
import d7 from "@/assets/creative-design-images/design-7.jpeg";
import d8 from "@/assets/creative-design-images/design-8.jpeg";
import d9 from "@/assets/creative-design-images/design-9.jpeg";
import d10 from "@/assets/creative-design-images/design-10.jpg";
import d11 from "@/assets/creative-design-images/design-11.jpg";

export const Route = createFileRoute("/services_/creative-development")({
  head: () => ({
    meta: [
      { title: "Creative Design & Development in Lahore | ADS DOT COM" },
      { name: "description", content: "Brand identity, graphic design, UI/UX and creative development in Lahore. Physical-first design studio by ADS DOT COM. Get a quote today." },
      { property: "og:url", content: "https://adsdotcom.net/services/creative-development" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/creative-development" }],
  }),
  component: CreativeDevelopmentPage,
});

const WA = "https://wa.me/923349955475";

const services = [
  {
    id: "01", slug: "brand-identity", title: "Brand Identity & Logo Design",
    color: "accent-blue",
    tagline: "Your brand's visual language — built to last.",
    desc: "We craft complete brand identity systems — logotype, colour palette, typography and usage guidelines. Every mark is designed for physical application: signage, print, packaging and environments — not just screens.",
    images: [d1, d2, d3],
    alts: ["Brand identity design layout with logo and colour palette", "Logo design concepts on professional presentation", "Brand guidelines document with typography and colours"],
    specs: ["Logo & logotype design", "Brand guidelines & colour systems", "Typography selection & usage rules", "Business card & stationery design"],
  },
  {
    id: "02", slug: "graphic-design", title: "Graphic Design & Marketing Materials",
    color: "accent-coral",
    tagline: "Every piece of print starts with great design.",
    desc: "Brochures, catalogues, flyers, posters, banners, packaging and social media graphics — our design team produces print-ready artwork built for the exact format and substrate it will be produced on. No template work. Every job is bespoke.",
    images: [d4, d5, d6],
    alts: ["Marketing brochure design layout for corporate client", "Graphic design for promotional flyer and poster", "Print-ready marketing material design with brand colours"],
    specs: ["Brochures, catalogues & flyers", "Poster & banner artwork", "Packaging design", "Social media graphics & digital assets"],
  },
  {
    id: "03", slug: "ui-ux", title: "UI/UX Design",
    color: "accent-yellow",
    tagline: "Interfaces that are clear, fast and on-brand.",
    desc: "We design user interfaces and digital experiences that reflect your brand's physical identity. From website wireframes and app UI to landing pages and dashboards — every screen is designed with your users and your brand in mind.",
    images: [d7, d8, d9],
    alts: ["UI/UX design wireframe for mobile application interface", "Website UI design mockup with brand identity applied", "Digital dashboard design with clean modern interface"],
    specs: ["Website UI design", "Mobile app UI/UX", "Landing page design", "Wireframing & prototyping"],
  },
  {
    id: "04", slug: "environmental-design", title: "Environmental & Spatial Design",
    color: "accent-mint",
    tagline: "Design that lives in the physical world.",
    desc: "Office interiors, retail environments, exhibition spaces, reception areas — we design the visual language of physical spaces. Wall graphics, wayfinding systems, floor graphics and branded surface treatments that turn spaces into brand experiences.",
    images: [d10, d11],
    alts: ["Environmental graphic design for office interior wall", "Spatial branding design for retail environment"],
    specs: ["Office & retail interior graphics", "Wayfinding system design", "Floor & wall graphic design", "Exhibition & trade show design"],
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

function CreativeDevelopmentPage() {
  return (
    <PageShell>
      <section className="relative pt-36 pb-16 px-4 bg-surface overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(oklch(0.185 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.185 0.01 60) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[11px] text-ink-mute font-medium mb-8">
            <a href="/" className="hover:text-ink">Home</a><span>/</span>
            <a href="/services" className="hover:text-ink">Services</a><span>/</span>
            <span className="text-ink">Creative Design & Development</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-ink/10 bg-white/60 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute">
            <span className="size-1.5 rounded-full bg-accent-blue" /> Creative & Design
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Creative Design & Development<br />
            <span className="font-serif italic text-accent-blue">in Lahore</span>
          </h1>
          <p className="text-ink-soft text-base max-w-2xl mx-auto leading-relaxed">
            Brand Identity · Graphic Design · UI/UX · Environmental Design — physical-first creative studio since 2006.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
              WhatsApp for Quote
            </a>
            <a href="tel:+923349955475"
              className="inline-flex items-center gap-2 px-6 py-3 border border-ink/15 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors">
              +92 334 9955475
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <Gallery images={s.images} alts={s.alts} />
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${s.color} mb-2`}>Service {s.id} of 4</div>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink">{s.title}</h2>
                  <p className="mt-2 font-serif italic text-ink-soft text-lg">{s.tagline}</p>
                </div>
                <p className="text-ink-soft leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.specs.map((sp) => (
                    <li key={sp} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className={`mt-1.5 size-1.5 rounded-full bg-${s.color} shrink-0`} />
                      {sp}
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-3xl font-medium mb-3">Ready to build your brand?</h2>
          <p className="text-canvas/60 text-sm max-w-md mx-auto mb-8">From first concept to final production — our studio handles design and execution under one roof.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform">
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </PageShell>
  );
}
