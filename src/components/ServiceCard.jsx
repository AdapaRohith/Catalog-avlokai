import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="group bg-stone-800 border border-stone-700/60 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt || service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
        <h3 className="absolute bottom-3 left-4 right-4 text-lg font-semibold text-white drop-shadow-lg">
          {service.name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-1">
          {service.shortDescription}
        </p>

        <div className="mb-4">
          <ul className="space-y-1.5">
            {service.deliverables.slice(0, 3).map((item, i) => (
              <li key={i} className="text-stone-300 text-sm flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/services/${service.id}`}
          className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2.5 rounded-xl transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
