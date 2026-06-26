import Reveal from "./Reveal";
import { TransitionLink } from "./TransitionLink";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Reveal delay={index * 60}>
      <article className="catalog-card flex h-full flex-col p-4 sm:p-5">
        <div className="media-frame mb-5 h-52 sm:h-56">
          <img src={service.image} alt={service.imageAlt || service.name} loading="lazy" />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--subtle)]">
            {service.category}
          </div>
          <h3 className="mb-2 text-xl font-semibold text-[var(--text)] sm:text-[1.45rem]">{service.name}</h3>
          <p className="mb-5 text-sm leading-7 text-[var(--body)]">{service.useCase}</p>

          <div className="mb-5 grid gap-2 sm:grid-cols-2">
            <div className="metric-card">
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--subtle)]">Build fee</div>
              <div className="mt-1.5 text-lg font-extrabold text-[var(--text)] tabular-nums">{service.buildFee}</div>
            </div>
            <div className="metric-card">
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--subtle)]">Monthly fee</div>
              <div className="mt-1.5 text-lg font-extrabold text-[var(--text)] tabular-nums">{service.monthlyFee}</div>
            </div>
          </div>

          <div className="mt-auto border-t border-[var(--hairline)] pt-4">
            <TransitionLink to={`/contact?service=${service.id}`} className="button-primary w-full">
              Book a demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </TransitionLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
