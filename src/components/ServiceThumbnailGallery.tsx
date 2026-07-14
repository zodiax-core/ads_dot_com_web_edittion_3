import { useState } from "react";

export function ServiceThumbnailGallery({ images, alts }: { images: string[]; alts?: string[] }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-3">
      <div 
        className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface relative group cursor-pointer"
        onClick={openLightbox}
      >
        <img src={images[active]} alt={alts ? alts[active] : "Gallery Image"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="eager" />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-ink px-4 py-2 rounded-full text-sm font-semibold transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            View Fullscreen
          </span>
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`size-16 rounded-xl overflow-hidden border-2 transition-all ${i === active ? "border-accent-blue" : "border-transparent opacity-60 hover:opacity-100"}`}>
              <img src={img} alt={alts ? alts[i] : `Thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm" onClick={closeLightbox}>
          <div className="absolute top-4 right-4 z-[101]">
            <button 
              onClick={closeLightbox}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <div className="max-w-7xl max-h-[90vh] w-full px-16 relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[active]} 
              alt={alts ? alts[active] : "Gallery Image"} 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" 
            />
            <div className="absolute bottom-[-2rem] left-0 right-0 text-center text-white/70 text-sm font-medium">
              {active + 1} / {images.length}
            </div>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}
