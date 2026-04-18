import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiGitBranch, FiGithub, FiExternalLink } from 'react-icons/fi'
import { featuredProjects, filterCategories } from '../data/projects'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 70, damping: 15, mass: 0.8 } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.9, 
    transition: { type: 'spring', stiffness: 150, damping: 20 } 
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
}

const languageColors = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  React: '#61DAFB',
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      className="group relative bg-background-secondary rounded-2xl overflow-hidden border border-border hover:border-white/40 transition-all duration-300"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
        animate={{
          borderColor: [
            'rgba(255,255,255,0)',
            'rgba(255,255,255,0.2)',
            'rgba(255,255,255,0)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="relative h-44 overflow-hidden bg-background-tertiary">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          {Array.isArray(project.language) ? (
            project.language.slice(0, 2).map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: languageColors[lang] || '#6e7681' }}
              >
                {lang}
              </span>
            ))
          ) : (
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: languageColors[project.language] || '#6e7681' }}
            >
              {project.language}
            </span>
          )}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-background-primary/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <FiGithub size={16} className="text-white" />
        </a>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 bg-surface rounded text-xs text-gray-400"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-500">
              <FiStar size={14} />
              <span className="text-sm">{project.stars}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <FiGitBranch size={14} />
              <span className="text-sm">{project.forks}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs hover:bg-green-500/30 transition-colors"
              >
                <FiExternalLink size={10} />
                Live
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white text-sm hover:underline"
            >
              <FiGithub size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? featuredProjects
      : featuredProjects.filter((p) => {
          const langs = Array.isArray(p.language) ? p.language : [p.language]
          return langs.some(l => l.toLowerCase() === activeFilter.toLowerCase())
        })

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Some of the projects I've worked on
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-white text-black'
                  : 'bg-surface border border-border text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Siddharthcoding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-surface border border-border rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <FiGithub />
            View All Projects
            <FiExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}