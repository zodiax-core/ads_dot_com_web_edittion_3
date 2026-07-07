import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import installation from "@/assets/installation.jpg";

export const Route = createFileRoute("/services/installation")({
  head: () => ({
    meta: [
      { title: "Signage Installation in Lahore, Pakistan | ADS DOT COM" },
      { name: "description", content: "Certified rigging, facade wrapping & signage installation in Lahore. High-altitude, city-wide deployment. Get a quote from ADS DOT COM — 24/7 site support." },
      { property: "og:title", content: "Signage Installation in Lahore | ADS DOT COM" },
      { property: "og:description", content: "Certified rigging, facade wrapping, retail window installs and ongoing maintenance. City-wide deployment in Lahore. Get a quote from ADS DOT COM." },
      { property: "og:url", content: "https://adsdotcom.net/services/installation" },
    ],
    links: [{ rel: "canonical", href: "https://adsdotcom.net/services/installation" }],
  }),
  component: InstallationPage,
});

function InstallationPage() {
  return (
    <ServicePage
      data={{
        id: "04",
        slug: "installation",
        color: "accent-purple",
        h1: "Signage Installation in Lahore",
        tagline: "On-site craft. Structural confidence.",
        desc: "From a single storefront sign to a citywide activation, our certified rigging team manages transport, structural anchoring, safety compliance and ongoing maintenance — all under one roof.",
        image: installation,
        imageAlt: "ADS DOT COM installation crew mounting wayfinding signage system on building facade in Lahore",
        capabilities: [
          {
            name: "High-Altitude Rigging",
            note: "Certified crew & equipment",
            desc: "Our certified rigging crew handles elevated installations including rooftop billboard structures, high-rise facade graphics and suspended ceiling-mounted displays. All work is conducted under site-specific safety plans with appropriate equipment.",
          },
          {
            name: "Facade & Glass Wrapping",
            note: "Full building surface application",
            desc: "Full-building vinyl wraps, perforated window film and architectural graphics applied to glass, cladding and structural surfaces. We manage surface preparation, precision alignment and post-installation inspection.",
          },
          {
            name: "Retail Window Installs",
            note: "Fast-turnaround POS displays",
            desc: "In-store POS graphics, window vinyl application, lightbox panel changes and seasonal display installations. We work within retail dark periods and can turn around most retail installs overnight.",
          },
          {
            name: "Ongoing Maintenance",
            note: "Scheduled site visits & repairs",
            desc: "Scheduled inspection visits, reactive repair call-outs and periodic refresh replacements for all installed structures. We maintain records of every site we install and can respond to urgent repair requests within one working day.",
          },
        ],
        stats: [
          { v: "City-wide", l: "Deployment Reach" },
          { v: "Certified", l: "Safety Standards" },
          { v: "24/7", l: "Site Support" },
        ],
        faqs: [
          {
            q: "Can you install signage outside Lahore?",
            a: "Yes. Our installation crew operates across Pakistan. We have completed installations in Karachi, Islamabad, Rawalpindi and other cities. Travel and accommodation costs are included in the project quote.",
          },
          {
            q: "Do you provide a safety method statement for high-altitude installations?",
            a: "Yes. A site-specific method statement and risk assessment is prepared for every high-altitude installation job. These documents are available for review by client health & safety teams before work begins.",
          },
          {
            q: "How quickly can you respond to an urgent installation or repair call?",
            a: "For clients with existing maintenance agreements, we target a response within one working day. For new enquiries, contact us directly and we will advise on the earliest available slot.",
          },
          {
            q: "Do you handle the removal and disposal of old signage?",
            a: "Yes. We offer strip-out and responsible disposal of existing signage as part of our installation service. We can advise on material recycling options where applicable.",
          },
        ],
        related: [
          { title: "Outdoor Advertising", href: "/services/outdoor-advertising" },
          { title: "Spatial Fabrication", href: "/services/fabrication" },
          { title: "Precision Printing", href: "/services/printing" },
        ],
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://adsdotcom.net/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://adsdotcom.net/services" },
                { "@type": "ListItem", "position": 3, "name": "Installation", "item": "https://adsdotcom.net/services/installation" },
              ],
            },
            {
              "@type": "Service",
              "name": "Signage Installation & Rigging",
              "url": "https://adsdotcom.net/services/installation",
              "description": "Certified rigging, facade wrapping, retail window installs and ongoing maintenance. City-wide deployment across Pakistan.",
              "provider": { "@type": "Organization", "name": "ADS DOT COM", "url": "https://adsdotcom.net" },
              "areaServed": { "@type": "Country", "name": "Pakistan" },
              "serviceType": "Signage Installation",
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Can you install signage outside Lahore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our installation crew operates across Pakistan, including Karachi, Islamabad and Rawalpindi." } },
                { "@type": "Question", "name": "Do you provide a safety method statement for high-altitude installations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A site-specific method statement and risk assessment is prepared for every high-altitude installation job." } },
                { "@type": "Question", "name": "How quickly can you respond to an urgent installation or repair call?", "acceptedAnswer": { "@type": "Answer", "text": "For clients with existing maintenance agreements, we target a response within one working day." } },
              ],
            },
          ],
        },
      }}
    />
  );
}
