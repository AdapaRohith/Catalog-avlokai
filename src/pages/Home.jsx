import { Link } from "react-router-dom";
import { useState } from "react";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import PricingCard from "../components/PricingCard";

const features = [
  {
    title: "Save Time",
    description:
      "Eliminate repetitive manual tasks. Our automation systems run 24/7 so your team can focus on high-impact work that actually moves the needle.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Reduce Costs",
    description:
      "Cut operational expenses by automating workflows that previously required full-time staff. Do more with less — intelligently.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Increase Efficiency",
    description:
      "Streamline every process from lead capture to customer support. AI-powered systems learn, adapt, and improve over time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with automation.",
    price: "₹15,000",
    features: [
      "1 automation workflow",
      "Basic CRM integration",
      "Email support",
      "Monthly performance report",
      "Up to 1,000 automated actions/mo",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    description: "For growing teams that need multiple connected automations.",
    price: "₹50,000",
    features: [
      "Up to 5 automation workflows",
      "Advanced CRM + marketing integration",
      "AI chatbot (1 channel)",
      "Priority email & chat support",
      "Weekly performance reports",
      "Up to 10,000 automated actions/mo",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Enterprise",
    description: "Full-scale automation infrastructure for established businesses.",
    price: "Custom",
    features: [
      "Unlimited automation workflows",
      "Full-stack integrations",
      "Multi-channel AI chatbot",
      "Dedicated account manager",
      "Custom analytics dashboards",
      "Unlimited automated actions",
      "24/7 priority support",
    ],
    cta: "Contact Us",
  },
];

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

const initialForm = { name: "", email: "", businessType: "", message: "" };

export default function Home() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-stone-900 to-stone-900 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-40 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 fade-in-up">
            Automate. Simplify.{" "}
            <span className="text-emerald-400">Scale.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-400 mb-10 fade-in-up" style={{ animationDelay: "0.15s" }}>
            We build AI-powered automation systems for modern businesses — so you
            can focus on growth while intelligent systems handle the rest.
          </p>
          <a
            href="#services"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            View Services
          </a>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="max-w-2xl mx-auto text-stone-400 text-lg">
              We design and deploy intelligent automation systems that eliminate
              busywork, connect your tools, and give your team superpowers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 text-center transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.12)] hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-stone-400 text-lg">
              From website automation to AI chatbots — production-ready systems
              that plug into your workflow and deliver value from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-all duration-200"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-2xl mx-auto text-stone-400 text-lg">
              Choose a plan that fits your business. Scale up anytime as your
              automation needs grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} highlighted={i === 1} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/pricing"
              className="inline-block border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-all duration-200"
            >
              View Full Pricing Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About <span className="text-emerald-400">AvlokAI</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              AvlokAI is an automation-first technology studio that helps
              businesses eliminate manual bottlenecks through AI-powered systems.
              We believe every repetitive process can — and should — be automated.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
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

          {/* Team */}
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-400 text-2xl font-bold">SK</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Sushanth Kasturi</h4>
              <p className="text-emerald-400 text-sm font-medium mb-3">Founder</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                A visionary leader with a passion for building scalable AI
                solutions that deliver measurable business impact.
              </p>
            </div>
            <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-400 text-2xl font-bold">R</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Rohith</h4>
              <p className="text-emerald-400 text-sm font-medium mb-3">Co-Founder</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Passionate about leveraging AI and automation to solve real
                business problems and architect intelligent systems.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-block border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-all duration-200"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let's Talk Automation
              </h2>
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
            {submitted ? (
              <div className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-stone-400 mb-6">
                  Thank you, {form.name}. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setForm(initialForm); setSubmitted(false); }}
                  className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-stone-800 border border-stone-700/60 rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label htmlFor="home-name" className="block text-sm font-medium text-stone-300 mb-1.5">Full Name</label>
                  <input id="home-name" name="name" type="text" required value={form.name} onChange={handleChange}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-sm font-medium text-stone-300 mb-1.5">Email Address</label>
                  <input id="home-email" name="email" type="email" required value={form.email} onChange={handleChange}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="home-biz" className="block text-sm font-medium text-stone-300 mb-1.5">Business Type</label>
                  <select id="home-biz" name="businessType" required value={form.businessType} onChange={handleChange}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all">
                    <option value="" disabled>Select your industry</option>
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
                  <label htmlFor="home-msg" className="block text-sm font-medium text-stone-300 mb-1.5">Message</label>
                  <textarea id="home-msg" name="message" required rows={5} value={form.message} onChange={handleChange}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                    placeholder="Tell us about your project or the challenges you're facing..." />
                </div>
                <button type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-all duration-200"
            >
              Go to Contact Page →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-xl mx-auto text-stone-400 text-lg mb-8">
            Let us show you exactly how automation can save your team 20+ hours
            per week. No obligations — just a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
