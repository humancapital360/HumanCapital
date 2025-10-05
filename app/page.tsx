"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Users,
  Target,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  PersonStanding,
  BriefcaseBusiness,
  Shovel,
} from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Linkedin, Facebook, Twitter, Instagram, Youtube, TikTok } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCarousel } from "@/components/mobile-carousel"
import { ContactForm } from "@/components/contact-form"

// Utility function to render text with line breaks
const renderTextWithBreaks = (text: string) => {
  return text.split("<br />").map((part, index, array) => (
    <span key={index}>
      {part}
      {index < array.length - 1 && <br />}
    </span>
  ))
}

export default function Component() {
  const [scrollY, setScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0)
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const executiveTeam = [
    {
      name: "PAMELA WISE-MARTINEZ",
      title: "Chief Executive Officer",
      description:
        "Company Executive, Human Capital 360° enterprise transformation, architecture mandates, and Owner-360° business opportunity excellence.",
      image: "/images/team/Pam1.jpg",
      badge: "CEO",
      fullBio:
        "Our Chief Executive Officer Pamela Wise-Martinez, brings C-suite experience and multi-industry delivering critical infrastructure innovation for corporate return on investment and growth through business and technology analysis and capability assessments. Pamela has nearly 3 decades in private and public sectors as advisor, strategic planner, transformation expert, designing and scaling people, processes and technology for businesses world-wide.<br /><br />She led the creation of the data interoperability model for international standards, defined initial Industrial Internet of Things use cases. Pamela pioneered Service Oriented capability and led business agility thinking across industries. She authored the Energy data Ontology, and computational intelligence capability through machine learning and advance predictions for Global energy usage. Pamela served as, Global Executive Director for Innovation and Architect at Whirlpool Corp, where she identified over 40 million in saving though Machine Learning for quality and demand forecasting.<br /><br />As Managing Director, Global Chief Enterprise Architect at Deloitte & Touché, she led over 200 + cross-functional team of principal engineers, developers and solution architects delivering next generation technology, engineering planning, and complex concepts in service technologies for billion-dollar IT transformation. A Scientist, Inventor and IT Executive, She was awarded a patent for the first biometric financial transaction secured technology. Pamela holds a Masters in Engineering Management and Bachelors of Science in Information Systems.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/pamelasimartinez",
        facebook: "https://facebook.com/pamelasimartinez",
        instagram: "https://instagram.com/pamelasimartinez",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "CLARENCE DICKERSON",
      title: "President",
      description:
        "Experienced in managing and leading several multimodal projects and programs for all surface transportation modes, including highways, streets, bridges, tunnels, transit, as well as bicycle and pedestrian pathways.",
      image: "/images/team/Clar.jpg",
      badge: "President",
      fullBio:
        "Clarence L. Dickerson III, P.E.<br /> Licensed Professional Engineer with over 20 years of experience in transportation engineering, traffic operations, multimodal planning, and infrastructure program management.<br /> He has led multi-million-dollar projects across highways, bridges, tunnels, transit, and bicycle/pedestrian networks, excelling in executive leadership, budget management, stakeholder engagement, and staff development.<br /><br />Core Competencies<br /> Transportation Program Management<br /> Traffic Engineering & Safety<br /> Multimodal Planning<br /> Budget Administration<br /> Contract & Vendor Oversight<br /> Organizational Development<br /> Public & Stakeholder Engagement<br /><br />Professional Experience<br /> Currently Administrator, Office of Transportation, Howard County Government, MD, overseeing planning, transit, and a $27M budget.<br /> Previously Deputy Director, Department of Public Works, Howard County, MD, leading safety and organizational programs.<br /> Former Director of Traffic Engineering at EXP U.S. Services, Washington, DC, managing traffic engineering and design projects.<br /> Held multiple engineering leadership roles at DDOT, Washington, DC, managing major transportation projects, safety programs, and work zone policies.<br /> Earlier roles at North Carolina DOT included design and field engineering for highway and bridge projects.<br /><br />Education<br /> B.S., Civil Engineering, North Carolina Agricultural and Technical State University<br /><br />Licensure & Certification<br /> Professional Engineer, Washington, DC<br /> Engineer in Training, Washington, DC<br /><br />Publication<br /> Authored a paper on citywide work-zone management for the Transportation Research Board.<br />",
      socialMedia: {
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "DANTA TERRY VAUGHN",
      title: "Chief Operation Officer",
      description:
        "Company Executive, Human Capital 360°, Neighborhood Community Conversion (NCC) programs, business development, solutions, and sustainability.",
      image: "/images/team/Danta.jpg",
      badge: "COO",
      fullBio:
        "Our Chief Operation Officer Mr. Danta Terry Vaughn, is a serial entrepreneur with over 3 decades of professional study in personal development and leadership coaching. As a former international direct marketing expert, and leader over a global organization of recruiters, network marketers and sales team delivering millions in revenue. Mr. Vaughn has provided human resources for fortune 500 companies; and a former business loan officer, qualifying and matching entrepreneurs with respective lenders.<br /><br />Terry's story is one of triumph and personal sacrifice by evolving from educational deprivation, poverty, and survival techniques using empirical street knowledge, psychology and empathic human intelligence. Through his marketing and collaboration genius Terry has assisted businesses in finance, energy, legal, security automation, identity protection, travel and lifestyle services, roofing and building construction industries, facilitating numerous entrepreneurs to shift mindsets using his self-taught and proven marketing concepts world-wide.<br /><br />Mr. Vaughn has mastered strategies of personal development, character training, and human capital and made it a personal quest to help others realized their human capital potential and financial growth. Today, Terry continues to grow his marque with multiple books and additional niched businesses on the horizon.",
      socialMedia: {
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Dr. Tushar Hazra",
      title: "Chief Technology Officer",
      description:
        "Technology innovator leading the development of cutting-edge solutions that empower our clients' digital transformation.",
      image: "/images/team/dr-tushar.jpg",
      badge: "CTO",
      fullBio:
        "Dr. Tushar Hazra has joined Human Capital 360° as the Chief Technology Officer (CTO). For the past twenty-five years, Dr. Hazra has designed, developed, and delivered innovative, practical, and transformative platforms for progressive start-ups and small businesses. In this professional C-suite capacity, he has provided strategic leadership to envision and formulate roadmaps and blueprints for companies to succeed in their transformation journey.<br /><br />One of Dr. Hazra's recent endeavors includes leading digital business transformation for many global businesses. Tushar completed the Executive CTO Program from the Wharton School at the University of Pennsylvania in Philadelphia in 2024. He has also pursued the Executive Program on Product Strategy and Management at the Kellogg School of Business at Northwestern University, Evanston, IL. During his professional career, Tushar has demonstrated C-level executive partnership, thought leadership, program management, P&L responsibility, and expertise in technology, engineering, and business domains.<br /><br />He has successfully leveraged emerging technologies, including Artificial Intelligence (AI), Machine Learning (ML), social media, cloud computing, big data analytics, cybersecurity, the Internet of Things, and mobile computing. Before joining Human Capital 360°, Tushar developed and led large-scale solution strategies, roadmaps, and program-level execution, guiding systems integration programs with major corporate enterprises in healthcare, financial services, insurance, retail, and supply chain industries, as well as twenty-one (21) US federal government agencies. Tushar spends his spare time conducting wine tastings, wine-food pairings, and ratings, as well as exploring modern wine-making techniques. Tushar served on the Boards of two world-recognized wineries.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/tusharhazar",
        facebook: "https://facebook.com/tusharhazar",
        instagram: "https://instagram.com/tusharhazar",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "SHANA NUSSBAUM",
      title: "Vice President/Business Services",
      description:
        "Company Executive, Head of Human Capital 360°,  company (and clients) business services, and consultancy for business acceleration.",
      image: "/images/team/Shana2.png",
      badge: "VP",
      fullBio:
        "Shana Nussbaum, brings strategic and technical experience as a strategic planner, program manager, and Business Architect with 22+ years of defense, government, intelligence, manufacturing, and information technology experience. Shana quickly absorbs new technical subject matter information and has a passion for learning about people and their businesses. She excels at guiding teams to apply qualitative and quantitative business analysis to improve effectiveness and efficiency.<br /><br />She naturally builds situational awareness across disparate divisions by building trust and fostering communication. As the Principal Lead Agile Engineer at Whirlpool Corporation, she led a 100+ member team of architects and business relationship managers to create and implement a tailored Enterprise Architecture strategy.<br /><br />Shana holds a Master of Science in Education, completed most of her Masters in Business Administration for Finance, and a Bachelor of Science in Aerospace Engineering. She is also a Lean Six Sigma Black Belt and SAFe Practitioner. In her spare time, Shana is usually found in her greenhouse or garden, and volunteer extensively with Scouts USA and other youth organizations.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/sharonnussbaum",
        facebook: "https://facebook.com/sharonnussbaum",
        instagram: "https://instagram.com/sharonnussbaum",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "VEDA WOODS",
      title: "Senior Vice President/Chief Information Security Officer",
      description:
        "Company Executive oversees the Human Capital 360° cybersecurity and advisory for our company and contractors.",
      image: "/images/team/Veda2.png",
      badge: "CISO",
      fullBio:
        "Veda Woods is a distinguished cybersecurity executive with nearly three decades of experience across public, private and NGO sectors, specializing in cybersecurity, cyber risk management, and digital governance. As the CEO of Global Cyber Security Advisory Group and Founder of Protect Us Kids Foundation, she leads initiatives against online child sexual exploitation and champions cybersecurity risk strategies that protect diverse communities and regulated industries worldwide. Her previous roles include Executive Director at Morgan Stanley and CISO for the former U.S. White House Executive Office of the President's Recovery Accountability and Transparency Board.<br /><br />Ms. Woods holds a Master of Science in Information Assurance, Public Health Informatics and several top industry certifications, reflecting her commitment to the highest cybersecurity standards. Her leadership extends to promoting diversity in STEM/STEAM and advocating for sustainability in cybersecurity practices.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/vedawoods",
        facebook: "https://facebook.com/vedawoods",
        instagram: "https://instagram.com/vedawoods",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  const services = [
    {
      title: "Neighborhood Community Conversion (NCC)",
      description:
        'Our NCC strategy is designed to tackle the City\'s trash, waste and sanitation crisis through a 90-day micro-planning and thereby circumscribing our wrap-around services against the localized and endemic health and hygiene infirmities.<br /><br /> This incremental and ecological approach will proportionally allow our neighborhood custodians to foster a stronger sense of community participation, optimize initial resources for prompt neighborhood notoriety and recognition, and lead to more efficient and sustainable urban development.',
      icon: PersonStanding,
      gradient: "from-primary to-primary/70",
      delay: "0s",
    },
    {
      title: "Reentry Workforce",
      description:
        "Our human resources heavily and purposely rely on local jails, prisons, and halfway houses for our reentry pipeline.<br /><br /> Congruently we collaborate with our federal and state institutions, and their reentry staff and coordinators, and thereby we institutionalize our NCC workshops, and we are the only private corporation that offer guaranteed job opportunities to the inmates prior to their release.",
      icon: BriefcaseBusiness,
      gradient: "from-secondary to-secondary/70",
      delay: "0.2s",
    },
    {
      title: "Community Services",
      description:
        "Our comprehensive community services include: Sidewalk & Curb Sanitation - Professional cleaning and maintenance of public walkways and street edges. Junk Collection and Disposal - Efficient removal and proper disposal of unwanted items and debris.<br /><br /> Trash Clean-up - Regular and emergency waste removal services for cleaner neighborhoods. Pest Control - Safe and effective elimination of harmful pests that threaten community health. Insecticide Landscaping - Integrated pest management combined with beautiful landscape maintenance.",
      icon: Shovel,
      gradient: "from-primary to-secondary",
      delay: "0.4s",
    },
  ]

  const stats = [
    {
      number: 100,
      suffix: "+",
      label: "Lives Impacted",
      icon: Users,
      mobileNumber: 100,
      mobileSuffix: "+",
      useCommas: true,
    },
    { number: 95, suffix: "%", label: "Success Rate", icon: Target },
    { number: 500, suffix: "+", label: "Businesses Launched", icon: Award },
    { number: 50, suffix: "+", label: "Expert Partners", icon: Star },
  ]

  const testimonials = [
    {
      quote:
        "The alignment of technology with the expertise and application of experts are like training wheels on your first bike for an entrepreneurial and startup.",
      name: "Mike",
      title: "Startup Entrepreneur",
      image: "/images/icons/user-icon.svg?height=50&width=50",
    },
    {
      quote:
        "After all the costs associated with developing and launching my business, I decided that the most inexpensive way to scale was through apps, but reluctantly I came to learn that the most profitable way to scale was through human business intelligence, and support that I now receive.",
      name: "Jane Smith",
      title: "Entrepreneur Interview 2024",
      image: "/images/icons/user-icon.svg?height=50&width=50",
    },
    {
      quote:
        "When I first contacted Human Capital 360°, my business was nothing but a concept and a huge investment budget, but being excited, I convinced myself that I had a viable business 'plan'. And like many emotional and vulnerable intended entrepreneurial I went on a search for a business coach who would help me build a business. I got on the phone with one of your representatives who, very impressive, would not accept any intake fees, and literally sent me back to the drawing board. I was told to first design a micro-plan that you guys would simulate into a macro-plan, and we went from there.",
      name: "Michael Johnson",
      title: "One on One Coaching 2024",
      image: "/images/icons/user-icon.svg?height=50&width=50",
    },
    {
      quote:
        "What I learned about myself, and it's correlation to the growth of my business is something that technology alone could never do for anyone. The celebration of my humanity, dignity, self improvement, financial growth and community development is 360°.",
      name: "Howard",
      title: "Class Attendee 2023",
      image: "/images/icons/user-icon.svg?height=50&width=50",
    },
    {
      quote:
        "I went from a client to a representative due to the value, and 'Human Capital' that I see in serving others that I now place over the solitary things I wanted to accomplish for myself. Ironically, I realized very fast that if you help enough people get what they want, that (like 360° degrees) you will get everything you want and more.",
      name: "James",
      title: "One on One Coaching, 2024",
      image: "/images/icons/user-icon.svg?height=50&width=50",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />

      <main className="flex-1 pt-[100px] xs:pt-[105px] sm:pt-[110px] md:pt-[140px] lg:pt-[170px]">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[100px] xs:-mt-[105px] sm:-mt-[110px] md:-mt-[140px] lg:-mt-[170px] pt-[110px] xs:pt-[115px] sm:pt-[120px] md:pt-[150px] lg:pt-[180px] pb-[50px] sm:pb-[70px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
          <FloatingElements />

          <div
            className="absolute inset-0 opacity-0"
            style={{
              backgroundImage: `url('/images/hero-bg.jpg?height=1080&width=1920')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <Badge className="bg-primary/100 text-white border-primary/20 mx-auto lg:mx-0 text-xs sm:text-sm">
                    <Zap className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Human Capital 360°
                  </Badge>

                  <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight animate-slide-in-left">
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      <span className="mb-1 inline-block">Empowering</span>
                      <br />
                      <span className="mb-1 inline-block">Neighborhoods With</span>
                      <br />
                      <span className="inline-block">Pride and Innovation</span>
                    </span>
                  </h1>

                  <p
                    className="text-xs xs:text-sm sm:text-base lg:text-base md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-slide-in-left"
                    style={{ animationDelay: "0.2s" }}
                  >
                    We are a consortium of Fortune 500 executives, enterprise architects, technology experts, business security advisors, and community leaders, giving ex-offenders and entrepreneurs everything they need to launch and operate a successful business.
                  </p>

                  <blockquote
                    className="text-xs xs:text-sm sm:text-base lg:text-base md:text-2xl font-base text-black italic border-l-4 border-primary pl-3 sm:pl-4 md:pl-6 animate-slide-in-left mx-auto lg:mx-0 max-w-lg lg:max-w-none"
                    style={{ animationDelay: "0.4s" }}
                  >
                    "Our mission is to help 1 million ex-offenders conquer recidivism and rebuild their communities"
                    <footer className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">— COO Danta Terry Vaughn</footer>
                  </blockquote>
                </div>

                <div
                  className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start animate-slide-in-left"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Link href="/contact-us" passHref>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 text-xs xs:text-sm sm:text-base px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-4 md:py-6"
                    >
                      Start Your Journey
                      <ArrowRight className="ml-1 xs:ml-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                  <Link href="/about-us" passHref>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transform hover:scale-105 transition-all duration-300 text-xs xs:text-sm sm:text-base px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-4 md:py-6 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Social Media Icons */}
                <div
                  className="flex gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-in-left"
                  style={{ animationDelay: "0.8s" }}
                >
                  <Link
                    href="https://www.linkedin.com/company/human-capital-360-inc"
                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110" target="_blank"
                  >
                    <Linkedin className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="https://web.facebook.com/HumanCapital360"
                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110" target="_blank"
                  >
                    <Facebook className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </Link>
                {/*  <Link
                      href="https://x.com/Human36064554"
                      className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110" target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                      >
                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                      </svg>
                    </Link> */}
                  <Link
                    href="https://www.instagram.com/humancapital_360"
                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110" target="_blank"
                  >
                    <Instagram className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@humancapital_360"
                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110" target="_blank"
                  >
                    <Youtube className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@humancapital360"
                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110" target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" fill="currentColor">
                        <path d="M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z"/>
                      </svg>

                  </Link>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="relative">
                  <Image
                    src="/images/HC360_Home-Page.jpg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Hero Image"
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl"></div>
                </div>

                {/* Floating Stats Cards */}
                <div
                  className="absolute -top-2 xs:-top-3 sm:-top-4 md:-top-6 -left-2 xs:-left-3 sm:-left-4 md:-left-6 bg-white rounded-lg sm:rounded-xl shadow-lg p-2 xs:p-3 sm:p-4 animate-float"
                  style={{ zIndex: 5 }}
                >
                  <div className="flex items-center gap-1 xs:gap-2 sm:gap-3">
                    <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm xs:text-base sm:text-lg md:text-2xl font-bold text-primary">
                        <span className="hidden md:inline">
                          <AnimatedCounter end={100} suffix="+" useCommas />
                        </span>
                        <span className="md:hidden">
                          <AnimatedCounter end={100} suffix="+" useCommas />
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Lives Impacted</div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-2 xs:-bottom-3 sm:-bottom-4 md:-bottom-6 -right-2 xs:-right-3 sm:-right-4 md:-right-6 bg-white rounded-lg sm:rounded-xl shadow-lg p-2 xs:p-3 sm:p-4 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-1 xs:gap-2 sm:gap-3">
                    <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Target className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm xs:text-base sm:text-lg md:text-2xl font-bold text-secondary">
                        <AnimatedCounter end={99} suffix="%" useCommas />
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-8 sm:py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2">
              <div className="relative animate-slide-in-left">
                <Image
                  src="/images/HC360_Empowering-Transformation.jpg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="About Us"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-slide-in-right text-center lg:text-left">
                <Badge className="bg-primary/100 text-white border-primary/20 mx-auto lg:mx-0 text-xs sm:text-sm">
                  About Human Capital 360°
                </Badge>

                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                  Empowering <span className="text-primary">Transformation</span> Through Innovation
                </h2>

                <div className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                    Human Capital 360° is consulting and training powerhouse of eclectic business leaders and innovators dedicated to the empowerment and transformation of marginalized communities nationwide.
                  </p>
                  <p>
                    We bring the resources and expertise of professionals who have provided the blueprint and infrastructure for billion-dollar projects, and Fortune 500 companies.
                  </p>
                </div><br />

                <Link href="/about-us" passHref>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300"
                  >
                    Discover Our Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 sm:py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2">
              <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-slide-in-left text-center lg:text-left">
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                  Why Choose <span className="text-primary">Us?</span>
                </h2>

                <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Our proprietary Neighborhood Community Conversion (NCC) programs, and Neighborhood custodians and trustees are guided by empathy and the unrealized human capital and value of each member of the community and our returning citizens.
                </p>
              </div>

              <div className="relative animate-slide-in-right">
                <Image
                  src="/images/HC360_Why-Choose-Us.jpg"
                  width={600}
                  height={400}
                  alt="Why Choose Us"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-8 sm:py-12 md:py-20 bg-gray-50">
          <div className="w-full px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in max-w-6xl mx-auto">
              <Badge className="bg-primary/100 text-white border-primary/20 mb-3 sm:mb-4 mx-auto text-xs sm:text-sm">
                Our Services
              </Badge>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Comprehensive Solutions for <span className="text-primary">Success</span>
              </h2>
              <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Empowering individuals and businesses with innovative solutions designed to create lasting impact and
                sustainable growth in communities nationwide.
              </p>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in h-full w-[90%] mx-auto md:w-full"
                    style={{ animationDelay: service.delay }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>
                    <CardHeader className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 p-4 sm:p-6">
                      <p className="text-gray-600 leading-relaxed text-xs xs:text-sm sm:text-base">
                        {renderTextWithBreaks(service.description)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

                {/* CTA Button */}
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/services">
                <Button
                  size="default"
                  className="bg-primary hover:from-primary/100 hover:to-primary/100 transform hover:scale-105 transition-all duration-300 text-sm xs:text-base sm:text-lg px-6 xs:px-7 sm:px-8 py-4 xs:py-5 sm:py-6"
                >
                  See All Services
                  <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
                </Button>
              </Link>
            </div>

            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden px-2">
              <MobileCarousel>
                {services.map((service, index) => (
                  <div key={index} className="px-2">
                    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full w-[100%] mx-auto">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>
                      <CardHeader className="relative z-10 flex flex-col items-center text-center">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10 p-4 text-center">
                        <div className="w-[90%] mx-auto">
                          <p className="text-gray-600 leading-relaxed text-xs">
                            {renderTextWithBreaks(service.description)}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </MobileCarousel><br /><br />

              {/* CTA Button */}
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/services">
                <Button
                  size="default"
                  className="bg-primary hover:from-primary/100 hover:to-primary/100 transform hover:scale-105 transition-all duration-300 text-sm xs:text-base sm:text-lg px-6 xs:px-7 sm:px-8 py-4 xs:py-5 sm:py-6"
                >
                  See All Services
                  <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
                </Button>
              </Link>
            </div>
            </div>
          </div>

        </section>

        {/* Team Section */}
        <section id="team" className="py-8 sm:py-12 md:py-20 bg-white mb-8 sm:mb-12">
          <div className="w-full px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in max-w-6xl mx-auto">
              <Badge className="bg-primary/100 text-white border-primary/20 mb-3 sm:mb-4 mx-auto text-xs sm:text-sm">
                Leadership Team
              </Badge>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Meet Our <span className="text-primary">Visionary Leaders</span>
              </h2>
              <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Our executive team brings decades of combined experience in business development, technology innovation,
                and community transformation.
              </p>
            </div>

            {/* Desktop View - Show only first 3 team members centered */}
            <div className="hidden md:block max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {executiveTeam.slice(0, 3).map((member, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-bounce-in h-560 flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-6 text-center relative z-10 flex-1 flex flex-col">
                      <div className="relative mb-6">
                        <Avatar className="w-40 h-40 mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                          {member.badge}
                        </Badge>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-black font-base mb-4">{member.title}</p>
                      <div className="flex-1 flex flex-col justify-between">
                        <br />
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{member.description}</p> <br />
                        <div className="mt-auto">
                          <Dialog>
                            <DialogTrigger asChild></DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-3xl font-bold text-primary mb-4">
                                  {member.name}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-8 lg:grid-cols-2">
                                <div className="lg:col-span-1 space-y-6">
                                  <Avatar className="w-64 h-64 mx-auto">
                                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                                    <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                                      {member.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <p className="text-xl font-semibold text-center text-black">{member.title}</p>
                                </div>
                                <div className="lg:col-span-1">
                                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Biography</h3>
                                  <div className="prose prose-lg max-w-none">
                                    <div className="text-gray-600 leading-relaxed text-lg">
                                      {renderTextWithBreaks(member.fullBio)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Mobile Horizontal Sliding Carousel */}
            <div className="md:hidden px-2">
              <MobileCarousel autoSlide={true} slideInterval={4000}>
                {executiveTeam.map((member, index) => (
                  <div key={index} className="px-2">
                    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-auto flex flex-col w-[90%] mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardContent className="p-4 text-center relative z-10 flex-1 flex flex-col w-[90%] mx-auto">
                        <div className="relative mb-4">
                          <Avatar className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback className="text-lg xs:text-xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <Badge className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs">
                            {member.badge}
                          </Badge>
                        </div>
                        <h3 className="text-sm xs:text-base font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-black font-base mb-2 text-xs xs:text-sm">{member.title}</p>
                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1">{member.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </MobileCarousel>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/team">
                <Button
                  size="default"
                  className="bg-primary hover:from-primary/100 hover:to-primary/100 transform hover:scale-105 transition-all duration-300 text-sm xs:text-base sm:text-lg px-6 xs:px-7 sm:px-8 py-4 xs:py-5 sm:py-6"
                >
                  Meet The Executives
                  <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
              <Badge className="bg-white/20 text-white border-white/30 mb-3 sm:mb-4 mx-auto text-xs sm:text-sm">
                Client Success Stories
              </Badge>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
                Transforming Lives, One Success at a Time
              </h2>
              <p className="text-xs xs:text-sm sm:text-base lg:text-lg opacity-90 max-w-3xl mx-auto">
                Hear from those who have experienced the life-changing impact of Human Capital 360°'s programs and
                services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white w-[90%] mx-auto md:w-full">
                <CardContent className="p-4 xs:p-6 sm:p-8">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm xs:text-base sm:text-lg mb-4 sm:mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Avatar className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12">
                      <AvatarImage src={testimonials[currentTestimonial].image || "/images/icons/user-icon.svg"} />
                      <AvatarFallback>
                        {testimonials[currentTestimonial].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm xs:text-base">{testimonials[currentTestimonial].name}</p>
                      <p className="text-xs xs:text-sm opacity-80">{testimonials[currentTestimonial].title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 sm:py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-slide-in-left text-center lg:text-left">
                <div>
                  <Badge className="bg-primary/100 text-white border-primary/20 mb-3 sm:mb-4 mx-auto lg:mx-0 text-xs sm:text-sm">
                    Get In Touch
                  </Badge>
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                    Ready to Transform Your <span className="text-primary">Future?</span>
                  </h2>
                  <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-600">
                    Take the first step towards your transformation. Our team is here to guide you on your journey to
                    success and help you unlock your full potential.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm w-[90%] mx-auto lg:w-full">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm xs:text-base">Email Us</p>
                      <p className="text-gray-600 text-xs xs:text-sm">Info@humancapital360.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm w-[90%] mx-auto lg:w-full">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm xs:text-base">Call Us</p>
                      <p className="text-gray-600 text-xs xs:text-sm">410-833-8313</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm w-[90%] mx-auto lg:w-full">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm xs:text-base">Visit Us</p>
                      <p className="text-gray-600 text-xs xs:text-sm">
                        200 Washington Avenue PMB 1036, Floor 5, Towson, Md 21204
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm formType="Homepage Contact Form" className="animate-slide-in-right" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
