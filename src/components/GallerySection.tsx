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

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28">
  {/* <section id="gallery" className="py-20 md:py-28 bg-secondary/50"> */}
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
            className="relative overflow-hidden rounded-2xl group aspect-square"
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
);

export default GallerySection;
