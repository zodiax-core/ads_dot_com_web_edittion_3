import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { t as printing_default } from "./printing-DClTnR89.mjs";
import { t as fab_modular_default } from "./fab-modular-CDCi1mWv.mjs";
import { n as project_lumos_default, r as project_monolith_default, t as fab_kinetic_default } from "./project-monolith-Dw1qaPyq.mjs";
import { t as fab_venue_default } from "./fab-venue-BY2Wfmwq.mjs";
import { t as events_default } from "./events-DquBENrG.mjs";
import { t as installation_default } from "./installation-CsIg_OGt.mjs";
import { t as creative_default } from "./creative-CelXEnY0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B6APAMqH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_scene_default = "/assets/hero-scene-BGaI1hJ8.jpg";
function CinematicIntro({ onComplete }) {
	const [scene, setScene] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		const timers = [
			setTimeout(() => setScene(2), 200),
			setTimeout(() => setScene(3), 900),
			setTimeout(() => setScene(4), 2100),
			setTimeout(() => {
				setScene(5);
				onComplete();
			}, 2600)
		];
		return () => timers.forEach(clearTimeout);
	}, [onComplete]);
	if (scene >= 5) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white transition-opacity duration-500 ${scene >= 4 ? "opacity-0 pointer-events-none" : "opacity-100"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full h-full flex items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute h-[1px] bg-ink transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]
            ${scene === 1 ? "w-0 opacity-0" : scene === 2 ? "w-[55vw] sm:w-[40vw] md:w-[320px] opacity-100" : "w-[70vw] md:w-[480px] opacity-0"}
          ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${scene >= 3 ? "h-20 sm:h-24 md:h-28 opacity-100" : "h-0 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex items-center gap-2 sm:gap-3 md:gap-4 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-ink transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${scene >= 3 ? "translate-y-0" : "translate-y-full"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ADS" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 sm:size-2.5 md:size-4 rounded-full bg-accent-blue shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COM" })
					]
				})
			})]
		})
	});
}
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
		}, { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		shown
	};
}
function Nav({ ready = true }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	const serviceLinks = [
		{
			href: "/services/outdoor-advertising",
			label: "Outdoor Advertising"
		},
		{
			href: "/services/printing",
			label: "Precision Printing"
		},
		{
			href: "/services/fabrication",
			label: "Fabrication"
		},
		{
			href: "/services/installation",
			label: "Installation"
		},
		{
			href: "/services/events",
			label: "Event Production"
		},
		{
			href: "/services/creative-design",
			label: "Creative & Design"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: `fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex items-center justify-between w-full max-w-[12rem] md:max-w-none md:w-auto md:gap-6 px-4 py-2.5 bg-canvas/75 backdrop-blur-xl rounded-full border border-ink/5 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "flex items-center gap-2 pl-1 pr-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex size-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-accent-blue animate-ping opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative size-2.5 rounded-full bg-accent-blue" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold tracking-tight text-sm",
						children: [
							"ADS",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-blue",
								children: "."
							}),
							"COM"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-5 text-[13px] font-medium text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setServicesOpen(true),
							onMouseLeave: () => setServicesOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/services",
								className: "hover:text-ink transition-colors flex items-center gap-1",
								children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "size-3 opacity-50",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M6 9l6 6 6-6",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-canvas/95 backdrop-blur-xl border border-ink/5 shadow-lift rounded-2xl p-2 flex flex-col gap-0.5 transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`,
								children: [
									serviceLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: l.href,
										className: "px-3 py-2 text-[12px] font-medium text-ink-soft hover:text-ink hover:bg-surface rounded-xl transition-colors",
										children: l.label
									}, l.href)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-ink/5 my-1" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/services",
										className: "px-3 py-2 text-[12px] font-semibold text-accent-blue hover:bg-surface rounded-xl transition-colors",
										children: "All Services →"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/work",
							className: "hover:text-ink transition-colors",
							children: "Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/process",
							className: "hover:text-ink transition-colors",
							children: "Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/studio",
							className: "hover:text-ink transition-colors",
							children: "Studio"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://wa.me/923349955475",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "hidden md:flex px-3.5 py-1.5 bg-ink text-canvas text-[12px] font-semibold rounded-full hover:scale-105 active:scale-95 transition-transform",
					children: "Let's Build"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "md:hidden p-1.5 text-ink-soft hover:text-ink flex flex-col justify-center items-center gap-1 -mr-2 size-8 relative z-50",
					onClick: () => setIsOpen(!isOpen),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-[2px] bg-current rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-[6px] rotate-45" : ""}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-[2px] bg-current rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block w-5 h-[2px] bg-current rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}` })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-ink/5 shadow-soft rounded-2xl p-2 flex flex-col gap-1 md:hidden overflow-hidden transition-all duration-300 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/services",
							className: "px-4 py-2.5 text-sm font-semibold hover:bg-surface rounded-xl",
							children: "Services"
						}),
						serviceLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "px-6 py-2 text-xs font-medium text-ink-soft hover:text-ink hover:bg-surface rounded-xl",
							children: l.label
						}, l.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-ink/5 mx-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/work",
							className: "px-4 py-2.5 text-sm font-medium hover:bg-surface rounded-xl",
							children: "Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/process",
							className: "px-4 py-2.5 text-sm font-medium hover:bg-surface rounded-xl",
							children: "Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/studio",
							className: "px-4 py-2.5 text-sm font-medium hover:bg-surface rounded-xl",
							children: "Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/923349955475",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "px-4 py-2.5 text-sm font-medium bg-ink text-canvas rounded-xl text-center mt-1",
							children: "Let's Build"
						})
					]
				})
			]
		})
	});
}
function Hero({ ready = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_scene_default,
					alt: "",
					width: 1600,
					height: 1200,
					fetchPriority: "high",
					decoding: "sync",
					className: "w-full h-full object-cover opacity-70 scale-110 animate-drift"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-canvas/40 via-canvas/20 to-canvas" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute left-[6%] top-[22%] hidden md:block animate-float-slow transition-all duration-700 delay-[900ms] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent-coral" }), " Paper folded"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute right-[8%] top-[32%] hidden md:block animate-float-slow transition-all duration-700 delay-[1100ms] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`,
				style: { animationDelay: "1.5s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent-mint" }), " Chrome polished"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute right-[14%] bottom-[26%] hidden lg:block animate-float-slow transition-all duration-700 delay-[1300ms] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`,
				style: { animationDelay: "0.8s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-ink/5 shadow-soft text-[11px] font-medium flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent-purple" }), " Ink flowing"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 text-center max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `transition-all duration-700 delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/10 bg-white/60 backdrop-blur text-[10px] uppercase tracking-[0.18em] font-bold text-ink-mute",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-accent-blue" }), " Integrated Creative Agency"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `overflow-hidden transition-all duration-700 delay-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl md:text-[3.25rem] leading-[1.05] font-medium tracking-tight text-balance",
							children: [
								"Spark big ideas for the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic text-accent-blue",
									children: "real"
								}),
								" world."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `transition-all duration-700 delay-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-ink-soft text-base md:text-lg leading-relaxed max-w-lg mx-auto",
							children: "Ads Dot COM merges marketing science with strategic thinking and highly creative executions—so your brand grows with measurable intent and human craft."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mt-10 flex items-center justify-center gap-3 transition-all duration-700 delay-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 scale-100" : "opacity-0 scale-90"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#services",
							className: "group relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-16 rounded-full border border-ink/10 flex items-center justify-center bg-white shadow-lift group-hover:scale-110 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "size-4 text-ink group-hover:translate-y-0.5 transition-transform",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M12 5v14M5 12l7 7 7-7",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.15em] text-ink-mute group-hover:text-ink transition-colors whitespace-nowrap",
								children: "Enter the studio"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute bottom-6 left-0 right-0 px-4 transition-all duration-700 delay-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl mx-auto flex items-center justify-between px-5 py-3 bg-white/70 backdrop-blur-xl rounded-full border border-ink/5 shadow-soft text-[11px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-ink",
							children: "Lahore · Pakistan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-ink-mute",
							children: "Nationwide operations · Brands across sectors · 20 years"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 font-medium text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent-mint animate-pulse" }), " Now Serving"]
						})
					]
				})
			})
		]
	});
}
function Marquee() {
	const items = [
		"ARY News",
		"Pak Arab Housing",
		"Samsung",
		"Wakgroup",
		"ARY News",
		"Cantt. Lahore",
		"Pak Arab Housing",
		"Samsung",
		"Walton Road",
		"Wakgroup"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-ink/5 bg-canvas overflow-hidden py-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-14 animate-marquee whitespace-nowrap",
			children: [...items, ...items].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif italic text-lg md:text-xl text-ink-mute shrink-0",
				children: c
			}, i))
		})
	});
}
function Printing() {
	const { ref, shown } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 md:py-32 px-4 bg-surface relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-3",
					children: "Service 01 · Printing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-4xl font-medium tracking-tight leading-tight",
					children: [
						"Ink and paper, engineered.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif italic text-ink-soft",
							children: "Every fibre matters."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `relative transition-all duration-1000 ${shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] bg-white rounded-[2rem] shadow-lift overflow-hidden border border-ink/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: printing_default,
								alt: "Stylized printing machine outputting warm paper",
								width: 1024,
								height: 1280,
								loading: "lazy",
								className: "w-full h-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-6 left-6 right-6 p-5 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold uppercase tracking-[0.18em] text-ink-mute mb-1",
										children: "Process 01"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium font-serif italic text-ink leading-snug",
										children: "The weight of a thought, rendered on paper."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "chrome-shimmer size-10 rounded-full border border-ink/5 shrink-0" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-5 left-5 px-2.5 py-1 rounded-full bg-accent-yellow text-ink text-[10px] font-bold uppercase tracking-wider",
								children: "Live"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-soft leading-relaxed text-lg",
						children: "Our printing division operates at the intersection of traditional craftsmanship and robotics — bespoke ink formulations that react to light, creating depth digital screens cannot replicate."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: [
							{
								c: "bg-accent-blue",
								t: "Bespoke Letterpress & Foil",
								d: "Cotton, cork and reclaimed pulp"
							},
							{
								c: "bg-accent-coral",
								t: "Large-Scale Architectural Graphics",
								d: "Up to 12m continuous format"
							},
							{
								c: "bg-accent-mint",
								t: "Reactive Intelligent Inks",
								d: "Thermochromic and photochromic"
							},
							{
								c: "bg-accent-purple",
								t: "Sustainable Substrates",
								d: "Fully closed-loop material chain"
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-4 group p-3 rounded-2xl hover:bg-white transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-11 rounded-2xl bg-white flex items-center justify-center shadow-soft group-hover:rotate-6 transition-transform shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `size-2 rounded-full ${f.c}` })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium text-ink",
										children: f.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-ink-mute",
										children: f.d
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "ml-auto size-4 text-ink-mute opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all",
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
						}, f.t))
					})]
				})]
			})]
		})
	});
}
function Fabrication() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 px-4 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent-coral mb-3",
						children: "Service 02 · Fabrication"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-4xl font-medium tracking-tight",
						children: [
							"Where ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic",
								children: "geometry"
							}),
							" meets the physical plane."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-soft max-w-lg mx-auto",
						children: "Modular assemblies, robotic machining and hand-finished detail — built in-house."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [
					{
						img: fab_modular_default,
						title: "Modular Systems",
						desc: "Rapidly deployable structures for events and temporary installations.",
						tag: "01",
						offset: ""
					},
					{
						img: fab_kinetic_default,
						title: "Kinetic Signage",
						desc: "Environmental branding that moves, reacts and breathes with its surroundings.",
						tag: "02",
						offset: "md:mt-16"
					},
					{
						img: fab_venue_default,
						title: "Venue Alchemy",
						desc: "Transforming industrial spaces into immersive branded ecosystems overnight.",
						tag: "03",
						offset: ""
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `group p-5 bg-canvas border border-ink/5 rounded-[2rem] shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-500 ${c.offset}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full aspect-square rounded-[1.4rem] overflow-hidden mb-5 bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.img,
							alt: c.title,
							width: 900,
							height: 900,
							loading: "lazy",
							className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-ink",
							children: c.tag
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-2 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-medium mb-1.5 text-ink",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-soft leading-relaxed",
							children: c.desc
						})]
					})]
				}, c.title))
			})]
		})
	});
}
function ServiceStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 px-4 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto space-y-6",
			children: [
				{
					idx: "03",
					title: "Installation",
					tag: "On-Site",
					color: "accent-coral",
					image: installation_default,
					desc: "Rigging, crane placement and architectural wrapping — from a single storefront to a citywide activation.",
					chips: [
						"Signage",
						"Facade wrap",
						"Structural"
					]
				},
				{
					idx: "04",
					title: "Event Management",
					tag: "Live",
					color: "accent-purple",
					image: events_default,
					desc: "Empty venues transformed into immersive experiences with stage, lighting and LED programmed in real time.",
					chips: [
						"Stage build",
						"Lighting",
						"LED walls"
					],
					reverse: true
				},
				{
					idx: "05",
					title: "Creative & Design",
					tag: "Studio",
					color: "accent-mint",
					image: creative_default,
					desc: "Sketches evolve into complete brand systems — physical identities, environmental design and packaging.",
					chips: [
						"Identity",
						"Environmental",
						"Packaging"
					]
				}
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `group grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 md:gap-8 p-5 md:p-6 bg-canvas rounded-[2rem] border border-ink/5 shadow-soft hover:shadow-lift transition-shadow duration-500`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative w-full h-64 md:h-80 rounded-[1.4rem] overflow-hidden bg-surface ${r.reverse ? "md:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: r.image,
						alt: r.title,
						width: 1400,
						height: 900,
						loading: "lazy",
						className: "w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-4 left-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-ink",
							children: r.idx
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `px-2.5 py-1 rounded-full bg-${r.color} text-white text-[10px] font-bold uppercase tracking-wider`,
							children: r.tag
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between p-2 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl md:text-3xl font-medium tracking-tight text-ink mb-3",
						children: r.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-soft leading-relaxed max-w-md",
						children: r.desc
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-between flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: r.chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3 py-1 rounded-full bg-surface border border-ink/5 text-[11px] font-medium text-ink-soft",
								children: chip
							}, chip))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/work",
							className: "text-[12px] font-semibold text-ink flex items-center gap-1.5 group/link",
							children: ["See work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-6 rounded-full bg-ink text-canvas flex items-center justify-center group-hover/link:translate-x-0.5 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "size-3",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: 2.5,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M5 12h14M13 5l7 7-7 7",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							})]
						})]
					})]
				})]
			}, r.title))
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "py-24 md:py-32 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent-mint mb-3",
						children: "Process"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-4xl font-medium tracking-tight",
						children: [
							"Four scenes.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic",
								children: "One continuous take."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink-soft max-w-sm text-sm leading-relaxed",
					children: "Every project moves through the same rhythm — no handoffs, no lost detail."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					{
						n: "01",
						t: "Listen",
						d: "Two weeks of workshops and site walks. We map the brief against the physical reality."
					},
					{
						n: "02",
						t: "Draft",
						d: "Concept boards, spatial sketches and clay models. Nothing is presented flat."
					},
					{
						n: "03",
						t: "Prototype",
						d: "In-house sampling of every material touchpoint before a single roll of paper is cut."
					},
					{
						n: "04",
						t: "Produce",
						d: "Precision fabrication, printing and rigging — delivered on site with our own crew."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative p-6 rounded-[1.75rem] bg-canvas border border-ink/5 shadow-soft hover:shadow-lift transition-shadow duration-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-bold tracking-widest text-ink-mute",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-ink/10" }),
								i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent-blue" }),
								i === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent-coral" }),
								i === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent-yellow" }),
								i === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent-mint" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif italic text-2xl text-ink mb-2",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-soft leading-relaxed",
							children: s.d
						})
					]
				}, s.n))
			})]
		})
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "py-24 md:py-32 bg-ink text-canvas grain-overlay",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent-yellow mb-3",
							children: "Featured Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-medium tracking-tight",
							children: "The Anthology."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-canvas/60 text-sm max-w-sm",
							children: "A curated selection of our most complex physical executions from the last two seasons."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/work",
					className: "inline-flex items-center gap-2 px-5 py-2.5 border border-canvas/20 rounded-full hover:bg-canvas hover:text-ink transition-colors text-sm font-medium",
					children: ["View archive", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10",
				children: [{
					img: project_lumos_default,
					tag: "Retail Identity",
					tagColor: "bg-accent-blue",
					title: "Project Lumos",
					client: "LOEWE",
					year: "2025",
					desc: "Installation for Paris Fashion Week, featuring light-reactive fabric panels and CNC-milled chrome signage."
				}, {
					img: project_monolith_default,
					tag: "Event Space",
					tagColor: "bg-accent-coral",
					title: "The Monolith",
					client: "Geneva Motor Show",
					year: "2024",
					desc: "A 40-foot temporary pavilion with neon-wrapped brushed aluminum stands and a rotating debut floor."
				}].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/work",
					className: "group block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[1.75rem] aspect-[16/10] bg-canvas/5 mb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								width: 1600,
								height: 1e3,
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
								className: "absolute bottom-5 right-5 size-11 rounded-full bg-canvas text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "size-4",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M7 17L17 7M8 7h9v9",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xl md:text-2xl font-medium text-canvas mb-1",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-canvas/50 text-sm leading-relaxed",
								children: p.desc
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right shrink-0 text-[11px] font-semibold uppercase tracking-widest text-canvas/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: p.client }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1",
								children: p.year
							})]
						})]
					})]
				}, p.title))
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 md:py-32 px-4 bg-canvas",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-bold uppercase tracking-[0.2em] text-accent-purple mb-4",
					children: "Build with intent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-balance",
					children: ["Let’s grow your brand", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif italic text-accent-blue",
						children: "with intent."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-ink-soft max-w-lg mx-auto leading-relaxed",
					children: "Data-driven insight, human intelligence, and ethical execution—so your marketing communication becomes measurable growth."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col sm:flex-row gap-3 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:info@adsdotcom.net",
						className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-canvas rounded-full text-sm font-semibold hover:scale-[1.03] active:scale-[0.98] transition-transform",
						children: ["info@adsdotcom.net", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "size-3.5",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M7 17L17 7M8 7h9v9",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:sales@adsdotcom.net",
						className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-canvas border border-ink/10 text-ink rounded-full text-sm font-semibold hover:bg-surface transition-colors",
						children: ["sales@adsdotcom.net", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "size-3.5",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M7 17L17 7M8 7h9v9",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})]
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "studio",
		className: "py-16 md:py-20 px-4 border-t border-ink/5 bg-canvas",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.png",
								alt: "ADS.COM Logo",
								className: "h-10 w-auto"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-ink-soft text-sm max-w-xs leading-relaxed",
							children: [
								"E-193/ii, Bank Stop",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Main Walton Road Cantt.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Lahore, Pakistan"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-ink-soft text-sm max-w-xs leading-relaxed",
							children: [
								"+92 334 9955475",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"info@adsdotcom.net",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"sales@adsdotcom.net"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/adsdot_com",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Instagram",
								className: "size-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "size-4",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.facebook.com/share/18V8bkSGXG/",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Facebook",
								className: "size-9 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "size-4",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
								})
							})]
						})
					]
				}), [
					{
						title: "Inquiries",
						links: [
							{
								name: "New Business",
								href: "/studio#contact"
							},
							{
								name: "Press & Media",
								href: "#"
							},
							{
								name: "Partnerships",
								href: "#"
							},
							{
								name: "Careers",
								href: "#"
							}
						]
					},
					{
						title: "Explore",
						links: [
							{
								name: "Our Work",
								href: "/work"
							},
							{
								name: "Services",
								href: "/services"
							},
							{
								name: "Process",
								href: "/process"
							},
							{
								name: "Journal",
								href: "#"
							}
						]
					},
					{
						title: "Studio",
						links: [
							{
								name: "About",
								href: "/studio"
							},
							{
								name: "Sustainability",
								href: "#"
							},
							{
								name: "Suppliers",
								href: "#"
							},
							{
								name: "Contact",
								href: "/studio#contact"
							}
						]
					}
				].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold uppercase tracking-[0.18em] text-ink-mute",
						children: col.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2.5 text-sm font-medium",
						children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-ink hover:text-accent-blue transition-colors",
							children: l.name
						}) }, l.name))
					})]
				}, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 pt-6 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-ink-mute font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 ADS DOT COM. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif italic normal-case tracking-normal text-ink-soft",
					children: "Crafted with intent in Lahore, Pakistan."
				})]
			})]
		})
	});
}
function Home() {
	const [heroReady, setHeroReady] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const handleIntroComplete = () => {
		setTimeout(() => setHeroReady(true), 80);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `fixed inset-0 z-[99] bg-white pointer-events-none transition-opacity duration-700 ${heroReady ? "opacity-0" : "opacity-100"}` }),
		mounted && !heroReady && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicIntro, { onComplete: handleIntroComplete }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: `min-h-screen bg-canvas text-ink font-sans relative transition-opacity duration-700 ${heroReady ? "opacity-100" : "opacity-0"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { ready: heroReady }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { ready: heroReady }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fabrication, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://wa.me/923349955475",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform",
					"aria-label": "Chat on WhatsApp",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "size-7",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z" })
					})
				})
			]
		})
	] });
}
//#endregion
export { Footer, Nav, Home as component };
