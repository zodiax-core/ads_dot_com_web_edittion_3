import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Listen, Draft, Prototype, Produce | ADS DOT COM" },
      { name: "description", content: "Four-stage production process: site survey & brief, 3D concept & engineering, material prototyping, then fabrication and on-site installation by our own crew." },
      { property: "og:title", content: "Our Process | ADS DOT COM" },
      { property: "og:description", content: "Four scenes, one continuous take. No subcontractors, no handoffs — just a rigorous four-stage process from brief to build." },
      { property: "og:url", content: "https://adsdotcom.net/process" },
    ],
    links: [
      { rel: "canonical", href: "https://adsdotcom.net/process" },
    ],
  }),
  component: ProcessPage,
});

const ArrowRight = () => (
  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── STEP DATA ─────────────────────────────────────────────────────────── */
const steps = [
  {
    n: "01",
    accent: "accent-blue",
    title: "Listen",
    subtitle: "Site Survey, Brief & Feasibility",
    overview: "Two weeks of workshops and site walks. We map the brief against the physical reality of the space.",
    description: "Every physical build starts with structural constraints, not ideas. Before a single sketch is made, our team conducts a full site survey — checking load capacities, municipal permit requirements, pedestrian sightlines, power access, and wind exposure. We then run a collaborative brief workshop with your marketing and operations teams to align objectives, budget and delivery milestones.",
    outputs: [
      "Site Audit Report with structural notes",
      "Permit & compliance assessment",
      "Confirmed project budget framework",
      "Signed-off brief and timeline",
    ],
    duration: "1–2 weeks",
    who: "Strategy + Engineering",
    faqs: [
      { q: "Do you handle permits?", a: "Yes. We manage municipal and cantonment permit applications on your behalf for all outdoor installations." },
      { q: "What if the site has access restrictions?", a: "We work with your facilities team to schedule access windows, including overnight or weekend slots." },
    ],
  },
  {
    n: "02",
    accent: "accent-coral",
    title: "Draft",
    subtitle: "3D Concepts, Spatial Sketches & Engineering Blueprints",
    overview: "Concept boards, spatial sketches and structural models. Nothing is presented flat.",
    description: "Our design studio works in three dimensions from day one. Concepts are built in CAD and visualised as spatial renders before being presented — alongside physical material swatches. Structural engineers review every design simultaneously to calculate load tolerances, wind factors and material stress points. Nothing enters production until design and engineering are fully aligned.",
    outputs: [
      "Full 3D spatial concept renders",
      "Structural engineering load report",
      "Material specification sheet",
      "Client review presentation deck",
    ],
    duration: "1–3 weeks",
    who: "Design + Structural Engineering",
    faqs: [
      { q: "How many design concepts do we receive?", a: "We present one fully developed concept per brief, refined through your feedback rather than offering multiple competing options." },
      { q: "Can we request revisions?", a: "Yes. The draft phase includes two rounds of design revisions at no additional cost." },
    ],
  },
  {
    n: "03",
    accent: "accent-yellow",
    title: "Prototype",
    subtitle: "Material Sampling, Proofing & Pre-production Sign-off",
    overview: "In-house sampling of every material touchpoint before a single roll of paper is cut or a joint is welded.",
    description: "Before we run a full production batch, we produce exact physical prototypes of every material element — printed panels at full colour density, fabricated joint samples, and mock lighting tests in our workshop. This stage eliminates costly on-site surprises. Every prototype is reviewed against the approved specification, and client sign-off is required before production begins.",
    outputs: [
      "Full-scale material print proofs",
      "Fabricated structural joint samples",
      "Ink & substrate test prints",
      "Signed pre-production approval sheet",
    ],
    duration: "3–7 days",
    who: "Print + Fabrication Workshop",
    faqs: [
      { q: "What if we want to change materials at this stage?", a: "Material changes at prototype stage are accommodated. Changes post sign-off may incur revision costs." },
      { q: "Do we keep the prototype samples?", a: "Yes. Physical samples are packaged and couriered to your team for records." },
    ],
  },
  {
    n: "04",
    accent: "accent-mint",
    title: "Produce & Deploy",
    subtitle: "Fabrication, Print, Transport & On-site Installation",
    overview: "Precision fabrication, printing and rigging — delivered on site with our own crew.",
    description: "Production runs in parallel across our print floor and fabrication workshop. Finished elements are QC-checked against the approved prototype before being packed for transport. Our own certified rigging crew handles the on-site installation — no third-party contractors. On completion, we conduct a full site inspection and provide a handover report documenting installation parameters, material specs and maintenance schedule.",
    outputs: [
      "Completed structural build or printed output",
      "On-site installation by our crew",
      "QC sign-off and photo documentation",
      "Handover report & maintenance schedule",
    ],
    duration: "Varies by scope",
    who: "Production + Rigging Crew",
    faqs: [
      { q: "What is your fastest turnaround for print-only jobs?", a: "For straightforward wide-format print jobs with approved artwork, we can deliver within 48 hours." },
      { q: "Do you provide post-installation maintenance?", a: "Yes. We offer scheduled maintenance visits and rapid-response repairs for all installed structures." },
    ],
  },
];

/* ─── GUARANTEE ITEMS ──────────────────────────────────────────────────── */
const guarantees = [
  { icon: "🏗️", title: "Zero subcontractors", desc: "Every phase is handled by our own team — print, fab, rigging. One point of accountability." },
  { icon: "📐", title: "Prototype before production", desc: "You approve physical samples before we run a single metre of material. No surprises on site." },
  { icon: "⏱️", title: "Committed timelines", desc: "We anchor project milestones in the contract. Delays on our side trigger agreed remedies." },
  { icon: "🔧", title: "Post-install support", desc: "We don't disappear after handover. Maintenance, repairs and site visits are part of our service." },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */
function ProcessPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-4 bg-surface overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(oklch(0.185 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.185 0.01 60) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-white/60 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute animate-reveal-up">
              <span className="size-1 rounded-full bg-accent-mint" /> How We Work
            </div>
            <h1 className="text-4xl md:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-balance animate-reveal-up" style={{ animationDelay: "80ms" }}>
              Four scenes.<br />
              <span className="font-serif italic text-accent-blue">One continuous take.</span>
            </h1>
            <p className="mt-5 text-ink-soft text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-reveal-up" style={{ animationDelay: "160ms" }}>
              Every project moves through the same four-stage rhythm — no handoffs, no lost detail, no subcontractors between you and the finished result.
            </p>

            {/* Step quick links */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-reveal-up" style={{ animationDelay: "240ms" }}>
              {steps.map((s) => (
                <button
                  key={s.n}
                  onClick={() => document.getElementById(`step-${s.n}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-ink/10 bg-white/60 backdrop-blur text-[12px] font-semibold text-ink-soft hover:text-ink hover:border-ink/30 transition-all"
                >
                  <span className={`size-2 rounded-full bg-${s.accent}`} />
                  {s.n} · {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP BLOCKS ── */}
      <div className="max-w-5xl mx-auto px-4 py-20 space-y-6">
        {steps.map((s, idx) => (
          <div
            key={s.n}
            id={`step-${s.n}`}
            className="bg-canvas border border-ink/5 rounded-[2rem] overflow-hidden shadow-soft hover:shadow-lift transition-shadow duration-500"
          >
            {/* Step header */}
            <div className={`relative flex flex-col md:flex-row items-start gap-6 p-8 border-b border-ink/5`}>
              {/* Number badge */}
              <div className={`shrink-0 size-14 rounded-2xl bg-${s.accent}/10 border border-${s.accent}/20 flex flex-col items-center justify-center`}>
                <span className={`text-[10px] font-bold uppercase tracking-widest text-${s.accent}`}>{s.n}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-${s.accent} mb-1`}>Phase {s.n}</div>
                <h2 className="text-2xl md:text-3xl font-serif italic font-medium text-ink">{s.title}</h2>
                <p className="text-sm text-ink-mute mt-1">{s.subtitle}</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-ink-mute">Duration</div>
                  <div className="text-sm font-semibold text-ink mt-0.5">{s.duration}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-ink-mute">Team</div>
                  <div className="text-sm font-semibold text-ink mt-0.5">{s.who}</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">
              <div>
                <p className="text-ink-soft leading-relaxed mb-6">{s.description}</p>
                {/* FAQs */}
                <div className="space-y-3">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-ink-mute mb-3">Common Questions</div>
                  {s.faqs.map((faq) => {
                    const key = `${s.n}-${faq.q}`;
                    return (
                      <div key={faq.q} className="rounded-2xl border border-ink/5 overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === key ? null : key)}
                          className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-surface transition-colors"
                        >
                          <span className="text-sm font-medium text-ink">{faq.q}</span>
                          <svg className={`size-4 text-ink-mute shrink-0 transition-transform ${openFaq === key ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaq === key ? "max-h-40" : "max-h-0"}`}>
                          <p className="px-4 pb-4 text-sm text-ink-soft leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Outputs */}
              <div className="bg-surface rounded-[1.5rem] p-6">
                <div className="text-[10px] uppercase font-bold tracking-widest text-ink-mute mb-4">Key Outputs</div>
                <ul className="space-y-3">
                  {s.outputs.map((o, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-1.5 size-1.5 rounded-full bg-${s.accent} shrink-0`} />
                      <span className="text-sm text-ink leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-ink/5">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-ink-mute mb-2">Phase Connector</div>
                  <p className="text-xs text-ink-mute leading-relaxed">
                    {idx < steps.length - 1
                      ? `Phase ${s.n} concludes with a client approval gate before ${steps[idx + 1].title} begins.`
                      : "Phase 04 concludes with a handover inspection and signed completion certificate."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── GUARANTEES ── */}
      <section className="px-4 py-20 bg-surface border-t border-ink/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-3">Our Standards</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Zero shortcuts. <span className="font-serif italic">High reliability.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="p-6 bg-canvas rounded-[1.75rem] border border-ink/5 shadow-soft hover:shadow-lift transition-shadow duration-500">
                <div className="text-3xl mb-4">{g.icon}</div>
                <h3 className="text-base font-semibold text-ink mb-2">{g.title}</h3>
                <p className="text-xs text-ink-soft leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 py-20 bg-canvas">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-purple mb-4">Ready to begin?</div>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Phase 01 starts with<br />
            <span className="font-serif italic text-accent-blue">a site visit.</span>
          </h3>
          <p className="text-ink-soft text-sm max-w-md mx-auto mb-8 leading-relaxed">
            We'll assess your space or brief at no charge and give you an honest scope and timeline before any commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@adsdotcom.net"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform">
              Book a site visit <ArrowRight />
            </a>
            <a href="tel:+923349955475"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink/10 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors">
              +92 334 9955475
            </a>
            <a href="tel:+923030449955"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink/10 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors">
              +92 303 0449955
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
