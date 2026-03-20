import { motion as Motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SocialIcons from './SocialIcons'
import { socialLinks } from './socialLinks.jsx'

const particles = [
  { top: '10%', left: '8%', size: 'h-1.5 w-1.5', delay: 0.2 },
  { top: '16%', left: '22%', size: 'h-2 w-2', delay: 0.6 },
  { top: '24%', left: '78%', size: 'h-1.5 w-1.5', delay: 0.9 },
  { top: '40%', left: '12%', size: 'h-1 w-1', delay: 0.3 },
  { top: '58%', left: '86%', size: 'h-2 w-2', delay: 0.5 },
  { top: '72%', left: '18%', size: 'h-1.5 w-1.5', delay: 0.75 },
  { top: '82%', left: '67%', size: 'h-1 w-1', delay: 1 },
]

function Hero({ hideSidebar = false }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <Motion.span
            key={`${particle.top}-${particle.left}`}
            className={`absolute rounded-full bg-cyan-200/80 shadow-[0_0_18px_rgba(103,232,249,0.85)] ${particle.size}`}
            style={{ top: particle.top, left: particle.left }}
            animate={{ opacity: [0.2, 1, 0.35], scale: [1, 1.4, 1] }}
            transition={{
              duration: 4.5,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div className="absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Motion.div
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
        animate={hideSidebar ? { opacity: 0, x: -36 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <SocialIcons
          links={socialLinks}
          direction="column"
          iconSize="h-5 w-5"
          itemSize="h-11 w-11"
          itemClassName="border-cyan-400/20 bg-slate-950/65 shadow-[0_0_0_rgba(34,211,238,0)] backdrop-blur-xl"
        />
      </Motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-14 lg:flex-row lg:items-center">
        <Motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Future-ready product engineering
          </Motion.div>

          <Motion.h1
            className="font-['Space_Grotesk'] text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            We only <span className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">build</span> what we are really really good at.
          </Motion.h1>

          <Motion.p
            className="mt-6 max-w-2xl font-['Plus_Jakarta_Sans'] text-lg leading-8 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Get ready to transform your business with cutting-edge solutions
          </Motion.p>

          <Motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex whitespace-nowrap items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400 px-6 py-3.5 font-['Space_Grotesk'] text-sm font-bold text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.35)] transition-colors duration-300 hover:bg-cyan-300"
            >
              Start Your Project Today
              <ArrowRight className="h-4 w-4" />
            </Motion.a>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-slate-400">
              Strategy, design, and development tuned for high-intent growth.
            </p>
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="w-full max-w-xl px-5 py-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(10,15,28,0.96),rgba(8,43,64,0.9))] p-6 shadow-[0_0_80px_rgba(8,145,178,0.14)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-slate-400">
                  Delivery framework
                </p>
                <h2 className="mt-2 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                  Precision builds. Zero filler.
                </h2>
              </div>
              <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Live
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                ['Discovery', 'Clear scope and product priorities in 5 days'],
                ['Design', 'Interface systems built for clarity and conversion'],
                ['Launch', 'Production-ready code with measurable handoff'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-['Space_Grotesk'] text-base font-semibold text-white">
                        {title}
                      </p>
                      <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm leading-6 text-slate-400">
                        {text}
                      </p>
                    </div>
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.95)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default Hero
