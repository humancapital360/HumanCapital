"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart, Tag } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [discountCode, setDiscountCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [discountMessage, setDiscountMessage] = useState("")

  useEffect(() => {
    // Load cart items from localStorage or API
    const savedItems = localStorage.getItem("cartItems")
    if (savedItems) {
      setCartItems(JSON.parse(savedItems))
    }
  }, [])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }

    const updatedItems = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    setCartItems(updatedItems)
    localStorage.setItem("cartItems", JSON.stringify(updatedItems))
  }

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedItems)
    localStorage.setItem("cartItems", JSON.stringify(updatedItems))
  }

  const applyDiscount = () => {
    const code = discountCode.toLowerCase().trim()
    if (code === "welcome10") {
      setDiscount(subtotal * 0.1)
      setDiscountMessage("10% discount applied!")
    } else if (code === "save20") {
      setDiscount(subtotal * 0.2)
      setDiscountMessage("20% discount applied!")
    } else if (code === "student15") {
      setDiscount(subtotal * 0.15)
      setDiscountMessage("Student discount applied!")
    } else {
      setDiscount(0)
      setDiscountMessage("Invalid discount code")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal - discount

  const proceedToCheckout = () => {
    localStorage.setItem("checkoutItems", JSON.stringify(cartItems))
    localStorage.setItem("checkoutTotal", total.toString())
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
        <Navigation />

        <main className="flex-1 pt-[170px]">
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ShoppingCart className="w-12 h-12 text-gray-400" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                <p className="text-lg text-gray-600 mb-8 p-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200">
                  Looks like you haven't added any items to your cart yet. Start exploring our amazing digital products!
                </p>
                <Link href="/shop">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </section>
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
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-500/10 -mt-[170px] pt-[180px]">
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shopping Cart
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent">
                  Your Cart ({cartItems.length})
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto p-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200">
                Review your selected items and proceed to checkout when ready.
              </p>
            </div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Cart Items</h2>
                  <Link href="/shop">
                    <Button
                      variant="outline"
                      className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 bg-transparent"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                {cartItems.map((item) => (
                  <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            fill
                            alt={item.title}
                            className="object-cover rounded-lg"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                              <p className="text-gray-600 text-sm line-clamp-2 p-2 rounded hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                                {item.description}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:bg-primary hover:text-white transition-all duration-300"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 p-0 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-12 text-center font-semibold">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 p-0 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                              <div className="text-sm text-gray-500">${item.price} each</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-2xl sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Discount Code */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Discount Code</label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter code"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                          className="flex-1"
                        />
                        <Button
                          onClick={applyDiscount}
                          variant="outline"
                          className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 bg-transparent"
                        >
                          <Tag className="w-4 h-4" />
                        </Button>
                      </div>
                      {discountMessage && (
                        <p
                          className={`text-sm mt-2 p-2 rounded ${
                            discount > 0
                              ? "text-green-600 bg-green-50 border border-green-200"
                              : "text-red-600 bg-red-50 border border-red-200"
                          }`}
                        >
                          {discountMessage}
                        </p>
                      )}
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>

                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount:</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}

                      <div className="flex justify-between text-gray-600 p-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 border border-gray-100">
                        <span>Tax:</span>
                        <span>Calculated at checkout</span>
                      </div>

                      <div className="flex justify-between text-2xl font-bold text-primary border-t pt-3">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Link href="/checkout" onClick={proceedToCheckout}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                        Proceed to Checkout
                      </Button>
                    </Link>

                    {/* Security Notice */}
                    <div className="text-center text-sm text-gray-500 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                      🔒 Secure checkout with 256-bit SSL encryption
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card
                  key={item}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      fill
                      alt="Recommended product"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      Recommended Product {item}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 p-2 rounded hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                      Another great resource to help with your transformation journey.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">$19.99</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
