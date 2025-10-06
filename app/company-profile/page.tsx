"use client";

import Flipbook from "@/components/Flipbook"
import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FloatingElements } from "@/components/floating-elements";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";


export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navigation />
      <FloatingElements />

      <main className="flex-1 pt-[170px]">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[170px] pt-[180px] pb-[70px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-500/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8">
              <Badge className="bg-primary/100 text-white border-primary/20 animate-bounce-in">
                <Zap className="w-4 h-4 mr-2" />
                Company Profile
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight animate-slide-in-left">

                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                  Discover Our Story
                </span>
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto px-3 animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                Flip through our company profile to learn about our mission,
                vision, services, and impact.
              </p>
            </div>
          </div>
        </section>

        {/* PDF Viewer */}
        <Flipbook />
      </main>
      <br /><br />

      <Footer />
    </div>
  );
}
