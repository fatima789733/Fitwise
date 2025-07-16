"use client";
import Image from "next/image";
import AnimatedSection from "../Hooks"; // Adjust the path as needed

const images = [
  { src: "/glimpse-1.png", alt: "Bench press", span: "lg:col-span-3" },
  { src: "/glimpse-2.png", alt: "Barbell squat", span: "lg:col-span-3" },
  { src: "/glimpse-3.png", alt: "Deadlift", span: "lg:col-span-2" },
  { src: "/glimpse-4.png", alt: "Biceps curl", span: "lg:col-span-2" },
  { src: "/glimpse-5.png", alt: "Shoulder press", span: "lg:col-span-2" },
];

export default function GlimpseSection() {
  return (
    <section className="w-full px-4 py-20 lg:py-28 text-center text-white">
      {/* Badge + Heading */}
      <div className="mx-auto max-w-4xl space-y-6 mb-16 flex flex-col items-center text-center">
        <AnimatedSection
          delay={100}
          duration="duration-400"
          distance="translate-y-6"
        >
          <div className="px-5 py-1.5 bg-blue-500/10 rounded-[60px] inline-flex justify-center items-center gap-1.5">
            <div className="text-blue-500 text-base leading-normal cursor-pointer">
              Some Glimpse
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={200}
          duration="duration-500"
          distance="translate-y-8"
        >
          <div className="max-w-[549px]">
            <span className="text-white text-5xl capitalize leading-[57.60px]">
              Train
            </span>
            <span className="text-white/70 text-5xl capitalize leading-[57.60px]">
              Hard,
              <br />
              Move
            </span>
            <span className="text-white text-5xl capitalize leading-[57.60px]">
              with Purpose.
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={300}
          duration="duration-500"
          distance="translate-y-6"
        >
          <div className="max-w-[494px] text-white/70 text-xl leading-loose">
            See what training looks like inside your new fitness companion.
          </div>
        </AnimatedSection>
      </div>

      {/* Animated Image Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {images.map(({ src, alt, span }, index) => (
          <AnimatedSection
            key={src}
            delay={400 + index * 100} // Staggered animation delays
            duration="duration-600"
            distance="translate-y-8"
            className={span} // Apply the grid span classes here
          >
            <div className="relative w-full min-h-[220px] overflow-hidden rounded-2xl bg-neutral-800/20">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
