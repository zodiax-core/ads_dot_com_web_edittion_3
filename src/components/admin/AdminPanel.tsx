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
  const storageId: string = data.storageId;
  // Use the Convex HTTP site URL to serve the file
  const convexUrl = (import.meta.env.VITE_CONVEX_URL as string) ?? "";
  const siteUrl = convexUrl.replace(".convex.cloud", ".convex.site");
  return `${siteUrl}/api/storage/${storageId}`;
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
  const [activeTab, setActiveTab] = useState<'works' | 'gallery' | 'messages'>('works');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Wire global error handler
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
          {(['works', 'gallery', 'messages'] as const).map(tab => (
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif">Manage Works</h2>
        <button onClick={() => seedDummyData().then(r => r?.message && alert(r.message))} className="px-4 py-2 bg-ink text-canvas rounded hover:bg-ink/90 text-sm">
          Seed Dummy Data
        </button>
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
      const url = await uploadFile(file, generateUploadUrl);
      setImageUrl(url);
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
        {!images ? <p className="text-sm text-ink-soft">Loading…</p> : images.map(img => (
          <div key={img._id} className="relative group rounded overflow-hidden aspect-square bg-surface border border-ink/10">
            <img src={img.imageUrl} alt={img.caption || 'Gallery image'} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
              <p className="text-canvas text-xs truncate">{img.caption}</p>
              <button onClick={() => deleteImage({ id: img._id })} className="self-end px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
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
