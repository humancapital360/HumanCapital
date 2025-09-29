"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

interface AccordionItem {
  title: string
  content: string
  image?: string
}

interface ScrollTriggeredAccordionProps {
  items: AccordionItem[]
}

export function ScrollTriggeredAccordion({ items }: ScrollTriggeredAccordionProps) {
  const [openAccordion, setOpenAccordion] = useState<number>(0) // First accordion open by default
  const [isScrolling, setIsScrolling] = useState(false)
  const accordionRef = useRef<HTMLDivElement>(null)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!accordionRef.current || hasTriggered) return

      const rect = accordionRef.current.getBoundingClientRect()
      const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2

      if (isInView && !isScrolling) {
        setIsScrolling(true)
        setHasTriggered(true)

        // Trigger accordion opening sequence
        let currentIndex = 0
        const interval = setInterval(() => {
          if (currentIndex < items.length) {
            setOpenAccordion(currentIndex)
            currentIndex++
          } else {
            clearInterval(interval)
            setIsScrolling(false)
          }
        }, 1000) // Open each accordion every 1 second

        return () => clearInterval(interval)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items.length, hasTriggered, isScrolling])

  return (
    <div ref={accordionRef} className="w-full max-w-5xl mx-auto space-y-4">
      {items.map((item, index) => (
        <Card
          key={index}
          className={`relative overflow-hidden border-0 shadow-lg transition-all duration-1000 transform ${
            openAccordion >= index ? "shadow-2xl scale-105 z-10" : "hover:shadow-xl"
          }`}
          style={{
            marginTop: index > 0 ? "-20px" : "0",
            zIndex: items.length - index,
          }}
        >
          <Collapsible
            open={openAccordion >= index}
            onOpenChange={(isOpen) => {
              if (!isScrolling) {
                setOpenAccordion(isOpen ? index : -1)
              }
            }}
          >
            <CollapsibleTrigger className="w-full">
              <CardHeader className="p-8 hover:bg-gray-50 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-gray-900 text-left">{item.title}</CardTitle>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-500 ${
                      openAccordion >= index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="relative">
                {item.image && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black opacity-70" />
                  </>
                )}
                <CardContent className={`relative z-10 p-8 ${item.image ? "text-white" : "text-gray-600"}`}>
                  <p className="text-lg leading-relaxed">{item.content}</p>
                </CardContent>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}
    </div>
  )
}
