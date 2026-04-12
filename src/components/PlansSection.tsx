import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Monthly Plan",
    price: "₹4,999",
    period: "/month",
    features: ["Healthy daily meals", "Fresh preparation daily", "Diet-focused options", "Free delivery", "Flexible menu"],
    popular: false,
  },
  {
    name: "Quarterly Plan",
    price: "₹13,499",
    period: "/3 months",
    features: ["Everything in Monthly", "10% savings", "Priority delivery", "Custom diet plan", "Weekly menu variety"],
    popular: true,
  },
  {
    name: "Half-Yearly Plan",
    price: "₹24,999",
    period: "/6 months",
    features: ["Everything in Quarterly", "20% savings", "Dedicated nutritionist", "Exclusive recipes", "Festival specials"],
    popular: false,
  },
];

const PlansSection = () => (
  <section id="plans" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Subscription</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
          Meal <span className="text-primary">Plans</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Subscribe and save. Get healthy meals delivered daily at unbeatable prices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-7 border transition-all duration-300 ${
              plan.popular
                ? "bg-primary/5 border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                : "bg-card border-border hover:border-primary/30"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">{plan.price}</span>
              <span className="text-muted-foreground text-sm">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/918700535811?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              <MessageCircle className="w-4 h-4" /> Contact to Subscribe
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlansSection;
