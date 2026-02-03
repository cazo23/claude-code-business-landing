interface CTAProps {
  text?: string;
  subtext?: string;
  size?: "large" | "medium";
  showPrice?: boolean;
  className?: string;
}

export default function CTA({
  text = "Get Instant Access Now",
  subtext,
  size = "large",
  showPrice = true,
  className = "",
}: CTAProps) {
  const checkoutUrl = "https://whop.com/aimentor-elevating-minds-with-ai";

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-primary inline-block text-center ${
          size === "large" ? "text-xl md:text-2xl py-5 px-10" : ""
        }`}
      >
        {text}
      </a>
      {showPrice && (
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl md:text-3xl font-bold text-claude-dark">
              $29.99
            </span>
            <span className="text-lg md:text-xl text-claude-gray line-through">
              $37.49
            </span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              20% OFF
            </span>
          </div>
          {subtext && (
            <p className="text-sm text-claude-gray mt-2">{subtext}</p>
          )}
        </div>
      )}
    </div>
  );
}
