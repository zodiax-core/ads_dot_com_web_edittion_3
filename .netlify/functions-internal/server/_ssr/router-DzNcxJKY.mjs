import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, i as ConvexReactClient, s as require_jsx_runtime, t as ConvexAuthProvider } from "../_libs/@convex-dev/auth+[...].mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$18 } from "./routes-NhXn897Y.mjs";
import { t as Route$19 } from "./blog_._slug-CoeGlIMH.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DzNcxJKY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DQGgShg8.css";
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
var Route$17 = createRootRouteWithContext()({
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
				name: "msapplication-TileImage",
				content: "https://adsdotcom.net/logo.png"
			},
			{
				name: "msapplication-TileColor",
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
				content: "https://adsdotcom.net/og-image.png"
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
				content: "ADS DOT COM — Integrated Creative Agency Lahore"
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
				content: "https://adsdotcom.net/og-image.png"
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
				href: "/favicon.ico",
				sizes: "any"
			},
			{
				rel: "icon",
				href: "/logo.png",
				type: "image/png",
				sizes: "1080x1080"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.ico"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo.png",
				sizes: "1080x1080"
			},
			{
				rel: "manifest",
				href: "/manifest.json"
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
							"logo": {
								"@type": "ImageObject",
								"url": "https://adsdotcom.net/logo.png",
								"width": 1080,
								"height": 1080
							},
							"image": "https://adsdotcom.net/og-image.png",
							"description": "Lahore's leading integrated creative agency — outdoor advertising, precision printing, fabrication, installation, event production and brand design since 2006.",
							"foundingDate": "2006-05-16",
							"email": "info@adsdotcom.net",
							"telephone": ["+923349955475", "+923030449955"],
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
							"description": "Outdoor advertising, printing, fabrication, event management and creative design in Lahore, Pakistan.",
							"publisher": { "@id": "https://adsdotcom.net/#organization" },
							"potentialAction": {
								"@type": "SearchAction",
								"target": {
									"@type": "EntryPoint",
									"urlTemplate": "https://adsdotcom.net/?q={search_term_string}"
								},
								"query-input": "required name=search_term_string"
							}
						},
						{
							"@type": "ItemList",
							"name": "ADS DOT COM Services",
							"description": "Core services offered by ADS DOT COM in Lahore, Pakistan.",
							"itemListElement": [
								{
									"@type": "SiteLinksAction",
									"name": "Outdoor Advertising",
									"url": "https://adsdotcom.net/services/outdoor-advertising",
									"description": "Billboard hoarding, transit advertising & street furniture across Pakistan."
								},
								{
									"@type": "SiteLinksAction",
									"name": "Printing Services",
									"url": "https://adsdotcom.net/services/printing",
									"description": "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland & Offset printing in Lahore."
								},
								{
									"@type": "SiteLinksAction",
									"name": "Fabrication & Installation",
									"url": "https://adsdotcom.net/services/fabrication",
									"description": "Billboard fabrication, custom signage, 3D sign boards & stainless steel letters."
								},
								{
									"@type": "SiteLinksAction",
									"name": "Event Management",
									"url": "https://adsdotcom.net/services/events",
									"description": "Weddings, corporate events, birthdays & exhibition stalls in Lahore."
								},
								{
									"@type": "SiteLinksAction",
									"name": "Creative Design",
									"url": "https://adsdotcom.net/services/creative-design",
									"description": "Brand identity, UI/UX, print & environmental design in Lahore."
								},
								{
									"@type": "SiteLinksAction",
									"name": "Our Work",
									"url": "https://adsdotcom.net/work",
									"description": "Portfolio of completed advertising, fabrication and event projects."
								},
								{
									"@type": "SiteLinksAction",
									"name": "Get a Quote",
									"url": "https://wa.me/923349955475",
									"description": "Contact ADS DOT COM on WhatsApp for a project quote."
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
										"text": "Call us at +92 303 0449955, WhatsApp at +92 334 9955475, or email info@adsdotcom.net / sales@adsdotcom.net."
									}
								},
								{
									"@type": "Question",
									"name": "Do you do weddings and shadi events?",
									"acceptedAnswer": {
										"@type": "Answer",
										"text": "Yes — our Event Management division handles full décor, stage setup and logistics for weddings, shadi events, birthdays and corporate functions across Lahore."
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
	const { queryClient } = Route$17.useRouteContext();
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
var $$splitComponentImporter$16 = () => import("./work-xmyKEDeC.mjs");
var Route$16 = createFileRoute("/work")({
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
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./studio-3ejbod2e.mjs");
var Route$15 = createFileRoute("/studio")({
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
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./process-DJhQUmMT.mjs");
var Route$14 = createFileRoute("/process")({
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
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./blog-BxvvTeLb.mjs");
var Route$13 = createFileRoute("/blog")({
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
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./0i9876r7s7ygs89grt7r9s8rbg9rdb-DdRflmxI.mjs");
var Route$12 = createFileRoute("/0i9876r7s7ygs89grt7r9s8rbg9rdb")({
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}, { title: "Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./services.index-COg0o-Ou.mjs");
var Route$11 = createFileRoute("/services/")({
	head: () => ({
		meta: [
			{ title: "Services — Printing, Fabrication & Events | ADS DOT COM" },
			{
				name: "description",
				content: "Four integrated services: precision printing, spatial fabrication, event production and creative design. All in-house, Lahore Pakistan."
			},
			{
				property: "og:title",
				content: "Services | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Four integrated services built in-house since 2006. Print, fabrication, events and creative direction."
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
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./services_.printing-services-DBoZ6RRw.mjs");
var Route$10 = createFileRoute("/services_/printing-services")({
	head: () => ({
		meta: [
			{ title: "Printing Services in Lahore | UV, DTF, Flex, Offset | ADS DOT COM" },
			{
				name: "description",
				content: "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland & Offset printing in Lahore. Professional printing services by ADS DOT COM. Get a quote today."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/printing-services"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/printing-services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./services_.fabrication-installation-Cv-JutJJ.mjs");
var Route$9 = createFileRoute("/services_/fabrication-installation")({
	head: () => ({
		meta: [
			{ title: "Fabrication & Installation in Lahore | Billboards, Signage, 3D | ADS DOT COM" },
			{
				name: "description",
				content: "Billboard fabrication, custom signage, 3D sign boards and stainless steel letters in Lahore. Professional installation by ADS DOT COM. Get a quote today."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/fabrication-installation"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/fabrication-installation"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./services_.event-management-BPzUZN3h.mjs");
var Route$8 = createFileRoute("/services_/event-management")({
	head: () => ({
		meta: [
			{ title: "Event Management in Lahore | Weddings, Corporate, Birthdays | ADS DOT COM" },
			{
				name: "description",
				content: "Professional event management in Lahore — weddings, corporate events, birthdays, exhibitions and stalls. Full decoration & setup by ADS DOT COM. Get a quote."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/event-management"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/event-management"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./services_.creative-development-mtiE4YPm.mjs");
var Route$7 = createFileRoute("/services_/creative-development")({
	head: () => ({
		meta: [
			{ title: "Creative Design & Development in Lahore | ADS DOT COM" },
			{
				name: "description",
				content: "Brand identity, graphic design, UI/UX and creative development in Lahore. Physical-first design studio by ADS DOT COM. Get a quote today."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/creative-development"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/creative-development"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./services.website-development-CxC-Wlj2.mjs");
var Route$6 = createFileRoute("/services/website-development")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./services.printing-DxDIFE1_.mjs");
var schemaData$3 = {
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
				"name": "Services",
				"item": "https://adsdotcom.net/services"
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": "Printing Services",
				"item": "https://adsdotcom.net/services/printing"
			}
		]
	}, {
		"@type": "Service",
		"name": "Printing Services",
		"url": "https://adsdotcom.net/services/printing",
		"description": "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland and Offset printing in Lahore, Pakistan.",
		"provider": {
			"@type": "Organization",
			"name": "ADS DOT COM",
			"url": "https://adsdotcom.net"
		},
		"areaServed": {
			"@type": "Country",
			"name": "Pakistan"
		},
		"serviceType": "Printing Services"
	}]
};
var Route$5 = createFileRoute("/services/printing")({
	head: () => ({
		meta: [
			{ title: "Printing Services in Lahore | UV, DTF, Flex & Offset | ADS DOT COM" },
			{
				name: "description",
				content: "Professional printing in Lahore: UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland & Offset. In-house facility, fast turnaround. WhatsApp for a quote."
			},
			{
				property: "og:title",
				content: "Printing Services in Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "UV Roll-to-Roll, UV DTF, UV Flatbed, Digital Flex, Roland & Offset — all in-house in Lahore. Fast turnaround, in-house press."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/printing"
			},
			{
				property: "og:image",
				content: "https://adsdotcom.net/og-image.png"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Printing Services Lahore | ADS DOT COM"
			},
			{
				name: "twitter:description",
				content: "UV, DTF, Flex, Roland & Offset — all in-house in Lahore."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/printing"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(schemaData$3)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./services.outdoor-advertising-Knqt5wFM.mjs");
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
var $$splitComponentImporter$3 = () => import("./services.installation-DMIwH6UZ.mjs");
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
var $$splitComponentImporter$2 = () => import("./services.fabrication-C_6Ljsqz.mjs");
var schemaData$2 = {
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
				"name": "Services",
				"item": "https://adsdotcom.net/services"
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": "Fabrication & Installation",
				"item": "https://adsdotcom.net/services/fabrication"
			}
		]
	}, {
		"@type": "Service",
		"name": "Fabrication & Installation",
		"url": "https://adsdotcom.net/services/fabrication",
		"description": "Billboard fabrication, custom signage, 3D sign boards and stainless steel letters — designed, fabricated and installed in-house in Lahore.",
		"provider": {
			"@type": "Organization",
			"name": "ADS DOT COM",
			"url": "https://adsdotcom.net"
		},
		"areaServed": {
			"@type": "Country",
			"name": "Pakistan"
		},
		"serviceType": "Fabrication and Installation"
	}]
};
var Route$2 = createFileRoute("/services/fabrication")({
	head: () => ({
		meta: [
			{ title: "Billboard & Signage Fabrication in Lahore | 3D Signs | ADS DOT COM" },
			{
				name: "description",
				content: "In-house billboard fabrication, custom signage, 3D sign boards & stainless steel letters in Lahore. Zero subcontractors — designed, built & installed by our own crew."
			},
			{
				property: "og:title",
				content: "Fabrication & Installation in Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Billboards, custom signage, 3D sign boards & stainless steel letters — all in-house in Lahore. No subcontractors."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/fabrication"
			},
			{
				property: "og:image",
				content: "https://adsdotcom.net/og-image.png"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Fabrication & Installation Lahore | ADS DOT COM"
			},
			{
				name: "twitter:description",
				content: "Billboards, 3D signs, stainless steel letters — built & installed in-house in Lahore."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/fabrication"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(schemaData$2)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.events-DJss7hgo.mjs");
var schemaData$1 = {
	"@context": "https://schema.org",
	"@graph": [
		{
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
					"name": "Services",
					"item": "https://adsdotcom.net/services"
				},
				{
					"@type": "ListItem",
					"position": 3,
					"name": "Event Management",
					"item": "https://adsdotcom.net/services/events"
				}
			]
		},
		{
			"@type": "Service",
			"name": "Event Management",
			"url": "https://adsdotcom.net/services/events",
			"description": "Weddings, corporate events, birthday parties, exhibitions and branded stalls in Lahore. Full décor, stage setup and event management.",
			"provider": {
				"@type": "Organization",
				"name": "ADS DOT COM",
				"url": "https://adsdotcom.net"
			},
			"areaServed": {
				"@type": "AdministrativeArea",
				"name": "Lahore"
			},
			"serviceType": "Event Management"
		},
		{
			"@type": "FAQPage",
			"mainEntity": [{
				"@type": "Question",
				"name": "Do you manage outdoor weddings in Lahore?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Yes. We handle full décor, stage, lighting and logistics for outdoor and indoor weddings and shadi events across Lahore."
				}
			}, {
				"@type": "Question",
				"name": "Can you set up exhibition stalls?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Absolutely. We design, fabricate and install custom branded exhibition stalls for expos and trade shows."
				}
			}]
		}
	]
};
var Route$1 = createFileRoute("/services/events")({
	head: () => ({
		meta: [
			{ title: "Event Management in Lahore | Weddings, Corporate & Exhibitions | ADS DOT COM" },
			{
				name: "description",
				content: "Professional event management in Lahore: weddings, shadi events, birthday parties, corporate launches & exhibition stalls. Full décor, stage & lighting — turnkey delivery."
			},
			{
				property: "og:title",
				content: "Event Management Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Weddings, shadi events, birthdays, corporate events & stalls in Lahore — turnkey delivery, full décor & stage setup."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/events"
			},
			{
				property: "og:image",
				content: "https://adsdotcom.net/og-image.png"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Event Management Lahore | ADS DOT COM"
			},
			{
				name: "twitter:description",
				content: "Weddings, birthdays, corporate events & exhibition stalls — full turnkey event management in Lahore."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/events"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(schemaData$1)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services.creative-design-C_t_g9a8.mjs");
var schemaData = {
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
				"name": "Services",
				"item": "https://adsdotcom.net/services"
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": "Creative Design",
				"item": "https://adsdotcom.net/services/creative-design"
			}
		]
	}, {
		"@type": "Service",
		"name": "Creative Design",
		"url": "https://adsdotcom.net/services/creative-design",
		"description": "Brand identity, graphic design, UI/UX and environmental design in Lahore. Physical-first creative studio.",
		"provider": {
			"@type": "Organization",
			"name": "ADS DOT COM",
			"url": "https://adsdotcom.net"
		},
		"areaServed": {
			"@type": "Country",
			"name": "Pakistan"
		},
		"serviceType": "Creative Design"
	}]
};
var Route = createFileRoute("/services/creative-design")({
	head: () => ({
		meta: [
			{ title: "Creative Design Agency in Lahore | Brand Identity, UI/UX | ADS DOT COM" },
			{
				name: "description",
				content: "Creative design agency in Lahore: brand identity, UI/UX, print & packaging, and environmental design. Physical-first studio designing for production."
			},
			{
				property: "og:title",
				content: "Creative Design Agency Lahore | ADS DOT COM"
			},
			{
				property: "og:description",
				content: "Brand identity, UI/UX, print, packaging & environmental design — physical-first creative studio in Lahore."
			},
			{
				property: "og:url",
				content: "https://adsdotcom.net/services/creative-design"
			},
			{
				property: "og:image",
				content: "https://adsdotcom.net/og-image.png"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Creative Design Agency Lahore | ADS DOT COM"
			},
			{
				name: "twitter:description",
				content: "Brand identity, UI/UX, print & environmental design — physical-first creative studio in Lahore."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://adsdotcom.net/services/creative-design"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(schemaData)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WorkRoute = Route$16.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$17
});
var StudioRoute = Route$15.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$17
});
var ProcessRoute = Route$14.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$17
});
var BlogRoute = Route$13.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$17
});
var R0i9876r7s7ygs89grt7r9s8rbg9rdbRoute = Route$12.update({
	id: "/0i9876r7s7ygs89grt7r9s8rbg9rdb",
	path: "/0i9876r7s7ygs89grt7r9s8rbg9rdb",
	getParentRoute: () => Route$17
});
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var ServicesIndexRoute = Route$11.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$17
});
var ServicesPrintingServicesRoute = Route$10.update({
	id: "/services_/printing-services",
	path: "/services/printing-services",
	getParentRoute: () => Route$17
});
var ServicesFabricationInstallationRoute = Route$9.update({
	id: "/services_/fabrication-installation",
	path: "/services/fabrication-installation",
	getParentRoute: () => Route$17
});
var ServicesEventManagementRoute = Route$8.update({
	id: "/services_/event-management",
	path: "/services/event-management",
	getParentRoute: () => Route$17
});
var ServicesCreativeDevelopmentRoute = Route$7.update({
	id: "/services_/creative-development",
	path: "/services/creative-development",
	getParentRoute: () => Route$17
});
var ServicesWebsiteDevelopmentRoute = Route$6.update({
	id: "/services/website-development",
	path: "/services/website-development",
	getParentRoute: () => Route$17
});
var ServicesPrintingRoute = Route$5.update({
	id: "/services/printing",
	path: "/services/printing",
	getParentRoute: () => Route$17
});
var ServicesOutdoorAdvertisingRoute = Route$4.update({
	id: "/services/outdoor-advertising",
	path: "/services/outdoor-advertising",
	getParentRoute: () => Route$17
});
var ServicesInstallationRoute = Route$3.update({
	id: "/services/installation",
	path: "/services/installation",
	getParentRoute: () => Route$17
});
var ServicesFabricationRoute = Route$2.update({
	id: "/services/fabrication",
	path: "/services/fabrication",
	getParentRoute: () => Route$17
});
var ServicesEventsRoute = Route$1.update({
	id: "/services/events",
	path: "/services/events",
	getParentRoute: () => Route$17
});
var ServicesCreativeDesignRoute = Route.update({
	id: "/services/creative-design",
	path: "/services/creative-design",
	getParentRoute: () => Route$17
});
var rootRouteChildren = {
	IndexRoute,
	R0i9876r7s7ygs89grt7r9s8rbg9rdbRoute,
	BlogRoute,
	ProcessRoute,
	StudioRoute,
	WorkRoute,
	BlogSlugRoute: Route$19.update({
		id: "/blog_/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$17
	}),
	ServicesCreativeDesignRoute,
	ServicesEventsRoute,
	ServicesFabricationRoute,
	ServicesInstallationRoute,
	ServicesOutdoorAdvertisingRoute,
	ServicesPrintingRoute,
	ServicesWebsiteDevelopmentRoute,
	ServicesCreativeDevelopmentRoute,
	ServicesEventManagementRoute,
	ServicesFabricationInstallationRoute,
	ServicesPrintingServicesRoute,
	ServicesIndexRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
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
