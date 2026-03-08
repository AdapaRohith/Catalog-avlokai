import { useParams, Link } from "react-router-dom";
import services from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="bg-brand-bg min-h-screen text-brand-text relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/10 to-transparent pointer-events-none" />
        <section className="relative py-20 sm:py-24 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta mb-6 uppercase tracking-tight">System Not Found</h1>
            <p className="text-brand-muted mb-8 font-light text-lg">
              The requested protocol does not exist or has been deprecated.
            </p>
            <Link
              to="/services"
              className="inline-block liquid-glass text-white font-bold text-sm tracking-widest uppercase px-8 py-4 hover:border-brand-cyan transition-all duration-300"
            >
              Return to Catalog
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-brand-text relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-cyan/15 via-brand-accent/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-gradient-to-tr from-brand-magenta/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-12 flex items-center space-x-3 text-xs font-bold tracking-widest uppercase text-brand-muted bg-white/5 inline-flex px-4 py-2 rounded-full border border-white/10">
            <Link className="hover:text-brand-cyan transition-colors" to="/services">System Catalog</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">{service.name}</span>
          </nav>

          {/* Header */}
          <h1 className="text-5xl sm:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight drop-shadow-md">
            {service.name}
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-brand-cyan to-brand-magenta" />
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          </div>

          <p className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 bg-brand-accent/10 inline-block px-4 py-1.5 rounded-lg border border-brand-accent/20">
            {service.problem}
          </p>
          <p className="text-white/80 text-xl sm:text-2xl font-light leading-relaxed mb-24 max-w-3xl">
            {service.detailedDescription}
          </p>

          {/* Process */}
          <div className="mb-24 relative">
            <div className="absolute top-1/2 -left-32 w-64 h-64 bg-brand-cyan/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-tight">
                Deployment Protocol
              </h2>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent grow" />
            </div>

            <div className="space-y-6">
              {service.process.map((step, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start p-8 liquid-glass rounded-2xl group hover:border-brand-cyan/40 transition-all duration-300">
                  <span className="shrink-0 text-transparent bg-clip-text bg-gradient-to-b from-brand-cyan to-brand-accent font-display text-4xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-2">
                    <div className="w-8 h-1 bg-white/10 mb-4 group-hover:bg-brand-cyan/50 transition-colors" />
                    <p className="text-brand-muted text-lg font-light leading-relaxed group-hover:text-white/90 transition-colors">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-24 relative">
            <div className="absolute top-1/2 -right-32 w-64 h-64 bg-brand-magenta/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-tight">
                System Deliverables
              </h2>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent grow" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 liquid-glass rounded-xl hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-brand-magenta mt-1 shrink-0 text-glow text-lg leading-none">■</span>
                  <span className="text-white/80 font-light text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
            <div className="liquid-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-brand-cyan/40 transition-colors">
              <p className="text-xs uppercase tracking-widest text-brand-cyan mb-3 font-bold">Base Investment</p>
              <p className="text-3xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-white transition-all">{service.startingPrice}</p>
            </div>
            <div className="liquid-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-brand-accent/40 transition-colors relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta opacity-50" />
              <p className="text-xs uppercase tracking-widest text-brand-accent mb-3 font-bold">Structure</p>
              <p className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-accent group-hover:to-white transition-all">{service.pricingModel}</p>
            </div>
            <div className="liquid-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-brand-magenta/40 transition-colors">
              <p className="text-xs uppercase tracking-widest text-brand-magenta mb-3 font-bold">Timeline</p>
              <p className="text-3xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-magenta group-hover:to-white transition-all">{service.timeline}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-16 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" />
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white/5 border border-white/10 font-bold tracking-widest uppercase px-12 py-6 hover:border-transparent transition-all duration-300 hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-white group-hover:drop-shadow-md">Initiate Sequence</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
