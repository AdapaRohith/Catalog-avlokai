import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import { TransitionLink } from "../components/TransitionLink";
import services, { rolloutSteps, studioPillars } from "../data/services";

const curatedCollections = [
  {
    title: "Acquire",
    description: "Experiences that turn attention into qualified conversations with less friction and stronger intent capture.",
    items: ["Customer journeys", "AI assistants", "Appointment booking"],
  },
  {
    title: "Operate",
    description: "Automation layers that remove admin overhead and keep your internal engine moving without handoff chaos.",
    items: ["CRM workflows", "Notifications", "Project routing"],
  },
  {
    title: "Scale",
    description: "Custom AI and content engines for teams ready to convert proprietary workflows into leverage.",
    items: ["Custom AI tools", "Knowledge systems", "Growth automation"],
  },
];

export default function Home() {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="page-shell pb-10">
      <section className="site-container relative overflow-hidden rounded-[40px] px-5 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
        <div className="absolute inset-0 -z-10 rounded-[40px] bg-[linear-gradient(140deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)_38%,rgba(96,165,250,0.05)_120%)]" />
        <div className="absolute inset-0 -z-10 rounded-[40px] border border-white/10" />
        <div className="absolute -right-28 top-14 -z-10 h-64 w-64 rounded-full bg-[rgba(96,165,250,0.08)] blur-[90px]" />
        <div className="absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-[rgba(56,189,248,0.05)] blur-[100px]" />

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal>
            <div>
              <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,6.8rem)] font-semibold leading-[0.94] text-white">
                Turn your business into
                <span className="text-gradient"> a high-performance growth system.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                AvlokAI builds AI assistants, automation systems, and digital experiences that help businesses close faster, operate cleaner, and grow with less friction.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TransitionLink to="/services" className="button-primary">
                  See what we build
                </TransitionLink>
                <TransitionLink to="/contact" className="button-secondary">
                  Book your build
                </TransitionLink>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Lead generation", "Customer support", "Business automation"].map((item) => (
                  <span key={item} className="info-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel-strong relative overflow-hidden rounded-[36px] p-5 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.04),transparent_32%)]" />
              <div className="relative">
                <div className="space-y-4">
                  {services.slice(0, 2).map((service, index) => (
                    <div
                      key={service.id}
                      className={`catalog-card rounded-[28px] p-4 ${index === 1 ? "sm:ml-10" : "sm:mr-10"}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">{service.category}</div>
                          <div className="text-2xl font-semibold text-white">{service.name}</div>
                          <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">{service.tagline}</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-white">
                          {service.timeline}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {services[2].metrics.map((metric) => (
                    <div key={metric.label} className="metric-card">
                      <div className="text-2xl font-extrabold text-white">{metric.value}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-20 sm:py-24">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
              Pick the system that will grow your business fastest.
            </h2>
          </div>
          <TransitionLink to="/services" className="button-secondary">
            View all services
          </TransitionLink>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="site-container py-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {curatedCollections.map((collection, index) => (
            <Reveal key={collection.title} delay={index * 80}>
              <article className="catalog-card h-full p-6 sm:p-7">
                <h3 className="text-3xl font-semibold text-white">{collection.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{collection.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {collection.items.map((item) => (
                    <span key={item} className="info-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container py-20 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="max-w-xl text-4xl font-semibold text-white sm:text-5xl">
                Why ambitious businesses choose AvlokAI.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                We make your business look stronger, respond faster, and operate with less manual drag.
              </p>

              <div className="mt-8 grid gap-4">
                {studioPillars.map((pillar, index) => (
                  <Reveal key={pillar.title} delay={120 + index * 70}>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <div className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-200">{pillar.title}</div>
                      <div className="text-sm leading-7 text-slate-400">{pillar.description}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-4xl font-semibold text-white">How we work.</h2>
              <div className="space-y-4">
                {rolloutSteps.map((step, index) => (
                  <div key={step.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-slate-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container pb-10 pt-8 sm:pb-16">
        <Reveal>
          <div className="glass-panel-strong overflow-hidden rounded-[36px] px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
                  Ready for systems that help your business win more?
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                  Let&apos;s build the assistant, workflow, or digital system that unlocks your next growth jump.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:flex-col">
                <TransitionLink to="/contact" className="button-primary">
                  Start now
                </TransitionLink>
                <TransitionLink to="/pricing" className="button-secondary">
                  See pricing
                </TransitionLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
