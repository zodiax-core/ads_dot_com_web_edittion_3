import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import events from "@/assets/events.jpg";

export const Route = createFileRoute("/services/events")({
  head: () => ({
    meta: [
      { title: "Event Production in Lahore, Pakistan | ADS DOT COM" },
      { name: "description", content: "Stage builds, LED walls, lighting design & live event production in Lahore. Turnkey delivery. Get a quote from ADS DOT COM — full-stack AV production." },
      { property: "og:title", content: "Event Production in Lahore | ADS DOT COM" },
      { property: "og:description", content: "Custom stage builds, LED walls, lighting design and real-time media programming. Turnkey event production in Lahore. Get a quote from ADS DOT COM." },
      { property: "og:url", content: "https://adsdotcom.net/services/events" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <ServicePage
      data={{
        id: "05",
        slug: "events",
        color: "accent-mint",
        h1: "Event Production in Lahore",
        tagline: "Live experiences, engineered from blank space.",
        desc: "We transform empty venues into immersive branded environments. From stage construction to LED wall integration and real-time media programming — our event team handles every technical layer of your live activation.",
        image: events,
        imageAlt: "Branded stage set with LED wall and architectural lighting installed at a live event venue in Lahore",
        capabilities: [
          {
            name: "Custom Stage Design & Build",
            note: "Structural scenic sets",
            desc: "We design and fabricate custom stage structures — from single-level presenter platforms to multi-level scenic sets with integral lighting positions and screen mounting. All structures are engineered in-house and erected by our own crew.",
          },
          {
            name: "LED & Screen Integration",
            note: "Walls, floors & ceilings",
            desc: "We supply, configure and operate LED wall panels, modular screen systems and projection surfaces. Applications include backdrop walls, floor displays, ceiling installations and interactive screen environments.",
          },
          {
            name: "Lighting Design",
            note: "Architectural & dynamic systems",
            desc: "Architectural wash lighting, dynamic effects rigs and colour-programmed systems. We design lighting plots, supply equipment and operate live during the event — or hand over operational control to a resident AV team.",
          },
          {
            name: "Media Server Control",
            note: "Real-time content programming",
            desc: "Real-time content playback, cue-based show programming and live data-driven visual systems. We work with client-supplied content or produce event visuals in-house through our creative studio.",
          },
        ],
        stats: [
          { v: "Full-stack", l: "AV Production" },
          { v: "Live", l: "Event Direction" },
          { v: "Turnkey", l: "Delivery" },
        ],
        faqs: [
          {
            q: "What is the minimum lead time for event production in Lahore?",
            a: "For a straightforward branded event with stage and lighting, we need a minimum of 2–3 weeks from confirmed brief to event day. More complex builds with custom fabrication require 4–8 weeks. Contact us early to secure your dates.",
          },
          {
            q: "Do you supply equipment as well as crew for events?",
            a: "Yes. We supply the stage structures, LED panels, lighting fixtures and media server hardware, and our own crew operates everything on the day. You do not need to source separate equipment or operators.",
          },
          {
            q: "Can you manage event production outside Lahore?",
            a: "Yes. We have produced events in other cities. Our crew travels with all equipment. Contact us with your event location and date to discuss logistics and availability.",
          },
          {
            q: "Do you provide event content creation as well as technical production?",
            a: "Yes. Our creative studio can produce motion graphics, looping visuals and branded content for use on your event screens. This is available as an add-on to any technical production booking.",
          },
        ],
        related: [
          { title: "Spatial Fabrication", href: "/services/fabrication" },
          { title: "Rigging & Installation", href: "/services/installation" },
          { title: "Creative & Design", href: "/services/creative-design" },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://adsdotcom.net/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://adsdotcom.net/services" },
                { "@type": "ListItem", "position": 3, "name": "Event Production", "item": "https://adsdotcom.net/services/events" },
              ],
            },
            {
              "@type": "Service",
              "name": "Event Production",
              "url": "https://adsdotcom.net/services/events",
              "description": "Custom stage builds, LED walls, lighting design and real-time media programming. Turnkey event production in Lahore, Pakistan.",
              "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
              "areaServed": { "@type": "Country", "name": "Pakistan" },
              "serviceType": "Event Production",
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the minimum lead time for event production in Lahore?", "acceptedAnswer": { "@type": "Answer", "text": "For a straightforward branded event with stage and lighting, we need a minimum of 2–3 weeks. More complex builds require 4–8 weeks." } },
                { "@type": "Question", "name": "Do you supply equipment as well as crew for events?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We supply the stage structures, LED panels, lighting fixtures and media server hardware, and our own crew operates everything on the day." } },
                { "@type": "Question", "name": "Can you manage event production outside Lahore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have produced events in other cities. Our crew travels with all equipment." } },
              ],
            },
          ],
        },
      }}
    />
  );
}
