# Claude Code for Business - Landing Page

## Project Overview

High-converting landing page for "Claude Code for Business" course targeting non-technical business owners. The page drives direct purchases ($29.99, discounted from $37.49) via Whop checkout integration.

**Live URL:** Hosted on Whop
**Checkout:** https://whop.com/aimentor-elevating-minds-with-ai

## Target Audience

- Non-technical business owners and founders
- Age: 35-55
- Pain points: Manual work, repetitive tasks, time management
- Goal: Learn to use Claude Code for everyday business tasks (NOT software development)

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Whop platform
- **Payment:** Whop checkout integration

## SEO Requirements (CRITICAL)

### Primary Keywords
- "Claude Code for business"
- "Claude Code course"
- "AI productivity for business owners"
- "Claude AI for non-technical users"
- "Business automation with AI"
- "Learn Claude Code"

### SEO Checklist
- [ ] **Title Tag:** 50-60 characters, includes primary keyword
  - Example: "Claude Code for Business | AI Productivity Course"
- [ ] **Meta Description:** 150-160 characters, compelling CTA
  - Example: "Learn to use Claude Code for everyday business tasks. Save 10+ hours/week. No coding required. $29.99 - Get instant access."
- [ ] **H1 Tag:** Single H1 per page with primary keyword
- [ ] **Header Hierarchy:** Proper H1 → H2 → H3 structure
- [ ] **Alt Text:** All images have descriptive alt text with keywords
- [ ] **Schema Markup:** Course schema (https://schema.org/Course)
  - Include: name, description, provider, price, aggregateRating
- [ ] **Open Graph Tags:** For social sharing (Facebook, LinkedIn)
  - og:title, og:description, og:image, og:url, og:type
- [ ] **Twitter Cards:** For Twitter/X sharing
- [ ] **Canonical URL:** Prevent duplicate content issues
- [ ] **Semantic HTML:** Use proper tags (header, main, section, article, footer)
- [ ] **Mobile-Friendly:** Responsive design, passes Google Mobile-Friendly Test
- [ ] **Page Speed:** Core Web Vitals optimized (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] **Internal Linking:** Link to course curriculum, FAQ, testimonials
- [ ] **URL Structure:** Clean, descriptive URLs (e.g., /course, /faq)
- [ ] **SSL Certificate:** HTTPS enabled
- [ ] **Sitemap:** XML sitemap for search engines
- [ ] **Robots.txt:** Allow search engine crawling

### Content SEO Best Practices
- Use keywords naturally in first 100 words
- Include keywords in H2 and H3 headings
- Write compelling, benefit-focused copy (not keyword stuffing)
- Use bullet points and lists for readability
- Include FAQs with question-based keywords (e.g., "How to use Claude Code for business?")
- Add video if possible (increases engagement and time on page)
- Ensure content is 1500+ words for better ranking

### Technical SEO
- **Image Optimization:** WebP format, lazy loading, compressed
- **Code Splitting:** Only load what's needed
- **Minification:** CSS and JS minified
- **Caching:** Browser caching enabled
- **CDN:** Use CDN for static assets (if applicable)
- **Structured Data:** JSON-LD format for schema markup

## Brand Guidelines

### Logo
- Design custom "Claude Code for Business" logo
- Must incorporate Claude's brand identity
- Clean, professional, modern aesthetic
- Works on light and dark backgrounds
- Formats needed: SVG (scalable), PNG (fallback)

### Colors (Claude Brand)
- **Primary:** `#CC785C` (Claude Orange/Coral)
- **Secondary:** `#E97B5C` (Lighter orange for accents)
- **Neutral Dark:** `#1E1E1E` (Near black for text)
- **Neutral Mid:** `#6B6B6B` (Gray for secondary text)
- **Neutral Light:** `#F5F5F5` (Light gray for backgrounds)
- **White:** `#FFFFFF`
- **CTA Accent:** `#CC785C` (Use primary orange for high-contrast CTAs)

### Typography
- **Headings:** System font stack or Inter/Plus Jakarta Sans
- **Body:** System font stack for performance
- **Size:** Large, readable (18px base for body text)
- **Line Height:** 1.6-1.8 for readability

## Project Structure

```
/
├── claude.md                 # This file
├── tasks/
│   └── prd-claude-code-business-landing-page.md
├── app/
│   ├── page.tsx             # Main landing page
│   ├── layout.tsx           # Root layout with SEO meta tags
│   ├── globals.css          # Global styles
│   └── components/
│       ├── Logo.tsx         # Claude Code for Business logo
│       ├── Hero.tsx         # Hero section
│       ├── Problem.tsx      # Problem/agitation section
│       ├── Solution.tsx     # Solution/transformation
│       ├── SocialProof.tsx  # Testimonials and metrics
│       ├── Curriculum.tsx   # Course curriculum
│       ├── Benefits.tsx     # Benefits breakdown
│       ├── FAQ.tsx          # FAQ accordion
│       ├── Guarantee.tsx    # Money-back guarantee
│       ├── CTA.tsx          # Reusable CTA button
│       ├── Instructor.tsx   # About the instructor
│       └── Footer.tsx       # Footer with links
├── public/
│   ├── logo.svg
│   ├── og-image.png         # Open Graph image (1200x630)
│   └── favicon.ico
├── tailwind.config.ts
├── package.json
└── next.config.js           # Next.js config with image optimization
```

## Key Features & Requirements

### Conversion Optimization
- **Multiple CTAs:** Hero, after solution, after social proof, final CTA
- **Price Display:** Show discount (was $37.49, now $29.99) - 20% off
- **Urgency:** Optional scarcity/urgency elements
- **Social Proof:** Metrics-based (e.g., "Save 10 hours/week")
- **Risk Reversal:** 30-day money-back guarantee
- **Clear Value:** Benefits, not features

### User Experience
- **Above the Fold:** Hero with clear value prop and CTA
- **Mobile-First:** Design for mobile, scale up to desktop
- **Fast Loading:** < 3 seconds page load
- **Accessibility:** WCAG 2.1 AA compliance
- **Smooth Scrolling:** Anchor links to sections (optional)

### Analytics & Tracking
- Google Analytics 4 (if not on Whop platform already)
- Track conversion events:
  - Page view
  - CTA clicks
  - Scroll depth
  - Purchase completion

## Content Guidelines

### Tone & Voice
- **Professional but approachable:** Not too corporate, not too casual
- **Non-technical language:** Avoid jargon, explain terms simply
- **Benefit-focused:** "Save 10 hours/week" not "Advanced prompt engineering"
- **Empowering:** "You can do this" messaging
- **Results-oriented:** Focus on outcomes, not process

### Messaging Hierarchy
1. **Primary:** Save time on repetitive business tasks
2. **Secondary:** No technical skills required
3. **Tertiary:** Affordable, proven results

## Implementation Notes

### Phase 1: Core Landing Page
1. Design logo
2. Build responsive layout with all sections
3. Implement SEO meta tags and schema markup
4. Link CTAs to Whop checkout
5. Test mobile responsiveness
6. Optimize images and performance

### Phase 2: Enhancements (Post-Launch)
- A/B testing framework
- Video testimonials
- Explainer video in hero
- Live chat or chatbot
- Exit-intent popup

## Success Criteria

- **SEO:** Ranks for "Claude Code course" and related keywords within 3 months
- **Performance:** Lighthouse score 90+ (Performance, SEO, Accessibility)
- **Conversion:** 2-5% conversion rate for cold traffic
- **Mobile:** Perfect rendering on iOS and Android
- **Accessibility:** Passes WAVE and Lighthouse accessibility audits

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type check
npm run type-check
```

## Notes

- All copy should address "I'm not technical" objection
- Use real screenshots of Claude Code in action
- Emphasize business outcomes, not technical features
- Test checkout flow thoroughly before launch
- Keep page length reasonable (not too long, not too short)
- Focus on clarity over cleverness in copy
