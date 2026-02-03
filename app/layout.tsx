import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://whop.com/aimentor-elevating-minds-with-ai";
const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  title: "Claude Code for Business | AI Productivity Course for Non-Technical Owners",
  description: "Learn to use Claude Code for everyday business tasks. Save 10+ hours/week automating work. No coding required. $29.99 - Get instant access today.",
  keywords: [
    "Claude Code for business",
    "Claude Code course",
    "AI productivity for business owners",
    "Claude AI for non-technical users",
    "business automation with AI",
    "learn Claude Code",
    "AI tools for entrepreneurs",
    "productivity automation course"
  ],
  authors: [{ name: "AI Mentor" }],
  creator: "AI Mentor",
  publisher: "AI Mentor",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Claude Code for Business | AI Productivity Course",
    description: "Learn to use Claude Code for everyday business tasks. Save 10+ hours/week. No coding required. $29.99",
    siteName: "Claude Code for Business",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Claude Code for Business Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code for Business | AI Productivity Course",
    description: "Learn to use Claude Code for everyday business tasks. Save 10+ hours/week. No coding required.",
    images: [ogImage],
  },
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
  verification: {
    // Add Google Search Console verification here if needed
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Course markup for SEO
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Claude Code for Business",
    "description": "Learn to use Claude Code for everyday business tasks. Perfect for non-technical business owners who want to save time and automate work.",
    "provider": {
      "@type": "Organization",
      "name": "AI Mentor",
      "sameAs": "https://whop.com/aimentor-elevating-minds-with-ai"
    },
    "offers": {
      "@type": "Offer",
      "price": "29.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://whop.com/aimentor-elevating-minds-with-ai",
      "priceValidUntil": "2026-12-31"
    },
    "courseMode": "online",
    "educationalLevel": "Beginner",
    "inLanguage": "en",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT10H"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
