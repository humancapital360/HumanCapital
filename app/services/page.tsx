"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, TrendingUp, Users, Target } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LargeCardAccordion } from "@/components/large-card-accordion"
import { useEffect, useState } from "react"

// Utility function to render text with line breaks
const renderTextWithBreaks = (text: string) => {
  return text.split("<br />").map((part, index, array) => (
    <span key={index}>
      {part}
      {index < array.length - 1 && <br />}
    </span>
  ))
}

export default function ServicesPage() {
const [openAccordion, setOpenAccordion] = useState<number | null>(null)



const serviceDetails = [
    {
      title: "Neighborhood Community Conversion (NCC)",
      content:
        "Our NCC strategy is designed to tackle the City's trash, waste and sanitation crisis through a 90-day micro-planning and thereby circumscribing our wrap-around services against the localized and endemic health and hygiene infirmities. This incremental and ecological approach will proportionally allow our neighborhood custodians to foster a stronger sense of community participation, optimize initial resources for prompt neighborhood notoriety and recognition, and lead to more efficient and sustainable urban development.",
      image: "/images/programs/NCC.png?height=400&width=800&text=NCC+Strategy",
    },
    {
      title: "EcoLife Neighborhood Response System (ENRS)",
      content:
        "Our EcoLife Neighborhood Response System (ENRS) is an innovative platform designed to enhance community engagement and streamline issue resolution. Unlike traditional, linear city communication models, ENRS enables residents to submit informal grievances, upload supporting photographs, and receive a response ticket. When necessary, members of our Environmental Service Technicians (i.e., junk, trash, pest, insects, and landscaping) are dispatched, and thereon an incident report is generated. By giving residents a voice, ENRS fosters empathy, validation, and a sense of partnership. These positive dynamics encourage individuals to take ownership of their community and strengthen their connection to the neighborhood.",
      image: "/images/programs/HC360_ENSR.jpg?height=400&width=800&text=NQR+System",
    },
    {
      title: "My Neighbor®",
      content:
        'Our "My Neighbor™" robots combined with video/audio recording and voice command technology are designed to help keep neighborhoods clean and safe by monitoring and deterring loitering and littering. This technology promotes self-governance and reduces the need for the presence of law enforcement and edifies the neighborhood with technological advancement.',
      image: "/images/programs/HC360_Neighbor.jpg?height=400&width=800&text=My+Neighbor+Robots",
    },
    {
      title: "Reentry Workforce",
      content:
        "Our human resources heavily and purposely rely on local jails, prisons, and halfway houses for our reentry pipeline. Congruently we collaborate with our federal and state institutions, and their reentry staff and coordinators, and thereby we institutionalize our NCC workshops, and we are the only private corporation that offer guaranteed job opportunities to the inmates prior to their release.",
      image: "/images/programs/HC360_Reentry-Workforce.jpg?height=400&width=800&text=Reentry+Workforce",
    },
    {
      title: "Community Services",
      content:
        "Our comprehensive community services include: Sidewalk & Curb Sanitation - Professional cleaning and maintenance of public walkways and street edges. Junk Collection and Disposal - Efficient removal and proper disposal of unwanted items and debris. Trash Clean-up - Regular and emergency waste removal services for cleaner neighborhoods. Pest Control - Safe and effective elimination of harmful pests that threaten community health. Insecticide Landscaping - Integrated pest management combined with beautiful landscape maintenance.",
      image: "/images/programs/HC360_Community-Services.jpg?height=400&width=800&text=Community+Services",
    },
    {
      title: "Veteran to Civilian Reentry",
      content:
        "Our veteran workforce pipeline is intentionally built through partnership with Veterans of Foreign Wars (VFW), military transition programs, the VA, Guard and Reserve units, and veteran service organizations. We work directly with these partners to identify separating service members and offer them a clear, guaranteed path into civilian roles as NCC neighborhood ambassadors, paid, structured work that uses their discipline and experience to provide a trusted, observe-and-report presence in the community from day one after service.",
      image: "/images/programs/civilian-reentry.JPEG?height=400&width=800&text=Community+Services",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navigation />

      <main className="flex-1 pt-[170px]">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-primary/100 text-white border-primary/20 mb-4 sm:mb-6">Our Services</Badge>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Comprehensive Solutions for <span className="text-primary">Success</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
                Empowering individuals and businesses with innovative solutions designed to create lasting impact and
                sustainable growth in communities nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* Business Details Accordion Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <LargeCardAccordion items={serviceDetails} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Ready to Transform Your Future?
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
              Take the first step towards building a successful business and transforming your community. Our team is
              here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="/contact-us"
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/about-us"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
