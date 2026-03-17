import Reveal from "../components/Reveal";

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
    description:
      "Leads growth-focused systems that help businesses sell harder and scale with confidence.",
  },
  {
    name: "Rohith",
    role: "Co-Founder",
    initials: "R",
    description:
      "Builds the automation backbone that turns business workflows into reliable revenue systems.",
  },
];

export default function About() {
  return (
    <div className="page-shell pb-10">
      <section className="site-container py-6 sm:py-10">
        <Reveal>
          <div className="glass-panel-strong rounded-[36px] px-6 py-8 sm:px-10 sm:py-10">
            <h1 className="max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
              AvlokAI helps ambitious businesses sell faster, serve better, and scale smoother.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              We combine strategy, design, AI, and automation to build systems that move sales, support, and operations forward.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="site-container py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="text-4xl font-semibold text-white">Why clients choose AvlokAI.</h2>
              <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
                Because strong positioning gets attention, clear messaging drives action, and smart systems keep the business moving after the first interaction.
              </p>
              <p className="mt-5 text-sm leading-8 text-slate-400">
                We do not just polish surfaces. We help businesses win more trust, generate more demand, and reduce manual work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="catalog-card h-full p-6 sm:p-8">
              <h2 className="mb-5 text-4xl font-semibold text-white">What you get when we build.</h2>
              <div className="space-y-4">
                {[
                  "Sharper positioning that makes the offer easier to buy",
                  "Premium visuals that instantly raise perceived value",
                  "Automation that keeps leads and ops moving",
                  "A system built to keep improving after launch",
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
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 80}>
              <article className="catalog-card h-full p-6">
                <h3 className="text-2xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container py-10 sm:py-14">
        <Reveal className="mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Meet the team behind the growth systems.</h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {team.map((person, index) => (
            <Reveal key={person.name} delay={index * 90}>
              <article className="catalog-card h-full p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.05] text-2xl font-bold text-white">
                    {person.initials}
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">{person.name}</div>
                    <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">{person.role}</div>
                  </div>
                </div>
                <p className="text-sm leading-8 text-slate-300">{person.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
