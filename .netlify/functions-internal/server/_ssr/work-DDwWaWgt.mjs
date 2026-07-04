import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, o as useQuery, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { t as api } from "./api-DSJLF2wo.mjs";
import { t as PageShell } from "./page-shell-ZTxEkQki.mjs";
import { n as installation_default, r as printing_default, t as events_default } from "./installation-BJHzc0qs.mjs";
import { n as project_lumos_default, r as project_monolith_default, t as fab_kinetic_default } from "./project-monolith-Dw1qaPyq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-DDwWaWgt.js
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
var dummyProjects = [
	{
		_id: "dummy-1",
		mainImage: project_lumos_default,
		serviceCategory: "Retail Identity",
		tagColor: "bg-accent-blue",
		title: "Project Lumos",
		client: "LOEWE",
		year: "2025",
		tags: [
			"Fabrication",
			"Installation",
			"Lighting"
		],
		smallDescription: "Installation featuring light-reactive fabric panels, CNC-milled chrome signage and structural backdrops.",
		projectDetail: "The brief called for an immersive retail transformation — one where physical material reacted to ambient light and movement."
	},
	{
		_id: "dummy-2",
		mainImage: project_monolith_default,
		serviceCategory: "Event Space",
		tagColor: "bg-accent-coral",
		title: "The Monolith",
		client: "Geneva Motor Show",
		year: "2024",
		tags: [
			"Stage Build",
			"LED Walls",
			"Facade"
		],
		smallDescription: "A 40-foot temporary pavilion with neon-wrapped brushed aluminum stands and a rotating debut floor.",
		projectDetail: "Structural engineering had to account for a 6-ton aluminum superstructure erected inside a convention hall."
	},
	{
		_id: "dummy-3",
		mainImage: installation_default,
		serviceCategory: "Outdoor Campaign",
		tagColor: "bg-accent-purple",
		title: "Cantt. Billboard Circuit",
		client: "Samsung / Wakgroup",
		year: "2024",
		tags: [
			"Printing",
			"Outdoor",
			"Installation"
		],
		smallDescription: "A series of high-altitude double-sided billboard structures deployed at primary intersections.",
		projectDetail: "Wakgroup commissioned a 6-site outdoor circuit across the Cantonment corridor."
	},
	{
		_id: "dummy-4",
		mainImage: events_default,
		serviceCategory: "Live Production",
		tagColor: "bg-accent-mint",
		title: "ARY News Studio Set",
		client: "ARY Network",
		year: "2023",
		tags: [
			"Scenic Design",
			"LED",
			"Fabrication"
		],
		smallDescription: "Scenic custom broadcast television set with integrated LED wall mounts and architectural wood cladding.",
		projectDetail: "ARY News required a complete overhaul of their primary studio set."
	},
	{
		_id: "dummy-5",
		mainImage: printing_default,
		serviceCategory: "Print & Graphics",
		tagColor: "bg-accent-yellow",
		title: "HQ Facade Wrap",
		client: "Pak Arab Housing",
		year: "2023",
		tags: ["Wide-Format Print", "Installation"],
		smallDescription: "Weatherproof 12-meter continuous graphic applied to structural glass siding.",
		projectDetail: "Pak Arab Housing wanted their brand vision rendered at architectural scale."
	},
	{
		_id: "dummy-6",
		mainImage: fab_kinetic_default,
		serviceCategory: "Kinetic Signage",
		tagColor: "bg-accent-coral",
		title: "Rotating Brand Wall",
		client: "Client Confidential",
		year: "2023",
		tags: [
			"Fabrication",
			"Kinetics",
			"Design"
		],
		smallDescription: "A 3-panel kinetic brand wall for a corporate headquarters lobby.",
		projectDetail: "The brief required a permanent, low-maintenance kinetic installation."
	}
];
var IMAGE_FIX_MAP = {
	"/src/assets/project-lumos.jpg": project_lumos_default,
	"/src/assets/project-monolith.jpg": project_monolith_default,
	"/src/assets/printing.jpg": printing_default,
	"/src/assets/events.jpg": events_default,
	"/src/assets/installation.jpg": installation_default,
	"/src/assets/fab-kinetic.jpg": fab_kinetic_default
};
function fixImage(src) {
	if (src?.startsWith("/src/assets/")) return IMAGE_FIX_MAP[src] ?? src;
	return src;
}
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
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handler);
			document.body.style.overflow = prev;
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",
		onPointerDown: (e) => {
			e.stopPropagation();
			onClose();
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onPointerDown: (e) => e.stopPropagation(),
			onClick: onClose,
			className: "absolute top-4 right-4 size-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10",
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
			className: "max-w-full max-h-[88vh] rounded-2xl object-contain shadow-2xl",
			onPointerDown: (e) => e.stopPropagation(),
			onClick: (e) => e.stopPropagation()
		})]
	});
}
function ProjectCarousel({ projects }) {
	const [current, setCurrent] = (0, import_react.useState)(0);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const [dragState, setDragState] = (0, import_react.useState)({
		active: false,
		startX: 0,
		deltaX: 0
	});
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	const stageRef = (0, import_react.useRef)(null);
	const total = projects.length;
	const prev = (0, import_react.useCallback)(() => {
		setCurrent((c) => (c - 1 + total) % total);
		setExpanded(null);
	}, [total]);
	const next = (0, import_react.useCallback)(() => {
		setCurrent((c) => (c + 1) % total);
		setExpanded(null);
	}, [total]);
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
	(0, import_react.useEffect)(() => {
		[projects[(current + 1) % total]?.mainImage, projects[(current - 1 + total) % total]?.mainImage].filter(Boolean).forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	}, [
		current,
		projects,
		total
	]);
	const onPointerDown = (e) => {
		e.currentTarget.setPointerCapture(e.pointerId);
		setDragState({
			active: true,
			startX: e.clientX,
			deltaX: 0
		});
	};
	const onPointerMove = (e) => {
		if (!dragState.active) return;
		e.preventDefault();
		setDragState((s) => ({
			...s,
			deltaX: e.clientX - s.startX
		}));
	};
	const onPointerUp = (e) => {
		if (!dragState.active) return;
		const diff = e.clientX - dragState.startX;
		setDragState({
			active: false,
			startX: 0,
			deltaX: 0
		});
		if (diff < -50) next();
		else if (diff > 50) prev();
	};
	const getStyle = (i) => {
		const offset = (i - current + total) % total;
		const normalized = offset > total / 2 ? offset - total : offset;
		const absOff = Math.abs(normalized);
		if (absOff > 2) return { display: "none" };
		const x = normalized * (typeof window !== "undefined" && window.innerWidth < 768 ? 160 : 220) + (dragState.active ? dragState.deltaX * .3 : 0);
		const z = -absOff * 100;
		const scale = 1 - absOff * .18;
		const opacity = 1 - absOff * .4;
		return {
			transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${normalized * -10}deg)`,
			opacity,
			zIndex: 10 - absOff,
			transition: dragState.active ? "none" : "all 0.5s cubic-bezier(0.16,1,0.3,1)"
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
				className: "overflow-hidden px-4 md:px-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: stageRef,
					className: "relative h-[320px] md:h-[420px] flex items-center justify-center select-none",
					style: {
						perspective: "1100px",
						touchAction: "none"
					},
					onPointerDown,
					onPointerMove,
					onPointerUp,
					onPointerCancel: () => setDragState({
						active: false,
						startX: 0,
						deltaX: 0
					}),
					children: projects.map((proj, i) => {
						const style = getStyle(i);
						if (style.display === "none") return null;
						const isCurrent = i === current;
						const offset = (i - current + total) % total;
						const normalized = offset > total / 2 ? offset - total : offset;
						const isAdjacent = Math.abs(normalized) === 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute w-[200px] md:w-[300px] aspect-[3/4] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl",
							style,
							onClick: () => {
								if (dragState.active) return;
								if (isCurrent) setLightbox({
									src: proj.mainImage,
									alt: proj.title
								});
								else setCurrent(i);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: proj.mainImage,
									alt: proj.title,
									width: 300,
									height: 400,
									loading: isCurrent || isAdjacent ? "eager" : "lazy",
									decoding: isCurrent ? "sync" : "async",
									className: "relative w-full h-full object-cover pointer-events-none",
									onError: (e) => {
										e.target.style.opacity = "0.3";
									}
								}),
								isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-4 md:p-5 pointer-events-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `self-start px-2.5 py-0.5 rounded-full ${proj.tagColor || "bg-accent-blue"} text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-2`,
											children: proj.serviceCategory
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-white text-base md:text-xl font-medium leading-tight",
											children: proj.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-white/60 text-[10px] md:text-xs mt-1",
											children: [
												proj.client,
												" · ",
												proj.year
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/40 text-[9px] mt-1",
											children: "Tap to enlarge"
										})
									]
								})
							]
						}, proj._id ?? proj.title);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-4 mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: prev,
						"aria-label": "Previous",
						className: "size-10 md:size-11 rounded-full border border-canvas/20 flex items-center justify-center text-canvas hover:bg-canvas hover:text-ink transition-all active:scale-95",
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
							onClick: () => {
								setCurrent(i);
								setExpanded(null);
							},
							className: `rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-canvas" : "size-2 bg-canvas/30 hover:bg-canvas/60"}`
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: next,
						"aria-label": "Next",
						className: "size-10 md:size-11 rounded-full border border-canvas/20 flex items-center justify-center text-canvas hover:bg-canvas hover:text-ink transition-all active:scale-95",
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
				className: "mt-8 max-w-2xl mx-auto text-center px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-2 mb-4",
						children: p.tags?.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2.5 py-1 rounded-full bg-canvas/10 border border-canvas/15 text-[10px] font-medium text-canvas/70",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl md:text-3xl font-medium text-canvas mb-2",
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
	const projects = (convexWorks !== void 0 && convexWorks.length > 0 ? convexWorks : convexWorks !== void 0 ? dummyProjects : []).map((p) => ({
		...p,
		mainImage: fixImage(p.mainImage)
	}));
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
			className: "bg-ink text-canvas px-4 pt-16 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-5xl mx-auto",
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center h-[420px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-10 rounded-full border-2 border-canvas/20 border-t-canvas/80 animate-spin" })
				}) : projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center py-24 text-canvas/30 font-serif italic text-xl",
					children: "No projects yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCarousel, { projects })
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
