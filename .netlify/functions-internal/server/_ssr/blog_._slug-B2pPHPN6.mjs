import { r as __toESM } from "../_runtime.mjs";
import { a as useMutation, c as require_react, o as useQuery, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { t as api } from "./api-DSJLF2wo.mjs";
import { t as PageShell } from "./page-shell-DNYCzSgU.mjs";
import { t as Route } from "./blog_._slug-CoeGlIMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog_._slug-B2pPHPN6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WA_LINK = "https://wa.me/923349955475";
function formatDate(iso) {
	return new Date(iso).toLocaleDateString("en-PK", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function CategoryBadge({ cat }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${{
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
function ContactForm() {
	const sendMessage = useMutation(api.messages.sendMessage);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		try {
			await sendMessage({
				name,
				email,
				message
			});
			setStatus("done");
			setName("");
			setEmail("");
			setMessage("");
		} catch {
			setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface rounded-2xl border border-ink/5 p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-semibold text-ink mb-1",
				children: "Get in touch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft mb-6",
				children: "Have a project in mind? We'll respond within one business day."
			}),
			status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-3xl mb-2",
					children: "✓"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-ink",
					children: "Message sent. We'll be in touch soon."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] font-bold uppercase tracking-wider text-ink-mute mb-1.5",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							required: true,
							className: "w-full bg-canvas border border-ink/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue transition-colors",
							placeholder: "Your name"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] font-bold uppercase tracking-wider text-ink-mute mb-1.5",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							required: true,
							className: "w-full bg-canvas border border-ink/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue transition-colors",
							placeholder: "you@company.com"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-[11px] font-bold uppercase tracking-wider text-ink-mute mb-1.5",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 4,
						value: message,
						onChange: (e) => setMessage(e.target.value),
						required: true,
						className: "w-full bg-canvas border border-ink/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent-blue transition-colors resize-none",
						placeholder: "Tell us about your project..."
					})] }),
					status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-red-500",
						children: "Failed to send. Please try again or WhatsApp us directly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: status === "sending",
						className: "w-full py-3 bg-ink text-canvas rounded-xl text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-50",
						children: status === "sending" ? "Sending…" : "Send Message"
					})
				]
			})
		]
	});
}
function BlogPost() {
	const { slug } = Route.useParams();
	const post = useQuery(api.blog.getPostBySlug, { slug });
	const relatedPosts = useQuery(api.blog.getRelatedPosts, post ? {
		category: post.category,
		excludeSlug: post.slug
	} : "skip");
	if (post === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-36 max-w-3xl mx-auto px-4 animate-pulse",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-32 bg-ink/10 rounded mb-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-full bg-ink/10 rounded mb-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-3/4 bg-ink/10 rounded mb-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full aspect-[16/9] bg-ink/10 rounded-2xl mb-8" }),
			[...Array(6)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-ink/10 rounded mb-3 last:w-3/4" }, i))
		]
	}) });
	if (post === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-7xl italic text-ink mb-4",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink-soft mb-6",
					children: "This post doesn't exist or has been removed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/blog",
					className: "inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas rounded-full text-sm font-medium",
					children: "← Back to Journal"
				})
			]
		})
	}) });
	const schema = {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "https://adsdotcom.net/"
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Blog",
					"item": "https://adsdotcom.net/blog"
				},
				{
					"@type": "ListItem",
					"position": 3,
					"name": post.title,
					"item": `https://adsdotcom.net/blog/${post.slug}`
				}
			]
		}, {
			"@type": "Article",
			"headline": post.title,
			"description": post.excerpt,
			"image": post.featuredImage,
			"datePublished": post.publishedDate,
			"dateModified": post.updatedDate,
			"author": {
				"@type": "Organization",
				"name": post.authorName,
				"url": "https://adsdotcom.net"
			},
			"publisher": {
				"@type": "Organization",
				"name": "ADS DOT COM",
				"url": "https://adsdotcom.net",
				"logo": "https://adsdotcom.net/logo.png"
			},
			"mainEntityOfPage": `https://adsdotcom.net/blog/${post.slug}`
		}]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full h-[45vh] md:h-[55vh] overflow-hidden relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.featuredImage,
					alt: post.featuredImageAlt,
					className: "w-full h-full object-cover",
					fetchPriority: "high",
					decoding: "sync"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-0 left-0 right-0 px-4 pb-8 max-w-4xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBadge, { cat: post.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-white/70 text-[11px]",
							children: [post.readTimeMinutes, " min read"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl md:text-4xl font-serif font-medium text-white leading-tight max-w-2xl",
						children: post.title
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-4 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Breadcrumb",
						className: "mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "flex items-center gap-2 text-[11px] text-ink-mute font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/",
									className: "hover:text-ink transition-colors",
									children: "Home"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "opacity-40",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/blog",
									className: "hover:text-ink transition-colors",
									children: "Journal"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "opacity-40",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-ink truncate max-w-[200px]",
									children: post.title
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 pb-6 border-b border-ink/10 mb-8 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-8 rounded-full bg-ink text-canvas flex items-center justify-center text-xs font-bold",
									children: post.authorName.slice(0, 2).toUpperCase()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-ink",
									children: post.authorName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-ink/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
								dateTime: post.publishedDate,
								className: "text-[11px] text-ink-mute",
								children: formatDate(post.publishedDate)
							}),
							post.updatedDate !== post.publishedDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-ink/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-ink-mute",
								children: ["Updated ", formatDate(post.updatedDate)]
							})] }),
							post.relatedServiceSlug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-ink/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `/services/${post.relatedServiceSlug}`,
								className: "text-[11px] text-accent-blue hover:underline font-medium",
								children: ["→ ", post.relatedServiceTitle]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-ink-soft leading-relaxed mb-8 font-serif italic border-l-4 border-accent-blue/30 pl-5",
						children: post.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose prose-sm max-w-none text-ink-soft leading-relaxed\r\n                [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:tracking-tight\r\n                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-2\r\n                [&_p]:mb-5 [&_p]:leading-relaxed\r\n                [&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:list-none [&_ul]:pl-0\r\n                [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:text-sm\r\n                [&_blockquote]:my-6 [&_blockquote]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:border-accent-blue/40 [&_blockquote]:italic [&_blockquote]:text-ink-soft\r\n                [&_img]:rounded-2xl [&_img]:w-full [&_img]:my-6\r\n                [&_strong]:text-ink [&_strong]:font-semibold",
						dangerouslySetInnerHTML: { __html: post.body }
					}),
					post.relatedServiceSlug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 p-6 bg-surface rounded-2xl border border-ink/5 flex items-center justify-between gap-4 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase font-bold tracking-widest text-ink-mute mb-1",
							children: "Related Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-ink",
							children: post.relatedServiceTitle
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `/services/${post.relatedServiceSlug}`,
							className: "inline-flex items-center gap-2 px-4 py-2.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-105 transition-transform shrink-0",
							children: ["View Service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 p-8 bg-ink text-canvas rounded-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-canvas/60 mb-4",
							children: "Ready to start a project? Talk to us directly."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row gap-3 justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WA_LINK,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "size-4",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z" })
									}), "WhatsApp Us"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+923349955475",
									className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors",
									children: "+92 334 9955475"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+923030449955",
									className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors",
									children: "+92 303 0449955"
								})
							]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}), relatedPosts && relatedPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[11px] font-bold uppercase tracking-widest text-ink-mute mb-4 pb-2 border-b border-ink/10",
						children: "Related Articles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: relatedPosts.map((rp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `/blog/${rp.slug}`,
							className: "group flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-16 rounded-xl overflow-hidden shrink-0 bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: rp.featuredImage,
									alt: rp.featuredImageAlt,
									loading: "lazy",
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-accent-blue uppercase tracking-wider mb-1",
										children: rp.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-ink leading-snug line-clamp-2 group-hover:text-accent-blue transition-colors",
										children: rp.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] text-ink-mute mt-1",
										children: [rp.readTimeMinutes, " min read"]
									})
								]
							})]
						}, rp._id))
					})] })]
				})]
			}), relatedPosts && relatedPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-10 border-t border-ink/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-serif font-medium text-ink mb-8",
					children: "More from the Journal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: relatedPosts.map((rp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `/blog/${rp.slug}`,
						className: "group flex flex-col border border-ink/5 rounded-2xl overflow-hidden hover:shadow-lift transition-shadow duration-500 bg-canvas",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: rp.featuredImage,
								alt: rp.featuredImageAlt,
								loading: "lazy",
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex-1 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-accent-blue",
									children: rp.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-ink leading-snug group-hover:text-accent-blue transition-colors line-clamp-2",
									children: rp.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-ink-mute mt-auto",
									children: [
										formatDate(rp.publishedDate),
										" · ",
										rp.readTimeMinutes,
										" min"
									]
								})
							]
						})]
					}, rp._id))
				})]
			})]
		})
	] });
}
//#endregion
export { BlogPost as component };
