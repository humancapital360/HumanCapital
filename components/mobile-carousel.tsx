"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MobileCarouselProps {
  children: React.ReactNode[]
  autoSlide?: boolean
  slideInterval?: number
  className?: string
}

export function MobileCarousel({
  children,
  autoSlide = true,
  slideInterval = 4000,
  className = "",
}: MobileCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoSlideRef = useRef<NodeJS.Timeout>()

  const totalSlides = children.length

  useEffect(() => {
    if (autoSlide && !isDragging && totalSlides > 1) {
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, slideInterval)
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current)
      }
    }
  }, [autoSlide, slideInterval, totalSlides, isDragging])

  // Touch/Mouse handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
    }
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 50
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
      } else if (translateX < 0) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }
    }

    setTranslateX(0)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={carouselRef}
        className="overflow-hidden"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${-currentSlide * 100 + (isDragging ? (translateX / (carouselRef.current?.offsetWidth || 1)) * 100 : 0)}%)`,
          }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Removed disabled states for infinite loop */}
      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full p-0 bg-transparent"
        >
          <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full p-0 bg-transparent"
        >
          <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
        </Button>
      </div>

      {/* Dots Indicator - Smaller dots for mobile */}
      <div className="flex justify-center gap-1 xs:gap-2 mt-3 sm:mt-4">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-primary w-4 xs:w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
