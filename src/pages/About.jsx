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
    <div className="min-h-screen text-brand-text relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-cyan/20 via-brand-accent/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-gradient-to-tr from-brand-magenta/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl relative z-10">
            <h1 className="text-5xl sm:text-7xl font-display font-black text-white mb-8 uppercase tracking-tighter drop-shadow-md fade-in-up delay-100">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Studio</span>
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-magenta" />
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            </div>
            <p className="text-white/90 text-2xl sm:text-3xl font-light leading-relaxed mb-8 fade-in-up delay-200 drop-shadow-sm">
              AvlokAI is an automation-first technology studio that helps
              businesses eliminate manual bottlenecks through AI-powered systems.
            </p>
            <p className="text-brand-muted text-lg sm:text-xl font-light leading-relaxed fade-in-up delay-300">
              We believe that every repetitive process in a business can — and
              should — be automated, freeing humans to do what they do best:
              think creatively and build relationships. Founded in 2024, we've helped startups, agencies, and mid-size
              companies save thousands of hours by designing intelligent
              workflows that run on autopilot.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 sm:p-12 liquid-glass rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.1)] hover:border-brand-cyan/30">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-accent transition-all duration-700 ease-out group-hover:w-full rounded-t-3xl" />
              <div className="absolute top-8 right-8 w-16 h-16 bg-brand-cyan/20 blur-xl rounded-full group-hover:bg-brand-cyan/30 transition-colors" />
              <h2 className="text-xs font-bold tracking-widest uppercase text-brand-cyan mb-8 border-b border-white/10 pb-4">
                01 — Our Mission
              </h2>
              <p className="text-white text-xl font-light leading-relaxed">
                To make enterprise-grade automation accessible to every business,
                regardless of size. We democratize AI-powered systems so that
                small teams can compete with the efficiency of large
                organizations.
              </p>
            </div>
            <div className="p-8 sm:p-12 liquid-glass rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(255,20,147,0.1)] hover:border-brand-magenta/30">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-magenta to-brand-accent transition-all duration-700 ease-out group-hover:w-full rounded-t-3xl" />
              <div className="absolute top-8 right-8 w-16 h-16 bg-brand-magenta/20 blur-xl rounded-full group-hover:bg-brand-magenta/30 transition-colors" />
              <h2 className="text-xs font-bold tracking-widest uppercase text-brand-magenta mb-8 border-b border-white/10 pb-4">
                02 — Our Vision
              </h2>
              <p className="text-white text-xl font-light leading-relaxed">
                A world where businesses of all sizes leverage intelligent
                automation to operate at peak efficiency — where human talent is
                amplified by AI, not replaced by it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-20 max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent to-brand-cyan/50 grow" />
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight text-center px-4">
              Core Principles
            </h2>
            <div className="h-px bg-gradient-to-l from-transparent to-brand-cyan/50 grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="liquid-glass rounded-2xl p-8 sm:p-12 group hover:border-brand-cyan/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-cyan/10 blur-2xl rounded-full group-hover:bg-brand-cyan/20 transition-colors" />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white/60 to-white/20 font-display text-4xl font-bold mb-6 block group-hover:from-brand-cyan group-hover:to-brand-accent transition-all">0{i + 1}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                  {v.title}
                </h3>
                <p className="text-brand-muted text-lg font-light leading-relaxed group-hover:text-white/90 transition-colors relative z-10">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-24 justify-center">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight text-center">
              Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
            {/* Founder */}
            <div className="group flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan to-transparent rounded-full opacity-50 blur-lg group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 border-2 border-brand-cyan/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 border border-white/20 rounded-full" />
                <div className="absolute inset-0 m-4 flex items-center justify-center liquid-glass rounded-full text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-white font-display text-5xl font-bold shadow-inner">
                  SK
                </div>
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                Sushanth Kasturi
              </h3>
              <p className="inline-block px-4 py-1 liquid-glass rounded-full text-brand-cyan text-xs tracking-widest uppercase font-bold mb-6 border border-brand-cyan/20">
                Founder
              </p>
              <p className="text-brand-muted leading-relaxed font-light text-lg max-w-md">
                A visionary leader with a passion for building scalable AI
                solutions. Sushanth drives the strategic direction of AvlokAI,
                ensuring every product delivers measurable business impact and
                positions clients ahead of the automation curve.
              </p>
            </div>

            {/* Co-Founder */}
            <div className="group flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-magenta to-transparent rounded-full opacity-50 blur-lg group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 border-2 border-brand-magenta/30 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                <div className="absolute inset-2 border border-white/20 rounded-full" />
                <div className="absolute inset-0 m-4 flex items-center justify-center liquid-glass rounded-full text-transparent bg-clip-text bg-gradient-to-br from-brand-magenta to-white font-display text-5xl font-bold shadow-inner">
                  R
                </div>
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-brand-magenta transition-colors">
                Rohith
              </h3>
              <p className="inline-block px-4 py-1 liquid-glass rounded-full text-brand-magenta text-xs tracking-widest uppercase font-bold mb-6 border border-brand-magenta/20">
                Co-Founder
              </p>
              <p className="text-brand-muted leading-relaxed font-light text-lg max-w-md">
                Passionate about leveraging AI and automation to solve real
                business problems. With a background in software engineering and
                a deep obsession with operational efficiency, Rohith architects
                the systems that power AvlokAI's automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
