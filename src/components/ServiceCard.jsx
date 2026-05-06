import Reveal from "./Reveal";
import { TransitionLink } from "./TransitionLink";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Reveal delay={index * 70}>
      <TransitionLink to={`/contact?service=${service.id}`} className="block h-full">
        <article className="catalog-card flex h-full flex-col p-4 sm:p-5">
          <div className="media-frame mb-5 h-56 sm:h-64">
            <img src={service.image} alt={service.imageAlt || service.name} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
          </div>

          <div className="flex flex-1 flex-col">
            <div className="mb-4 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-3 text-2xl font-semibold text-white sm:text-[1.85rem]">{service.name}</h3>
            <p className="mb-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-[0.98rem]">{service.useCase}</p>

            <div className="mb-6 grid gap-2 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Build fee</div>
                <div className="mt-2 text-lg font-extrabold text-white">{service.buildFee}</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Monthly fee</div>
                <div className="mt-2 text-lg font-extrabold text-white">{service.monthlyFee}</div>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Next step</div>
                <div className="text-lg font-bold text-white">Book a demo</div>
              </div>

              <span className="button-secondary shrink-0 px-5 py-3">Book demo</span>
            </div>
          </div>
        </article>
      </TransitionLink>
    </Reveal>
  );
}
