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

  useEffect((): (() => void) => {
    //configretion
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




    if (sectionRef.current) {

      

      gsap.fromTo(
        sectionRef.current,
        { 
        x: -220,        // ⭐ LEFT side se start
      y: 120,         // thoda vertical move (natural feel)
      rotation: -8,   // halka tilt
      transformOrigin: "0% 100%", // bottom-left pivot
        },
        {
       x: 0,
      y: 0,
      rotation: 0,
      ease: "none",   // ⭐ 1:1 scroll speed
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "+=600",
        scrub: true,  // ⭐ scroll = animation
          },
        }
      );
    }




    return (): void => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };

  },[])



  return (
    <div ref={sectionRef} className="relative w-full h-screen bg-[#d5d5d5] overflow-hidden rounded-t-4xl  ">
      
      {/* Big Brand Text */}
      <h1
        className={`${montserrat.className} absolute top-10 left-1/2 -translate-x-1/2 text-[200px] font-extrabold text-white tracking-wide select-none`}
      >
        SMARTASURE
      </h1>

      {/* Image */}
      <Image
      width={500}
      height={800}
        src="/my2.png"
        alt="hero"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[34vw] max-w-[500px]"
      />

      {/* Paragraph Content */}
      <div className="absolute bottom-14 right-10 max-w-xl z-30 ">
        <p className=" leading-relaxed text-[#2b2b2b]">
          <span className="font-semibold">At SmartaSure,</span> we believe true luxury lies in effortlessness.
          <br /><br />
          No clutter. No complexity. No compromise.
          <br /><br />
          Your lights adjust without asking. <br />
          Your home responds before you think. <br />
          Your security remains vigilant silently.
          <br /><br />
          This is not automation. <br />
          <span className="font-semibold">This is intelligent living, curated.</span>
        </p>

        <a
              href={`https://wa.me/7588876025?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              >
         <button className=" border-[.1px] from-[#0A0A0A]-700 border-[#3F3F3F] text-[15px] text-[#B4C9C9] bg-black mt-5 px-5 py-5 rounded-full">
                        BOOK A PRIVATE DEMO
                        </button>
                        </a>
      </div>

      {/* Rotating Circular Text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute font-bold bottom-[70px] left-[17%] z-40 w-[280px] h-[280px] rounded-full  flex items-center justify-center"
      >
        <svg viewBox="0 0 200 200" className="absolute w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fontSize="15" fill="#000" letterSpacing="2">
            <textPath href="#circlePath">
              TECHNOLOGY SHOULD BE FELT, NOT SEEN •
            </textPath>
          </text>
        </svg>

        {/* Center Dot (Optional luxury detail) */}
        <div className="w-2 h-2 bg-black rounded-full" />
      </motion.div>

    </div>
  );
}
