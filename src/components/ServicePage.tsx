import { useEffect, useRef, useState } from "react";
import { PageShell } from "./page-shell";

export interface Capability { name: string; note: string; desc: string; }
export interface FAQ { q: string; a: string; }
export interface RelatedService { title: string; href: string; }
export interface ServicePageData {
  id: string;
  slug: string;
  color: string;
  h1: string;
  tagline: string;
  desc: string;
  image: string;
  imageAlt: string;
  capabilities: Capability[];
  stats: { v: string; l: string }[];
  faqs: FAQ[];
  related: RelatedService[];
  schema: Record<string, unknown>;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }); },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

const WA_LINK = "https://wa.me/923349955475";

export function ServicePage({ data }: { data: ServicePageData }) {
  const { ref, shown } = useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageShell>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
      />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 px-4 bg-surface overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(oklch(0.185 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.185 0.01 60) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[11px] text-ink-mute font-medium">
              <li><a href="/" className="hover:text-ink transition-colors">Home</a></li>
              <li className="opacity-40">/</li>
              <li><a href="/services" className="hover:text-ink transition-colors">Services</a></li>
              <li className="opacity-40">/</li>
              <li className="text-ink">{data.h1.split(" in ")[0]}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${data.color} mb-3 animate-reveal-up`}>
                Service {data.id}
              </div>
              <h1 className="text-4xl md:text-[3.2rem] leading-[1.05] font-medium tracking-tight text-balance animate-reveal-up" style={{ animationDelay: "60ms" }}>
                {data.h1}
              </h1>
              <p className="mt-3 font-serif italic text-ink-soft text-xl animate-reveal-up" style={{ animationDelay: "120ms" }}>
                {data.tagline}
              </p>
              <p className="mt-5 text-ink-soft leading-relaxed animate-reveal-up" style={{ animationDelay: "180ms" }}>
                {data.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 animate-reveal-up" style={{ animationDelay: "240ms" }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform">
                  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
                <a href="tel:+923349955475"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-ink/15 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors">
                  +92 334 9955475
                </a>
                <a href="mailto:info@adsdotcom.net"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-ink/15 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors">
                  info@adsdotcom.net
                </a>
              </div>
            </div>

            {/* Image + stats */}
            <div ref={ref} className={`relative transition-all duration-1000 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lift border border-ink/5">
                <img src={data.image} alt={data.imageAlt} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-3 gap-2 p-4 bg-white/85 backdrop-blur-xl rounded-2xl border border-ink/5 shadow-soft">
                {data.stats.map((st) => (
                  <div key={st.l} className="text-center">
                    <div className="text-base font-semibold text-ink">{st.v}</div>
                    <div className="text-[9px] text-ink-mute uppercase tracking-wider mt-0.5">{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${data.color} mb-3`}>What's Included</div>
        <h2 className="text-3xl font-medium tracking-tight mb-12">
          Our <span className="font-serif italic">{data.h1.split(" in ")[0]}</span> capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.capabilities.map((c) => (
            <div key={c.name} className="p-6 bg-surface rounded-[1.75rem] border border-ink/5 hover:shadow-lift transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className={`size-2.5 rounded-full bg-${data.color} shrink-0`} />
                <h2 className="text-lg font-semibold text-ink">{c.name}</h2>
                <span className="text-xs text-ink-mute ml-auto">— {c.note}</span>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface border-t border-ink/5 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${data.color} mb-3`}>Common Questions</div>
          <h2 className="text-3xl font-medium tracking-tight mb-10">
            Frequently asked about <span className="font-serif italic">{data.h1.split(" in ")[0].toLowerCase()}</span>
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-ink/5 bg-canvas overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-surface transition-colors"
                >
                  <span className="text-sm font-semibold text-ink">{faq.q}</span>
                  <svg className={`size-4 text-ink-mute shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-60" : "max-h-0"}`}>
                  <p className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-mute mb-3">Related</div>
        <h2 className="text-2xl font-medium tracking-tight mb-8">You might also need</h2>
        <div className="flex flex-wrap gap-3">
          {data.related.map((r) => (
            <a key={r.href} href={r.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink/10 rounded-full text-sm font-medium text-ink hover:bg-surface hover:border-ink/20 transition-all">
              {r.title}
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          ))}
          <a href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas rounded-full text-sm font-medium hover:scale-105 transition-transform">
            See Our Work
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 pb-24 max-w-4xl mx-auto">
        <div className="relative bg-ink text-canvas rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden grain-overlay">
          <div className="text-[10px] uppercase font-bold tracking-widest text-canvas/40 mb-4">Ready to start?</div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Get a quote for<br />
            <span className="font-serif italic text-accent-yellow">{data.h1.split(" in ")[0]}</span>
          </h2>
          <p className="text-canvas/60 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Tell us your brief and we'll respond within one business day with an honest scope and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
            <a href="tel:+923349955475"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors">
              +92 334 9955475
            </a>
            <a href="tel:+923030449955"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors">
              +92 303 0449955
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
