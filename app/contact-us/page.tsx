"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, ArrowRight, Zap } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactUsPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "Info@humancapital360.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "410-833-8313",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "200 Washington Avenue PMB 1036, Floor 5",
      description: "Towson, Md 21204, United States",
    },
    // Business Hours entry removed
  ]

  const offices = [
    {
      city: "Towson, MD",
      address: "200 Washington Avenue PMB 1036, Floor 5, Towson, Md 21204, United States",
      phone: "410-833-8313",
      fax: "667-218-3814",
      email: "Info@humancapital360.com",
    },
    {
      city: "Charlotte, NC",
      address: "3540 Toringdon Way, Suite 200 #1079, Charlotte NC 28277, United States",
      phone: "980-575-5755",
      fax: "743-212-3749",
      email: "Info@humancapital360.com",
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
            <div className="text-center space-y-6 sm:space-y-8">
              <Badge className="bg-primary/100 text-white border-primary/20 animate-bounce-in">
                <Zap className="w-4 h-4 mr-2" />
                Contact Us
              </Badge>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left px-2">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h1>

              <p
                className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left px-4"
                style={{ animationDelay: "0.2s" }}
              >
                Ready to transform your future? Our team is here to guide you on your journey to success and help you
                unlock your full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 items-start">
              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8 animate-slide-in-left text-center md:text-left">
                <div>
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                    Let's Start Your <span className="text-primary">Transformation</span>
                  </h2>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed px-4 md:px-0">
                    Take the first step towards your transformation. Whether you're looking for character training,
                    business development, or capital access, we're here to help you succeed.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 w-[90%] mx-auto md:w-full text-left"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-900 font-medium">{info.details}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl w-[90%] mx-auto md:w-full text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Emergency Support</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4">
                    Need immediate assistance? Our crisis support team is available 24/7 for urgent matters.
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent text-xs sm:text-sm"
                    onClick={() => window.open("tel:410-833-8313")}
                  >
                    Emergency Contact
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-[90%] mx-auto md:w-full">
                <ContactForm formType="Contact Us Page" className="animate-slide-in-right" />
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <Badge className="bg-primary/100 text-white border-secondary/20 mb-4">Our Locations</Badge>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Find Us <span className="text-primary">Nationwide</span>
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                We have offices across the country to better serve our communities and provide local support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {offices.map((office, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-bounce-in w-[90%] mx-auto md:w-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 w-[90%] mx-auto">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {office.city}
                    </h3>
                    <div className="space-y-2 sm:space-y-3 text-gray-600">
                      <div className="flex items-start gap-2 justify-center">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 text-primary flex-shrink-0" />
                        <p className="text-xs sm:text-sm">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <p className="text-xs sm:text-sm">{office.phone}</p>
                      </div>
                      {office.fax && (
                        <div className="flex items-center gap-2 justify-center">
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                          <p className="text-xs sm:text-sm">Fax: {office.fax}</p>
                        </div>
                      )}
                      <div className="flex items-center gap-2 justify-center">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <p className="text-xs sm:text-sm">{office.email}</p>
                      </div>
                    </div>
                    <Button
                      className="mt-4 sm:mt-6 bg-primary hover:bg-primary/90 text-xs sm:text-sm"
                      size="sm"
                      onClick={() => {
                        const address = encodeURIComponent(office.address)
                        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank")
                      }}
                    >
                      Get Directions
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                Visit Our Main Office
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 px-4">
                Located in the heart of the business district
              </p>
            </div>
            <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden w-[90%] mx-auto md:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.8967891234567!2d-76.6122!3d39.3943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81c1234567890%3A0x1234567890abcdef!2s200%20Washington%20Ave%2C%20Towson%2C%20MD%2021204!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Human Capital 360 Office Location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
