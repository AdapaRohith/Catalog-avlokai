import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Catalog" },
  { to: "/about", label: "Why AvlokAI" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`site-container rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "glass-panel-strong"
            : "border-[var(--hairline)] bg-[var(--surface)]/80 backdrop-blur-xl shadow-[var(--shadow-sm)]"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="AvlokAI home">
            <span className="rounded-xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-1.5 shadow-[var(--shadow-sm)]">
              <img src="/avlokai-mark.png" alt="AvlokAI logo" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold uppercase tracking-[0.26em] text-[var(--text)]">AvlokAI</span>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[var(--subtle)]">AI Growth Systems</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-b from-[var(--brand-1)] to-[var(--brand-2)] text-white shadow-[0_6px_16px_var(--brand-glow)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Link to="/contact" className="button-primary btn-sm">
              Start a build
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--hairline-strong)] bg-[var(--surface-2)] text-[var(--text)] shadow-[var(--shadow-sm)] transition active:translate-y-px"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[var(--hairline)] px-4 py-4 sm:px-5">
            <nav className="grid gap-2" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-gradient-to-b from-[var(--brand-1)] to-[var(--brand-2)] text-white"
                        : "bg-[var(--surface-soft)] text-[var(--muted)] hover:text-[var(--text)]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 grid gap-3">
              <a
                href="mailto:hello@avlokai.com"
                className="rounded-xl border border-[var(--hairline)] px-4 py-3 text-sm font-semibold text-[var(--muted)]"
              >
                hello@avlokai.com
              </a>
              <Link to="/contact" className="button-primary w-full">
                Start a build
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
