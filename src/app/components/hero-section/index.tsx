import React from "react";
import Image from "next/image";
import Navbar from "../navbar";
import StatCard from "../stat-card";
import PhoneMockup from "../phone-mockup";
import Badge from "../hero-section-badge";
import Diet from "../hero-section-diet";
import Essentials from "../hero-section-essentials";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background IMAGE covering entire hero */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center z-0 mix-blend-screen"
      />

      {/* Content (z-20 above all) */}
      <Navbar />
      <div className="relative  px-6 py-8">
        <Badge />

        {/* Hero Text */}
        <div className="text-center mb-16">
          <div className="self-stretch text-center justify-center mb-4">
            <span className="text-white text-6xl capitalize leading-[67.20px]">
              Smarter workouts.{" "}
            </span>
            <span className="text-white/70 text-6xl capitalize leading-[67.20px]">
              Real results.
            </span>
            <span className="text-white text-6xl capitalize leading-[67.20px]">
              <br />
              Built for every body.
            </span>
          </div>
          <div className="w-[749px] mx-auto text-center text-white/70 text-xl leading-loose">
            Transform how you train with AI-powered insights, personalized
            plans, and real-time performance tracking — all in one powerful
            fitness app.
          </div>
        </div>

        {/* Phone & Floating Stats */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative flex justify-center items-center">
            {/* Phone */}
            <PhoneMockup />

            {/* Left floating stats */}
            <div className="absolute left-0 top-10 space-y-6 hidden lg:block">
              <Diet />
            </div>
            <div className="absolute left-5 top-72 space-y-6 hidden lg:block">
              <Essentials />
            </div>
            {/* Right floating cards */}
            <div className="absolute right-28 top-0 space-y-6 hidden lg:block">
              <StatCard
                icon={
                  <Image
                    src="/calories.png"
                    alt="Kcal Icon"
                    width={31.19}
                    height={31.19}
                    className="object-contain"
                  />
                }
                value="2250"
                label="Kcal"
                description="250 Calories are Left"
                className=" bg-white/10 w-[170px]"
              />
            </div>
            <div className="absolute right-40 top-44 space-y-6 hidden lg:block">
              <Image
                src="/calories-graph.png"
                alt="Calories Graph"
                width={243}
                height={180}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
