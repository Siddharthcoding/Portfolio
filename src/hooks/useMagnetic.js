import { useState, useRef, useCallback } from 'react'

export function useMagnetic(options = {}) {
  const {
    strength = 0.3,
    speed = 300,
  } = options

  const [style, setStyle] = useState({
    transform: 'translate(0px, 0px)',
    transition: `transform ${speed}ms ease-out`,
  })

  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    const translateX = distanceX * strength
    const translateY = distanceY * strength

    setStyle({
      transform: `translate(${translateX}px, ${translateY}px)`,
      transition: `transform ${speed}ms ease-out`,
    })
  }, [strength, speed])

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'translate(0px, 0px)',
      transition: `transform ${speed}ms ease-out`,
    })
  }, [speed])

  return { ref, style, handleMouseMove, handleMouseLeave }
}

export default useMagnetic