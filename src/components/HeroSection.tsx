import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import fruitBowl from "@/assets/fruit-bowl.jpg";
import paneerBowl from "@/assets/paneer-bowl.jpg";
import watermelonJuice from "@/assets/watermelon-juice.jpg";

const slides = [
  { image: heroBg, title: "Healthy Food at Pocket Price", subtitle: "Fresh, nutritious & delicious meals delivered to your doorstep" },
  { image: fruitBowl, title: "Energetic Fruit Bowls", subtitle: "Packed with vitamins & natural goodness" },
  { image: paneerBowl, title: "High Protein Bowls", subtitle: "Fuel your fitness journey the right way" },
  { image: watermelonJuice, title: "Fresh Juices & Shakes", subtitle: "100% natural, zero added sugar" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30">
          Now Available on Zomato 🎉
        </span>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl leading-tight mb-4">
          {slides[current].title}
        </h1>
        <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mb-3">
          {slides[current].subtitle}
        </p>
        <p className="text-muted-foreground text-sm mb-8">
          Now on Zomato &nbsp;•&nbsp; Coming Soon on Swiggy
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:8700535811"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/25"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="https://wa.me/918700535811"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-accent/90 transition shadow-lg shadow-accent/25"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/40 backdrop-blur-sm p-2 rounded-full hover:bg-background/60 transition hidden md:block" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/40 backdrop-blur-sm p-2 rounded-full hover:bg-background/60 transition hidden md:block" aria-label="Next slide">
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
