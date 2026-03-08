import React from "react";

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, hsl(220 25% 8%), hsl(220 20% 12%))",
        color: "hsl(210 20% 92%)",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(170 85% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(170 85% 50%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
        style={{
          background: "radial-gradient(circle at top right, hsl(170 85% 50%), transparent 70%)",
        }}
      />
      {/* DIT University Logo */}
      <img
        src="/dit-logo.webp"
        alt="DIT University"
        className="absolute top-6 right-8 z-20 h-16 w-auto object-contain"
        style={{ filter: "brightness(1.1)" }}
      />
      <div className="relative z-10 w-full h-full p-16">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
