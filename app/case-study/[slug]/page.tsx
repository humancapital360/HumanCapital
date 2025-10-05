// app/case-study/[slug]/page.tsx
"use client";


import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin, Tag, } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

interface CaseStudy {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCaseStudy() {
      try {
        const res = await fetch(
          `https://blog.humancapital360.com/wp-json/wp/v2/pages?slug=${slug}`
        );
        const data: CaseStudy[] = await res.json();
        setCaseStudy(data[0]);
      } catch (error) {
        console.error("Error fetching case study:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return <p className="text-center py-12 text-gray-500">Loading...</p>;
  }

  if (!caseStudy) {
    return <p className="text-center py-12 text-gray-500">Loading...</p>;
  }

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />
      
      <main className="flex-1 pt-[170px]">
      
        {/* ✅ Consistent Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[170px] pt-[180px] pb-[70px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-500/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-6">
              <Link
                href="/case-study"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Study
              </Link>
              &nbsp;&nbsp;
              <Badge className="bg-primary/100 text-white border-primary/20">
                Case Study
              </Badge>

              <h1
                className="text-4xl font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: caseStudy.title.rendered }}
              />
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-12 px-4 prose prose-lg">
          <div
            className="case-study-content"
            dangerouslySetInnerHTML={{ __html: caseStudy.content.rendered }}
          />

          {/* Global styles for case study content */}
          <style jsx global>{`
            .case-study-content h2 {
              font-size: 2rem;
              font-weight: bold;
              margin: 2rem 0 1rem 0;
              color: #1f2937;
            }
            .case-study-content h3 {
              font-size: 1.5rem;
              font-weight: bold;
              margin: 1.5rem 0 1rem 0;
              color: #374151;
            }
            .case-study-content p {
              margin: 1rem 0;
              line-height: 1.7;
              color: #4b5563;
              padding: 1rem;
              border-radius: 0.5rem;
              border: 1px solid #e5e7eb;
            }
            .case-study-content ul,
            .case-study-content ol {
              margin: 1rem 0;
              padding-left: 2rem;
            }
            .case-study-content li {
              margin: 0.5rem 0;
              line-height: 1.6;
              color: #4b5563;
              padding: 0.5rem;
              border-radius: 0.25rem;
              border: 1px solid #f3f4f6;
            }
            .case-study-content blockquote {
              border-left: 4px solid #0c7d3f;
              padding: 1rem 1.5rem;
              margin: 2rem 0;
              background-color: #f9fafb;
              font-style: italic;
              border-radius: 0.5rem;
            }
            .case-study-content strong {
              font-weight: bold;
              color: #0c7d3f;
            }
          `}</style>
        </section>
      </main>

      <Footer />
    </div>
  );
}
