import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageShell } from "./page-shell-B2k5CaRz.mjs";
import { n as installation_default, r as printing_default, t as events_default } from "./installation-BJHzc0qs.mjs";
import { n as fab_modular_default, r as fab_venue_default, t as creative_default } from "./creative-F96rBVr_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-ClFhbrC0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setShown(true);
					io.disconnect();
				}
			});
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		shown
	};
}
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
var services = [
	{
		id: "01",
		slug: "outdoor",
		color: "accent-blue",
		title: "Outdoor Advertising",
		tagline: "Billboards, transit & ambient — commanding presence at scale.",
		desc: "Our founding division since 2006. We design, produce, place, and maintain outdoor advertising installations across Pakistan. From single-site billboards to multi-city corridor campaigns.",
		image: fab_venue_default,
		capabilities: [
			{
				name: "Billboard Hoarding",
				note: "Single, double & tri-vision formats"
			},
			{
				name: "Transit Advertising",
				note: "Buses, bus stops & shelters"
			},
			{
				name: "Street Furniture",
				note: "Benches, kiosks & pedestrian signage"
			},
			{
				name: "Logo Sign Plates",
				note: "Branded municipal & directional"
			}
		],
		stats: [
			{
				v: "20+",
				l: "Years Operating"
			},
			{
				v: "100s",
				l: "Sites Managed"
			},
			{
				v: "Nationwide",
				l: "Coverage"
			}
		]
	},
	{
		id: "02",
		slug: "printing",
		color: "accent-yellow",
		title: "Precision Printing",
		tagline: "Ink and paper, engineered. Every fibre matters.",
		desc: "Our printing division operates at the intersection of traditional craftsmanship and modern press technology — bespoke ink formulations and large-format outputs creating depth that digital screens cannot replicate.",
		image: printing_default,
		capabilities: [
			{
				name: "Bespoke Letterpress & Foil",
				note: "Cotton, cork and reclaimed pulp"
			},
			{
				name: "Large-Scale Architectural Graphics",
				note: "Up to 12m continuous format"
			},
			{
				name: "Reactive Intelligent Inks",
				note: "Thermochromic and photochromic"
			},
			{
				name: "Sustainable Substrates",
				note: "Fully closed-loop material chain"
			}
		],
		stats: [
			{
				v: "12m",
				l: "Max Continuous Format"
			},
			{
				v: "4",
				l: "Ink Technologies"
			},
			{
				v: "100%",
				l: "In-house Press"
			}
		]
	},
	{
		id: "03",
		slug: "fabrication",
		color: "accent-coral",
		title: "Spatial Fabrication",
		tagline: "Where geometry meets the physical plane.",
		desc: "Modular assemblies, precision machining and hand-finished detail — all built in-house. Our fabrication team translates architectural drawings into physical structures that are delivered and erected by our own crew.",
		image: fab_modular_default,
		capabilities: [
			{
				name: "Modular Structural Systems",
				note: "Rapidly deployable event frames"
			},
			{
				name: "Kinetic Signage",
				note: "Animated, mechanical brand displays"
			},
			{
				name: "CNC & Robotic Machining",
				note: "Precision-cut metal, wood & acrylic"
			},
			{
				name: "Scenic Venue Conversion",
				note: "Industrial space transformation"
			}
		],
		stats: [
			{
				v: "In-house",
				l: "Full Workshop"
			},
			{
				v: "Custom",
				l: "Every Build"
			},
			{
				v: "Zero",
				l: "Subcontractors"
			}
		]
	},
	{
		id: "04",
		slug: "installation",
		color: "accent-purple",
		title: "Rigging & Installation",
		tagline: "On-site craft. Structural confidence.",
		desc: "From a single storefront sign to a citywide activation, our certified rigging team manages transport, structural anchoring, safety compliance and ongoing maintenance — all under one roof.",
		image: installation_default,
		capabilities: [
			{
				name: "High-Altitude Rigging",
				note: "Certified crew & equipment"
			},
			{
				name: "Facade & Glass Wrapping",
				note: "Full building surface application"
			},
			{
				name: "Retail Window Installs",
				note: "Fast-turnaround POS displays"
			},
			{
				name: "Ongoing Maintenance",
				note: "Scheduled site visits & repairs"
			}
		],
		stats: [
			{
				v: "City-wide",
				l: "Deployment Reach"
			},
			{
				v: "Certified",
				l: "Safety Standards"
			},
			{
				v: "24/7",
				l: "Site Support"
			}
		]
	},
	{
		id: "05",
		slug: "events",
		color: "accent-mint",
		title: "Event Production",
		tagline: "Live experiences, engineered from blank space.",
		desc: "We transform empty venues into immersive branded environments. From stage construction to LED wall integration and real-time media programming — our event team handles every technical layer of your live activation.",
		image: events_default,
		capabilities: [
			{
				name: "Custom Stage Design & Build",
				note: "Structural scenic sets"
			},
			{
				name: "LED & Screen Integration",
				note: "Walls, floors & ceilings"
			},
			{
				name: "Lighting Design",
				note: "Architectural & dynamic systems"
			},
			{
				name: "Media Server Control",
				note: "Real-time content programming"
			}
		],
		stats: [
			{
				v: "Full-stack",
				l: "AV Production"
			},
			{
				v: "Live",
				l: "Event Direction"
			},
			{
				v: "Turnkey",
				l: "Delivery"
			}
		]
	},
	{
		id: "06",
		slug: "creative",
		color: "accent-blue",
		title: "Creative & Design",
		tagline: "Sketches evolve into complete brand systems.",
		desc: "Our studio guides each project from initial concept all the way to physical execution. Identity systems, spatial graphics, packaging, and environmental design — every output has a material reality.",
		image: creative_default,
		capabilities: [
			{
				name: "Brand Identity Systems",
				note: "Physical visual language"
			},
			{
				name: "Environmental Design",
				note: "Spatial graphics & wayfinding"
			},
			{
				name: "Packaging & Unboxing",
				note: "Tactile luxury experiences"
			},
			{
				name: "Material Sampling",
				note: "Prototype proofing before print"
			}
		],
		stats: [
			{
				v: "End-to-end",
				l: "Studio Direction"
			},
			{
				v: "Physical",
				l: "Every Output"
			},
			{
				v: "Bespoke",
				l: "No Templates"
			}
		]
	}
];
function ServiceBlock({ s, reverse }) {
	const { ref, shown } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: `grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center transition-all duration-1000 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative ${reverse ? "lg:order-2" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lift border border-ink/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: s.title,
						className: "w-full h-full object-cover",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-5 left-5 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-ink",
							children: s.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `px-2.5 py-1 rounded-full bg-${s.color} text-ink text-[10px] font-bold uppercase tracking-wider`,
							children: s.title
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-5 left-5 right-5 grid grid-cols-3 gap-2 p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-ink/5 shadow-soft",
				children: s.stats.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-base font-semibold text-ink",
						children: st.v
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[9px] text-ink-mute uppercase tracking-wider mt-0.5",
						children: st.l
					})]
				}, st.l))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `pt-8 lg:pt-0 space-y-6 ${reverse ? "lg:order-1" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `text-[10px] font-bold uppercase tracking-[0.2em] text-${s.color} mb-2`,
						children: ["Service ", s.id]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-medium tracking-tight leading-tight",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif italic text-ink-soft text-lg",
						children: s.tagline
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink-soft leading-relaxed",
					children: s.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2.5",
					children: s.capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 group p-3 rounded-2xl hover:bg-surface transition-colors cursor-default",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `size-2 rounded-full bg-${s.color} shrink-0` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-ink",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-ink-mute ml-2",
									children: ["— ", c.note]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "size-3.5 text-ink-mute opacity-0 group-hover:opacity-100 transition-opacity",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M5 12h14M13 5l7 7-7 7",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							})
						]
					}, c.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "mailto:adsdotcom786@gmail.com",
					className: "inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform",
					children: ["Get a quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			]
		})]
	});
}
function ServicesPage() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-36 pb-24 px-4 bg-surface overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none opacity-[0.03]",
				style: {
					backgroundImage: "linear-gradient(oklch(0.185 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.185 0.01 60) 1px, transparent 1px)",
					backgroundSize: "48px 48px"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto text-center relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-white/60 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute animate-reveal-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-accent-blue" }), " What We Do"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-balance animate-reveal-up",
						style: { animationDelay: "80ms" },
						children: [
							"Six divisions. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic text-accent-blue",
								children: "One integrated"
							}),
							" studio."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-ink-soft text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-reveal-up",
						style: { animationDelay: "160ms" },
						children: "From the first billboard we ever hung in 2006 to complex multi-city brand activations today — every service we offer is produced in-house, with zero subcontractors."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-2 animate-reveal-up",
						style: { animationDelay: "240ms" },
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setActive(s.slug);
								document.getElementById(s.slug)?.scrollIntoView({
									behavior: "smooth",
									block: "center"
								});
							},
							className: `px-4 py-2 rounded-full border text-[12px] font-semibold transition-all ${active === s.slug ? "bg-ink text-canvas border-ink" : "border-ink/10 text-ink-soft hover:border-ink/30 hover:text-ink"}`,
							children: [
								s.id,
								" · ",
								s.title
							]
						}, s.slug))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto px-4 py-20 space-y-32",
			children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: s.slug,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceBlock, {
					s,
					reverse: i % 2 !== 0
				})
			}, s.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 pb-24 max-w-4xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative bg-ink text-canvas rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden grain-overlay",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase font-bold tracking-widest text-canvas/40 mb-4",
						children: "Ready to build?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-3xl md:text-4xl font-medium tracking-tight mb-4",
						children: [
							"Every campaign starts",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic text-accent-yellow",
								children: "with a conversation."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-canvas/60 text-sm max-w-md mx-auto mb-8 leading-relaxed",
						children: "Tell us your brief. We'll walk you through which services, materials, and approach will deliver the best result for your brand."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:adsdotcom786@gmail.com",
							className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-canvas text-ink rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform",
							children: ["adsdotcom786@gmail.com ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+923349955475",
							className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors",
							children: "+92 334 9955475"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
