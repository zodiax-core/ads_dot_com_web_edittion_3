import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceThumbnailGallery-CAHW1BHi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServiceThumbnailGallery({ images, alts }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const [lightboxOpen, setLightboxOpen] = (0, import_react.useState)(false);
	const openLightbox = () => setLightboxOpen(true);
	const closeLightbox = () => setLightboxOpen(false);
	const nextImage = (e) => {
		e.stopPropagation();
		setActive((prev) => (prev + 1) % images.length);
	};
	const prevImage = (e) => {
		e.stopPropagation();
		setActive((prev) => (prev - 1 + images.length) % images.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "aspect-[4/3] rounded-2xl overflow-hidden bg-surface relative group cursor-pointer",
				onClick: openLightbox,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images[active],
					alt: alts ? alts[active] : "Gallery Image",
					className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
					loading: "eager"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-0 group-hover:opacity-100 bg-white/90 text-ink px-4 py-2 rounded-full text-sm font-semibold transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0",
						children: "View Fullscreen"
					})
				})]
			}),
			images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 flex-wrap",
				children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActive(i),
					className: `size-16 rounded-xl overflow-hidden border-2 transition-all ${i === active ? "border-accent-blue" : "border-transparent opacity-60 hover:opacity-100"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: alts ? alts[i] : `Thumbnail ${i + 1}`,
						className: "w-full h-full object-cover",
						loading: "lazy"
					})
				}, i))
			}),
			lightboxOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm",
				onClick: closeLightbox,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-4 right-4 z-[101]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: closeLightbox,
							className: "p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 6 12 12" })]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: prevImage,
						className: "absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15 18-6-6 6-6" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-7xl max-h-[90vh] w-full px-16 relative flex items-center justify-center",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images[active],
							alt: alts ? alts[active] : "Gallery Image",
							className: "max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-[-2rem] left-0 right-0 text-center text-white/70 text-sm font-medium",
							children: [
								active + 1,
								" / ",
								images.length
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: nextImage,
						className: "absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 18 6-6-6-6" })
						})
					})
				]
			})
		]
	});
}
//#endregion
export { ServiceThumbnailGallery as t };
