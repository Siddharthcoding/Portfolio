import { useState, useRef, useCallback } from 'react'

export function useTilt(options = {}) {
  const {
    maxTilt = 15,
    perspective = 1000,
    speed = 400,
    easing = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  } = options

  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
    transition: `transform ${speed}ms ${easing}`,
  })

  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    const centerX = width / 2
    const centerY = height / 2

    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: `transform ${speed}ms ${easing}`,
    })
  }, [maxTilt, perspective, speed, easing])

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
      transition: `transform ${speed}ms ${easing}`,
    })
  }, [perspective, speed, easing])

  return { ref, style, handleMouseMove, handleMouseLeave }
}

export default useTilt