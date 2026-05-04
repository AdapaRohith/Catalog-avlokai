import { useDeferredValue, useState } from "react";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { TransitionLink } from "../components/TransitionLink";
import services, { serviceCategories, serviceIndustries } from "../data/services";

const SERVICES_PER_PAGE = 10;

export default function Services() {
  const [activeIndustry, setActiveIndustry] = useState(serviceCategories[0]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const activeIndustryIndex = serviceCategories.indexOf(activeIndustry);
  const activeIndustryData = serviceIndustries.find((industry) => industry.name === activeIndustry) || serviceIndustries[0];

  const filteredServices = activeIndustryData.automations
    .map((automation) => services.find((service) => service.id === automation.id))
    .filter(Boolean)
    .filter((service) => {
    const haystack = [
      service.name,
      service.category,
      service.shortDescription,
      service.tagline,
      ...service.tags,
      ...service.useCases,
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = deferredQuery ? haystack.includes(deferredQuery) : true;
    return matchesQuery;
  });

  const pageCount = Math.max(1, Math.ceil(filteredServices.length / SERVICES_PER_PAGE));
  const currentPage = Math.min(page, pageCount - 1);
  const pagedServices = filteredServices.slice(
    currentPage * SERVICES_PER_PAGE,
    currentPage * SERVICES_PER_PAGE + SERVICES_PER_PAGE
  );
  const featuredService = filteredServices[0] || services[0];

  const changeIndustry = (industry) => {
    setActiveIndustry(industry);
    setPage(0);
  };

  const stepIndustry = (direction) => {
    const nextIndex = (activeIndustryIndex + direction + serviceCategories.length) % serviceCategories.length;
    changeIndustry(serviceCategories[nextIndex]);
  };

  return (
    <div className="page-shell pb-10">
      <section className="site-container py-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="glass-panel-strong h-full rounded-[34px] p-6 sm:p-8">
              <h1 className="max-w-2xl text-4xl font-semibold text-white sm:text-6xl">
                Choose the build that will move revenue fastest.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
                Every system is designed to help you get more leads, faster responses, and cleaner operations.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: `${services.length}`, label: "automations" },
                  { value: `${serviceIndustries.length}`, label: "industry pages" },
                  { value: "Demo", label: "next step" },
                ].map((item) => (
                  <div key={item.label} className="metric-card">
                    <div className="text-2xl font-extrabold text-white">{item.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">Find your winner</div>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Filter your next growth system</h2>
                </div>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search AI, CRM, lead capture..."
                  className="w-full rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white outline-none transition focus:border-[rgba(153,225,255,0.28)] lg:max-w-sm"
                />
              </div>

              <div className="mb-8 flex flex-wrap gap-3">
                {serviceCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeIndustry === category}
                    className={`filter-chip ${activeIndustry === category ? "is-active" : ""}`}
                    onClick={() => changeIndustry(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                  <div className="media-frame h-56">
                    <img src={featuredService.image} alt={featuredService.imageAlt || featuredService.name} />
                  </div>
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {featuredService.tags.map((tag) => (
                        <span key={tag} className="info-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-semibold text-white">{featuredService.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{featuredService.tagline}</p>
                    <div className="mt-6">
                      <TransitionLink to={`/contact?service=${featuredService.id}`} className="button-secondary">
                        Book a demo
                      </TransitionLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-10 sm:py-14">
        <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {activeIndustry} automations
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{activeIndustryData.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" className="button-secondary" onClick={() => stepIndustry(-1)}>
              Previous industry
            </button>
            <button type="button" className="button-secondary" onClick={() => stepIndustry(1)}>
              Next industry
            </button>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {pagedServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`filter-chip ${currentPage === index ? "is-active" : ""}`}
                onClick={() => setPage(index)}
              >
                Page {index + 1}
              </button>
            ))}
          </div>
        )}

        <Reveal className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Need a custom solution?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">Book a demo and we will map the workflow around your exact business.</p>
          </div>
          <TransitionLink to="/contact?service=custom-solution" className="button-primary mt-5 sm:mt-0">
            Book a demo
          </TransitionLink>
        </Reveal>
      </section>

      <section className="site-container py-10 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Get attention",
              description: "Sharper design makes your offer feel more premium from the first second.",
            },
            {
              title: "Capture demand",
              description: "Every system is built to turn interest into qualified leads and booked calls.",
            },
            {
              title: "Scale easier",
              description: "Automation removes busywork so your team can move faster without adding chaos.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="catalog-card h-full p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
