import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/services/website-development")({
  component: WebsiteDevelopmentService,
});

function WebsiteDevelopmentService() {
  const services = [
    {
      title: "Business Websites",
      desc: "Fast, SEO-optimized business websites that act as your digital storefront. We build responsive sites that load instantly and convert visitors into leads, using the latest modern web technologies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
      reverse: false,
    },
    {
      title: "E-Commerce Platforms",
      desc: "Scalable online stores engineered for high conversion rates. We integrate secure payment gateways, inventory management, and intuitive user experiences to maximize your digital sales channel.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80",
      reverse: true,
    },
    {
      title: "Custom Web Applications",
      desc: "Complex, data-driven web applications built to solve specific business problems. From internal dashboards to SaaS products, we build scalable architectures that grow with your user base.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80",
      reverse: false,
    },
    {
      title: "Landing Pages & Lead Gen",
      desc: "Highly optimized landing pages designed for specific marketing campaigns. We employ A/B testing, heat mapping, and conversion rate optimization (CRO) strategies to ensure maximum ROI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      <Nav ready={true} />
      
      {/* Header */}
      <header className="pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-surface text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute">
            <span className="size-1 rounded-full bg-accent-yellow" /> Digital Engineering
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-balance">
            Code that <span className="font-serif italic text-accent-yellow">converts.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            Business websites, e-commerce stores, landing pages and web apps — fast, SEO-optimised and built with modern technology to drive real, measurable growth.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-12 md:py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-32">
          {services.map((s, idx) => (
            <div key={s.title} className={`flex flex-col gap-10 md:gap-16 items-center ${s.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lift border border-ink/5 group">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-ink uppercase tracking-wider shadow-sm">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink">{s.title}</h2>
                <p className="text-ink-soft leading-relaxed text-lg">{s.desc}</p>
                <div className="h-px w-12 bg-accent-yellow/50" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl font-medium tracking-tight mb-6">Ready to digitize your presence?</h2>
        <a href="https://wa.me/923349955475" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-105 transition-transform">
          Talk to a Developer
        </a>
      </section>
      
      <Footer />
    </div>
  );
}
