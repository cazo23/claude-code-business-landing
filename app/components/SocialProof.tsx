export default function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Business Owner",
      result: "Saved 15 hours per week",
      quote:
        "I was skeptical at first because I'm not tech-savvy, but this course made everything so simple. Now I automate my customer emails, inventory reports, and even my social media planning. I've reclaimed my weekends!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Consultant",
      result: "Doubled productivity in 2 weeks",
      quote:
        "As someone who manages multiple clients, Claude Code has been a game-changer. I can create proposals, analyze campaign data, and draft reports in a fraction of the time. My clients are happier, and I'm less stressed.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      role: "Real Estate Agent",
      result: "Closed 3 extra deals last month",
      quote:
        "I was spending too much time on paperwork and not enough time with clients. This course taught me how to automate property descriptions, client follow-ups, and market analyses. Now I focus on what I do best: selling homes.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Small Business Owner",
      result: "Cut VA costs by $800/month",
      quote:
        "I was paying virtual assistants to do tasks I can now do myself in minutes. The ROI on this course paid for itself in the first week. Plus, I have complete control over my business operations now.",
      rating: 5,
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "Hours Saved Weekly",
      description: "On average, students save over 10 hours per week",
    },
    {
      number: "87%",
      label: "See Results in 7 Days",
      description: "Most students report time savings within the first week",
    },
    {
      number: "500+",
      label: "Business Owners Trained",
      description: "Join hundreds of entrepreneurs transforming their workflow",
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      description: "Highly rated by non-technical business owners",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Real Results from{" "}
            <span className="text-claude-orange">Real Business Owners</span>
          </h2>
          <p className="text-xl text-claude-gray max-w-3xl mx-auto mb-12">
            Don't just take our word for it. Here's what happens when non-technical
            entrepreneurs learn to use Claude Code:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-claude-gray-light p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-5xl font-bold text-claude-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-claude-dark mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-claude-gray">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-claude-dark">
            What Students Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-claude-gray-light p-6 rounded-xl hover:border-claude-orange transition-colors duration-200"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Result Badge */}
                <div className="bg-green-50 text-green-700 text-sm font-bold py-2 px-4 rounded-lg inline-block mb-4">
                  ✓ {testimonial.result}
                </div>

                {/* Quote */}
                <p className="text-claude-gray mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-claude-gray-light pt-4">
                  <div className="font-bold text-claude-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-claude-gray">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-claude-gray-light p-8 rounded-xl text-center">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-claude-gray font-medium">
                30-Day Money-Back Guarantee
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-claude-gray font-medium">
                Instant Access
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-claude-gray font-medium">
                Lifetime Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
