export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Save 10+ Hours Every Week",
      description:
        "Automate repetitive tasks and reclaim your time for high-value work. Students report saving an average of 10-15 hours per week.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "No Technical Skills Required",
      description:
        "Designed specifically for non-technical business owners. If you can type and click, you can do this. No coding, no complex setup.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Get Results in Days, Not Weeks",
      description:
        "Start automating tasks from day one. 87% of students see measurable time savings within their first week of the course.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Write Emails 10x Faster",
      description:
        "Generate professional emails, responses, and follow-ups in seconds. Never stare at a blank screen again.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Analyze Data Without Spreadsheets",
      description:
        "Get insights from your business data using plain English. No formulas, no pivot tables, just answers.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Create Documents in Minutes",
      description:
        "Generate proposals, reports, and business documents instantly. Focus on strategy, not formatting.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Cut Costs on Virtual Assistants",
      description:
        "Do tasks yourself in minutes that used to cost $25-50/hour with VAs. Many students save $500-1000/month.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Research in a Fraction of the Time",
      description:
        "Gather, analyze, and summarize information in minutes instead of hours. Make faster, better-informed decisions.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "Automate Repetitive Tasks",
      description:
        "Set up automations once and let Claude Code handle routine operations. Free up mental energy for creative work.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Join a Community of Entrepreneurs",
      description:
        "Access our private community where business owners share templates, tips, and success stories. You're not alone.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Stay Competitive",
      description:
        "Your competitors are already using AI to get ahead. Learn to leverage Claude Code and level the playing field.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-claude-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      title: "Lifetime Access & Updates",
      description:
        "Buy once, access forever. Get all future updates, new modules, and features at no additional cost.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            What You'll <span className="text-claude-orange">Achieve</span>
          </h2>
          <p className="text-xl text-claude-gray max-w-3xl mx-auto">
            This isn't just a course—it's a complete transformation of how you
            work. Here's what becomes possible when you master Claude Code:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 p-6 rounded-xl hover:bg-claude-gray-light transition-colors duration-200"
            >
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-claude-dark">
                  {benefit.title}
                </h3>
                <p className="text-claude-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
