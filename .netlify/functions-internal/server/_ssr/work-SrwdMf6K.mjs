import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, o as useQuery, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { t as api } from "./api-DSJLF2wo.mjs";
import { t as PageShell } from "./page-shell-ZTxEkQki.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-SrwdMf6K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ArrowRight = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
});
var testimonials = [
	{
		quote: "I have worked with Ads Dot COM for 10 years — in that time they have become a valued and trusted vendor. Their attention to detail and solution-driven approach has been invaluable.",
		author: "Ishfaq Ramey",
		role: "Senior Set Designer",
		company: "ARY News",
		color: "accent-blue"
	},
	{
		quote: "Ads Dot COM has been our preferred advertising agency for the past 6 years. They delivered a great service, rarely if ever unable to meet our short deadlines and still turn out superior quality.",
		author: "Waqar Ahmad Khan",
		role: "Chairman",
		company: "Pak Arab Housing Scheme",
		color: "accent-coral"
	},
	{
		quote: "I would just like to say thank you for taking care of advertising needs of our company. The service and advice received was second to none and the price was very competitive also.",
		author: "Sharyar",
		role: "General Manager",
		company: "Wakgroup — Samsung",
		color: "accent-mint"
	}
];
function Lightbox({ src, alt, onClose }) {
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handler);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handler);
			document.body.style.overflow = "";
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onClose,
			className: "absolute top-5 right-5 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10",
			"aria-label": "Close",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "size-5",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M18 6L6 18M6 6l12 12",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl",
			onClick: (e) => e.stopPropagation()
		})]
	});
}
function ProjectCarousel({ projects }) {
	const [current, setCurrent] = (0, import_react.useState)(0);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [startX, setStartX] = (0, import_react.useState)(0);
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	const total = projects.length;
	const prev = (0, import_react.useCallback)(() => setCurrent((c) => (c - 1 + total) % total), [total]);
	const next = (0, import_react.useCallback)(() => setCurrent((c) => (c + 1) % total), [total]);
	(0, import_react.useEffect)(() => {
		const handleKey = (e) => {
			if (lightbox) return;
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [
		prev,
		next,
		lightbox
	]);
	const handlePointerDown = (e) => {
		setDragging(true);
		setStartX(e.clientX);
	};
	const handlePointerUp = (e) => {
		if (!dragging) return;
		setDragging(false);
		const diff = e.clientX - startX;
		if (diff < -50) next();
		else if (diff > 50) prev();
	};
	const getStyle = (i) => {
		const offset = (i - current + total) % total;
		const normalized = offset > total / 2 ? offset - total : offset;
		const absOff = Math.abs(normalized);
		if (absOff > 2) return { display: "none" };
		const x = normalized * 220;
		const z = -absOff * 120;
		const scale = 1 - absOff * .18;
		const opacity = 1 - absOff * .35;
		return {
			transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${normalized * -12}deg)`,
			opacity,
			zIndex: 10 - absOff,
			transition: "all 0.55s cubic-bezier(0.16,1,0.3,1)"
		};
	};
	const p = projects[current];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [
			lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				src: lightbox.src,
				alt: lightbox.alt,
				onClose: () => setLightbox(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden select-none",
				style: { perspective: "1200px" },
				onPointerDown: handlePointerDown,
				onPointerUp: handlePointerUp,
				onPointerLeave: () => setDragging(false),
				children: projects.map((proj, i) => {
					const style = getStyle(i);
					if (style.display === "none") return null;
					const isCurrent = i === current;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute w-[260px] md:w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer",
						style,
						onClick: () => {
							if (isCurrent) setLightbox({
								src: proj.mainImage,
								alt: proj.title
							});
							else setCurrent(i);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: proj.mainImage,
							alt: proj.title,
							className: "w-full h-full object-cover"
						}), isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `self-start px-2.5 py-0.5 rounded-full ${proj.tagColor || "bg-accent-blue"} text-white text-[10px] font-bold uppercase tracking-wider mb-2`,
									children: proj.serviceCategory
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-white text-xl font-medium leading-tight",
									children: proj.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-white/60 text-xs mt-1",
									children: [
										proj.client,
										" · ",
										proj.year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-1 text-white/50 text-[10px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "size-3",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: 2,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "11",
											cy: "11",
											r: "8"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 21l-4.35-4.35" })]
									}), "Click to enlarge"]
								})
							]
						})]
					}, proj._id ?? proj.title);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-4 mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: prev,
						"aria-label": "Previous",
						className: "size-11 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "size-4",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M15 19l-7-7 7-7",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1.5",
						children: projects.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCurrent(i),
							className: `rounded-full transition-all ${i === current ? "w-5 h-2 bg-canvas" : "size-2 bg-canvas/30 hover:bg-canvas/60"}`
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: next,
						"aria-label": "Next",
						className: "size-11 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "size-4",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M9 5l7 7-7 7",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 max-w-2xl mx-auto text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-2 mb-4",
						children: p.tags?.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2.5 py-1 rounded-full bg-canvas/10 border border-canvas/15 text-[10px] font-medium text-canvas/70",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl md:text-3xl font-medium text-canvas mb-2",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-canvas/50 text-sm leading-relaxed mb-4",
						children: p.smallDescription
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setExpanded(expanded === current ? null : current),
						className: "text-[11px] font-semibold uppercase tracking-widest text-canvas/40 hover:text-canvas/80 transition-colors flex items-center gap-1.5 mx-auto",
						children: [expanded === current ? "Hide detail" : "Read detail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "size-3.5",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: expanded === current ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `overflow-hidden transition-all duration-500 ${expanded === current ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-5 bg-canvas/5 border border-canvas/10 rounded-2xl text-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-canvas/70 text-sm leading-relaxed",
								children: p.projectDetail
							})
						})
					})
				]
			})
		]
	});
}
function GlobalGallery() {
	const images = useQuery(api.gallery.getGallery);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	if (images === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4",
		children: [...Array(8)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "break-inside-avoid rounded-xl overflow-hidden bg-canvas/10 border border-canvas/10 animate-pulse",
			style: { height: `${140 + i % 3 * 60}px` }
		}, i))
	});
	if (images.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-center py-12 text-canvas/30 font-serif italic text-xl",
		children: "No images in the gallery yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
		src: lightbox.src,
		alt: lightbox.alt,
		onClose: () => setLightbox(null)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4",
		children: images.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "break-inside-avoid relative group rounded-xl overflow-hidden bg-canvas/5 border border-canvas/10 cursor-zoom-in",
			onClick: () => setLightbox({
				src: img.imageUrl,
				alt: img.caption || "Gallery image"
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img.imageUrl,
				alt: img.caption || "Gallery image",
				loading: "lazy",
				className: "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
			}), img.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white text-sm font-medium",
					children: img.caption
				})
			})]
		}, img._id))
	})] });
}
function WorkPage() {
	const convexWorks = useQuery(api.works.getWorks);
	const isLoading = convexWorks === void 0;
	convexWorks !== void 0 && convexWorks.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-36 pb-24 px-4 bg-ink text-canvas grain-overlay overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none opacity-[0.04]",
				style: {
					backgroundImage: "radial-gradient(oklch(0.987 0.005 80) 1px, transparent 1px)",
					backgroundSize: "32px 32px"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-6xl mx-auto relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-canvas/10 bg-canvas/10 text-[10px] uppercase tracking-[0.18em] font-bold text-canvas/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-accent-yellow" }), " Selected Work"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl md:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-balance",
								children: [
									"The Anthology.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif italic text-accent-yellow",
										children: "Built, not rendered."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-canvas/60 text-base max-w-lg leading-relaxed",
								children: "Every project here is a physical execution — something that was measured, cut, printed, welded, and stood up in the real world."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-6 shrink-0 text-center",
						children: [
							{
								v: "20+",
								l: "Years"
							},
							{
								v: "3",
								l: "Trusted Partners"
							},
							{
								v: "100%",
								l: "Physical"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-semibold text-canvas",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-wider text-canvas/40 mt-1",
							children: s.l
						})] }, s.l))
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 pt-[30px] pb-6 -mt-[72px] bg-ink border-b border-canvas/10 sticky top-0 z-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-none mt-[72px]",
				children: allTags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTag(tag),
					className: `whitespace-nowrap px-4 py-2 rounded-full border text-[12px] font-semibold transition-all ${activeTag === tag ? "bg-canvas text-ink border-canvas" : "border-canvas/15 text-canvas/50 hover:border-canvas/40 hover:text-canvas"}`,
					children: tag
				}, tag))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-canvas px-4 pt-16 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-5xl mx-auto",
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center h-[420px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-10 rounded-full border-2 border-canvas/20 border-t-canvas/80 animate-spin" })
				}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center py-24 text-canvas/30 font-serif italic text-xl",
					children: "No projects in this category yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCarousel, { projects: filtered }, activeTag)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-canvas px-4 pb-24 border-t border-canvas/10 pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-3",
							children: "Visuals"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl md:text-4xl font-medium tracking-tight",
							children: ["The ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic text-accent-blue",
								children: "Gallery."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-canvas/40 text-sm",
							children: "Click any image to enlarge."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalGallery, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-canvas px-4 pb-24 border-t border-canvas/10 pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent-yellow mb-3",
						children: "Partnerships"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-4xl font-medium tracking-tight",
						children: ["Words from ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif italic text-accent-yellow",
							children: "our clients."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-8",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between p-8 rounded-[2rem] bg-canvas/5 border border-canvas/10 hover:border-canvas/20 transition-colors duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `size-1.5 rounded-full bg-${t.color} mb-5` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-canvas/75 text-sm leading-relaxed italic",
								children: [
									"\"",
									t.quote,
									"\""
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-canvas/10 mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-canvas text-sm",
								children: t.author
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-canvas/40 mt-0.5",
								children: [
									t.role,
									" — ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-serif italic text-${t.color}`,
										children: t.company
									})
								]
							})
						] })]
					}, t.author))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-20 bg-canvas",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent-purple mb-4",
						children: "Start your project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-3xl md:text-4xl font-medium tracking-tight mb-4",
						children: [
							"Your next physical execution",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic text-accent-blue",
								children: "starts with a brief."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-soft text-sm max-w-md mx-auto mb-8 leading-relaxed",
						children: "We'll scope out the materials, timeline and cost — no commitment required."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:info@adsdotcom.net",
							className: "inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform",
							children: ["info@adsdotcom.net ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:sales@adsdotcom.net",
							className: "inline-flex items-center gap-2 px-6 py-3.5 border border-ink/10 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors",
							children: ["sales@adsdotcom.net ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { WorkPage as component };
