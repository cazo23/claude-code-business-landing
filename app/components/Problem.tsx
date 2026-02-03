"use client";

import {
  ExclamationTriangleIcon,
  ClockIcon,
  ComputerDesktopIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export default function Problem() {
  const problems = [
    {
      icon: ExclamationTriangleIcon,
      iconColor: "text-red-500",
      title: "Drowning in Repetitive Tasks",
      description:
        "Spending hours every week on the same boring tasks: writing emails, updating spreadsheets, creating reports. There has to be a better way.",
    },
    {
      icon: ClockIcon,
      iconColor: "text-orange-500",
      title: "Never Enough Time",
      description:
        "Your to-do list keeps growing, but you're stuck doing manual work that should be automated. You know AI can help, but don't know where to start.",
    },
    {
      icon: ComputerDesktopIcon,
      iconColor: "text-red-500",
      title: "Overwhelmed by Tech",
      description:
        "Everyone's talking about AI productivity tools, but they seem complicated. You're not a programmer, and learning to code isn't on your agenda.",
    },
    {
      icon: BanknotesIcon,
      iconColor: "text-orange-500",
      title: "Wasting Money on VA Tasks",
      description:
        "Paying virtual assistants or employees to do tasks that could be automated. What if you could handle it yourself in minutes instead of hours?",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Does This Sound <span className="text-claude-orange">Familiar</span>?
          </h2>
          <p className="text-xl text-claude-gray max-w-3xl mx-auto">
            You're running a business, not a tech company. But you're tired of
            wasting time on tasks that feel like they should be automated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-claude-gray-light p-8 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="mb-4">
                  <IconComponent className={`w-16 h-16 ${problem.iconColor}`} />
                </div>
                <h3 className="text-2xl mb-4 text-claude-dark">{problem.title}</h3>
                <p className="text-claude-gray leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-claude-dark">
            Sound familiar? You're not alone.
          </p>
          <p className="text-xl text-claude-gray mt-2">
            But here's the good news...
          </p>
        </div>
      </div>
    </section>
  );
}
