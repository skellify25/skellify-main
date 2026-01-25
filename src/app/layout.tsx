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

// --- ENHANCED SEO METADATA ---
export const metadata: Metadata = {
  title: {
    default: "Skellify | IT Training, OJT Programs & Software Solutions",
    template: "%s | Skellify", // Allows internal pages to have titles like "Courses | Skellify"
  },
  description:
    "Skellify provides industry-leading IT training, OJT programs, and certifications for students. We also offer expert software development, automation, and digital transformation for businesses.",
  keywords: [
    "IT Training",
    "On the Job Training (OJT)",
    "Software Development",
    "Python Automation",
    "SDET Course",
    "Java Programming",
    "Digital Transformation",
    "Skellify India",
    "API Testing",
    "Frontend Development",
  ],
  authors: [{ name: "Skellify Team" }],
  creator: "Skellify",
  publisher: "Skellify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Social Media - OpenGraph (Facebook, LinkedIn)
  openGraph: {
    title: "Skellify | Skill. Automate. Grow.",
    description: "Industry-vetted IT training and professional software solutions.",
    url: "https://www.skellify.com", // Replace with your actual domain
    siteName: "Skellify",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 image in your /public folder
        width: 1200,
        height: 630,
        alt: "Skellify IT Training and Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Social Media - Twitter
  twitter: {
    card: "summary_large_image",
    title: "Skellify | IT Training & Business Solutions",
    description: "Bridging the gap between students and industry standards through OJT.",
    images: ["/og-image.jpg"],
  },
  // Search Engine Crawlers
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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