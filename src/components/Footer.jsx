import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Index" },
  { to: "/services", label: "Capabilities" },
  { to: "/pricing", label: "Investment" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Initiate" },
];

export default function Footer({ className }) {
  return (
    <footer className={`border-t border-white/10 mt-32 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-3xl mb-6 tracking-tighter uppercase text-white group">
              Avlok<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">AI</span><span className="text-brand-magenta">.</span>
            </h3>
            <p className="text-brand-muted text-base leading-relaxed max-w-sm font-light">
              We design and implement autonomous systems for modern enterprises.
              Eliminate friction. Deploy intelligence. <span className="text-white font-medium">Scale indefinitely.</span>
            </p>
          </div>

          {/* Layout Map */}
          <div>
            <h4 className="text-brand-accent font-display font-bold text-xs mb-8 uppercase tracking-[0.2em]">
              Directory
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-brand-cyan text-xs uppercase tracking-[0.1em] transition-colors duration-300 block w-fit hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-brand-magenta font-display font-bold text-xs mb-8 uppercase tracking-[0.2em]">
              Communicate
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:avlokbusiness@gmail.com"
                className="block text-white/60 hover:text-white text-xs uppercase tracking-[0.05em] transition-colors duration-300 w-fit"
              >
                avlokbusiness@gmail.com
              </a>
              <a
                href="tel:+919346672015"
                className="block text-white/60 hover:text-white text-xs tracking-[0.1em] transition-colors duration-300 w-fit"
              >
                +91 9346672015
              </a>
              <div className="pt-6 flex gap-6">
                <a href="#" className="text-white/40 hover:text-brand-cyan transition-colors uppercase tracking-widest text-xs font-bold">X(TW)</a>
                <a href="#" className="text-white/40 hover:text-brand-accent transition-colors uppercase tracking-widest text-xs font-bold">IN</a>
                <a href="#" className="text-white/40 hover:text-brand-magenta transition-colors uppercase tracking-widest text-xs font-bold">GH</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold">
          <p>&copy; {new Date().getFullYear()} AvlokAI</p>
          <div className="flex gap-4">
            <span className="w-1.5 h-1.5 bg-brand-magenta rounded-full animate-pulse opacity-80" />
            <p className="text-white/60">Operate Beyond Limits</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
