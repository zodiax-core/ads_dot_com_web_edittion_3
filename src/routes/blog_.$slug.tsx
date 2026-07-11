import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} | ADS DOT COM Blog` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `https://adsdotcom.net/blog/${params.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `https://adsdotcom.net/blog/${params.slug}` }],
  }),
  component: BlogPost,
});

const WA_LINK = "https://wa.me/923349955475";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", { day: "numeric", month: "long", year: "numeric" });
}

function CategoryBadge({ cat }: { cat: string }) {
  const colors: Record<string, string> = {
    "Outdoor Advertising": "bg-blue-100 text-blue-700",
    "Printing": "bg-yellow-100 text-yellow-700",
    "Events": "bg-emerald-100 text-emerald-700",
    "Fabrication": "bg-orange-100 text-orange-700",
    "Creative Design": "bg-purple-100 text-purple-700",
    "Industry News": "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${colors[cat] ?? "bg-ink/10 text-ink"}`}>
      {cat}
    </span>
  );
}

function ContactForm() {
  const sendMessage = useMutation(api.messages.sendMessage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendMessage({ name, email, message });
      setStatus("done");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-surface rounded-2xl border border-ink/5 p-8">
      <h3 className="text-xl font-semibold text-ink mb-1">Get in touch</h3>
      <p className="text-sm text-ink-soft mb-6">Have a project in mind? We'll respond within one business day.</p>
      {status === "done" ? (
        <div className="py-8 text-center">
          <div className="text-3xl mb-2">✓</div>
          <p className="text-sm font-medium text-ink">Message sent. We'll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-mute mb-1.5">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} required
                className="w-full bg-canvas border border-ink/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="Your name" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-mute mb-1.5">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                className="w-full bg-canvas border border-ink/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue transition-colors"
                placeholder="you@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-ink-mute mb-1.5">Message</label>
            <textarea rows={4} value={message} onChange={e => setMessage(e.target.value)} required
              className="w-full bg-canvas border border-ink/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue transition-colors resize-none"
              placeholder="Tell us about your project..." />
          </div>
          {status === "error" && <p className="text-xs text-red-500">Failed to send. Please try again or WhatsApp us directly.</p>}
          <button type="submit" disabled={status === "sending"}
            className="w-full py-3 bg-ink text-canvas rounded-xl text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-50">
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}

function BlogPost() {
  const { slug } = Route.useParams();
  const post = useQuery(api.blog.getPostBySlug, { slug });
  const relatedPosts = useQuery(
    api.blog.getRelatedPosts,
    post ? { category: post.category, excludeSlug: post.slug } : "skip"
  );

  // Loading state
  if (post === undefined) {
    return (
      <PageShell>
        <div className="pt-36 max-w-3xl mx-auto px-4 animate-pulse">
          <div className="h-6 w-32 bg-ink/10 rounded mb-6" />
          <div className="h-10 w-full bg-ink/10 rounded mb-4" />
          <div className="h-10 w-3/4 bg-ink/10 rounded mb-8" />
          <div className="w-full aspect-[16/9] bg-ink/10 rounded-2xl mb-8" />
          {[...Array(6)].map((_, i) => <div key={i} className="h-4 bg-ink/10 rounded mb-3 last:w-3/4" />)}
        </div>
      </PageShell>
    );
  }

  // Not found
  if (post === null) {
    return (
      <PageShell>
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-7xl italic text-ink mb-4">404</h1>
            <p className="text-ink-soft mb-6">This post doesn't exist or has been removed.</p>
            <a href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas rounded-full text-sm font-medium">← Back to Journal</a>
          </div>
        </div>
      </PageShell>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://adsdotcom.net/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://adsdotcom.net/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://adsdotcom.net/blog/${post.slug}` },
        ],
      },
      {
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.featuredImage,
        "datePublished": post.publishedDate,
        "dateModified": post.updatedDate,
        "author": { "@type": "Organization", "name": post.authorName, "url": "https://adsdotcom.net" },
        "publisher": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net", "logo": "https://adsdotcom.net/logo.png" },
        "mainEntityOfPage": `https://adsdotcom.net/blog/${post.slug}`,
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <div className="w-full h-[45vh] md:h-[55vh] overflow-hidden relative">
        <img src={post.featuredImage} alt={post.featuredImageAlt}
          className="w-full h-full object-cover" fetchPriority="high" decoding="sync" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <CategoryBadge cat={post.category} />
            <span className="text-white/70 text-[11px]">{post.readTimeMinutes} min read</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-serif font-medium text-white leading-tight max-w-2xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── TWO-COL LAYOUT ── */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

          {/* ── MAIN CONTENT ── */}
          <article>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[11px] text-ink-mute font-medium">
                <li><a href="/" className="hover:text-ink transition-colors">Home</a></li>
                <li className="opacity-40">/</li>
                <li><a href="/blog" className="hover:text-ink transition-colors">Journal</a></li>
                <li className="opacity-40">/</li>
                <li className="text-ink truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>

            {/* Meta row */}
            <div className="flex items-center gap-4 pb-6 border-b border-ink/10 mb-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-ink text-canvas flex items-center justify-center text-xs font-bold">
                  {post.authorName.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-ink">{post.authorName}</span>
              </div>
              <div className="h-4 w-px bg-ink/10" />
              <time dateTime={post.publishedDate} className="text-[11px] text-ink-mute">
                {formatDate(post.publishedDate)}
              </time>
              {post.updatedDate !== post.publishedDate && (
                <>
                  <div className="h-4 w-px bg-ink/10" />
                  <span className="text-[11px] text-ink-mute">
                    Updated {formatDate(post.updatedDate)}
                  </span>
                </>
              )}
              {post.relatedServiceSlug && (
                <>
                  <div className="h-4 w-px bg-ink/10" />
                  <a href={`/services/${post.relatedServiceSlug}`}
                    className="text-[11px] text-accent-blue hover:underline font-medium">
                    → {post.relatedServiceTitle}
                  </a>
                </>
              )}
            </div>

            {/* Excerpt */}
            <p className="text-lg text-ink-soft leading-relaxed mb-8 font-serif italic border-l-4 border-accent-blue/30 pl-5">
              {post.excerpt}
            </p>

            {/* Body — rendered as HTML */}
            <div
              className="prose prose-sm max-w-none text-ink-soft leading-relaxed
                [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:tracking-tight
                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-2
                [&_p]:mb-5 [&_p]:leading-relaxed
                [&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:list-none [&_ul]:pl-0
                [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:text-sm
                [&_blockquote]:my-6 [&_blockquote]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:border-accent-blue/40 [&_blockquote]:italic [&_blockquote]:text-ink-soft
                [&_img]:rounded-2xl [&_img]:w-full [&_img]:my-6
                [&_strong]:text-ink [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            {/* Related service */}
            {post.relatedServiceSlug && (
              <div className="mt-10 p-6 bg-surface rounded-2xl border border-ink/5 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-ink-mute mb-1">Related Service</div>
                  <div className="font-semibold text-ink">{post.relatedServiceTitle}</div>
                </div>
                <a href={`/services/${post.relatedServiceSlug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-105 transition-transform shrink-0">
                  View Service
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            )}

            {/* WhatsApp CTA */}
            <div className="mt-10 p-8 bg-ink text-canvas rounded-2xl text-center">
              <p className="text-sm text-canvas/60 mb-4">Ready to start a project? Talk to us directly.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
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
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="space-y-8">
            {/* Contact form */}
            <ContactForm />

            {/* Related posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink-mute mb-4 pb-2 border-b border-ink/10">
                  Related Articles
                </h3>
                <div className="space-y-5">
                  {relatedPosts.map((rp) => (
                    <a key={rp._id} href={`/blog/${rp.slug}`} className="group flex gap-3">
                      <div className="size-16 rounded-xl overflow-hidden shrink-0 bg-surface">
                        <img src={rp.featuredImage} alt={rp.featuredImageAlt} loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-1">{rp.category}</p>
                        <p className="text-sm font-medium text-ink leading-snug line-clamp-2 group-hover:text-accent-blue transition-colors">
                          {rp.title}
                        </p>
                        <p className="text-[10px] text-ink-mute mt-1">{rp.readTimeMinutes} min read</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* ── RELATED CARDS (full width below) ── */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-ink/10">
            <h2 className="text-2xl font-serif font-medium text-ink mb-8">More from the Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <a key={rp._id} href={`/blog/${rp.slug}`} className="group flex flex-col border border-ink/5 rounded-2xl overflow-hidden hover:shadow-lift transition-shadow duration-500 bg-canvas">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={rp.featuredImage} alt={rp.featuredImageAlt} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue">{rp.category}</span>
                    <h3 className="text-sm font-semibold text-ink leading-snug group-hover:text-accent-blue transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-ink-mute mt-auto">{formatDate(rp.publishedDate)} · {rp.readTimeMinutes} min</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageShell>
  );
}
