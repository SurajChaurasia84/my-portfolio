import { motion as Motion } from 'framer-motion'
import {
  Braces,
  Code2,
  LayoutPanelTop,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react'

const featureCards = [
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'Bespoke software systems tailored around your team, workflow, and delivery goals.',
  },
  {
    icon: Zap,
    title: 'Web Development',
    description:
      'High-performance web apps designed to feel sharp, stable, and conversion-ready.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Cross-platform mobile experiences with clean interfaces and reliable user flows.',
  },
  {
    icon: LayoutPanelTop,
    title: 'UI/UX Design',
    description:
      'Intentional product design systems that make complex software feel simple to use.',
  },
  {
    icon: Braces,
    title: 'Backend Services',
    description:
      'Robust APIs, database design, and scalable server-side systems built for reliability.',
  },
  {
    icon: ShieldCheck,
    title: 'QA & Testing',
    description:
      'Structured testing coverage to protect product quality and reduce regressions.',
  },
]

function Features() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <Motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 font-['Plus_Jakarta_Sans'] text-sm text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.18)]">
          <Sparkles className="h-4 w-4" />
          Our Services
        </div>
        <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What We <span className="text-cyan-300">Offer</span>
        </h2>
        <p className="mt-4 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-400">
          Complete range of software development services from concept to deployment and support.
        </p>
      </Motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {featureCards.map((feature, index) => (
          <Motion.article
            key={feature.title}
            className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: 'easeOut' }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-white shadow-[0_12px_30px_rgba(34,211,238,0.2)]">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 font-['Plus_Jakarta_Sans'] text-sm leading-7 text-slate-400">
              {feature.description}
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
            >
              Read More
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </Motion.article>
        ))}
      </div>
    </section>
  )
}

export default Features
