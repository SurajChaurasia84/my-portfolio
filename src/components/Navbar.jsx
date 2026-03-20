import { motion as Motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-950/45 px-4 py-3 backdrop-blur-xl">
          <a
            href="#home"
            className="flex items-center gap-3 font-['Space_Grotesk'] text-lg font-bold tracking-[0.16em] text-white"
          >
            <span className="relative flex h-11 w-11 items-center justify-center">
              <Motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-300 to-blue-500 p-px"
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
              >
                <span className="block h-full w-full rounded-full bg-slate-950/90" />
              </Motion.span>
              <span className="relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-900">
                <img
                  src="/logo.png"
                  alt="Suuraj Dev logo"
                  className="h-full w-full object-cover"
                />
              </span>
            </span>
            <span>Suuraj Dev</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Plus_Jakarta_Sans'] text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/90 px-5 py-2.5 font-['Space_Grotesk'] text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)] transition-colors duration-300 hover:bg-cyan-300"
          >
            Get Started
          </Motion.a>
        </div>

        <nav className="mt-3 flex gap-5 overflow-x-auto rounded-full border border-white/10 bg-slate-950/35 px-4 py-3 pb-3 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="shrink-0 font-['Plus_Jakarta_Sans'] text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
