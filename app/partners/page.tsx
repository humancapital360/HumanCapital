"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Handshake } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PartnersPage() {
  const partners = [
    {
      name: "Complex Marketing 360",
      description:
        "Providing transactional income and profit generating opportunities to consumers.",
      logo: "/images/partners/cm360.png",
      width: 80,
      height: 80,
      url: "https://complexmarketing360.com",
    },
    {
      name: "Protect Us Kids",
      description:
        "Empowering and Protecting Every Child's Right to a Safe Online Experience, Unrestricted by Economic Boundaries. Human Capital 360 supports Protect Us Kids",
      logo: "/images/partners/puk.webp",
      width: 80,
      height: 80,
      url: "https://www.protectuskids.org/support-us",
    },
    {
      name: "Global Cyber Security Advisory Group",
      description:
        "Pioneering Global Cybersecurity Sustainability and Innovation",
      logo: "/images/partners/gcs.webp",
      width: 80,
      height: 80,
      url: "https://globalcyberadvisory.com/intro-to-cybersecurity-sustainabiity",
    },
    {
      name: "Garden of Eden",
      description:
        "Transforming Neighborhoods, Empowering Lives",
      logo: "/images/partners/goe.png",
      width: 80,
      height: 80,
      url: "https://www.goehelps.com",
    },
    {
      name: "Tech Excel Innovations",
      description:
        "Helping businesses thrive by delivering reliable, scalable, and high-performing digital solutions that drive impact and growth.",
      logo: "/images/partners/techexcel.png",
      width: 180,
      height: 80,
      url: "https://techex.com.ng",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />

      <main className="flex-1 pt-[170px]">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[170px] pt-[180px] pb-[70px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-500/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8">
              <Badge className="bg-primary/100 text-white border-primary/20 animate-bounce-in">
                <Handshake className="w-4 h-4 mr-2" />
                Partners
              </Badge>

              <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                  Our Trusted Partners
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                We collaborate with world-class organizations to create impact,
                drive innovation, and transform industries.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet <span className="text-primary">Our Partners</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Together, we build solutions that shape the future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        width={partner.width}
                        height={partner.height}
                        className="object-contain mx-auto"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {partner.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{partner.description}</p>
                    <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                      >
                        Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Want to Partner With Us?
              </h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
                Let’s collaborate to create sustainable impact and innovative
                solutions across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  >
                    Become a Partner
                  </Button>
                </Link>
                <Link href="/about-us">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
