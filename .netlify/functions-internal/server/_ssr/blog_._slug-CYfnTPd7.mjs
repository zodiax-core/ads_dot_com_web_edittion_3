import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog_._slug-CYfnTPd7.js
var $$splitComponentImporter = () => import("./blog_._slug-D-hkntry.mjs");
var Route = createFileRoute("/blog_/$slug")({
	head: ({ params }) => ({
		meta: [
			{ title: `${params.slug.replace(/-/g, " ")} | ADS DOT COM Blog` },
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: `https://adsdotcom.net/blog/${params.slug}`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: `https://adsdotcom.net/blog/${params.slug}`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
