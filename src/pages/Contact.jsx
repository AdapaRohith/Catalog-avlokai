import { useState } from "react";
import Reveal from "../components/Reveal";

const initialForm = {
  name: "",
  email: "",
  businessType: "",
  projectType: "",
  message: "",
};

const projectTracks = [
  "Business automation",
  "Customer journey redesign",
  "AI assistant",
  "CRM workflow",
  "Custom AI system",
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);

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

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=avlokbusiness@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="page-shell pb-10">
      <section className="site-container py-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-panel-strong h-full rounded-[36px] p-6 sm:p-8">
              <h1 className="max-w-xl text-4xl font-semibold text-white sm:text-6xl">
                Tell us where your business needs leverage.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
                Share your goal and we&apos;ll map the assistant, workflow, or growth system that gets you there faster.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  { label: "Email", value: "avlokbusiness@gmail.com" },
                  { label: "Phone", value: "+91 9346672015" },
                  { label: "Response goal", value: "Within 24 hours" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">{item.label}</div>
                    <div className="text-base font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {projectTracks.map((track) => (
                    <span key={track} className="info-chip">
                      {track}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <form onSubmit={handleSubmit} className="catalog-card rounded-[36px] p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="mt-2 text-3xl font-semibold text-white">Start your project</h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">Name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-[rgba(153,225,255,0.28)]"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-[rgba(153,225,255,0.28)]"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">Business type</span>
                  <input
                    required
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-[rgba(153,225,255,0.28)]"
                    placeholder="Agency, clinic, SaaS..."
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">Project type</span>
                  <select
                    required
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-[rgba(153,225,255,0.28)]"
                  >
                    <option value="" disabled className="bg-slate-950 text-slate-400">
                      Select one
                    </option>
                    {projectTracks.map((track) => (
                      <option key={track} value={track} className="bg-slate-950 text-white">
                        {track}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-5 grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">What should this unlock?</span>
                <textarea
                  required
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition focus:border-[rgba(153,225,255,0.28)]"
                  placeholder="Describe the current friction, the kind of experience you want, and what success should look like."
                />
              </label>

              <button type="submit" className="button-primary mt-6 w-full">
                Send by email
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
