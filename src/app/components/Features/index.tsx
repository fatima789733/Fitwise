import React from "react";
import Image from "next/image";
import AnimatedSection from "../Hooks"; // Adjust if needed

export default function FitnessAppSection() {
  return (
    <div className="text-white min-h-screen mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection
          delay={100}
          duration="duration-500"
          distance="translate-y-10"
        >
          <div className="mb-16 flex flex-col lg:flex-row items-start justify-between text-left gap-60">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <AnimatedSection
                delay={150}
                duration="duration-400"
                distance="translate-y-6"
              >
                <div className="px-5 py-1.5 bg-blue-500/10 text-blue-500 rounded-[60px] w-fit cursor-pointer">
                  Your Goals
                </div>
              </AnimatedSection>
              <AnimatedSection
                delay={200}
                duration="duration-500"
                distance="translate-y-8"
              >
                <h1 className="w-[549px]">
                  <span className="text-white text-5xl capitalize leading-[57.60px]">
                    Smarter Progress,
                  </span>
                  <span className="text-white/70 text-5xl capitalize leading-[57.60px]">
                    Better Workouts,
                  </span>
                  <span className="text-white text-5xl capitalize leading-[57.60px]">
                    Real Results.
                  </span>
                </h1>
              </AnimatedSection>
            </div>

            {/* Right Paragraph */}
            <AnimatedSection
              delay={250}
              duration="duration-400"
              distance="translate-y-6"
            >
              <p className="text-white/70 text-xl leading-loose">
                Discover the tools that keep you accountable, optimized, and
                consistently improving — wherever you are in your fitness
                journey.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Main Grid Layout */}
        <AnimatedSection
          delay={300}
          duration="duration-500"
          distance="translate-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Feature Cards */}
            <div className="space-y-24">
              <AnimatedSection
                delay={350}
                duration="duration-400"
                distance="translate-y-8"
              >
                <div className="w-80 p-5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex flex-col justify-start items-start gap-4">
                  <Image
                    src="/features-icon-1.png"
                    alt="icon 1"
                    width={50}
                    height={50}
                    priority
                  />
                  <div className="text-white text-2xl">Track Every Rep</div>
                  <div className="text-white/80 text-base font-light leading-normal">
                    Monitor every session in real time from calories burned to
                    sets completed and daily activity.
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                delay={400}
                duration="duration-400"
                distance="translate-y-8"
              >
                <div className="w-80 p-5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex flex-col justify-start items-start gap-4">
                  <Image
                    src="/features-icon-2.png"
                    alt="icon 2"
                    width={50}
                    height={50}
                    priority
                  />
                  <div className="text-white text-2xl">Fitness Community</div>
                  <div className="text-white/80 text-base font-light leading-normal">
                    Join like-minded individuals, celebrate milestones, and push
                    each other forward through group challenges and progress
                    sharing.
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Center - Phone Mockup */}
            <AnimatedSection
              delay={375}
              duration="duration-500"
              distance="translate-y-12"
            >
              <div className="flex justify-center">
                <Image
                  src="/iPhone-full.png"
                  alt="iPhone Mockup"
                  width={379}
                  height={784}
                  priority
                  className="cursor-pointer"
                />
              </div>
            </AnimatedSection>

            {/* Right Column - Feature Cards */}
            <div className="space-y-24 ml-20">
              <AnimatedSection
                delay={450}
                duration="duration-400"
                distance="translate-y-8"
              >
                <div className="w-80 p-5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex flex-col justify-start items-start gap-4">
                  <Image
                    src="/features-icon-3.png"
                    alt="icon 3"
                    width={50}
                    height={50}
                    priority
                  />
                  <div className="text-white text-2xl">
                    Deep Performance Insights
                  </div>
                  <div className="text-white/80 text-base font-light leading-normal">
                    Get a complete breakdown of your strength, endurance,
                    recovery, and weekly performance metrics.
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                delay={500}
                duration="duration-400"
                distance="translate-y-8"
              >
                <div className="w-80 p-5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex flex-col justify-start items-start gap-4">
                  <Image
                    src="/features-icon-4.png"
                    alt="icon 4"
                    width={50}
                    height={50}
                    priority
                  />
                  <div className="text-white text-2xl">
                    Adaptative Workout Plans
                  </div>
                  <div className="text-white/80 text-base font-light leading-normal">
                    Dynamic plans that evolve based on your progress,
                    preferences, and performance.
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
