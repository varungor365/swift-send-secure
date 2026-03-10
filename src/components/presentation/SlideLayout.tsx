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
        background: "linear-gradient(135deg, hsl(210 30% 96%), hsl(200 25% 93%), hsl(180 20% 95%))",
        color: "#1a1a2e",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(200 25% 75%) 1px, transparent 1px), linear-gradient(90deg, hsl(200 25% 75%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Soft warm overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: "radial-gradient(ellipse at top right, hsl(170 60% 70%), transparent 60%), radial-gradient(ellipse at bottom left, hsl(200 50% 75%), transparent 60%)",
        }}
      />
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{
          background: "linear-gradient(90deg, hsl(170 75% 42%), hsl(195 70% 48%), hsl(210 65% 50%))",
        }}
      />
      {/* DIT University Logo */}
      <img
        src="/dit-logo.webp"
        alt="DIT University"
        className="absolute top-6 right-8 z-20 h-16 w-auto object-contain"
      />
      <div className="relative z-10 w-full h-full p-16 pt-12">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
