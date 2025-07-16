"use client";

import AnimatedHoverButton from "../button";
import AnimatedSection from "../Hooks"; // Adjust path if needed

import React from "react";
import Image from "next/image";

export default function ElevateSection() {
  return (
    <section className="w-full px-4 rounded-2xl shadow-lg text-white text-center">
      <div className="w-[1280px] max-w-full px-6 py-20 bg-white/5 rounded-3xl mx-auto flex flex-col items-center justify-center overflow-hidden">
        {/* Top-left glow */}
        <Image
          src="/elevate-elipse-1.png"
          alt="Top Left Glow"
          width={400}
          height={400}
          className="absolute translate-x-[-440px] translate-y-[-25px] rounded-3xl z-0 pointer-events-none select-none"
        />

        {/* Bottom-right glow */}
        <Image
          src="/elevate-elipse-2.png"
          alt="Bottom Right Glow"
          width={400}
          height={400}
          className="absolute z-0 translate-x-[440px] translate-y-[-3px] rounded-3xl pointer-events-none select-none"
        />

        {/* Heading */}
        <AnimatedSection
          delay={100}
          duration="duration-500"
          distance="translate-y-8"
        >
          <div className="self-stretch text-center justify-center">
            <span className="text-white text-6xl capitalize leading-[67.20px]">
              Let’s Elevate{" "}
            </span>
            <span className="text-white/70 text-6xl capitalize leading-[67.20px]">
              Your
              <br /> Fitness
            </span>
            <span className="text-white text-6xl capitalize leading-[67.20px]">
              {" "}
              Game
            </span>
          </div>
        </AnimatedSection>

        {/* Subheading */}
        <AnimatedSection
          delay={200}
          duration="duration-500"
          distance="translate-y-6"
        >
          <div className="self-stretch text-center justify-center text-white/60 text-xl capitalize leading-relaxed mt-4">
            Start your journey today — download the app and train smarter
            <br /> with every move.
          </div>
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection
          delay={300}
          duration="duration-500"
          distance="translate-y-6"
        >
          <AnimatedHoverButton text="Download App" className="mt-6" />
        </AnimatedSection>
      </div>
    </section>
  );
}
