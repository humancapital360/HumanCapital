"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, FileText, Scale, AlertTriangle, Shield, Users } from 'lucide-react'
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: "By accessing and using Human Capital 360° services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Use License",
      icon: Scale,
      content: "Permission is granted to temporarily download one copy of the materials on Human Capital 360°'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; or remove any copyright or other proprietary notations from the materials."
    },
    {
      title: "Disclaimer",
      icon: AlertTriangle,
      content: "The materials on Human Capital 360°'s website are provided on an 'as is' basis. Human Capital 360° makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "Limitations",
      icon: Shield,
      content: "In no event shall Human Capital 360° or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Human Capital 360°'s website, even if Human Capital 360° or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
    },
    {
      title: "User Conduct",
      icon: Users,
      content: "You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use the services: in any way that violates any applicable federal, state, local, or international law or regulation; to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services; to impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity."
    }
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
                <Scale className="w-4 h-4 mr-2" />
                Terms of Service
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Terms & Conditions
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                Please read these terms and conditions carefully before using our services. These terms govern your use of Human Capital 360° services.
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <p className="text-gray-600">
                <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      Welcome to Human Capital 360°. These Terms of Service ("Terms") govern your use of our website, services, and programs. By accessing or using our services, you agree to be bound by these Terms.
                    </p>
                    <p>
                      These Terms constitute a legally binding agreement between you and Human Capital 360°. If you disagree with any part of these terms, then you may not access our services.
                    </p>
                    <p>
                      We reserve the right to update and change these Terms at any time without notice. Your continued use of the service constitutes acceptance of those changes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8">
                {sections.map((section, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      We strive to provide continuous access to our services, but we do not guarantee that our services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the services, resulting in interruptions, delays, or errors.
                    </p>
                    <p>
                      We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the services at any time or for any reason without notice to you.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      The services and their original content, features, and functionality are and will remain the exclusive property of Human Capital 360° and its licensors. The services are protected by copyright, trademark, and other laws.
                    </p>
                    <p>
                      Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p>
                      Upon termination, your right to use the services will cease immediately. If you wish to terminate your account, you may simply discontinue using the services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Department</h3>
                      <p><strong>Email:</strong> info@humancapital360.com</p>
                      <p><strong>Phone:</strong> (269) 985-6441</p>
                      <p><strong>Address:</strong> 200 Washington Avenue PMB 1036, Floor 5 Towson, Md 21204, United States</p>
                    </div>
                    <p>
                      We will respond to your inquiry within 5 business days. For urgent legal matters, please call our main number and ask to speak with our Legal Department.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
