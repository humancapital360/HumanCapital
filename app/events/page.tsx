"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, ArrowRight, Zap, Filter } from 'lucide-react'
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function EventsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const eventCategories = [
    { id: "all", label: "All Events" },
    { id: "workshops", label: "Workshops" },
    { id: "seminars", label: "Seminars" },
    { id: "networking", label: "Networking" },
    { id: "training", label: "Training" },
    { id: "community", label: "Community" }
  ]

  const events = [
    {
      id: 1,
      title: "Character Training Workshop Series",
      description: "Join our intensive 3-day workshop focused on building moral muscle and character development for successful reintegration.",
      date: "2024-02-15",
      time: "9:00 AM - 5:00 PM",
      location: "Chicago Training Center",
      category: "workshops",
      image: "/images/eve1.jpg?height=300&width=500",
      price: "Free",
      capacity: 50,
      registered: 35,
      featured: true
    },
    {
      id: 2,
      title: "Entrepreneurship Success Summit",
      description: "Annual gathering celebrating transformation and success stories from entrepreneurs across the nation.",
      date: "2024-03-20",
      time: "8:00 AM - 6:00 PM",
      location: "Detroit Convention Center",
      category: "seminars",
      image: "/images/eve1.jpg?height=300&width=500",
      price: "$25",
      capacity: 200,
      registered: 150,
      featured: true
    },
    {
      id: 3,
      title: "Technology & Business Integration Seminar",
      description: "Learn how to leverage modern technology infrastructure to accelerate your business growth.",
      date: "2024-02-28",
      time: "2:00 PM - 6:00 PM",
      location: "Atlanta Tech Hub",
      category: "seminars",
      image: "/images/eve1.jpg?height=300&width=500",
      price: "Free",
      capacity: 75,
      registered: 45
    },
  ]

  const filteredEvents = selectedFilter === "all" 
    ? events 
    : events.filter(event => event.category === selectedFilter)

  const upcomingEvents = events.filter(event => new Date(event.date) > new Date()).slice(0, 3)
  const featuredEvents = events.filter(event => event.featured)

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
                Events & Programs
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                  Transform Together
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                Join our community events, workshops, and training programs designed to accelerate your transformation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-primary/100 text-white border-primary/20 mb-4">Featured Events</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Don't Miss <span className="text-primary">These</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most impactful events designed to accelerate your transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <Card key={event.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-64">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      fill
                      alt={event.title}
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">Featured</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 text-white">{event.price}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString()}
                      <Clock className="w-4 h-4 ml-2" />
                      {event.time}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                      <Users className="w-4 h-4 ml-2" />
                      {event.registered}/{event.capacity} registered
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gray-50 border-y">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Filter Events:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {eventCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedFilter === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(category.id)}
                    className={selectedFilter === category.id ? "bg-primary hover:bg-primary/90" : "hover:bg-primary hover:text-white"}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                All <span className="text-primary">Events</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover all our upcoming events and find the perfect opportunity for your growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <Card key={event.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      fill
                      alt={event.title}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white">{event.price}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-primary/100 text-white border-primary/20">
                      {eventCategories.find(cat => cat.id === event.category)?.label}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {new Date(event.date).toLocaleDateString()}
                        <Clock className="w-3 h-3 ml-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        {event.registered}/{event.capacity} registered
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                      Register
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No events found for the selected category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Never Miss an Event</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
                Subscribe to our newsletter and be the first to know about upcoming events, workshops, and training programs.
              </p>
              <NewsletterSignup source="Events Page" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
