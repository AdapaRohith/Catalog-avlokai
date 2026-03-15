import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-border mt-24 bg-warm-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-4 text-white">
              Avlok<span className="text-warm-accent">AI</span>
            </h3>
            <p className="text-warm-muted text-sm leading-relaxed max-w-sm">
              We design and implement intelligent automation systems for modern businesses.
              Save time, reduce errors, and scale your operations effortlessly.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-warm-accent text-xs font-bold uppercase tracking-widest mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-warm-muted hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-warm-accent text-xs font-bold uppercase tracking-widest mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:avlokbusiness@gmail.com"
                className="block text-warm-muted hover:text-white text-sm transition-colors duration-200"
              >
                avlokbusiness@gmail.com
              </a>
              <a
                href="tel:+919346672015"
                className="block text-warm-muted hover:text-white text-sm transition-colors duration-200"
              >
                +91 9346672015
              </a>
              <div className="pt-4 flex gap-5">
                <a href="#" className="text-warm-subtle hover:text-warm-accent transition-colors text-sm font-medium">Twitter</a>
                <a href="#" className="text-warm-subtle hover:text-warm-accent transition-colors text-sm font-medium">LinkedIn</a>
                <a href="#" className="text-warm-subtle hover:text-warm-accent transition-colors text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-warm-border flex flex-col md:flex-row justify-between items-center gap-4 text-warm-subtle text-xs">
          <p>&copy; {new Date().getFullYear()} AvlokAI. All rights reserved.</p>
          <p>Automate. Simplify. Scale.</p>
        </div>
      </div>
    </footer>
  );
}
