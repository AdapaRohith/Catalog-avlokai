import { Link } from "react-router-dom";

export default function PricingCard({ plan, highlighted = false }) {
  return (
    <div
      className={`relative rounded-[32px] p-8 sm:p-10 flex flex-col transition-transform duration-500 hover:-translate-y-2 overflow-hidden ${highlighted
          ? "border border-brand-cyan bg-white/5 shadow-[0_0_40px_rgba(0,255,255,0.15)]"
          : "liquid-glass"
        }`}
    >
      {highlighted && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-magenta" />
      )}

      {highlighted && (
        <span className="absolute top-6 right-6 bg-brand-cyan/20 border border-brand-cyan/50 text-brand-cyan text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest text-glow">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
      <p className="text-brand-muted text-sm font-light mb-8 pb-8 border-b border-white/10 h-12">{plan.description}</p>

      <div className="mb-10">
        <span className={`font-display text-5xl font-extrabold ${highlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent' : 'text-white'}`}>{plan.price}</span>
        {plan.price !== "Custom" && <span className="text-white/50 text-xl font-light ml-2">/mo</span>}
      </div>

      <ul className="space-y-4 mb-12 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-light text-white/80">
            <span className={highlighted ? "text-brand-cyan mt-1 text-[10px]" : "text-white/40 mt-1 text-[10px]"}>■</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-center transition-all duration-300 hover-lift ${highlighted
            ? "bg-gradient-to-r from-brand-cyan to-brand-accent text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
            : "bg-white/10 hover:bg-white border border-white/10 hover:text-black text-white"
          }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
