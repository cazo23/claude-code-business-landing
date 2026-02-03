"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "I'm not technical at all. Will this really work for me?",
      answer:
        "Absolutely! This course is specifically designed for non-technical business owners. If you can type and click a mouse, you can use Claude Code. We assume zero technical knowledge and explain everything in plain English. Our students include real estate agents, consultants, shop owners, and entrepreneurs from all backgrounds—none of them were technical when they started.",
    },
    {
      question: "How much time do I need to invest to see results?",
      answer:
        "Most students see their first time savings within 24-48 hours of starting. The full course takes about 7-8 hours to complete, but you can learn at your own pace. Many students start automating tasks after just the first module (45 minutes). The beauty is that every minute you invest will save you hours in the future.",
    },
    {
      question: "What if I don't have Claude Code yet?",
      answer:
        "No problem! The course includes a complete setup guide that walks you through getting access to Claude Code step-by-step. You'll be up and running quickly, and we show you exactly what you need (spoiler: it's simpler than you think).",
    },
    {
      question: "Is this just theory, or will I learn practical skills?",
      answer:
        "This is 100% practical, hands-on training. Every module includes real examples you can use immediately in your business. You'll get 150+ ready-to-use prompt templates that you can copy and paste right away. No fluff, no filler—just actionable techniques that save you time today.",
    },
    {
      question: "What kind of tasks can Claude Code actually automate?",
      answer:
        "Almost any text-based task: writing emails, creating documents and reports, analyzing data, doing research, drafting social media posts, creating content, summarizing meetings, managing spreadsheets, and much more. If it involves reading, writing, or analyzing information, Claude Code can help you do it faster.",
    },
    {
      question: "Do I need to pay for Claude Code separately?",
      answer:
        "Claude Code has both free and paid tiers. Many students start with the free version and get great results. The paid version offers more features and faster responses. The course works with both versions, and we'll help you decide which is right for your needs.",
    },
    {
      question: "What if I get stuck or have questions?",
      answer:
        "You'll get access to our private community where you can ask questions and get help from both instructors and fellow students. Plus, the course includes detailed walkthroughs and troubleshooting guides for common issues. You're never on your own.",
    },
    {
      question: "How is this different from just using ChatGPT?",
      answer:
        "Claude Code is specifically designed for business productivity and automation, with features that make it much more powerful for real work than general chatbots. This course teaches you the specific techniques and workflows that business owners need—not generic AI chat. You'll learn to use Claude Code as a true business tool, not just a conversation partner.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes! We offer a no-questions-asked 30-day money-back guarantee. Try the course, implement the techniques, and if you're not saving significant time within 30 days, just let us know and we'll refund your purchase in full. We're confident you'll love it, but we want you to feel completely safe trying it.",
    },
    {
      question: "How long do I have access to the course?",
      answer:
        "You get lifetime access! Buy it once and it's yours forever. You can learn at your own pace, revisit modules anytime, and get all future updates at no additional cost. As Claude Code evolves and we add new content, you'll automatically get access to everything.",
    },
    {
      question: "Will this work for my specific type of business?",
      answer:
        "Yes! We have students from dozens of different industries: e-commerce, consulting, real estate, marketing, coaching, professional services, retail, and more. The core techniques work for any business because every business owner deals with emails, documents, data, and repetitive tasks. The course teaches you to adapt Claude Code to your specific needs.",
    },
    {
      question: "Is there a certificate or completion badge?",
      answer:
        "While we don't offer formal certification, you'll gain practical skills that directly impact your business efficiency. The real 'badge' is the 10+ hours you get back every week and the streamlined workflows you'll build. Those results speak louder than any certificate.",
    },
  ];

  return (
    <section className="section bg-claude-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Frequently Asked{" "}
            <span className="text-claude-orange">Questions</span>
          </h2>
          <p className="text-xl text-claude-gray max-w-3xl mx-auto">
            Got questions? We've got answers. Here's everything you need to know
            before getting started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-claude-gray-light/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-claude-dark pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-claude-orange flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-claude-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-claude-gray mb-4">
            Still have questions?{" "}
            <a
              href="https://whop.com/aimentor-elevating-minds-with-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-orange hover:underline font-bold"
            >
              Reach out to us
            </a>{" "}
            and we'll be happy to help!
          </p>
        </div>
      </div>
    </section>
  );
}
