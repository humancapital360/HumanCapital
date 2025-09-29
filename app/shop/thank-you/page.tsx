"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, ArrowLeft, Star, Share2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState<any>(null)

  useEffect(() => {
    // In a real app, you'd fetch order details from your backend
    // For now, we'll simulate with URL params or localStorage
    const orderId = searchParams.get("order") || "HC360-" + Date.now()
    const items = JSON.parse(localStorage.getItem("purchasedItems") || "[]")

    setOrderDetails({
      orderId,
      items,
      total: items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
      customerEmail: searchParams.get("email") || "customer@example.com",
    })
  }, [searchParams])

  const handleDownload = (productId: number, productTitle: string) => {
    // In a real app, this would generate a secure download link
    // For demo purposes, we'll simulate a download
    const link = document.createElement("a")
    link.href = `/downloads/${productId}.pdf` // This would be a real file URL
    link.download = `${productTitle.replace(/\s+/g, "_")}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const shareOnSocial = (platform: string) => {
    const url = window.location.href
    const text = "Just purchased amazing resources from Human Capital 360°!"

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  if (!orderDetails) {
    return (
      <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
        <Navigation />
        <main className="flex-1 pt-[170px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />

      <main className="flex-1 pt-[170px]">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[170px] pt-[180px] pb-[70px]">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-primary/5 to-secondary/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce-in">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-green-600 via-primary to-secondary bg-clip-text text-transparent">
                  Thank You!
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                Your purchase was successful! Your transformation journey starts now.
              </p>

              <Badge
                className="bg-green-100 text-green-800 border-green-200 animate-bounce-in"
                style={{ animationDelay: "0.4s" }}
              >
                Order #{orderDetails.orderId}
              </Badge>
            </div>
          </div>
        </section>

        {/* Order Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl mb-8">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Digital Products</h2>

                  <div className="space-y-6">
                    {orderDetails.items.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200"
                      >
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-sm opacity-80 mb-3">{item.description}</p>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">
                              {item.rating} ({item.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <p className="text-2xl font-bold mb-4">${item.price}</p>
                          {item.downloadable && (
                            <Button
                              onClick={() => handleDownload(item.id, item.title)}
                              className="bg-primary hover:bg-primary/90 text-white"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <div className="flex justify-between items-center text-2xl font-bold">
                      <span>Total:</span>
                      <span className="text-primary">${orderDetails.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p>Download your digital products using the buttons above</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p>Check your email for order confirmation and additional resources</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p>Join our community for ongoing support and updates</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Journey</h3>
                    <p className="text-gray-600 mb-4">Help others discover the power of transformation!</p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => shareOnSocial("twitter")}
                        className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => shareOnSocial("facebook")}
                        className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => shareOnSocial("linkedin")}
                        className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link href="/shop">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Continue Shopping
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
              <p className="text-lg text-gray-600 mb-8 p-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200">
                Our support team is here to help you get the most out of your purchase. Don't hesitate to reach out if
                you have any questions or need assistance with your downloads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                    Contact Support
                  </Button>
                </Link>
                <Link href="/feedback">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 bg-transparent"
                  >
                    Share Feedback
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
