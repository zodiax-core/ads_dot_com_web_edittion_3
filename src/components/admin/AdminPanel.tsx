import { useState, useRef } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "@tanstack/react-router";
/* ─── Error dialog ───────────────────────────────────────────────────────── */
function ErrorDialog({ message, onClose }: { message: string; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(message).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col gap-4" onClick={e => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <svg className="size-4 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-ink text-base">Error</h3>
          </div>
          <button onClick={onClose} className="text-ink/40 hover:text-ink transition-colors mt-0.5">
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <pre className="bg-ink/5 rounded-xl p-4 text-xs text-ink font-mono whitespace-pre-wrap break-all leading-relaxed max-h-48 overflow-y-auto">{message}</pre>
        <div className="flex gap-2 justify-end">
          <button onClick={copy} className="px-4 py-2 bg-ink/10 rounded-lg text-sm font-medium hover:bg-ink/20 transition-colors flex items-center gap-1.5">
            {copied ? (
              <><svg className="size-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg> Copied!</>
            ) : (
              <><svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy</>
            )}
          </button>
          <button onClick={onClose} className="px-4 py-2 bg-ink text-canvas rounded-lg text-sm font-medium hover:bg-ink/90 transition-colors">Dismiss</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Global error state ─────────────────────────────────────────────────── */
let _showError: ((msg: string) => void) | null = null;
export function useErrorDialog() {
  return (msg: string) => _showError?.(msg);
}

/* ─── File upload helper ─────────────────────────────────────────────────── */
async function uploadFile(file: File, getUploadUrl: () => Promise<string>): Promise<string> {
  const uploadUrl = await getUploadUrl();
  const res = await fetch(uploadUrl, { method: "POST", headers: { "Content-Type": file.type }, body: file });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  const data = await res.json();
  // Return just the storageId — Convex resolves it server-side via ctx.storage.getUrl()
  return data.storageId as string;
}

/* ─── Image picker with upload ──────────────────────────────────────────── */
function ImagePicker({ value, onChange, label = "Image", onError }: { value: string; onChange: (url: string) => void; label?: string; onError: (msg: string) => void }) {
  // Use works.generateUploadUrl since files.ts may not be deployed
  const generateUploadUrl = useMutation(api.works.generateUploadUrl);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file, generateUploadUrl);
      onChange(url);
    } catch (err) {
      onError((err as Error).message);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-ink-soft">{label}</label>
      <div className="flex gap-2 items-start">
        <input placeholder="Paste image URL or upload" value={value} onChange={e => onChange(e.target.value)} className="flex-1 px-4 py-2 border rounded bg-canvas text-sm" />
        <button type="button" onClick={() => fileRef.current?.click()} className="px-3 py-2 bg-ink/10 rounded hover:bg-ink/20 text-xs font-medium whitespace-nowrap shrink-0" disabled={uploading}>
          {uploading ? "Uploading…" : "Upload"}
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </div>
      {value && <img src={value} alt="Preview" className="h-20 w-auto rounded object-cover border border-ink/10" />}
    </div>
  );
}
export default function AdminPanel() {
  const { signOut } = useAuthActions();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'works' | 'gallery' | 'messages' | 'blog'>('works');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  _showError = setErrorMsg;

  const handleSignOut = async () => {
    await signOut();
    router.navigate({ to: '/' });
  };

  return (
    <div className="flex h-screen bg-canvas text-ink overflow-hidden">
      {errorMsg && <ErrorDialog message={errorMsg} onClose={() => setErrorMsg(null)} />}
      <aside className="w-64 border-r border-ink/10 bg-surface flex flex-col">
        <div className="p-6 border-b border-ink/10">
          <h1 className="text-2xl font-serif italic">Admin</h1>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          {(['works', 'blog', 'gallery', 'messages'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`text-left px-4 py-2 rounded capitalize transition-colors ${activeTab === tab ? 'bg-ink text-canvas' : 'hover:bg-ink/5'}`}>
              {tab}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-ink/10">
          <button onClick={() => void handleSignOut()} className="w-full px-4 py-2 bg-ink/10 text-ink rounded hover:bg-ink/20 transition-colors">
            Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        {activeTab === 'works' && <WorksTab onError={setErrorMsg} />}
        {activeTab === 'blog' && <BlogTab onError={setErrorMsg} />}
        {activeTab === 'gallery' && <GalleryTab onError={setErrorMsg} />}
        {activeTab === 'messages' && <MessagesTab />}
      </main>
    </div>
  );
}

function WorksTab({ onError }: { onError: (msg: string) => void }) {
  const works = useQuery(api.works.getWorks);
  const addWork = useMutation(api.works.addWork);
  const updateWork = useMutation(api.works.updateWork);
  const deleteWork = useMutation(api.works.deleteWork);
  const seedDummyData = useMutation(api.works.seedDummyData);
  const fixBrokenImages = useMutation(api.works.fixBrokenImages);
  const clearAllWorks = useMutation(api.works.clearAllWorks);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '', serviceCategory: '', tags: '', smallDescription: '', client: '', year: '', projectDetail: '', mainImage: ''
  });

  const set = (key: string, val: string) => setFormData(f => ({ ...f, [key]: val }));

  const handleEdit = (work: any) => {
    setEditingId(work._id);
    setFormData({ title: work.title, serviceCategory: work.serviceCategory, tags: work.tags.join(', '), smallDescription: work.smallDescription, client: work.client, year: work.year, projectDetail: work.projectDetail, mainImage: work.mainImage });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: '', serviceCategory: '', tags: '', smallDescription: '', client: '', year: '', projectDetail: '', mainImage: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...formData, tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean) };
    if (editingId) await updateWork({ id: editingId as any, ...payload });
    else await addWork(payload);
    handleCancel();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-2xl font-serif">Manage Works</h2>
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => fixBrokenImages().then(r => r?.message && alert(r.message))}
            className="px-3 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 text-xs font-semibold">
            🔧 Fix Image URLs
          </button>
          <button onClick={() => { if (confirm("Delete ALL works? This cannot be undone.")) clearAllWorks().then(r => r?.message && alert(r.message)); }}
            className="px-3 py-2 bg-red-500/10 text-red-600 rounded hover:bg-red-500/20 text-xs font-semibold">
            🗑 Clear All
          </button>
          <button onClick={() => seedDummyData().then(r => r?.message && alert(r.message))}
            className="px-3 py-2 bg-ink text-canvas rounded hover:bg-ink/90 text-xs font-semibold">
            Seed Dummy Data
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface p-6 rounded-lg border border-ink/10">
          <h3 className="text-xl font-medium mb-4">{editingId ? 'Edit Work' : 'Add New Work'}</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input placeholder="Title" value={formData.title} onChange={e => set('title', e.target.value)} className="px-4 py-2 border rounded bg-canvas text-sm" required />
            <input placeholder="Service Category" value={formData.serviceCategory} onChange={e => set('serviceCategory', e.target.value)} className="px-4 py-2 border rounded bg-canvas text-sm" required />
            <input placeholder="Tags (comma separated)" value={formData.tags} onChange={e => set('tags', e.target.value)} className="px-4 py-2 border rounded bg-canvas text-sm" required />
            <textarea placeholder="Small Description" value={formData.smallDescription} onChange={e => set('smallDescription', e.target.value)} className="px-4 py-2 border rounded bg-canvas text-sm" required />
            <input placeholder="Client" value={formData.client} onChange={e => set('client', e.target.value)} className="px-4 py-2 border rounded bg-canvas text-sm" required />
            <input placeholder="Year" value={formData.year} onChange={e => set('year', e.target.value)} className="px-4 py-2 border rounded bg-canvas text-sm" required />
            <textarea placeholder="Project Detail" value={formData.projectDetail} onChange={e => set('projectDetail', e.target.value)} className="px-4 py-2 border rounded bg-canvas text-sm h-24" required />
            <ImagePicker label="Main Image" value={formData.mainImage} onChange={v => set('mainImage', v)} onError={onError} />
            <div className="flex gap-2 mt-1">
              <button type="submit" className="px-4 py-2 bg-ink text-canvas rounded hover:bg-ink/90 flex-1 text-sm">{editingId ? 'Update' : 'Add'}</button>
              {editingId && <button type="button" onClick={handleCancel} className="px-4 py-2 border border-ink text-ink rounded hover:bg-ink/10 flex-1 text-sm">Cancel</button>}
            </div>
          </form>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-ink/10 flex flex-col gap-4">
          <h3 className="text-xl font-medium">Existing Works</h3>
          <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2">
            {!works ? <p className="text-sm text-ink-soft">Loading…</p> : works.length === 0 ? <p className="text-sm text-ink-soft">No works. Use Seed button!</p> : works.map(work => (
              <div key={work._id} className="border border-ink/10 p-4 rounded flex gap-3 items-start">
                {work.mainImage && <img src={work.mainImage} alt={work.title} className="size-12 rounded object-cover shrink-0 border border-ink/10" />}
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-sm truncate">{work.title}</h4>
                  <p className="text-xs text-ink-soft">{work.client} · {work.year}</p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button onClick={() => handleEdit(work)} className="px-2 py-1 bg-ink/10 rounded hover:bg-ink/20 text-xs font-medium">Edit</button>
                  <button onClick={() => deleteWork({ id: work._id })} className="px-2 py-1 bg-red-500/10 text-red-600 rounded hover:bg-red-500/20 text-xs font-medium">Del</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryTab({ onError }: { onError: (msg: string) => void }) {
  const images = useQuery(api.gallery.getGallery);
  const addImage = useMutation(api.gallery.addImage);
  const addImageByStorageId = useMutation(api.gallery.addImageByStorageId);
  const deleteImage = useMutation(api.gallery.deleteImage);
  const generateUploadUrl = useMutation(api.gallery.generateUploadUrl);
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const storageId = await uploadFile(file, generateUploadUrl);
      // Store storageId directly — getGallery resolves it via ctx.storage.getUrl()
      await addImageByStorageId({ storageId, caption: caption || undefined });
      setCaption('');
    } catch (err) {
      onError((err as Error).message);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) return;
    await addImage({ imageUrl, caption: caption || undefined });
    setImageUrl('');
    setCaption('');
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-serif">Global Gallery</h2>
      <form onSubmit={handleSubmit} className="bg-surface p-6 rounded-lg border border-ink/10 flex flex-col gap-4">
        <div className="flex gap-3 items-end flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm mb-1 text-ink-soft">Image URL or upload</label>
            <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full px-4 py-2 border rounded bg-canvas text-sm" placeholder="https://… or use upload button" />
          </div>
          <div className="flex-1 min-w-[160px]">
            <label className="block text-sm mb-1 text-ink-soft">Caption (Optional)</label>
            <input value={caption} onChange={e => setCaption(e.target.value)} className="w-full px-4 py-2 border rounded bg-canvas text-sm" />
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading}
            className="px-4 py-2 border border-ink/20 rounded text-sm hover:bg-ink/5 transition-colors">
            {uploading ? "Uploading…" : "📁 Upload from device"}
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
          <button type="submit" className="px-6 py-2 bg-ink text-canvas rounded hover:bg-ink/90 text-sm" disabled={!imageUrl}>Add to Gallery</button>
        </div>
        {imageUrl && <img src={imageUrl} alt="Preview" className="h-24 w-auto rounded object-cover border border-ink/10" />}
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {!images ? <p className="text-sm text-ink-soft">Loading…</p> : images.map(img => img ? (
          <div key={img._id} className="relative group rounded overflow-hidden aspect-square bg-surface border border-ink/10">
            <img src={img.imageUrl} alt={img.caption || 'Gallery image'} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
              <p className="text-canvas text-xs truncate">{img.caption}</p>
              <button onClick={() => deleteImage({ id: img._id })} className="self-end px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">Delete</button>
            </div>
          </div>
        ) : null)}
      </div>
    </div>
  );
}

