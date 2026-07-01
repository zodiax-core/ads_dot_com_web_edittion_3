import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageShell } from "./page-shell-B2k5CaRz.mjs";
import { n as installation_default, r as printing_default, t as events_default } from "./installation-BJHzc0qs.mjs";
import { n as project_lumos_default, r as project_monolith_default, t as fab_kinetic_default } from "./project-monolith-Dw1qaPyq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-B6SHjKKb.js
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
var projects = [
	{
		img: project_lumos_default,
		tag: "Retail Identity",
		tagColor: "bg-accent-blue",
		title: "Project Lumos",
		client: "LOEWE",
		year: "2025",
		scope: [
			"Fabrication",
			"Installation",
			"Lighting"
		],
		desc: "Installation featuring light-reactive fabric panels, CNC-milled chrome signage and structural backdrops. Executed across three storefront locations.",
		detail: "The brief called for an immersive retail transformation — one where physical material reacted to ambient light and movement. Our team engineered custom tensioned fabric panels treated with photochromic inks, alongside hand-polished chrome plinths machined in-house. Every element was delivered flatpack and installed within a 36-hour retail dark period."
	},
	{
		img: project_monolith_default,
		tag: "Event Space",
		tagColor: "bg-accent-coral",
		title: "The Monolith",
		client: "Geneva Motor Show",
		year: "2024",
		scope: [
			"Stage Build",
			"LED Walls",
			"Facade"
		],
		desc: "A 40-foot temporary pavilion with neon-wrapped brushed aluminum stands and a rotating debut floor. Designed for a 4-day live event.",
		detail: "Structural engineering had to account for a 6-ton aluminum superstructure erected inside a convention hall with a weight-limited floor. We pre-assembled the entire frame off-site over 10 days, then executed the on-site build in 18 hours. The rotating platform beneath the centrepiece vehicle used a custom hydraulic slab sourced and fitted by our team."
	},
	{
		img: installation_default,
		tag: "Outdoor Campaign",
		tagColor: "bg-accent-purple",
		title: "Cantt. Billboard Circuit",
		client: "Samsung / Wakgroup",
		year: "2024",
		scope: [
			"Printing",
			"Outdoor",
			"Installation"
		],
		desc: "A series of high-altitude double-sided billboard structures deployed at primary intersections along Walton Road, Lahore.",
		detail: "Wakgroup commissioned a 6-site outdoor circuit across the Cantonment corridor to launch the Samsung Galaxy S series. We handled full end-to-end delivery: structural steel erection, 12m continuous vinyl print production, hoisting and tensioning. Each site was live within 48 hours of approval."
	},
	{
		img: events_default,
		tag: "Live Production",
		tagColor: "bg-accent-mint",
		title: "ARY News Studio Set",
		client: "ARY Network",
		year: "2023",
		scope: [
			"Scenic Design",
			"LED",
			"Fabrication"
		],
		desc: "Scenic custom broadcast television set with integrated LED wall mounts and architectural wood cladding. Still in daily use.",
		detail: "ARY News required a complete overhaul of their primary studio set for their flagship evening bulletin. We designed and fabricated a two-tiered scenic backdrop from engineered walnut veneer panels, with integrated LED strip diffusion and three seamless curved display screens. Cabling was fully concealed within the structural frame, and the entire set was installed over a weekend without interrupting broadcast schedules."
	},
	{
		img: printing_default,
		tag: "Print & Graphics",
		tagColor: "bg-accent-yellow",
		title: "HQ Facade Wrap",
		client: "Pak Arab Housing",
		year: "2023",
		scope: ["Wide-Format Print", "Installation"],
		desc: "Weatherproof 12-meter continuous graphic applied to structural glass siding of the company's headquarters building.",
		detail: "Pak Arab Housing wanted their brand vision rendered at architectural scale. We produced a 60-meter continuous vinyl wrap in 1.2m-wide sections, with precise colour-matched UV-stable inks on 440gsm block-out media. Each section was laser-aligned during installation to maintain visual continuity across window joints, mullions and structural breaks."
	},
	{
		img: fab_kinetic_default,
		tag: "Kinetic Signage",
		tagColor: "bg-accent-coral",
		title: "Rotating Brand Wall",
		client: "Client Confidential",
		year: "2023",
		scope: [
			"Fabrication",
			"Kinetics",
			"Design"
		],
		desc: "A 3-panel kinetic brand wall for a corporate headquarters lobby, each panel rotating on a 90-second loop.",
		detail: "The brief required a permanent, low-maintenance kinetic installation that would hold brand messaging while remaining architecturally interesting. We designed a tri-panel system using brushed anodized aluminium fins on concealed motorised axles, controlled by a silent 24V DC drive system. The panels display branded graphic content on one face and raw material texture on the reverse, creating a shifting visual experience."
	}
];
var allTags = [
	"All",
	"Outdoor",
	"Fabrication",
	"Print & Graphics",
	"Live Production",
	"Event Space",
	"Kinetic Signage",
	"Retail Identity"
];
var testimonials = [
	{
		quote: "I have worked with Ads Dot COM for 10 years — in that time they have become a valued and trusted vendor. Their attention to detail and solution-driven approach has been invaluable in allowing me to offer excellent services to my own clients.",
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
		quote: "I would just like to say thank you for taking care of advertising needs of our company. The service and advice received was second to none and the price was very competitive also. Ads Dot COM is a good agency to work with.",
		author: "Sharyar",
		role: "General Manager",
		company: "Wakgroup — Samsung",
		color: "accent-mint"
	}
];
function WorkPage() {
	const [activeTag, setActiveTag] = (0, import_react.useState)("All");
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tag === activeTag);
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
								className: "inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-canvas/10 bg-canvas/10 text-[10px] uppercase tracking-[0.18em] font-bold text-canvas/50 animate-reveal-up",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-accent-yellow" }), " Selected Work"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl md:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-balance animate-reveal-up",
								style: { animationDelay: "80ms" },
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
								className: "mt-5 text-canvas/60 text-base max-w-lg leading-relaxed animate-reveal-up",
								style: { animationDelay: "160ms" },
								children: "Every project here is a physical execution — something that was measured, cut, printed, welded, and stood up in the real world. No CGI, no mockups."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-6 shrink-0 text-center animate-reveal-up",
						style: { animationDelay: "240ms" },
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
			className: "bg-ink text-canvas px-4 pt-12 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10",
					children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[1.75rem] aspect-[16/10] bg-canvas/5 mb-5 cursor-pointer",
								onClick: () => setExpanded(expanded === p.title ? null : p.title),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.title,
										loading: "lazy",
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-5 left-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-3 py-1 rounded-full ${p.tagColor} text-white text-[10px] font-bold uppercase tracking-wider`,
											children: p.tag
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-5 right-5 flex gap-1.5",
										children: p.scope.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2.5 py-1 rounded-full bg-canvas/10 backdrop-blur border border-canvas/15 text-[10px] font-medium text-canvas",
											children: sc
										}, sc))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-5 right-5 size-10 rounded-full bg-canvas text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "size-4",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: 2,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: expanded === p.title ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6",
												strokeLinecap: "round",
												strokeLinejoin: "round"
											})
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl md:text-2xl font-medium text-canvas",
										children: p.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-canvas/50 text-sm leading-relaxed mt-1",
										children: p.desc
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right shrink-0 text-[11px] font-semibold uppercase tracking-widest text-canvas/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: p.client }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1",
										children: p.year
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `overflow-hidden transition-all duration-500 ${expanded === p.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 pb-2 px-5 bg-canvas/5 border border-canvas/10 rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase font-bold tracking-widest text-canvas/30 mb-2",
										children: "Project Detail"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-canvas/70 text-sm leading-relaxed",
										children: p.detail
									})]
								})
							})
						]
					}, p.title))
				}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center py-24 text-canvas/30 font-serif italic text-xl",
					children: "No projects in this category yet."
				})]
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:adsdotcom786@gmail.com",
						className: "inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform",
						children: ["Let's talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				]
			})
		})
	] });
}
//#endregion
export { WorkPage as component };
