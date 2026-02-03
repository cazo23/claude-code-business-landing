import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import SocialProof from "./components/SocialProof";
import Benefits from "./components/Benefits";
import Curriculum from "./components/Curriculum";
import FAQ from "./components/FAQ";
import Guarantee from "./components/Guarantee";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Above the fold with clear value prop */}
      <Hero />

      {/* Problem Section - Identify with pain points */}
      <Problem />

      {/* Solution Section - Show transformation and benefits */}
      <Solution />

      {/* Social Proof Section - Build trust with metrics and testimonials */}
      <SocialProof />

      {/* Benefits Section - Comprehensive list of what they'll achieve */}
      <Benefits />

      {/* Curriculum Section - What's included + value stack */}
      <Curriculum />

      {/* FAQ Section - Address objections */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Guarantee Section - Remove risk */}
      <Guarantee />

      {/* Instructor Section - Build credibility */}
      <Instructor />

      {/* Footer with final CTA */}
      <Footer />
    </main>
  );
}
