import Image from "next/image";

export default function Instructor() {
  return (
    <section className="section bg-claude-gray-light">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Meet Your <span className="text-claude-orange">Instructor</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Instructor Photo */}
              <div className="md:col-span-1">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/Image_202601261531.jpeg"
                    alt="AI Mentor - Helping business owners leverage Claude Code for productivity and automation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Instructor Bio */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold mb-4 text-claude-dark">
                  AI Mentor
                </h3>
                <p className="text-xl text-claude-orange mb-6 font-medium">
                  Helping Business Owners Leverage AI for Real Results
                </p>

                <div className="space-y-4 text-claude-gray leading-relaxed mb-8">
                  <p>
                    We're a team of AI specialists and business automation
                    experts who've helped over 500 non-technical entrepreneurs
                    transform their workflows with Claude Code.
                  </p>

                  <p>
                    After seeing countless business owners struggle with
                    complicated AI tools and technical jargon, we created this
                    course specifically for people who want results, not theory.
                  </p>

                  <p>
                    Our approach is simple: plain English explanations,
                    practical examples, and real-world applications. No fluff,
                    no technical jargon—just actionable techniques that save you
                    time starting today.
                  </p>
                </div>

                <div className="border-t border-claude-gray-light pt-6">
                  <h4 className="font-bold text-claude-dark mb-4">
                    Why We're Qualified to Teach You:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-claude-orange flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-claude-gray">
                        500+ business owners trained
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-claude-orange flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-claude-gray">
                        Experts in AI productivity tools
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-claude-orange flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-claude-gray">
                        Focused on non-technical users
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-claude-orange flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-claude-gray">
                        Proven track record of results
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-claude-orange/10 rounded-xl p-6 text-center">
              <p className="text-lg text-claude-dark">
                <strong>Our mission:</strong> To help every business owner
                reclaim their time by mastering AI-powered automation—without
                needing to become a tech expert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
