import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const principles = [
  {
    title: "Premium presence",
    description: "Look bigger, sharper, and more valuable every time a customer interacts with your business.",
  },
  {
    title: "Better conversion",
    description: "Turn attention into action with cleaner messaging, stronger hierarchy, and smarter flow.",
  },
  {
    title: "Smoother trust",
    description: "Subtle motion makes the experience feel more premium and keeps visitors engaged longer.",
  },
  {
    title: "Less busywork",
    description: "Automation handles the repetitive work so your team can focus on selling and delivering.",
  },
];

const team = [
  {
    name: "Sushanth Kasturi",
    role: "Founder",
    initials: "SK",
    description: "Leads growth-focused systems that help businesses sell harder and scale with confidence.",
  },
  {
    name: "Rohith",
    role: "Co-Founder",
    initials: "R",
    description: "Builds the automation backbone that turns business workflows into reliable revenue systems.",
  },
];

export default function About() {
  return (
    <div className="page-shell pb-10">
      <Seo
        title="Why AvlokAI — Strategy, Design, AI & Automation"
        description="AvlokAI combines strategy, design, AI, and automation to build systems that move sales, support, and operations forward for ambitious businesses."
        path="/about"
      />

      <section className="site-container py-6 sm:py-10">
        <Reveal>
          <div className="glass-panel-strong rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
            <h1 className="max-w-4xl text-4xl font-semibold text-[var(--text)] sm:text-5xl">
              AvlokAI helps ambitious businesses sell faster, serve better, and scale smoother.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--body)] sm:text-base">
              We combine strategy, design, AI, and automation to build systems that move sales, support, and operations
              forward.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="text-4xl font-semibold text-[var(--text)]">Why clients choose AvlokAI.</h2>
              <p className="mt-5 text-sm leading-8 text-[var(--body)] sm:text-base">
                Because strong positioning gets attention, clear messaging drives action, and smart systems keep the
                business moving after the first interaction.
              </p>
              <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
                We do not just polish surfaces. We help businesses win more trust, generate more demand, and reduce
                manual work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-4xl font-semibold text-[var(--text)]">What you get when we build.</h2>
              <div className="space-y-4">
                {[
                  "Sharper positioning that makes the offer easier to buy",
                  "Premium visuals that instantly raise perceived value",
                  "Automation that keeps leads and ops moving",
                  "A system built to keep improving after launch",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5">
                    <div className="text-base leading-7 text-[var(--body)]">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-10 sm:py-14" aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="sr-only">Principles</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 70}>
              <article className="catalog-card h-full p-6">
                <h3 className="text-2xl font-semibold text-[var(--text)]">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--body)]">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container py-10 sm:py-14" aria-labelledby="team-heading">
        <Reveal className="mb-8">
          <h2 id="team-heading" className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">
            Meet the team behind the growth systems.
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {team.map((person, index) => (
            <Reveal key={person.name} delay={index * 80}>
              <article className="catalog-card h-full p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-[var(--brand-1)] to-[var(--brand-2)] text-2xl font-bold text-white shadow-[0_8px_20px_var(--brand-glow)]">
                    {person.initials}
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-[var(--text)]">{person.name}</div>
                    <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">{person.role}</div>
                  </div>
                </div>
                <p className="text-sm leading-8 text-[var(--body)]">{person.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
