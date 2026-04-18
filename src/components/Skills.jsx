import { motion } from 'framer-motion'
import { FaReact, FaNode, FaPython, FaGitAlt, FaDocker, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiMysql, SiTailwindcss, SiRedis, SiVite, SiExpress, SiJavascript, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNode, color: '#339933' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', icon: FaHtml5, color: '#E34C26' },
  { name: 'CSS', icon: FaCss3, color: '#264DE4' },
  { name: 'Express', icon: SiExpress, color: '#fff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15, mass: 0.8 } },
}

function SkillCard({ skill }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex items-center gap-2 px-5 py-3 bg-background-secondary rounded-xl border border-border hover:border-white/30 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5 transition-all cursor-default"
    >
      <skill.icon size={20} style={{ color: skill.color }} />
      <span className="font-medium text-gray-200">{skill.name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}