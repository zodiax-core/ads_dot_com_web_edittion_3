import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, o as useQuery, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { t as api } from "./api-DSJLF2wo.mjs";
import { t as PageShell } from "./page-shell-DZ0Y3aO0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CY0dYJh9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Outdoor Advertising",
	"Printing",
	"Events",
	"Fabrication",
	"Creative Design",
	"Industry News"
];
var POSTS_PER_PAGE = 9;
function formatDate(iso) {
	return new Date(iso).toLocaleDateString("en-PK", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function SkeletonCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col bg-canvas border border-ink/5 rounded-[1.5rem] overflow-hidden animate-pulse",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[16/9] bg-ink/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-20 bg-ink/10 rounded-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-full bg-ink/10 rounded-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-3/4 bg-ink/10 rounded-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-1/2 bg-ink/10 rounded-full mt-2" })
			]
		})]
	});
}
function CategoryBadge({ cat }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${{
			"Outdoor Advertising": "bg-blue-100 text-blue-700",
			"Printing": "bg-yellow-100 text-yellow-700",
			"Events": "bg-emerald-100 text-emerald-700",
			"Fabrication": "bg-orange-100 text-orange-700",
			"Creative Design": "bg-purple-100 text-purple-700",
			"Industry News": "bg-gray-100 text-gray-600"
		}[cat] ?? "bg-ink/10 text-ink"}`,
		children: cat
	});
}
function BlogIndex() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All");
	const [page, setPage] = (0, import_react.useState)(1);
	const allPosts = useQuery(api.blog.getPosts, { category: activeCategory === "All" ? void 0 : activeCategory });
	const isLoading = allPosts === void 0;
	const totalPages = allPosts ? Math.ceil(allPosts.length / POSTS_PER_PAGE) : 1;
	const paginated = allPosts?.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE) ?? [];
	const featured = paginated[0];
	const rest = paginated.slice(1);
	const handleCategory = (cat) => {
		setActiveCategory(cat);
		setPage(1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-28 pb-6 px-4 border-b border-ink/10 bg-canvas",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-6xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold uppercase tracking-[0.25em] text-ink-mute mb-2",
							children: "ADS DOT COM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-5xl md:text-6xl font-serif font-medium tracking-tight text-ink",
							children: "Journal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink-soft text-sm max-w-md",
							children: "Production insights, advertising strategy and creative direction — from the team that builds it."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-ink-mute font-medium hidden md:block",
						children: "Lahore, Pakistan · Est. 2006"
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 z-40 bg-canvas border-b border-ink/10 px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-6xl mx-auto flex gap-0 overflow-x-auto scrollbar-none",
				children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleCategory(cat),
					className: `whitespace-nowrap px-4 py-3.5 text-[12px] font-semibold border-b-2 transition-all ${activeCategory === cat ? "border-ink text-ink" : "border-transparent text-ink-mute hover:text-ink hover:border-ink/30"}`,
					children: cat
				}, cat))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto px-4 py-10",
			children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: [...Array(6)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i))
			}) : paginated.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center py-32 text-ink-soft font-serif italic text-xl",
				children: "No posts in this category yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `/blog/${featured.slug}`,
					className: "group grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pb-10 border-b border-ink/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl aspect-[16/10] bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: featured.featuredImage,
							alt: featured.featuredImageAlt,
							loading: "eager",
							fetchPriority: "high",
							className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBadge, { cat: featured.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] text-ink-mute",
									children: [featured.readTimeMinutes, " min read"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl md:text-3xl font-serif font-medium text-ink leading-tight group-hover:text-accent-blue transition-colors",
								children: featured.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink-soft leading-relaxed line-clamp-3",
								children: featured.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 pt-2 border-t border-ink/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-ink-mute",
									children: formatDate(featured.publishedDate)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] font-semibold text-ink ml-auto flex items-center gap-1",
									children: ["Read article", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "size-3.5",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M5 12h14M13 5l7 7-7 7",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										})
									})]
								})]
							})
						]
					})]
				}),
				rest.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: rest.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex flex-col border-b border-ink/10 pb-6 md:border-b-0 md:pb-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `/blog/${post.slug}`,
								className: "block overflow-hidden rounded-xl aspect-[16/9] bg-surface mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: post.featuredImage,
									alt: post.featuredImageAlt,
									loading: "lazy",
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBadge, { cat: post.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] text-ink-mute",
									children: [post.readTimeMinutes, " min"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-serif font-medium text-ink leading-snug mb-2 group-hover:text-accent-blue transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `/blog/${post.slug}`,
									children: post.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-ink-soft leading-relaxed line-clamp-2 flex-1",
								children: post.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mt-3 pt-3 border-t border-ink/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-ink-mute",
									children: formatDate(post.publishedDate)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `/blog/${post.slug}`,
									className: "text-[11px] font-semibold text-ink hover:text-accent-blue transition-colors flex items-center gap-1",
									children: ["Read", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "size-3",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M5 12h14M13 5l7 7-7 7",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										})
									})]
								})]
							})
						]
					}, post._id))
				}),
				totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex items-center justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: page === 1,
							onClick: () => setPage((p) => p - 1),
							className: "px-4 py-2 border border-ink/10 rounded text-sm font-medium text-ink disabled:opacity-30 hover:bg-surface transition-colors",
							children: "← Prev"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-ink-mute px-3",
							children: [
								"Page ",
								page,
								" of ",
								totalPages
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: page === totalPages,
							onClick: () => setPage((p) => p + 1),
							className: "px-4 py-2 border border-ink/10 rounded text-sm font-medium text-ink disabled:opacity-30 hover:bg-surface transition-colors",
							children: "Next →"
						})
					]
				})
			] })
		})
	] });
}
//#endregion
export { BlogIndex as component };
