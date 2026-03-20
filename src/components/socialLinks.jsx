import WhatsAppIcon from './WhatsAppIcon'
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './BrandIcons'

export const socialLinks = [
  {
    icon: WhatsAppIcon,
    href: 'https://wa.me/919453396952',
    label: 'WhatsApp',
    colorClass: 'text-emerald-400 hover:text-emerald-300 hover:border-emerald-400/50 hover:shadow-[0_0_22px_rgba(74,222,128,0.24)]',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    colorClass: 'text-pink-400 hover:text-pink-300 hover:border-pink-400/50 hover:shadow-[0_0_22px_rgba(244,114,182,0.24)]',
  },
  {
    icon: YouTubeIcon,
    href: 'https://www.youtube.com/',
    label: 'YouTube',
    colorClass: 'text-red-400 hover:text-red-300 hover:border-red-400/50 hover:shadow-[0_0_22px_rgba(248,113,113,0.24)]',
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/suraj-chaurasia-a250a526b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    label: 'LinkedIn',
    colorClass: 'text-sky-400 hover:text-sky-300 hover:border-sky-400/50 hover:shadow-[0_0_22px_rgba(56,189,248,0.24)]',
  },
]
