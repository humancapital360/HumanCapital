"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Calendar, ArrowRight, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { Badge } from "@/components/ui/badge"


export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsRes, catsRes] = await Promise.all([
          fetch("https://blog.humancapital360.com/wp-json/wp/v2/posts?_embed"),
          fetch("https://blog.humancapital360.com/wp-json/wp/v2/categories"),
        ])
        const postsData = await postsRes.json()
        const catsData = await catsRes.json()

        setPosts(postsData)
        setCategories(catsData)
      } catch (err) {
        console.error("Failed to fetch posts or categories", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Map WordPress posts into display format
  const formattedPosts = posts.map((post) => {
    const image =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"
    return {
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""), // strip HTML
      author: post._embedded?.author?.[0]?.name || "Admin",
      date: post.date,
      image,
      slug: post.slug,
      categories: post.categories, // array of category IDs
    }
  })

  // Filter posts by category
  const filteredPosts =
    selectedCategory === "all"
      ? formattedPosts
      : formattedPosts.filter((post) =>
          post.categories.includes(Number(selectedCategory))
        )

  if (loading) {
    return <p className="text-center py-20">Loading posts...</p>
  }

  if (!formattedPosts.length) {
    return <p className="text-center py-20">No posts available.</p>
  }

  const featuredPost = filteredPosts[0]

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
                <Zap className="w-4 h-4 mr-2" />
                Blog & Insights
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                  Stories & Insights
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                Discover transformation stories, business insights, and expert advice from our team and community.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <div className="container mx-auto px-4 md:px-6 mt-10 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === "all"
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            All Posts
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(String(cat.id))}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === String(cat.id)
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h3 className="text-2xl font-bold mb-4 hover:text-primary">
                        {featuredPost.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-primary hover:bg-primary/90">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Grid of other posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2><br />
          </div>
          <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="shadow hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold mb-2 hover:text-primary">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p><br />
                  <Link href={`/blog/${post.slug}`}>
                      <Button className="bg-primary hover:bg-primary/90">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
