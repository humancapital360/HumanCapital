"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

interface AccordionItem {
  title: string
  content: string
  image: string
}

interface LargeCardAccordionProps {
  items: AccordionItem[]
}

export function LargeCardAccordion({ items }: LargeCardAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0) // First item active by default

  return (
    <div className="space-y-6 w-[90%] mx-auto sm:w-full">
      {items.map((item, index) => (
        <Card
          key={index}
          className={`overflow-hidden border-0 shadow-lg transition-all duration-700 transform ${
            openIndex === index ? "shadow-2xl scale-[1.02]" : "hover:shadow-xl hover:scale-[1.01]"
          }`}
        >
          <button onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className="w-full text-left">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center sm:text-left flex-1 pr-4">
                  {item.title}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-transform duration-500 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </button>

          <div
            className={`accordion-content overflow-hidden transition-all duration-700 ${
              openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-4 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="prose prose-lg max-w-none w-[90%] mx-auto sm:w-full">
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-lg hover:bg-primary hover:text-white transition-all duration-300 p-3 sm:p-4 rounded-lg border border-gray-100 text-center sm:text-left">
                      {item.content}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-48 sm:h-64 lg:h-auto order-1 lg:order-2">
                  <Image src={item.image || "/placeholder.svg"} fill alt={item.title} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
