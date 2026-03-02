export default function PricingCard({ plan, highlighted = false }) {
  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        highlighted
          ? "bg-emerald-600/10 border-2 border-emerald-500/60 shadow-[0_0_40px_-8px_rgba(16,185,129,0.25)]"
          : "bg-stone-800 border border-stone-700/60 hover:border-emerald-500/30 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.1)]"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
      <p className="text-stone-400 text-sm mb-6">{plan.description}</p>

      <div className="mb-6">
        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
        <span className="text-stone-400 text-sm ml-1">/month</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
            <span className="text-stone-300">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="/contact"
        className={`block text-center font-medium py-3 rounded-xl transition-colors duration-200 ${
          highlighted
            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
            : "bg-stone-700 hover:bg-stone-600 text-white"
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}
