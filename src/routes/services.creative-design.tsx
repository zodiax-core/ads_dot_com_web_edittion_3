import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import creative from "@/assets/creative.jpg";

export const Route = createFileRoute("/services/creative-design")({
  head: () => ({
    meta: [
      { title: "Creative & Brand Design in Lahore | ADS DOT COM" },
      { name: "description", content: "Brand identity, environmental design & packaging in Lahore, Pakistan. Physical-first creative studio. Get a quote from ADS DOT COM — bespoke, no templates." },
      { property: "og:title", content: "Creative & Brand Design in Lahore | ADS DOT COM" },
      { property: "og:description", content: "Brand identity systems, environmental design, packaging and material sampling. Physical-first creative studio in Lahore. Get a quote from ADS DOT COM." },
      { property: "og:url", content: "https://adsdotcom.net/services/creative-design" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/creative-design" }],
  }),
  component: CreativeDesignPage,
});

function CreativeDesignPage() {
  return (
    <ServicePage
      data={{
        id: "06",
        slug: "creative-design",
        color: "accent-blue",
        h1: "Brand Design in Lahore",
        tagline: "Sketches evolve into complete brand systems.",
        desc: "Our studio guides each project from initial concept all the way to physical execution. Identity systems, spatial graphics, packaging, and environmental design — every output has a material reality.",
        image: creative,
        imageAlt: "ADS DOT COM creative studio workspace in Lahore with brand identity layouts and material samples on desk",
        capabilities: [
          {
            name: "Brand Identity Systems",
            note: "Physical visual language",
            desc: "Complete brand identity programmes including logotype, colour system, typography and usage guidelines — built for physical application. Every mark we design is stress-tested against the real-world surfaces it will appear on, from signage to packaging to uniform.",
          },
          {
            name: "Environmental Design",
            note: "Spatial graphics & wayfinding",
            desc: "Spatial graphic programmes for offices, retail environments, campuses and public spaces. Includes wayfinding systems, wall graphics, floor graphics and dimensional signage — all produced and installed by our own team.",
          },
          {
            name: "Packaging & Unboxing",
            note: "Tactile luxury experiences",
            desc: "Structural packaging design with material specification — rigid boxes, mailer sets, tissue wraps and branded inserts. We prototype in-house and can move directly into production, keeping design and manufacturing under one roof.",
          },
          {
            name: "Material Sampling",
            note: "Prototype proofing before print",
            desc: "Before any production run, we produce physical material prototypes — printed panels, fabricated samples, ink tests — for client review. This pre-production proofing stage is included in every project.",
          },
        ],
        stats: [
          { v: "End-to-end", l: "Studio Direction" },
          { v: "Physical", l: "Every Output" },
          { v: "Bespoke", l: "No Templates" },
        ],
        faqs: [
          {
            q: "Do you offer branding projects without print or fabrication production?",
            a: "Yes. We can deliver a brand identity programme as a standalone design project with a digital brand guidelines document. However, our strength is taking that identity through to physical production — signage, print and fabrication — in the same studio.",
          },
          {
            q: "How long does a brand identity project take?",
            a: "A focused brand identity project (logo, colour, typography, basic applications) typically takes 3–5 weeks from brief to final files. Larger programmes including environmental design and packaging can take 8–12 weeks.",
          },
          {
            q: "Can you redesign an existing brand rather than start from scratch?",
            a: "Yes. Brand refresh and evolution projects are a significant part of our studio work. We audit existing brand assets, identify what to retain and what to update, and develop a revised system with a clear rationale.",
          },
          {
            q: "Do you provide print-ready files or only creative concepts?",
            a: "We deliver fully print-ready, production-ready files alongside the creative work. Because we run our own presses and fabrication workshop, our design files are built for direct production — no additional setup costs.",
          },
        ],
        related: [
          { title: "Precision Printing", href: "/services/printing" },
          { title: "Spatial Fabrication", href: "/services/fabrication" },
          { title: "Outdoor Advertising", href: "/services/outdoor-advertising" },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://adsdotcom.net/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://adsdotcom.net/services" },
                { "@type": "ListItem", "position": 3, "name": "Creative & Design", "item": "https://adsdotcom.net/services/creative-design" },
              ],
            },
            {
              "@type": "Service",
              "name": "Creative & Brand Design",
              "url": "https://adsdotcom.net/services/creative-design",
              "description": "Brand identity systems, environmental design, packaging and material sampling. Physical-first creative studio in Lahore, Pakistan.",
              "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
              "areaServed": { "@type": "Country", "name": "Pakistan" },
              "serviceType": "Creative Design",
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How long does a brand identity project take?", "acceptedAnswer": { "@type": "Answer", "text": "A focused brand identity project typically takes 3–5 weeks. Larger programmes including environmental design and packaging can take 8–12 weeks." } },
                { "@type": "Question", "name": "Do you provide print-ready files or only creative concepts?", "acceptedAnswer": { "@type": "Answer", "text": "We deliver fully print-ready, production-ready files alongside the creative work." } },
                { "@type": "Question", "name": "Can you redesign an existing brand rather than start from scratch?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Brand refresh and evolution projects are a significant part of our studio work." } },
              ],
            },
          ],
        },
      }}
    />
  );
}
