import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback, useRef } from "react";
import { PageShell } from "@/components/page-shell";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

// Import as proper bundled assets — these get correct hashed URLs in production
import projectLumosImg from "@/assets/project-lumos.jpg";
import projectMonolithImg from "@/assets/project-monolith.jpg";
import printingImg from "@/assets/printing.jpg";
import eventsImg from "@/assets/events.jpg";
import installationImg from "@/assets/installation.jpg";
import fabKineticImg from "@/assets/fab-kinetic.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — The Anthology | ADS DOT COM" },
      { name: "description", content: "Selected physical executions by ADS DOT COM — outdoor circuits, broadcast sets, retail fabrications, festival stages and kinetic installations. Built, not rendered." },
      { property: "og:title", content: "The Anthology | ADS DOT COM" },
      { property: "og:description", content: "Every project was measured, cut, printed, welded and stood up in the real world. No CGI, no mockups." },
      { property: "og:url", content: "https://adsed3.netlify.app/work" },
    ],
    links: [
      { rel: "canonical", href: "https://adsed3.netlify.app/work" },
    ],
  }),
  component: WorkPage,
});

const ArrowRight = () => (
  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── DUMMY DATA — uses bundled asset imports, works in prod ──────────── */
const dummyProjects = [
  {
    _id: "dummy-1",
    mainImage: projectLumosImg,
    serviceCategory: "Retail Identity",
    tagColor: "bg-accent-blue",
    title: "Project Lumos",
    client: "LOEWE",
    year: "2025",
    tags: ["Fabrication", "Installation", "Lighting"],
    smallDescription: "Installation featuring light-reactive fabric panels, CNC-milled chrome signage and structural backdrops.",
    projectDetail: "The brief called for an immersive retail transformation — one where physical material reacted to ambient light and movement.",
  },
  {
    _id: "dummy-2",
    mainImage: projectMonolithImg,
    serviceCategory: "Event Space",
    tagColor: "bg-accent-coral",
    title: "The Monolith",
    client: "Geneva Motor Show",
    year: "2024",
    tags: ["Stage Build", "LED Walls", "Facade"],
    smallDescription: "A 40-foot temporary pavilion with neon-wrapped brushed aluminum stands and a rotating debut floor.",
    projectDetail: "Structural engineering had to account for a 6-ton aluminum superstructure erected inside a convention hall.",
  },
  {
    _id: "dummy-3",
    mainImage: installationImg,
    serviceCategory: "Outdoor Campaign",
    tagColor: "bg-accent-purple",
    title: "Cantt. Billboard Circuit",
    client: "Samsung / Wakgroup",
    year: "2024",
    tags: ["Printing", "Outdoor", "Installation"],
    smallDescription: "A series of high-altitude double-sided billboard structures deployed at primary intersections.",
    projectDetail: "Wakgroup commissioned a 6-site outdoor circuit across the Cantonment corridor.",
  },
  {
    _id: "dummy-4",
    mainImage: eventsImg,
    serviceCategory: "Live Production",
    tagColor: "bg-accent-mint",
    title: "ARY News Studio Set",
    client: "ARY Network",
    year: "2023",
    tags: ["Scenic Design", "LED", "Fabrication"],
    smallDescription: "Scenic custom broadcast television set with integrated LED wall mounts and architectural wood cladding.",
    projectDetail: "ARY News required a complete overhaul of their primary studio set.",
  },
  {
    _id: "dummy-5",
    mainImage: printingImg,
    serviceCategory: "Print & Graphics",
    tagColor: "bg-accent-yellow",
    title: "HQ Facade Wrap",
    client: "Pak Arab Housing",
    year: "2023",
    tags: ["Wide-Format Print", "Installation"],
    smallDescription: "Weatherproof 12-meter continuous graphic applied to structural glass siding.",
    projectDetail: "Pak Arab Housing wanted their brand vision rendered at architectural scale.",
  },
  {
    _id: "dummy-6",
    mainImage: fabKineticImg,
    serviceCategory: "Kinetic Signage",
    tagColor: "bg-accent-coral",
    title: "Rotating Brand Wall",
    client: "Client Confidential",
    year: "2023",
    tags: ["Fabrication", "Kinetics", "Design"],
    smallDescription: "A 3-panel kinetic brand wall for a corporate headquarters lobby.",
    projectDetail: "The brief required a permanent, low-maintenance kinetic installation.",
  },
];

/* ─── IMAGE FIX MAP — patches broken /src/assets/ paths from old seeded data ─ */
const IMAGE_FIX_MAP: Record<string, string> = {
  "/src/assets/project-lumos.jpg":    projectLumosImg,
  "/src/assets/project-monolith.jpg": projectMonolithImg,
  "/src/assets/printing.jpg":         printingImg,
  "/src/assets/events.jpg":           eventsImg,
  "/src/assets/installation.jpg":     installationImg,
  "/src/assets/fab-kinetic.jpg":      fabKineticImg,
};

function fixImage(src: string): string {
  if (src?.startsWith("/src/assets/")) return IMAGE_FIX_MAP[src] ?? src;
  return src;
}

const testimonials = [
  {
    quote: "I have worked with Ads Dot COM for 10 years — in that time they have become a valued and trusted vendor. Their attention to detail and solution-driven approach has been invaluable.",
    author: "Ishfaq Ramey",
    role: "Senior Set Designer",
    company: "ARY News",
    color: "accent-blue",
  },
  {
    quote: "Ads Dot COM has been our preferred advertising agency for the past 6 years. They delivered a great service, rarely if ever unable to meet our short deadlines and still turn out superior quality.",
    author: "Waqar Ahmad Khan",
    role: "Chairman",
    company: "Pak Arab Housing Scheme",
    color: "accent-coral",
  },
  {
    quote: "I would just like to say thank you for taking care of advertising needs of our company. The service and advice received was second to none and the price was very competitive also.",
    author: "Sharyar",
    role: "General Manager",
    company: "Wakgroup — Samsung",
    color: "accent-mint",
  },
];

/* ─── LIGHTBOX ──────────────────────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    // Lock body scroll while lightbox is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onPointerDown={(e) => { e.stopPropagation(); onClose(); }}
    >
      <button
        onPointerDown={(e) => e.stopPropagation()}
        onClick={onClose}
        className="absolute top-4 right-4 size-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Close"
      >
        <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[88vh] rounded-2xl object-contain shadow-2xl"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ─── 3D CAROUSEL ───────────────────────────────────────────────────────── */
function ProjectCarousel({ projects }: { projects: any[] }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [dragState, setDragState] = useState<{ active: boolean; startX: number; deltaX: number }>({
    active: false, startX: 0, deltaX: 0,
  });
  const [expanded, setExpanded] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = projects.length;

  const prev = useCallback(() => { setCurrent((c) => (c - 1 + total) % total); setExpanded(null); }, [total]);
  const next = useCallback(() => { setCurrent((c) => (c + 1) % total); setExpanded(null); }, [total]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next, lightbox]);

  // Preload adjacent images
  useEffect(() => {
    [projects[(current + 1) % total]?.mainImage, projects[(current - 1 + total) % total]?.mainImage]
      .filter(Boolean)
      .forEach((src) => { const img = new Image(); img.src = src; });
  }, [current, projects, total]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Capture pointer so drag continues even if finger leaves element
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragState({ active: true, startX: e.clientX, deltaX: 0 });
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.active) return;
    // Prevent page scroll while dragging horizontally
    e.preventDefault();
    setDragState((s) => ({ ...s, deltaX: e.clientX - s.startX }));
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.active) return;
    const diff = e.clientX - dragState.startX;
    setDragState({ active: false, startX: 0, deltaX: 0 });
    if (diff < -50) next();
    else if (diff > 50) prev();
  };

  const getStyle = (i: number) => {
    const offset = (i - current + total) % total;
    const normalized = offset > total / 2 ? offset - total : offset;
    const absOff = Math.abs(normalized);
    if (absOff > 2) return { display: "none" };
    // On mobile use tighter spacing
    const spacing = typeof window !== "undefined" && window.innerWidth < 768 ? 160 : 220;
    const x = normalized * spacing + (dragState.active ? dragState.deltaX * 0.3 : 0);
    const z = -absOff * 100;
    const scale = 1 - absOff * 0.18;
    const opacity = 1 - absOff * 0.4;
    const rotateY = normalized * -10;
    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex: 10 - absOff,
      transition: dragState.active ? "none" : "all 0.5s cubic-bezier(0.16,1,0.3,1)",
    };
  };

  const p = projects[current];

  return (
    <div className="w-full">
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}

      {/* Outer clip so side cards don't bleed into navbar */}
      <div className="overflow-hidden px-4 md:px-0">
        {/* 3D stage — touch-action none stops browser scroll hijack */}
        <div
          ref={stageRef}
          className="relative h-[320px] md:h-[420px] flex items-center justify-center select-none"
          style={{ perspective: "1100px", touchAction: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => setDragState({ active: false, startX: 0, deltaX: 0 })}
        >
          {projects.map((proj: any, i: number) => {
            const style = getStyle(i);
            if ((style as any).display === "none") return null;
            const isCurrent = i === current;
            const offset = (i - current + total) % total;
            const normalized = offset > total / 2 ? offset - total : offset;
            const isAdjacent = Math.abs(normalized) === 1;
            return (
              <div
                key={proj._id ?? proj.title}
                className="absolute w-[200px] md:w-[300px] aspect-[3/4] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl"
                style={style as React.CSSProperties}
                onClick={() => {
                  if (dragState.active) return;
                  if (isCurrent) setLightbox({ src: proj.mainImage, alt: proj.title });
                  else setCurrent(i);
                }}
              >
                <div className="absolute inset-0 bg-ink/20" />
                <img
                  src={proj.mainImage}
                  alt={proj.title}
                  width={300}
                  height={400}
                  loading={isCurrent || isAdjacent ? "eager" : "lazy"}
                  decoding={isCurrent ? "sync" : "async"}
                  className="relative w-full h-full object-cover pointer-events-none"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.3"; }}
                />
                {isCurrent && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-4 md:p-5 pointer-events-none">
                    <span className={`self-start px-2.5 py-0.5 rounded-full ${proj.tagColor || "bg-accent-blue"} text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-2`}>
                      {proj.serviceCategory}
                    </span>
                    <h3 className="text-white text-base md:text-xl font-medium leading-tight">{proj.title}</h3>
                    <p className="text-white/60 text-[10px] md:text-xs mt-1">{proj.client} · {proj.year}</p>
                    <p className="text-white/40 text-[9px] mt-1">Tap to enlarge</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrow controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="size-10 md:size-11 rounded-full border border-canvas/20 flex items-center justify-center text-canvas hover:bg-canvas hover:text-ink transition-all active:scale-95"
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex gap-1.5">
          {projects.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setExpanded(null); }}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-canvas" : "size-2 bg-canvas/30 hover:bg-canvas/60"}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="size-10 md:size-11 rounded-full border border-canvas/20 flex items-center justify-center text-canvas hover:bg-canvas hover:text-ink transition-all active:scale-95"
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Active project detail */}
      <div className="mt-8 max-w-2xl mx-auto text-center px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {p.tags?.map((t: string) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-canvas/10 border border-canvas/15 text-[10px] font-medium text-canvas/70">
              {t}
            </span>
          ))}
        </div>
        <h2 className="text-xl md:text-3xl font-medium text-canvas mb-2">{p.title}</h2>
        <p className="text-canvas/50 text-sm leading-relaxed mb-4">{p.smallDescription}</p>
        <button
          onClick={() => setExpanded(expanded === current ? null : current)}
          className="text-[11px] font-semibold uppercase tracking-widest text-canvas/40 hover:text-canvas/80 transition-colors flex items-center gap-1.5 mx-auto"
        >
          {expanded === current ? "Hide detail" : "Read detail"}
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d={expanded === current ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${expanded === current ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
          <div className="p-5 bg-canvas/5 border border-canvas/10 rounded-2xl text-left">
            <p className="text-canvas/70 text-sm leading-relaxed">{p.projectDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── GLOBAL GALLERY ────────────────────────────────────────────────────── */
function GlobalGallery() {
  const images = useQuery(api.gallery.getGallery);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  // Still loading
  if (images === undefined) {
    return (
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="break-inside-avoid rounded-xl overflow-hidden bg-canvas/10 border border-canvas/10 animate-pulse" style={{ height: `${140 + (i % 3) * 60}px` }} />
        ))}
      </div>
    );
  }

  if (images.length === 0) {
    return <div className="text-center py-12 text-canvas/30 font-serif italic text-xl">No images in the gallery yet.</div>;
  }

  return (
    <>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img) => (
          <div
            key={img._id}
            className="break-inside-avoid relative group rounded-xl overflow-hidden bg-canvas/5 border border-canvas/10 cursor-zoom-in"
            onClick={() => setLightbox({ src: img.imageUrl, alt: img.caption || "Gallery image" })}
          >
            <img src={img.imageUrl} alt={img.caption || "Gallery image"} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────────── */
function WorkPage() {
  const convexWorks = useQuery(api.works.getWorks);

  const isLoading = convexWorks === undefined;
  // Fix any records that have old /src/assets/ paths, then fall back to dummy if empty
  const rawProjects = convexWorks !== undefined && convexWorks.length > 0 ? convexWorks : (convexWorks !== undefined ? dummyProjects : []);
  const projects = rawProjects.map((p: any) => ({ ...p, mainImage: fixImage(p.mainImage) }));

  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-4 bg-ink text-canvas grain-overlay overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(oklch(0.987 0.005 80) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-canvas/10 bg-canvas/10 text-[10px] uppercase tracking-[0.18em] font-bold text-canvas/50">
                <span className="size-1 rounded-full bg-accent-yellow" /> Selected Work
              </div>
              <h1 className="text-4xl md:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-balance">
                The Anthology.<br /><span className="font-serif italic text-accent-yellow">Built, not rendered.</span>
              </h1>
              <p className="mt-5 text-canvas/60 text-base max-w-lg leading-relaxed">
                Every project here is a physical execution — something that was measured, cut, printed, welded, and stood up in the real world.
              </p>
            </div>
            <div className="flex gap-6 shrink-0 text-center">
              {[{ v: "20+", l: "Years" }, { v: "3", l: "Trusted Partners" }, { v: "100%", l: "Physical" }].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-semibold text-canvas">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-wider text-canvas/40 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── PROJECT CAROUSEL ── */}
      <section className="bg-ink text-canvas px-4 pt-16 pb-20">
        <div className="max-w-5xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-[420px]">
              <div className="size-10 rounded-full border-2 border-canvas/20 border-t-canvas/80 animate-spin" />
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-24 text-canvas/30 font-serif italic text-xl">No projects yet.</div>
          ) : (
            <ProjectCarousel projects={projects} />
          )}
        </div>
      </section>

      {/* ── GLOBAL GALLERY ── */}
      <section className="bg-ink text-canvas px-4 pb-24 border-t border-canvas/10 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-3">Visuals</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              The <span className="font-serif italic text-accent-blue">Gallery.</span>
            </h2>
            <p className="mt-3 text-canvas/40 text-sm">Click any image to enlarge.</p>
          </div>
          <GlobalGallery />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-ink text-canvas px-4 pb-24 border-t border-canvas/10 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-yellow mb-3">Partnerships</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Words from <span className="font-serif italic text-accent-yellow">our clients.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="flex flex-col justify-between p-8 rounded-[2rem] bg-canvas/5 border border-canvas/10 hover:border-canvas/20 transition-colors duration-300">
                <div className="mb-8">
                  <div className={`size-1.5 rounded-full bg-${t.color} mb-5`} />
                  <p className="text-canvas/75 text-sm leading-relaxed italic">"{t.quote}"</p>
                </div>
                <div>
                  <div className="h-px bg-canvas/10 mb-4" />
                  <div className="font-semibold text-canvas text-sm">{t.author}</div>
                  <div className="text-xs text-canvas/40 mt-0.5">{t.role} — <span className={`font-serif italic text-${t.color}`}>{t.company}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 py-20 bg-canvas">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-purple mb-4">Start your project</div>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Your next physical execution<br /><span className="font-serif italic text-accent-blue">starts with a brief.</span>
          </h3>
          <p className="text-ink-soft text-sm max-w-md mx-auto mb-8 leading-relaxed">
            We'll scope out the materials, timeline and cost — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@adsdotcom.net" className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform">
              info@adsdotcom.net <ArrowRight />
            </a>
            <a href="mailto:sales@adsdotcom.net" className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink/10 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors">
              sales@adsdotcom.net <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
