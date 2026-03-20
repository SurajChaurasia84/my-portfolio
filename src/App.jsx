import { ArrowRight, Bot, Orbit, Rocket, Sparkles, Workflow } from 'lucide-react'
import { motion as Motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const contactRef = useRef(null)
  const isContactInView = useInView(contactRef, {
    amount: 0.35,
  })

  const aboutStats = [
    { label: 'Launch cycles reduced', value: '42%' },
    { label: 'Retention uplift', value: '3.2x' },
    { label: 'Avg. project rating', value: '4.9/5' },
  ]

  const serviceCards = [
    {
      icon: Rocket,
      title: 'Product Launch Systems',
      description:
        'Strategy, design, and engineering bundled into a single sprint rhythm.',
    },
    {
      icon: Workflow,
      title: 'Growth Automation',
      description:
        'Funnels, CRM flows, and dashboards that remove operational drag.',
    },
    {
      icon: Bot,
      title: 'AI-Powered Experiences',
      description:
        'Assistants and internal tools shaped around real business workflows.',
    },
  ]

  const portfolioItems = [
    'NeonOps: agency control center with 64% faster client onboarding.',
    'VaultGrid: B2B SaaS redesign that doubled demo requests in six weeks.',
    'PulseStack: AI operations dashboard connecting sales, support, and finance.',
  ]

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_20%),linear-gradient(180deg,_#04050a_0%,_#07111f_45%,_#020308_100%)] text-slate-100 antialiased selection:bg-cyan-400/30">
      <div className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_42%)]" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <Navbar />
        <Hero hideSidebar={isContactInView} />

        <main className="relative z-10">
          <Motion.section
            id="about"
            className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:p-12">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                  <Orbit className="h-4 w-4" />
                  About
                </div>
                <h2 className="max-w-xl font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  We design sharp digital systems for brands that expect measurable outcomes.
                </h2>
                <p className="mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-300">
                  From early product framing to launch-ready interfaces, we build lean, high-trust systems that look premium and convert clearly.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                {aboutStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5"
                  >
                    <p className="font-['Space_Grotesk'] text-3xl font-bold text-cyan-300">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Motion.section>

          <Features />

          <Motion.section
            id="portfolio"
            className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-[0.32em] text-cyan-300/80">
                  Portfolio
                </p>
                <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Recent systems built to move fast and scale cleanly.
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Product, brand, and growth work in one motion.
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {portfolioItems.map((item, index) => (
                <Motion.article
                  key={item}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <p className="font-['Plus_Jakarta_Sans'] text-lg leading-7 text-slate-200">
                    {item}
                  </p>
                </Motion.article>
              ))}
            </div>
          </Motion.section>

          <Motion.section
            id="contact"
            ref={contactRef}
            className="mx-auto max-w-6xl px-6 pb-24 sm:px-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(12,20,36,0.92),rgba(10,58,87,0.45))] p-8 shadow-[0_0_80px_rgba(34,211,238,0.12)] md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                    Contact
                  </p>
                  <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to ship something precise, bold, and revenue-aware?
                  </h2>
                  <p className="mt-4 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-300">
                    Start with a focused roadmap session and leave with a build path, timeline, and delivery plan.
                  </p>
                </div>

                <Motion.a
                  href="mailto:hello@suuraj.dev"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400 px-6 py-3 font-['Space_Grotesk'] text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-colors duration-300 hover:bg-cyan-300"
                >
                  Book Discovery Call
                  <ArrowRight className="h-4 w-4" />
                </Motion.a>
              </div>

              <div
                id="services"
                className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3"
              >
                {serviceCards.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-['Space_Grotesk'] text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Motion.section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