function MessagesTab() {
  const messages = useQuery(api.messages.getMessages);
  const markAsRead = useMutation(api.messages.markAsRead);
  const deleteMessage = useMutation(api.messages.deleteMessage);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-serif">Messages</h2>
      <div className="flex flex-col gap-4">
        {!messages ? <p className="text-sm text-ink-soft">Loading…</p> : messages.length === 0 ? <p className="text-sm text-ink-soft">No messages yet.</p> : messages.map(msg => (
          <div key={msg._id} className={`p-6 rounded-lg border transition-colors ${msg.read ? 'bg-surface border-ink/10' : 'bg-canvas border-ink shadow-sm'}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium">{msg.name}</h3>
                <p className="text-sm text-ink-soft">{msg.email}</p>
                {msg.projectType && <span className="inline-block mt-1 px-2 py-0.5 bg-ink/10 rounded-full text-xs">{msg.projectType}</span>}
              </div>
              <div className="flex gap-2">
                {!msg.read && <button onClick={() => markAsRead({ id: msg._id })} className="px-3 py-1 bg-ink text-canvas rounded text-sm hover:bg-ink/90">Mark Read</button>}
                <button onClick={() => deleteMessage({ id: msg._id })} className="px-3 py-1 bg-red-500/10 text-red-600 rounded text-sm hover:bg-red-500/20">Delete</button>
              </div>
            </div>
            <p className="text-ink text-sm whitespace-pre-wrap">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const SERVICE_OPTIONS = [
  { slug: "outdoor-advertising", title: "Outdoor Advertising" },
  { slug: "printing", title: "Precision Printing" },
  { slug: "fabrication", title: "Fabrication" },
  { slug: "installation", title: "Installation" },
  { slug: "events", title: "Event Production" },
  { slug: "creative-design", title: "Creative & Design" },
];

const BLOG_CATEGORIES = [
  "Outdoor Advertising", "Printing", "Events",
  "Fabrication", "Creative Design", "Industry News",
];

function BlogTab({ onError }: { onError: (msg: string) => void }) {
  const posts = useQuery(api.blog.getAllPosts);
  const createPost = useMutation(api.blog.createPost);
  const updatePost = useMutation(api.blog.updatePost);
  const deletePost = useMutation(api.blog.deletePost);
  const generateUploadUrl = useMutation(api.blog.generateUploadUrl);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const emptyForm = {
    title: '', slug: '', excerpt: '', body: '',
    category: 'Industry News', featuredImage: '',
    featuredImageAlt: '', authorName: 'ADS DOT COM Editorial',
    publishedDate: new Date().toISOString().slice(0, 10),
    updatedDate: new Date().toISOString().slice(0, 10),
    readTimeMinutes: 5, relatedServiceSlug: '',
    relatedServiceTitle: '', published: false,
  };

  const [form, setForm] = useState(emptyForm);
  const set = (k: string, v: any) => setForm(f => ({ ...f, [k]: v }));

  const autoSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const uploadUrl = await generateUploadUrl();
      const res = await fetch(uploadUrl, { method: "POST", headers: { "Content-Type": file.type }, body: file });
      if (!res.ok) throw new Error(`Upload failed: ${res.statusText}`);
      const { storageId } = await res.json();
      set('featuredImage', storageId);
    } catch (err) { onError((err as Error).message); }
    finally { setUploading(false); if (fileRef.current) fileRef.current.value = ""; }
  };

  const handleEdit = (post: any) => {
    setEditingId(post._id);
    setForm({
      title: post.title, slug: post.slug, excerpt: post.excerpt,
      body: post.body, category: post.category,
      featuredImage: post.featuredImage, featuredImageAlt: post.featuredImageAlt,
      authorName: post.authorName, publishedDate: post.publishedDate,
      updatedDate: post.updatedDate, readTimeMinutes: post.readTimeMinutes,
      relatedServiceSlug: post.relatedServiceSlug ?? '',
      relatedServiceTitle: post.relatedServiceTitle ?? '',
      published: post.published,
    });
  };

  const handleCancel = () => { setEditingId(null); setForm(emptyForm); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...form,
      updatedDate: new Date().toISOString().slice(0, 10),
      relatedServiceSlug: form.relatedServiceSlug || undefined,
      relatedServiceTitle: form.relatedServiceTitle || undefined,
    };
    try {
      if (editingId) await updatePost({ id: editingId as any, ...payload });
      else await createPost(payload);
      handleCancel();
    } catch (err) { onError((err as Error).message); }
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-serif">Manage Blog</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Form */}
        <div className="bg-surface p-6 rounded-lg border border-ink/10">
          <h3 className="text-xl font-medium mb-4">{editingId ? 'Edit Post' : 'New Post'}</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input placeholder="Title" value={form.title}
              onChange={e => { set('title', e.target.value); if (!editingId) set('slug', autoSlug(e.target.value)); }}
              className="px-4 py-2 border rounded bg-canvas text-sm" required />
            <input placeholder="Slug (auto-filled)" value={form.slug}
              onChange={e => set('slug', e.target.value)}
              className="px-4 py-2 border rounded bg-canvas text-sm font-mono" required />
            <textarea placeholder="Excerpt (1-2 sentences)" value={form.excerpt}
              onChange={e => set('excerpt', e.target.value)}
              className="px-4 py-2 border rounded bg-canvas text-sm h-16" required />
            {/* Body editor with toolbar */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-ink-soft">Body (HTML)</label>
              {/* Toolbar */}
              <div className="flex flex-wrap gap-1.5 p-2 bg-ink/5 rounded-t border border-b-0 border-ink/10">
                {[
                  { label: "H2", insert: "<h2>Heading</h2>" },
                  { label: "H3", insert: "<h3>Sub-heading</h3>" },
                  { label: "¶", insert: "<p>Paragraph text here.</p>" },
                  { label: "• List", insert: "<ul>\n  <li>Item one</li>\n  <li>Item two</li>\n</ul>" },
                  { label: "❝ Quote", insert: '<blockquote>Quote text here.</blockquote>' },
                  { label: "🖼 Image", insert: '<img src="YOUR-IMAGE-URL-HERE" alt="Description of image" />' },
                  { label: "🔗 Link", insert: '<a href="https://adsdotcom.net/services/printing">Link text</a>' },
                  { label: "<strong>", insert: "<strong>bold text</strong>" },
                  { label: "<em>", insert: "<em>italic text</em>" },
                ].map(({ label, insert }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      const ta = document.getElementById('blog-body-editor') as HTMLTextAreaElement | null;
                      if (!ta) return;
                      const start = ta.selectionStart;
                      const end = ta.selectionEnd;
                      const selected = form.body.slice(start, end);
                      const newVal = form.body.slice(0, start) + insert + form.body.slice(end);
                      set('body', newVal);
                      // Move cursor after insertion
                      setTimeout(() => {
                        ta.focus();
                        ta.setSelectionRange(start + insert.length, start + insert.length);
                      }, 0);
                    }}
                    className="px-2 py-1 bg-canvas border border-ink/10 rounded text-xs font-mono hover:bg-ink/10 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <textarea
                id="blog-body-editor"
                placeholder="Write HTML here. Use the toolbar buttons above to insert elements. Tip: <h2> for headings, <p> for paragraphs, <img src=&quot;URL&quot; alt=&quot;desc&quot; /> for images."
                value={form.body}
                onChange={e => set('body', e.target.value)}
                className="px-4 py-3 border border-ink/10 rounded-b bg-canvas text-sm h-64 font-mono leading-relaxed resize-y"
                required
                spellCheck={false}
              />
              <p className="text-[10px] text-ink-mute">Supports: &lt;h2&gt; &lt;h3&gt; &lt;p&gt; &lt;ul&gt;&lt;li&gt; &lt;blockquote&gt; &lt;img&gt; &lt;a&gt; &lt;strong&gt; &lt;em&gt;</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-ink-soft mb-1 block">Category</label>
                <select value={form.category} onChange={e => set('category', e.target.value)}
                  className="w-full px-3 py-2 border rounded bg-canvas text-sm">
                  {BLOG_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-ink-soft mb-1 block">Read Time (min)</label>
                <input type="number" min={1} value={form.readTimeMinutes}
                  onChange={e => set('readTimeMinutes', Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded bg-canvas text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-ink-soft mb-1 block">Published Date</label>
                <input type="date" value={form.publishedDate}
                  onChange={e => set('publishedDate', e.target.value)}
                  className="w-full px-3 py-2 border rounded bg-canvas text-sm" />
              </div>
              <div>
                <label className="text-xs text-ink-soft mb-1 block">Author Name</label>
                <input value={form.authorName} onChange={e => set('authorName', e.target.value)}
                  className="w-full px-3 py-2 border rounded bg-canvas text-sm" />
              </div>
            </div>

            {/* Featured image */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-ink-soft">Featured Image</label>
              <div className="flex gap-2">
                <input placeholder="Storage ID or URL" value={form.featuredImage}
                  onChange={e => set('featuredImage', e.target.value)}
                  className="flex-1 px-3 py-2 border rounded bg-canvas text-sm" />
                <button type="button" disabled={uploading}
                  onClick={() => fileRef.current?.click()}
                  className="px-3 py-2 bg-ink/10 rounded hover:bg-ink/20 text-xs font-medium shrink-0">
                  {uploading ? "…" : "Upload"}
                </button>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </div>
              <input placeholder="Alt text (describe the image)" value={form.featuredImageAlt}
                onChange={e => set('featuredImageAlt', e.target.value)}
                className="px-3 py-2 border rounded bg-canvas text-sm" />
            </div>

            {/* Related service */}
            <div>
              <label className="text-xs text-ink-soft mb-1 block">Related Service (optional)</label>
              <select value={form.relatedServiceSlug}
                onChange={e => {
                  const s = SERVICE_OPTIONS.find(o => o.slug === e.target.value);
                  set('relatedServiceSlug', e.target.value);
                  set('relatedServiceTitle', s?.title ?? '');
                }}
                className="w-full px-3 py-2 border rounded bg-canvas text-sm">
                <option value="">— None —</option>
                {SERVICE_OPTIONS.map(o => <option key={o.slug} value={o.slug}>{o.title}</option>)}
              </select>
            </div>

            {/* Published toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.published}
                onChange={e => set('published', e.target.checked)}
                className="size-4 rounded" />
              <span className="text-sm font-medium text-ink">Published (visible on site)</span>
            </label>

            <div className="flex gap-2 mt-2">
              <button type="submit" className="px-4 py-2 bg-ink text-canvas rounded hover:bg-ink/90 flex-1 text-sm">
                {editingId ? 'Update Post' : 'Create Post'}
              </button>
              {editingId && (
                <button type="button" onClick={handleCancel}
                  className="px-4 py-2 border border-ink text-ink rounded hover:bg-ink/10 flex-1 text-sm">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Posts list */}
        <div className="bg-surface p-6 rounded-lg border border-ink/10">
          <h3 className="text-xl font-medium mb-4">All Posts ({posts?.length ?? 0})</h3>
          <div className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto pr-1">
            {!posts ? <p className="text-sm text-ink-soft">Loading…</p>
              : posts.length === 0 ? <p className="text-sm text-ink-soft">No posts yet. Create one!</p>
              : posts.map(post => (
              <div key={post._id} className="border border-ink/10 p-4 rounded-lg flex gap-3 items-start">
                {post.featuredImage && (
                  <img src={post.featuredImage} alt="" className="size-12 rounded object-cover shrink-0 border border-ink/10" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="font-medium text-sm truncate">{post.title}</h4>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase shrink-0 ${post.published ? 'bg-green-100 text-green-700' : 'bg-ink/10 text-ink-mute'}`}>
                      {post.published ? 'Live' : 'Draft'}
                    </span>
                  </div>
                  <p className="text-[11px] text-ink-mute">{post.category} · {post.publishedDate}</p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button onClick={() => handleEdit(post)}
                    className="px-2 py-1 bg-ink/10 rounded hover:bg-ink/20 text-xs font-medium">Edit</button>
                  <button onClick={() => { if (confirm('Delete this post?')) deletePost({ id: post._id }); }}
                    className="px-2 py-1 bg-red-500/10 text-red-600 rounded hover:bg-red-500/20 text-xs font-medium">Del</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
