
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks(): JSX.Element {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const Ref1 = useRef<HTMLHeadingElement | null>(null);
  const Ref2 = useRef<HTMLHeadingElement | null>(null);
  const Ref3 = useRef<HTMLHeadingElement | null>(null);
  const Ref4 = useRef<HTMLHeadingElement | null>(null);
  const Ref5 = useRef<HTMLHeadingElement | null>(null);
  const textRef2 = useRef<HTMLHeadingElement | null>(null);
  const imgRef2 = useRef<HTMLHeadingElement | null>(null);
  const imgRef3 = useRef<HTMLHeadingElement | null>(null);
  const textRef3 = useRef<HTMLHeadingElement | null>(null);
 const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  

  


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

    //title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom",
              end: "+=600",
             scrub: true,
          },
        }
      );
    }

    //ref1
     if (Ref1.current) {
      gsap.fromTo(
        Ref1.current,
       { 
        x: -220,        // ⭐ LEFT side se start
      y: 120,         // thoda vertical move (natural feel)
        // halka tilt
      transformOrigin: "100% 100%", // bottom-left pivot
        },
        {
       x: 0,
      y: 0,
      rotation: 0,
      ease: "none",   // ⭐ 1:1 scroll speed
      scrollTrigger: {
        trigger: Ref1.current,
        start: "top bottom",
        end: "+=500",
        scrub: true,  // ⭐ scroll = animation
          },
        }

      );
    }

    //Ref2
     if (Ref2.current) {
      gsap.fromTo(
        Ref2.current,
        { 
       x: 180,          // ⭐ zyada move
      y: 180,
        // ⭐ kam rotate
      transformOrigin: "100% 100%",
        },
        {
            x: 0,
      y: 0,
      
      ease: "none",
      scrollTrigger: {
        trigger: Ref2.current,
        start: "top bottom",
        end: "+=500",
        scrub: true,
          },
        }
      );
    }


     //ref3
     if (Ref3.current) {
      gsap.fromTo(
        Ref3.current,
       { 
        x: -220,        // ⭐ LEFT side se start
      y: 120,         // thoda vertical move (natural feel)
        // halka tilt
      transformOrigin: "100% 100%", // bottom-left pivot
        },
        {
       x: 0,
      y: 0,
      
      ease: "none",   // ⭐ 1:1 scroll speed
      scrollTrigger: {
        trigger: Ref3.current,
        start: "top bottom",
        end: "+=500",
        scrub: true,  // ⭐ scroll = animation
          },
        }

      );
    }


    //ref4
    if (Ref4.current) {
      gsap.fromTo(
        Ref4.current,
        { 
       x: 180,          // ⭐ zyada move
      y: 180,
      // ⭐ kam rotate
      transformOrigin: "100% 100%",
        },
        {
            x: 0,
      y: 0,
 
      ease: "none",
      scrollTrigger: {
        trigger: Ref4.current,
        start: "top bottom",
        end: "+=500",
        scrub: true,
          },
        }
      );
    }

    //ref5
   if (Ref5.current) {
      gsap.fromTo(
        Ref5.current,
       { 
        x: -220,        // ⭐ LEFT side se start
      y: 120,         // thoda vertical move (natural feel)
        // halka tilt
      transformOrigin: "100% 100%", // bottom-left pivot
        },
        {
       x: 0,
      y: 0,
      ease: "none",   // ⭐ 1:1 scroll speed
      scrollTrigger: {
        trigger: Ref5.current,
        start: "top bottom",
        end: "+=500",
        scrub: true,  // ⭐ scroll = animation
          },
        }

      );36
    }

  

 
   




    return (): void => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div   className=" h-auto w-full px-[84px]">
        {/* hading and subtitel */}
        <div className="w-full">
            <h5  
            className="text-[180px] mt-[100px] font-medium ">OUR</h5>
            <h5  ref={titleRef}
            className="text-[180px] text-7xl  mt-[-65px] font-medium ">PROCESS</h5>
        </div>


        {/* content section */}

        <div  className=" w-full h-auto mb-12 mt-30">
          {/* section1 */}
                <div  className="w-full h-auto grid  grid-cols-2 gap-10 ">
                <div ref={Ref1} className="w-[676px] h-[359px] bg-gradient-to-br from-blue-700 to-[#3F3F3F]' rounded-3xl"></div>
                <div ref={Ref2}  className="w-[676px] h-[359px] bg-gradient-to-br from-red-700 to-[#3F3F3F]' mt-[200px] rounded-3xl"></div>
                <div ref={Ref3}  className="w-[676px] h-[359px] bg-gradient-to-br from-yellow-700 to-[#3F3F3F]' mt-[-200px] rounded-3xl"></div>
                <div ref={Ref4}  className="w-[676px] h-[359px] bg-gradient-to-br from-green-700 to-[#3F3F3F]' rounded-3xl"></div>
                <div ref={Ref5}  className="w-[676px] h-[359px] bg-gradient-to-br from-orange-700 to-[#3F3F3F]' mt-[-200px] rounded-3xl"></div>
                </div>
            </div>
       
    </div>
  );
}

 