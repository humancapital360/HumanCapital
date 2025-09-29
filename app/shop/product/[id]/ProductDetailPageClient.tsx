"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, Download, ShoppingCart, Share2, Heart } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProductDetailPageClient() {
  const params = useParams()
  const [product, setProduct] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Mock product data - in real app, fetch from API
  const products = [
    {
      id: 1,
      title: "Building Your Moral Muscle: A Complete Guide",
      description:
        "Comprehensive e-book on character development and moral integrity building for personal transformation.",
      fullDescription:
        "This comprehensive guide takes you through a transformative journey of character development and moral integrity building. Unlike traditional coaching methods, our 'Building Your Moral Muscle' approach provides practical, actionable strategies that create lasting change. The book includes real-world case studies, interactive exercises, and a step-by-step framework for personal transformation.",
      category: "ebooks",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 156,
      images: [
        "/placeholder.svg?height=500&width=400&text=Moral+Muscle+Guide",
        "/placeholder.svg?height=500&width=400&text=Inside+Pages",
        "/placeholder.svg?height=500&width=400&text=Exercises",
      ],
      bestseller: true,
      downloadable: true,
      features: [
        "300+ pages of transformative content",
        "Interactive exercises and worksheets",
        "Real-world case studies",
        "Step-by-step implementation guide",
        "Lifetime access and updates",
      ],
      whatYouLearn: [
        "How to build unshakeable moral integrity",
        "Strategies for overcoming past mistakes",
        "Building confidence and self-worth",
        "Creating lasting behavioral change",
        "Developing leadership qualities",
      ],
      tableOfContents: [
        "Chapter 1: Understanding Moral Muscle",
        "Chapter 2: The Foundation of Character",
        "Chapter 3: Building Your Integrity Framework",
        "Chapter 4: Overcoming Past Challenges",
        "Chapter 5: Developing Leadership Qualities",
        "Chapter 6: Sustaining Long-term Change",
      ],
    },
    // Add more products as needed
  ]

  useEffect(() => {
    const productId = Number.parseInt(params.id as string)
    const foundProduct = products.find((p) => p.id === productId)
    setProduct(foundProduct || products[0])
  }, [params.id])

  const handleAddToCart = () => {
    // In real app, add to cart logic
    console.log(`Added ${quantity} of product ${product.id} to cart`)
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Check out this amazing resource: ${product.title}`

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
        <Navigation />
        <main className="flex-1 pt-[170px] flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
            <p className="text-gray-600">The product you're looking for doesn't exist.</p>
            <Link href="/shop">
              <Button className="bg-primary hover:bg-primary/90">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />

      <main className="flex-1 pt-[170px]">
        {/* Breadcrumb */}
        <section className="py-6 bg-gray-50 -mt-[170px] pt-[180px]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/shop" className="hover:text-primary transition-colors">
                Shop
              </Link>
              <span>/</span>
              <span className="text-gray-900">{product.title}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    fill
                    alt={product.title}
                    className="object-cover"
                  />
                  {product.bestseller && (
                    <Badge className="absolute top-4 left-4 bg-primary text-white">Bestseller</Badge>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-gray-200 hover:border-primary hover:bg-primary/10"
                      }`}
                    >
                      <Image
                        src={image || "/images/prd.jpg"}
                        width={80}
                        height={80}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-primary/100 text-white border-primary/20">E-book</Badge>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed p-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                  <Badge className="bg-green-100 hover:bg-green-100 text-green-800 hover:text-green-800">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                </div>

                {product.downloadable && (
                  <div className="flex items-center gap-2 text-green-600 p-3 bg-green-50 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-green-200">
                    <Download className="w-5 h-5" />
                    <span>Instant digital download</span>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label htmlFor="quantity" className="text-sm font-medium">
                      Quantity:
                    </label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button onClick={handleAddToCart} className="flex-1 bg-primary hover:bg-primary/90 text-lg py-6">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`px-6 py-6 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ${
                      isWishlisted ? "bg-primary text-white border-primary" : ""
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                  </Button>
                </div>

                <div className="flex gap-2">
                  <span className="text-sm text-gray-600">Share:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("twitter")}
                    className="hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Twitter
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare("facebook")}
                    className="hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="description" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="contents">Contents</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">About This Product</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 p-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200">
                      {product.fullDescription}
                    </p>
                    <h4 className="text-xl font-bold mb-4">What You'll Learn</h4>
                    <ul className="space-y-2">
                      {product.whatYouLearn.map((item: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 border border-gray-100 text-primary"
                        >
                          <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.features.map((feature: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 border border-gray-200"
                        >
                          <Download className="w-5 h-5 text-primary hover:text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contents" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Table of Contents</h3>
                    <div className="space-y-3">
                      {product.tableOfContents.map((chapter: string, index: number) => (
                        <div
                          key={index}
                          className="p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200"
                        >
                          {chapter}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
                    <div className="space-y-6">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="font-semibold">John D.</span>
                            <span className="text-gray-500 text-sm">Verified Purchase</span>
                          </div>
                          <p className="text-gray-600 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                            "This guide completely transformed my approach to personal development. The practical
                            exercises and real-world examples made it easy to implement the concepts immediately."
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.images[0] || "/images/prd.jpg"}
                      fill
                      alt={relatedProduct.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 p-4 rounded transition-all duration-300 border border-gray-100">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">${relatedProduct.price}</span>
                      <Link href={`/shop/product/${relatedProduct.id}`}>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          View Details
                        </Button>
                      </Link>
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
