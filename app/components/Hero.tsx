import Logo from "./Logo";
import CTA from "./CTA";

export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-claude-gray-light to-white">
      <div className="container-custom">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">
            Save 10+ Hours Per Week with{" "}
            <span className="text-claude-orange">Claude Code</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-claude-gray">
              No Coding Experience Required
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-claude-gray mb-8 leading-relaxed">
            Learn how to automate your everyday business tasks using Claude Code.
            Perfect for busy business owners who want to work smarter, not harder.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-claude-orange mb-2">
                  10+
                </div>
                <div className="text-sm text-claude-gray">
                  Hours Saved Weekly
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-claude-orange mb-2">
                  500+
                </div>
                <div className="text-sm text-claude-gray">
                  Business Owners Trained
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-claude-orange mb-2">
                  Zero
                </div>
                <div className="text-sm text-claude-gray">
                  Technical Skills Needed
                </div>
              </div>
            </div>
          </div>

          <CTA subtext="30-day money-back guarantee • Instant access" />

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-claude-gray">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Beginner-friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Lifetime access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
