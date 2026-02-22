import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🌐 Replace with your actual production domain
const siteUrl = "https://www.skellify.com";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Skellify | IT Training, OJT Programs & Software Solutions",
    template: "%s | Skellify",
  },

  description:
    "Skellify provides industry-leading IT training, On-the-Job Training (OJT), SDET, Automation, and Software Development services. Skill. Automate. Grow.",

  keywords: [
    "Skellify",
    "IT Training India",
    "OJT Programs",
    "SDET Course",
    "Automation Testing",
    "Python Automation",
    "Software Development Company",
    "API Testing Course",
    "Frontend Development",
    "Digital Transformation",
    "Tech Training Institute",
  ],

  authors: [{ name: "Skellify Team", url: siteUrl }],
  creator: "Skellify",
  publisher: "Skellify",
  category: "Technology",

  // 📌 FAVICON & APP ICONS
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // 📱 OPEN GRAPH (Facebook, LinkedIn, WhatsApp Preview)
  openGraph: {
    title: "Skellify | Skill. Automate. Grow.",
    description:
      "Industry-vetted IT training, OJT programs, certifications, and professional software solutions for students and businesses.",
    url: siteUrl,
    siteName: "Skellify",
    images: [
      {
        url: "/og-image.jpg", // 1200x630 recommended (place inside /public)
        width: 1200,
        height: 630,
        alt: "Skellify IT Training & Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🐦 TWITTER SEO
  twitter: {
    card: "summary_large_image",
    title: "Skellify | IT Training & Software Solutions",
    description:
      "Bridging the gap between students and industry with OJT, SDET, Automation & real-world tech training.",
    images: ["/og-image.jpg"],
    creator: "@skellify", // optional (add if you have Twitter)
  },

  // 🔎 SEARCH ENGINE ROBOTS
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 📍 CANONICAL URL (Prevents duplicate SEO issues)
  alternates: {
    canonical: siteUrl,
  },

  // 📱 MOBILE & APP SETTINGS
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 🎨 THEME COLOR (Browser UI color)
  themeColor: "#0f172a", // change to your brand color if needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Extra SEO + Performance */}
        <link rel="canonical" href={siteUrl} />
        <meta name="application-name" content="Skellify" />
        <meta name="apple-mobile-web-app-title" content="Skellify" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}