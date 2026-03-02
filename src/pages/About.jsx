const values = [
  {
    title: "Results-Driven",
    description:
      "We measure success by the time saved and revenue generated — not the number of tools deployed.",
  },
  {
    title: "Custom-Built",
    description:
      "No cookie-cutter templates. Every solution is architected around your specific business processes and goals.",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategy to deployment to ongoing optimization, we're with you at every step of the journey.",
  },
  {
    title: "Future-Proof",
    description:
      "We build on modern, scalable platforms that grow with your business and adapt as technology evolves.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About <span className="text-emerald-400">AvlokAI</span>
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed mb-6">
              AvlokAI is an automation-first technology studio that helps
              businesses eliminate manual bottlenecks through AI-powered systems.
              We believe that every repetitive process in a business can — and
              should — be automated, freeing humans to do what they do best:
              think creatively and build relationships.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Founded in 2024, we've helped startups, agencies, and mid-size
              companies save thousands of hours by designing intelligent
              workflows that run on autopilot.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-stone-800/50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-emerald-400 mb-4">
                Our Mission
              </h2>
              <p className="text-stone-300 leading-relaxed">
                To make enterprise-grade automation accessible to every business,
                regardless of size. We democratize AI-powered systems so that
                small teams can compete with the efficiency of large
                organizations.
              </p>
            </div>
            <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-emerald-400 mb-4">
                Our Vision
              </h2>
              <p className="text-stone-300 leading-relaxed">
                A world where businesses of all sizes leverage intelligent
                automation to operate at peak efficiency — where human talent is
                amplified by AI, not replaced by it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Why Choose AvlokAI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-stone-800/50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-400 text-2xl font-bold">SK</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Sushanth Kasturi
              </h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">
                Founder
              </p>
              <p className="text-stone-400 leading-relaxed text-sm">
                A visionary leader with a passion for building scalable AI
                solutions. Sushanth drives the strategic direction of AvlokAI,
                ensuring every product delivers measurable business impact and
                positions clients ahead of the automation curve.
              </p>
            </div>

            {/* Co-Founder */}
            <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-400 text-2xl font-bold">R</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Rohith
              </h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">
                Co-Founder
              </p>
              <p className="text-stone-400 leading-relaxed text-sm">
                Passionate about leveraging AI and automation to solve real
                business problems. With a background in software engineering and
                a deep obsession with operational efficiency, Rohith architects
                the systems that power AvlokAI's automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
