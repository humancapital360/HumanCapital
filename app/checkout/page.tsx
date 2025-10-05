"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Lock, ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function CheckoutPage() {
  const router = useRouter()
  const [checkoutItems, setCheckoutItems] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    saveInfo: false,
    agreeToTerms: false,
  })

  useEffect(() => {
    const items = localStorage.getItem("checkoutItems")
    const totalAmount = localStorage.getItem("checkoutTotal")

    if (items) {
      setCheckoutItems(JSON.parse(items))
    }
    if (totalAmount) {
      setTotal(Number.parseFloat(totalAmount))
    }
  }, [])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      // Store purchased items for thank you page
      localStorage.setItem("purchasedItems", JSON.stringify(checkoutItems))
      localStorage.removeItem("checkoutItems")
      localStorage.removeItem("checkoutTotal")
      localStorage.removeItem("cartItems")

      // Redirect to thank you page
      router.push(`/shop/thank-you?order=HC360-${Date.now()}&email=${formData.email}`)
    }, 3000)
  }

  if (checkoutItems.length === 0) {
    return (
      <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
        <Navigation />
        <main className="flex-1 pt-[170px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">No Items to Checkout</h1>
            <p className="text-gray-600 mb-8 p-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200">
              Your cart is empty. Please add some items before proceeding to checkout.
            </p>
            <Button onClick={() => router.push("/shop")} className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </div>
        </main><br /><br />
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />

      <main className="flex-1 pt-[170px]">
        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-500/10 -mt-[170px] pt-[180px]">
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Lock className="w-4 h-4 mr-2" />
                Secure Checkout
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent">
                  Complete Your Order
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto p-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200">
                You're just one step away from accessing your digital transformation resources.
              </p>
            </div>
          </div>
        </section>

        {/* Checkout Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Checkout Form */}
                <div className="space-y-8">
                  {/* Contact Information */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </span>
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          className="mt-1"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Billing Information */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </span>
                        Billing Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          required
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            required
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            required
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            required
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange("zipCode", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Information */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </span>
                        Payment Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="nameOnCard">Name on Card *</Label>
                        <Input
                          id="nameOnCard"
                          required
                          value={formData.nameOnCard}
                          onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          required
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            required
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            required
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Terms and Conditions */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="saveInfo"
                            checked={formData.saveInfo}
                            onCheckedChange={(checked) => handleInputChange("saveInfo", checked as boolean)}
                          />
                          <Label
                            htmlFor="saveInfo"
                            className="text-sm p-2 rounded hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100"
                          >
                            Save my information for faster checkout next time
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                            required
                          />
                          <Label
                            htmlFor="agreeToTerms"
                            className="text-sm p-2 rounded hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100"
                          >
                            I agree to the{" "}
                            <a href="/terms-of-service" className="text-primary underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="/privacy-policy" className="text-primary underline">
                              Privacy Policy
                            </a>{" "}
                            *
                          </Label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Order Summary */}
                <div className="lg:sticky lg:top-8">
                  <Card className="border-0 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Order Items */}
                      <div className="space-y-4">
                        {checkoutItems.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200"
                          >
                            <div className="relative w-16 h-16 flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                fill
                                alt={item.title}
                                className="object-cover rounded"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                              <div className="flex justify-between items-center mt-2">
                                <span className="text-sm opacity-75">Qty: {item.quantity}</span>
                                <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Price Summary */}
                      <div className="space-y-3 pt-4 border-t">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 border border-gray-100">
                          <span>Tax:</span>
                          <span>$0.00</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-primary border-t pt-3">
                          <span>Total:</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Payment Button */}
                      <Button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                      >
                        {isProcessing ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            Complete Order - ${total.toFixed(2)}
                          </div>
                        )}
                      </Button>

                      {/* Security Notice */}
                      <div className="text-center text-sm text-gray-500 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                        <Lock className="w-4 h-4 inline mr-2" />
                        Your payment information is secure and encrypted
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
