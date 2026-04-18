import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGithub } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Skills', path: '#skills' },
  { name: 'Contact', path: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(link => link.path.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (path) => {
    const id = path.slice(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        style={{ width: 'auto' }}
      >
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #000 0%, #000 48%, #fff 50%, #000 52%, #000 100%)',
            backgroundSize: '200% 100%',
            padding: '2px',
          }}
        />
        <div className={`relative flex items-center gap-6 backdrop-blur-xl bg-black/80 rounded-full transition-all duration-300 ${isScrolled ? 'py-2 px-5' : 'py-3 px-5'}`}>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold shrink-0"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 10px rgba(255,255,255,0.1)',
                      '0 0 20px rgba(255,255,255,0.3)',
                      '0 0 10px rgba(255,255,255,0.1)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-1 bg-white/10 blur-md -z-10 rounded-full"
                />
              </div>
            </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.path)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                  activeSection === link.path.slice(1)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === link.path.slice(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/30"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </div>

          <a
            href="https://github.com/Siddharthcoding"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-surface hover:bg-white/10 border border-border hover:border-white/30 transition-all duration-200"
          >
            <FiGithub size={18} className="text-gray-400 hover:text-white" />
          </a>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileOpen(true)}
          >
            <FiMenu size={24} />
          </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background-primary/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <button
                className="absolute top-6 right-6 text-white p-2"
                onClick={() => setIsMobileOpen(false)}
              >
                <FiX size={32} />
              </button>
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.path)}
className={`text-2xl font-medium ${
                      activeSection === link.path.slice(1)
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <a
                href="https://github.com/Siddharthcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl text-gray-400 hover:text-white"
              >
                <FiGithub size={24} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}