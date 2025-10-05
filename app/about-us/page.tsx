"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Star,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  HeartHandshake,
  CheckCircle,
  Lightbulb,
  Leaf,
} from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Utility function to render text with line breaks
const renderTextWithBreaks = (text: string) => {
  return text.split("<br />").map((part, index, array) => (
    <span key={index}>
      {part}
      {index < array.length - 1 && <br />}
    </span>
  ))
}

export default function AboutUsPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    document.title = "About Us - Human Capital 360"
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    {
      number: 100,
      suffix: "+",
      label: "Lives Impacted",
      icon: Users,
      mobileNumber: 100,
      mobileSuffix: "",
      useCommas: true,
    },
    { number: 95, suffix: "%", label: "Success Rate", icon: Target },
    { number: 5, suffix: "+", label: "Businesses Launched", icon: Award },
    { number: 10, suffix: "+", label: "Expert Partners", icon: Star },
  ]

  const values = [
    {
      title: "Dignity",
      description: "We treat every individual with respect and uphold their inherent worth in all our interactions.",
      icon: HeartHandshake,
      gradient: "from-primary to-primary/70",
    },
    {
      title: "Accountability",
      description: "We take responsibility for our actions and deliver on our commitments with integrity.",
      icon: CheckCircle,
      gradient: "from-secondary to-secondary/70",
    },
    {
      title: "Partnership",
      description: "We foster meaningful collaborations that amplify value and expand opportunities.",
      icon: Users,
      gradient: "from-primary to-primary/70",
    },
    {
      title: "Innovation",
      description: "We embrace creativity and forward-thinking solutions to drive lasting impact.",
      icon: Lightbulb,
      gradient: "from-secondary to-secondary/70",
    },
    {
      title: "Sustainability",
      description: "We prioritize practices that ensure long-term growth, resilience, and positive change.",
      icon: Leaf,
      gradient: "from-primary to-primary/70",
    },
  ]

  const features = [
    {
      title: "Character Training",
      description:
        "Unlike coaching, motivational speaking, or mentorship which often rely on ongoing, interdependent relationships.  Our “Building Your Moral Muscle” fitness and strength training program equips ex-offenders with the moral integrity and resilience needed to resist behaviors that lead to recidivism.<br /><br /> The training is carefully designed to align with the realities of incarceration, halfway house experiences, and the challenges of reentry, ensuring participants build lasting foundations for success.",
      image: "/images/HC360_Character-Training.jpg",
      icon: Shield,
      gradient: "from-primary to-primary/70",
      features: [
        "Moral integrity development",
        "Recidivism resistance training",
        "Incarceration correlation programs",
        "Halfway house preparation",
        "Reentry support systems",
      ],
    },
    {
      title: "Digital Transformation",
      description:
        "While personal development and rehabilitation often create a pathway to success in life, prolonged incarceration has left many aspiring entrepreneurs disconnected from the rapid pace of technological advancement and the critical role it plays in modern business development.<br /><br />To bridge this gap, we provide ex-offenders and marginalized business owners with our proprietary Owner-360° system. This integrated platform equips entrepreneurs with essential tools for success, including a personalized website, branding support, a business dashboard, and built-in Customer Relationship Management and Enterprise Resource Platform capabilities.",
      image: "/images/HC360_Digital-Transformation1.jpg",
      icon: Globe,
      gradient: "from-secondary to-secondary/70",
      features: [
        "Custom website development",
        "Professional branding packages",
        "Business dashboard systems",
        "CRM implementation",
        "ERP system integration",
      ],
    },
    {
      title: "Capital Access",
      description:
        "We are partners with lenders, investors and philanthropist that appreciate the personal development and human resources of disciplined ex-offenders that have a solid business plan but lack the necessary funding to create new economies in their communities, and as a partner of Human Capital 360, will assist ex-offenders secure business capital.",
      image: "/images/HC360_Capital-Access.jpg",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      features: [
        "Lender partnerships",
        "Investor connections",
        "Philanthropic funding",
        "Business plan development",
        "Community economic development",
      ],
    },
  ]

  const additionalFeatures = [
    {
      title: "Business Diagnostics & Alignment",
      description:
        "Comprehensive business assessment and strategic alignment services to ensure your business foundation is solid and growth-ready.",
      icon: Target,
    },
    {
      title: "Risk Management & S.A.F.E.T.Y. Valve",
      description:
        "Protect your business with our comprehensive risk management approach including cybersecurity, financial planning, and operational security.",
      icon: Shield,
    },
    {
      title: "Marketing & Customer Acquisition",
      description:
        "Proven marketing strategies and customer acquisition frameworks designed to build sustainable business relationships.",
      icon: Users,
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
                <Zap className="w-4 h-4 mr-2" />
                About Human Capital 360°
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Story
                </span>
              </h1>

              <p
                className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left px-4"
                style={{ animationDelay: "0.2s" }}
              >
                Empowering transformation through innovation, one neighborhood at a time. Discover the mission, vision,
                and values that drive our commitment to community development.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center sm:text-left">
                    Our <span className="text-primary">Mission</span>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center sm:text-left">
                    Our adopted "No grime, No crime" mission is to improve the quality of life in every neighborhood and
                    reduce recidivism Nation-wide.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center sm:text-left">
                    Our <span className="text-primary">Vision</span>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center sm:text-left">
                    To become the leading consortium providing comprehensive solutions that transform lives and create
                    sustainable economic opportunities in underserved communities worldwide.
                  </p>
                  <br />
                  <br />
                  <Link href="/company-profile" passHref>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 text-xs xs:text-sm sm:text-base px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-4 md:py-6"
                    >
                      View Company Profile
                      <ArrowRight className="ml-1 xs:ml-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <Image
                  src="/images/HC360_Empowering-Transformation.jpg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="Mission and Vision"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-primary/100 text-white border-secondary/20 mb-4">Our Values</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                What Drives <span className="text-primary">Us</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Our core values guide every decision we make and every program we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-[90%] mx-auto sm:w-full">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <CardHeader className="relative z-10 w-[90%] mx-auto text-center">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                    >
                      <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 w-[90%] mx-auto text-center">
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section id="core-features" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              <div className="text-center mb-12 sm:mb-16">
                <Badge className="bg-primary/100 text-white border-secondary/20 mb-4">Core Features</Badge>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                  Supporting Your <span className="text-primary">Journey</span>
                </h2>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                  Beyond our core features, we offer comprehensive support systems designed to ensure your long-term
                  success and sustainable growth.
                </p>
              </div>

              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`space-y-4 sm:space-y-6 text-center md:text-left ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0`}
                    >
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                      {feature.title}
                    </h2>
                    <div className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed px-2 md:px-0">
                      {renderTextWithBreaks(feature.description)}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Key Features:</h3>
                      <ul className="space-y-2">
                        {feature.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-xs xs:text-sm sm:text-base text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Card className="border-0 shadow-2xl overflow-hidden w-[90%] mx-auto md:w-full">
                      <CardContent className="p-0">
                        <div
                          className={`h-64 sm:h-80 md:h-96 bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                        >
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={2000}
                            height={1067}
                            className="opacity-100 object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Featured Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 sm:mb-16">
              {/*  <Badge className="bg-primary/100 text-white border-secondary/20 mb-4">Additional Features</Badge> */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Additional <span className="text-primary">Features</span>
              </h2>
              {/*  <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Beyond our core services, we offer comprehensive support systems designed to ensure your long-term success and sustainable growth.
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {additionalFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[90%] mx-auto md:w-full"
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary to-secondary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <CardTitle className="text-base xs:text-lg sm:text-xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center w-[90%] mx-auto">
                    <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Impact</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Numbers that reflect our commitment to transformation and community development.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-[90%] mx-auto sm:w-full">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-3 sm:p-8 w-[90%] mx-auto">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">
                      <span className="hidden md:inline">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} useCommas={stat.useCommas} />
                      </span>
                      <span className="md:hidden">
                        <AnimatedCounter
                          end={stat.mobileNumber || stat.number}
                          suffix={stat.mobileSuffix || stat.suffix}
                          useCommas={stat.useCommas}
                        />
                      </span>
                    </div>
                    <p className="text-xs sm:text-base text-gray-600 font-medium">{stat.label}</p>
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
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Future?</h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-8 px-4">
                Join thousands of individuals who have already started their transformation journey with Human Capital
                360°.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-sm sm:text-lg px-6 py-4 sm:px-8 sm:py-6"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link href="/team">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 text-sm sm:text-lg px-6 py-4 sm:px-8 sm:py-6 bg-transparent"
                  >
                    Meet Our Team
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
