import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Advertising & Production Insights | ADS DOT COM" },
      { name: "description", content: "Expert insights on outdoor advertising, printing, fabrication, event production and creative design from ADS DOT COM, Lahore's integrated creative agency since 2006." },
      { property: "og:title", content: "Blog | ADS DOT COM" },
      { property: "og:url", content: "https://adsdotcom.net/blog" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/blog" }],
  }),
  component: BlogIndex,
});

const CATEGORIES = ["All", "Outdoor Advertising", "Printing", "Events", "Fabrication", "Creative Design", "Industry News"];
const POSTS_PER_PAGE = 9;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" });
}

function SkeletonCard() {
  return (
    <div className="flex flex-col bg-canvas border border-ink/5 rounded-[1.5rem] overflow-hidden animate-pulse">
      <div className="aspect-[16/9] bg-ink/10" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-3 w-20 bg-ink/10 rounded-full" />
        <div className="h-4 w-full bg-ink/10 rounded-full" />
        <div className="h-4 w-3/4 bg-ink/10 rounded-full" />
        <div className="h-3 w-1/2 bg-ink/10 rounded-full mt-2" />
      </div>
    </div>
  );
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
    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${colors[cat] ?? "bg-ink/10 text-ink"}`}>
      {cat}
    </span>
  );
}

function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const allPosts = useQuery(api.blog.getPosts, { category: activeCategory === "All" ? undefined : activeCategory });
  const isLoading = allPosts === undefined;

  const totalPages = allPosts ? Math.ceil(allPosts.length / POSTS_PER_PAGE) : 1;
  const paginated = allPosts?.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE) ?? [];

  const featured = paginated[0];
  const rest = paginated.slice(1);

  const handleCategory = (cat: string) => { setActiveCategory(cat); setPage(1); };

  return (
    <PageShell>
      {/* ── MASTHEAD ── */}
      <div className="pt-28 pb-6 px-4 border-b border-ink/10 bg-canvas">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-mute mb-2">ADS DOT COM</div>
              <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-ink">Journal</h1>
              <p className="mt-2 text-ink-soft text-sm max-w-md">
                Production insights, advertising strategy and creative direction — from the team that builds it.
              </p>
            </div>
            <div className="text-[11px] text-ink-mute font-medium hidden md:block">
              Lahore, Pakistan · Est. 2006
            </div>
          </div>
        </div>
      </div>

      {/* ── CATEGORY TABS ── */}
      <div className="sticky top-0 z-40 bg-canvas border-b border-ink/10 px-4">
        <div className="max-w-6xl mx-auto flex gap-0 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`whitespace-nowrap px-4 py-3.5 text-[12px] font-semibold border-b-2 transition-all ${
                activeCategory === cat
                  ? "border-ink text-ink"
                  : "border-transparent text-ink-mute hover:text-ink hover:border-ink/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {isLoading ? (
          /* Skeleton */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : paginated.length === 0 ? (
          <div className="text-center py-32 text-ink-soft font-serif italic text-xl">
            No posts in this category yet.
          </div>
        ) : (
          <>
            {/* ── FEATURED (first post, big) ── */}
            {featured && (
              <a href={`/blog/${featured.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pb-10 border-b border-ink/10">
                <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-surface">
                  <img
                    src={featured.featuredImage}
                    alt={featured.featuredImageAlt}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <CategoryBadge cat={featured.category} />
                    <span className="text-[10px] text-ink-mute">{featured.readTimeMinutes} min read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-ink leading-tight group-hover:text-accent-blue transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-ink-soft leading-relaxed line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-ink/5">
                    <span className="text-[11px] text-ink-mute">{formatDate(featured.publishedDate)}</span>
                    <span className="text-[11px] font-semibold text-ink ml-auto flex items-center gap-1">
                      Read article
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            )}

            {/* ── GRID ── */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <article key={post._id} className="group flex flex-col border-b border-ink/10 pb-6 md:border-b-0 md:pb-0">
                    <a href={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl aspect-[16/9] bg-surface mb-4">
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </a>
                    <div className="flex items-center gap-2 mb-2">
                      <CategoryBadge cat={post.category} />
                      <span className="text-[10px] text-ink-mute">{post.readTimeMinutes} min</span>
                    </div>
                    <h2 className="text-base font-serif font-medium text-ink leading-snug mb-2 group-hover:text-accent-blue transition-colors">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>
                    <p className="text-xs text-ink-soft leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-ink/5">
                      <span className="text-[10px] text-ink-mute">{formatDate(post.publishedDate)}</span>
                      <a href={`/blog/${post.slug}`} className="text-[11px] font-semibold text-ink hover:text-accent-blue transition-colors flex items-center gap-1">
                        Read
                        <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* ── PAGINATION ── */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button disabled={page === 1} onClick={() => setPage(p => p - 1)}
                  className="px-4 py-2 border border-ink/10 rounded text-sm font-medium text-ink disabled:opacity-30 hover:bg-surface transition-colors">
                  ← Prev
                </button>
                <span className="text-sm text-ink-mute px-3">Page {page} of {totalPages}</span>
                <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}
                  className="px-4 py-2 border border-ink/10 rounded text-sm font-medium text-ink disabled:opacity-30 hover:bg-surface transition-colors">
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </PageShell>
  );
}
