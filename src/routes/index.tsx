import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroScene from "@/assets/hero-scene.jpg";
import fabModular from "@/assets/fab-modular.jpg";
import fabKinetic from "@/assets/fab-kinetic.jpg";
import events from "@/assets/events.jpg";
import creative from "@/assets/creative.jpg";
import installation from "@/assets/installation.jpg";
import printing from "@/assets/printing.jpg";

import vid1 from "@/assets/Hero-vids/v1.webm";
import vid2 from "@/assets/Hero-vids/v2.webm";
import vid3 from "@/assets/Hero-vids/v3.webm";
import vid4 from "@/assets/Hero-vids/v4.webm";
import vid5 from "@/assets/Hero-vids/v5.webm";
import vid6 from "@/assets/Hero-vids/v6.webm";
import vid7 from "@/assets/Hero-vids/v7.webm";
import vid8 from "@/assets/Hero-vids/v8.webm";
import vid9 from "@/assets/Hero-vids/v9.webm";

// All 9 hero videos — webm format, v1 through v9
const HERO_VIDEOS = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9];

// ── Connection quality detection ────────────────────────────────────────────
type ConnectionType = "fast" | "slow" | "unknown";
function getConnectionType(): ConnectionType {
  const nav = navigator as Navigator & {
    connection?: { effectiveType?: string; saveData?: boolean };
  };
  const conn = nav.connection;
  if (!conn) return "unknown";
  if (conn.saveData) return "slow";
  const et = conn.effectiveType ?? "";
  if (et === "slow-2g" || et === "2g") return "slow"; // Fallback only for extremely slow connections
  if (et === "3g") return "fast"; // WebM is small enough for 3G to load smoothly
  return "fast";
}

// Removed Eager hidden preload function to prevent aggressive network congestion on refresh.

