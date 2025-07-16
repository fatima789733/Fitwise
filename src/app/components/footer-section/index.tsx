"use client";
import Image from "next/image";
import AnimatedSection from "../Hooks"; // adjust path if needed

export default function Footer() {
  return (
    <div className="mt-24 px-8 pt-12 mx-auto flex flex-col gap-4 bg-[#131b24] rounded-tl-3xl rounded-tr-3xl">
      {/* Top Links & Icons */}
      <AnimatedSection
        delay={100}
        duration="duration-500"
        distance="translate-y-6"
      >
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="p-2.5 flex justify-center items-center gap-14">
            <a
              href="#"
              className="text-white text-base hover:text-blue-400 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white text-base hover:text-blue-400 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white text-base hover:text-blue-400 transition-colors duration-200"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-white text-base hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-start items-center gap-4">
            <Image
              src="/linkedIn.png"
              alt="linkedIn"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Divider */}
      <AnimatedSection
        delay={200}
        duration="duration-400"
        distance="translate-y-4"
      >
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-white/20"></div>
      </AnimatedSection>

      {/* Bottom Text */}
      <AnimatedSection
        delay={250}
        duration="duration-500"
        distance="translate-y-6"
      >
        <div className="flex flex-col sm:flex-row justify-between text-sm text-white/60">
          <span>© 2025 Technorex Sol. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">hello@technorex.com</span>
        </div>
      </AnimatedSection>

      {/* Branding Text */}

      <div className="flex items-center justify-center text-white text-[180px] font-bold tracking-[5px] mix-blend-soft-light leading-none">
        FITWISE
      </div>
    </div>
  );
}
