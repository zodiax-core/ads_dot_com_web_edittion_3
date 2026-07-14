import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { ServiceThumbnailGallery } from "@/components/ServiceThumbnailGallery";

import bb1 from "@/assets/fabrication-images/birdboard-1.webp";
import bb2 from "@/assets/fabrication-images/birdboard-2.webp";
import bb3 from "@/assets/fabrication-images/birdboard-3.jpg";
import bb4 from "@/assets/fabrication-images/birdboard-4.jpg";
import bb5 from "@/assets/fabrication-images/birdboard-5.jpg";
import sg1 from "@/assets/fabrication-images/Signage-1.jpg";
import sg2 from "@/assets/fabrication-images/Signage-2.jpg";
import sg3 from "@/assets/fabrication-images/Signage-3.jpg";
import sg4 from "@/assets/fabrication-images/Signage-4.jpg";
import sg5 from "@/assets/fabrication-images/Signage-5.jpg";
import sd1 from "@/assets/fabrication-images/3D-signboards-1.jpg";
import sd2 from "@/assets/fabrication-images/3D-signboards-2.jpg";
import ss1 from "@/assets/fabrication-images/ss-singage-1.jpg";
import ss2 from "@/assets/fabrication-images/ss-singage-2.jpg";
import ss3 from "@/assets/fabrication-images/ss-singage-3.jpg";
import ss4 from "@/assets/fabrication-images/ss-singage-4.webp";

export const Route = createFileRoute("/services_/fabrication-installation")({
  head: () => ({
    meta: [
      { title: "Fabrication & Installation in Lahore | Billboards, Signage, 3D | ADS DOT COM" },
      { name: "description", content: "Billboard fabrication, custom signage, 3D sign boards and stainless steel letters in Lahore. Professional installation by ADS DOT COM. Get a quote today." },
      { property: "og:url", content: "https://adsdotcom.net/services/fabrication-installation" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/fabrication-installation" }],
  }),
  component: FabricationInstallationPage,
});

const WA = "https://wa.me/923349955475";

const services = [
  {
    id: "01",
    slug: "billboards",
    title: "Billboard Fabrication & Installation",
    color: "accent-blue",
    tagline: "Commanding outdoor presence — designed, built and installed.",
    desc: "We fabricate and install billboard structures of all sizes — single-face, double-sided and tri-vision rotating formats. From structural steel frame design and fabrication through to printing, hoisting and on-site installation. Everything done in-house.",
    images: [bb1, bb2, bb3, bb4, bb5],
    imageAlts: [
      "Large billboard structure being installed on roadside in Lahore",
      "Fabricated billboard frame erected at commercial location",
      "Double-sided billboard hoarding at major intersection",
      "Billboard installation crew working on site",
      "Completed billboard advertising structure in Lahore",
    ],
  },
  {
    id: "02",
    slug: "signage",
    title: "Custom Signage",
    color: "accent-coral",
    tagline: "Every brand deserves to be seen — clearly and boldly.",
    desc: "From shop front fascias and illuminated channel letters to wayfinding systems and corporate identity signage — we design, fabricate and install custom signage for retail, commercial and corporate applications across Lahore.",
    images: [sg1, sg2, sg3, sg4, sg5],
    imageAlts: [
      "Custom illuminated shop front signage fabricated and installed",
      "Corporate identity signage on building exterior",
      "Retail fascia signage with LED illumination",
      "Wayfinding signage system installed at commercial building",
      "Custom channel letter signage for business premises",
    ],
  },
  {
    id: "03",
    slug: "3d-sign-boards",
    title: "3D Sign Boards",
    color: "accent-yellow",
    tagline: "Depth, dimension and presence for your brand.",
    desc: "3D sign boards add visual depth and premium impact to any branded environment. We fabricate acrylic, foam and composite 3D lettering and logo signs for shop fronts, reception areas, exhibition stands and building exteriors — finished and installed by our own team.",
    images: [sd1, sd2],
    imageAlts: [
      "3D acrylic sign board with illuminated brand letters",
      "3D sign board installation on commercial building facade",
    ],
  },
  {
    id: "04",
    slug: "stainless-steel-letters",
    title: "3D Stainless Steel Letters",
    color: "accent-mint",
    tagline: "Premium metal lettering that lasts decades.",
    desc: "Brushed and polished stainless steel 3D letters are the premium choice for corporate receptions, building exteriors, hotels and high-end retail. Each letter is precision-cut, formed and finished in our workshop — available in various depths, finishes and with optional LED backlit illumination.",
    images: [ss1, ss2, ss3, ss4],
    imageAlts: [
      "Brushed stainless steel 3D letters mounted on building exterior",
      "Polished steel lettering installation for corporate reception",
      "3D stainless steel signage with LED backlit illumination",
      "Premium metal letters fabricated and installed for brand identity",
    ],
  },
];

function ImageGallery({ images, alts }: { images: string[]; alts: string[] }) {
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

function FabricationInstallationPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 bg-ink text-canvas overflow-hidden grain-overlay">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-[11px] text-canvas/40 font-medium mb-8">
            <a href="/" className="hover:text-canvas/70">Home</a><span>/</span>
            <a href="/services" className="hover:text-canvas/70">Services</a><span>/</span>
            <span className="text-canvas/70">Fabrication & Installation</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-canvas/20 bg-canvas/10 text-[10px] uppercase tracking-[0.18em] font-bold text-canvas/60">
            <span className="size-1.5 rounded-full bg-accent-coral" /> Fabrication & Installation
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Fabrication & Installation in <span className="font-serif italic text-accent-coral">Lahore</span>
          </h1>
          <p className="text-canvas/60 text-base max-w-2xl mx-auto leading-relaxed">
            Billboards · Custom Signage · 3D Sign Boards · Stainless Steel Letters — designed, fabricated and installed by our own crew.
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
                  <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${s.color} mb-2`}>Service {s.id} of 4</div>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink">{s.title}</h2>
                  <p className="mt-2 font-serif italic text-ink-soft text-lg">{s.tagline}</p>
                </div>
                <p className="text-ink-soft leading-relaxed">{s.desc}</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                  Get Quote
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="px-4 pb-20 max-w-4xl mx-auto">
        <div className="bg-ink text-canvas rounded-[2.5rem] p-10 md:p-14 text-center grain-overlay">
          <h2 className="text-3xl font-medium mb-3">Ready to install your brand?</h2>
          <p className="text-canvas/60 text-sm max-w-md mx-auto mb-8">From a single shop sign to a full billboard circuit — our team handles everything end to end.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform">
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </PageShell>
  );
}
