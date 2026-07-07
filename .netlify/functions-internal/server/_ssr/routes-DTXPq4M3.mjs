import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DTXPq4M3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./routes-B6APAMqH.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "ADS DOT COM — Integrated Creative Agency | Lahore, Pakistan" },
			{
				name: "description",
				content: "Lahore's leading integrated creative agency since 2006. Outdoor advertising, precision printing, fabrication, installation, event production and brand design — all in-house, zero subcontractors."
			},
			{
				property: "og:title",
				content: "ADS DOT COM — Integrated Creative Agency | Lahore, Pakistan"
			},
			{
				property: "og:description",
				content: "Outdoor advertising, printing, fabrication, installation, events and creative direction. Pakistan's most integrated physical branding studio since 2006."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
//#endregion
export { Nav as n, Route as r, Footer as t };
