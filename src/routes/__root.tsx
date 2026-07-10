import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexAuthProvider } from "@convex-dev/auth/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function NotFoundComponent() {
  return (
    <>
      {/* Tell crawlers not to index 404 pages */}
      <meta name="robots" content="noindex, nofollow" />
      <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
        <div className="max-w-md text-center">
          <h1 className="font-serif text-7xl italic text-ink">404</h1>
          <h2 className="mt-4 text-xl font-medium text-ink">Page not found</h2>
          <p className="mt-2 text-sm text-ink-soft">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-transform hover:scale-105"
            >
              Back to studio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium tracking-tight text-ink">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-transform hover:scale-105"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ADS DOT COM — Integrated Creative Agency | Lahore, Pakistan" },
      {
        name: "description",
        content:
          "ADS DOT COM is Lahore's leading integrated creative agency — outdoor advertising, precision printing, fabrication, installation, event production and brand design since 2006.",
      },
      { name: "author", content: "ADS DOT COM" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#f5f0eb" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ADS DOT COM" },
      { property: "og:title", content: "ADS DOT COM — Integrated Creative Agency | Lahore" },
      {
        property: "og:description",
        content:
          "Outdoor advertising, printing, fabrication, installation, event production and creative direction. Pakistan's most integrated physical branding studio since 2006.",
      },
      { property: "og:url", content: "https://adsdotcom.net/" },
      { property: "og:image", content: "https://adsdotcom.net/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ADS DOT COM — Integrated Creative Agency Lahore" },
      { property: "og:locale", content: "en_PK" },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ADS DOT COM — Integrated Creative Agency" },
      {
        name: "twitter:description",
        content: "Outdoor advertising, printing, fabrication, installation, events and creative direction — Lahore, Pakistan since 2006.",
      },
      { name: "twitter:image", content: "https://adsdotcom.net/og-image.png" },
      { name: "twitter:image:alt", content: "ADS DOT COM Logo" },

      // Geo
      { name: "geo.region", content: "PK-PB" },
      { name: "geo.placename", content: "Lahore, Pakistan" },
      { name: "geo.position", content: "31.5204;74.3587" },
      { name: "ICBM", content: "31.5204, 74.3587" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.png", type: "image/png", sizes: "any" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "canonical", href: "https://adsdotcom.net/" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://www.googletagmanager.com" },
      { rel: "preconnect", href: "https://rosy-crow-160.convex.cloud" },
      { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
      { rel: "dns-prefetch", href: "https://images.unsplash.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaOrg = {
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
          "width": 512,
          "height": 512
        },
        "image": "https://adsdotcom.net/og-image.png",
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
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" }
        ],
        "sameAs": [
          "https://www.instagram.com/adsdot_com",
          "https://www.facebook.com/share/18V8bkSGXG/"
        ]
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
          { "@type": "Service", "position": 1, "name": "Outdoor Advertising", "description": "Billboard hoarding, transit advertising, street furniture and logo sign plates across Pakistan.", "provider": { "@id": "https://adsdotcom.net/#organization" } },
          { "@type": "Service", "position": 2, "name": "Precision Printing", "description": "Wide-format architectural graphics, letterpress, foil and reactive intelligent inks.", "provider": { "@id": "https://adsdotcom.net/#organization" } },
          { "@type": "Service", "position": 3, "name": "Spatial Fabrication", "description": "Modular structures, kinetic signage, CNC machining and scenic venue conversion.", "provider": { "@id": "https://adsdotcom.net/#organization" } },
          { "@type": "Service", "position": 4, "name": "Rigging & Installation", "description": "High-altitude rigging, facade wrapping, retail window installs and ongoing maintenance.", "provider": { "@id": "https://adsdotcom.net/#organization" } },
          { "@type": "Service", "position": 5, "name": "Event Production", "description": "Custom stage builds, LED walls, lighting design and real-time media programming.", "provider": { "@id": "https://adsdotcom.net/#organization" } },
          { "@type": "Service", "position": 6, "name": "Creative & Design", "description": "Brand identity systems, environmental design, packaging and material sampling.", "provider": { "@id": "https://adsdotcom.net/#organization" } }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Where is ADS DOT COM located?", "acceptedAnswer": { "@type": "Answer", "text": "E-193/ii, Bank Stop, Main Walton Road Cantt., Lahore, Pakistan." } },
          { "@type": "Question", "name": "How long has ADS DOT COM been operating?", "acceptedAnswer": { "@type": "Answer", "text": "ADS DOT COM was incorporated on May 16, 2006. We have over 20 years of experience in the advertising and creative production industry." } },
          { "@type": "Question", "name": "Does ADS DOT COM handle outdoor advertising permits?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We manage municipal and cantonment permit applications on your behalf for all outdoor installations." } },
          { "@type": "Question", "name": "What is the fastest turnaround for print jobs?", "acceptedAnswer": { "@type": "Answer", "text": "For wide-format print jobs with approved artwork, we can deliver within 48 hours." } },
          { "@type": "Question", "name": "How can I contact ADS DOT COM?", "acceptedAnswer": { "@type": "Answer", "text": "Email info@adsdotcom.net or sales@adsdotcom.net, or call +92 334 9955475." } }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TM5BKV64');` }} />
        {/* End Google Tag Manager */}
        <HeadContent />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TM5BKV64"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        router.navigate({ to: '/0i9876r7s7ygs89grt7r9s8rbg9rdb' as any });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <ConvexAuthProvider client={convex}>
        <Outlet />
      </ConvexAuthProvider>
    </QueryClientProvider>
  );
}
