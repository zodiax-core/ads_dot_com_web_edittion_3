import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroScene from "@/assets/hero-scene.jpg";
import fabModular from "@/assets/fab-modular.jpg";
import fabKinetic from "@/assets/fab-kinetic.jpg";
import fabVenue from "@/assets/fab-venue.jpg";
import events from "@/assets/events.jpg";
import installation from "@/assets/installation.jpg";
import creative from "@/assets/creative.jpg";
import projectLumos from "@/assets/project-lumos.jpg";
import projectMonolith from "@/assets/project-monolith.jpg";

import { CinematicIntro } from "@/components/cinematic-intro";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADS DOT COM — Integrated Creative Agency | Lahore, Pakistan" },
      { name: "description", content: "Lahore's leading integrated creative agency since 2006. Outdoor advertising, precision printing, fabrication, installation, event production and brand design — all in-house, zero subcontractors." },
      { property: "og:title", content: "ADS DOT COM — Integrated Creative Agency | Lahore, Pakistan" },
      { property: "og:description", content: "Outdoor advertising, printing, fabrication, installation, events and creative direction. Pakistan's most integrated physical branding studio since 2006." },
      { property: "og:url", content: "https://adsdotcom.net/" },
    ],
    links: [
      { rel: "canonical", href: "https://adsdotcom.net/" },
    ],
  }),
  component: Home,
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
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

