import services from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="min-h-screen text-warm-text">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-warm-border">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-warm-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            <h1 className="text-5xl sm:text-6xl font-display font-extrabold text-white mb-6 tracking-tight fade-in-up delay-200">
              Everything we build
            </h1>
            <p className="text-warm-muted text-lg sm:text-xl leading-relaxed fade-in-up delay-300">
              From simple workflow automations to custom AI solutions — explore our full
              range of services designed to save you time and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase (alternating sections) */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.slice(0, 3).map((service, i) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center py-16 ${
                i !== 0 ? "border-t border-warm-border" : ""
              }`}
            >
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.imageAlt || service.name}
                  className="rounded-2xl w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <span className="text-warm-accent text-xs font-bold uppercase tracking-widest mb-3 block">
                  {service.category}
                </span>
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  {service.name}
                </h2>
                <p className="text-warm-muted text-base leading-relaxed mb-4">
                  {service.detailedDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full border border-warm-border text-warm-muted">
                    {service.timeline}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full border border-warm-border text-warm-muted">
                    From {service.startingPrice}
                  </span>
                </div>
                <a
                  href={`/services/${service.id}`}
                  className="text-warm-accent hover:text-warm-accent-soft font-bold text-sm transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