import { CinematicIntro } from "@/components/cinematic-intro";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADS DOT COM — Integrated Creative Agency | Lahore, Pakistan" },
      { name: "description", content: "Lahore's leading integrated creative agency since 2006. Outdoor advertising, precision printing, fabrication, installation, event production and brand design — all in-house, zero subcontractors." },
      { property: "og:title", content: "ADS DOT COM — Integrated Creative Agency | Lahore, Pakistan" },
      { property: "og:description", content: "Outdoor advertising, printing, fabrication, installation, events and creative direction. Pakistan's most integrated physical branding studio since 2006." },
      { property: "og:url", content: "https://adsdotcom.net/" },
      { property: "og:site_name", content: "ADS DOT COM" },

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
  const closeTimer = useRef<number | null>(null);

  const serviceLinks = [
    { href: "/services/outdoor-advertising", label: "Outdoor Advertising" },
    { href: "/services/printing-services", label: "Printing Services" },
    { href: "/services/fabrication-installation", label: "Fabrication & Installation" },
    { href: "/services/event-management", label: "Event Management" },
    { href: "/services/creative-development", label: "Creative Design" },
    { href: "/services/website-development", label: "Website Development" },
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
          {/* Services with dropdown — delayed close so user has time to move to options */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
              setServicesOpen(true);
            }}
            onMouseLeave={() => {
              closeTimer.current = window.setTimeout(() => setServicesOpen(false), 220);
            }}
          >
            <a href="/services" className="hover:text-ink transition-colors flex items-center gap-1">
              Services
              <svg className="size-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slowConnection, setSlowConnection] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Detect connection quality once on mount
  useEffect(() => {
    const ct = getConnectionType();
    if (ct === "slow") setSlowConnection(true);
  }, []);

  // Removed aggressive eager preloading. We rely on the `<video preload="metadata/auto">` native browser hints.

  // Imperatively play/pause the correct video when index or ready changes.
  // Changing the `autoPlay` attribute dynamically after mount is ignored by
  // browsers — we must call .play()/.pause() directly.
  useEffect(() => {
    videoRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (idx === currentIndex && ready) {
        el.play().catch(() => {/* autoplay blocked — silently ignore */ });
      } else {
        el.pause();
      }
    });
  }, [currentIndex, ready]);

  // Auto-advance after 6s of ACTUAL playing time (pauses if buffering)
  useEffect(() => {
    if (!ready) return;
    const activeVideo = videoRefs.current[currentIndex];
    if (!activeVideo) return;

    let timer: number;
    const startTimer = () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        // Reset time so it doesn't resume from the middle next time
        activeVideo.currentTime = 0;
        setCurrentIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
      }, 6000);
    };

    const clearTimer = () => clearTimeout(timer);

    activeVideo.addEventListener("playing", startTimer);
    activeVideo.addEventListener("waiting", clearTimer);
    activeVideo.addEventListener("pause", clearTimer);

    if (!activeVideo.paused && activeVideo.readyState >= 3) {
      startTimer();
    }

    return () => {
      clearTimer();
      activeVideo.removeEventListener("playing", startTimer);
      activeVideo.removeEventListener("waiting", clearTimer);
      activeVideo.removeEventListener("pause", clearTimer);
    };
  }, [ready, currentIndex]);

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 + HERO_VIDEOS.length) % HERO_VIDEOS.length);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-ink">
      {/* Video Carousel Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static poster fallback — shown on slow connections */}
        {slowConnection && (
          <img
            src={heroScene}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
        )}

        {/* Video carousel — skipped entirely on slow connections */}
        {!slowConnection && HERO_VIDEOS.map((vid, idx) => {
          const isActive = idx === currentIndex;
          const nextIdx = (currentIndex + 1) % HERO_VIDEOS.length;
          // Active: auto-buffer | next in queue: fetch metadata | rest: nothing
          const preloadAttr = isActive ? "auto" : idx === nextIdx ? "metadata" : "none";
          return (
            <video
              key={vid}
              ref={(el) => { videoRefs.current[idx] = el; }}
              muted
              playsInline
              loop
              preload={preloadAttr}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-70 z-10" : "opacity-0 z-0"
                }`}
            >
              <source src={vid} type="video/webm" />
            </video>
          );
        })}



      </div>


      {/* Floating chips — staggered fade in */}
      <div className={`absolute left-[6%] top-[22%] hidden md:block animate-float-slow transition-all duration-700 delay-[900ms] z-40 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
        <div className="px-3 py-1.5 rounded-full bg-white/60 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium text-ink-mute flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent-coral" /> Paper folded
        </div>
      </div>
      <div className={`absolute right-[8%] top-[32%] hidden md:block animate-float-slow transition-all duration-700 delay-[1100ms] z-40 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ animationDelay: "1.5s" }}>
        <div className="px-3 py-1.5 rounded-full bg-white/60 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium text-ink-mute flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent-mint" /> Chrome polished
        </div>
      </div>
      <div className={`absolute right-[14%] bottom-[26%] hidden lg:block animate-float-slow transition-all duration-700 delay-[1300ms] z-40 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ animationDelay: "0.8s" }}>
        <div className="px-3 py-1.5 rounded-full bg-white/60 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium text-ink-mute flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent-purple" /> Ink flowing
        </div>
      </div>

      <div className="relative z-40 text-center max-w-2xl mt-12">
        {/* Badge */}
        <div className={`transition-all duration-700 delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-white shadow-sm">
            <span className="size-1 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(59,130,246,0.8)]" /> Integrated Creative Agency
          </div>
        </div>

        {/* Heading */}
        <div className={`overflow-hidden transition-all duration-700 delay-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="text-4xl md:text-[3.25rem] leading-[1.05] font-medium tracking-tight text-balance text-white drop-shadow-md">
            Integrated Advertising Agency in <span className="font-serif italic text-accent-blue drop-shadow-sm">Lahore, Pakistan.</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className={`transition-all duration-700 delay-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="mt-5 text-white/90 text-base md:text-lg leading-relaxed max-w-lg mx-auto drop-shadow">
            <span className="font-medium text-white block mb-2 text-xl drop-shadow-sm">Spark big ideas for the real world.</span>
            Ads Dot COM merges marketing science with strategic thinking and highly creative executions—so your brand
            grows with measurable intent and human craft.
          </p>
        </div>

        {/* CTA */}
        <div className={`mt-10 flex items-center justify-center gap-3 transition-all duration-700 delay-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <a href="#services" className="group relative">
            <div className="size-16 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur shadow-lift group-hover:bg-white/20 group-hover:scale-110 transition-all">
              <svg className="size-4 text-white group-hover:translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors whitespace-nowrap drop-shadow">
              Enter the studio
            </span>
          </a>
        </div>
      </div>

      {/* Bottom stat strip and Pagination Dots */}
      <div className={`absolute bottom-6 left-0 right-0 px-4 transition-all duration-700 delay-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} z-30 pointer-events-none`}>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-6 pointer-events-auto">
          {HERO_VIDEOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-ink" : "w-1.5 bg-ink/30 hover:bg-ink/50"
                }`}
              aria-label={`Go to video ${idx + 1}`}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 bg-white/70 backdrop-blur-xl rounded-full border border-ink/5 shadow-soft text-[11px] pointer-events-auto">
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

import printHero from "@/assets/printing-service-images/Flex-printing-1.jpg";
import fabHero from "@/assets/fabrication-images/birdboard-1.webp";
import eventHero from "@/assets/event-management-images/Marriage-1.avif";
import designHero from "@/assets/creative-design-images/design-1.jpeg";

function Services() {
  const services = [
    {
      id: "01",
      title: "Printing Services",
      tag: "Print",
      color: "accent-blue",
      image: printHero,
      imageAlt: "Wide format printing in Lahore",
      desc: "Our printing division operates at the intersection of traditional craftsmanship and robotics. UV Roll-to-Roll, DTF, Flatbed, and Offset.",
      href: "/services/printing",
    },
    {
      id: "02",
      title: "Fabrication & Installation",
      tag: "Build",
      color: "accent-coral",
      image: fabHero,
      imageAlt: "Custom fabricated modular structure and billboard installation in Lahore",
      desc: "Billboards, 3D sign boards, stainless steel letters, custom signage — all designed, fabricated and installed in-house by our own crew.",
      href: "/services/fabrication",
    },
    {
      id: "03",
      title: "Event Management",
      tag: "Live",
      color: "accent-purple",
      image: eventHero,
      imageAlt: "Branded event setup with stage and lighting in Lahore",
      desc: "Weddings (shadi), corporate events, exhibitions and branded stalls — full décor, stage setup and event management from brief to breakdown.",
      href: "/services/events",
    },
    {
      id: "04",
      title: "Creative Design",
      tag: "Studio",
      color: "accent-mint",
      image: designHero,
      imageAlt: "Brand identity design and creative development studio in Lahore",
      desc: "Brand identity, graphic design, UI/UX and environmental design — physical-first creative studio that designs for production, not just screens.",
      href: "/services/creative-design",
    },
    {
      id: "05",
      title: "Website Development",
      tag: "Digital",
      color: "accent-yellow",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&q=80",
      imageAlt: "Professional website design and development workspace with code on screen",
      desc: "Business websites, e-commerce stores, landing pages and web apps — fast, SEO-optimised and built with modern technology.",
      href: "/services/website-development",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-4 bg-surface">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-3">
            Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Our <span className="font-serif italic text-accent-blue">Services.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col p-5 bg-canvas rounded-[2rem] border border-ink/5 shadow-soft hover:shadow-lift transition-shadow duration-500"
            >
              <div className="relative w-full h-56 rounded-[1.4rem] overflow-hidden bg-surface mb-6">
                <img src={s.image} alt={s.imageAlt} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-ink">{s.id}</span>
                  <span className={`px-2.5 py-1 rounded-full bg-${s.color} text-white text-[10px] font-bold uppercase tracking-wider`}>{s.tag}</span>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-ink mb-3">{s.title}</h3>
                <p className="text-ink-soft leading-relaxed text-sm mb-6 flex-1">{s.desc}</p>
                <a href={s.href} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-ink text-canvas rounded-xl text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform w-full">
                  View Service
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
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
      img: fabHero,
      tag: "Outdoor Campaign",
      tagColor: "bg-accent-purple",
      title: "Cantt. Billboard Circuit",
      client: "Samsung / Wakgroup",
      year: "2024",
      desc: "A series of high-altitude double-sided billboard structures deployed at primary intersections.",
    },
    {
      img: eventHero,
      tag: "Live Production",
      tagColor: "bg-accent-mint",
      title: "ARY News Studio Set",
      client: "ARY Network",
      year: "2023",
      desc: "Scenic custom broadcast television set with integrated LED wall mounts and architectural wood cladding.",
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
              <a href="tel:+923030449955" className="block hover:text-accent-blue transition-colors">+92 303 0449955</a>
              <a href="mailto:info@adsdotcom.net" className="block hover:text-accent-blue transition-colors">info@adsdotcom.net</a>
              <a href="mailto:sales@adsdotcom.net" className="block hover:text-accent-blue transition-colors">sales@adsdotcom.net</a>
            </div>
            <div className="flex gap-2 pt-1">
              <a href="https://www.instagram.com/adsdot_com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="size-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-colors">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/18V8bkSGXG/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="size-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-colors">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://wa.me/923349955475" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="size-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z" />
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
    // ── Preload vid1 immediately during the cinematic intro window (~2.6s) ──
    // The Hero component now handles native HTML5 preloading via preload="auto"
    // which starts fetching the first video inherently when mounted.
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

      <main className={`transition-all duration-[1200ms] ${heroReady ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}>
        <Nav ready={heroReady} />
        <Hero ready={heroReady} />
        <Marquee />

        {/* Simplified Services Section */}
        <Services />

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
