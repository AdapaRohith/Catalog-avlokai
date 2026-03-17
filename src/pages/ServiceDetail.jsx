import { useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { TransitionLink } from "../components/TransitionLink";
import services from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((entry) => entry.id === id);

  if (!service) {
    return (
      <div className="page-shell">
        <section className="site-container py-10">
          <div className="glass-panel-strong rounded-[36px] px-6 py-12 text-center sm:px-10">
            <h1 className="text-4xl font-semibold text-white">That service is not available right now.</h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              Explore the other offers and find the next fastest way to grow your business.
            </p>
            <div className="mt-8">
              <TransitionLink to="/services" className="button-primary">
                View services
              </TransitionLink>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const relatedServices = services.filter((entry) => entry.id !== service.id).slice(0, 3);

  return (
    <div className="page-shell pb-10">
      <section className="site-container py-6 sm:py-10">
        <Reveal>
          <div className="catalog-card overflow-hidden p-5 sm:p-7">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap gap-3">
                  <TransitionLink to="/services" className="info-chip">
                    Back to systems
                  </TransitionLink>
                  <span className="info-chip">{service.category}</span>
                  <span className="info-chip">{service.timeline}</span>
                </div>
                <h1 className="max-w-3xl text-4xl font-semibold text-white sm:text-6xl">{service.name}</h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{service.tagline}</p>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">{service.detailedDescription}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <TransitionLink to="/contact" className="button-primary">
                    Start this build
                  </TransitionLink>
                  <TransitionLink to="/pricing" className="button-secondary">
                    Review pricing
                  </TransitionLink>
                </div>
              </div>

              <div className="space-y-4">
                <div className="media-frame h-[360px] sm:h-[420px]">
                  <img src={service.image} alt={service.imageAlt || service.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="metric-card">
                      <div className="text-2xl font-extrabold text-white">{metric.value}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Why this service wins.</h2>
              <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">{service.problem}</p>
              <p className="mt-5 text-sm leading-8 text-slate-400">{service.audience}</p>

              <div className="mt-8 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">Why it stands out</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.spotlight}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-white">Best for businesses that want results.</h2>
              <div className="grid gap-4">
                {service.idealFor.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-base leading-7 text-slate-200">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-white">What you get back.</h2>
              <div className="grid gap-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-lg font-semibold text-white">{outcome}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-white">What it costs to level up.</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Starting at", value: service.startingPrice },
                  { label: "Pricing model", value: service.pricingModel },
                  { label: "Timeline", value: service.timeline },
                ].map((item) => (
                  <div key={item.label} className="metric-card">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                    <div className="mt-3 text-lg font-bold text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.useCases.map((item) => (
                  <span key={item} className="info-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-white">How we build it.</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={step} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div className="text-lg font-semibold text-white">Phase {index + 1}</div>
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-white">What is included.</h2>
              <div className="grid gap-4">
                {service.deliverables.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-base leading-7 text-slate-200">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-10 sm:py-14">
        <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">More services that can grow your business.</h2>
          </div>
          <TransitionLink to="/services" className="button-secondary">
            View all services
          </TransitionLink>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {relatedServices.map((entry, index) => (
            <ServiceCard key={entry.id} service={entry} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
