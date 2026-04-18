import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GeometricBackground from './components/GeometricBackground'

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background-primary animated-gradient">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 60, damping: 12 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(255,255,255,0.1)',
                    '0 0 40px rgba(255,255,255,0.25)',
                    '0 0 20px rgba(255,255,255,0.1)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl"
              >
                <span className="text-2xl font-bold text-white tracking-widest">SKM</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center gap-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [0.6, 1, 0.6], opacity: [0.3, 1, 0.3] }}
                    transition={{ 
                      duration: 1.2, 
                      repeat: Infinity, 
                      delay: i * 0.2,
                      ease: 'easeInOut'
                    }}
                    className="w-2 h-2 rounded-full bg-white"
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <GeometricBackground />
          <div className="vignette-overlay" />
          <div className="vignette-glow" />
          <div className="noise-overlay" />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App