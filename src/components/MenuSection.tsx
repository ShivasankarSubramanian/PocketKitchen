import { useState } from "react";
import fruitBowl from "@/assets/fruit-bowl.jpg";
import muskmelonBowl from "@/assets/muskmelon-bowl.jpg";
import PapayaBowl from "@/assets/papaya-bowl.jpeg";
import guavaBowl from "@/assets/guava-bowl.jpeg";
import diabeticBowl from "@/assets/diabetic-bowl.jpeg";
import ClassicBowl from "@/assets/Classic-bowl.jpeg";
import watermelonJuice from "@/assets/watermelon-juice.jpg";
import muskmelonJuice from "@/assets/muskmelon-Juice.jpeg";
import CoconutMilk from "@/assets/Coconut-Milk.jpeg";
import ABCJuice  from "@/assets/ABC-Juice.jpeg";
import papayaJuice from "@/assets/Papaya-juice.jpeg";
import amlaShot from "@/assets/amla-shot.jpg";
import paneerBowl from "@/assets/paneer-bowl.jpg";
import SproutsBowl from "@/assets/Sprouts-bowl.jpeg";
import redBananaShake from "@/assets/red-banana-shake.jpg";
import dietShake from "@/assets/diet-shake.jpg";
import wayProtinSshake from "@/assets/weight-loss.jpeg";
import noodles from "@/assets/noodles.jpg";
import peanutButter from "@/assets/peanut-butter.jpg";
import vegMaggie from "@/assets/veg-maggie.jpeg";
import eggmaggie from "@/assets/egg-maggie.jpeg";
import NutellaBread from "@/assets/Nutella-Bread.jpeg";

type MenuItem = {
  name: string;
  medium?: string;
  large?: string;
  price?: string;
  image?: string;
};

type Category = {
  name: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    name: "Fruit Bowls",
    items: [
      { name: "Watermelon Fruit Bowl", medium: "₹99", large: "₹119", image: fruitBowl },
      { name: "Muskmelon Fruit Bowl", medium: "₹99", large: "₹119", image: muskmelonBowl },
      { name: "Papaya Fruit Bowl", medium: "₹99", large: "₹119", image:PapayaBowl },
      { name: "Guava Fruit Bowl", medium: "₹109", large: "₹129", image:guavaBowl },
      { name: "Classic Fruit Bowl Mix", medium: "₹139", large: "₹159",image:ClassicBowl  },
      { name: "Diabetic Fruit Bowl Mix", medium: "₹149", large: "₹179",image:diabeticBowl },
      { name: "Energetic Fruit Bowl Mix", medium: "₹199", large: "₹219", image: fruitBowl },
    ],
  },
  {
    name: "Juices",
    items: [
      { name: "Watermelon Juice (500ml)", price: "₹99", image: watermelonJuice },
      { name: "Muskmelon Juice (500ml)", price: "₹99",image:muskmelonJuice },
      { name: "Papaya Juice (500ml)", price: "₹99",image:papayaJuice },
      { name: "Amla Shot", price: "₹79", image: amlaShot },
      { name: "ABC Juice (500ml)", price: "₹119",image:ABCJuice},
    ],
  },
  {
    name: "Special Drinks",
    items: [{ name: "Coconut Milk ⭐ (350ml)", price: "₹139" , image:CoconutMilk}],
  },
  {
    name: "Diet Bowls",
    items: [
      { name: "Sprouts Diet Bowl", price: "₹189",image:SproutsBowl },
      { name: "Egg Protein Bowl", price: "₹189",image:ClassicBowl },
      { name: "Paneer Protein Bowl", price: "₹199", image: paneerBowl },
    ],
  },
  {
    name: "Diet Shakes",
    items: [
      { name: "Red Banana Shake (350ml)", price: "₹149", image: redBananaShake },
      { name: "Weight Gain Protein Shake (350ml)", price: "₹169", image: dietShake },
      { name: "Weight Loss Protein Shake (350ml)", price: "₹159",image:wayProtinSshake },
    ],
  },
  {
    name: "Cheat Meals",
    items: [
      { name: "Plain Maggi", price: "₹79", image: noodles },
      { name: "Veggie Maggi", price: "₹89",image:vegMaggie },
      { name: "Egg Maggi", price: "₹99",image:eggmaggie },
    ],
  },
  {
    name: "Breads",
    items: [
      { name: "Peanut Butter Bread", price: "₹99", image: peanutButter },
      { name: "Nutella Bread", price: "₹99",image:NutellaBread },
    ],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Menu</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            What We <span className="text-primary">Serve</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i === active
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories[active].items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
            >
              {item.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                {/* {item.price ? (
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                ) : (
                  <div className="flex gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Medium: <span className="text-primary font-bold">{item.medium}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Large: <span className="text-primary font-bold">{item.large}</span>
                    </span>
                  </div>
                )} */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  {item.medium && <span>Medium</span>}
                  {item.large && <span>Large</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
