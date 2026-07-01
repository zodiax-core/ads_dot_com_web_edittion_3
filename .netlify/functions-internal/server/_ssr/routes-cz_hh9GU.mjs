import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-cz_hh9GU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./routes-ulxJcuUr.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function Nav({ ready = true }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/services",
							className: "hover:text-ink transition-colors",
							children: "Services"
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
					href: "/studio#contact",
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
							className: "px-4 py-2.5 text-sm font-medium hover:bg-surface rounded-xl",
							children: "Services"
						}),
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
							href: "/studio#contact",
							className: "px-4 py-2.5 text-sm font-medium bg-ink text-canvas rounded-xl text-center mt-1",
							children: "Let's Build"
						})
					]
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-accent-blue animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg font-semibold tracking-tight",
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
								"adsdotcom786@gmail.com"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 pt-1",
							children: [
								"in",
								"ig",
								"vm",
								"be"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "size-9 rounded-full border border-ink/10 flex items-center justify-center text-[11px] font-semibold text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-colors uppercase",
								children: s
							}, s))
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
//#endregion
export { Nav as n, Route as r, Footer as t };
