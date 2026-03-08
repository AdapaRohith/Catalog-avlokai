import { useState } from "react";

const initialForm = { name: "", email: "", businessType: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would POST to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen text-brand-text relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-brand-cyan/20 to-brand-magenta/20 blur-[150px] rounded-full pointer-events-none -z-10" />
        <section className="relative py-20 sm:py-24 z-10 w-full px-4">
          <div className="max-w-xl mx-auto text-center liquid-glass rounded-3xl p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta" />

            <div className="w-20 h-20 rounded-full border border-brand-cyan/30 flex items-center justify-center mx-auto mb-10 relative bg-brand-cyan/5">
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-md animate-pulse" />
              <svg className="w-8 h-8 text-brand-cyan relative z-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 uppercase tracking-wider drop-shadow-md">Transmission Received</h1>
            <p className="text-brand-muted text-lg font-light mb-12 leading-relaxed">
              System acknowledged, <span className="text-brand-cyan font-medium">{form.name}</span>. Our team will review your parameters and initiate contact within 24 hours.
            </p>
            <button
              onClick={() => {
                setForm(initialForm);
                setSubmitted(false);
              }}
              className="group inline-flex items-center gap-3 border-b border-brand-cyan/30 pb-1 hover:border-brand-magenta transition-colors text-sm font-bold uppercase tracking-widest text-brand-cyan hover:text-brand-magenta"
            >
              <span>Initialize New Sequence</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-brand-text relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-cyan/15 via-brand-accent/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-gradient-to-tr from-brand-magenta/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

            {/* Info */}
            <div className="fade-in-up delay-100">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <p className="text-white/80 font-bold tracking-[0.2em] uppercase text-xs">
                  System Initialization
                </p>
              </div>
              <h1 className="text-5xl sm:text-7xl font-display font-black text-white mb-6 uppercase tracking-tighter fade-in-up delay-200">
                Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Sequence</span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-magenta" />
              </div>
              <p className="text-brand-muted text-xl font-light leading-relaxed mb-16 fade-in-up delay-300">
                Establish a direct line with our engineering team to architect
                the automation protocol suited for your operational scale.
              </p>

              <div className="space-y-10 fade-in-up delay-400">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl liquid-glass flex items-center justify-center text-brand-cyan shrink-0 group-hover:border-brand-cyan/50 group-hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Electronic</h3>
                    <a href="mailto:avlokbusiness@gmail.com" className="text-white text-lg font-light hover:text-brand-cyan transition-colors block">
                      avlokbusiness@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl liquid-glass flex items-center justify-center text-brand-accent shrink-0 group-hover:border-brand-accent/50 group-hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,170,0,0.1)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Vocal Link</h3>
                    <a href="tel:+919346672015" className="text-white text-lg font-light hover:text-brand-accent transition-colors block">
                      +91 9346672015
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl liquid-glass flex items-center justify-center text-brand-magenta shrink-0 group-hover:border-brand-magenta/50 group-hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(255,20,147,0.1)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Coordinates</h3>
                    <span className="text-white text-lg font-light block">
                      Remote Protocol — Global Service Range
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="fade-in-up delay-300">
              <form
                onSubmit={handleSubmit}
                className="liquid-glass rounded-3xl p-8 sm:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 blur-3xl rounded-full pointer-events-none" />

                <h2 className="text-2xl font-display font-bold text-white mb-10 uppercase tracking-tight">
                  Configure Transmission
                </h2>

                <div className="space-y-8 relative z-10">
                  <div className="relative group">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all font-light"
                      placeholder="Identify"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-2.5 bg-brand-bg px-2 text-xs font-bold tracking-widest uppercase text-brand-cyan transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-brand-bg peer-focus:text-brand-cyan cursor-text"
                    >
                      Identification
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all font-light"
                      placeholder="Contact Relays"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2.5 bg-brand-bg px-2 text-xs font-bold tracking-widest uppercase text-brand-cyan transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-brand-bg peer-focus:text-brand-cyan cursor-text"
                    >
                      Contact Relay (Email)
                    </label>
                  </div>

                  <div className="relative pt-2">
                    <label htmlFor="businessType" className="block text-xs font-bold tracking-widest uppercase text-brand-cyan mb-3 pl-2">
                      Operational Sector
                    </label>
                    <div className="relative">
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={form.businessType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm font-light text-white focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-brand-bg text-white/40">Select infrastructure type</option>
                        <option value="ecommerce" className="bg-brand-bg">E-Commerce</option>
                        <option value="saas" className="bg-brand-bg">SaaS</option>
                        <option value="agency" className="bg-brand-bg">Agency</option>
                        <option value="healthcare" className="bg-brand-bg">Healthcare</option>
                        <option value="finance" className="bg-brand-bg">Finance</option>
                        <option value="education" className="bg-brand-bg">Education</option>
                        <option value="other" className="bg-brand-bg">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-cyan">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative pt-2">
                    <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-brand-cyan mb-3 pl-2">
                      Transmission Data
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-light text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all resize-none"
                      placeholder="Detail your system requirements or automation objectives..."
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white/5 border border-white/10 font-bold tracking-widest uppercase px-8 py-5 text-white hover:border-transparent transition-all duration-300 hover-lift shadow-[0_0_30px_rgba(0,255,255,0.1)] focus:outline-none"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center gap-3">
                        <span>Transmit Data</span>
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full group-hover:bg-white group-hover:animate-pulse transition-colors" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
