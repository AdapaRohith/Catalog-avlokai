import { TransitionLink } from "./TransitionLink";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Systems" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "Why AvlokAI" },
  { to: "/contact", label: "Start now" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 px-4 pb-6 sm:px-6">
      <div className="site-container overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.42)] sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Build business systems that attract demand, close faster, and scale cleanly.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              AvlokAI builds AI assistants, automation systems, and digital experiences that help businesses generate more leads and operate with less friction.
            </p>
          </div>

          <div className="grid gap-3">
            {["More leads", "Less admin", "Faster growth"].map((item) => (
              <div key={item} className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 text-xl font-semibold text-white">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[0.8fr_0.8fr_0.6fr]">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">Quick links</div>
            <div className="mt-4 grid gap-3">
              {quickLinks.map((link) => (
                <TransitionLink
                  key={link.to}
                  to={link.to}
                  className="text-sm font-semibold text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500">Contact</div>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <a href="mailto:avlokbusiness@gmail.com" className="transition hover:text-white">
                avlokbusiness@gmail.com
              </a>
              <a href="tel:+919346672015" className="transition hover:text-white">
                +91 9346672015
              </a>
              <p className="leading-7 text-slate-400">
                Built for businesses that want better growth, better operations, and better systems.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <TransitionLink to="/contact" className="button-primary w-full">
              Book discovery call
            </TransitionLink>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Copyright {new Date().getFullYear()} AvlokAI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
