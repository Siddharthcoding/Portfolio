import { motion } from 'framer-motion'

const FloatingShape = ({ delay, duration, className, style }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 90, 180],
      opacity: [0.03, 0.08, 0.03],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
    className={className}
    style={style}
  />
)

const DotsPattern = () => (
  <div 
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
      backgroundSize: '50px 50px',
    }}
  />
)

export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, #1a1a1a 0%, #000000 60%, #000000 100%)',
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"
      />

      <FloatingShape
        delay={0}
        duration={15}
        className="absolute top-20 left-[10%] w-32 h-32 border border-white/10 rounded-full"
        style={{ borderRadius: '60% 40% 70% 30% / 60% 30% 70% 40%' }}
      />

      <FloatingShape
        delay={2}
        duration={18}
        className="absolute bottom-32 right-[15%] w-24 h-24 border border-white/8 rounded-full"
        style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
      />

      <FloatingShape
        delay={4}
        duration={20}
        className="absolute top-1/3 right-[25%] w-16 h-16 bg-white/5 rounded-full"
      />

      <FloatingShape
        delay={1}
        duration={12}
        className="absolute bottom-1/4 left-[20%] w-20 h-20 border border-white/5"
        style={{ borderRadius: '50% 0 50% 0' }}
      />

      <FloatingShape
        delay={3}
        duration={16}
        className="absolute top-1/2 left-[30%] w-12 h-12 bg-white/3 rounded-full"
      />

      <DotsPattern />

      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, #000000 50%)',
      }} />
    </div>
  )
}