// src/app/components/Hooks/index.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

// Custom hook for scroll animation
export const useScrollAnimation = (
  threshold: number = 0.1
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Props interface for AnimatedSection
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: string;
  distance?: string;
}

// AnimatedSection Component - Wrap your content with this
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = "",
  duration = "duration-700",
  distance = "-translate-y-12",
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transform transition-all ${duration} ease-out ${
        isVisible ? "translate-y-0 opacity-100" : `${distance} opacity-0`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Default export
export default AnimatedSection;
