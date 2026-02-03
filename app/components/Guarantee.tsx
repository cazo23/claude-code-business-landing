import CTA from "./CTA";

export default function Guarantee() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-claude-orange/10 to-claude-orange-light/10 rounded-2xl p-8 md:p-12 border-2 border-claude-orange/30">
            <div className="text-center mb-8">
              <div className="inline-block bg-claude-orange text-white rounded-full p-6 mb-6">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="mb-4">
                Our <span className="text-claude-orange">Iron-Clad</span> Guarantee
              </h2>
              <p className="text-2xl font-bold text-claude-dark mb-4">
                30-Day Money-Back Guarantee
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 mb-8">
              <p className="text-lg text-claude-gray leading-relaxed mb-6">
                We're so confident that Claude Code for Business will transform
                how you work that we're putting our money where our mouth is:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-claude-dark font-bold mb-1">
                      Try It Risk-Free for 30 Days
                    </p>
                    <p className="text-claude-gray">
                      Go through the entire course, implement the techniques,
                      and see the results for yourself.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-claude-dark font-bold mb-1">
                      Not Happy? Get Your Money Back
                    </p>
                    <p className="text-claude-gray">
                      If you're not saving significant time within 30 days,
                      just send us a message and we'll refund your purchase in
                      full. No questions asked.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-claude-dark font-bold mb-1">
                      Keep the Bonuses Either Way
                    </p>
                    <p className="text-claude-gray">
                      Even if you decide the course isn't for you, keep the
                      150+ prompt templates and automation roadmap as our gift.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-claude-gray-light pt-6">
                <p className="text-xl font-bold text-claude-dark mb-2">
                  Here's Why We Can Offer This Guarantee:
                </p>
                <p className="text-claude-gray leading-relaxed mb-4">
                  We've seen hundreds of non-technical business owners go
                  through this course and save 10+ hours per week. We know the
                  system works. The only risk is that you don't take action—but
                  that's on you, not the course.
                </p>
                <p className="text-claude-gray leading-relaxed">
                  Less than 3% of students ask for a refund, and most of those
                  are because they didn't have time to go through the material,
                  not because it didn't work.
                </p>
              </div>
            </div>

            <div className="bg-claude-orange text-white rounded-xl p-6 mb-8 text-center">
              <p className="text-2xl font-bold mb-2">
                Translation: You Have Nothing to Lose
              </p>
              <p className="text-lg">
                Either you save 10+ hours per week, or you get your money back.
                It's that simple.
              </p>
            </div>

            <CTA
              text="Get Started Risk-Free"
              subtext="30-day guarantee • Instant access • Lifetime updates"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
