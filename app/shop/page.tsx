"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Star, Download, Search } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CartBar } from "@/components/cart-bar"

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cartItems, setCartItems] = useState<any[]>([])
  const [isCartVisible, setIsCartVisible] = useState(false)

  const categories = [
    { id: "all", label: "All Products" },
    { id: "ebooks", label: "E-books" },
    { id: "courses", label: "Online Courses" },
    { id: "guides", label: "Guides & Workbooks" },
    { id: "templates", label: "Templates" },
  ]

  const products = [
    {
      id: 1,
      title: "Building Your Moral Muscle: A Complete Guide",
      description:
        "Comprehensive e-book on character development and moral integrity building for personal transformation.",
      category: "ebooks",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 156,
      image: "/images/prd.jpg?height=300&width=250&text=Moral+Muscle+Guide",
      bestseller: true,
      downloadable: true,
    },
    {
      id: 2,
      title: "Entrepreneur's Reentry Handbook",
      description:
        "Essential guide for ex-offenders starting their entrepreneurial journey with practical steps and resources.",
      category: "ebooks",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.9,
      reviews: 203,
      image: "/images/prd.jpg?height=300&width=250&text=Reentry+Handbook",
      bestseller: true,
      downloadable: true,
    },
    {
      id: 3,
      title: "Character Training Workbook",
      description: "Interactive workbook with exercises and activities to support your character development journey.",
      category: "guides",
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.7,
      reviews: 89,
      image: "/images/prd.jpg?height=300&width=250&text=Character+Workbook",
      bestseller: true,
      downloadable: true,
    },
    
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredProducts = products.filter((product) => product.bestseller)

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
                <ShoppingCart className="w-4 h-4 mr-2" />
                Digital Store
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                  Transform Your Life
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                Access our collection of digital resources, e-books, and courses designed to support your transformation
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-primary/100 text-white border-primary/20 mb-4">Bestsellers</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured <span className="text-primary">Products</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most popular resources that have helped thousands transform their lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <Image
                      src={product.image || "/images/prd.jpg"}
                      width={250}
                      height={300}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.bestseller && (
                      <Badge className="absolute top-4 left-4 bg-primary text-white">Bestseller</Badge>
                    )}
                    <div className="absolute top-4 right-4">
                      {product.downloadable && (
                        <Badge className="bg-primary text-white">
                          <Download className="w-3 h-3 mr-1" />
                          Digital
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Link
                      href={`/shop/product/${product.id}`}
                      className="hover:text-primary transition-colors duration-300"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => {
                        setCartItems([...cartItems, { ...product, quantity: 1 }])
                        setIsCartVisible(true)
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-gray-50 border-y">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-primary hover:bg-primary/90" : "hover:bg-primary hover:text-white"}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                All <span className="text-primary">Products</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our complete collection of transformation resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      width={250}
                      height={300}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.bestseller && (
                      <Badge className="absolute top-4 left-4 bg-primary text-white">Bestseller</Badge>
                    )}
                    <div className="absolute top-4 right-4">
                      {product.downloadable && (
                        <Badge className="bg-primary text-white">
                          <Download className="w-3 h-3 mr-1" />
                          Digital
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-primary/100 text-white border-primary/20">
                      {categories.find((cat) => cat.id === product.category)?.label}
                    </Badge>
                    <Link
                      href={`/shop/product/${product.id}`}
                      className="hover:text-primary transition-colors duration-300"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button
                      className="w-full bg-primary text-white hover:text-white hover:bg-primary/90"
                      onClick={() => {
                        setCartItems([...cartItems, { ...product, quantity: 1 }])
                        setIsCartVisible(true)
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <CartBar
        isVisible={isCartVisible}
        onClose={() => setIsCartVisible(false)}
        items={cartItems}
        onUpdateQuantity={(id, quantity) => {
          if (quantity === 0) {
            setCartItems(cartItems.filter((item) => item.id !== id))
          } else {
            setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
          }
        }}
        onRemoveItem={(id) => {
          setCartItems(cartItems.filter((item) => item.id !== id))
        }}
      />

      <Footer />
    </div>
  )
}
