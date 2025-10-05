"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Facebook, Linkedin } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])

  // Map WordPress category IDs → your custom categories
  const categoryMap: Record<number, string> = {
    2: "Transformation",
    3: "Community",
    4: "Business",
    5: "Success Stories",
    6: "Training",
  }

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`https://blog.humancapital360.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
        const data = await res.json()
        const wpPost = data[0]

        if (wpPost) {
          const image = wpPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"

          setPost({
            id: wpPost.id,
            title: wpPost.title.rendered,
            content: wpPost.content.rendered,
            excerpt: wpPost.excerpt.rendered.replace(/<[^>]+>/g, ""),
            author: wpPost._embedded?.author?.[0]?.name || "Admin",
            date: wpPost.date,
            image,
            category: categoryMap[wpPost.categories?.[0]] || "General",
            readTime: "5 min read",
            tags: wpPost.tags || [],
            slug: wpPost.slug,
          })

          // Fetch related posts by category
          if (wpPost.categories?.length > 0) {
            const catId = wpPost.categories[0]
            const relatedRes = await fetch(
              `https://blog.humancapital360.com/wp-json/wp/v2/posts?categories=${catId}&exclude=${wpPost.id}&per_page=3&_embed`,
            )
            const relatedData = await relatedRes.json()
            setRelatedPosts(
              relatedData.map((p: any) => ({
                id: p.id,
                title: p.title.rendered,
                excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, ""),
                slug: p.slug,
                image: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg",
                category: categoryMap[p.categories?.[0]] || "General",
                readTime: "5 min read",
              })),
            )
          }
        }
      } catch (err) {
        console.error("Error fetching post", err)
      }
    }

    if (slug) fetchPost()
  }, [slug])

  const sharePost = (platform: string) => {
    if (!post || typeof window === "undefined") return
    const url = window.location.href
    const text = `Check out this article: ${post.title}`

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`,
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
        <Navigation />
        <main className="flex-1 pt-[170px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Loading...</h1>
            <Link href="/blog">
              <Button className="bg-primary hover:bg-primary/90">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <br />
        <br />
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />

      <main className="flex-1 pt-[170px]">
        {/* Hero Section (consistent) */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[170px] pt-[180px] pb-[70px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-500/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              &nbsp;&nbsp;
              <Badge className="bg-primary/100 text-white border-primary/20">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{post.title}</h1>
              <div className="flex items-center justify-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={post.image || "/placeholder.svg"} fill alt={post.title} className="object-cover" />
              </div>
              <br />
              <br />

              {/* Social Media Icons */}
              <div
                className="flex gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-center animate-slide-in-down"
                style={{ animationDelay: "0.8s" }}
              >
                <p className="text-bold lg:text-extrabold lg:p-2 sm:text-base md:text-base sm:p-0 md:p-0">
                  Share This Article:
                </p>
                <button
                  onClick={() => sharePost("whatsapp")}
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  title="Share on WhatsApp"
                >
                  <svg
                    className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-black hover:text-white cursor-pointer transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </button>
                <button
                  onClick={() => sharePost("linkedin")}
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={() => sharePost("facebook")}
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  title="Share on Facebook"
                >
                  <Facebook className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={() => sharePost("twitter")}
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  title="Share on Twitter(X)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  >
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <article className="prose prose-lg max-w-none">
                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t">
                      <div className="flex items-center gap-2 mb-4">
                        {/*  <Tag className="w-5 h-5 text-gray-500" />
                        <span className="font-semibold text-gray-700">Tags:</span> */}
                      </div>
                      {/*  <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: any, index: number) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                          >
                          Tag {tag}
                          </Badge>
                        ))}
                      </div> */}
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    {/* Share Buttons */}
                    {/*  <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4">Share This Article</h3>
                        <div className="space-y-3">
                          <Button
                            variant="outline"
                            className="w-full justify-start hover:bg-primary hover:text-white bg-transparent"
                            onClick={() => sharePost("whatsapp")}
                          >
                            <MessageCircleHeart className="w-4 h-4 mr-2" />
                            Share on<br /> WhatsApp
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full justify-start hover:bg-primary hover:text-white bg-transparent"
                            onClick={() => sharePost("twitter")}
                          >
                            <Twitter className="w-4 h-4 mr-2" />
                            Share on<br /> Twitter
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full justify-start hover:bg-primary hover:text-white bg-transparent"
                            onClick={() => sharePost("facebook")}
                          >
                            <Facebook className="w-4 h-4 mr-2" />
                            Share on<br /> Facebook
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full justify-start hover:bg-primary hover:text-white bg-transparent"
                            onClick={() => sharePost("linkedin")}
                          >
                            <Linkedin className="w-4 h-4 mr-2" />
                            Share on<br /> LinkedIn
                          </Button>
                        </div>
                      </CardContent>
                    </Card> */}

                    {/* Author Info */}
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4">About the Author</h3>
                        <div className="space-y-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {post.author
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{post.author}</h4>
                            <p className="text-gray-600 text-sm">Contributor on Human Capital 360°</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          fill
                          alt={relatedPost.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-secondary/10 text-secondary border-secondary/20">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{relatedPost.readTime}</span>
                          <Link href={`/blog/${relatedPost.slug}`}>
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                              Read More
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Global styles for blog content */}
      <style jsx global>{`
        .blog-content h2 {
          font-size: 2rem;
          font-weight: bold;
          margin: 2rem 0 1rem 0;
          color: #1f2937;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 1.5rem 0 1rem 0;
          color: #374151;
        }
        .blog-content p {
          margin: 1rem 0;
          line-height: 1.7;
          color: #4b5563;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }
        .blog-content ul,
        .blog-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        .blog-content li {
          margin: 0.5rem 0;
          line-height: 1.6;
          color: #4b5563;
          padding: 0.5rem;
          border-radius: 0.25rem;
          border: 1px solid #f3f4f6;
        }
        .blog-content blockquote {
          border-left: 4px solid #0c7d3f;
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          background-color: #f9fafb;
          font-style: italic;
          border-radius: 0.5rem;
        }
        .blog-content strong {
          font-weight: bold;
          color: #0c7d3f;
        }
      `}</style>
    </div>
  )
}
