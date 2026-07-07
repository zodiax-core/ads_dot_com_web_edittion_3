import { r as __toESM } from "../_runtime.mjs";
import { a as useMutation, c as require_react, n as useAuthActions, o as useQuery, r as useConvexAuth, s as require_jsx_runtime } from "../_libs/@convex-dev/auth+[...].mjs";
import { t as api } from "./api-DSJLF2wo.mjs";
import { M as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/0i9876r7s7ygs89grt7r9s8rbg9rdb-ohyawiQi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ErrorDialog({ message, onClose }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copy = () => {
		navigator.clipboard.writeText(message).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col gap-4",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-8 rounded-full bg-red-100 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "size-4 text-red-600",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: 2,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "12",
									cy: "12",
									r: "10"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M12 8v4M12 16h.01",
									strokeLinecap: "round"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-ink text-base",
							children: "Error"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "text-ink/40 hover:text-ink transition-colors mt-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "size-5",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M18 6L6 18M6 6l12 12",
								strokeLinecap: "round"
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "bg-ink/5 rounded-xl p-4 text-xs text-ink font-mono whitespace-pre-wrap break-all leading-relaxed max-h-48 overflow-y-auto",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: copy,
						className: "px-4 py-2 bg-ink/10 rounded-lg text-sm font-medium hover:bg-ink/20 transition-colors flex items-center gap-1.5",
						children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "size-3.5 text-green-600",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M20 6L9 17l-5-5",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						}), " Copied!"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "size-3.5",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 2,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "9",
								y: "9",
								width: "13",
								height: "13",
								rx: "2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })]
						}), " Copy"] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "px-4 py-2 bg-ink text-canvas rounded-lg text-sm font-medium hover:bg-ink/90 transition-colors",
						children: "Dismiss"
					})]
				})
			]
		})
	});
}
async function uploadFile(file, getUploadUrl) {
	const uploadUrl = await getUploadUrl();
	const res = await fetch(uploadUrl, {
		method: "POST",
		headers: { "Content-Type": file.type },
		body: file
	});
	if (!res.ok) {
		const text = await res.text().catch(() => res.statusText);
		throw new Error(`HTTP ${res.status}: ${text}`);
	}
	return (await res.json()).storageId;
}
function ImagePicker({ value, onChange, label = "Image", onError }) {
	const generateUploadUrl = useMutation(api.works.generateUploadUrl);
	const fileRef = (0, import_react.useRef)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const handleFile = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setUploading(true);
		try {
			onChange(await uploadFile(file, generateUploadUrl));
		} catch (err) {
			onError(err.message);
		} finally {
			setUploading(false);
			if (fileRef.current) fileRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm text-ink-soft",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 items-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: "Paste image URL or upload",
						value,
						onChange: (e) => onChange(e.target.value),
						className: "flex-1 px-4 py-2 border rounded bg-canvas text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => fileRef.current?.click(),
						className: "px-3 py-2 bg-ink/10 rounded hover:bg-ink/20 text-xs font-medium whitespace-nowrap shrink-0",
						disabled: uploading,
						children: uploading ? "Uploading…" : "Upload"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "image/*",
						className: "hidden",
						onChange: handleFile
					})
				]
			}),
			value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: value,
				alt: "Preview",
				className: "h-20 w-auto rounded object-cover border border-ink/10"
			})
		]
	});
}
function AdminPanel() {
	const { signOut } = useAuthActions();
	const router = useRouter();
	const [activeTab, setActiveTab] = (0, import_react.useState)("works");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const handleSignOut = async () => {
		await signOut();
		router.navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen bg-canvas text-ink overflow-hidden",
		children: [
			errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorDialog, {
				message: errorMsg,
				onClose: () => setErrorMsg(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "w-64 border-r border-ink/10 bg-surface flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 border-b border-ink/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-serif italic",
							children: "Admin"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 p-4 flex flex-col gap-2",
						children: [
							"works",
							"gallery",
							"messages"
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab(tab),
							className: `text-left px-4 py-2 rounded capitalize transition-colors ${activeTab === tab ? "bg-ink text-canvas" : "hover:bg-ink/5"}`,
							children: tab
						}, tab))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-t border-ink/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => void handleSignOut(),
							className: "w-full px-4 py-2 bg-ink/10 text-ink rounded hover:bg-ink/20 transition-colors",
							children: "Sign Out"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 overflow-y-auto p-8",
				children: [
					activeTab === "works" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorksTab, { onError: setErrorMsg }),
					activeTab === "gallery" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTab, { onError: setErrorMsg }),
					activeTab === "messages" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesTab, {})
				]
			})
		]
	});
}
function WorksTab({ onError }) {
	const works = useQuery(api.works.getWorks);
	const addWork = useMutation(api.works.addWork);
	const updateWork = useMutation(api.works.updateWork);
	const deleteWork = useMutation(api.works.deleteWork);
	const seedDummyData = useMutation(api.works.seedDummyData);
	const fixBrokenImages = useMutation(api.works.fixBrokenImages);
	const clearAllWorks = useMutation(api.works.clearAllWorks);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		title: "",
		serviceCategory: "",
		tags: "",
		smallDescription: "",
		client: "",
		year: "",
		projectDetail: "",
		mainImage: ""
	});
	const set = (key, val) => setFormData((f) => ({
		...f,
		[key]: val
	}));
	const handleEdit = (work) => {
		setEditingId(work._id);
		setFormData({
			title: work.title,
			serviceCategory: work.serviceCategory,
			tags: work.tags.join(", "),
			smallDescription: work.smallDescription,
			client: work.client,
			year: work.year,
			projectDetail: work.projectDetail,
			mainImage: work.mainImage
		});
	};
	const handleCancel = () => {
		setEditingId(null);
		setFormData({
			title: "",
			serviceCategory: "",
			tags: "",
			smallDescription: "",
			client: "",
			year: "",
			projectDetail: "",
			mainImage: ""
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			...formData,
			tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean)
		};
		if (editingId) await updateWork({
			id: editingId,
			...payload
		});
		else await addWork(payload);
		handleCancel();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-serif",
				children: "Manage Works"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => fixBrokenImages().then((r) => r?.message && onError ? alert(r.message) : alert(r?.message)),
						className: "px-3 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 text-xs font-semibold",
						children: "🔧 Fix Image URLs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							if (confirm("Delete ALL works? This cannot be undone.")) clearAllWorks().then((r) => r?.message && alert(r.message));
						},
						className: "px-3 py-2 bg-red-500/10 text-red-600 rounded hover:bg-red-500/20 text-xs font-semibold",
						children: "🗑 Clear All"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => seedDummyData().then((r) => r?.message && alert(r.message)),
						className: "px-3 py-2 bg-ink text-canvas rounded hover:bg-ink/90 text-xs font-semibold",
						children: "Seed Dummy Data"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-surface p-6 rounded-lg border border-ink/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-medium mb-4",
					children: editingId ? "Edit Work" : "Add New Work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Title",
							value: formData.title,
							onChange: (e) => set("title", e.target.value),
							className: "px-4 py-2 border rounded bg-canvas text-sm",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Service Category",
							value: formData.serviceCategory,
							onChange: (e) => set("serviceCategory", e.target.value),
							className: "px-4 py-2 border rounded bg-canvas text-sm",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Tags (comma separated)",
							value: formData.tags,
							onChange: (e) => set("tags", e.target.value),
							className: "px-4 py-2 border rounded bg-canvas text-sm",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							placeholder: "Small Description",
							value: formData.smallDescription,
							onChange: (e) => set("smallDescription", e.target.value),
							className: "px-4 py-2 border rounded bg-canvas text-sm",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Client",
							value: formData.client,
							onChange: (e) => set("client", e.target.value),
							className: "px-4 py-2 border rounded bg-canvas text-sm",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Year",
							value: formData.year,
							onChange: (e) => set("year", e.target.value),
							className: "px-4 py-2 border rounded bg-canvas text-sm",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							placeholder: "Project Detail",
							value: formData.projectDetail,
							onChange: (e) => set("projectDetail", e.target.value),
							className: "px-4 py-2 border rounded bg-canvas text-sm h-24",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
							label: "Main Image",
							value: formData.mainImage,
							onChange: (v) => set("mainImage", v),
							onError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-4 py-2 bg-ink text-canvas rounded hover:bg-ink/90 flex-1 text-sm",
								children: editingId ? "Update" : "Add"
							}), editingId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleCancel,
								className: "px-4 py-2 border border-ink text-ink rounded hover:bg-ink/10 flex-1 text-sm",
								children: "Cancel"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-surface p-6 rounded-lg border border-ink/10 flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-medium",
					children: "Existing Works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2",
					children: !works ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-soft",
						children: "Loading…"
					}) : works.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-soft",
						children: "No works. Use Seed button!"
					}) : works.map((work) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-ink/10 p-4 rounded flex gap-3 items-start",
						children: [
							work.mainImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: work.mainImage,
								alt: work.title,
								className: "size-12 rounded object-cover shrink-0 border border-ink/10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-medium text-sm truncate",
									children: work.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-ink-soft",
									children: [
										work.client,
										" · ",
										work.year
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleEdit(work),
									className: "px-2 py-1 bg-ink/10 rounded hover:bg-ink/20 text-xs font-medium",
									children: "Edit"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => deleteWork({ id: work._id }),
									className: "px-2 py-1 bg-red-500/10 text-red-600 rounded hover:bg-red-500/20 text-xs font-medium",
									children: "Del"
								})]
							})
						]
					}, work._id))
				})]
			})]
		})]
	});
}
function GalleryTab({ onError }) {
	const images = useQuery(api.gallery.getGallery);
	const addImage = useMutation(api.gallery.addImage);
	const addImageByStorageId = useMutation(api.gallery.addImageByStorageId);
	const deleteImage = useMutation(api.gallery.deleteImage);
	const generateUploadUrl = useMutation(api.gallery.generateUploadUrl);
	const [imageUrl, setImageUrl] = (0, import_react.useState)("");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const handleFileUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setUploading(true);
		try {
			await addImageByStorageId({
				storageId: await uploadFile(file, generateUploadUrl),
				caption: caption || void 0
			});
			setCaption("");
		} catch (err) {
			onError(err.message);
		} finally {
			setUploading(false);
			if (fileRef.current) fileRef.current.value = "";
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!imageUrl) return;
		await addImage({
			imageUrl,
			caption: caption || void 0
		});
		setImageUrl("");
		setCaption("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-serif",
				children: "Global Gallery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "bg-surface p-6 rounded-lg border border-ink/10 flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 items-end flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-[200px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm mb-1 text-ink-soft",
								children: "Image URL or upload"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: imageUrl,
								onChange: (e) => setImageUrl(e.target.value),
								className: "w-full px-4 py-2 border rounded bg-canvas text-sm",
								placeholder: "https://… or use upload button"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-[160px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm mb-1 text-ink-soft",
								children: "Caption (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: caption,
								onChange: (e) => setCaption(e.target.value),
								className: "w-full px-4 py-2 border rounded bg-canvas text-sm"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => fileRef.current?.click(),
								disabled: uploading,
								className: "px-4 py-2 border border-ink/20 rounded text-sm hover:bg-ink/5 transition-colors",
								children: uploading ? "Uploading…" : "📁 Upload from device"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: "image/*",
								className: "hidden",
								onChange: handleFileUpload
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-6 py-2 bg-ink text-canvas rounded hover:bg-ink/90 text-sm",
								disabled: !imageUrl,
								children: "Add to Gallery"
							})
						]
					}),
					imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: imageUrl,
						alt: "Preview",
						className: "h-24 w-auto rounded object-cover border border-ink/10"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: !images ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink-soft",
					children: "Loading…"
				}) : images.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group rounded overflow-hidden aspect-square bg-surface border border-ink/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img.imageUrl,
						alt: img.caption || "Gallery image",
						className: "w-full h-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-canvas text-xs truncate",
							children: img.caption
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => deleteImage({ id: img._id }),
							className: "self-end px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600",
							children: "Delete"
						})]
					})]
				}, img._id))
			})
		]
	});
}
function MessagesTab() {
	const messages = useQuery(api.messages.getMessages);
	const markAsRead = useMutation(api.messages.markAsRead);
	const deleteMessage = useMutation(api.messages.deleteMessage);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-serif",
			children: "Messages"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-4",
			children: !messages ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft",
				children: "Loading…"
			}) : messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft",
				children: "No messages yet."
			}) : messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `p-6 rounded-lg border transition-colors ${msg.read ? "bg-surface border-ink/10" : "bg-canvas border-ink shadow-sm"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-start mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium",
							children: msg.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-soft",
							children: msg.email
						}),
						msg.projectType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mt-1 px-2 py-0.5 bg-ink/10 rounded-full text-xs",
							children: msg.projectType
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [!msg.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => markAsRead({ id: msg._id }),
							className: "px-3 py-1 bg-ink text-canvas rounded text-sm hover:bg-ink/90",
							children: "Mark Read"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => deleteMessage({ id: msg._id }),
							className: "px-3 py-1 bg-red-500/10 text-red-600 rounded text-sm hover:bg-red-500/20",
							children: "Delete"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink text-sm whitespace-pre-wrap",
					children: msg.message
				})]
			}, msg._id))
		})]
	});
}
function HiddenAdminRoute() {
	const [securityKey, setSecurityKey] = (0, import_react.useState)("");
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const { isAuthenticated, isLoading } = useConvexAuth();
	const handleUnlock = (e) => {
		e.preventDefault();
		if (securityKey === "31209") setIsUnlocked(true);
		else alert("Invalid security key");
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-screen items-center justify-center",
		children: "Loading..."
	});
	if (!isUnlocked && !isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-screen items-center justify-center bg-canvas",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleUnlock,
			className: "flex flex-col gap-4 p-8 bg-surface rounded-lg shadow-md border border-ink/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-medium text-ink",
					children: "Admin Access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "password",
					value: securityKey,
					onChange: (e) => setSecurityKey(e.target.value),
					className: "px-4 py-2 bg-canvas border border-ink/20 rounded focus:outline-none focus:border-ink text-ink",
					placeholder: "Security Key"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "px-4 py-2 bg-ink text-canvas rounded hover:bg-ink/90 transition-colors",
					children: "Unlock"
				})
			]
		})
	});
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthForm, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPanel, {});
}
function AuthForm() {
	const { signIn } = useAuthActions();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const hasAdmin = useQuery(api.users.hasAdmin);
	const handleSubmit = (e) => {
		e.preventDefault();
		signIn("password", {
			email,
			password,
			flow: hasAdmin ? "signIn" : "signUp"
		}).catch((error) => {
			console.error(error);
			alert("Authentication failed: " + error.message);
		});
	};
	if (hasAdmin === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-screen items-center justify-center",
		children: "Checking status..."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-screen items-center justify-center bg-canvas",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "flex flex-col gap-4 p-8 bg-surface rounded-lg shadow-md border border-ink/10 w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-medium text-ink",
					children: !hasAdmin ? "Create Admin Account" : "Admin Login"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					className: "px-4 py-2 bg-canvas border border-ink/20 rounded focus:outline-none focus:border-ink text-ink",
					placeholder: "Email",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "password",
					value: password,
					onChange: (e) => setPassword(e.target.value),
					className: "px-4 py-2 bg-canvas border border-ink/20 rounded focus:outline-none focus:border-ink text-ink",
					placeholder: "Password",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "px-4 py-2 bg-ink text-canvas rounded hover:bg-ink/90 transition-colors",
					children: !hasAdmin ? "Sign Up" : "Sign In"
				})
			]
		})
	});
}
//#endregion
export { HiddenAdminRoute as component };
