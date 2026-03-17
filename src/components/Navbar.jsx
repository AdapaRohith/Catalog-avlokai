import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/AvlokAi.png";
import { TransitionLink, TransitionNavLink } from "./TransitionLink";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Systems" },
  { to: "/pricing", label: "Pricing" },
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
        className={`site-container rounded-[28px] transition-all duration-500 ${
          scrolled
            ? "glass-panel-strong border-white/12"
            : "border border-white/6 bg-white/[0.03] backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <TransitionLink to="/" className="flex items-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-[0_18px_45px_rgba(4,9,24,0.28)]">
              <img src={logo} alt="AvlokAI" className="h-10 w-10 rounded-xl object-contain sm:h-11 sm:w-11" />
            </div>
            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.28em] text-slate-200">AvlokAI</div>
              <div className="text-xs uppercase tracking-[0.24em] text-slate-500">AI Growth Systems</div>
            </div>
          </TransitionLink>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <TransitionNavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                      : "text-slate-300 hover:bg-white/6 hover:text-white"
                  }`
                }
              >
                {link.label}
              </TransitionNavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:avlokbusiness@gmail.com"
              className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-[rgba(153,225,255,0.24)] hover:text-white"
            >
              avlokbusiness@gmail.com
            </a>
            <TransitionLink to="/contact" className="button-primary px-5 py-3">
              Start a build
            </TransitionLink>
          </div>

          <button
            type="button"
            aria-label="Open navigation"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 px-4 py-4 sm:px-6">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <TransitionNavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive ? "bg-white/10 text-white" : "bg-white/[0.03] text-slate-300 hover:bg-white/8 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </TransitionNavLink>
              ))}
            </nav>

            <div className="mt-4 grid gap-3">
              <a
                href="mailto:avlokbusiness@gmail.com"
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-300"
              >
                avlokbusiness@gmail.com
              </a>
              <TransitionLink to="/contact" className="button-primary w-full">
                Start a build
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
