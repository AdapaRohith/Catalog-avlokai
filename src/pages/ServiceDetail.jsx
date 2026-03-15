import { useParams, Link } from "react-router-dom";
import services from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen text-warm-text flex items-center justify-center">
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-display font-bold text-white mb-6">
              Service Not Found
            </h1>
            <p className="text-warm-muted mb-8 text-lg">
              The service you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-warm-accent hover:bg-warm-highlight text-stone-900 rounded-xl font-bold text-sm transition-all"
            >
              Browse Services
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-warm-text relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 text-sm text-warm-muted">
            <Link className="hover:text-warm-accent transition-colors" to="/services">
              Services
            </Link>
            <span className="text-warm-subtle">/</span>
            <span className="text-white">{service.name}</span>
          </nav>

          {/* Hero image */}
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img
              src={service.image}
              alt={service.imageAlt || service.name}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          {/* Header */}
          <div className="mb-4 flex flex-wrap gap-2">
            {service.category && (
              <span className="text-xs font-bold tracking-wider uppercase bg-warm-accent/15 text-warm-accent px-3 py-1 rounded-full">
                {service.category}
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-4 tracking-tight">
            {service.name}
          </h1>
          <p className="text-warm-accent text-sm font-bold uppercase tracking-wide mb-6">
            {service.problem}
          </p>
          <p className="text-warm-muted text-lg sm:text-xl leading-relaxed mb-16 max-w-3xl">
            {service.detailedDescription}
          </p>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-white mb-8">
              How We Do It
            </h2>
            <div className="space-y-4">
              {service.process.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-5 items-start p-6 warm-card rounded-xl group"
                >
                  <span className="text-warm-accent font-display text-2xl font-bold opacity-50 group-hover:opacity-100 transition-opacity shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-warm-muted text-base leading-relaxed group-hover:text-white transition-colors pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-white mb-8">
              What You Get
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 warm-surface rounded-xl"
                >
                  <span className="text-warm-accent mt-0.5 shrink-0">✓</span>
                  <span className="text-warm-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            <div className="warm-surface rounded-xl p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-warm-accent mb-2 font-bold">
                Starting Price
              </p>
              <p className="text-2xl font-display font-bold text-white">
                {service.startingPrice}
              </p>
            </div>
            <div className="warm-surface rounded-xl p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-warm-accent mb-2 font-bold">
                Pricing Model
              </p>
              <p className="text-lg font-display font-bold text-white">
                {service.pricingModel}
              </p>
            </div>
            <div className="warm-surface rounded-xl p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-warm-accent mb-2 font-bold">
                Timeline
              </p>
              <p className="text-2xl font-display font-bold text-white">
                {service.timeline}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-12 border-t border-warm-border">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-warm-accent hover:bg-warm-highlight text-stone-900 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Started with {service.name}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
