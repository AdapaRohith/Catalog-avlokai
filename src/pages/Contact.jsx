import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import services from "../data/services";

const initialForm = {
  name: "",
  email: "",
  businessType: "",
  projectType: "",
  message: "",
};

const projectTracks = [
  "Book a demo",
  "Business automation",
  "Customer journey redesign",
  "AI assistant",
  "CRM workflow",
  "Custom AI system",
  "Custom solution",
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedServiceId = searchParams.get("service");
  const requestedService = services.find((service) => service.id === requestedServiceId);

  const [form, setForm] = useState(() => ({
    ...initialForm,
    projectType: requestedServiceId ? "Book a demo" : "",
    message: requestedService
      ? `I want to book a demo for ${requestedService.name}.`
      : requestedServiceId === "custom-solution"
        ? "I want to book a demo for a custom automation solution."
        : "",
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `New ${form.projectType} inquiry from ${form.name}`;
    const body = [
      "Hello AvlokAI,",
      "",
      "I want help with the following:",
      form.projectType,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Business Type: ${form.businessType}`,
      "",
      "Project Details:",
      form.message,
    ].join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@avlokai.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="page-shell pb-10">
      <Seo
        title="Contact — Book a Demo"
        description="Tell AvlokAI where your business needs leverage. Book a demo and we'll map the AI assistant, workflow, or growth system that gets you there faster. Response within 24 hours."
        path="/contact"
      />

      <section className="site-container py-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-panel-strong h-full rounded-3xl p-6 sm:p-8">
              <h1 className="max-w-xl text-4xl font-semibold text-[var(--text)] sm:text-5xl">
                Tell us where your business needs leverage.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-8 text-[var(--body)] sm:text-base">
                Share your goal and we&apos;ll map the assistant, workflow, or growth system that gets you there faster.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  { label: "Email", value: "hello@avlokai.com", href: "mailto:hello@avlokai.com" },
                  { label: "Phone", value: "+91 9346672015", href: "tel:+919346672015" },
                  { label: "Response goal", value: "Within 24 hours" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                    <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-base font-semibold text-[var(--text)] transition hover:text-[var(--brand-1)]">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-base font-semibold text-[var(--text)]">{item.value}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {projectTracks.map((track) => (
                  <span key={track} className="info-chip">
                    {track}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <form onSubmit={handleSubmit} className="catalog-card rounded-3xl p-6 sm:p-8">
              <h2 className="mb-6 text-3xl font-semibold text-[var(--text)]">Start your project</h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">Name</span>
                  <input required name="name" autoComplete="name" value={form.name} onChange={handleChange} className="field" placeholder="Your name" />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">Email</span>
                  <input required type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} className="field" placeholder="you@company.com" />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">Business type</span>
                  <input required name="businessType" autoComplete="organization" value={form.businessType} onChange={handleChange} className="field" placeholder="Agency, clinic, SaaS..." />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">Project type</span>
                  <select required name="projectType" value={form.projectType} onChange={handleChange} className="field">
                    <option value="" disabled>Select one</option>
                    {projectTracks.map((track) => (
                      <option key={track} value={track}>{track}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-5 grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">What should this unlock?</span>
                <textarea required rows={6} name="message" value={form.message} onChange={handleChange} className="field" placeholder="Describe the current friction, the kind of experience you want, and what success should look like." />
              </label>

              <button type="submit" className="button-primary btn-lg mt-6 w-full">
                Send by email
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                </svg>
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
