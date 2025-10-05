"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Menu, X, ChevronDown, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BookingForm } from "@/components/booking-form"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showAboutSubmenu, setShowAboutSubmenu] = useState(false)
  const [showPartnerSubmenu, setShowPartnerSubmenu] = useState(false)
  const [showMobileAboutSubmenu, setShowMobileAboutSubmenu] = useState(false)
  const [showMobilePartnerSubmenu, setShowMobilePartnerSubmenu] = useState(false)


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo1.png"
              alt="Human Capital 360 Logo"
              width={300}
              height={60}
              className="h-8 w-auto xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-16"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-gray-600">CALL US</span>
              <span className="font-semibold">410-833-8313</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-gray-600">EMAIL US</span>
              <span className="font-semibold">Info@humancapital360.com</span>
            </div>

            {/* Desktop Appointment Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-300">
                  <Calendar className="mr-2 h-4 w-4" />
                  BOOK APPOINTMENT
                </Button>
              </DialogTrigger>

              <DialogContent className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                    Book Your Appointment
                  </DialogTitle>
                </DialogHeader>

                  {/* Booking Form */}
              <div className="w-[90%] mx-auto md:w-full">
                <BookingForm formType="Appointment" className="animate-slide-in-right" />
              </div>

              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button - Moved to top header */}
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 hover:bg-primary hover:text-white" />}
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-[50px] xs:top-[55px] sm:top-[60px] md:top-[80px] lg:top-[70px] left-0 right-0 w-full z-40 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/0"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <nav className="hidden md:flex gap-8 mx-auto">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors relative group animate-fade-in"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setShowAboutSubmenu(true)}
              onMouseLeave={() => setShowAboutSubmenu(false)}
            >
              <Link
                href="/about-us"
                className="text-sm font-medium hover:text-primary transition-colors relative group animate-fade-in flex items-center gap-1"
              >
                About Us
                <ChevronDown className="w-3 h-3" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>

              {showAboutSubmenu && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-2 {/* animate-fade-in */} z-50"
                  onMouseEnter={() => setShowAboutSubmenu(true)}
                  onMouseLeave={() => setShowAboutSubmenu(false)}
                >
                  <Link
                    href="/about-us"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/company-profile"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Company Profile
                  </Link>
                  <Link
                    href="/team"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/gallery"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Gallery
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary transition-colors relative group animate-fade-in"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>

          {/*  <Link
              href="/gallery"
              className="text-sm font-medium hover:text-primary transition-colors relative group animate-fade-in"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link> */}

            <Link
              href="/case-study"
              className="text-sm font-medium hover:text-primary transition-colors relative group animate-fade-in"
            >
              Case Study
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact-us"
              className="text-sm font-medium hover:text-primary transition-colors relative group animate-fade-in"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>

              <div
              className="relative group"
              onMouseEnter={() => setShowPartnerSubmenu(true)}
              onMouseLeave={() => setShowPartnerSubmenu(false)}
            >
              <Link
                href="/partners"
                className="text-sm font-medium hover:text-primary transition-colors relative group animate-fade-in flex items-center gap-1"
              >
                Our Partners
                <ChevronDown className="w-3 h-3" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>

              {showPartnerSubmenu && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-2 {/* animate-fade-in */} z-50"
                  onMouseEnter={() => setShowPartnerSubmenu(true)}
                  onMouseLeave={() => setShowPartnerSubmenu(false)}
                >
                  <Link
                    href="https://complexmarketing360.com"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors" target="_blank"
                  >
                    Complex Marketing 360
                  </Link>
                  <Link
                    href="https://globalcyberadvisory.com/home"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors" target="_blank"
                  >
                    Global Cyber Advisory
                  </Link>
                  <Link
                    href="https://www.protect-us-kids.org"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors" target="_blank"
                  >
                    Protect Us Kids Foundation
                  </Link>
                  <Link
                    href="/partners"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    See More
                  </Link>
                </div>
              )}
            </div>

          </nav>
        </div>

        {/* Mobile Menu - Slide out from left */}
        <div
          className={`md:hidden fixed inset-0 top-[50px] xs:top-[55px] sm:top-[60px] z-50 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`fixed left-0 top-0 h-screen w-[90%] max-w-[320px] bg-white shadow-xl transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="p-4 pt-12 space-y-3 text-center">
              <Link
                href="/"
                className="block text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setShowMobileAboutSubmenu(!showMobileAboutSubmenu)}
                  className="flex items-center justify-center w-full text-base font-medium hover:text-primary transition-colors py-2 gap-2"
                >
                  About Us
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      showMobileAboutSubmenu ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {showMobileAboutSubmenu && (
                  <div className="mt-2 space-y-2">
                    <Link
                      href="/about-us"
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/company-profile"
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Company Profile
                    </Link>
                    <Link
                      href="/team"
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/gallery"
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Gallery
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/services"
                className="block text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

            {/*  <Link
                href="/gallery"
                className="block text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link> */}

              <Link
                href="#"
                className="block text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Study
              </Link>
              <Link
                href="/contact-us"
                className="block text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

                <div>
                <button
                  onClick={() => setShowMobilePartnerSubmenu(!showMobilePartnerSubmenu)}
                  className="flex items-center justify-center w-full text-base font-medium hover:text-primary transition-colors py-2 gap-2"
                >
                  Our Partners
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      showMobilePartnerSubmenu ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {showMobilePartnerSubmenu && (
                  <div className="mt-2 space-y-2">
                    <Link
                      href="https://complexmarketing360.com"
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1" target="_blank"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Complex Marketing 360
                    </Link>
                    <Link
                      href="https://globalcyberadvisory.com/home"
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1" target="_blank"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Global Cyber Advisory
                    </Link>
                    <Link
                      href="https://www.protect-us-kids.org"
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1" target="_blank"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Protect Us Kids Foundation
                    </Link>
                    <Link
                      href="/partners"
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      See More
                    </Link>
                  </div>
                )}
              </div>


              {/* Mobile Appointment Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-300">
                    <Calendar className="mr-2 h-4 w-4" />
                    BOOK APPOINTMENT
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                  <DialogHeader>
                    <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                      Book Your Appointment
                    </DialogTitle>
                  </DialogHeader>

                  {/* Booking Form */}
              <div className="w-[90%] mx-auto md:w-full">
                <BookingForm formType="Appointment" className="animate-slide-in-right" />
              </div>
              
                </DialogContent>
              </Dialog>
            {/* Mobile Dialog Ends */}

            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
