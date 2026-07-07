import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import fabModular from "@/assets/fab-modular.jpg";

export const Route = createFileRoute("/services/fabrication")({
  head: () => ({
    meta: [
      { title: "Fabrication & Signage in Lahore, Pakistan | ADS DOT COM" },
      { name: "description", content: "Custom fabrication, kinetic signage & modular structures in Lahore. CNC machining, metal & acrylic. Zero subcontractors. Get a quote from ADS DOT COM." },
      { property: "og:title", content: "Fabrication & Signage in Lahore | ADS DOT COM" },
      { property: "og:description", content: "Modular structures, kinetic signage and CNC machining — all built in-house in Lahore. Zero subcontractors. Get a quote from ADS DOT COM." },
      { property: "og:url", content: "https://adsdotcom.net/services/fabrication" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/fabrication" }],
  }),
  component: FabricationPage,
});

function FabricationPage() {
  return (
    <ServicePage
      data={{
        id: "03",
        slug: "fabrication",
        color: "accent-coral",
        h1: "Custom Fabrication in Lahore",
        tagline: "Where geometry meets the physical plane.",
        desc: "Modular assemblies, precision machining and hand-finished detail — all built in-house. Our fabrication team translates architectural drawings into physical structures that are delivered and erected by our own crew.",
        image: fabModular,
        imageAlt: "Modular aluminium exhibition structure being assembled in ADS DOT COM fabrication workshop, Lahore",
        capabilities: [
          {
            name: "Modular Structural Systems",
            note: "Rapidly deployable event frames",
            desc: "Custom aluminium and steel modular frames designed for rapid on-site assembly. Used for exhibition pavilions, branded event structures and temporary architectural installations. Every system is engineered, fabricated and load-tested in our workshop.",
          },
          {
            name: "Kinetic Signage",
            note: "Animated, mechanical brand displays",
            desc: "Motor-driven rotating panels, animated fin walls and mechanically operated display systems. We handle the mechanical engineering, fabrication and control system installation — all in-house. Ideal for retail flagships and corporate lobbies.",
          },
          {
            name: "CNC & Robotic Machining",
            note: "Precision-cut metal, wood & acrylic",
            desc: "Computer-controlled precision cutting and routing of aluminium, mild steel, MDF, plywood and acrylic. We produce components to architectural tolerances for signage, furniture, display fixtures and structural elements.",
          },
          {
            name: "Scenic Venue Conversion",
            note: "Industrial space transformation",
            desc: "We design and build complete scenic environments — converting raw industrial spaces into immersive branded venues. Includes structural backdrop walls, branded surface cladding, lighting rigging and prop fabrication.",
          },
        ],
        stats: [
          { v: "In-house", l: "Full Workshop" },
          { v: "Custom", l: "Every Build" },
          { v: "Zero", l: "Subcontractors" },
        ],
        faqs: [
          {
            q: "What is the lead time for a custom fabrication project in Lahore?",
            a: "Lead time depends on scope. Simple fabrication items (sign plates, display frames) typically take 5–10 working days. Complex structural builds requiring engineering sign-off take 3–6 weeks from approved drawings.",
          },
          {
            q: "Do you fabricate for one-off projects or only for repeat clients?",
            a: "We work on both one-off commissions and ongoing supply relationships. Every project, regardless of size, receives the same engineering and quality review process.",
          },
          {
            q: "What materials do you work with in your fabrication workshop?",
            a: "Mild steel, stainless steel, aluminium, MDF, plywood, acrylic, polycarbonate and PVC foam. We can advise on the most suitable material for your application, budget and environment.",
          },
          {
            q: "Can you fabricate items from a client-supplied drawing or 3D file?",
            a: "Yes. We accept DWG, DXF, STEP, OBJ and PDF technical drawings. We can also work from concept sketches and develop the engineering drawings ourselves before fabrication begins.",
          },
        ],
        related: [
          { title: "Rigging & Installation", href: "/services/installation" },
          { title: "Event Production", href: "/services/events" },
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
                { "@type": "ListItem", "position": 3, "name": "Fabrication", "item": "https://adsdotcom.net/services/fabrication" },
              ],
            },
            {
              "@type": "Service",
              "name": "Custom Fabrication",
              "url": "https://adsdotcom.net/services/fabrication",
              "description": "Modular structures, kinetic signage, CNC machining and scenic venue conversion — all built in-house in Lahore. Zero subcontractors.",
              "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
              "areaServed": { "@type": "Country", "name": "Pakistan" },
              "serviceType": "Custom Fabrication",
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the lead time for a custom fabrication project in Lahore?", "acceptedAnswer": { "@type": "Answer", "text": "Simple fabrication items typically take 5–10 working days. Complex structural builds take 3–6 weeks from approved drawings." } },
                { "@type": "Question", "name": "What materials do you work with in your fabrication workshop?", "acceptedAnswer": { "@type": "Answer", "text": "Mild steel, stainless steel, aluminium, MDF, plywood, acrylic, polycarbonate and PVC foam." } },
                { "@type": "Question", "name": "Can you fabricate items from a client-supplied drawing or 3D file?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We accept DWG, DXF, STEP, OBJ and PDF technical drawings." } },
              ],
            },
          ],
        },
      }}
    />
  );
}
