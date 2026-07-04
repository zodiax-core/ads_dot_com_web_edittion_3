import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, i as ConvexReactClient, s as require_jsx_runtime, t as ConvexAuthProvider } from "../_libs/@convex-dev/auth+[...].mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$6 } from "./routes-DMbmB-9-.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DYSHx7fh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DwD9W1Gq.css";
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
	});
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
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ADS DOT COM — Physical production for the tangible world" },
			{
				name: "description",
				content: "ADS DOT COM is a physical production and design studio. Printing, fabrication, installation, event management and creative direction — crafted for brands who value tangible experiences."
			},
			{
				name: "author",
				content: "ADS DOT COM"
			},
			{
				property: "og:title",
				content: "ADS DOT COM — Physical production studio"
			},
			{
				property: "og:description",
				content: "Printing, fabrication, installation, events and creative direction. High-fidelity physical branding for the digital generation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/logo.png",
			type: "image/png",
			sizes: "any"
		}]
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			suppressHydrationWarning: true,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
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
var $$splitComponentImporter$4 = () => import("./work-DDwWaWgt.mjs");
var Route$4 = createFileRoute("/work")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./studio-oamKibX7.mjs");
var Route$3 = createFileRoute("/studio")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./services-BVFZqX17.mjs");
var Route$2 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./process-DE2gl3xZ.mjs");
var Route$1 = createFileRoute("/process")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./0i9876r7s7ygs89grt7r9s8rbg9rdb-yUb9ML7c.mjs");
var Route = createFileRoute("/0i9876r7s7ygs89grt7r9s8rbg9rdb")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var WorkRoute = Route$4.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$5
});
var StudioRoute = Route$3.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$5
});
var ServicesRoute = Route$2.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$5
});
var ProcessRoute = Route$1.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$5
});
var R0i9876r7s7ygs89grt7r9s8rbg9rdbRoute = Route.update({
	id: "/0i9876r7s7ygs89grt7r9s8rbg9rdb",
	path: "/0i9876r7s7ygs89grt7r9s8rbg9rdb",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	R0i9876r7s7ygs89grt7r9s8rbg9rdbRoute,
	ProcessRoute,
	ServicesRoute,
	StudioRoute,
	WorkRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
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
