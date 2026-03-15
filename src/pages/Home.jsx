import { Link } from "react-router-dom";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";

const steps = [
  {
    num: "01",
    title: "Tell Us What Hurts",
    desc: "Share your biggest time-wasters and bottlenecks. We'll listen, ask the right questions, and map your workflow.",
  },
  {
    num: "02",
    title: "We Design & Build",
    desc: "Our team architects a custom automation solution, builds it, and tests it end-to-end before you see it.",
  },
  {
    num: "03",
    title: "Launch & Optimize",
    desc: "We deploy, train your team, and continuously optimize based on real performance data.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-warm-text">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white mb-6 tracking-tight leading-[1.1] fade-in-up delay-200">
              Automate the work
              <br />
              <span className="text-warm-gradient">you shouldn't be doing.</span>
            </h1>

            <p className="text-warm-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl fade-in-up delay-300">
              AvlokAI builds intelligent automation systems that save you thousands of
              hours. From chatbots to CRM workflows — we handle the repetitive stuff so
              your team can focus on what matters.
            </p>

            <div className="flex flex-wrap gap-4 fade-in-up delay-400">
              <Link
                to="/services"
                className="px-8 py-4 bg-warm-accent hover:bg-warm-highlight text-stone-900 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-warm-border text-white rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 sm:py-28 border-t border-warm-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
                What We Build
              </h2>
              <p className="text-warm-muted text-lg max-w-lg">
                Automation solutions tailored to your business — from simple workflows
                to custom AI systems.
              </p>
            </div>
            <Link
              to="/services"
              className="text-warm-accent hover:text-warm-accent-soft text-sm font-bold transition-colors flex items-center gap-1 shrink-0"
            >
              View all services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 border-t border-warm-border relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-warm-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              How It Works
            </h2>
            <p className="text-warm-muted text-lg max-w-lg mx-auto">
              Three simple steps from problem to production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="warm-card rounded-2xl p-8 text-center group"
              >
                <span className="text-warm-accent font-display text-5xl font-extrabold opacity-30 group-hover:opacity-60 transition-opacity block mb-4">
                  {step.num}
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-warm-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-warm-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 border-t border-warm-border relative">
        <div className="absolute inset-0 bg-gradient-to-t from-warm-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Ready to automate?
          </h2>
          <p className="text-warm-muted text-lg mb-10 max-w-xl mx-auto">
            Book a free discovery call and we'll map out the automation opportunities
            in your business — no strings attached.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-warm-accent hover:bg-warm-highlight text-stone-900 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}
