import { Link } from "react-router-dom";

export default function ServiceCard({ service, index }) {
  return (
    <div className="group warm-card rounded-2xl overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt || service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-surface via-transparent to-transparent" />
        {service.category && (
          <span className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase bg-warm-accent/90 text-stone-900 px-3 py-1 rounded-full">
            {service.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-warm-accent transition-colors">
          {service.name}
        </h3>
        <p className="text-warm-muted text-sm leading-relaxed mb-5 flex-1">
          {service.shortDescription}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {service.deliverables?.slice(0, 3).map((item) => (
            <span
              key={item}
              className="text-xs px-2.5 py-1 rounded-full border border-warm-border text-warm-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-warm-border">
          <span className="text-warm-accent font-bold text-sm">
            From {service.startingPrice}
          </span>
          <Link
            to={`/services/${service.id}`}
            className="text-sm font-medium text-white hover:text-warm-accent transition-colors flex items-center gap-1.5"
          >
            Learn more
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
