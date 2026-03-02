import { useParams, Link } from "react-router-dom";
import services from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-stone-400 mb-8">
            The service you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            to="/services"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-stone-500">
          <Link to="/services" className="hover:text-emerald-400 transition-colors">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone-300">{service.name}</span>
        </nav>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {service.name}
        </h1>
        <p className="text-emerald-400 font-medium mb-6">{service.problem}</p>
        <p className="text-stone-400 text-lg leading-relaxed mb-12">
          {service.detailedDescription}
        </p>

        {/* Process */}
        <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            Our Step-by-Step Process
          </h2>
          <ol className="space-y-4">
            {service.process.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-stone-300 text-sm leading-relaxed pt-1">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Deliverables */}
        <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            What You'll Receive
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                <span className="text-stone-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 text-center">
            <p className="text-xs uppercase tracking-wider text-stone-500 mb-1 font-semibold">
              Starting At
            </p>
            <p className="text-2xl font-bold text-emerald-400">
              {service.startingPrice}
            </p>
          </div>
          <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 text-center">
            <p className="text-xs uppercase tracking-wider text-stone-500 mb-1 font-semibold">
              Pricing Model
            </p>
            <p className="text-lg font-semibold text-white">
              {service.pricingModel}
            </p>
          </div>
          <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 text-center">
            <p className="text-xs uppercase tracking-wider text-stone-500 mb-1 font-semibold">
              Timeline
            </p>
            <p className="text-lg font-semibold text-white">
              {service.timeline}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
