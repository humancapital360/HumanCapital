"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Zap, Users, Award, Building, Heart, Lightbulb } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "All", icon: Zap },
    { id: "events", label: "Events", icon: Users },
    { id: "success", label: "Success Stories", icon: Award },
    { id: "facilities", label: "Facilities", icon: Building },
    { id: "community", label: "Community", icon: Heart },
    { id: "training", label: "Training", icon: Lightbulb },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Annual Success Summit 2024",
      category: "events",
      image: "/images/gallery/g8.jpg?height=400&width=600",
      description: "Our annual gathering celebrating transformation and success stories from across the nation.",
    },
    {
      id: 2,
      title: "Character Training Workshop",
      category: "training",
      image: "/images/gallery/g9.jpg?height=400&width=600",
      description: "Intensive character development session focusing on moral muscle building.",
    },
    {
      id: 3,
      title: "Entrepreneur Success Story",
      category: "success",
      image: "/images/gallery/g10.jpg?height=400&width=600",
      description: "Local entrepreneur who launched a successful business through our Capital Access program.",
    },
    {
      id: 4,
      title: "Community Outreach Program",
      category: "community",
      image: "/images/gallery/g11.jpg?height=400&width=600",
      description: "Reaching out to underserved communities with our transformation programs.",
    },
    {
      id: 5,
      title: "Technology Training Center",
      category: "facilities",
      image: "/images/gallery/g14.jpg?height=400&width=600",
      description: "State-of-the-art facility where we conduct our Enterprise Architecture training.",
    },
    {
      id: 6,
      title: "Graduation Ceremony",
      category: "events",
      image: "/images/gallery/g15.jpg?height=400&width=600",
      description: "Celebrating another cohort of successful program graduates.",
    },
    {
      id: 7,
      title: "Business Mentorship Session",
      category: "training",
      image: "/images/gallery/g16.jpg?height=400&width=600",
      description: "One-on-one mentorship sessions with our Fortune 500 executives.",
    },
    {
      id: 8,
      title: "Community Impact Award",
      category: "success",
      image: "/images/gallery/g17.jpg?height=400&width=600",
      description: "Recognition for outstanding community transformation achievements.",
    },
    {
      id: 9,
      title: "Family Support Program",
      category: "community",
      image: "/images/gallery/g25.jpg?height=400&width=600",
      description: "Supporting families throughout the transformation journey.",
    },
    {
      id: 10,
      title: "Family Support Program",
      category: "community",
      image: "/images/gallery/g27.jpg?height=400&width=600",
      description: "Supporting families throughout the transformation journey.",
    },
    {
      id: 11,
      title: "Family Support Program",
      category: "community",
      image: "/images/gallery/g28.JPG?height=400&width=600",
      description: "Supporting families throughout the transformation journey.",
    },
    {
      id: 12,
      title: "Family Support Program",
      category: "community",
      image: "/images/gallery/g29.jpg?height=400&width=600",
      description: "Supporting families throughout the transformation journey.",
    },
    {
      id: 13,
      title: "Family Support Program",
      category: "community",
      image: "/images/gallery/g30.JPG?height=400&width=600",
      description: "Supporting families throughout the transformation journey.",
    },
    {
      id: 14,
      title: "Family Support Program",
      category: "community",
      image: "/images/gallery/g31.JPEG?height=400&width=600",
      description: "Supporting families throughout the transformation journey.",
    },
    {
      id: 15,
      title: "Family Support Program",
      category: "community",
      image: "/images/gallery/g32.jpg?height=400&width=600",
      description: "Supporting families throughout the transformation journey.",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems || [] : (galleryItems || []).filter((item) => item?.category === activeFilter)

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
                Gallery
              </Badge>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Journey
                </span>
              </h1>

              <p
                className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left px-4"
                style={{ animationDelay: "0.2s" }}
              >
                Witness the transformation stories, community impact, and success moments that define Human Capital
                360°.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
      {/*  <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex md:flex-wrap md:justify-center gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex gap-4 md:flex-wrap md:justify-center min-w-max md:min-w-0">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeFilter === category.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap ${
                      activeFilter === category.id
                        ? "bg-primary hover:bg-primary/90"
                        : "hover:bg-primary hover:text-white"
                    } transition-all duration-300`}
                  >
                    <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Gallery Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredItems.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card
                      className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in w-[90%] mx-auto md:w-full"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          width={400}
                          height={600}
                          alt={item.title}
                          className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/*  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">{item.title}</h3>
                          <p className="text-xs sm:text-sm">{item.description}</p> */}
                        </div>
                      </div>
                      <CardContent className="p-3 sm:p-4 md:p-6 w-[90%] mx-auto text-center">
                      {/*  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{item.description}</p> */}
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-md mx-4">
                    <div className="space-y-4">
                    <Image
                    src={item.image || "/placeholder.svg"}
                    width={400}
                    height={600}
                    alt={item.title}
                    className="w-full h-72 sm:h-96 md:h-[28rem] object-cover rounded-lg"/>
                  <div className="text-center">
                   {/* <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {item.title}</h2>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                    </p> */}
                    </div>
                  </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                  No items found for the selected category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
      {/*  <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact in Numbers</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Every image tells a story of transformation and success.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Success Stories Captured" },
                { number: "50+", label: "Community Events" },
                { number: "100+", label: "Training Sessions" },
                { number: "25+", label: "Facility Locations" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
