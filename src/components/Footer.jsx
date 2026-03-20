import { Copyright } from 'lucide-react'
import SocialIcons from './SocialIcons'
import { socialLinks } from './socialLinks.jsx'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:px-8 md:flex-row">
        <p className="font-['Plus_Jakarta_Sans'] text-sm text-slate-400">
          <span className="inline-flex items-center gap-1">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()} Suuraj Dev. All rights reserved.</span>
          </span>
        </p>

        <SocialIcons links={socialLinks} />
      </div>
    </footer>
  )
}

export default Footer
