import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMapPin, FiCode, FiDatabase, FiCpu } from 'react-icons/fi'

const DESIGNS = [
  'Full-Stack Developer',
  'DSA Enthusiast',
  'ML Explorer',
]

const floatingElements = [
  { icon: FiCode, label: '<>', color: '#ffffff', top: '15%', left: '5%' },
  { icon: FiDatabase, label: '{}', color: '#cccccc', top: '60%', left: '3%' },
  { icon: FiCpu, label: 'AI', color: '#aaaaaa', top: '70%', right: '5%' },
  { icon: FiCode, label: '{}', color: '#ffffff', top: '20%', right: '8%' },
]

const RESUME_URL = 'https://drive.google.com/file/d/1n7k6A5qbvZcL65TuncJdiDoTNMo8AGop/view?usp=sharing'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const role = DESIGNS[currentRole]
    const timeout = isDeleting ? 50 : 80

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % DESIGNS.length)
        }
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  }

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[100px]"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <br />
            <span className="text-white">Siddharth</span>
            <br />
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Kumar Mishra
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-2xl md:text-3xl text-gray-400 mb-6 h-14 flex items-center">
            <span className="text-white mr-2">I am</span>
            <span className="text-white">{displayText}</span>
            <span className="w-1 h-8 bg-white ml-1 animate-pulse" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed"
          >
            Passionate developer from India on a journey from DSA to full-stack development.
            Exploring React, Node.js, and Machine Learning to build impactful solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              View Projects
              <FiArrowRight />
            </motion.a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent-purple/50 text-accent-purple font-medium rounded-full hover:bg-accent-purple/10 transition-colors flex items-center gap-2"
            >
              <FiDownload size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a
              href="https://github.com/Siddharthcoding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-kumar-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all"
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="hidden lg:flex justify-center items-center relative">
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-white/10 blur-3xl absolute" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-background-secondary">
              <img
                src="https://avatars.githubusercontent.com/u/140817732?v=4"
                alt="Siddharth Kumar Mishra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-card px-5 py-3"
            >
              <p className="text-sm text-gray-400">KIIT University</p>
              <p className="text-white font-medium">B.Tech CS</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 flex items-center gap-2"
            >
              <FiMapPin className="text-white" />
              <span className="text-white">India</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-sm">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 8] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-1 h-2 bg-accent-purple rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}