import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { galleryImages, galleryCategories } from '@/data/gallery';

export default function GalleryPreview() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? galleryImages.slice(0, 8)
    : galleryImages.filter((img) => img.category === filter).slice(0, 8);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () =>
    setLightbox((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  const prevImage = () =>
    setLightbox((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));

  return (
    <section className="py-20 md:py-32 bg-forest-700">
      <div className="container-lux">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow-light mb-4 flex items-center justify-center gap-3">
            <span className="gold-divider" />
            Gallery
            <span className="gold-divider" />
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.15] text-balance">
            Glimpses of Life at Nowal
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {galleryCategories.slice(0, 6).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs tracking-wider uppercase transition-colors ${
                filter === cat
                  ? 'bg-gold-400 text-forest-700'
                  : 'border border-ivory/20 text-ivory/60 hover:text-gold-400 hover:border-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden ${
                img.width === 'portrait' ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/30 transition-colors duration-300" />
            </button>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link to="/gallery" className="text-link text-ivory inline-flex hover:text-gold-400">
            View Full Gallery
          </Link>
        </Reveal>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] bg-forest-900/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-ivory p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-6 text-ivory p-2 hover:text-gold-400"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 text-ivory p-2 hover:text-gold-400"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
