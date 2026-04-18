import { motion } from 'framer-motion'
import { useMagnetic } from '../hooks/useMagnetic'

export default function MagneticButton({ children, className = '', href, onClick, ...props }) {
  const { ref, style, handleMouseMove, handleMouseLeave } = useMagnetic({ strength: 0.4 })

  const Component = href ? 'a' : 'button'
  const defaultClassName = 'inline-flex items-center justify-center'

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${defaultClassName} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Component>
  )
}

export function ShimmerButton({ children, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </motion.button>
  )
}