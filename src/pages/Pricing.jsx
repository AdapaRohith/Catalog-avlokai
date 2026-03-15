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
    <div className="min-h-screen text-warm-text">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-warm-border">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-warm-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">

            <h1 className="text-5xl sm:text-6xl font-display font-extrabold text-white mb-6 tracking-tight fade-in-up delay-200">
              Plans that grow
              <br />
              <span className="text-warm-gradient">with your business</span>
            </h1>
            <p className="max-w-2xl mx-auto text-warm-muted text-lg sm:text-xl leading-relaxed fade-in-up delay-300">
              Every plan includes setup, onboarding, and ongoing optimization.
              No surprises, no hidden fees.
            </p>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} highlighted={i === 1} />
            ))}
          </div>

          <p className="text-center text-warm-muted text-base mt-16">
            Need something custom?{" "}
            <Link to="/contact" className="text-warm-accent hover:text-warm-accent-soft font-medium transition-colors">
              Let's talk
            </Link>
            {" "}and we'll put together a plan tailored to your needs.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 sm:py-28 border-b border-warm-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Included with Every Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discovery & Strategy", desc: "We audit your workflows and identify the highest-impact automation opportunities." },
              { title: "Custom Build", desc: "Purpose-built solutions for your business — no generic templates or cookie-cutter setups." },
              { title: "Testing & QA", desc: "End-to-end testing in a staging environment before anything goes live." },
              { title: "Ongoing Optimization", desc: "Continuous monitoring and refinement to keep improving your results." },
            ].map((item, index) => (
              <div key={item.title} className="warm-card rounded-2xl p-7 group">
                <span className="text-warm-accent font-display text-3xl font-extrabold opacity-30 group-hover:opacity-60 transition-opacity block mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-warm-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-warm-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28 border-b border-warm-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-12">
            Compare Plans
          </h2>

          <div className="overflow-x-auto rounded-2xl warm-surface">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-warm-border">
                  <th className="py-5 px-6 text-warm-subtle text-xs font-bold uppercase tracking-widest w-1/4">Feature</th>
                  <th className="py-5 px-6 text-white text-xs font-bold uppercase tracking-widest text-center w-1/4">Starter</th>
                  <th className="py-5 px-6 text-warm-accent text-xs font-bold uppercase tracking-widest text-center w-1/4 bg-warm-accent/5">Growth</th>
                  <th className="py-5 px-6 text-white text-xs font-bold uppercase tracking-widest text-center w-1/4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 px-6 text-white font-medium text-sm">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-warm-muted text-sm">{row.starter}</td>
                    <td className="py-4 px-6 text-center text-warm-accent font-bold text-sm bg-warm-accent/5">{row.growth}</td>
                    <td className="py-4 px-6 text-center text-warm-muted text-sm">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-b border-warm-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="warm-card p-6 rounded-xl group">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-warm-accent transition-colors">
                  {faq.q}
                </h3>
                <p className="text-warm-muted text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-warm-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Let's find the right plan for you
          </h2>
          <p className="max-w-xl mx-auto text-warm-muted text-lg mb-10">
            Schedule a free discovery call and our team will recommend the best
            setup for your business goals and budget.
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
