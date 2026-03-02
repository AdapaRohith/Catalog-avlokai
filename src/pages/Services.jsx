import { Link } from "react-router-dom";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-stone-800/50 py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-stone-900 to-stone-900 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-stone-400 text-lg">
            From website automation to AI chatbots — we deliver production-ready
            systems that plug into your workflow and start delivering value from
            day one.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-width showcase section */}
      <section className="bg-stone-800/50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
            How Our Automations Work
          </h2>
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="rounded-2xl overflow-hidden border border-stone-700/60 shadow-lg">
                    <img
                      src={service.image}
                      alt={service.imageAlt || service.name}
                      className="w-full h-64 sm:h-72 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-emerald-400 text-sm font-medium mb-3">
                    {service.problem}
                  </p>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">
                    {service.detailedDescription}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
