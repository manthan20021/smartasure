
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const imgRef = useRef<HTMLHeadingElement | null>(null);
  const textRef2 = useRef<HTMLHeadingElement | null>(null);
  const imgRef2 = useRef<HTMLImageElement | null>(null);
  const imgRef3 = useRef<HTMLImageElement | null>(null);
  const textRef3 = useRef<HTMLHeadingElement | null>(null);


 // const textref2 = useRef<HTMLHeadingElement | null>(null);

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
            start: "top 80%",
              end: "+=600",
             scrub: true,
          },
        }
      );
    }

    //text2
     if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { 
            opacity: 0, 
            y: -10,
        },
        {
          opacity: 1,
          y: -100,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
              end: "+=600",
             scrub: true,
          },
        }
      );
    }

    //img1
     if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { 
       x: 180,          // ⭐ zyada move
      y: 180,
      rotation: 8,     // ⭐ kam rotate
      transformOrigin: "100% 100%",
        },
        {
            x: 0,
      y: 0,
      rotation: 0,
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        end: "+=600",
        scrub: true,
          },
        }
      );
    }


    //section2 img
    if (imgRef2.current) {
      gsap.fromTo(
        imgRef2.current,
        { 
        x: -220,        // ⭐ LEFT side se start
      y: 120,         // thoda vertical move (natural feel)
      rotation: -6,   // halka tilt
      transformOrigin: "0% 100%", // bottom-left pivot
        },
        {
       x: 0,
      y: 0,
      rotation: 0,
      ease: "none",   // ⭐ 1:1 scroll speed
      scrollTrigger: {
        trigger: imgRef2.current,
        start: "top 80%",
        end: "+=600",
        scrub: true,  // ⭐ scroll = animation
          },
        }
      );
    }

    // section2 txt
     if (textRef2.current) {
      gsap.fromTo(
        textRef2.current,
        { 
            opacity: 0, 
            y: -10,
        },
        {
          opacity: 1,
          y: -100,
          duration: 1,
          scrollTrigger: {
            trigger: textRef2.current,
            start: "top 80%",
              end: "+=600",
             scrub: true,
          },
        }
      );
    }

    //section3img
     if (imgRef3.current) {
      gsap.fromTo(
        imgRef3.current,
        { 
       x: 180,          // ⭐ zyada move
      y: 180,
      rotation: 8,     // ⭐ kam rotate
      transformOrigin: "100% 100%",
        },
        {
            x: 0,
      y: 0,
      rotation: 0,
      ease: "none",
      scrollTrigger: {
        trigger: imgRef3.current,
        start: "top 80%",
        end: "+=600",
        scrub: true,
          },
        }
      );
    }

    //section3 txt

     if (textRef3.current) {
      gsap.fromTo(
        textRef3.current,
        { 
            opacity: 0, 
            y: -10,
        },
        {
          opacity: 1,
          y: -100,
          duration: 1,
          scrollTrigger: {
            trigger: textRef3.current,
            start: "top 80%",
              end: "+=600",
             scrub: true,
          },
        }
      );
    }

 
   




    return (): void => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div   className=" h-auto w-full pt-[500px] px-[84px]">
        {/* hading and subtitel */}
        <div className="w-full">
            <h5 ref={titleRef} 
            className="text-[180px] mt-[100px] font-medium ">WHOWE</h5>
            <h5 ref={textRef} 
            className="text-[180px] text-7xl  mt-[-65px] font-medium ">ARE</h5>
        </div>


        {/* content section */}

        <div className=" w-full h-auto mb-12">


          {/* section1 */}
            <div className="h-auto w-full flex items-center justify-between relative  ">
                {/* text section */}
                <h5 ref={textRef} className="w-[567px] h-auto pr-8">
                    <h1 className="text-[80px] font-medium">SMARTASURE</h1>
                    <p className="text-[25px] text-[#999999]">SmartaSure is a premium smart home automa on brand by 
                      Agryen Technologies LLP.
                      We design intelligent environments that enhance life
                      without demanding a en on. 
                      Every system we create is tailored. 
                      Every experience is deliberate. 
                      Every detail ma ers.
                      </p>
                </h5>
                {/* img section */}
                <div>
                    <Image
                    alt="img1"
                    width={794}
                    height={530}
                    src="/block6.png"
                    className="w-[794px] h-[530px] mx-auto rounded-3xl"
                    ref={imgRef}
                    />
                </div>
            </div>

            {/* section2 */}
            <div className="h-auto w-full flex items-center justify-between relative top-[-50] ">

              {/* imgsection */} 
               <div>
                    <Image 
                    alt="img2"
                    width={794}
                    height={530}
                    src="/block0.png"
                    className="w-[794px] h-[530px] mx-auto rounded-3xl"
                    ref={imgRef2}
                    />
                </div> 

                {/* textSection */}
              <h5 ref={textRef2} className="w-[567px] pl-12 h-auto">
                    <h1 className="text-[80px] font-medium">VISION</h1>
                    <p className="text-[25px] text-[#999999]">
                      Redefining modern living through intelligent, elegant technology. 
                      </p>
                </h5>
                
            </div>

            {/* section3 */}
            <div className="h-auto w-full flex items-center justify-between relative top-[-100] ">
                {/* text section */}
              <h5 ref={textRef3}  className="w-[567px] h-auto">
                    <h1 className="text-[80px] font-medium">MISSION</h1>
                    <p className="text-[25px] text-[#999999]">
                       To deliver world-class automa on experiences 
                      <br/>
 To merge innova on with human behavior 
 <br/>
 To ensure longevity, privacy, and reliability 
 <br/>
 To build homes that remain relevant for decades 
                    </p>
                </h5>
                {/* img section */}
                <div>
                    <Image 
                    alt="img3"
                    width={794}
                    height={530}
                    src="/block3.png"
                    className="w-[794px] h-[530px] mx-auto rounded-3xl"
                    ref={imgRef3}
                    />
                </div>
            </div>
        </div>
       
    </div>
  );
}

 