import { Link } from "react-router-dom";

export default function PricingCard({ plan, index, highlighted }) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-400 hover:-translate-y-1 ${
        highlighted
          ? "bg-warm-accent/10 border-2 border-warm-accent shadow-lg shadow-warm-accent/10"
          : "warm-surface"
      }`}
    >
      {highlighted && (
        <span className="absolute top-0 right-6 bg-warm-accent text-stone-900 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-b-lg">
          Popular
        </span>
      )}

      <h3 className="font-display text-xl font-bold text-white mb-1">{plan.name}</h3>
      <p className="text-warm-muted text-sm mb-6">{plan.description}</p>

      <div className="mb-8">
        <span
          className={`font-display text-4xl font-extrabold ${
            highlighted ? "text-warm-accent" : "text-white"
          }`}
        >
          {plan.price}
        </span>
        {plan.price !== "Custom" && (
          <span className="text-warm-subtle text-lg ml-1">/mo</span>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm items-start">
            <span className={`mt-0.5 ${highlighted ? "text-warm-accent" : "text-warm-subtle"}`}>
              ✓
            </span>
            <span className="text-warm-muted">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-200 ${
          highlighted
            ? "bg-warm-accent hover:bg-warm-highlight text-stone-900"
            : "bg-white/10 hover:bg-white/20 text-white border border-warm-border"
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
