import { Leaf, Heart, Dumbbell, UtensilsCrossed } from "lucide-react";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "We source the freshest produce daily for every meal" },
  { icon: Heart, title: "Health Focused", desc: "Every dish is crafted with nutrition in mind" },
  { icon: Dumbbell, title: "Fitness Friendly", desc: "High protein, low-cal options for fitness enthusiasts" },
  { icon: UtensilsCrossed, title: "Affordable", desc: "Premium healthy food that doesn't break the bank" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
          Healthy Food, <span className="text-primary">Pocket Price</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          At Pocket Kitchen, we believe that eating healthy shouldn't cost a fortune. Based in Taramani, Chennai, we prepare fresh, protein-rich meals, vibrant fruit bowls, and energizing shakes — all designed to fuel your body and delight your palate at prices that fit every budget.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
