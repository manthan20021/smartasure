"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const Ref1 = useRef<HTMLDivElement>(null);
  const Ref2 = useRef<HTMLDivElement>(null);
  const Ref3 = useRef<HTMLDivElement>(null);
  const Ref4 = useRef<HTMLDivElement>(null);
  const Ref5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // LENIS
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    // TITLE
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom",
            end: "+=600",
            scrub: true,
          },
        }
      );
    }

    const cards = [Ref1, Ref2, Ref3, Ref4, Ref5];

    cards.forEach((ref, index) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        {
          x: index % 2 === 0 ? -220 : 180,
          y: 120,
        },
        {
          x: 0,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "+=500",
            scrub: true,
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-[84px] ">
      {/* HEADING */}
      <div className="w-full">
        <h5 className="text-[72px] sm:text-[120px] lg:text-[180px] mt-20 font-medium">
          OUR
        </h5>
        <h5
          ref={titleRef}
          className="text-[72px] sm:text-[120px] lg:text-[180px] mt-[-30px] sm:mt-[-50px] lg:mt-[-65px] font-medium"
        >
          PROCESS
        </h5>
      </div>

      {/* CONTENT */}
      <div className="w-full h-auto mt-20 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            ref={Ref1}
            className="w-full max-w-[676px] h-[260px] sm:h-[320px] lg:h-[359px] bg-gradient-to-br from-blue-700 to-[#0e0d0d] rounded-3xl"
          />

          <div
            ref={Ref2}
            className="w-full max-w-[676px] h-[260px] sm:h-[320px] lg:h-[359px] bg-gradient-to-br from-red-700 to-[#0e0d0d] lg:mt-[200px] rounded-3xl"
          />

          <div
            ref={Ref3}
            className="w-full max-w-[676px] h-[260px] sm:h-[320px] lg:h-[359px] bg-gradient-to-br from-yellow-700 to-[#0e0d0d] lg:mt-[-200px] rounded-3xl"
          />

          <div
            ref={Ref4}
            className="w-full max-w-[676px] h-[260px] sm:h-[320px] lg:h-[359px] bg-gradient-to-br from-green-700 to-[#000000] rounded-3xl"
          />

          <div
            ref={Ref5}
            className="w-full max-w-[676px] h-[260px] sm:h-[320px] lg:h-[359px] bg-gradient-to-br from-orange-700 to-[#000000] lg:mt-[-200px] rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
