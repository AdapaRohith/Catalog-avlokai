import { useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import Seo from "../components/Seo";
import { TransitionLink } from "../components/TransitionLink";
import services from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((entry) => entry.id === id);

  if (!service) {
    return (
      <div className="page-shell">
        <Seo title="Service not found" description="This service is not available. Browse the full AvlokAI catalog." path="/services" />
        <section className="site-container py-10">
          <div className="glass-panel-strong rounded-3xl px-6 py-12 text-center sm:px-10">
            <h1 className="text-4xl font-semibold text-[var(--text)]">That service is not available right now.</h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[var(--body)] sm:text-base">
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

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.detailedDescription || service.tagline,
      serviceType: service.category,
      provider: { "@type": "Organization", name: "AvlokAI", url: "https://avlokai.com/" },
      areaServed: "Global",
      offers: {
        "@type": "Offer",
        description: `Build fee ${service.buildFee} + ${service.monthlyFee} monthly`,
        priceCurrency: "INR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://avlokai.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://avlokai.com/services" },
        { "@type": "ListItem", position: 3, name: service.name, item: `https://avlokai.com/services/${service.id}` },
      ],
    },
  ];

  return (
    <div className="page-shell pb-10">
      <Seo
        title={service.name}
        description={service.detailedDescription || service.tagline}
        path={`/services/${service.id}`}
        image={service.image}
        type="article"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="site-container py-6 sm:py-10">
        <Reveal>
          <div className="catalog-card overflow-hidden p-5 sm:p-7">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <TransitionLink
                  to="/services"
                  className="mb-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand-1)]"
                >
                  ← Back to catalog
                </TransitionLink>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                  {service.category}
                </div>
                <h1 className="max-w-3xl text-4xl font-semibold text-[var(--text)] sm:text-5xl">{service.name}</h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--body)] sm:text-lg">{service.tagline}</p>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)] sm:text-base">{service.detailedDescription}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <TransitionLink to={`/contact?service=${service.id}`} className="button-primary btn-lg">
                    Book a demo
                  </TransitionLink>
                  <TransitionLink to="/services" className="button-secondary btn-lg">
                    Browse catalog
                  </TransitionLink>
                </div>
              </div>

              <div className="space-y-4">
                <div className="media-frame h-[320px] sm:h-[400px]">
                  <img src={service.image} alt={service.imageAlt || service.name} />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="metric-card">
                      <div className="text-2xl font-extrabold text-[var(--text)] tabular-nums">{metric.value}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--subtle)]">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHY */}
      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">Why this service wins.</h2>
              <p className="mt-5 text-sm leading-8 text-[var(--body)] sm:text-base">{service.problem}</p>
              <p className="mt-5 text-sm leading-8 text-[var(--muted)]">{service.audience}</p>

              <div className="mt-8 rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">Why it stands out</div>
                <p className="mt-3 text-sm leading-7 text-[var(--body)]">{service.spotlight}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-[var(--text)]">Best for businesses that want results.</h2>
              <div className="grid gap-4">
                {service.idealFor.map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                    <div className="text-base leading-7 text-[var(--body)]">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUTCOMES + COST */}
      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-[var(--text)]">What you get back.</h2>
              <div className="grid gap-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                    <div className="text-base font-semibold text-[var(--text)]">{outcome}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-[var(--text)]">What it costs to level up.</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Starting at", value: service.startingPrice },
                  { label: "Pricing model", value: service.pricingModel },
                ].map((item) => (
                  <div key={item.label} className="metric-card">
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--subtle)]">{item.label}</div>
                    <div className="mt-3 text-lg font-bold text-[var(--text)]">{item.value}</div>
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

      {/* PROCESS + DELIVERABLES */}
      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-[var(--text)]">How we build it.</h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={step} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-[var(--brand-1)] to-[var(--brand-2)] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div className="text-lg font-semibold text-[var(--text)]">Phase {index + 1}</div>
                    </div>
                    <p className="text-sm leading-7 text-[var(--body)]">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-[var(--text)]">What is included.</h2>
              <div className="grid gap-4">
                {service.deliverables.map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                    <div className="text-base leading-7 text-[var(--body)]">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="site-container py-10 sm:py-14" aria-labelledby="related-heading">
        <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="related-heading" className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">
            More services that can grow your business.
          </h2>
          <TransitionLink to="/services" className="button-secondary shrink-0">
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
