import { Link } from "react-router-dom";
import PricingCard from "../components/PricingCard";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses testing the power of automation.",
    price: "₹15,000",
    cta: "Get Started",
    features: [
      "1 automation workflow",
      "Basic CRM integration",
      "Email notifications setup",
      "Up to 1,000 automated actions/month",
      "Email support (48h response)",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    description: "For scaling teams that need multi-channel automation.",
    price: "₹50,000",
    cta: "Start Growing",
    features: [
      "Up to 5 automation workflows",
      "AI chatbot (1 channel)",
      "CRM + marketing tool integration",
      "Up to 10,000 automated actions/month",
      "WhatsApp Business automation",
      "Priority support (24h response)",
      "Weekly performance reports",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for organizations with complex needs.",
    price: "Custom",
    cta: "Contact Us",
    features: [
      "Unlimited automation workflows",
      "AI chatbot (multi-channel)",
      "Full-stack CRM integration",
      "Unlimited automated actions",
      "Custom AI model training",
      "Dedicated automation engineer",
      "24/7 priority support",
      "SLA-backed uptime guarantee",
      "Quarterly strategy reviews",
    ],
  },
];

const faqs = [
  {
    q: "What's included in the setup?",
    a: "Every plan includes a discovery call, custom workflow design, full implementation, testing, and team onboarding. You're production-ready from day one.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. We'll migrate your workflows seamlessly with zero downtime.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. The price you see covers everything — setup, integrations, support, and ongoing optimization. Custom API or third-party tool costs (if any) are communicated upfront.",
  },
  {
    q: "What happens if I exceed my action limit?",
    a: "We'll notify you before you hit the cap. You can either upgrade your plan or purchase additional actions at a transparent per-unit rate.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes. If you're not satisfied within the first 30 days, we'll refund your payment in full — no questions asked.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most Starter and Growth setups are live within 2–3 weeks. Enterprise projects vary based on scope, but we provide a detailed timeline upfront.",
  },
];

const comparisons = [
  { feature: "Automation Workflows", starter: "1", growth: "Up to 5", enterprise: "Unlimited" },
  { feature: "Automated Actions/mo", starter: "1,000", growth: "10,000", enterprise: "Unlimited" },
  { feature: "CRM Integration", starter: "Basic", growth: "Advanced", enterprise: "Full-stack" },
  { feature: "AI Chatbot", starter: "—", growth: "1 channel", enterprise: "Multi-channel" },
  { feature: "WhatsApp Automation", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "Support Response", starter: "48h", growth: "24h", enterprise: "Priority 24/7" },
  { feature: "Performance Reports", starter: "Monthly", growth: "Weekly", enterprise: "Real-time" },
  { feature: "Dedicated Manager", starter: "—", growth: "✓", enterprise: "✓" },
  { feature: "Custom AI Training", starter: "—", growth: "—", enterprise: "✓" },
  { feature: "SLA Guarantee", starter: "—", growth: "—", enterprise: "✓" },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="max-w-2xl mx-auto text-stone-400 text-lg">
              Choose a plan that fits your business. Every plan includes setup,
              onboarding, and ongoing optimization — no hidden fees.
            </p>
          </div>
          <p className="text-center text-stone-500 text-sm mb-14">
            All plans billed monthly. Annual billing available at 15% discount.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} highlighted={i === 1} />
            ))}
          </div>

          <p className="text-center text-stone-500 text-sm mt-10">
            Need a custom plan?{" "}
            <Link to="/contact" className="text-emerald-400 hover:underline">
              Talk to us
            </Link>{" "}
            — we'll build a package tailored to your business.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            What Every Plan Includes
          </h2>
          <p className="text-stone-400 text-center max-w-2xl mx-auto mb-12">
            Regardless of the plan you choose, you get a production-grade
            automation system built by engineers who understand business operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discovery & Strategy", desc: "We audit your workflows and identify the highest-impact automation opportunities for your business." },
              { title: "Custom Implementation", desc: "Every workflow is purpose-built for your processes — no cookie-cutter templates or generic setups." },
              { title: "Testing & QA", desc: "Rigorous end-to-end testing in staging before anything goes live. Zero surprises on launch day." },
              { title: "Ongoing Optimization", desc: "We continuously monitor, tweak, and improve your automations to maximise ROI over time." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-stone-800 border border-stone-700/60 rounded-2xl p-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            Plan Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-700/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-800 text-stone-300">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold">Starter</th>
                  <th className="text-center py-3 px-4 font-semibold text-emerald-400">Growth</th>
                  <th className="text-center py-3 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-stone-900" : "bg-stone-800/50"}
                  >
                    <td className="py-3 px-4 text-stone-300 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-stone-400">{row.starter}</td>
                    <td className="py-3 px-4 text-center text-stone-300">{row.growth}</td>
                    <td className="py-3 px-4 text-center text-stone-300">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-stone-800 border border-stone-700/60 rounded-2xl p-5"
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Which Plan Fits?
          </h2>
          <p className="max-w-xl mx-auto text-stone-400 text-lg mb-8">
            Book a free 30-minute consultation and we'll recommend the right
            setup based on your business size, goals, and budget.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
