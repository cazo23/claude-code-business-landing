import Logo from "./Logo";
import CTA from "./CTA";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-claude-dark text-white">
      {/* Final CTA Section */}
      <div className="section border-b border-claude-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-white">
              Ready to Reclaim{" "}
              <span className="text-claude-orange">10+ Hours Per Week</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 500+ business owners who are working smarter, not harder.
              Start automating your business tasks today—no coding required.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-claude-orange mb-2">
                    ✓
                  </div>
                  <p className="text-gray-300">30-Day Guarantee</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-claude-orange mb-2">
                    ✓
                  </div>
                  <p className="text-gray-300">Instant Access</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-claude-orange mb-2">
                    ✓
                  </div>
                  <p className="text-gray-300">Lifetime Updates</p>
                </div>
              </div>

              <CTA text="Start Saving Time Today" />
            </div>

            <p className="text-sm text-gray-400">
              The question isn't whether AI will change how you work.
              <br />
              The question is: will you be ahead of the curve, or playing
              catch-up?
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 px-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Logo className="mb-4 invert brightness-0" />
              <p className="text-gray-400 text-sm max-w-sm text-center md:text-left">
                Helping non-technical business owners master AI productivity
                tools and reclaim their time.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a
                  href="https://whop.com/aimentor-elevating-minds-with-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-claude-orange transition-colors"
                >
                  Get the Course
                </a>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-claude-orange transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="https://whop.com/aimentor-elevating-minds-with-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-claude-orange transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-claude-gray mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} AI Mentor. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Claude Code is a product of Anthropic. This course is an
              independent educational resource.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
