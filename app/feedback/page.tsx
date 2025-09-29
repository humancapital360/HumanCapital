"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeedbackForm } from "@/components/feedback-form"

export default function FeedbackPage() {
  const feedbackCategories = [
    {
      title: "Website Experience",
      description: "Share your thoughts about our website's design, functionality, and user experience.",
      icon: "🌐",
    },
    {
      title: "Content Quality",
      description: "Let us know about the quality and relevance of our content and information.",
      icon: "📝",
    },
    {
      title: "Navigation & Usability",
      description: "Help us improve how easy it is to find information and navigate our site.",
      icon: "🧭",
    },
    {
      title: "Technical Issues",
      description: "Report any bugs, errors, or technical problems you've encountered.",
      icon: "🔧",
    },
    {
      title: "Mobile Experience",
      description: "Share feedback about using our website on mobile devices and tablets.",
      icon: "📱",
    },
    {
      title: "General Suggestions",
      description: "Any other ideas or suggestions to help us improve your experience.",
      icon: "💡",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />

      <main className="flex-1 pt-[170px]">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[170px] pt-[180px] pb-[70px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 animate-bounce-in">
                <MessageSquare className="w-4 h-4 mr-2" />
                Website Feedback
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent whitespace-nowrap">
                  Your Voice Matters
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                Help us improve your website experience. Share your feedback, report issues, or suggest improvements to
                make our site better for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Feedback Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Would You Like to <span className="text-primary">Share?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the category that best describes your feedback, or share general suggestions in the form below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {feedbackCategories.map((category, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div className="space-y-8 animate-slide-in-left">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Share Your <span className="text-primary">Feedback</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Your feedback is invaluable in helping us create a better website experience. Whether you've
                    encountered a technical issue, have suggestions for improvement, or want to share what you love
                    about our site, we want to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-gray-600 text-sm">
                        We review all feedback within 24-48 hours and respond to technical issues promptly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Privacy Protected</h3>
                      <p className="text-gray-600 text-sm">
                        Your feedback is confidential and used solely for improving our website experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Continuous Improvement</h3>
                      <p className="text-gray-600 text-sm">
                        Your suggestions directly influence our website updates and new features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <FeedbackForm className="animate-slide-in-right" />
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Thank You for Your Input!</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
                Every piece of feedback helps us create a better experience for our community. Together, we're building
                something amazing.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
