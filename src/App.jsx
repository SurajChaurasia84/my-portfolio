import {
  ArrowRight,
  Bot,
  ChartNoAxesColumnIncreasing,
  ChevronUp,
  Mail,
  Orbit,
  MapPin,
  Phone,
  Rocket,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { motion as Motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const contactRef = useRef(null)
  const [selectedProjectFilter, setSelectedProjectFilter] = useState('All')
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const isContactInView = useInView(contactRef, {
    amount: 0.35,
  })

  const aboutStats = [
    { label: 'Software projects developed', value: '25+' },
    { label: 'Performance growth', value: '3.2x' },
    { label: 'Avg. project rating', value: '4.9/5' },
  ]

  const portfolioItems = [
    {
      icon: Rocket,
      category: 'Web App',
      title: 'Enterprise E-Commerce',
      description: 'Scalable e-commerce platform for global retail operations.',
      metrics: [
        { value: '+35%', label: 'Conversion' },
        { value: '+10K', label: 'Users' },
      ],
    },
    {
      icon: Smartphone,
      category: 'Mobile App',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking experience built for daily transactions.',
      metrics: [
        { value: '+50K', label: 'Users' },
        { value: '+1M', label: 'Transactions' },
      ],
    },
    {
      icon: Workflow,
      category: 'SaaS',
      title: 'Project Management SaaS',
      description: 'Collaboration suite for distributed teams and operations.',
      metrics: [
        { value: '+1.5K', label: 'Teams' },
        { value: '+40%', label: 'Productivity' },
      ],
    },
    {
      icon: Bot,
      category: 'Healthcare',
      title: 'Healthcare Portal',
      description: 'HIPAA-friendly patient portal with guided intake journeys.',
      metrics: [
        { value: '+100K', label: 'Records' },
        { value: '+70%', label: 'Engagement' },
      ],
    },
    {
      icon: ChartNoAxesColumnIncreasing,
      category: 'CRM',
      title: 'Real Estate CRM',
      description: 'Custom CRM for lead capture, follow-ups, and team visibility.',
      metrics: [
        { value: '+50%', label: 'Conversion' },
        { value: '+60%', label: 'Efficiency' },
      ],
    },
    {
      icon: Orbit,
      category: 'ERP',
      title: 'Custom ERP System',
      description: 'Unified ERP workflow for manufacturing and internal ops.',
      metrics: [
        { value: '-25%', label: 'Cost Savings' },
        { value: '+99%', label: 'Uptime' },
      ],
    },
  ]

  const projectFilters = ['All', 'Web App', 'Mobile App', 'SaaS', 'Healthcare', 'CRM', 'ERP']

  const filteredPortfolioItems =
    selectedProjectFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedProjectFilter)

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@suuraj.dev',
      detail: 'Feel free to email us anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 94533 96952',
      detail: 'Available on weekdays from 9 AM to 6 PM',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '53 Gorakhpur, Uttar Pradesh',
      detail: 'Beyond commits—let’s visit our workspace',
    },
  ]

  const pageParticles = [
    { top: '8%', left: '6%', size: 'h-1 w-1', delay: 0.2 },
    { top: '14%', left: '28%', size: 'h-1.5 w-1.5', delay: 0.7 },
    { top: '18%', left: '72%', size: 'h-1 w-1', delay: 1.1 },
    { top: '26%', left: '88%', size: 'h-1.5 w-1.5', delay: 0.4 },
    { top: '38%', left: '9%', size: 'h-1 w-1', delay: 0.8 },
    { top: '46%', left: '59%', size: 'h-1.5 w-1.5', delay: 1.2 },
    { top: '54%', left: '80%', size: 'h-1 w-1', delay: 0.5 },
    { top: '66%', left: '18%', size: 'h-1.5 w-1.5', delay: 0.9 },
    { top: '74%', left: '64%', size: 'h-1 w-1', delay: 1.3 },
    { top: '86%', left: '32%', size: 'h-1.5 w-1.5', delay: 0.6 },
    { top: '92%', left: '84%', size: 'h-1 w-1', delay: 1 },
  ]

  const starDots = [
    { top: '12%', left: '18%' },
    { top: '16%', left: '48%' },
    { top: '22%', left: '82%' },
    { top: '28%', left: '24%' },
    { top: '32%', left: '68%' },
    { top: '37%', left: '90%' },
    { top: '44%', left: '14%' },
    { top: '49%', left: '36%' },
    { top: '53%', left: '74%' },
    { top: '58%', left: '8%' },
    { top: '63%', left: '58%' },
    { top: '69%', left: '88%' },
    { top: '76%', left: '22%' },
    { top: '81%', left: '46%' },
    { top: '87%', left: '70%' },
  ]

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'portfolio', 'contact']

    const updateActiveSection = () => {
      setShowScrollTop(window.scrollY > 500)

      const probeY = 140
      let currentSection = sectionIds[0]

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) {
          return
        }

        const rect = section.getBoundingClientRect()

        if (rect.top <= probeY && rect.bottom > probeY) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_20%),linear-gradient(180deg,_#04050a_0%,_#07111f_45%,_#020308_100%)] text-slate-100 antialiased selection:bg-cyan-400/30">
      <div className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_42%)]" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0">
          {pageParticles.map((particle) => (
            <Motion.span
              key={`${particle.top}-${particle.left}`}
              className={`absolute rounded-full bg-cyan-100/70 shadow-[0_0_14px_rgba(103,232,249,0.65)] ${particle.size}`}
              style={{ top: particle.top, left: particle.left }}
              animate={{ opacity: [0.15, 0.75, 0.2], scale: [1, 1.35, 1] }}
              transition={{
                duration: 5.5,
                delay: particle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          ))}
          {starDots.map((dot, index) => (
            <Motion.span
              key={`${dot.top}-${dot.left}`}
              className="absolute h-[2px] w-[2px] rounded-full bg-white/80"
              style={{ top: dot.top, left: dot.left }}
              animate={{ opacity: [0.2, 0.9, 0.3] }}
              transition={{
                duration: 3.8,
                delay: index * 0.12,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          ))}
          <div className="absolute left-[8%] top-[34%] h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl" />
          <div className="absolute right-[10%] top-[58%] h-48 w-48 rounded-full bg-blue-500/6 blur-3xl" />
          <div className="absolute left-[18%] bottom-[10%] h-44 w-44 rounded-full bg-cyan-300/5 blur-3xl" />
        </div>

        <Navbar activeSection={activeSection} />
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
                  Featured <span className="text-cyan-300">Projects</span>
                </h2>
                <p className="mt-4 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-400">
                  Explore our portfolio of successful projects across various industries.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Product, brand, and growth work in one motion.
              </div>
            </div>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedProjectFilter(filter)}
                  className={`rounded-full border px-5 py-2 text-sm transition-colors duration-300 ${
                    selectedProjectFilter === filter
                      ? 'border-cyan-300/50 bg-cyan-400 text-slate-950 shadow-[0_0_26px_rgba(34,211,238,0.28)]'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {filteredPortfolioItems.map((item, index) => (
                <Motion.article
                  key={item.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-white shadow-[0_12px_30px_rgba(34,211,238,0.2)]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 font-['Plus_Jakarta_Sans'] text-xs text-cyan-300">
                    {item.category}
                  </span>
                  <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-['Plus_Jakarta_Sans'] text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                    {item.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                          {metric.value}
                        </p>
                        <p className="font-['Plus_Jakarta_Sans'] text-xs text-slate-500">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Motion.article>
              ))}
            </div>
          </Motion.section>

          <Motion.section
            id="contact"
            ref={contactRef}
            className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="px-2 md:px-0">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 font-['Plus_Jakarta_Sans'] text-sm text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.18)]">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </div>
                <h2 className="mt-6 font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Ready to <span className="text-cyan-300">Connect?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-8 text-slate-300">
                  Let&apos;s discuss your project and explore how we can help you achieve your software development goals.
                </p>
              </div>

              <div className="mx-auto mt-12 max-w-4xl space-y-5">
                {contactCards.map((card, index) => (
                  <Motion.a
                    key={card.title}
                    href={
                      card.title === 'Email Us'
                        ? 'mailto:hello@suuraj.dev'
                        : card.title === 'Call Us'
                          ? 'tel:+919453396952'
                          : '#contact'
                    }
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07] md:items-center md:gap-4 md:px-5 md:py-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-white shadow-[0_12px_30px_rgba(34,211,238,0.2)]">
                      <card.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 font-['Plus_Jakarta_Sans'] text-sm font-medium text-cyan-300 md:text-base">
                        {card.value}
                      </p>
                      <p className="mt-1 font-['Plus_Jakarta_Sans'] text-xs text-slate-400 md:text-sm">
                        {card.detail}
                      </p>
                    </div>
                  </Motion.a>
                ))}
              </div>
            </div>
          </Motion.section>
        </main>

        <Footer />

        <Motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={false}
          animate={{
            opacity: showScrollTop ? 1 : 0,
            y: showScrollTop ? 0 : 20,
            pointerEvents: showScrollTop ? 'auto' : 'none',
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/75 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.22)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/60 hover:bg-slate-900/90 hover:text-cyan-200"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Motion.button>
      </div>
    </div>
  )
}

export default App
