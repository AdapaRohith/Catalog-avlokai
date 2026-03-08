import { Link } from "react-router-dom";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="min-h-screen text-brand-text relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand-cyan/10 via-brand-magenta/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero banner */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 fade-in-up delay-100">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <p className="text-white/80 font-bold tracking-[0.2em] uppercase text-xs">
              System Capabilities // 02
            </p>
          </div>
          <h1 className="text-5xl sm:text-7xl font-display font-black text-white mb-6 uppercase tracking-tighter">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Capabilities</span>
          </h1>
          <p className="max-w-2xl mx-auto text-brand-muted text-xl sm:text-2xl font-light leading-relaxed">
            Precision-engineered solutions designed for scale. We deliver production-ready
            systems that integrate flawlessly into your workflow.
          </p>
        </div>
      </section>

      {/* Service Cards Grid - Active Catalog */}
      <section className="py-24 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-brand-cyan text-sm font-bold tracking-widest uppercase">01</span>
            <div className="h-px bg-gradient-to-r from-brand-cyan/50 to-transparent grow" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
              Active Catalog
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full-width showcase section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-24">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
              Operational Framework
            </h2>
            <div className="h-px bg-gradient-to-l from-brand-magenta/50 to-transparent grow" />
            <span className="text-brand-magenta text-sm font-bold tracking-widest uppercase">02</span>
          </div>

          <div className="space-y-32">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-20 items-center group`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden liquid-glass">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-brand-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                    <img
                      src={service.image}
                      alt={service.imageAlt || service.name}
                      className="w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Decorative Element */}
                    <div className="absolute top-6 left-6 flex gap-3 z-20">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                      <span className="w-2 h-2 bg-white/40 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full space-y-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-magenta animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest text-glow">Sys.{i + 1}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-magenta transition-all duration-500">
                    {service.name}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-brand-cyan to-brand-magenta" />
                  <p className="text-brand-accent text-sm tracking-[0.2em] uppercase font-bold bg-white/5 py-2 px-4 inline-block rounded-md border border-white/5">
                    {service.problem}
                  </p>
                  <p className="text-brand-muted text-lg font-light leading-relaxed max-w-lg">
                    {service.detailedDescription}
                  </p>
                  <div className="pt-6">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-cyan hover:text-black transition-colors duration-300 hover-lift"
                    >
                      <span>Analyze Protocol</span>
                      <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
