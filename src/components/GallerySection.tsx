import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import fruitBowl from "@/assets/fruit-bowl.jpg";
import paneerBowl from "@/assets/paneer-bowl.jpg";
import noodles from "@/assets/noodles.jpg";
import peanutButter from "@/assets/peanut-butter.jpg";
import redBananaShake from "@/assets/red-banana-shake.jpg";
import amlaShot from "@/assets/amla-shot.jpg";
import dietShake from "@/assets/diet-shake.jpg";
import watermelonJuice from "@/assets/watermelon-juice.jpg";
import muskmelonBowl from "@/assets/muskmelon-bowl.jpg";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const showNext = () => setActiveIndex((prev) => (prev === null ? null : (prev + 1) % images.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="bg-secondary/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Gallery</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Food <span className="text-primary">Showcase</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={img.alt}
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl text-left"
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-heading text-sm font-semibold text-foreground md:text-base">{img.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:bg-black"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:bg-black md:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="animate-lightbox-zoom max-h-[88vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-2xl">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <figcaption className="px-5 py-3 text-center text-sm text-white/85 md:text-base">
              {images[activeIndex].alt}
            </figcaption>
          </figure>

          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:bg-black md:block"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
