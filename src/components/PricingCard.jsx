import Reveal from "./Reveal";
import { TransitionLink } from "./TransitionLink";

export default function PricingCard({ plan, highlighted = false, index = 0 }) {
  return (
    <Reveal delay={index * 90}>
      <article
        className={`catalog-card h-full p-6 sm:p-8 ${
          highlighted ? "ring-1 ring-[rgba(153,225,255,0.35)]" : ""
        }`}
        >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">{plan.kicker}</div>
            <h3 className="mb-2 text-3xl font-semibold text-white">{plan.name}</h3>
            <p className="max-w-sm text-sm leading-7 text-slate-300">{plan.description}</p>
          </div>
          {highlighted ? (
            <span className="rounded-full border border-[rgba(153,225,255,0.28)] bg-[rgba(153,225,255,0.12)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-100">
              Most requested
            </span>
          ) : null}
        </div>

        <div className="mb-6 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Engagement</div>
          <div className="mt-3 text-4xl font-extrabold text-white">{plan.price}</div>
          <div className="mt-2 text-sm leading-7 text-slate-300">{plan.billingNote}</div>
        </div>

        <ul className="mb-8 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
              <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <TransitionLink to="/contact" className={highlighted ? "button-primary w-full" : "button-secondary w-full"}>
          {plan.cta}
        </TransitionLink>
      </article>
    </Reveal>
  );
}
