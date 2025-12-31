"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import { relative } from "path";
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

export default function Hero2(){

    const videoRef = useRef<HTMLHeadingElement | null>(null);

//     useEffect(()=> {

//           //configretion
//             const lenis = new Lenis({
//               duration: 1.2,
//               easing: (t: number) =>
//                 Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//             });
        
//             const raf = (time: number): void => {
//               lenis.raf(time);
//               requestAnimationFrame(raf);
//             };
//             requestAnimationFrame(raf);
        
//             lenis.on("scroll", ScrollTrigger.update);

//             if (videoRef.current) {
//   gsap.fromTo(
//     videoRef.current,
//     {
//       scale: 1,
//       borderRadius: "0px",
//     },
//     {
//       scale: 1.6,              // 🔍 zoom in
//       borderRadius: "40px",    // ⭕ rounded increase
//       ease: "power2.out",      // ✨ smooth feel
//       scrollTrigger: {
//         trigger: videoRef.current,
//         start: "top 85%",
//         end: "+=700",
//         scrub: 1,              // smooth scrolling
//       },
//     }
//   );
// }



    
//     return (): void => {
//       lenis.destroy();
//       ScrollTrigger.killAll();
//     };

//     },[])

useEffect(() => {
  const el = videoRef.current;

  gsap.fromTo(
    el,
    {
      width: 220,
      height: 80,
      borderRadius: 999,
     top:0
    },
    {
      top:100,
      width: "1361px",
      height: "766px",
      borderRadius: "50px",
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "+=300",
        scrub: 1, // buttery smooth
      },
    }
  );
}, []);


    return(
        <div className="h-screen w-full flex flex-col items-center">
           {/* heding text section */}
           <div className="mt-49 flex flex-col items-center justify-center leading-20  ">
            <h1 className="text-[100px] font-semibold text-[#b4c9c9]">
                SMARTASURE
                </h1>
                <h1 className="text-[100px] font-semibold text-[#b4c9c9]">
                SMART LIVING. ASSURED
                </h1>
                <p className="text-[18px] mt-5 leading-5 flex flex-col justify-center items-center">
                    <span>Where intelligent technology blends seamlessly with refined</span> 
                    <span>livingcrea ng homes that sense, respond, and </span>
                    <span>elevate every moment. </span>
                    </p>

                   
           </div>
           {/* video section */}
           <div className="w-full mt-20 px-7 flex items-center justify-center">

            <div className="fixed w-full flex items-center justify-between px-20 " >
              <Link href="/web/experience">
               <button className=" border-[.1px] border-[#3F3F3F] font-thin  text-[15px] text-[#B4C9C9] mr-2 px-5 py-5 rounded-full">
                        EXPERIENCE SMARTASURE
                        </button>
              </Link>
    <button className=" border-[.1px] from-[#0A0A0A]-700 border-[#3F3F3F] text-[15px] text-[#B4C9C9] px-5 py-5 rounded-full">
                        BOOK A PRIVATE DEMO
                        </button>
            </div>
            
            <video
      src="/hero.mp4"
      autoPlay
      loop
      muted
      playsInline
      ref={videoRef}
      className="w-full  h-full object-cover will-change-transform"
      
    />
           </div>
        </div>
    )
}