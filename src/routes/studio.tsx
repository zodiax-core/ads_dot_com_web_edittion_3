import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from "@/components/page-shell";
import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

export const Route = createFileRoute('/studio')({
  head: () => ({
    meta: [
      { title: "The Studio — About ADS DOT COM | Lahore, Pakistan" },
      { name: "description", content: "Founded May 16, 2006. ADS DOT COM is Lahore's integrated creative studio — 20+ years reinventing how brands show up in the physical world. Contact us for your next build." },
      { property: "og:title", content: "The Studio | ADS DOT COM" },
      { property: "og:description", content: "Sparking big ideas since 2006. Data-driven insight, human creativity and ethical execution — all under one roof in Lahore." },
      { property: "og:url", content: "https://adsdotcom.net/studio" },
    ],
    links: [
      { rel: "canonical", href: "https://adsdotcom.net/studio" },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const sendMessage = useMutation(api.messages.sendMessage);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendMessage({ name, email, message });
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const values = [
    {
      title: "Data-Driven Insight",
      desc: "Marketing is a science. We prioritize analytical target segmentation to ensure campaigns reach their highest potential audience cost-effectively.",
      icon: (
        <svg className="size-5 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: "Creative Communication",
      desc: "Advertising is an art. In an extremely noisy world, physical executions must stand out and disrupt the environment to make an impact.",
      icon: (
        <svg className="size-5 text-accent-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8V16M8 12h8" />
        </svg>
      )
    },
    {
      title: "Ethical Standards",
      desc: "We apply high ethical standards to everything we do, from raw substrate sourcing and employee safety to protecting consumer privacy.",
      icon: (
        <svg className="size-5 text-accent-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  return (
    <PageShell>
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="px-4 max-w-6xl mx-auto text-center mb-20 animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-white/60 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute">
            <span className="size-1 rounded-full bg-accent-blue" /> The Studio
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-balance leading-[1.1]">
            Sparking big ideas since <span className="font-serif italic text-accent-blue">2006</span>.
          </h1>
          <p className="mt-5 text-ink-soft text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Ads Dot COM incorporated on May 16, 2006. Starting as an outdoor billboard specialist, we have reinvented our capability set over ten times to serve the evolving needs of our partners across Pakistan.
          </p>
        </section>

        {/* Story Section */}
        <section className="px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent-coral">Our Journey</span>
            <h2 className="text-3xl font-medium tracking-tight mt-2 mb-6">
              Reinvention is in our DNA.
            </h2>
            <div className="space-y-4 text-sm text-ink-soft leading-relaxed">
              <p>
                Two decades ago, we began with billboard display management, copy production, maintenance, and municipal transit signage.
              </p>
              <p>
                As branding evolved, we recognized that static messaging is no longer enough. We expanded into wide-format architectural printing, mechanical fabrication, custom lighting rigging, and interactive live setup designs.
              </p>
              <p>
                Today, Ads Dot COM acts as a full-service creative execution partner. We combine deep marketing science with structural art to build physical installations that get brands noticed.
              </p>
            </div>
          </div>
          <div className="bg-surface rounded-[2.5rem] p-8 md:p-12 border border-ink/5">
            <div className="text-[10px] uppercase font-bold tracking-widest text-ink-mute mb-8">
              Key Metrics &amp; Milestones
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-semibold text-ink">2006</div>
                <div className="text-xs text-ink-mute mt-2">Founded on May 16</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-semibold text-ink">20+</div>
                <div className="text-xs text-ink-mute mt-2">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-semibold text-ink">10x</div>
                <div className="text-xs text-ink-mute mt-2">Capabilities Reinvented</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-semibold text-ink">100%</div>
                <div className="text-xs text-ink-mute mt-2">In-house Production</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="px-4 max-w-6xl mx-auto bg-surface rounded-[3rem] p-10 md:p-16 mb-28 border border-ink/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent-yellow">Philosophy</span>
            <h2 className="text-3xl font-medium tracking-tight mt-2 mb-4">
              Our Mission
            </h2>
            <p className="text-ink-soft text-sm leading-relaxed">
              To help our clients grow their businesses and nurture their brands with well-crafted, highly deliberate, and ethically responsible marketing communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-canvas p-6 rounded-[2rem] border border-ink/5">
                <div className="size-10 rounded-2xl bg-surface flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-medium text-ink mb-2">{v.title}</h3>
                <p className="text-xs text-ink-soft leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership / Team Section */}
        <section className="px-4 max-w-5xl mx-auto mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent-mint">Leadership</span>
            <h2 className="text-3xl font-medium tracking-tight mt-2 mb-4">
              The team behind the build.
            </h2>
            <p className="text-ink-soft text-sm leading-relaxed">
              We are a collective of structural engineers, designers, and production specialists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 bg-surface p-6 rounded-[2rem] border border-ink/5">
                <div className="size-24 rounded-full bg-canvas border border-ink/10 flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-canvas/50 flex items-center justify-center text-ink-mute/30">
                    <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-ink">[Team Member Name]</h3>
                  <p className="text-[11px] uppercase tracking-wider text-accent-blue font-bold mb-3">[Role / Title]</p>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    [Placeholder for bio. Please provide the actual team member name, role, and short bio text. We do not fabricate employee data.]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent-purple">Let's Connect</span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-2">
              Start your build.
            </h2>
            <p className="text-ink-soft text-sm mt-3">
              We operate across all major hubs in Pakistan. Let's sit down and plan your next physical execution.
            </p>
          </div>

          <div className="bg-canvas border border-ink/5 rounded-[2.5rem] p-8 md:p-12 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr] gap-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-ink-mute mb-1">HQ Address</h4>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    E-193/ii, Bank Stop<br />
                    Main Walton Road Cantt.<br />
                    Lahore, Pakistan
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-ink-mute mb-1">Direct Call</h4>
                  <a href="tel:+923349955475" className="text-xs text-ink-soft hover:text-accent-blue transition-colors">
                    +92 334 9955475
                  </a>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-ink-mute mb-1">Inquiries</h4>
                  <a href="mailto:info@adsdotcom.net" className="text-xs text-ink-soft hover:text-accent-blue transition-colors block">
                    info@adsdotcom.net
                  </a>
                  <a href="mailto:sales@adsdotcom.net" className="text-xs text-ink-soft hover:text-accent-blue transition-colors block mt-0.5">
                    sales@adsdotcom.net
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-ink-mute mb-1.5">Your Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-surface border border-ink/5 rounded-xl px-4 py-2.5 text-xs text-ink focus:outline-none focus:border-accent-blue transition-colors" placeholder="e.g. Waqar Khan" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-ink-mute mb-1.5">Email Address</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-surface border border-ink/5 rounded-xl px-4 py-2.5 text-xs text-ink focus:outline-none focus:border-accent-blue transition-colors" placeholder="e.g. name@company.com" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-ink-mute mb-1.5">Message</label>
                  <textarea rows={4} value={message} onChange={e => setMessage(e.target.value)} required className="w-full bg-surface border border-ink/5 rounded-xl px-4 py-2.5 text-xs text-ink focus:outline-none focus:border-accent-blue transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-ink text-canvas rounded-xl text-xs font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-50 disabled:hover:scale-100">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
