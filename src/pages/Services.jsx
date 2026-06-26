import { useDeferredValue, useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import Seo from "../components/Seo";
import { TransitionLink } from "../components/TransitionLink";
import services, { serviceCategories, serviceIndustries } from "../data/services";

const SERVICES_PER_PAGE = 12;
const ALL = "All";
const categories = [ALL, ...serviceCategories];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filteredServices = useMemo(() => {
    const base =
      activeCategory === ALL ? services : services.filter((service) => service.category === activeCategory);

    if (!deferredQuery) return base;

    return base.filter((service) => {
      const haystack = [service.name, service.category, service.tagline, ...service.tags, ...service.useCases]
        .join(" ")
        .toLowerCase();
      return haystack.includes(deferredQuery);
    });
  }, [activeCategory, deferredQuery]);

  const pageCount = Math.max(1, Math.ceil(filteredServices.length / SERVICES_PER_PAGE));
  const currentPage = Math.min(page, pageCount - 1);
  const pagedServices = filteredServices.slice(
    currentPage * SERVICES_PER_PAGE,
    currentPage * SERVICES_PER_PAGE + SERVICES_PER_PAGE
  );

  const selectCategory = (category) => {
    setActiveCategory(category);
    setPage(0);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AvlokAI Automation Catalog",
    description: "Browse AI automation systems across industries — each with a clear build fee and monthly fee.",
    url: "https://avlokai.com/services",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: services.length,
      itemListElement: services.slice(0, 20).map((service, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: service.name,
      })),
    },
  };

  return (
    <div className="page-shell pb-10">
      <Seo
        title="Automation Catalog"
        description="Browse AvlokAI's catalog of AI automation systems across IT, e-commerce, manufacturing, healthcare, real estate, and SMB workflows — each with a clear build fee and monthly fee."
        path="/services"
        jsonLd={jsonLd}
      />

      {/* HEADER */}
      <section className="site-container pt-4 pb-6 sm:pt-8">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--subtle)]">
            {services.length} automations · {serviceIndustries.length} industries
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-[var(--text)] sm:text-5xl">Automation catalog</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--body)]">
            Pick a workflow, see the build fee and monthly fee up front, and book a demo. Filter by industry or search
            to find your fastest win.
          </p>
        </Reveal>
      </section>

      {/* TOOLBAR */}
      <section className="site-container">
        <div className="sticky top-24 z-30 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/90 p-3 shadow-[var(--shadow-sm)] backdrop-blur-xl sm:p-4">
          <label className="mb-3 block">
            <span className="sr-only">Search the catalog</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(0);
              }}
              placeholder="Search automations — AI, CRM, inventory, reminders..."
              className="field"
              type="search"
            />
          </label>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by industry">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-chip ${activeCategory === category ? "is-active" : ""}`}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="site-container py-8 sm:py-10" aria-labelledby="grid-heading">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 id="grid-heading" className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            {activeCategory === ALL ? "All automations" : activeCategory}
          </h2>
          <span className="text-sm text-[var(--subtle)] tabular-nums">{filteredServices.length} results</span>
        </div>

        {pagedServices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {pagedServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-10 text-center">
            <p className="text-lg font-semibold text-[var(--text)]">No automations match that search.</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Try a different keyword or clear the filter.</p>
            <button
              type="button"
              className="button-secondary mt-5"
              onClick={() => {
                setQuery("");
                selectCategory(ALL);
              }}
            >
              Reset filters
            </button>
          </div>
        )}

        {pageCount > 1 && (
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
            <button
              type="button"
              className="button-secondary btn-sm"
              disabled={currentPage === 0}
              onClick={() => setPage(currentPage - 1)}
            >
              ← Prev
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Page ${index + 1}`}
                aria-current={currentPage === index}
                className={`filter-chip ${currentPage === index ? "is-active" : ""}`}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              type="button"
              className="button-secondary btn-sm"
              disabled={currentPage === pageCount - 1}
              onClick={() => setPage(currentPage + 1)}
            >
              Next →
            </button>
          </nav>
        )}
      </section>

      {/* SLIM CTA */}
      <section className="site-container py-4">
        <Reveal className="flex flex-col gap-4 rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">Need something custom?</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">We map the workflow around your exact business.</p>
          </div>
          <TransitionLink to="/contact?service=custom-solution" className="button-primary shrink-0">
            Book a demo
          </TransitionLink>
        </Reveal>
      </section>
    </div>
  );
}
