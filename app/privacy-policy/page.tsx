"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Eye, Lock, FileText, Users } from 'lucide-react'
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Demographic information such as postcode, preferences and interests",
        "Other information relevant to customer surveys and/or offers",
        "Information about your use of our website and services",
        "Communication preferences and history"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information to improve our services",
        "To monitor the usage of our services",
        "To detect, prevent and address technical issues",
        "To send you newsletters, marketing or promotional materials"
      ]
    },
    {
      title: "Information Security",
      icon: Shield,
      content: [
        "We implement appropriate security measures to protect your personal information",
        "Your personal information is contained behind secured networks",
        "All sensitive information is encrypted via Secure Socket Layer (SSL) technology",
        "We regularly review our security procedures and update them as necessary",
        "Access to personal information is restricted to authorized personnel only"
      ]
    },
    {
      title: "Data Sharing and Disclosure",
      icon: Eye,
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties",
        "We may share information with trusted partners who assist us in operating our website",
        "We may release information when required by law or to protect our rights",
        "Non-personal visitor information may be provided to other parties for marketing or advertising",
        "We will notify you of any material changes to our data sharing practices"
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: Lock,
      content: [
        "You have the right to access your personal information",
        "You can request correction of inaccurate personal information",
        "You may request deletion of your personal information",
        "You can opt-out of marketing communications at any time",
        "You have the right to data portability",
        "You can withdraw consent for data processing where applicable"
      ]
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
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Your Privacy Matters
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                We are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and protect your data.
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
                      At Human Capital 360°, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, use our services, or interact with us.
                    </p>
                    <p>
                      This policy applies to all information collected by Human Capital 360° through our website, mobile applications, email communications, and other digital services. By using our services, you consent to the data practices described in this policy.
                    </p>
                    <p>
                      We may update this privacy policy from time to time. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last Updated" date.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
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
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cookies Policy */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us remember your preferences and improve our services.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Types of Cookies We Use:</h3>
                    <ul className="space-y-2">
                      <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                      <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    </ul>
                    <p>
                      You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our website.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      If you have any questions about this Privacy Policy, your personal data, or would like to exercise your rights, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy Officer</h3>
                      <p><strong>Email:</strong> info@humancapital360.com</p>
                      <p><strong>Phone:</strong> (269) 985-6441</p>
                      <p><strong>Address:</strong> 200 Washington Avenue PMB 1036, Floor 5 Towson, Md 21204, United States</p>
                    </div>
                    <p>
                      We will respond to your inquiry within 30 days of receipt. For urgent privacy matters, please call our main number and ask to speak with our Privacy Officer.
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
