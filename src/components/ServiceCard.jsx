import Reveal from "./Reveal";
import { TransitionLink } from "./TransitionLink";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Reveal delay={index * 70}>
      <article className="catalog-card flex h-full flex-col p-4 sm:p-5">
        <div className="media-frame mb-5 h-56 sm:h-64">
          <img src={service.image} alt={service.imageAlt || service.name} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="info-chip bg-white/10 text-white">{service.category}</span>
            <span className="info-chip bg-white/8">{service.timeline}</span>
          </div>
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
          <p className="mb-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-[0.98rem]">
            {service.shortDescription}
          </p>

          <div className="mb-6 grid grid-cols-3 gap-2">
            {service.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                <div className="text-lg font-extrabold text-white">{metric.value}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Starting at</div>
              <div className="text-lg font-bold text-white">{service.startingPrice}</div>
            </div>

            <TransitionLink
              to={`/services/${service.id}`}
              className="button-secondary shrink-0 px-5 py-3"
            >
              Explore system
            </TransitionLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
