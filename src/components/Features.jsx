import { motion as Motion } from 'framer-motion'
import { Cpu, Layers3, ShieldCheck, Zap } from 'lucide-react'

const featureCards = [
  {
    icon: Layers3,
    title: 'Strategic UX Systems',
    description:
      'Interfaces organized around customer intent, reducing friction across every key touchpoint.',
  },
  {
    icon: Cpu,
    title: 'Fast Frontend Architecture',
    description:
      'React builds that stay maintainable, responsive, and launch-ready from day one.',
  },
  {
    icon: Zap,
    title: 'Conversion-First Motion',
    description:
      'Framer Motion used with restraint to make interactions feel premium without slowing flow.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Delivery',
    description:
      'Tight scopes, transparent milestones, and clean code built for real handoff quality.',
  },
]

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <Motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-[0.32em] text-cyan-300/80">
          Features
        </p>
        <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Built like a focused agency. Shipped like a technical product team.
        </h2>
      </Motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((feature, index) => (
          <Motion.article
            key={feature.title}
            className="group rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: 'easeOut' }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:shadow-[0_0_26px_rgba(34,211,238,0.24)]">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-['Space_Grotesk'] text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 font-['Plus_Jakarta_Sans'] text-sm leading-7 text-slate-400">
              {feature.description}
            </p>
          </Motion.article>
        ))}
      </div>
    </section>
  )
}

export default Features
