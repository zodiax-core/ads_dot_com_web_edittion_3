import { s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { t as printing_default } from "./printing-DClTnR89.mjs";
import { t as ServicePage } from "./ServicePage-BxTx2lvF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.printing-oLU6ymsp.js
var import_jsx_runtime = require_jsx_runtime();
function PrintingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePage, { data: {
		id: "02",
		slug: "printing",
		color: "accent-yellow",
		h1: "Wide-Format Printing in Lahore",
		tagline: "Ink and paper, engineered. Every fibre matters.",
		desc: "Our printing division operates at the intersection of traditional craftsmanship and modern press technology — bespoke ink formulations and large-format outputs creating depth that digital screens cannot replicate.",
		image: printing_default,
		imageAlt: "Wide-format printing press outputting large vinyl graphic roll in ADS DOT COM Lahore workshop",
		capabilities: [
			{
				name: "Bespoke Letterpress & Foil",
				note: "Cotton, cork and reclaimed pulp",
				desc: "Hand-crafted letterpress runs on cotton and specialty substrates, with hot-foil stamping available in gold, silver and custom pantone metallics. Ideal for corporate stationery, packaging and premium collateral."
			},
			{
				name: "Large-Scale Architectural Graphics",
				note: "Up to 12m continuous format",
				desc: "We produce continuous vinyl graphics up to 12m wide for facade wraps, hoarding panels, window graphics and museum-scale installations. UV-stable inks with precise colour-matching to approved proofs."
			},
			{
				name: "Reactive Intelligent Inks",
				note: "Thermochromic and photochromic",
				desc: "Specialty ink applications including thermochromic inks (colour-changes with temperature) and photochromic inks (colour-changes with UV light). Used in experiential retail and high-impact print campaigns."
			},
			{
				name: "Sustainable Substrates",
				note: "Fully closed-loop material chain",
				desc: "We print on recycled and sustainably sourced substrates including FSC-certified papers, recycled PVC alternatives and biodegradable banner materials — with full chain-of-custody documentation available."
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
		],
		faqs: [
			{
				q: "What is the fastest turnaround for a print job in Lahore?",
				a: "For wide-format vinyl with approved artwork, we can deliver within 48 hours. Standard turnaround for most print jobs is 3–5 working days depending on substrate and finishing requirements."
			},
			{
				q: "Do you offer colour proofing before full production runs?",
				a: "Yes. We produce physical material proofs at full colour density before any full production run. Client sign-off on the proof is required before we proceed — this eliminates costly surprises."
			},
			{
				q: "What file formats do you accept for print-ready artwork?",
				a: "We accept PDF (print-ready, CMYK, minimum 100dpi at final print size), AI, EPS and TIFF. We can assist with artwork setup and prepress checks at no additional charge."
			},
			{
				q: "Can you print on non-standard materials or shapes?",
				a: "Yes. We regularly print on specialty substrates including aluminium composite, correx board, backlit film, mesh banner and fabric. Speak to us about your specific substrate requirement."
			}
		],
		related: [
			{
				title: "Outdoor Advertising",
				href: "/services/outdoor-advertising"
			},
			{
				title: "Rigging & Installation",
				href: "/services/installation"
			},
			{
				title: "Creative & Design",
				href: "/services/creative-design"
			}
		],
		schema: {
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
							"name": "Printing",
							"item": "https://adsdotcom.net/services/printing"
						}
					]
				},
				{
					"@type": "Service",
					"name": "Wide-Format Printing",
					"url": "https://adsdotcom.net/services/printing",
					"description": "Wide-format architectural graphics, letterpress, foil and reactive inks. Up to 12m continuous format. 100% in-house press in Lahore.",
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
				},
				{
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "What is the fastest turnaround for a print job in Lahore?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "For wide-format vinyl with approved artwork, we can deliver within 48 hours. Standard turnaround is 3–5 working days."
							}
						},
						{
							"@type": "Question",
							"name": "Do you offer colour proofing before full production runs?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Yes. We produce physical material proofs at full colour density before any full production run. Client sign-off is required before we proceed."
							}
						},
						{
							"@type": "Question",
							"name": "What file formats do you accept for print-ready artwork?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "We accept PDF (print-ready, CMYK, minimum 100dpi at final print size), AI, EPS and TIFF."
							}
						},
						{
							"@type": "Question",
							"name": "Can you print on non-standard materials or shapes?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Yes. We regularly print on aluminium composite, correx board, backlit film, mesh banner and fabric."
							}
						}
					]
				}
			]
		}
	} });
}
//#endregion
export { PrintingPage as component };
