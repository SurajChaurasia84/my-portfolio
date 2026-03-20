import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const logoSrc = `${import.meta.env.BASE_URL}logo.png`

function Navbar({ activeSection = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <AnimatePresence>
        {isMenuOpen && (
          <Motion.button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-0 bg-transparent md:hidden"
          />
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-8">
        <Motion.div
          className="relative z-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/45 px-4 py-3 backdrop-blur-xl"
          animate={{ height: 'auto' }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
        >
          <div className="flex items-center justify-between gap-4">
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
                    src={logoSrc}
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
                  className={`font-['Plus_Jakarta_Sans'] text-sm transition-colors duration-300 hover:text-cyan-300 ${
                    activeSection === link.href.slice(1) ? 'text-cyan-300' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="hidden items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/90 px-5 py-2.5 font-['Space_Grotesk'] text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)] transition-colors duration-300 hover:bg-cyan-300 md:inline-flex"
              >
                Get Started
              </Motion.a>

              <button
                type="button"
                onClick={() => setIsMenuOpen((value) => !value)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-colors duration-300 hover:border-cyan-300/40 hover:text-cyan-300 md:hidden"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <Motion.span
                    key={isMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="flex items-center justify-center"
                  >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <Motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                className="overflow-hidden md:hidden"
              >
                <nav className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                  {navLinks.map((link, index) => (
                    <Motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: index * 0.04 }}
                      className={`rounded-2xl px-3 py-2 font-['Plus_Jakarta_Sans'] text-sm transition-colors duration-300 hover:bg-white/5 hover:text-cyan-300 ${
                        activeSection === link.href.slice(1)
                          ? 'bg-white/5 text-cyan-300'
                          : 'text-slate-300'
                      }`}
                    >
                      {link.label}
                    </Motion.a>
                  ))}

                </nav>
              </Motion.div>
            )}
          </AnimatePresence>
        </Motion.div>
      </div>
    </header>
  )
}

export default Navbar
