"use client"

import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
  useCommas?: boolean
}

export function AnimatedCounter({ end, suffix = "", duration = 2000, useCommas = false }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  const formatNumber = (num: number) => {
    if (useCommas) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
