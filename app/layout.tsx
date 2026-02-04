import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://claudecodeforbusiness.com";
const checkoutUrl = "https://whop.com/aimentor-elevating-minds-with-ai";
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
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Claude Code for Business",
    "description": "Learn to use Claude Code for everyday business tasks. Perfect for non-technical business owners who want to save time and automate work.",
    "provider": {
      "@type": "Organization",
      "name": "AI Mentor",
      "sameAs": checkoutUrl
    },
    "offers": {
      "@type": "Offer",
      "price": "29.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": checkoutUrl,
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "I'm not technical at all. Will this really work for me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! This course is specifically designed for non-technical business owners. If you can type and click a mouse, you can use Claude Code. We assume zero technical knowledge and explain everything in plain English. Our students include real estate agents, consultants, shop owners, and entrepreneurs from all backgrounds."
        }
      },
      {
        "@type": "Question",
        "name": "How much time do I need to invest to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most students see their first time savings within 24-48 hours of starting. The full course takes about 7-8 hours to complete, but you can learn at your own pace. Many students start automating tasks after just the first module (45 minutes)."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of tasks can Claude Code actually automate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Almost any text-based task: writing emails, creating documents and reports, analyzing data, doing research, drafting social media posts, creating content, summarizing meetings, managing spreadsheets, and much more. If it involves reading, writing, or analyzing information, Claude Code can help you do it faster."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from just using ChatGPT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Claude Code is specifically designed for business productivity and automation, with features that make it much more powerful for real work than general chatbots. This course teaches you the specific techniques and workflows that business owners need—not generic AI chat."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a money-back guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a no-questions-asked 30-day money-back guarantee. Try the course, implement the techniques, and if you're not saving significant time within 30 days, just let us know and we'll refund your purchase in full."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have access to the course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get lifetime access! Buy it once and it's yours forever. You can learn at your own pace, revisit modules anytime, and get all future updates at no additional cost."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
