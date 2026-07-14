import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { t as PageShell } from "./page-shell-DNYCzSgU.mjs";
import { t as Marriage_1_default } from "./Marriage-1-v080u8ge.mjs";
import { a as Presentation_3_default, c as Stalls_3_default, d as stalls_2_default, i as Presentation_2_default, l as Wedding_2_default, n as Birthday_2_default, o as Presestation_1_default, r as Birthday_3_default, s as Stalls_1_default, t as Birthday_1_default, u as Wedding_3_default } from "./Stalls-3-hb8L-lPL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services_.event-management-BPzUZN3h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Birthday_4_default = "/assets/Birthday-4-jrTaO4z-.jpg";
var Birthday_5_default = "/assets/Birthday-5-l2dyIQrB.jpg";
var Office_1_default = "/assets/Office-1-NWeIG68A.jpg";
var Presentation_4_default = "/assets/Presentation-4-CghW58bZ.jpg";
var Stalls_4_default = "/assets/Stalls-4-CdzspVP4.jpg";
var WA = "https://wa.me/923349955475";
var categories = [
	{
		id: "01",
		slug: "weddings",
		title: "Weddings & Shaadi Events",
		color: "accent-blue",
		tagline: "Your special day — styled to perfection.",
		desc: "From intimate Nikkah ceremonies to grand wedding receptions — we handle complete event décor, stage design, floral arrangements, lighting and branded setups. Every detail is planned and executed by our team so you can focus on the moments that matter.",
		images: [
			Marriage_1_default,
			Wedding_2_default,
			Wedding_3_default
		],
		alts: [
			"Elegant wedding stage decoration with floral backdrop in Lahore",
			"Branded wedding reception setup with custom lighting and décor",
			"Shadi event stage with premium decoration and seating arrangement"
		]
	},
	{
		id: "02",
		slug: "birthdays",
		title: "Birthday Celebrations",
		color: "accent-coral",
		tagline: "Memorable birthdays — big or small.",
		desc: "Kids' parties, milestone birthdays, surprise setups — we create themed event environments with custom backdrops, balloon décor, table setups, lighting and props. Tell us the theme and we handle the rest.",
		images: [
			Birthday_1_default,
			Birthday_2_default,
			Birthday_3_default,
			Birthday_4_default,
			Birthday_5_default
		],
		alts: [
			"Themed birthday party decoration with balloon arch",
			"Birthday event setup with custom backdrop and lighting",
			"Kids birthday party decoration in full setup",
			"Milestone birthday celebration décor with custom signage",
			"Surprise birthday party setup with themed decoration"
		]
	},
	{
		id: "03",
		slug: "corporate",
		title: "Corporate & Office Events",
		color: "accent-yellow",
		tagline: "Professional environments for serious occasions.",
		desc: "Annual dinners, award ceremonies, product launches, office parties and corporate milestones — we design and execute branded corporate event environments with stage setups, LED displays, branded backdrops and professional lighting.",
		images: [
			Office_1_default,
			Presestation_1_default,
			Presentation_2_default,
			Presentation_3_default,
			Presentation_4_default
		],
		alts: [
			"Corporate office event setup with branded backdrop",
			"Business presentation stage with branded setup",
			"Corporate award ceremony stage decoration",
			"Product launch event with LED backdrop and branded stage",
			"Professional corporate event décor and stage setup"
		]
	},
	{
		id: "04",
		slug: "stalls",
		title: "Exhibition Stalls & Branded Booths",
		color: "accent-mint",
		tagline: "Stand out at every exhibition and trade show.",
		desc: "Custom exhibition stalls, branded booths and display setups for trade shows, expos, melas and public events. We design and fabricate the structure, graphics and branding — then install it on-site at your event location.",
		images: [
			Stalls_1_default,
			stalls_2_default,
			Stalls_3_default,
			Stalls_4_default
		],
		alts: [
			"Branded exhibition stall at trade show with custom signage",
			"Custom display booth at expo with graphics and lighting",
			"Exhibition stall fabrication and setup at public event",
			"Branded booth at mela with promotional display"
		]
	}
];
function Gallery({ images, alts }) {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[4/3] rounded-2xl overflow-hidden bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: images[active],
				alt: alts[active],
				className: "w-full h-full object-cover",
				loading: "eager"
			})
		}), images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 flex-wrap",
			children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setActive(i),
				className: `size-16 rounded-xl overflow-hidden border-2 transition-all ${i === active ? "border-accent-blue" : "border-transparent opacity-60 hover:opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img,
					alt: alts[i],
					className: "w-full h-full object-cover",
					loading: "lazy"
				})
			}, i))
		})]
	});
}
function EventManagementPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative pt-36 pb-16 px-4 bg-ink text-canvas overflow-hidden grain-overlay",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto relative z-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center justify-center gap-2 text-[11px] text-canvas/40 font-medium mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/",
								className: "hover:text-canvas/70",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/services",
								className: "hover:text-canvas/70",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-canvas/70",
								children: "Event Management"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-canvas/20 bg-canvas/10 text-[10px] uppercase tracking-[0.18em] font-bold text-canvas/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent-mint" }), " Event Management"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-5xl font-medium tracking-tight mb-4",
						children: ["Event Management in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif italic text-accent-mint",
							children: "Lahore"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-canvas/60 text-base max-w-2xl mx-auto leading-relaxed",
						children: "Weddings · Birthdays · Corporate Events · Exhibition Stalls — complete décor, setup and branded environments for every occasion."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: WA,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform",
							children: "WhatsApp for Quote"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+923349955475",
							className: "inline-flex items-center gap-2 px-6 py-3 border border-canvas/20 text-canvas rounded-full text-sm font-semibold hover:bg-canvas/10 transition-colors",
							children: "+92 334 9955475"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto px-4 py-16 space-y-24",
			children: categories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: cat.slug,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: i % 2 !== 0 ? "lg:col-start-2" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
							images: cat.images,
							alts: cat.alts
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `text-[10px] font-bold uppercase tracking-[0.2em] text-${cat.color} mb-2`,
									children: ["Category ", cat.id]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl md:text-4xl font-medium tracking-tight text-ink",
									children: cat.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-serif italic text-ink-soft text-lg",
									children: cat.tagline
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink-soft leading-relaxed",
								children: cat.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WA,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "self-start inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform",
								children: "Get Quote"
							})
						]
					})]
				})
			}, cat.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 pb-20 max-w-4xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-ink text-canvas rounded-[2.5rem] p-10 md:p-14 text-center grain-overlay",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-medium mb-3",
						children: "Planning an event in Lahore?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-canvas/60 text-sm max-w-md mx-auto mb-8",
						children: "Tell us the date, venue and guest count — we'll send you a concept and quote within 24 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WA,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform",
						children: "WhatsApp Us Now"
					})
				]
			})
		})
	] });
}
//#endregion
export { EventManagementPage as component };
