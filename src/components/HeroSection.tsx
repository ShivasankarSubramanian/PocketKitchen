import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import fruitBowl from "@/assets/fruit-bowl.jpg";
import dietShake from "@/assets/diet-shake.jpg";
import noodles from "@/assets/noodles.jpg";
import paneerBowl from "@/assets/paneer-bowl.jpg";

const slides = [
  {
    image: fruitBowl,
    title: "Healthy Food at Pocket Price",
    subtitle: "Now Live on Zomato | Swiggy Coming Soon",
    alt: "Premium colorful fruit bowl with cinematic studio lighting",
  },
  {
    image: dietShake,
    title: "Healthy Food at Pocket Price",
    subtitle: "Now Live on Zomato | Swiggy Coming Soon",
    alt: "Protein shake in a glass with dark gym-inspired vibe",
  },
  {
    image: noodles,
    title: "Healthy Food at Pocket Price",
    subtitle: "Now Live on Zomato | Swiggy Coming Soon",
    alt: "Warm noodles with appetizing steam effect and dramatic lighting",
  },
  {
    image: paneerBowl,
    title: "Healthy Food at Pocket Price",
    subtitle: "Now Live on Zomato | Swiggy Coming Soon",
    alt: "Mixed healthy platter with premium composition",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {slides.map((s, i) => (
        <div
          key={s.alt}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.alt}
            className={`h-full w-full object-cover transition-transform duration-[7000ms] ${
              i === current ? "scale-110" : "scale-100"
            }`}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),transparent_42%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85 backdrop-blur-[2px]" />
        </div>
      ))}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 text-center">
        <div className="max-w-4xl rounded-3xl border border-white/10 bg-black/30 p-6 shadow-2xl shadow-black/60 backdrop-blur-sm md:p-12">
          <span className="mb-6 inline-block rounded-full border border-primary/35 bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
            Premium Healthy Meals • Taramani, Chennai
          </span>
          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {slides[current].title}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/85 md:text-xl">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:8700535811"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href="https://wa.me/918700535811"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/90 px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/15 bg-black/45 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/70 md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/15 bg-black/45 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/70 md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.alt}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-8 bg-primary" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
