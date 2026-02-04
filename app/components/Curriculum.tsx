"use client";

import CTA from "./CTA";
import {
  FolderOpenIcon,
  BoltIcon,
  CpuChipIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function Curriculum() {
  const modules = [
    {
      number: "00",
      title: "Setup & Installation",
      duration: "8-10 minutes",
      lessons: [
        "Installing Cursor or VS Code editor (step-by-step)",
        "Installing Claude Code CLI with one command",
        "Authenticating with your Anthropic account",
        "Downloading course files and setting up workspace",
        "Launching Claude Code and verifying setup",
      ],
      outcome: "Get fully set up and ready to start learning",
    },
    {
      number: "01",
      title: "Getting Started with Claude Code",
      duration: "5-7 minutes",
      lessons: [
        "What is Claude Code and how it differs from ChatGPT",
        "Setting up your workspace in Cursor/VS Code",
        "Launching Claude Code for the first time",
        "Introduction to FitHub Wellness scenario (your real-world project)",
        "Your first task: exploring project files",
      ],
      outcome: "Understand Claude Code basics and meet your practice scenario",
    },
    {
      number: "02",
      title: "File Exploration & Multi-File Analysis",
      duration: "6-8 minutes",
      lessons: [
        "Reading multiple files simultaneously",
        "Searching across all project files for patterns",
        "Creating organized summaries from scattered information",
        "Performing comparative analysis across documents",
        "Turning chaos into clarity in seconds",
      ],
      outcome: "Master file exploration and pattern recognition",
    },
    {
      number: "03",
      title: "Deep Analysis & Strategic Synthesis",
      duration: "7-9 minutes",
      lessons: [
        "Moving from summaries to strategic analysis",
        "Conducting root cause analysis with evidence",
        "Connecting dots across disparate information sources",
        "Competitive positioning and strategic insights",
        "Creating executive-ready strategic recommendations",
      ],
      outcome: "Generate strategic insights and actionable recommendations",
    },
    {
      number: "04",
      title: "Commands & Workflow Automation",
      duration: "6-8 minutes",
      lessons: [
        "Understanding the .claude directory structure",
        "Creating your first custom command",
        "Building parameterized commands for flexibility",
        "Creating a personal command library",
        "The automation mindset: if you do it twice, automate it",
      ],
      outcome: "Turn recurring tasks into one-word shortcuts",
    },
    {
      number: "05",
      title: "Sub-Agents & Parallel Work",
      duration: "7-9 minutes",
      lessons: [
        "Understanding the multi-perspective problem",
        "Working with specialized AI agents (Trainer Lead, Product Designer, Executive)",
        "Getting expert perspectives from multiple domains",
        "Running agents in parallel for complex projects",
        "Creating custom agents for your specific needs",
        "Orchestrating AI teams for strategic work",
      ],
      outcome: "Multiply your capabilities with specialized AI agents",
    },
    {
      number: "06",
      title: "Project Memory & Long-Term Context",
      duration: "8-10 minutes",
      lessons: [
        "Solving the 'fresh start' problem with persistent memory",
        "Creating project briefs, decision logs, and knowledge bases",
        "Building continuity across multiple work sessions",
        "Decision logging to prevent re-debating",
        "Creating session summaries for project history",
        "Making agents context-aware with memory files",
      ],
      outcome: "Build cumulative knowledge for long-term projects",
    },
    {
      number: "07",
      title: "Creating Custom Skills",
      duration: "5-7 minutes",
      lessons: [
        "Understanding how skills work under the hood",
        "Installing skills from the community library",
        "Customizing existing skills for your workflow",
        "Creating completely custom skills from scratch",
        "Building your personal skills library",
      ],
      outcome: "Become a power user who extends Claude Code",
    },
  ];

  const bonuses = [
    {
      icon: FolderOpenIcon,
      title: "Complete FitHub Wellness Scenario Files",
      value: "$97 value",
      description:
        "Real-world business scenario with customer feedback, campaign files, and competitor research to practice with.",
    },
    {
      icon: BoltIcon,
      title: "Pre-Built Commands Library",
      value: "$67 value",
      description:
        "Ready-to-use automation commands you can immediately apply to your own business projects.",
    },
    {
      icon: CpuChipIcon,
      title: "Custom AI Agent Templates",
      value: "$47 value",
      description:
        "Pre-configured specialist agents (Product Designer, Exec, Trainer) you can adapt for your team.",
    },
    {
      icon: ArrowPathIcon,
      title: "Lifetime Updates & New Modules",
      value: "Priceless",
      description:
        "Get free access to all future course updates and new modules as Claude Code evolves.",
    },
  ];

  const totalValue = 297 + 97 + 67 + 47; // Course modules + bonuses

  return (
    <section className="section bg-claude-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Everything You Need to{" "}
            <span className="text-claude-orange">Master Claude Code</span>
          </h2>
          <p className="text-xl text-claude-gray max-w-3xl mx-auto">
            A complete, step-by-step system designed for non-technical business
            owners. Start saving time from day one.
          </p>
        </div>

        {/* Course Modules */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-claude-dark">
            Core Training Modules
          </h3>
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-claude-orange text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                      {module.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-2xl font-bold text-claude-dark">
                        {module.title}
                      </h4>
                      <span className="text-claude-gray text-sm mt-1 md:mt-0">
                        {module.duration}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lessonIndex}
                          className="flex items-start gap-2 text-claude-gray"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block">
                      <strong>Outcome:</strong> {module.outcome}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-claude-dark text-center">
            Plus These Exclusive Bonuses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => {
              const IconComponent = bonus.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200 border-2 border-claude-orange/20"
                >
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 text-claude-orange" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-claude-dark">
                      {bonus.title}
                    </h4>
                    <span className="bg-claude-orange text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                      {bonus.value}
                    </span>
                  </div>
                  <p className="text-claude-gray">{bonus.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Stack */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-claude-dark">
            Total Value: ${totalValue}
          </h3>
          <div className="space-y-3 mb-8">
            <div className="flex justify-between text-claude-gray">
              <span>7 Core Training Modules</span>
              <span className="font-bold">$297</span>
            </div>
            <div className="flex justify-between text-claude-gray">
              <span>150+ Ready-to-Use Prompts</span>
              <span className="font-bold">$97</span>
            </div>
            <div className="flex justify-between text-claude-gray">
              <span>Business Automation Roadmap</span>
              <span className="font-bold">$67</span>
            </div>
            <div className="flex justify-between text-claude-gray">
              <span>Private Community Access</span>
              <span className="font-bold">$47</span>
            </div>
            <div className="flex justify-between text-claude-gray">
              <span>Lifetime Updates</span>
              <span className="font-bold">Priceless</span>
            </div>
            <div className="border-t-2 border-claude-gray-light pt-3 flex justify-between text-xl font-bold text-claude-dark">
              <span>Total Value:</span>
              <span className="line-through text-claude-gray">${totalValue}</span>
            </div>
          </div>

          <div className="bg-claude-orange/10 p-6 rounded-xl mb-8">
            <p className="text-2xl font-bold text-center text-claude-dark mb-2">
              Your Investment Today: Just $29.99
            </p>
            <p className="text-center text-claude-gray">
              That's a <strong>90% discount</strong> — less than the cost of one
              hour with a virtual assistant!
            </p>
          </div>

          <CTA
            text="Get Instant Access Now"
            subtext="30-day money-back guarantee • Limited time offer"
          />
        </div>
      </div>
    </section>
  );
}
