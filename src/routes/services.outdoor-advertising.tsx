import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import fabVenue from "@/assets/fab-venue.jpg";

export const Route = createFileRoute("/services/outdoor-advertising")({
  head: () => ({
    meta: [
      { title: "Outdoor Advertising in Lahore | ADS DOT COM" },
      { name: "description", content: "Billboard hoarding, transit & ambient outdoor advertising in Lahore, Pakistan. Get a quote from ADS DOT COM — operating since 2006 with nationwide coverage." },
      { property: "og:title", content: "Outdoor Advertising in Lahore | ADS DOT COM" },
      { property: "og:description", content: "Billboard hoarding, transit advertising and street furniture across Pakistan. In-house production since 2006. Get a quote today." },
      { property: "og:url", content: "https://adsdotcom.net/services/outdoor-advertising" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/outdoor-advertising" }],
  }),
  component: OutdoorAdvertisingPage,
});

function OutdoorAdvertisingPage() {
  return (
    <ServicePage
      data={{
        id: "01",
        slug: "outdoor-advertising",
        color: "accent-blue",
        h1: "Billboard Advertising in Lahore",
        tagline: "Billboards, transit & ambient — commanding presence at scale.",
        desc: "Our founding division since 2006. We design, produce, place, and maintain outdoor advertising installations across Pakistan. From single-site billboards to multi-city corridor campaigns.",
        image: fabVenue,
        imageAlt: "Large-format billboard hoarding structure on Walton Road, Lahore cantonment area",
        capabilities: [
          {
            name: "Billboard Hoarding",
            note: "Single, double & tri-vision formats",
            desc: "We design, fabricate and install billboard structures — single-face, double-sided and tri-vision rotating formats. Steel-frame construction with UV-stable vinyl production handled fully in-house.",
          },
          {
            name: "Transit Advertising",
            note: "Buses, bus stops & shelters",
            desc: "Fleet wraps, bus back panels, bus stop advertising and shelter branding. We manage artwork production, printing and installation across Lahore and other major cities.",
          },
          {
            name: "Street Furniture",
            note: "Benches, kiosks & pedestrian signage",
            desc: "Branded street benches, information kiosks and pedestrian-level directional signage. Ideal for campus, commercial district and municipal branding programmes.",
          },
          {
            name: "Logo Sign Plates",
            note: "Branded municipal & directional",
            desc: "Fabricated identification signs, corporate name plates and wayfinding systems. Available in aluminium, acrylic and weathering steel with illuminated options.",
          },
        ],
        stats: [
          { v: "20+", l: "Years Operating" },
          { v: "100s", l: "Sites Managed" },
          { v: "Nationwide", l: "Coverage" },
        ],
        faqs: [
          {
            q: "How long does it take to produce and install a billboard in Lahore?",
            a: "For a standard single-face billboard with approved artwork, production and installation typically takes 5–10 working days. Rush jobs with 48-hour print turnaround are available for time-sensitive campaigns.",
          },
          {
            q: "Do you handle permit applications for outdoor sites?",
            a: "Yes. We manage cantonment and municipal permit applications on your behalf for all outdoor installations in Lahore. Timelines vary by authority — typically 1–3 weeks.",
          },
          {
            q: "What areas do you cover for outdoor advertising?",
            a: "We operate primarily across Lahore, with installations also completed in Karachi, Islamabad, Rawalpindi and other major cities. Contact us for availability in a specific corridor.",
          },
          {
            q: "What is the minimum campaign size for outdoor advertising?",
            a: "We work with single-site campaigns as well as multi-city circuits. There is no fixed minimum — send us your brief and we'll advise on what makes sense for your budget and objective.",
          },
        ],
        related: [
          { title: "Rigging & Installation", href: "/services/installation" },
          { title: "Precision Printing", href: "/services/printing" },
          { title: "Spatial Fabrication", href: "/services/fabrication" },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://adsdotcom.net/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://adsdotcom.net/services" },
                { "@type": "ListItem", "position": 3, "name": "Outdoor Advertising", "item": "https://adsdotcom.net/services/outdoor-advertising" },
              ],
            },
            {
              "@type": "Service",
              "name": "Outdoor Advertising",
              "url": "https://adsdotcom.net/services/outdoor-advertising",
              "description": "Billboard hoarding, transit advertising, street furniture and logo sign plates across Pakistan. In-house production since 2006.",
              "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
              "areaServed": { "@type": "Country", "name": "Pakistan" },
              "serviceType": "Outdoor Advertising",
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How long does it take to produce and install a billboard in Lahore?", "acceptedAnswer": { "@type": "Answer", "text": "For a standard single-face billboard with approved artwork, production and installation typically takes 5–10 working days. Rush jobs with 48-hour print turnaround are available." } },
                { "@type": "Question", "name": "Do you handle permit applications for outdoor sites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We manage cantonment and municipal permit applications on your behalf for all outdoor installations in Lahore. Timelines vary by authority — typically 1–3 weeks." } },
                { "@type": "Question", "name": "What areas do you cover for outdoor advertising?", "acceptedAnswer": { "@type": "Answer", "text": "We operate primarily across Lahore, with installations also completed in Karachi, Islamabad, Rawalpindi and other major cities." } },
                { "@type": "Question", "name": "What is the minimum campaign size for outdoor advertising?", "acceptedAnswer": { "@type": "Answer", "text": "We work with single-site campaigns as well as multi-city circuits. There is no fixed minimum — send us your brief and we'll advise on what makes sense for your budget." } },
              ],
            },
          ],
        },
      }}
    />
  );
}
