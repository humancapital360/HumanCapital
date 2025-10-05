"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

import "./flipbook.css"

export default function Flipbook() {
  const [spreadIndex, setSpreadIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  // 👉 Replace with your images
  const pages = [
    "/flipbook/0.jpg", // cover
    "/flipbook/1.jpg",
    "/flipbook/2.jpg",
    "/flipbook/3.jpg",
    "/flipbook/4.jpg",
    "/flipbook/5.jpg",
    "/flipbook/6.jpg",
    "/flipbook/7.jpg",
    "/flipbook/8.jpg",
    "/flipbook/9.jpg",
    "/flipbook/10.jpg",
    "/flipbook/11.jpg",
    "/flipbook/12.jpg",
    "/flipbook/13.jpg",
    "/flipbook/14.jpg",
    "/flipbook/15.jpg",
    "/flipbook/16.jpg",
    "/flipbook/17.jpg",
    "/flipbook/18.jpg",
    "/flipbook/19.jpg",
    "/flipbook/20.jpg",
    "/flipbook/21.jpg",
    "/flipbook/22.jpg",
  ]

  // spreads: [ [0], [1,2], [3,4], ... ]
  const spreads: string[][] = []
  if (pages.length > 0) {
    spreads.push([pages[0]]) // cover single
    for (let i = 1; i < pages.length; i += 2) {
      spreads.push(pages.slice(i, i + 2))
    }
  }

  const nextPage = () => {
    if (spreadIndex < spreads.length - 1) {
      setSpreadIndex(spreadIndex + 1)
    }
  }

  const prevPage = () => {
    if (spreadIndex > 0) {
      setSpreadIndex(spreadIndex - 1)
    }
  }

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 2))
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.75))
  const resetZoom = () => setZoom(1)

  // 👉 Swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextPage()
      else prevPage()
    }
    setTouchStartX(null)
  }

  return (
    <div className="flipbook-wrapper">
      <div className="controls">
        <Button onClick={prevPage} disabled={spreadIndex === 0}>
          ◀ Prev
        </Button>
        <Button onClick={nextPage} disabled={spreadIndex === spreads.length - 1}>
          Next ▶
        </Button>
        <Button onClick={zoomOut}>➖ Zoom Out</Button>
        <Button onClick={resetZoom}>🔄 Reset</Button>
        <Button onClick={zoomIn}>➕ Zoom In</Button>
      </div>

      <div
        className="flipbook-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="spread" style={{ transform: `scale(${zoom})` }}>
          {spreads[spreadIndex].map((src, i) => (
            <div key={i} className="page-spread">
              <img src={src} alt={`Page ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
