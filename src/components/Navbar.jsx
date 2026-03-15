import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/AvlokAi.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-bg/90 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-warm-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="AvlokAI" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-warm-accent/15 text-warm-accent"
                      : "text-warm-muted hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-warm-accent hover:bg-warm-highlight text-stone-900 rounded-lg text-sm font-bold transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-warm-muted hover:text-warm-accent transition-colors"
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`h-[2px] bg-current transition-all duration-300 rounded ${open ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`} />
              <span className={`h-[2px] bg-current transition-all duration-300 rounded ${open ? "w-0 opacity-0" : "w-4"}`} />
              <span className={`h-[2px] bg-current transition-all duration-300 rounded ${open ? "w-6 -rotate-45 -translate-y-[8px]" : "w-5"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-warm-bg/95 backdrop-blur-xl border-t border-warm-border transition-all duration-400 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-warm-accent/15 text-warm-accent"
                    : "text-warm-muted hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 px-5 py-3 bg-warm-accent hover:bg-warm-highlight text-stone-900 rounded-lg text-sm font-bold text-center transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
