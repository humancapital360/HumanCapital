"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCarousel } from "@/components/mobile-carousel"

// Utility function to render text with breaks
const renderTextWithBreaks = (text: string) => {
  return text.split("<br />").map((part, index, array) => (
    <span key={index}>
      {part}
      {index < array.length - 1 && <br />}
    </span>
  ))
}

export default function TeamPage() {
  const executiveTeam = [
    {
      name: "Pamela Wise-Martinez",
      title: "Chief Executive Officer",
      description:
        "Company Executive, Human Capital 360 enterprise transformation, architecture mandates, and Owner-360 business opportunity excellence.",
      image: "/images/team/Pam1.jpg",
      badge: "CEO",
      fullBio:
        "Our Chief Executive Officer Pamela Wise-Martinez, brings C-suite experience and multi-industry delivering critical infrastructure innovation for corporate return on investment and growth through business and technology analysis and capability assessments. Pamela has nearly 3 decades in private and public sectors as advisor, strategic planner, transformation expert, designing and scaling people, processes and technology for businesses world-wide.<br /><br />She led the creation of the data interoperability model for international standards, defined initial Industrial Internet of Things use cases. Pamela pioneered Service Oriented capability and led business agility thinking across industries. She authored the Energy data Ontology, and computational intelligence capability through machine learning and advance predictions for Global energy usage. Pamela served as, Global Executive Director for Innovation and Architect at Whirlpool Corp, where she identified over 40 million in saving though Machine Learning for quality and demand forecasting.<br /><br />As Managing Director, Global Chief Enterprise Architect at Deloitte & Touché, she led over 200 + cross-functional team of principal engineers, developers and solution architects delivering next generation technology, engineering planning, and complex concepts in service technologies for billion-dollar IT transformation. A Scientist, Inventor and IT Executive, She was awarded a patent for the first biometric financial transaction secured technology. Pamela holds a Masters in Engineering Management and Bachelors of Science in Information Systems.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/pamelasimartinez",
        facebook: "https://facebook.com/pamelasimartinez",
        instagram: "https://instagram.com/pamelasimartinez",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Clarence Dickerson",
      title: "President",
      description:
        "Experienced in managing and leading several multimodal projects and programs for all surface transportation modes, including highways, streets, bridges, tunnels, transit, as well as bicycle and pedestrian pathways.",
      image: "/images/team/Clar.jpg",
      badge: "President",
      fullBio:
        "Clarence L. Dickerson III, P.E.<br /> Licensed Professional Engineer with over 20 years of experience in transportation engineering, traffic operations, multimodal planning, and infrastructure program management.<br /> He has led multi-million-dollar projects across highways, bridges, tunnels, transit, and bicycle/pedestrian networks, excelling in executive leadership, budget management, stakeholder engagement, and staff development.<br /><br />Core Competencies<br /> Transportation Program Management<br /> Traffic Engineering & Safety<br /> Multimodal Planning<br /> Budget Administration<br /> Contract & Vendor Oversight<br /> Organizational Development<br /> Public & Stakeholder Engagement<br /><br />Professional Experience<br /> Currently Administrator, Office of Transportation, Howard County Government, MD, overseeing planning, transit, and a $27M budget.<br /> Previously Deputy Director, Department of Public Works, Howard County, MD, leading safety and organizational programs.<br /> Former Director of Traffic Engineering at EXP U.S. Services, Washington, DC, managing traffic engineering and design projects.<br /> Held multiple engineering leadership roles at DDOT, Washington, DC, managing major transportation projects, safety programs, and work zone policies.<br /> Earlier roles at North Carolina DOT included design and field engineering for highway and bridge projects.<br /><br />Education<br /> B.S., Civil Engineering, North Carolina Agricultural and Technical State University<br /><br />Licensure & Certification<br /> Professional Engineer, Washington, DC<br /> Engineer in Training, Washington, DC<br /><br />Publication<br /> Authored a paper on citywide work-zone management for the Transportation Research Board.<br />",
      socialMedia: {
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Terry Vaughn",
      title: "Chief Operation Officer",
      description:
        "Company Executive, Human Capital 360, Neighborhood Community Conversion (NCC) programs, business development, solutions, and sustainability.",
      image: "/images/team/Danta.jpg",
      badge: "COO",
      fullBio:
        "Our Chief Operation Officer Mr. Danta Terry Vaughn, is a serial entrepreneur with over 3 decades of professional study in personal development and leadership coaching. As a former international direct marketing expert, and leader over a global organization of recruiters, network marketers and sales team delivering millions in revenue. Mr. Vaughn has provided human resources for fortune 500 companies; and a former business loan officer, qualifying and matching entrepreneurs with respective lenders.<br /><br />Terry's story is one of triumph and personal sacrifice by evolving from educational deprivation, poverty, and survival techniques using empirical street knowledge, psychology and empathic human intelligence. Through his marketing and collaboration genius Terry has assisted businesses in finance, energy, legal, security automation, identity protection, travel and lifestyle services, roofing and building construction industries, facilitating numerous entrepreneurs to shift mindsets using his self-taught and proven marketing concepts world-wide.<br /><br />Mr. Vaughn has mastered strategies of personal development, character training, and human capital and made it a personal quest to help others realized their human capital potential and financial growth. Today, Terry continues to grow his marque with multiple books and additional niched businesses on the horizon.",
      socialMedia: {
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Lauren Fireman",
      title: "Chief Information Officer",
      description:
        "Company Executive, Human Capital 360, intellectual property for internal and external propriety systems, processes, and methodologies for business integrity.",
      image: "/images/team/Lau1.jpg",
      badge: "CIO",
      fullBio:
        "Lauren Fireman brings over 20 years of expertise as a HCM Solutions Architect, technology strategist, and global systems leader. She is currently the Treasurer of my daughter's Girl Scout Troop. She has led large-scale Workday implementations across more than 30 countries for both Fortune 500 companies and high-growth startups, delivering scalable, secure, and user-centric solutions. Lauren excels at driving measurable results, including improving operational efficiency by 35–45% at Avaap within six months and achieving customer satisfaction rates consistently above 90%.<br /><br />She is recognized for her ability to combine innovation with governance, ensuring that technology investments remain compliant, scalable, and aligned with organizational goals. Her leadership experience spans roles at Avaap, Apollo Global Management, MUFG Securities Americas, BlackRock, and UniCredit, as well as independent consulting engagements with HROptimize LLC and teamUpHR, Inc. She is also the founder of brightvester, a financial literacy platform for children and teens that merges education and innovation with social impact.<br /><br />Lauren has shared her expertise as a speaker at the 16th Annual HR Service Delivery Forum and at Workday Rising 2013, where she presented on a six-month Workday implementation.She holds a dual MBA in Human Resources and Information Systems from the University at Albany, SUNY. In her spare time, she volunteers with the Pleasantville PTA, where she runs the Empathy Program, and with the Pleasantville Fund for Learning, where she helps organize the Brick Laying backend and annual ceremony.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/vedawoods",
        facebook: "https://facebook.com/vedawoods",
        instagram: "https://instagram.com/vedawoods",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Dr. Tushar Hazra",
      title: "Chief Technology Officer",
      description:
        "Technology innovator leading the development of cutting-edge solutions that empower our clients' digital transformation.",
      image: "/images/team/dr-tushar.jpg",
      badge: "CTO",
      fullBio:
        "Dr. Tushar Hazra has joined Human Capital 360 as the Chief Technology Officer (CTO). For the past twenty-five years, Dr. Hazra has designed, developed, and delivered innovative, practical, and transformative platforms for progressive start-ups and small businesses. In this professional C-suite capacity, he has provided strategic leadership to envision and formulate roadmaps and blueprints for companies to succeed in their transformation journey.<br /><br />One of Dr. Hazra's recent endeavors includes leading digital business transformation for many global businesses. Tushar completed the Executive CTO Program from the Wharton School at the University of Pennsylvania in Philadelphia in 2024. He has also pursued the Executive Program on Product Strategy and Management at the Kellogg School of Business at Northwestern University, Evanston, IL. During his professional career, Tushar has demonstrated C-level executive partnership, thought leadership, program management, P&L responsibility, and expertise in technology, engineering, and business domains.<br /><br />He has successfully leveraged emerging technologies, including Artificial Intelligence (AI), Machine Learning (ML), social media, cloud computing, big data analytics, cybersecurity, the Internet of Things, and mobile computing. Before joining Human Capital 360, Tushar developed and led large-scale solution strategies, roadmaps, and program-level execution, guiding systems integration programs with major corporate enterprises in healthcare, financial services, insurance, retail, and supply chain industries, as well as twenty-one (21) US federal government agencies. Tushar spends his spare time conducting wine tastings, wine-food pairings, and ratings, as well as exploring modern wine-making techniques. Tushar served on the Boards of two world-recognized wineries.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/tusharhazar",
        facebook: "https://facebook.com/tusharhazar",
        instagram: "https://instagram.com/tusharhazar",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Veda Woods",
      title: "Senior Vice President/Chief Information Security Officer",
      description:
        "Company Executive oversees the Human Capital 360 cybersecurity and advisory for our company and contractors.",
      image: "/images/team/Veda3.jpg",
      badge: "CISO",
      fullBio:
        "Veda Woods is a highly regarded cybersecurity executive with nearly three decades of comprehensive experience in both public and private sectors. <br /><br />Her expertise encompasses cybersecurity, cyber risk management, digital governance, and threat intelligence oversight. Ms. Woods is skilled in deploying innovative technologies to craft and execute sophisticated cybersecurity strategies that unify diverse environments and optimize operations within highly regulated industries globally. <br /><br />Ms. Woods has founded numerous initiatives, including the Global Cyber Security Advisory Group, where she serves as CEO, and as the Founder and Board Chair of Protect Us Kids Foundation, aimed at combating online child sexual exploitation internationally. <br /><br />Her career has also included significant roles such as the Executive Director and Global Head of Cyber, Technology, Information Security Risk, Threat Intelligence & Vulnerability Management Oversight at Morgan Stanley, and the Director of Cybersecurity Strategy & Resilience at Capital One. <br /><br />Additionally, she served as the Chief Information Security Officer and Deputy CIO at the Executive Office of the President, Recovery Accountability and Transparency Board. <br /><br />In her leadership roles, Ms. Woods focuses on strategic cybersecurity governance and sustainability, diligently working to safeguard critical sectors like healthcare, finance, law enforcement, defense, and intelligence. <br /><br />Her approach integrates systematic cyber risk oversight with strong privacy and risk governance frameworks, emphasizing the protection of individual rights and the advancement of social good. Her unwavering commitment to cybersecurity excellence has garnered her numerous accolades and the opportunity to influence both national and international cyber policies through her contributions to various publications and forums. <br /><br />Driven by a passion for technological innovation and community service, Ms. Woods is dedicated to fostering diversity in STEM/STEAM fields and advocating for environmental, social and governance (ESG) sustainability as part of broader cybersecurity and humanitarian efforts. <br /><br />Her leadership continues to inspire significant advancements in cybersecurity practices, aiming to protect the most vulnerable populations from the challenges of the digital world. <br /><br />Ms. Woods' expertise is bolstered by a solid educational background and numerous professional certifications. She holds a Master of Science in Information Assurance from Norwich University, Cum Laude, and a Bachelor of Science in Information Systems Management from the University of Maryland University College, both with honors. <br /><br />Her credentials include Certified Information Security Manager (CISM) from ISACA and Certified Chief Information Security Officer (C/CISO) by EC-Council, underscoring her deep commitment to the highest standards in cybersecurity and risk governance.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/vedawoods",
        facebook: "https://facebook.com/vedawoods",
        instagram: "https://instagram.com/vedawoods",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Shana Nussbaum",
      title: "Vice President/Business Services",
      description:
        "Company Executive, Head of Human Capital 360, company (and clients) business services, and consultancy for business acceleration.",
      image: "/images/team/Shana2.png",
      badge: "VP",
      fullBio:
        "Shana Nussbaum, brings strategic and technical experience as a strategic planner, program manager, and Business Architect with 22+ years of defense, government, intelligence, manufacturing, and information technology experience. Shana quickly absorbs new technical subject matter information and has a passion for learning about people and their businesses. She excels at guiding teams to apply qualitative and quantitative business analysis to improve effectiveness and efficiency.<br /><br />She naturally builds situational awareness across disparate divisions by building trust and fostering communication. As the Principal Lead Agile Engineer at Whirlpool Corporation, she led a 100+ member team of architects and business relationship managers to create and implement a tailored Enterprise Architecture strategy.<br /><br />Shana holds a Master of Science in Education, completed most of her Masters in Business Administration for Finance, and a Bachelor of Science in Aerospace Engineering. She is also a Lean Six Sigma Black Belt and SAFe Practitioner. In her spare time, Shana is usually found in her greenhouse or garden, and volunteer extensively with Scouts USA and other youth organizations.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/sharonnussbaum",
        facebook: "https://facebook.com/sharonnussbaum",
        instagram: "https://instagram.com/sharonnussbaum",
      },
      youtubeVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Dr. Agorom Dike",
      title: "Director of Events",
      description:
        "Expertise in leadership development, public speaking, and interview preparation, he brings a wealth of global experience in organizing impactful events that inspire growth and connection.",
      image: "/images/team/Dr-Dike1.jpg",
      badge: "DoE",
      fullBio:
        "Dr. Agorom Dike serves as the Director of Events at Human Capital 360, where he oversees the planning and execution of transformative programs and gatherings designed to empower individuals and organizations. He is also the driving force behind the African and Caribbean International Leadership Conference, a platform that amplifies voices, fosters dialogue, and builds bridges across communities.<br /><br />With a professional focus on leadership development, public speaking, and interview preparation, Dr. Dike combines his academic background with practical expertise to create impactful experiences. His events are not just gatherings but strategic platforms for growth, networking, and rebranding, helping professionals and organizations position themselves for long-term success.<br /><br />At Human Capital 360, Dr. Dike leverages his passion for people and leadership to curate programs that align with the company’s mission of equipping individuals with the tools and strategies to thrive in today’s competitive landscape. Through his work, he demonstrates how events can serve as catalysts for both personal transformation and organizational excellence.",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/dr-agorom-dike-ba8a15240",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
      },
      youtubeVideo: "https://www.youtube.com",
    },
    
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navigation />

      <main className="flex-1 pt-[170px]">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto w-[90%] sm:w-full">
              <Badge className="bg-primary/100 text-white border-primary/20 mb-6">Leadership Team</Badge>
              <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-primary">Visionary Leaders</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 leading-relaxed">
                Our executive team brings decades of combined experience in business development, technology innovation,
                and community transformation. Together, they guide Human Capital 360° in its mission to empower
                entrepreneurs and transform communities.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid - Desktop / Mobile Carousel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="block sm:hidden">
              <MobileCarousel>
                {executiveTeam.map((member, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full flex flex-col w-[280px] flex-shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-4 text-center relative z-10 flex-1 flex flex-col w-[90%] mx-auto">
                      <div className="relative mb-4">
                        <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback className="text-lg font-bold bg-gradient-to-br from-primary to-secondary text-white">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 color-primary text-white text-xs">
                          {member.badge}
                        </Badge>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-black text-xs font-base mb-3">{member.title}</p>
                      <div className="flex-1 flex flex-col justify-between">
                        <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1">{member.description}</p>
                        <div className="mt-auto">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent text-xs px-3 py-1"
                              >
                                Read Bio
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-y-auto">
                              <DialogHeader className="text-center">
                                <DialogTitle className="text-xl sm:text-3xl font-bold text-primary mb-4">
                                  {member.name}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-6 lg:grid-cols-2">
                                <div className="lg:col-span-1 space-y-4 text-center">
                                  <Avatar className="w-32 h-32 sm:w-64 sm:h-64 mx-auto">
                                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                                    <AvatarFallback className="text-3xl sm:text-6xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                                      {member.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <p className="text-sm sm:text-xl font-semibold text-center text-black">
                                    {member.title}
                                  </p>
                                </div>
                                <div className="lg:col-span-1">
                                  <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 text-center lg:text-left">
                                    Biography
                                  </h3>
                                  <div className="prose prose-sm sm:prose-lg max-w-none">
                                    <div className="text-gray-600 leading-relaxed text-xs sm:text-lg text-center lg:text-left">
                                      {renderTextWithBreaks(member.fullBio)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </MobileCarousel>
            </div>

            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveTeam.map((member, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10 flex-1 flex flex-col">
                    <div className="relative mb-6">
                      <Avatar className="w-40 h-40 mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 color-primary text-white">
                        {member.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-black text-base font-base mb-4">{member.title}</p>
                    <div className="flex-1 flex flex-col justify-between">
                      <br />
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{member.description}</p>
                      <div className="mt-auto">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                            >
                              Read Bio
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-3xl font-bold text-primary mb-4">{member.name}</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-8 lg:grid-cols-2">
                              <div className="lg:col-span-1 space-y-6">
                                <Avatar className="w-64 h-64 mx-auto">
                                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                                  <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                                    {member.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <p className="text-xl font-semibold text-center text-black">{member.title}</p>
                              </div>
                              <div className="lg:col-span-1">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">Biography</h3>
                                <div className="prose prose-lg max-w-none">
                                  <div className="text-gray-600 leading-relaxed text-lg">
                                    {renderTextWithBreaks(member.fullBio)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">How Can We Help?</h2>
            <p className="text-sm sm:text-base md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our experienced leadership team is ready to help you transform your business and achieve your goals. Get
              in touch to start your journey with Human Capital 360°.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-primary px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Our Team
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 text-sm sm:text-base"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
