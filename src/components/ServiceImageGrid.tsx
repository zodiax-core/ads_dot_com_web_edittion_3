import { useState } from "react";

export function ServiceImageGrid({ images, title, idx }: { images: string[]; title: string; idx: number }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIdx(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
        <div 
          className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lift border border-ink/5 group cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <img src={images[0]} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-ink">0{idx + 1}</span>
          </div>
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-ink px-4 py-2 rounded-full text-sm font-semibold transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              View Gallery
            </span>
          </div>
        </div>
        {images.slice(1).map((img, i) => (
          <div 
            key={i} 
            className="relative aspect-[4/3] rounded-xl overflow-hidden border border-ink/5 group cursor-pointer"
            onClick={() => openLightbox(i + 1)}
          >
            <img src={img} alt={`${title} detail`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

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
              src={images[currentImageIdx]} 
              alt={title} 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" 
            />
            <div className="absolute bottom-[-2rem] left-0 right-0 text-center text-white/70 text-sm font-medium">
              {currentImageIdx + 1} / {images.length}
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
    </>
  );
}
