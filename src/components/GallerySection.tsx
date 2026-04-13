import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import fruitBowl from "@/assets/energy-mixed-gallery.jpeg";
import paneerBowl from "@/assets/protine-bowl-gallery.jpeg";
import noodles from "@/assets/plain-maggie-gallery.jpeg";
import peanutButter from "@/assets/peanut-butter.jpg";
import redBananaShake from "@/assets/red-banana-shake.jpg";
import amlaShot from "@/assets/amla-shot.jpg";
import dietShake from "@/assets/diet-shake.jpg";
import watermelonJuice from "@/assets/watermelon-juice.jpg";
import muskmelonBowl from "@/assets/muskmelon-gallery.jpeg";

const images = [
  { src: paneerBowl, alt: "Paneer Protein Bowl" },
  { src: fruitBowl, alt: "Energetic Mixed Fruit Bowl" },
  { src: watermelonJuice, alt: "Watermelon Juice" },
  { src: noodles, alt: "Veggie Maggi" },
  { src: redBananaShake, alt: "Red Banana Shake" },
  { src: amlaShot, alt: "Amla Shot" },
  { src: dietShake, alt: "Diet Protein Shake" },
  { src: peanutButter, alt: "Peanut Butter Bread" },
  { src: muskmelonBowl, alt: "Muskmelon Fruit Bowl" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const goPrev = useCallback(() => setLightbox((c) => (c !== null ? (c - 1 + images.length) % images.length : null)), []);
  const goNext = useCallback(() => setLightbox((c) => (c !== null ? (c + 1) % images.length : null)), []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  }, [goPrev, goNext]);

  return (
    <>
      <section id="gallery" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Gallery</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
              Food <span className="text-primary">Showcase</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl group aspect-square cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-heading text-foreground font-semibold text-sm md:text-base">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 bg-card/80 backdrop-blur-sm p-3 rounded-full border border-border hover:bg-card transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm p-3 rounded-full border border-border hover:bg-card transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm p-3 rounded-full border border-border hover:bg-card transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl animate-scale-in"
            />
            <p className="text-center text-foreground font-heading font-semibold mt-4 text-lg">
              {images[lightbox].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
