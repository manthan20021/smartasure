"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { div } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
 
    const titleRefbit = useRef<HTMLHeadingElement>(null);
  const titleRef2big = useRef<HTMLHeadingElement>(null);

  const textRef1big = useRef<HTMLDivElement>(null);
  const imgRef1big = useRef<HTMLImageElement>(null);

  const textRef2big = useRef<HTMLDivElement>(null);
  const imgRef2big = useRef<HTMLImageElement>(null);

  const textRef3big = useRef<HTMLDivElement>(null);
  const imgRef3big = useRef<HTMLImageElement>(null);



 useEffect(() => {
    // ================= LENIS =================
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const mm = gsap.matchMedia();

    // ================= DESKTOP (UNCHANGED) =================
    mm.add("(min-width: 768px)", () => {
      // title
      gsap.fromTo(
        titleRefbit.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: titleRefbit.current,
            start: "top 80%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        titleRef2big.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: -100,
          scrollTrigger: {
            trigger: titleRef2big.current,
            start: "top 80%",
            scrub: true,
          },
        }
      );

      // images (same values)
      [
        [imgRef1big.current, { x: 180, y: 180, rotation: 8 }],
        [imgRef2big.current, { x: -220, y: 120, rotation: -6 }],
        [imgRef3big.current, { x: 180, y: 180, rotation: 8 }],
      ].forEach(([el, from]: any) => {
        gsap.fromTo(
          el,
          from,
          {
            x: 0,
            y: 0,
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "+=600",
              scrub: true,
            },
          }
        );
      });

      // texts
      [textRef1big, textRef2big, textRef3big].forEach((ref) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: -100,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              scrub: true,
            },
          }
        );
      });
    });

    // ================= MOBILE (ONLY ADDITION) =================
    mm.add("(max-width: 767px)", () => {
      gsap.utils
        .toArray([
          titleRefbit.current,
          titleRef2big.current,
          textRef1big.current,
          imgRef1big.current,
          textRef2big.current,
          imgRef2big.current,
          textRef3big.current,
          imgRef3big.current,
        ])
        .forEach((el: any) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                scrub: true,
              },
            }
          );
        });
    });

    return () => {
      lenis.destroy();
      mm.revert();
      ScrollTrigger.killAll();
    };
  }, []);


  return (

    <div>
{/* big screen */}

<div 
className=" sm:block hidden h-full w-full sm:pt-[600px] pt-28 sm:px-[84px] px-3"> 
{/* hading and subtitel */} 
<div className="w-full mb-15"> 
  <h5 ref={titleRefbit} className="sm:text-[180px] text-7xl sm:mt-[100px] font-medium sm:mb-7 ">
    WHOWE
    </h5> 
    <h5 ref={textRef1big} className="sm:text-[180px] text-7xl sm:mt-[-65px] font-medium ">
      ARE
      </h5> 
      </div> 
      {/* content section */} 
      <div className=" mt-2.5 w-full h-auto mb-12"> 
        {/* section1 */} 
        <div className="h-auto w-full flex items-center justify-between relative "> 
          {/* text section */} 
          <h5 ref={textRef1big} 
          className="w-[567px] 
          h-auto pr-8"> 
          <h1 className="sm:text-[80px] text-5xl font-medium">
            SMARTASURE
            </h1> 
            <p className="text-[25px] text-[#999999]">
              SmartaSure is a premium smart home automa on brand by Agryen 
              Technologies LLP. We design intelligent environments that 
              enhance life without demanding a en on. Every system we 
              create is tailored. Every experience is deliberate. 
              Every detail ma ers. 
              </p> 
              </h5> 
              {/* img section */} 
              <div> 
                <Image alt="img1" width={794} height={530} src="/block6.png" className="w-[794px] h-[530px] mx-auto rounded-3xl" ref={imgRef1big} /> 
                </div> </div> {/* section2 */} <div className="h-auto w-full flex items-center justify-between relative top-[-50] "> 
                  {/* imgsection */} 
                  <div> 
                    <Image alt="img2" width={794} height={530} src="/block0.png" className="w-[794px] h-[530px] mx-auto rounded-3xl" ref={imgRef2big} /> 
                    </div> 
                    {/* textSection */} 
                    <h5 
                    ref={textRef2big} 
                    className="w-[567px] pl-12 h-auto"> 
                    <h1 className="text-[80px] mt-10   font-medium">
                      VISION
                      </h1> 
                      <p className="text-[25px] text-[#999999]"> 
                        Redefining modern living through intelligent, elegant technology. 
                        </p> </h5> 
                        </div> {/* section3 */} 
                        <div className="h-auto w-full flex items-center justify-between relative top-[-100] "> 
                          {/* text section */} 
                          <h5 ref={textRef3big} className="w-[567px] h-auto"> 
                            <h1 className="text-[80px] mt-10 font-medium">
                              MISSION
                              </h1> 
                              <p className="text-[25px] text-[#999999]"> 
                                 To deliver world-class automa on experiences 
                                <br/>  To merge innova on with human behavior 
                                <br/>  To ensure longevity, privacy, and reliability 
                                <br/>  To build homes that remain relevant for decades 
                                </p> </h5> 
                                {/* img section */} 
                                <div> 
                                  <Image alt="img3" width={794} height={530} src="/block3.png" className="w-[794px] h-[530px] mx-auto rounded-3xl" ref={imgRef3big} /> 
                                  </div> 
                                  </div> 
                                  </div> 
                                  </div>

{/* mobail screen */}
<div className=" sm:hidden w-full h-full pt-28 sm:pt-[600px] px-3 sm:px-[84px]">
      {/* HEADING */}
      <div className="w-full mb-16">
        <h5
        
          className="text-7xl sm:text-[180px] font-medium"
        >
          WHOWE
        </h5>
        <h5
          
          className="text-7xl sm:text-[180px] font-medium sm:mt-[-65px]"
        >
          ARE
        </h5>
      </div>

      {/* SECTION 1 */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 mb-24">
        <div
        
          className="w-full sm:w-[567px]"
        >
          <h1 className="text-5xl sm:text-[80px] font-medium">
            SMARTASURE
          </h1>
          <p className="text-base sm:text-[25px] text-[#999999]">
            SmartaSure is a premium smart home automation brand by
            Agryen Technologies LLP.
          </p>
        </div>

        <Image
      
          src="/block6.png"
          alt="img1"
          width={794}
          height={530}
          className="w-full sm:w-[794px] h-auto sm:h-[530px] rounded-3xl"
        />
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-24">
        <Image
      
          src="/block0.png"
          alt="img2"
          width={794}
          height={530}
          className="w-full sm:w-[794px] h-auto sm:h-[530px] rounded-3xl"
        />

        <div
        
          className="w-full sm:w-[567px]"
        >
          <h1 className="text-5xl sm:text-[80px] font-medium">
            VISION
          </h1>
          <p className="text-base sm:text-[25px] text-[#999999]">
            Redefining modern living through intelligent, elegant technology.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
        <div
        
          className="w-full sm:w-[567px]"
        >
          <h1 className="text-5xl sm:text-[80px] font-medium">
            MISSION
          </h1>
          <p className="text-base sm:text-[25px] text-[#999999]">
            • World-class automation experiences <br />
            • Innovation with human behavior <br />
            • Privacy & reliability <br />
            • Homes built for decades
          </p>
        </div>

        <Image
      
          src="/block3.png"
          alt="img3"
          width={794}
          height={530}
          className="w-full sm:w-[794px] h-auto sm:h-[530px] rounded-3xl"
        />
      </div>
    </div>


    </div>
  );
}
