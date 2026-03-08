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
    <div className="min-h-screen text-brand-text relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-accent/20 via-brand-magenta/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 mx-auto fade-in-up delay-100">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <p className="text-white/80 font-bold tracking-[0.2em] uppercase text-xs">
                Capital Allocation
              </p>
            </div>

            <h1 className="text-5xl sm:text-7xl font-display font-black text-white mb-6 uppercase tracking-tighter fade-in-up delay-200">
              Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta">Tiers</span>
            </h1>
            <p className="max-w-2xl mx-auto text-brand-muted text-xl sm:text-2xl font-light leading-relaxed fade-in-up delay-300">
              Choose an infrastructure scale that fits your operational demands. Every tier includes setup,
              strategic onboarding, and continuous optimization.
            </p>
          </div>
          <div className="flex justify-center mb-24 fade-in-up delay-400">
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-brand-accent/50 bg-brand-accent/10 rounded-full shadow-[0_0_20px_rgba(255,170,0,0.2)]">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              <p className="text-xs uppercase tracking-widest text-brand-accent font-bold">
                Annual billing available at 15% discount
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} highlighted={i === 1} />
            ))}
          </div>

          <p className="text-center text-brand-muted font-light text-lg mt-24 max-w-lg mx-auto">
            Require a specialized architecture?{" "}
            <Link to="/contact" className="text-brand-magenta hover:text-brand-cyan transition-colors font-medium border-b border-brand-magenta/30 hover:border-brand-cyan/50 pb-0.5">
              Initiate a consult
            </Link>{" "}
            and we'll draft a custom protocol for your organization.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-20 max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent to-brand-cyan/50 grow" />
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight text-center px-4">
              Universal Inclusions
            </h2>
            <div className="h-px bg-gradient-to-l from-transparent to-brand-cyan/50 grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Discovery & Strategy", desc: "We audit your workflows and trace the highest-impact automation vectors." },
              { title: "Custom Architecture", desc: "Purpose-built engineering for your operational models—no generic templates." },
              { title: "Testing Protocol", desc: "Exhaustive end-to-end simulation in staging prior to production launch." },
              { title: "Active Optimization", desc: "Continuous monitoring, telemetry, and refinement to maximize ROI." },
            ].map((item, index) => (
              <div key={item.title} className="group relative liquid-glass rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 hover:border-brand-cyan/50">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-cyan/20 to-brand-magenta/20 rounded-full blur-xl group-hover:bg-brand-cyan/40 transition-colors duration-500" />
                <span className="text-brand-magenta text-xs font-bold tracking-widest mb-6 block uppercase border-b border-white/10 pb-4">
                  Phase 0{index + 1}
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-magenta/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
              System Specifications
            </h2>
            <div className="h-px bg-gradient-to-r from-brand-magenta/50 to-transparent grow" />
          </div>

          <div className="overflow-x-auto rounded-3xl liquid-glass border border-white/10">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-8 px-6 font-bold tracking-widest uppercase text-brand-muted text-xs w-1/4">Metric</th>
                  <th className="py-8 px-6 font-bold tracking-widest uppercase text-white text-xs text-center w-1/4">Starter</th>
                  <th className="py-8 px-6 font-bold tracking-widest uppercase text-brand-cyan text-xs text-center w-1/4 border-x border-white/10 bg-brand-cyan/5">Growth</th>
                  <th className="py-8 px-6 font-bold tracking-widest uppercase text-white text-xs text-center w-1/4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.05] transition-colors group">
                    <td className="py-6 px-6 text-white font-medium group-hover:text-brand-cyan transition-colors">{row.feature}</td>
                    <td className="py-6 px-6 text-center text-brand-muted font-light">{row.starter}</td>
                    <td className="py-6 px-6 text-center text-brand-cyan font-bold border-x border-white/10 bg-brand-cyan/5 group-hover:bg-brand-cyan/10 transition-colors uppercase text-xs tracking-wider">{row.growth}</td>
                    <td className="py-6 px-6 text-center text-brand-muted font-light">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16 justify-center">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight text-center">
              Common Inquiries
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="group liquid-glass p-8 rounded-2xl hover:border-brand-magenta/40 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-cyan to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-6 items-start">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-brand-magenta font-display text-3xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                    Q{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                      {faq.q}
                    </h3>
                    <p className="text-brand-muted text-lg font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white mb-8 uppercase tracking-tighter">
            Consult the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Engineers</span>
          </h2>
          <p className="max-w-2xl mx-auto text-brand-muted text-xl font-light mb-12">
            Schedule a diagnostic session and our architects will recommend the optimal
            deployment vector based on your scale, objectives, and constraints.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white/5 border border-white/10 font-bold tracking-widest uppercase px-12 py-6 text-white hover:border-transparent transition-all duration-300 hover-lift shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:drop-shadow-md">Schedule Briefing</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
