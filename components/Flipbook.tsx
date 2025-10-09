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
    "/flipbook/p1.png", // cover
    "/flipbook/p2.png",
    "/flipbook/p3.png",
    "/flipbook/p4.png",
    "/flipbook/p5.png",
    "/flipbook/p6.png",
    "/flipbook/p7.png",
    "/flipbook/p8.png",
    "/flipbook/p9.png",
    "/flipbook/p10.png",
    "/flipbook/p11.png",
    "/flipbook/p12.png",
    "/flipbook/p13.png",
    "/flipbook/p14.png",
    "/flipbook/p15.png",
    "/flipbook/p16.png",
    "/flipbook/p17.png",
    "/flipbook/p18.png",
    "/flipbook/p19.png",
    "/flipbook/p20.png",
    "/flipbook/p21.png",
    "/flipbook/p22.png",
    "/flipbook/p23.png",
    "/flipbook/p24.png",
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
