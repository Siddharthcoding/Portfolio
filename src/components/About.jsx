import { motion } from 'framer-motion'
import { FiCode, FiBriefcase, FiUsers, FiCoffee, FiHeart } from 'react-icons/fi'

const learningJourney = [
  {
    period: 'Aug 2023',
    title: 'DSA Journey Started',
    tech: 'C++',
    description: 'Started competitive programming & Data Structures. Solved 200+ problems.',
  },
  {
    period: 'Jan 2024',
    title: 'Web Development',
    tech: 'HTML, CSS, JS',
    description: 'Learned front-end fundamentals. Built first web projects.',
  },
  {
    period: 'Aug 2024',
    title: 'Full-Stack Dev',
    tech: 'React, Node.js',
    description: 'Built REST APIs and React applications.',
  },
  {
    period: 'Present',
    title: 'AI/ML Exploration',
    tech: 'Python, ML',
    description: 'Exploring artificial intelligence and machine learning.',
  },
]

const strengths = [
  'Problem Solving',
  'Full-Stack Dev',
  'Competitive Programming',
  'Machine Learning',
]

const openFor = [
  { label: 'Internships', icon: FiBriefcase },
  { label: 'Collaborations', icon: FiUsers },
  { label: 'Freelance', icon: FiCoffee },
  { label: 'Mentorship', icon: FiHeart },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15, mass: 0.8 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My journey from learning DSA to building real-world applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 glass-card p-5 hover:bg-white/5 transition-all"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Learning Journey</h3>
            <div className="space-y-3">
              {learningJourney.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.03)' }}
                  className="flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-white text-sm font-medium">{item.period}</span>
                      <span className="text-gray-600 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{item.tech}</span>
                    </div>
                    <h4 className="text-white text-sm font-medium">{item.title}</h4>
                    <p className="text-gray-500 text-xs truncate">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-5 hover:bg-white/5 transition-all"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">Education</h3>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <FiCode className="text-white" size={18} />
              </div>
              <div>
                <h4 className="text-white text-sm font-medium">B.Tech CS</h4>
                <p className="text-gray-500 text-xs">KIIT University</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-2 py-1 bg-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-xs">2023 - 2027</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-5 hover:bg-white/5 transition-all"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">Open For</h3>
            <div className="grid grid-cols-2 gap-2">
              {openFor.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 p-2 bg-white/5 rounded-lg cursor-pointer transition-all"
                >
                  <item.icon className="text-white" size={14} />
                  <span className="text-white text-xs">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 glass-card p-5 hover:bg-white/5 transition-all"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">Key Strengths</h3>
            <div className="grid grid-cols-2 gap-2">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="px-3 py-2 bg-white/5 rounded-lg text-gray-300 text-sm text-center cursor-pointer transition-all"
                >
                  {strength}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 glass-card p-5 hover:bg-white/5 transition-all"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">Currently Exploring</h3>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'AI Integration', 'System Design', 'Cloud Architecture'].map((topic, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 bg-white/10 text-white rounded-full text-sm cursor-default"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}