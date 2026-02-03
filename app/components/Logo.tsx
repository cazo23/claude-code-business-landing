export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Terminal/Code icon with Claude orange */}
        <rect width="48" height="48" rx="8" fill="#CC785C" />
        <path
          d="M14 18L20 24L14 30"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="30"
          x2="34"
          y2="30"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-claude-dark leading-tight">
          Claude Code
        </span>
        <span className="text-sm md:text-base text-claude-gray leading-tight">
          for Business
        </span>
      </div>
    </div>
  );
}
