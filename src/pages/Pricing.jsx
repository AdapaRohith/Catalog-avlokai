import PricingCard from "../components/PricingCard";
import Reveal from "../components/Reveal";
import { TransitionLink } from "../components/TransitionLink";

const plans = [
  {
    name: "Launch",
    kicker: "Fast launch",
    description: "Perfect when you want one high-impact system live fast.",
    price: "INR 15,000+",
    billingNote: "Get a sharper offer, better conversion, and a faster path to revenue.",
    cta: "Choose Launch",
    features: [
      "One scoped automation or front-end experience",
      "Design direction and implementation",
      "Core integration setup",
      "Testing and release support",
      "Short post-launch optimization window",
    ],
  },
  {
    name: "Growth",
    kicker: "Best seller",
    description: "Best for businesses ready to upgrade customer experience, conversion, and automation together.",
    price: "INR 50,000+",
    billingNote: "Build the full growth engine, not just another isolated tool.",
    cta: "Choose Growth",
    features: [
      "High-converting customer journey",
      "Interaction and motion system",
      "CRM, automation, or assistant integration",
      "Content architecture and positioning support",
      "Launch tuning and performance refinement",
    ],
  },
  {
    name: "Signature",
    kicker: "Custom scale",
    description: "For businesses that want a premium digital advantage competitors cannot copy.",
    price: "Custom scope",
    billingNote: "Ideal for custom AI, deeper automation, and long-term growth infrastructure.",
    cta: "Choose Signature",
    features: [
      "Custom AI workflow architecture",
      "Private tools or admin layers",
      "Cross-system automation design",
      "Operational documentation and training",
      "Longer optimization partnership",
    ],
  },
];

const comparisonRows = [
  { feature: "Best for", launch: "One winning system", growth: "Full growth engine", signature: "Market-leading build" },
  { feature: "Design impact", launch: "Sharp", growth: "Premium", signature: "Elite" },
  { feature: "Automation power", launch: "Focused", growth: "Multi-step", signature: "Advanced" },
  { feature: "Speed", launch: "Fast", growth: "Strong momentum", signature: "Custom roadmap" },
  { feature: "Growth support", launch: "Short boost", growth: "Extended", signature: "Ongoing" },
];

const faqs = [
  {
    question: "Can we start with one system and expand later?",
    answer: "Yes. Start with the fastest win now, then scale into a bigger growth system when you are ready.",
  },
  {
    question: "Do you handle both design and implementation?",
    answer: "Yes. You get design, build, motion, and automation in one focused engagement.",
  },
  {
    question: "Will this keep paying off after launch?",
    answer: "Yes. The goal is not just a prettier interface. The goal is more leads, smoother follow-up, and a stronger business every day after launch.",
  },
];

export default function Pricing() {
  return (
    <div className="page-shell pb-10">
      <section className="site-container py-6 sm:py-10">
        <Reveal>
          <div className="glass-panel-strong rounded-[36px] px-6 py-8 sm:px-10 sm:py-10">
            <h1 className="max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
              Choose the package that gets you to growth faster.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Whether you need one sharp launch or a full premium growth system, we build for speed, polish, and conversion.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} highlighted={index === 1} />
          ))}
        </div>
      </section>

      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="catalog-card overflow-hidden p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-white">Compare your fastest path to growth.</h2>
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.04] text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  <div className="px-4 py-4">Capability</div>
                  <div className="px-4 py-4 text-center">Launch</div>
                  <div className="px-4 py-4 text-center">Growth</div>
                  <div className="px-4 py-4 text-center">Signature</div>
                </div>
                {comparisonRows.map((row) => (
                  <div key={row.feature} className="grid grid-cols-4 border-b border-white/10 last:border-b-0">
                    <div className="px-4 py-4 text-sm font-semibold text-white">{row.feature}</div>
                    <div className="px-4 py-4 text-center text-sm text-slate-300">{row.launch}</div>
                    <div className="bg-[rgba(153,225,255,0.06)] px-4 py-4 text-center text-sm font-semibold text-white">{row.growth}</div>
                    <div className="px-4 py-4 text-center text-sm text-slate-300">{row.signature}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-white">Every package is built to win.</h2>
              <div className="grid gap-4">
                {[ 
                  "Sharper positioning that sells faster",
                  "Premium execution across devices",
                  "Smooth motion that makes the business feel more premium",
                  "A clear next step for growth after launch",
                ].map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-base leading-7 text-slate-200">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-3xl font-semibold text-white">What clients usually ask.</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="glass-panel-strong flex h-full flex-col justify-between rounded-[36px] p-6 sm:p-8">
              <div>
                <h2 className="max-w-xl text-4xl font-semibold text-white">Ready to invest in the upgrade your business deserves?</h2>
                <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
                  Pick the package that matches your ambition and let&apos;s build the system that gets you more attention, more leads, and more momentum.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <TransitionLink to="/contact" className="button-primary">
                  Start your project
                </TransitionLink>
                <TransitionLink to="/services" className="button-secondary">
                  Browse services
                </TransitionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
