import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi'

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/Siddharthcoding', icon: FiGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/siddharth-kumar-mishra', icon: FiLinkedin },
  { name: 'Twitter', url: 'https://twitter.com/SiddharthKM4305', icon: FiTwitter },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-white">Siddharth Kumar </span>
              <span className="text-accent-purple">Mishra</span>
            </h3>
            <p className="text-gray-500 text-sm">
              Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all"
              >
                <link.icon size={18} className="text-gray-400 hover:text-white" />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-purple text-white hover:bg-violet-600 transition-colors"
          >
            <FiArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Siddharth Kumar Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}