/* ─────────────────────────────────────── NAV ────────────────────────────── */
export function Nav({ ready = true }: { ready?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceLinks = [
    { href: "/services/outdoor-advertising", label: "Outdoor Advertising" },
    { href: "/services/printing", label: "Precision Printing" },
    { href: "/services/fabrication", label: "Fabrication" },
    { href: "/services/installation", label: "Installation" },
    { href: "/services/events", label: "Event Production" },
    { href: "/services/creative-design", label: "Creative & Design" },
  ];

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
      <div className="relative flex items-center justify-between w-full max-w-[12rem] md:max-w-none md:w-auto md:gap-6 px-4 py-2.5 bg-canvas/75 backdrop-blur-xl rounded-full border border-ink/5 shadow-soft">
        <a href="/" className="flex items-center gap-2 pl-1 pr-2">
          <span className="relative flex size-2.5">
            <span className="absolute inset-0 rounded-full bg-accent-blue animate-ping opacity-40" />
            <span className="relative size-2.5 rounded-full bg-accent-blue" />
          </span>
          <span className="font-semibold tracking-tight text-sm">
            ADS<span className="text-accent-blue">.</span>COM
          </span>
        </a>

        <div className="hidden md:flex items-center gap-5 text-[13px] font-medium text-ink-soft">
          {/* Services with dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <a href="/services" className="hover:text-ink transition-colors flex items-center gap-1">
              Services
              <svg className="size-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {/* Dropdown */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-canvas/95 backdrop-blur-xl border border-ink/5 shadow-lift rounded-2xl p-2 flex flex-col gap-0.5 transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}>
              {serviceLinks.map((l) => (
                <a key={l.href} href={l.href} className="px-3 py-2 text-[12px] font-medium text-ink-soft hover:text-ink hover:bg-surface rounded-xl transition-colors">
                  {l.label}
                </a>
              ))}
              <div className="h-px bg-ink/5 my-1" />
              <a href="/services" className="px-3 py-2 text-[12px] font-semibold text-accent-blue hover:bg-surface rounded-xl transition-colors">
                All Services →
              </a>
            </div>
          </div>
          <a href="/work" className="hover:text-ink transition-colors">Work</a>
          <a href="/blog" className="hover:text-ink transition-colors">Blog</a>
          <a href="/process" className="hover:text-ink transition-colors">Process</a>
          <a href="/studio" className="hover:text-ink transition-colors">Studio</a>
        </div>

        <a
          href="https://wa.me/923349955475"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex px-3.5 py-1.5 bg-ink text-canvas text-[12px] font-semibold rounded-full hover:scale-105 active:scale-95 transition-transform"
        >
          Let's Build
        </a>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-1.5 text-ink-soft hover:text-ink flex flex-col justify-center items-center gap-1 -mr-2 size-8 relative z-50" onClick={() => setIsOpen(!isOpen)}>
          <span className={`block w-5 h-[2px] bg-current rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[2px] bg-current rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-current rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>

        {/* Mobile Dropdown */}
        <div className={`absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-ink/5 shadow-soft rounded-2xl p-2 flex flex-col gap-1 md:hidden overflow-hidden transition-all duration-300 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"}`}>
          <a href="/services" className="px-4 py-2.5 text-sm font-semibold hover:bg-surface rounded-xl">Services</a>
          {serviceLinks.map((l) => (
            <a key={l.href} href={l.href} className="px-6 py-2 text-xs font-medium text-ink-soft hover:text-ink hover:bg-surface rounded-xl">
              {l.label}
            </a>
          ))}
          <div className="h-px bg-ink/5 mx-4" />
          <a href="/work" className="px-4 py-2.5 text-sm font-medium hover:bg-surface rounded-xl">Work</a>
          <a href="/blog" className="px-4 py-2.5 text-sm font-medium hover:bg-surface rounded-xl">Blog</a>
          <a href="/process" className="px-4 py-2.5 text-sm font-medium hover:bg-surface rounded-xl">Process</a>
          <a href="/studio" className="px-4 py-2.5 text-sm font-medium hover:bg-surface rounded-xl">Studio</a>
          <a href="https://wa.me/923349955475" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm font-medium bg-ink text-canvas rounded-xl text-center mt-1">Let's Build</a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────── HERO ───────────────────────────── */
function Hero({ ready = true }: { ready?: boolean }) {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Cinematic background scene */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroScene}
          alt=""
          width={1600}
          height={1200}
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover opacity-70 scale-110 animate-drift"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-canvas/20 to-canvas" />
      </div>

      {/* Floating chips — staggered fade in */}
      <div className={`absolute left-[6%] top-[22%] hidden md:block animate-float-slow transition-all duration-700 delay-[900ms] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
        <div className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent-coral" /> Paper folded
        </div>
      </div>
      <div className={`absolute right-[8%] top-[32%] hidden md:block animate-float-slow transition-all duration-700 delay-[1100ms] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ animationDelay: "1.5s" }}>
        <div className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent-mint" /> Chrome polished
        </div>
      </div>
      <div className={`absolute right-[14%] bottom-[26%] hidden lg:block animate-float-slow transition-all duration-700 delay-[1300ms] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ animationDelay: "0.8s" }}>
        <div className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent-purple" /> Ink flowing
        </div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Badge */}
        <div className={`transition-all duration-700 delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-white/60 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute">
            <span className="size-1 rounded-full bg-accent-blue" /> Integrated Creative Agency
          </div>
        </div>

        {/* Heading */}
        <div className={`overflow-hidden transition-all duration-700 delay-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="text-4xl md:text-[3.25rem] leading-[1.05] font-medium tracking-tight text-balance">
            Spark big ideas for the <span className="font-serif italic text-accent-blue">real</span> world.
          </h1>
        </div>

        {/* Subtext */}
        <div className={`transition-all duration-700 delay-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="mt-5 text-ink-soft text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Ads Dot COM merges marketing science with strategic thinking and highly creative executions—so your brand
            grows with measurable intent and human craft.
          </p>
        </div>

        {/* CTA */}
        <div className={`mt-10 flex items-center justify-center gap-3 transition-all duration-700 delay-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <a href="#services" className="group relative">
            <div className="size-16 rounded-full border border-ink/10 flex items-center justify-center bg-white shadow-lift group-hover:scale-110 transition-transform">
              <svg className="size-4 text-ink group-hover:translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.15em] text-ink-mute group-hover:text-ink transition-colors whitespace-nowrap">
              Enter the studio
            </span>
          </a>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className={`absolute bottom-6 left-0 right-0 px-4 transition-all duration-700 delay-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 bg-white/70 backdrop-blur-xl rounded-full border border-ink/5 shadow-soft text-[11px]">
          <span className="font-semibold text-ink">Lahore · Pakistan</span>
          <span className="hidden sm:inline text-ink-mute">Nationwide operations · Brands across sectors · 20 years</span>
          <span className="flex items-center gap-1.5 font-medium text-ink">
            <span className="size-1.5 rounded-full bg-accent-mint animate-pulse" /> Now Serving
          </span>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────── MARQUEE ─────────────────────────────── */
function Marquee() {
  const items = ["ARY News", "Pak Arab Housing", "Samsung", "Wakgroup", "ARY News", "Cantt. Lahore", "Pak Arab Housing", "Samsung", "Walton Road", "Wakgroup"];
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-ink/5 bg-canvas overflow-hidden py-5">
      <div className="flex gap-14 animate-marquee whitespace-nowrap">
        {doubled.map((c, i) => (
          <span key={i} className="font-serif italic text-lg md:text-xl text-ink-mute shrink-0">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────── PRINTING ────────────────────────────── */
function Printing() {
  const { ref, shown } = useReveal();
  return (
    <section id="services" className="py-24 md:py-32 px-4 bg-surface relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-3">
            Service 01 · Printing
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
            Ink and paper, engineered.{" "}
            <span className="font-serif italic text-ink-soft">Every fibre matters.</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative transition-all duration-1000 ${shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="relative aspect-[4/5] bg-white rounded-[2rem] shadow-lift overflow-hidden border border-ink/5">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1024&q=85&fit=crop&crop=center"
                alt="Wide-format flex printing machine outputting large vinyl roll in a print shop"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Overlay caption */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-mute mb-1">Process 01</p>
                    <p className="text-sm font-medium font-serif italic text-ink leading-snug">
                      The weight of a thought, rendered on paper.
                    </p>
                  </div>
                  <div className="chrome-shimmer size-10 rounded-full border border-ink/5 shrink-0" />
                </div>
              </div>
              {/* Corner tag */}
              <div className="absolute top-5 left-5 px-2.5 py-1 rounded-full bg-accent-yellow text-ink text-[10px] font-bold uppercase tracking-wider">
                Live
              </div>
            </div>
          </div>

          <div className="space-y-7">
            <p className="text-ink-soft leading-relaxed text-lg">
              Our printing division operates at the intersection of traditional
              craftsmanship and robotics — bespoke ink formulations that react to light,
              creating depth digital screens cannot replicate.
            </p>
            <ul className="space-y-3">
              {[
                { c: "bg-accent-blue", t: "Bespoke Letterpress & Foil", d: "Cotton, cork and reclaimed pulp" },
                { c: "bg-accent-coral", t: "Large-Scale Architectural Graphics", d: "Up to 12m continuous format" },
                { c: "bg-accent-mint", t: "Reactive Intelligent Inks", d: "Thermochromic and photochromic" },
                { c: "bg-accent-purple", t: "Sustainable Substrates", d: "Fully closed-loop material chain" },
              ].map((f) => (
                <li key={f.t} className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white transition-colors">
                  <div className="size-11 rounded-2xl bg-white flex items-center justify-center shadow-soft group-hover:rotate-6 transition-transform shrink-0">
                    <div className={`size-2 rounded-full ${f.c}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-ink">{f.t}</div>
                    <div className="text-xs text-ink-mute">{f.d}</div>
                  </div>
                  <svg className="ml-auto size-4 text-ink-mute opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────── FABRICATION ──────────────────────────── */
function Fabrication() {
  const cards = [
    { img: fabModular, title: "Modular Systems", desc: "Rapidly deployable structures for events and temporary installations.", tag: "01", offset: "" },
    { img: fabKinetic, title: "Kinetic Signage", desc: "Environmental branding that moves, reacts and breathes with its surroundings.", tag: "02", offset: "md:mt-16" },
    { img: fabVenue, title: "Venue Alchemy", desc: "Transforming industrial spaces into immersive branded ecosystems overnight.", tag: "03", offset: "" },
  ];
  return (
    <section className="py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-coral mb-3">
            Service 02 · Fabrication
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Where <span className="font-serif italic">geometry</span> meets the physical plane.
          </h2>
          <p className="mt-4 text-ink-soft max-w-lg mx-auto">
            Modular assemblies, robotic machining and hand-finished detail — built in-house.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className={`group p-5 bg-canvas border border-ink/5 rounded-[2rem] shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-500 ${c.offset}`}>
              <div className="relative w-full aspect-square rounded-[1.4rem] overflow-hidden mb-5 bg-surface">
                <img src={c.img} alt={c.title} width={900} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-ink">
                  {c.tag}
                </div>
              </div>
              <div className="px-2 pb-3">
                <h3 className="text-lg font-medium mb-1.5 text-ink">{c.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── SERVICE STRIP ─────────────────────────────── */
function ServiceStrip() {
  const rows = [
    {
      idx: "03",
      title: "Installation",
      tag: "On-Site",
      color: "accent-coral",
      image: installation,
      desc: "Rigging, crane placement and architectural wrapping — from a single storefront to a citywide activation.",
      chips: ["Signage", "Facade wrap", "Structural"],
    },
    {
      idx: "04",
      title: "Event Management",
      tag: "Live",
      color: "accent-purple",
      image: events,
      desc: "Empty venues transformed into immersive experiences with stage, lighting and LED programmed in real time.",
      chips: ["Stage build", "Lighting", "LED walls"],
      reverse: true,
    },
    {
      idx: "05",
      title: "Creative & Design",
      tag: "Studio",
      color: "accent-mint",
      image: creative,
      desc: "Sketches evolve into complete brand systems — physical identities, environmental design and packaging.",
      chips: ["Identity", "Environmental", "Packaging"],
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-surface">
      <div className="max-w-6xl mx-auto space-y-6">
        {rows.map((r) => (
          <article
            key={r.title}
            className={`group grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 md:gap-8 p-5 md:p-6 bg-canvas rounded-[2rem] border border-ink/5 shadow-soft hover:shadow-lift transition-shadow duration-500`}
          >
            <div className={`relative w-full h-64 md:h-80 rounded-[1.4rem] overflow-hidden bg-surface ${r.reverse ? "md:order-2" : ""}`}>
              <img src={r.image} alt={r.title} width={1400} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-ink">
                  {r.idx}
                </span>
                <span className={`px-2.5 py-1 rounded-full bg-${r.color} text-white text-[10px] font-bold uppercase tracking-wider`}>
                  {r.tag}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-2 md:p-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-ink mb-3">
                  {r.title}
                </h3>
                <p className="text-ink-soft leading-relaxed max-w-md">{r.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  {r.chips.map((chip) => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-surface border border-ink/5 text-[11px] font-medium text-ink-soft">
                      {chip}
                    </span>
                  ))}
                </div>
                <a href="/work" className="text-[12px] font-semibold text-ink flex items-center gap-1.5 group/link">
                  See work
                  <span className="size-6 rounded-full bg-ink text-canvas flex items-center justify-center group-hover/link:translate-x-0.5 transition-transform">
                    <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────── PROCESS ────────────────────────────────── */
function Process() {
  const steps = [
    { n: "01", t: "Listen", d: "Two weeks of workshops and site walks. We map the brief against the physical reality." },
    { n: "02", t: "Draft", d: "Concept boards, spatial sketches and clay models. Nothing is presented flat." },
    { n: "03", t: "Prototype", d: "In-house sampling of every material touchpoint before a single roll of paper is cut." },
    { n: "04", t: "Produce", d: "Precision fabrication, printing and rigging — delivered on site with our own crew." },
  ];
  return (
    <section id="process" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-md">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-mint mb-3">
              Process
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Four scenes.{" "}
              <span className="font-serif italic">One continuous take.</span>
            </h2>
          </div>
          <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
            Every project moves through the same rhythm — no handoffs, no lost detail.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative p-6 rounded-[1.75rem] bg-canvas border border-ink/5 shadow-soft hover:shadow-lift transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[11px] font-bold tracking-widest text-ink-mute">{s.n}</span>
                <span className="h-px flex-1 bg-ink/10" />
                {i === 0 && <span className="size-2 rounded-full bg-accent-blue" />}
                {i === 1 && <span className="size-2 rounded-full bg-accent-coral" />}
                {i === 2 && <span className="size-2 rounded-full bg-accent-yellow" />}
                {i === 3 && <span className="size-2 rounded-full bg-accent-mint" />}
              </div>
              <h3 className="font-serif italic text-2xl text-ink mb-2">{s.t}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ────────────────────────────────── WORK ────────────────────────────────── */
function Work() {
  const projects = [
    {
      img: projectLumos,
      tag: "Retail Identity",
      tagColor: "bg-accent-blue",
      title: "Project Lumos",
      client: "LOEWE",
      year: "2025",
      desc: "Installation for Paris Fashion Week, featuring light-reactive fabric panels and CNC-milled chrome signage.",
    },
    {
      img: projectMonolith,
      tag: "Event Space",
      tagColor: "bg-accent-coral",
      title: "The Monolith",
      client: "Geneva Motor Show",
      year: "2024",
      desc: "A 40-foot temporary pavilion with neon-wrapped brushed aluminum stands and a rotating debut floor.",
    },
  ];
  return (
    <section id="work" className="py-24 md:py-32 bg-ink text-canvas grain-overlay">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-lg">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-yellow mb-3">
              Featured Work
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              The Anthology.
            </h2>
            <p className="mt-3 text-canvas/60 text-sm max-w-sm">
              A curated selection of our most complex physical executions from the last two seasons.
            </p>
          </div>
          <a href="/work" className="inline-flex items-center gap-2 px-5 py-2.5 border border-canvas/20 rounded-full hover:bg-canvas hover:text-ink transition-colors text-sm font-medium">
            View archive
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((p) => (
            <a key={p.title} href="/work" className="group block">
              <div className="relative overflow-hidden rounded-[1.75rem] aspect-[16/10] bg-canvas/5 mb-5">
                <img src={p.img} alt={p.title} width={1600} height={1000} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <div className="absolute top-5 left-5">
                  <span className={`px-3 py-1 rounded-full ${p.tagColor} text-white text-[10px] font-bold uppercase tracking-wider`}>
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5 size-11 rounded-full bg-canvas text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h4 className="text-xl md:text-2xl font-medium text-canvas mb-1">{p.title}</h4>
                  <p className="text-canvas/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="text-right shrink-0 text-[11px] font-semibold uppercase tracking-widest text-canvas/40">
                  <div>{p.client}</div>
                  <div className="mt-1">{p.year}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── CONTACT ───────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 bg-canvas">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-purple mb-4">
          Build with intent
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-balance">
          Let’s grow your brand
          <span className="font-serif italic text-accent-blue">with intent.</span>
        </h2>
        <p className="mt-5 text-ink-soft max-w-lg mx-auto leading-relaxed">
          Data-driven insight, human intelligence, and ethical execution—so your marketing communication
          becomes measurable growth.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:info@adsdotcom.net"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            info@adsdotcom.net
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="mailto:sales@adsdotcom.net"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-canvas border border-ink/10 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors"
          >
            sales@adsdotcom.net
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── FOOTER ────────────────────────────────── */
export function Footer() {
  return (
    <footer id="studio" className="py-16 md:py-20 px-4 border-t border-ink/5 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-10 md:gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="ADS DOT COM Logo" className="h-10 w-auto" />
            </div>
            <p className="text-ink-soft text-sm max-w-xs leading-relaxed">
              E-193/ii, Bank Stop<br />
              Main Walton Road Cantt.<br />
              Lahore, Pakistan
            </p>
            <div className="text-ink-soft text-sm space-y-1">
              <a href="tel:+923349955475" className="block hover:text-accent-blue transition-colors">+92 334 9955475</a>
              <a href="mailto:info@adsdotcom.net" className="block hover:text-accent-blue transition-colors">info@adsdotcom.net</a>
              <a href="mailto:sales@adsdotcom.net" className="block hover:text-accent-blue transition-colors">sales@adsdotcom.net</a>
            </div>
            <div className="flex gap-2 pt-1">
              <a href="https://www.instagram.com/adsdot_com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="size-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-colors">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/18V8bkSGXG/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="size-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-colors">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/923349955475" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="size-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-mute">Services</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Outdoor Advertising", href: "/services/outdoor-advertising" },
                { name: "Precision Printing", href: "/services/printing" },
                { name: "Fabrication", href: "/services/fabrication" },
                { name: "Installation", href: "/services/installation" },
                { name: "Event Production", href: "/services/events" },
                { name: "Creative & Design", href: "/services/creative-design" },
              ].map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-ink-soft hover:text-accent-blue transition-colors">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore column */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-mute">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Our Work", href: "/work" },
                { name: "All Services", href: "/services" },
                { name: "Our Process", href: "/process" },
                { name: "Journal / Blog", href: "/blog" },
              ].map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-ink-soft hover:text-accent-blue transition-colors">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries column */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-mute">Inquiries</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "New Business", href: "/studio#contact" },
                { name: "Get a Quote", href: "https://wa.me/923349955475" },
                { name: "Press & Media", href: "mailto:info@adsdotcom.net" },
                { name: "Partnerships", href: "mailto:sales@adsdotcom.net" },
                { name: "Careers", href: "mailto:info@adsdotcom.net" },
              ].map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-ink-soft hover:text-accent-blue transition-colors">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio column */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-mute">Studio</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About Us", href: "/studio" },
                { name: "Contact", href: "/studio#contact" },
                { name: "Sustainability", href: "#" },
                { name: "Suppliers", href: "#" },
              ].map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-ink-soft hover:text-accent-blue transition-colors">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-14 pt-6 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-ink-mute font-semibold">
          <p>© {new Date().getFullYear()} ADS DOT COM. All rights reserved.</p>
          <p className="font-serif italic normal-case tracking-normal text-ink-soft">
            Crafted with intent in Lahore, Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  // heroReady starts false on both SSR and client — no hydration mismatch.
  // The white overlay (z-99) hides everything from the very first render.
  const [heroReady, setHeroReady] = useState(false);
  // mounted ensures CinematicIntro only runs in the browser (client-only)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIntroComplete = () => {
    setTimeout(() => setHeroReady(true), 80);
  };

  return (
    <>
      {/* White screen — always covers everything until heroReady.
          SSR renders this as opacity-100 (no flash), intro sits on top (z-100). */}
      <div
        className={`fixed inset-0 z-[99] bg-white pointer-events-none transition-opacity duration-700 ${heroReady ? "opacity-0" : "opacity-100"}`}
      />

      {/* Intro mounts only on the client, on top of the white overlay */}
      {mounted && !heroReady && (
        <CinematicIntro onComplete={handleIntroComplete} />
      )}

      <main className={`min-h-screen bg-canvas text-ink font-sans relative transition-opacity duration-700 ${heroReady ? "opacity-100" : "opacity-0"}`}>
        <Nav ready={heroReady} />
        <Hero ready={heroReady} />
        <Marquee />
        <Printing />
        <Fabrication />
        <ServiceStrip />
        <Process />
        <Work />
        <Contact />
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/923349955475" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <svg className="size-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z" />
          </svg>
        </a>
      </main>
    </>
  );
}
