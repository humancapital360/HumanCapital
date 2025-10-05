"use client";

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

export default function CaseStudyPage() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        const res = await fetch(
          `https://blog.humancapital360.com/wp-json/wp/v2/pages?per_page=20&_embed`
        );
        const data = await res.json();

        // ✅ Only include pages starting with "Case Study:"
        const filtered = data.filter((page: any) =>
          page.title.rendered.startsWith("Case Study:")
        );

        setCaseStudies(filtered);
      } catch (err) {
        console.error("Failed to fetch case studies", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudies();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading case studies...</p>;
  }

  if (!caseStudies.length) {
    return <p className="text-center py-20">No case studies available.</p>;
  }

  const featured = caseStudies[0];

  const getImage = (item: any) =>
    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg";

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
                Case Studies
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                  Transforming Lives
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                Real stories of transformation, resilience, and success with HC360°.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Featured Case Study */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Featured Case Study</h2>
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={getImage(featured)}
                    alt={featured.title.rendered}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Link href={`/case-study/${featured.slug}`}>
                    <h3
                      className="text-2xl font-bold mb-4 hover:text-primary"
                      dangerouslySetInnerHTML={{ __html: featured.title.rendered }}
                    />
                  </Link>
                  <p
                    className="text-gray-600 mb-6"
                    dangerouslySetInnerHTML={{
                      __html: featured.excerpt?.rendered || "",
                    }}
                  />
                  <div className="flex gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      HC360° Team
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featured.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Link href={`/case-study/${featured.slug}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* ✅ Grid of Other Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(1).map((study) => (
              <Card key={study.id} className="shadow hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={getImage(study)}
                    alt={study.title.rendered}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-between">
                  <Link href={`/case-study/${study.slug}`}>
                    <h3
                      className="text-lg font-bold mb-2 hover:text-primary"
                      dangerouslySetInnerHTML={{ __html: study.title.rendered }}
                    />
                  </Link>
                  <p
                    className="text-sm text-gray-600 line-clamp-3 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: study.excerpt?.rendered || "",
                    }}
                  />
                  <Link
                    href={`/case-study/${study.slug}`}
                    className="text-primary font-semibold flex items-center gap-2 hover:underline mt-auto"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
