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
    <div className="min-h-screen text-warm-text">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-warm-border">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl relative z-10">
            <h1 className="text-5xl sm:text-6xl font-display font-extrabold text-white mb-6 tracking-tight fade-in-up delay-100">
              About <span className="text-warm-gradient">AvlokAI</span>
            </h1>
            <p className="text-warm-muted text-lg sm:text-xl leading-relaxed mb-6 fade-in-up delay-200">
              AvlokAI is an automation-first technology studio that helps
              businesses eliminate manual bottlenecks through AI-powered systems.
            </p>
            <p className="text-warm-subtle text-base leading-relaxed fade-in-up delay-300">
              We believe that every repetitive process in a business can — and
              should — be automated, freeing humans to do what they do best:
              think creatively and build relationships. Founded in 2024, we've helped
              startups, agencies, and mid-size companies save thousands of hours by
              designing intelligent workflows that run on autopilot.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 border-b border-warm-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="warm-card rounded-2xl p-8 sm:p-10 group">
              <h2 className="text-xs font-bold tracking-widest uppercase text-warm-accent mb-6">
                Our Mission
              </h2>
              <p className="text-white text-lg leading-relaxed">
                To make enterprise-grade automation accessible to every business,
                regardless of size. We democratize AI-powered systems so that
                small teams can compete with the efficiency of large
                organizations.
              </p>
            </div>
            <div className="warm-card rounded-2xl p-8 sm:p-10 group">
              <h2 className="text-xs font-bold tracking-widest uppercase text-warm-accent mb-6">
                Our Vision
              </h2>
              <p className="text-white text-lg leading-relaxed">
                A world where businesses of all sizes leverage intelligent
                automation to operate at peak efficiency — where human talent is
                amplified by AI, not replaced by it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 border-b border-warm-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-12 text-center">
            Why Work with Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="warm-card rounded-2xl p-8 group"
              >
                <span className="text-warm-accent font-display text-4xl font-extrabold opacity-30 group-hover:opacity-60 transition-opacity block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-warm-accent transition-colors">
                  {v.title}
                </h3>
                <p className="text-warm-muted text-base leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-12 text-center">
            Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="group warm-card rounded-2xl p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-warm-accent/15 border-2 border-warm-accent/30 flex items-center justify-center">
                <span className="text-warm-accent font-display text-3xl font-bold">SK</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-warm-accent transition-colors">
                Sushanth Kasturi
              </h3>
              <p className="text-warm-accent text-xs font-bold uppercase tracking-widest mb-4">
                Founder
              </p>
              <p className="text-warm-muted text-sm leading-relaxed">
                A visionary leader with a passion for building scalable AI
                solutions. Sushanth drives the strategic direction of AvlokAI,
                ensuring every product delivers measurable business impact.
              </p>
            </div>

            {/* Co-Founder */}
            <div className="group warm-card rounded-2xl p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-warm-accent/15 border-2 border-warm-accent/30 flex items-center justify-center">
                <span className="text-warm-accent font-display text-3xl font-bold">R</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-warm-accent transition-colors">
                Rohith
              </h3>
              <p className="text-warm-accent text-xs font-bold uppercase tracking-widest mb-4">
                Co-Founder
              </p>
              <p className="text-warm-muted text-sm leading-relaxed">
                Passionate about leveraging AI and automation to solve real
                business problems. Rohith architects the systems that power
                AvlokAI's automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
