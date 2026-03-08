import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Index" },
  { to: "/services", label: "Capabilities" },
  { to: "/pricing", label: "Investment" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Initiate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${scrolled
      ? "glass-nav border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      : "bg-transparent border-transparent py-6"
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-2xl tracking-tighter text-white group-hover:text-white/70 transition-colors uppercase">
              Avlok<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">AI</span><span className="text-brand-magenta">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative text-xs tracking-[0.2em] uppercase transition-all duration-300 font-bold group py-2 ${isActive
                    ? "text-brand-cyan"
                    : "text-white/60 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-brand-cyan to-brand-accent scale-x-100' : 'bg-brand-magenta scale-x-0 group-hover:scale-x-100'} origin-left rounded-full`} />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="group relative ml-4 px-6 py-2.5 overflow-hidden rounded border border-white/20 text-xs tracking-[0.2em] uppercase font-bold text-white transition-all hover:border-transparent hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 group-hover:text-white text-glow">Start</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/70 hover:text-brand-cyan transition-colors"
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`h-[2px] bg-current transition-all duration-300 rounded ${open ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`}></span>
              <span className={`h-[2px] bg-current transition-all duration-300 rounded ${open ? "w-0 opacity-0" : "w-4"}`}></span>
              <span className={`h-[2px] bg-current transition-all duration-300 rounded ${open ? "w-6 -rotate-45 -translate-y-[8px]" : "w-5"}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/10 transition-all duration-500 overflow-hidden ${open ? "max-h-96 opacity-100 border-b shadow-lg" : "max-h-0 opacity-0 border-b-0"
          }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-magenta/5 to-transparent pointer-events-none" />
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-lg tracking-widest uppercase transition-all duration-300 font-display font-medium relative w-fit ${isActive
                  ? "text-brand-cyan bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-accent"
                  : "text-white/60 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
