"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react"

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

interface CartBarProps {
  isVisible: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
}

export function CartBar({ isVisible, onClose, items, onUpdateQuantity, onRemoveItem }: CartBarProps) {
  const [discountCode, setDiscountCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal - discount

  const applyDiscount = () => {
    // Simple discount logic - in real app, this would validate with backend
    if (discountCode.toLowerCase() === "welcome10") {
      setDiscount(subtotal * 0.1)
    } else if (discountCode.toLowerCase() === "save20") {
      setDiscount(subtotal * 0.2)
    } else {
      setDiscount(0)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Cart Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white shadow-2xl animate-slide-in-up">
        <Card className="border-0 rounded-t-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                Your Cart ({items.length})
              </h2>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
                <Button className="mt-4 bg-primary hover:bg-primary/90" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="max-h-60 overflow-y-auto mb-6 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                        <p className="text-primary font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 p-0 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Discount Code */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Discount code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button
                    onClick={applyDiscount}
                    variant="outline"
                    className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    Apply
                  </Button>
                </div>

                {/* Totals */}
                <div className="space-y-2 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount:</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-bold border-t pt-2">
                    <span>Total:</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link href="/cart" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 bg-transparent"
                      onClick={onClose}
                    >
                      View Cart
                    </Button>
                  </Link>
                  <Link href="/checkout" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90" onClick={onClose}>
                      Checkout
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
