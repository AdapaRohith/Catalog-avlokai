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
      <section className="py-20 sm:py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Message Sent!</h1>
          <p className="text-stone-400 text-lg mb-8">
            Thank you, {form.name}. We've received your message and will get back
            to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
          >
            Send another message →
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Talk Automation
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              Whether you have a specific project in mind or just want to explore
              what automation can do for your business, we'd love to hear from
              you. Fill out the form and we'll respond within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a href="mailto:avlokbusiness@gmail.com" className="text-stone-300 text-sm hover:text-emerald-400 transition-colors">avlokbusiness@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <a href="tel:+919346672015" className="text-stone-300 text-sm hover:text-emerald-400 transition-colors">+91 9346672015</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-stone-300 text-sm">Remote — serving clients globally</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-1.5">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-stone-300 mb-1.5">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={form.businessType}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
              >
                <option value="" disabled>
                  Select your industry
                </option>
                <option value="ecommerce">E-Commerce</option>
                <option value="saas">SaaS</option>
                <option value="agency">Agency</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                placeholder="Tell us about your project or the challenges you're facing..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
