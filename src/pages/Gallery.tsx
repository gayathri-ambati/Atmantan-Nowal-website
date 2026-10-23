import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { galleryImages, galleryCategories } from '@/data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <PageHero
        image="https://images.pexels.com/photos/6872305/pexels-photo-6872305.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="Gallery"
        title="Glimpses of Life at Nowal NatureCare"
        subtitle="A collection of moments from our gardens, therapy spaces, accommodation, and daily wellness practices."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
      />

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container-lux">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-xs tracking-wider uppercase transition-all ${
                  filter === cat
                    ? 'bg-forest-700 text-ivory'
                    : 'border border-forest-700/20 text-charcoal/60 hover:border-gold-400 hover:text-gold-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {filtered.map((img, i) => (
              <Reveal key={`${img.src}-${i}`} delay={(i % 6) * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      img.width === 'portrait' ? 'aspect-[3/4]' : img.width === 'panorama' ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/30 transition-colors duration-300 flex items-end p-4">
                    <span className="text-ivory text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.category}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] bg-forest-900/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-ivory p-2 z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-ivory p-2 hover:text-gold-400 z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <figure className="max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain"
            />
            <figcaption className="text-center text-ivory/60 text-sm mt-3">
              {filtered[lightbox].alt} {'\u00B7'} {filtered[lightbox].category}
            </figcaption>
          </figure>
          <button
            className="absolute right-4 md:right-8 text-ivory p-2 hover:text-gold-400 z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
