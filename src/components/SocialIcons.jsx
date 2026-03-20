import { motion as Motion } from 'framer-motion'

function SocialIcons({
  links,
  direction = 'row',
  iconSize = 'h-4 w-4',
  itemSize = 'h-10 w-10',
  className = '',
  itemClassName = '',
}) {
  return (
    <div
      className={`${direction === 'column' ? 'flex flex-col' : 'flex items-center'} gap-3 ${className}`.trim()}
    >
      {links.map((link) => {
        const Icon = link.icon

        return (
          <Motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`flex ${itemSize} items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 ${link.colorClass ?? 'text-slate-300 hover:border-cyan-300/50 hover:text-cyan-300 hover:shadow-[0_0_22px_rgba(34,211,238,0.24)]'} ${itemClassName}`.trim()}
            aria-label={link.label}
          >
            <Icon className={iconSize} />
          </Motion.a>
        )
      })}
    </div>
  )
}

export default SocialIcons
