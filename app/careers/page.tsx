"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, ArrowRight, Zap, Briefcase } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JobModal } from "@/components/job-modal"

export default function CareersPage() {
  const jobCategories = [
    {
      category: "Community",
      jobs: [
        {
          title: "Neighborhood Custodians",
          description:
            "Responsible for maintaining cleanliness and order in assigned neighborhood areas, working directly with community members to improve local environments.",
          location: "Multiple Locations",
          type: "Full-time",
          experience: "Entry Level",
          responsibilities: [
            "Maintain cleanliness in assigned neighborhood areas",
            "Engage with community members to promote environmental awareness",
            "Conduct regular inspections of public spaces",
            "Report maintenance issues and safety concerns",
            "Coordinate with local authorities when necessary",
          ],
          requirements: [
            "High school diploma or equivalent",
            "Physical ability to perform outdoor work",
            "Strong communication skills",
            "Reliable transportation",
            "Willingness to work in various weather conditions",
          ],
        },
        {
          title: "Neighborhood Orderlies",
          description:
            "Support neighborhood custodians in daily operations, assist with community engagement activities, and help maintain neighborhood standards.",
          location: "Multiple Locations",
          type: "Full-time",
          experience: "Entry Level",
          responsibilities: [
            "Assist neighborhood custodians with daily tasks",
            "Support community engagement initiatives",
            "Help organize neighborhood events",
            "Maintain equipment and supplies",
            "Document community feedback and concerns",
          ],
          requirements: [
            "High school diploma or equivalent",
            "Team-oriented mindset",
            "Basic organizational skills",
            "Willingness to learn and grow",
            "Positive attitude toward community service",
          ],
        },
        {
          title: "Neighborhood Trustees",
          description:
            "Serve as community liaisons, building relationships with residents and coordinating neighborhood improvement initiatives.",
          location: "Multiple Locations",
          type: "Full-time",
          experience: "1-2 years",
          responsibilities: [
            "Build relationships with community members",
            "Coordinate neighborhood improvement initiatives",
            "Facilitate communication between residents and local authorities",
            "Organize community meetings and events",
            "Advocate for community needs and concerns",
          ],
          requirements: [
            "Bachelor's degree in community development or related field",
            "1-2 years of experience in community service or related field",
            "Strong interpersonal and communication skills",
            "Ability to work independently and as part of a team",
            "Commitment to community improvement and development",
          ],
        },
        {
          title: "Director of Neighborhood Services",
          description:
            "Lead and oversee all neighborhood service operations, manage teams, and develop strategic initiatives for community improvement.",
          location: "Towson, MD",
          type: "Full-time",
          experience: "5+ years",
          responsibilities: [
            "Lead neighborhood service operations",
            "Manage teams and resources",
            "Develop strategic initiatives for community improvement",
            "Ensure compliance with local regulations and standards",
            "Evaluate and improve service delivery processes",
          ],
          requirements: [
            "Master's degree in community development or related field",
            "5+ years of experience in community service or management",
            "Proven leadership and management skills",
            "Strong strategic thinking and planning abilities",
            "Excellent communication and interpersonal skills",
          ],
        },
        {
          title: "Neighborhood Planner",
          description:
            "Develop comprehensive plans for neighborhood improvement projects, coordinate with stakeholders, and ensure project implementation.",
          location: "Charlotte, NC",
          type: "Full-time",
          experience: "3-5 years",
          responsibilities: [
            "Develop comprehensive plans for neighborhood improvement projects",
            "Coordinate with stakeholders to gather input and feedback",
            "Ensure project implementation and adherence to timelines",
            "Analyze data and trends to inform planning decisions",
            "Prepare reports and presentations for stakeholders",
          ],
          requirements: [
            "Bachelor's degree in urban planning or related field",
            "3-5 years of experience in neighborhood planning or related field",
            "Strong analytical and problem-solving skills",
            "Excellent communication and interpersonal skills",
            "Ability to work independently and manage multiple projects simultaneously",
          ],
        },
        {
          title: "Neighborhood Project Manager",
          description:
            "Manage multiple neighborhood improvement projects simultaneously, coordinate resources, and ensure timely completion of initiatives.",
          location: "Multiple Locations",
          type: "Full-time",
          experience: "3-5 years",
          responsibilities: [
            "Manage multiple neighborhood improvement projects simultaneously",
            "Coordinate resources and budgets",
            "Ensure timely completion of initiatives",
            "Monitor project progress and address issues",
            "Prepare reports and presentations for stakeholders",
          ],
          requirements: [
            "Bachelor's degree in project management or related field",
            "3-5 years of experience in project management or related field",
            "Strong organizational and time management skills",
            "Excellent communication and interpersonal skills",
            "Ability to work independently and manage multiple projects simultaneously",
          ],
        },
      ],
    },
  ]

  const benefits = [
    "Competitive salary and benefits package",
    "Health, dental, and vision insurance",
    "Professional development opportunities",
    "Flexible work arrangements",
    "Paid time off and holidays",
    "Retirement savings plan with company match",
    "Opportunity to make a meaningful impact in communities",
    "Career advancement opportunities",
  ]

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
                <Briefcase className="w-4 h-4 mr-2" />
                Careers
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                  Join Our Mission
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                Be part of a team that's transforming communities and changing lives. Discover meaningful career
                opportunities that make a real difference.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Work <span className="text-primary">With Us?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join a mission-driven organization where your work directly impacts communities and transforms lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Make an Impact",
                  description:
                    "Your work directly contributes to community transformation and individual success stories.",
                },
                {
                  icon: Zap,
                  title: "Growth Opportunities",
                  description: "Advance your career while developing skills that make a difference in the world.",
                },
                {
                  icon: MapPin,
                  title: "Multiple Locations",
                  description: "Work in communities across the nation with opportunities for relocation and travel.",
                },
                {
                  icon: Clock,
                  title: "Work-Life Balance",
                  description: "Flexible arrangements that support your personal and professional well-being.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Current <span className="text-primary">Openings</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our available positions and find the perfect opportunity to start your journey with us.
              </p>
            </div>

            {jobCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.category} Positions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.jobs.map((job, jobIndex) => (
                    <Card
                      key={jobIndex}
                      className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                      style={{ animationDelay: `${jobIndex * 0.1}s` }}
                    >
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge className="bg-primary/100 text-white border-primary/20">
                            <MapPin className="w-3 h-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge className="bg-secondary/100 text-white border-secondary/20">
                            <Clock className="w-3 h-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge className="bg-accent/100 text-white border-accent/20">{job.experience}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <JobModal job={job} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Employee <span className="text-primary">Benefits</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in taking care of our team members with comprehensive benefits and support.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      {/*  <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <FloatingElements />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
                Join our team and be part of the solution. Together, we can transform communities and change lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  >
                    Contact HR Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about-us">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                  >
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
