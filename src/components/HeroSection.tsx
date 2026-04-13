import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import heroFruitBowl from "@/assets/hero-fruit-bowl.jpg";
import heroProteinShake from "@/assets/hero-protein-shake.jpg";
import heroNoodles from "@/assets/hero-noodles.jpg";
import heroPlatter from "@/assets/hero-platter.jpg";

const slides = [
  { image: heroPlatter, title: "Healthy Food at Pocket Price", subtitle: "Fresh, nutritious & delicious meals delivered to your doorstep" },
  { image: heroFruitBowl, title: "Energetic Fruit Bowls", subtitle: "Packed with vitamins & natural goodness" },
  { image: heroProteinShake, title: "High Protein Shakes", subtitle: "Fuel your fitness journey the right way" },
  { image: heroNoodles, title: "Comfort Meals Done Right", subtitle: "Warm, appetizing & guilt-free" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-background">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
              i === current ? "scale-110" : "scale-100"
            }`}
            width={1920}
            height={1080}
          />
          {/* Multi-layer overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          <div className="absolute inset-0 bg-background/20" />
        </div>
      ))}

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="inline-block bg-primary/20 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-md border border-primary/30 animate-fade-in-up">
          Now Available on Zomato 🎉
        </span>
        <h1
          key={`title-${current}`}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl leading-tight mb-5 animate-fade-in-up"
          style={{ textShadow: "0 2px 20px hsl(0 0% 0% / 0.6)" }}
        >
          {slides[current].title}
        </h1>
        <p
          key={`sub-${current}`}
          className="text-foreground/80 text-lg md:text-xl max-w-2xl mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.15s", textShadow: "0 1px 10px hsl(0 0% 0% / 0.5)" }}
        >
          {slides[current].subtitle}
        </p>
        <p className="text-muted-foreground text-sm mb-10">
          Now on Zomato &nbsp;•&nbsp; Coming Soon on Swiggy
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:8700535811"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="https://wa.me/918700535811"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/30"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/30 backdrop-blur-md p-3 rounded-full hover:bg-background/50 transition-all duration-300 hidden md:block border border-border/30" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/30 backdrop-blur-md p-3 rounded-full hover:bg-background/50 transition-all duration-300 hidden md:block border border-border/30" aria-label="Next slide">
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === current ? "bg-primary w-10" : "bg-foreground/30 w-2.5 hover:bg-foreground/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
