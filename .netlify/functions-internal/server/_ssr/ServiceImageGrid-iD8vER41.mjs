import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceImageGrid-iD8vER41.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServiceImageGrid({ images, title, idx }) {
	const [lightboxOpen, setLightboxOpen] = (0, import_react.useState)(false);
	const [currentImageIdx, setCurrentImageIdx] = (0, import_react.useState)(0);
	const openLightbox = (index) => {
		setCurrentImageIdx(index);
		setLightboxOpen(true);
	};
	const closeLightbox = () => {
		setLightboxOpen(false);
	};
	const nextImage = (e) => {
		e.stopPropagation();
		setCurrentImageIdx((prev) => (prev + 1) % images.length);
	};
	const prevImage = (e) => {
		e.stopPropagation();
		setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full md:w-1/2 grid grid-cols-2 gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lift border border-ink/5 group cursor-pointer",
			onClick: () => openLightbox(0),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images[0],
					alt: title,
					className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-4 left-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-ink",
						children: ["0", idx + 1]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-0 group-hover:opacity-100 bg-white/90 text-ink px-4 py-2 rounded-full text-sm font-semibold transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0",
						children: "View Gallery"
					})
				})
			]
		}), images.slice(1).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] rounded-xl overflow-hidden border border-ink/5 group cursor-pointer",
			onClick: () => openLightbox(i + 1),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img,
				alt: `${title} detail`,
				className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" })]
		}, i))]
	}), lightboxOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
					src: images[currentImageIdx],
					alt: title,
					className: "max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-[-2rem] left-0 right-0 text-center text-white/70 text-sm font-medium",
					children: [
						currentImageIdx + 1,
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
	})] });
}
//#endregion
export { ServiceImageGrid as t };
