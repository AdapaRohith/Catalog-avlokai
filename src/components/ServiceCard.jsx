import { Link } from "react-router-dom";

export default function ServiceCard({ service, index }) {
  return (
    <div className="group liquid-glass rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 relative border border-white/10 hover:border-brand-cyan/50">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/50 to-brand-bg z-10" />
        <img
          src={service.image}
          alt={service.imageAlt || service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="text-brand-magenta font-display font-bold text-xs tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
            0{index !== undefined ? index + 1 : 1}
          </span>
        </div>
        <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-display font-bold text-white z-20 group-hover:text-brand-cyan transition-colors">
          {service.name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-20">
        <p className="text-brand-muted text-sm font-light leading-relaxed mb-6 flex-1">
          {service.shortDescription}
        </p>

        <div className="mb-8">
          <ul className="space-y-3">
            {service.deliverables.slice(0, 3).map((item, i) => (
              <li key={i} className="text-white/80 text-sm font-light flex items-start gap-3">
                <span className="text-brand-cyan mt-1 text-[10px]">■</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/services/${service.id}`}
          className="block text-center border border-white/10 bg-white/5 hover:bg-brand-magenta hover:border-brand-magenta text-white uppercase tracking-widest text-xs font-bold py-4 rounded-xl transition-all duration-300 hover-lift hover:shadow-[0_0_20px_rgba(255,20,147,0.4)]"
        >
          View Configuration
        </Link>
      </div>
    </div>
  );
}
