import type React from "react"
import type { Metadata } from "next"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Human Capital 360",               // fallback if page has no title
    template: "Human Capital 360",         // all page titles follow this format
  },
  description: "Empowering Neighborhoods With Pride and Innovations",
  developer: "Charles Onuoha",
  icons: {
    icon: "/favicon1.jpg",
    shortcut: "/favicon1-32x32.jpg",
    apple: "/apple-touch-icon1.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body style={{ fontFamily: 'Verdana, "Segoe UI Variable", sans-serif' }}>
        {children}
        <ScrollToTopButton />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F70RWGC2M3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F70RWGC2M3');
          `}
        </Script>
      </body>
    </html>
  )
}
