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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen text-warm-text flex items-center justify-center">
        <section className="py-20 px-4 w-full">
          <div className="max-w-lg mx-auto text-center warm-card rounded-2xl p-10">
            <div className="w-16 h-16 rounded-full bg-warm-accent/15 border-2 border-warm-accent/30 flex items-center justify-center mx-auto mb-8">
              <svg className="w-7 h-7 text-warm-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              Message Received!
            </h1>
            <p className="text-warm-muted text-base mb-8">
              Thanks, <span className="text-warm-accent font-medium">{form.name}</span>. We'll review your message and get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setForm(initialForm);
                setSubmitted(false);
              }}
              className="text-warm-accent hover:text-warm-accent-soft font-bold text-sm transition-colors inline-flex items-center gap-2"
            >
              Send another message <span>→</span>
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-warm-text">
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 relative z-10">

            {/* Info */}
            <div className="fade-in-up delay-100">

              <h1 className="text-5xl sm:text-6xl font-display font-extrabold text-white mb-6 tracking-tight fade-in-up delay-200">
                Let's build
                <br />
                <span className="text-warm-gradient">something great</span>
              </h1>
              <p className="text-warm-muted text-lg leading-relaxed mb-12 fade-in-up delay-300">
                Tell us about your business and what you'd like to automate.
                We'll get back to you within 24 hours with a plan.
              </p>

              <div className="space-y-8 fade-in-up delay-400">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl warm-surface flex items-center justify-center text-warm-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-warm-subtle mb-1">Email</h3>
                    <a href="mailto:avlokbusiness@gmail.com" className="text-white text-base hover:text-warm-accent transition-colors">
                      avlokbusiness@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl warm-surface flex items-center justify-center text-warm-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-warm-subtle mb-1">Phone</h3>
                    <a href="tel:+919346672015" className="text-white text-base hover:text-warm-accent transition-colors">
                      +91 9346672015
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl warm-surface flex items-center justify-center text-warm-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-warm-subtle mb-1">Location</h3>
                    <span className="text-white text-base">
                      Remote — Serving clients worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="fade-in-up delay-300">
              <form
                onSubmit={handleSubmit}
                className="warm-card rounded-2xl p-8 sm:p-10"
              >
                <h2 className="text-xl font-display font-bold text-white mb-8">
                  Send us a message
                </h2>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-warm-subtle mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-warm-border rounded-xl px-4 py-3.5 text-white placeholder-warm-subtle focus:outline-none focus:border-warm-accent focus:bg-white/10 transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-warm-subtle mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-warm-border rounded-xl px-4 py-3.5 text-white placeholder-warm-subtle focus:outline-none focus:border-warm-accent focus:bg-white/10 transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-xs font-bold tracking-widest uppercase text-warm-subtle mb-2">
                      Business Type
                    </label>
                    <div className="relative">
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={form.businessType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-warm-border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-warm-accent focus:bg-white/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-warm-bg text-warm-subtle">Select your industry</option>
                        <option value="ecommerce" className="bg-warm-bg">E-Commerce</option>
                        <option value="saas" className="bg-warm-bg">SaaS</option>
                        <option value="agency" className="bg-warm-bg">Agency</option>
                        <option value="healthcare" className="bg-warm-bg">Healthcare</option>
                        <option value="finance" className="bg-warm-bg">Finance</option>
                        <option value="education" className="bg-warm-bg">Education</option>
                        <option value="other" className="bg-warm-bg">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-warm-subtle">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-warm-subtle mb-2">
                      How Can We Help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-warm-border rounded-xl p-4 text-sm text-white placeholder-warm-subtle focus:outline-none focus:border-warm-accent focus:bg-white/10 transition-all resize-none"
                      placeholder="Tell us about your business and what you'd like to automate..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-warm-accent hover:bg-warm-highlight text-stone-900 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 mt-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
