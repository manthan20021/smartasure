"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

gsap.registerPlugin(ScrollTrigger);

export default function BrandPhilosophy() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const message = encodeURIComponent(
    "Hi 👋 I want to know more about your smart switches."
  );

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const mm = gsap.matchMedia();

    /* ================= DESKTOP (UNCHANGED) ================= */
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        sectionRef.current,
        {
          x: -220,
          y: 120,
          rotation: -8,
          transformOrigin: "0% 100%",
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "+=600",
            scrub: true,
          },
        }
      );
    });

    /* ================= MOBILE (ONLY ADDITION) ================= */
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        sectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      mm.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="
        relative w-full 
        min-h-screen 
        bg-[#d5d5d5] 
        overflow-hidden 
        rounded-t-4xl
        px-4 sm:px-0
      "
    >
      {/* BIG BRAND TEXT */}
      <h1
        className={`
          ${montserrat.className}
          absolute
          top-90 sm:top-10
          left-1/2 -translate-x-1/2
          text-[64px] sm:text-[200px]
          font-extrabold
          text-white
          tracking-wide
          select-none
          text-center
          whitespace-nowrap
        `}
      >
        SMARTASURE
      </h1>

      {/* IMAGE */}
      <Image
        src="/my2.png"
        alt="hero"
        width={500}
        height={800}
        className="
          absolute
          bottom-0
          left-1/2 -translate-x-1/2
          z-20
          w-[70vw] sm:w-[34vw]
          max-w-[320px] sm:max-w-[500px]
        "
      />

      {/* PARAGRAPH + CTA */}
      <div
        className="
          relative sm:absolute
          sm:bottom-14 sm:right-10
          mt-10 sm:mt-0
          max-w-full sm:max-w-xl
          z-30
          text-center sm:text-left
        "
      >
        <p className="sm:leading-relaxed leading-4 text-[#2b2b2b] text-sm   sm:text-base">
          <span className="font-semibold">At SmartaSure,</span> we believe true
          luxury lies in effortlessness.
          <br /><br />
          No clutter. No complexity. No compromise.
          <br /><br />
          Your lights adjust without asking. <br />
          Your home responds before you think. <br />
          Your security remains vigilant silently.
          <br /><br />
          This is not automation. <br />
          <span className="font-semibold">
            This is intelligent living, curated.
          </span>
        </p>

        <a
          href={`https://wa.me/7588876025?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-[#3F3F3F] text-[13px] sm:text-[15px] text-[#B4C9C9] bg-black mt-5 px-6 py-4 rounded-full">
            BOOK A PRIVATE DEMO
          </button>
        </a>
      </div>

      {/* ROTATING CIRCLE */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="
          absolute
          bottom-6 sm:bottom-[70px]
          left-1/2 sm:left-[17%]
          -translate-x-1/2 sm:translate-x-0
          z-40
          w-[180px] h-[180px]
          sm:w-[280px] sm:h-[280px]
          flex items-center justify-center
        "
      >
        <svg viewBox="0 0 200 200" className="absolute w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fontSize="12" sm-fontSize="15" fill="#000" letterSpacing="2">
            <textPath href="#circlePath">
              TECHNOLOGY SHOULD BE FELT, NOT SEEN •
            </textPath>
          </text>
        </svg>

        <div className="w-2 h-2 bg-black rounded-full" />
      </motion.div>
    </div>
  );
}
