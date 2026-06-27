import { TransitionLink } from "./TransitionLink";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Catalog" },
  { to: "/about", label: "Why AvlokAI" },
  { to: "/contact", label: "Start now" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 px-4 pb-6 sm:px-6">
      <div className="site-container overflow-hidden rounded-3xl border border-[var(--hairline)] bg-[var(--surface)] px-6 py-10 shadow-[var(--shadow-lg)] sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold text-[var(--text)] sm:text-4xl">
              Build systems that attract demand, close faster, and scale cleanly.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--body)] sm:text-base">
              AvlokAI builds AI assistants, automation systems, and digital experiences that help businesses generate
              more leads and operate with less friction.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-1">
            {["More leads", "Less admin", "Faster growth"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5 text-xl font-semibold text-[var(--text)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 border-t border-[var(--hairline)] pt-8 lg:grid-cols-[0.8fr_0.8fr_0.6fr]">
          <nav aria-label="Footer">
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">Quick links</div>
            <div className="mt-4 grid gap-3">
              {quickLinks.map((link) => (
                <TransitionLink
                  key={link.to}
                  to={link.to}
                  className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--brand-1)]"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>
          </nav>

          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--subtle)]">Contact</div>
            <div className="mt-4 grid gap-3 text-sm text-[var(--body)]">
              <a href="mailto:hello@avlokai.com" className="transition hover:text-[var(--brand-1)]">
                hello@avlokai.com
              </a>
              <a href="tel:+919346672015" className="transition hover:text-[var(--brand-1)]">
                +91 9346672015
              </a>
              <p className="leading-7 text-[var(--muted)]">
                Built for businesses that want better growth, better operations, and better systems.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <TransitionLink to="/contact" className="button-primary w-full">
              Book discovery call
            </TransitionLink>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--subtle)]">
              © {new Date().getFullYear()} AvlokAI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
