import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, i as ConvexReactClient, s as require_jsx_runtime, t as ConvexAuthProvider } from "../_libs/@convex-dev/auth+[...].mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$13 } from "./routes-Dh__B6iw.mjs";
import { t as Route$14 } from "./blog_._slug-CYfnTPd7.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CIh_Qv3E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BDrXhCiI.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var convex = new ConvexReactClient("https://rosy-crow-160.convex.cloud");
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
		name: "robots",
		content: "noindex, nofollow"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-canvas px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-7xl italic text-ink",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-medium text-ink",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-transform hover:scale-105",
						children: "Back to studio"
					})
				})
			]
		})
	})] });
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-canvas px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-medium tracking-tight text-ink",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-transform hover:scale-105",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-ink/10 bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ADS DOT COM — Integrated Creative Agency | Lahore, Pakistan" },
			{
				name: "description",
				content: "ADS DOT COM is Lahore's leading integrated creative agency — outdoor advertising, precision printing, fabrication, installation, event production and brand design since 2006."
			},
			{
				name: "author",
				content: "ADS DOT COM"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "theme-color",
				content: "#f5f0eb"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "ADS DOT COM"
			},
			{
				property: "og:title",
				content: "ADS DOT COM — Integrated Creative Agency | Lahore"
			},
			{
				property: "og:description",
				content: "Outdoor advertising, printing, fabrication, installation, event production and creative direction. Pakistan's most integrated physical branding studio since 2006."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/"
			},
			{
				property: "og:image",
				content: "https://adsdotcom.net/logo.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "ADS DOT COM — Integrated Creative Agency"
			},
			{
				property: "og:locale",
				content: "en_PK"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "ADS DOT COM — Integrated Creative Agency"
			},
			{
				name: "twitter:description",
				content: "Outdoor advertising, printing, fabrication, installation, events and creative direction — Lahore, Pakistan since 2006."
			},
			{
				name: "twitter:image",
				content: "https://adsdotcom.net/logo.png"
			},
			{
				name: "twitter:image:alt",
				content: "ADS DOT COM Logo"
			},
			{
				name: "geo.region",
				content: "PK-PB"
			},
			{
				name: "geo.placename",
				content: "Lahore, Pakistan"
			},
			{
				name: "geo.position",
				content: "31.5204;74.3587"
			},
			{
				name: "ICBM",
				content: "31.5204, 74.3587"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/logo.png",
				type: "image/png",
				sizes: "any"
			},
			{
				rel: "canonical",
				href: "https://adsdotcom.net/"
			},
			{
				rel: "sitemap",
				type: "application/xml",
				href: "/sitemap.xml"
			},
			{
				rel: "preconnect",
				href: "https://www.googletagmanager.com"
			},
			{
				rel: "preconnect",
				href: "https://rosy-crow-160.convex.cloud"
			},
			{
				rel: "dns-prefetch",
				href: "https://www.googletagmanager.com"
			},
			{
				rel: "dns-prefetch",
				href: "https://images.unsplash.com"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TM5BKV64');` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@graph": [
						{
							"@type": ["Organization", "LocalBusiness"],
							"@id": "https://adsdotcom.net/#organization",
							"name": "ADS DOT COM",
							"alternateName": "Ads Dot COM",
							"url": "https://adsdotcom.net",
							"logo": "https://adsdotcom.net/logo.png",
							"image": "https://adsdotcom.net/logo.png",
							"description": "Lahore's leading integrated creative agency — outdoor advertising, precision printing, fabrication, installation, event production and brand design since 2006.",
							"foundingDate": "2006-05-16",
							"email": "info@adsdotcom.net",
							"telephone": "+923349955475",
							"address": {
								"@type": "PostalAddress",
								"streetAddress": "E-193/ii, Bank Stop, Main Walton Road Cantt.",
								"addressLocality": "Lahore",
								"addressRegion": "Punjab",
								"postalCode": "54000",
								"addressCountry": "PK"
							},
							"geo": {
								"@type": "GeoCoordinates",
								"latitude": 31.5204,
								"longitude": 74.3587
							},
							"openingHoursSpecification": [{
								"@type": "OpeningHoursSpecification",
								"dayOfWeek": [
									"Monday",
									"Tuesday",
									"Wednesday",
									"Thursday",
									"Friday"
								],
								"opens": "09:00",
								"closes": "18:00"
							}],
							"sameAs": ["https://www.instagram.com/adsdot_com", "https://www.facebook.com/share/18V8bkSGXG/"]
						},
						{
							"@type": "WebSite",
							"@id": "https://adsdotcom.net/#website",
							"url": "https://adsdotcom.net",
							"name": "ADS DOT COM",
							"publisher": { "@id": "https://adsdotcom.net/#organization" }
						},
						{
							"@type": "ItemList",
							"name": "Services",
							"itemListElement": [
								{
									"@type": "Service",
									"position": 1,
									"name": "Outdoor Advertising",
									"description": "Billboard hoarding, transit advertising, street furniture and logo sign plates across Pakistan.",
									"provider": { "@id": "https://adsdotcom.net/#organization" }
								},
								{
									"@type": "Service",
									"position": 2,
									"name": "Precision Printing",
									"description": "Wide-format architectural graphics, letterpress, foil and reactive intelligent inks.",
									"provider": { "@id": "https://adsdotcom.net/#organization" }
								},
								{
									"@type": "Service",
									"position": 3,
									"name": "Spatial Fabrication",
									"description": "Modular structures, kinetic signage, CNC machining and scenic venue conversion.",
									"provider": { "@id": "https://adsdotcom.net/#organization" }
								},
								{
									"@type": "Service",
									"position": 4,
									"name": "Rigging & Installation",
									"description": "High-altitude rigging, facade wrapping, retail window installs and ongoing maintenance.",
									"provider": { "@id": "https://adsdotcom.net/#organization" }
								},
								{
									"@type": "Service",
									"position": 5,
									"name": "Event Production",
									"description": "Custom stage builds, LED walls, lighting design and real-time media programming.",
									"provider": { "@id": "https://adsdotcom.net/#organization" }
								},
								{
									"@type": "Service",
									"position": 6,
									"name": "Creative & Design",
									"description": "Brand identity systems, environmental design, packaging and material sampling.",
									"provider": { "@id": "https://adsdotcom.net/#organization" }
								}
							]
						},
						{
							"@type": "FAQPage",
							"mainEntity": [
								{
									"@type": "Question",
									"name": "Where is ADS DOT COM located?",
									"acceptedAnswer": {
										"@type": "Answer",
										"text": "E-193/ii, Bank Stop, Main Walton Road Cantt., Lahore, Pakistan."
									}
								},
								{
									"@type": "Question",
									"name": "How long has ADS DOT COM been operating?",
									"acceptedAnswer": {
										"@type": "Answer",
										"text": "ADS DOT COM was incorporated on May 16, 2006. We have over 20 years of experience in the advertising and creative production industry."
									}
								},
								{
									"@type": "Question",
									"name": "Does ADS DOT COM handle outdoor advertising permits?",
									"acceptedAnswer": {
										"@type": "Answer",
										"text": "Yes. We manage municipal and cantonment permit applications on your behalf for all outdoor installations."
									}
								},
								{
									"@type": "Question",
									"name": "What is the fastest turnaround for print jobs?",
									"acceptedAnswer": {
										"@type": "Answer",
										"text": "For wide-format print jobs with approved artwork, we can deliver within 48 hours."
									}
								},
								{
									"@type": "Question",
									"name": "How can I contact ADS DOT COM?",
									"acceptedAnswer": {
										"@type": "Answer",
										"text": "Email info@adsdotcom.net or sales@adsdotcom.net, or call +92 334 9955475."
									}
								}
							]
						}
					]
				}) }
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			suppressHydrationWarning: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: "https://www.googletagmanager.com/ns.html?id=GTM-TM5BKV64",
					height: "0",
					width: "0",
					style: {
						display: "none",
						visibility: "hidden"
					}
				}) }),
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.ctrlKey && e.altKey && e.shiftKey && e.key.toLowerCase() === "a") router.navigate({ to: "/0i9876r7s7ygs89grt7r9s8rbg9rdb" });
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConvexAuthProvider, {
			client: convex,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})
	});
}
var $$splitComponentImporter$11 = () => import("./work-CvnJoq5O.mjs");
var Route$11 = createFileRoute("/work")({
	head: () => ({
		meta: [
			{ title: "Work — The Anthology | ADS DOT COM" },
			{
				name: "description",
				content: "Selected physical executions by ADS DOT COM — outdoor circuits, broadcast sets, retail fabrications, festival stages and kinetic installations. Built, not rendered."
			},
			{
				property: "og:title",
				content: "The Anthology | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Every project was measured, cut, printed, welded and stood up in the real world. No CGI, no mockups."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/work"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/work"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./studio-DqW54FWY.mjs");
var Route$10 = createFileRoute("/studio")({
	head: () => ({
		meta: [
			{ title: "The Studio — About ADS DOT COM | Lahore, Pakistan" },
			{
				name: "description",
				content: "Founded May 16, 2006. ADS DOT COM is Lahore's integrated creative studio — 20+ years reinventing how brands show up in the physical world. Contact us for your next build."
			},
			{
				property: "og:title",
				content: "The Studio | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Sparking big ideas since 2006. Data-driven insight, human creativity and ethical execution — all under one roof in Lahore."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/studio"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/studio"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./services-BZqH9cuu.mjs");
var Route$9 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Services — Outdoor Advertising, Printing, Fabrication & Events | ADS DOT COM" },
			{
				name: "description",
				content: "Six integrated services: outdoor advertising, precision printing, spatial fabrication, rigging & installation, event production and creative design. All in-house, Lahore Pakistan."
			},
			{
				property: "og:title",
				content: "Services | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Six integrated services built in-house since 2006. Outdoor, print, fabrication, installation, events and creative direction."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./process-teeG7sLY.mjs");
var Route$8 = createFileRoute("/process")({
	head: () => ({
		meta: [
			{ title: "Our Process — Listen, Draft, Prototype, Produce | ADS DOT COM" },
			{
				name: "description",
				content: "Four-stage production process: site survey & brief, 3D concept & engineering, material prototyping, then fabrication and on-site installation by our own crew."
			},
			{
				property: "og:title",
				content: "Our Process | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Four scenes, one continuous take. No subcontractors, no handoffs — just a rigorous four-stage process from brief to build."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/process"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/process"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./blog-CY0dYJh9.mjs");
var Route$7 = createFileRoute("/blog")({
	head: () => ({
		meta: [
			{ title: "Blog — Advertising & Production Insights | ADS DOT COM" },
			{
				name: "description",
				content: "Expert insights on outdoor advertising, printing, fabrication, event production and creative design from ADS DOT COM, Lahore's integrated creative agency since 2006."
			},
			{
				property: "og:title",
				content: "Blog | ADS DOT COM"
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./0i9876r7s7ygs89grt7r9s8rbg9rdb-sds_Fj4D.mjs");
var Route$6 = createFileRoute("/0i9876r7s7ygs89grt7r9s8rbg9rdb")({
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}, { title: "Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./services.printing-oLU6ymsp.mjs");
var Route$5 = createFileRoute("/services/printing")({
	head: () => ({
		meta: [
			{ title: "Printing Services in Lahore, Pakistan | ADS DOT COM" },
			{
				name: "description",
				content: "Wide-format printing, architectural graphics & specialty inks in Lahore. Up to 12m continuous format. Get a quote from ADS DOT COM — 100% in-house press."
			},
			{
				property: "og:title",
				content: "Printing Services in Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Wide-format, letterpress, foil and reactive inks. Up to 12m continuous print format. In-house press. Get a quote from ADS DOT COM Lahore."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/printing"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/printing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./services.outdoor-advertising-D5vNSSlo.mjs");
var Route$4 = createFileRoute("/services/outdoor-advertising")({
	head: () => ({
		meta: [
			{ title: "Outdoor Advertising in Lahore | ADS DOT COM" },
			{
				name: "description",
				content: "Billboard hoarding, transit & ambient outdoor advertising in Lahore, Pakistan. Get a quote from ADS DOT COM — operating since 2006 with nationwide coverage."
			},
			{
				property: "og:title",
				content: "Outdoor Advertising in Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Billboard hoarding, transit advertising and street furniture across Pakistan. In-house production since 2006. Get a quote today."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/outdoor-advertising"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/outdoor-advertising"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services.installation-C_ag6_uQ.mjs");
var Route$3 = createFileRoute("/services/installation")({
	head: () => ({
		meta: [
			{ title: "Signage Installation in Lahore, Pakistan | ADS DOT COM" },
			{
				name: "description",
				content: "Certified rigging, facade wrapping & signage installation in Lahore. High-altitude, city-wide deployment. Get a quote from ADS DOT COM — 24/7 site support."
			},
			{
				property: "og:title",
				content: "Signage Installation in Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Certified rigging, facade wrapping, retail window installs and ongoing maintenance. City-wide deployment in Lahore. Get a quote from ADS DOT COM."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/installation"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/installation"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services.fabrication-BKUlbayT.mjs");
var Route$2 = createFileRoute("/services/fabrication")({
	head: () => ({
		meta: [
			{ title: "Fabrication & Signage in Lahore, Pakistan | ADS DOT COM" },
			{
				name: "description",
				content: "Custom fabrication, kinetic signage & modular structures in Lahore. CNC machining, metal & acrylic. Zero subcontractors. Get a quote from ADS DOT COM."
			},
			{
				property: "og:title",
				content: "Fabrication & Signage in Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Modular structures, kinetic signage and CNC machining — all built in-house in Lahore. Zero subcontractors. Get a quote from ADS DOT COM."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/fabrication"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/fabrication"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.events-Tqan7YqF.mjs");
var Route$1 = createFileRoute("/services/events")({
	head: () => ({
		meta: [
			{ title: "Event Production in Lahore, Pakistan | ADS DOT COM" },
			{
				name: "description",
				content: "Stage builds, LED walls, lighting design & live event production in Lahore. Turnkey delivery. Get a quote from ADS DOT COM — full-stack AV production."
			},
			{
				property: "og:title",
				content: "Event Production in Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Custom stage builds, LED walls, lighting design and real-time media programming. Turnkey event production in Lahore. Get a quote from ADS DOT COM."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/events"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/events"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services.creative-design-R5AoHKI1.mjs");
var Route = createFileRoute("/services/creative-design")({
	head: () => ({
		meta: [
			{ title: "Creative & Brand Design in Lahore | ADS DOT COM" },
			{
				name: "description",
				content: "Brand identity, environmental design & packaging in Lahore, Pakistan. Physical-first creative studio. Get a quote from ADS DOT COM — bespoke, no templates."
			},
			{
				property: "og:title",
				content: "Creative & Brand Design in Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Brand identity systems, environmental design, packaging and material sampling. Physical-first creative studio in Lahore. Get a quote from ADS DOT COM."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/creative-design"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/creative-design"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WorkRoute = Route$11.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$12
});
var StudioRoute = Route$10.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$12
});
var ServicesRoute = Route$9.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$12
});
var ProcessRoute = Route$8.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$12
});
var BlogRoute = Route$7.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$12
});
var R0i9876r7s7ygs89grt7r9s8rbg9rdbRoute = Route$6.update({
	id: "/0i9876r7s7ygs89grt7r9s8rbg9rdb",
	path: "/0i9876r7s7ygs89grt7r9s8rbg9rdb",
	getParentRoute: () => Route$12
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var ServicesPrintingRoute = Route$5.update({
	id: "/printing",
	path: "/printing",
	getParentRoute: () => ServicesRoute
});
var ServicesOutdoorAdvertisingRoute = Route$4.update({
	id: "/outdoor-advertising",
	path: "/outdoor-advertising",
	getParentRoute: () => ServicesRoute
});
var ServicesInstallationRoute = Route$3.update({
	id: "/installation",
	path: "/installation",
	getParentRoute: () => ServicesRoute
});
var ServicesFabricationRoute = Route$2.update({
	id: "/fabrication",
	path: "/fabrication",
	getParentRoute: () => ServicesRoute
});
var ServicesEventsRoute = Route$1.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => ServicesRoute
});
var ServicesCreativeDesignRoute = Route.update({
	id: "/creative-design",
	path: "/creative-design",
	getParentRoute: () => ServicesRoute
});
var BlogSlugRoute = Route$14.update({
	id: "/blog_/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$12
});
var ServicesRouteChildren = {
	ServicesCreativeDesignRoute,
	ServicesEventsRoute,
	ServicesFabricationRoute,
	ServicesInstallationRoute,
	ServicesOutdoorAdvertisingRoute,
	ServicesPrintingRoute
};
var rootRouteChildren = {
	IndexRoute,
	R0i9876r7s7ygs89grt7r9s8rbg9rdbRoute,
	BlogRoute,
	ProcessRoute,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren),
	StudioRoute,
	WorkRoute,
	BlogSlugRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
