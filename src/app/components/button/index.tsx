// app/components/AnimatedHoverButton.tsx
"use client";

import React from "react";

interface AnimatedHoverButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const AnimatedHoverButton: React.FC<AnimatedHoverButtonProps> = ({
  text,
  className = "",
  onClick,
}) => {
  const letters = text.split("");

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden group w-[140px] h-[44px] px-6 py-2 rounded-lg font-medium bg-blue-500 text-white transition-colors ${className}`}
    >
      {/* Default Text */}
      <span className="absolute inset-0 flex justify-center items-center space-x-[1px] transition-all duration-300 group-hover:-translate-y-full">
        {letters.map((char, i) => (
          <span
            key={`default-${i}`}
            className={`transition duration-[${200 + i * 100}ms]`}
          >
            {char}
          </span>
        ))}
      </span>

      {/* Hover Text */}
      <span className="absolute inset-0 flex justify-center items-center space-x-[1px] translate-y-full group-hover:translate-y-0 transition-all duration-300">
        {letters.map((char, i) => (
          <span
            key={`hover-${i}`}
            className={`transition duration-[${200 + i * 100}ms]`}
          >
            {char}
          </span>
        ))}
      </span>
    </button>
  );
};

export default AnimatedHoverButton;
