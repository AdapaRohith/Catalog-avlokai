import { Link } from "react-router-dom";
import { useState } from "react";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import PricingCard from "../components/PricingCard";

const features = [
  {
    title: "Time is Asymmetric",
    description:
      "Eliminate manual loops. Our systems operate continuously, creating leverage that allows your team to focus exclusively on strategic execution.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="url(#gradient-icon)" strokeWidth={1.5} viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gradient-icon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-cyan)" />
            <stop offset="50%" stopColor="var(--color-brand-accent)" />
            <stop offset="100%" stopColor="var(--color-brand-magenta)" />
          </linearGradient>
        </defs>
        <path strokeLinecap="square" d="M12 6v6h6" />
        <circle cx="12" cy="12" r="10" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    title: "Surgical Precision",
    description:
      "Cut operational drag. We deploy intelligent workflows that execute complex tasks with higher fidelity and zero variance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="url(#gradient-icon)" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="square" d="M4 4h16v16H4zM4 10h16M10 4v16" />
      </svg>
    ),
  },
  {
    title: "Terminal Velocity",
    description:
      "Scale without linear headcount scaling. Our AI architectures adapt and optimize, perpetually increasing throughput.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="url(#gradient-icon)" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="square" d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: "Foundation",
    description: "Initial automation architecture for emerging operations.",
    price: "₹15,000",
    features: [
      "1 Core sequence",
      "Standard telemetry",
      "Asynchronous support",
      "Monthly audit",
      "1,000 compute cycles/mo",
    ],
    cta: "Initiate Base",
  },
  {
    name: "Velocity",
    description: "Multi-node connected intelligence for scaling systems.",
    price: "₹50,000",
    features: [
      "5 Core sequences",
      "Advanced telemetry + routing",
      "Initial AI node (1 channel)",
      "Priority bandwidth",
      "Weekly audits",
      "10,000 compute cycles/mo",
    ],
    cta: "Engage Velocity",
  },
  {
    name: "Apex",
    description: "Limitless operational infrastructure for established entities.",
    price: "Custom",
    features: [
      "Unrestricted sequences",
      "Full-stack autonomous systems",
      "Multi-node AI deployment",
      "Direct engineer access",
      "Real-time command center",
      "Infinite compute cycles",
      "Zero-latency support",
    ],
    cta: "Request Architecture",
  },
];

const values = [
  {
    title: "Empirical Output",
    description: "We index on measurable leverage, not theoretical complexity. If it doesn't move the needle, we don't build it.",
  },
  {
    title: "Bespoke Architecture",
    description: "Zero templates. Every system is a tailored solution engineered specifically for your organizational topology.",
  },
  {
    title: "Continuous Optimization",
    description: "Deployment is day zero. We monitor, refine, and upgrade systems to maintain peak efficiency.",
  },
  {
    title: "Infinite Scale",
    description: "Our architectures are built on modern, composable primitives that handle 10x growth without breaking sweat.",
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
    <div className="flex flex-col gap-32 pb-32">
      {/* ─── HERO ─── */}
      <section id="home" className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-brand-magenta/10 via-brand-cyan/5 to-brand-accent/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-12 fade-in-up delay-100">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <p className="text-white/80 font-bold tracking-[0.2em] uppercase text-xs">
              System Initialization // 01
            </p>
          </div>

          <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-white mb-10 w-full max-w-6xl fade-in-up delay-200">
            ENGINEERED<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta animate-pulse-slow">
              LEVERAGE.
            </span>
          </h1>
          <div className="flex flex-col items-center w-full pt-10 fade-in-up delay-300">
            <p className="text-lg md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed text-center mb-12">
              We architect autonomous systems that eliminate operational drag. Replace manual chaotic workflows with silent, infinite scalability.
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <Link
                to="/services"
                className="group relative px-8 py-4 overflow-hidden rounded-lg font-bold uppercase tracking-[0.1em] text-sm text-white hover-lift"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-magenta transition-opacity group-hover:opacity-90" />
                <span className="relative z-10 text-white drop-shadow-md">Access Catalog</span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg liquid-glass text-white font-bold uppercase tracking-[0.1em] text-sm hover:text-brand-cyan transition-colors duration-300 hover-lift"
              >
                Initiate Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto pt-8">
          <div className="flex flex-col md:flex-row gap-12 justify-between mb-16 items-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase shrink-0 text-white">
              The Protocol
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed border-l-2 border-brand-accent pl-8">
              We view businesses as systems of equations. We locate the inefficiencies, design the automation architecture, and deploy intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="liquid-glass rounded-2xl p-10 group hover:border-brand-cyan/50 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-magenta/10 rounded-bl-full blur-2xl group-hover:bg-brand-cyan/20 transition-colors duration-500" />
                <div className="mb-12 relative z-10">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-brand-muted text-base leading-relaxed font-light">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="px-6 md:px-12 relative">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto pt-16">
          <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full liquid-glass mb-6">
                <p className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-xs text-glow">
                  Capabilities // 02
                </p>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter uppercase text-white">
                Active Catalog
              </h2>
            </div>
            <Link
              to="/services"
              className="group text-white/70 hover:text-white uppercase tracking-widest text-sm font-bold transition-colors flex items-center gap-3 bg-white/5 py-3 px-6 rounded-full border border-white/10 hover:border-brand-magenta/50"
            >
              View Directory
              <span className="text-brand-magenta group-hover:text-brand-cyan transition-colors">→</span>
            </Link>
          </div>

          {/* Changed mapping to map to new glassy ServiceCards or custom inline cards if needed, but going to render inline here to guarantee the bento layout logic cleanly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <Link
                to={`/services/${service.id}`}
                key={service.id}
                className={`liquid-glass rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-500 overflow-hidden relative ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <p className="text-brand-muted font-display font-bold text-xs tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">
                  0{index + 1}
                </p>
                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                  {service.name}
                </h3>
                <p className="text-brand-muted text-lg font-light max-w-sm mb-12">
                  {service.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.deliverables?.slice(0, 3).map(deliverable => (
                    <span key={deliverable} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-black/40 text-brand-accent group-hover:border-brand-accent/50 transition-colors">
                      {deliverable}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto pt-24">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full liquid-glass mb-6">
              <p className="text-brand-magenta font-bold tracking-[0.2em] uppercase text-xs text-glow">
                Acquisition // 03
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-white text-gradient">
              Investment Tiers
            </h2>
            <p className="text-white/60 text-xl max-w-2xl font-light">
              Transparent, high-leverage capital allocation for autonomous infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => {
              const isMiddle = i === 1;
              return (
                <div key={plan.name} className={`rounded-3xl p-10 flex flex-col relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${isMiddle ? 'border border-brand-cyan bg-white/5 shadow-[0_0_40px_rgba(0,255,255,0.15)]' : 'liquid-glass'}`}>
                  {isMiddle && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-magenta" />
                  )}
                  <h3 className="font-display text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-brand-muted text-sm font-light h-10 mb-8 pb-8 border-b border-white/10">{plan.description}</p>

                  <div className="mb-10">
                    <span className={`font-display text-5xl font-extrabold ${isMiddle ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent' : 'text-white'}`}>{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-white/50 text-xl font-light ml-2">/mo</span>}
                  </div>

                  <ul className="space-y-4 mb-12 flex-1">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex gap-3 text-white/80 font-light text-sm items-center">
                        <span className={isMiddle ? 'text-brand-cyan' : 'text-white/40'}>■</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-center transition-all duration-300 ${isMiddle ? 'bg-gradient-to-r from-brand-cyan to-brand-accent text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]' : 'bg-white/10 hover:bg-white border border-white/10 hover:text-black text-white'}`}>
                    {plan.cta}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="px-6 md:px-12 my-12">
        <div className="max-w-7xl mx-auto liquid-glass rounded-[40px] p-10 md:p-24 relative overflow-hidden">
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-[600px] bg-gradient-to-tl from-brand-accent/20 via-brand-magenta/10 to-transparent blur-[100px] rounded-full pointer-events-none" />

          <div className="mb-24 relative z-10">
            <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-10 text-white">
              The Studio
            </h2>
            <p className="text-white/80 text-2xl md:text-4xl font-light leading-tight max-w-4xl border-l-4 border-brand-magenta pl-8">
              AvlokAI is an engineering collective dedicated to the absolute elimination of operational friction. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta font-bold">We believe bandwidth is sacred.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 relative z-10 border-t border-white/10 pt-20">
            {values.map((v, i) => (
              <div key={v.title} className="group">
                <p className="text-brand-accent font-bold tracking-[0.2em] mb-4 text-xs font-display flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-brand-accent" />
                  0{i + 1}
                </p>
                <h3 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight text-white group-hover:text-brand-magenta transition-colors">
                  {v.title}
                </h3>
                <p className="text-brand-muted text-lg font-light leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
            {/* Info */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full liquid-glass mb-8">
                <p className="text-[var(--color-brand-accent)] font-bold tracking-[0.3em] uppercase text-xs">
                  Comms // 04
                </p>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 text-white">
                Initiate<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-magenta">Sequence</span>
              </h2>
              <p className="text-brand-muted text-xl leading-relaxed mb-12 font-light">
                Submit your parameters. We run asynchronous operations to review your constraints and respond with an architectural proposal.
              </p>

              <div className="space-y-8 p-8 liquid-glass rounded-2xl">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded bg-brand-cyan"></span> Direct Channel</p>
                  <a href="mailto:avlokbusiness@gmail.com" className="text-xl text-white hover:text-brand-cyan transition-colors block font-display">avlokbusiness@gmail.com</a>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded bg-brand-magenta"></span> Voice Channel</p>
                  <a href="tel:+919346672015" className="text-xl text-white hover:text-brand-magenta transition-colors block font-display">+91 9346672015</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 liquid-glass rounded-[32px] p-8 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[80px] rounded-full pointer-events-none" />
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[500px]">
                  <div className="w-24 h-24 mb-10 rounded-full border border-brand-cyan flex items-center justify-center bg-brand-cyan/10 accent-glow">
                    <svg className="w-10 h-10 text-brand-cyan" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-4xl font-bold uppercase tracking-tight mb-4 text-white">Received</h3>
                  <p className="text-brand-muted text-lg mb-12 font-light max-w-sm">
                    Parameters acknowledged, {form.name}. Our systems are processing your coordinates now.
                  </p>
                  <button
                    onClick={() => { setForm(initialForm); setSubmitted(false); }}
                    className="text-brand-accent hover:text-white uppercase tracking-[0.2em] text-sm font-bold transition-colors flex items-center gap-2"
                  >
                    Transmit Again <span>→</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="group">
                      <label htmlFor="home-name" className="block text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4 group-focus-within:text-brand-cyan transition-colors">Operator Name</label>
                      <input id="home-name" name="name" type="text" required value={form.name} onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan focus:bg-white/5 transition-all"
                        placeholder="John Doe" />
                    </div>
                    <div className="group">
                      <label htmlFor="home-email" className="block text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4 group-focus-within:text-brand-cyan transition-colors">Return Vector (Email)</label>
                      <input id="home-email" name="email" type="email" required value={form.email} onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan focus:bg-white/5 transition-all"
                        placeholder="john@entity.com" />
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="home-biz" className="block text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4 group-focus-within:text-brand-cyan transition-colors">Entity Classification</label>
                    <select id="home-biz" name="businessType" required value={form.businessType} onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 px-5 py-4 rounded-xl text-white focus:outline-none focus:border-brand-cyan focus:bg-white/5 transition-all appearance-none cursor-pointer">
                      <option value="" disabled className="bg-black text-white/50">Select category</option>
                      <option value="ecommerce" className="bg-[#0B0B1A]">Digital Commerce</option>
                      <option value="saas" className="bg-[#0B0B1A]">Software (SaaS)</option>
                      <option value="agency" className="bg-[#0B0B1A]">Agency / Services</option>
                      <option value="healthcare" className="bg-[#0B0B1A]">Healthcare</option>
                      <option value="finance" className="bg-[#0B0B1A]">Financial</option>
                      <option value="other" className="bg-[#0B0B1A]">Other Vector</option>
                    </select>
                  </div>
                  <div className="group">
                    <label htmlFor="home-msg" className="block text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4 group-focus-within:text-brand-cyan transition-colors">Operational Parameters</label>
                    <textarea id="home-msg" name="message" required rows={5} value={form.message} onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan focus:bg-white/5 transition-all resize-none"
                      placeholder="Specify the friction points you need eliminated..." />
                  </div>
                  <button type="submit"
                    className="group relative w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 font-bold uppercase tracking-[0.2em] text-sm py-6 text-white hover:border-transparent transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 group-hover:drop-shadow-md">Execute Transmission</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
