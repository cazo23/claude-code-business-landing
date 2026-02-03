"use client";

import CTA from "./CTA";
import {
  EnvelopeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

export default function Solution() {
  const useCases = [
    {
      icon: EnvelopeIcon,
      title: "Write Emails in Seconds",
      before: "30 minutes writing professional emails",
      after: "2 minutes with AI-powered drafts",
      timeSaved: "Save 90% of your time",
    },
    {
      icon: ChartBarIcon,
      title: "Analyze Data Instantly",
      before: "Hours in spreadsheets crunching numbers",
      after: "Minutes getting insights and reports",
      timeSaved: "Save 5+ hours per week",
    },
    {
      icon: DocumentTextIcon,
      title: "Create Documents Fast",
      before: "Days writing proposals and reports",
      after: "Hours with AI-assisted writing",
      timeSaved: "Save 50% on document creation",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Research in Minutes",
      before: "Hours searching and compiling info",
      after: "Minutes with AI-powered research",
      timeSaved: "Save 80% of research time",
    },
    {
      icon: CommandLineIcon,
      title: "Automate Repetitive Work",
      before: "Doing the same tasks manually every day",
      after: "Let AI handle routine operations",
      timeSaved: "Reclaim 10+ hours per week",
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-claude-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Imagine Your Business Life{" "}
            <span className="text-claude-orange">Transformed</span>
          </h2>
          <p className="text-xl text-claude-gray max-w-3xl mx-auto">
            With Claude Code, you'll learn to automate your everyday tasks —
            without writing a single line of code. Here's what becomes possible:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {useCases.slice(0, 3).map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-claude-dark">
                  {useCase.title}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold text-lg">✗</span>
                    <span className="text-claude-gray text-sm">
                      {useCase.before}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold text-lg">✓</span>
                    <span className="text-claude-dark text-sm font-medium">
                      {useCase.after}
                    </span>
                  </div>
                </div>
                <div className="bg-claude-orange/10 text-claude-orange font-bold text-sm py-2 px-4 rounded-lg text-center">
                  {useCase.timeSaved}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {useCases.slice(3).map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index + 3}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-claude-dark">
                  {useCase.title}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold text-lg">✗</span>
                    <span className="text-claude-gray text-sm">
                      {useCase.before}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold text-lg">✓</span>
                    <span className="text-claude-dark text-sm font-medium">
                      {useCase.after}
                    </span>
                  </div>
                </div>
                <div className="bg-claude-orange/10 text-claude-orange font-bold text-sm py-2 px-4 rounded-lg text-center">
                  {useCase.timeSaved}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-claude-dark">
            The Best Part? You Don't Need Any Tech Skills
          </h3>
          <p className="text-xl text-claude-gray mb-8">
            If you can type and click, you can use Claude Code. This course is
            designed specifically for non-technical business owners who want
            results, not complexity.
          </p>
          <CTA
            text="Start Learning Today"
            subtext="Join 500+ business owners already saving time"
          />
        </div>
      </div>
    </section>
  );
}
