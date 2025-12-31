"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

export default function Hero2(){

    const videoRef = useRef<HTMLVideoElement>(null);

    const message = encodeURIComponent(
  "Hi 👋 I want to know more about your smart switches."
);

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

              <a
              href={`https://wa.me/7588876025?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              >
                <button className=" border-[.1px] from-[#0A0A0A]-700 border-[#3F3F3F] text-[15px] text-[#B4C9C9] px-5 py-5 rounded-full">
                        BOOK A PRIVATE DEMO
                        </button>
                        </a>
            </div>
            
            <video
      src="https://res.cloudinary.com/duisqp8c9/video/upload/v1767191496/Firefly_Create_a_high-end_cinematic_advertisement_video_for_a_premium_Smart_Home_Automation_ecosyste_weeyxl.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      ref={videoRef}
      className="w-full  h-full object-cover will-change-transform"
      
    />
           </div>
        </div>
    )
}