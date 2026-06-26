import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { TransitionLink } from "../components/TransitionLink";
import services, { rolloutSteps, studioPillars, serviceIndustries } from "../data/services";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Home() {
  const featuredServices = services.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AvlokAI automation systems",
    itemListElement: serviceIndustries.map((industry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: industry.name,
      description: industry.description,
    })),
  };

  return (
    <div className="page-shell pb-10">
      <Seo
        title="AI Automation Systems for Modern Businesses"
        description="AvlokAI builds AI assistants, automation systems, and digital experiences that help businesses close faster, operate cleaner, and grow with less friction."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="site-container relative overflow-hidden rounded-3xl px-5 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
        <div className="absolute inset-0 -z-10 rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]" />

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal>
            <div>
              <h1 className="max-w-4xl text-[clamp(2.8rem,7vw,5.6rem)] font-bold leading-[0.96] text-[var(--text)]">
                Turn your business into
                <span className="text-gradient"> a high-performance growth system.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--body)] sm:text-lg">
                AvlokAI builds AI assistants, automation systems, and digital experiences that help businesses close
                faster, operate cleaner, and grow with less friction.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TransitionLink to="/services" className="button-primary btn-lg">
                  See what we build
                  <ArrowIcon />
                </TransitionLink>
                <TransitionLink to="/contact" className="button-secondary btn-lg">
                  Book your build
                </TransitionLink>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Lead generation", "Customer support", "Business automation"].map((item) => (
                  <span key={item} className="info-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel-strong relative overflow-hidden rounded-3xl p-5 sm:p-6">
              <div className="space-y-4">
                {services.slice(0, 2).map((service, index) => (
                  <div
                    key={service.id}
                    className={`catalog-card rounded-2xl p-4 ${index === 1 ? "sm:ml-10" : "sm:mr-10"}`}
                  >
                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--subtle)]">
                      {service.category}
                    </div>
                    <div className="text-xl font-semibold text-[var(--text)]">{service.name}</div>
                    <p className="mt-2 max-w-md text-sm leading-7 text-[var(--body)]">{service.tagline}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {services[2].metrics.map((metric) => (
                  <div key={metric.label} className="metric-card min-w-0">
                    <div className="break-words text-base font-bold leading-tight text-[var(--text)] tabular-nums sm:text-lg">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[var(--subtle)]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="site-container py-20 sm:py-24" aria-labelledby="featured-heading">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="featured-heading" className="max-w-3xl text-4xl font-semibold text-[var(--text)] sm:text-5xl">
            Pick the system that will grow your business fastest.
          </h2>
          <TransitionLink to="/services" className="button-secondary shrink-0">
            View all services
            <ArrowIcon />
          </TransitionLink>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* WHY + PROCESS */}
      <section className="site-container py-20 sm:py-24" aria-labelledby="why-heading">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 id="why-heading" className="max-w-xl text-4xl font-semibold text-[var(--text)] sm:text-5xl">
                Why ambitious businesses choose AvlokAI.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--body)] sm:text-base">
                We make your business look stronger, respond faster, and operate with less manual drag.
              </p>

              <div className="mt-8 grid gap-4">
                {studioPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                    <div className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--text)]">{pillar.title}</div>
                    <div className="text-sm leading-7 text-[var(--muted)]">{pillar.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-4xl font-semibold text-[var(--text)]">How we work.</h2>
              <ol className="space-y-4">
                {rolloutSteps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-[var(--brand-1)] to-[var(--brand-2)] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--text)]">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted)]">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="site-container pb-10 pt-8 sm:pb-16">
        <Reveal>
          <div className="glass-panel-strong overflow-hidden rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold text-[var(--text)] sm:text-5xl">
                  Ready for systems that help your business win more?
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--body)] sm:text-base">
                  Let&apos;s build the assistant, workflow, or digital system that unlocks your next growth jump.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:flex-col">
                <TransitionLink to="/contact" className="button-primary btn-lg">
                  Start now
                  <ArrowIcon />
                </TransitionLink>
                <TransitionLink to="/services" className="button-secondary btn-lg">
                  Browse catalog
                </TransitionLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
