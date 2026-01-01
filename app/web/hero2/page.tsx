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
      width: 320,
      height: 80,
      borderRadius: 999,
     top:0
    },
    {
      top:100,
      width: "1361px",
      height: "766px",
      borderRadius: "20px",
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        end: "+=300",
        scrub: 1, // buttery smooth
      },
    }
  );
}, []);


    return(
        <div className="sm:h-screen mt-20 sm:mt-0 h-auto w-screen flex flex-col items-center">
           {/* heding text section */}
           <div className="sm:mt-49 mt-20 px-4  w-full flex flex-col items-center justify-center leading-none  sm:leading-20  ">
            <h1 className="text-[50px] sm:text-[100px] font-semibold text-[#b4c9c9]">
                SMARTASURE
                </h1>
                <h1 className="sm:text-[100px] text-[50px] font-semibold text-[#b4c9c9]">
                SMART LIVING ASSURED.
                </h1>
                <p className="sm:text-[18px] text-[12px] mt-5 leading-5 sm:flex flex-col justify-center items-center">
                    <span>Where intelligent technology blends seamlessly with refined</span> 
                    <span>livingcrea ng homes that sense, respond, and </span>
                    <span>elevate every moment. </span>
                    </p>

                   
           </div>
           {/* video section */}
           <div className=" w-full sm:mt-20 mt-8 sm:px-7 flex-col flex items-center justify-center">
            {/* booten section */}
            <div className="sm:fixed w-full flex items-center justify-between sm:px-20 px-2" >
              <Link href="/web/experience">
               <button className=" border-[.1px] border-[#3F3F3F] font-thin  text-[15px] text-[#B4C9C9] sm:mr-2 sm:px-5 sm:py-5 px-2.5 py-1.5 sm:rounded-full">
                        EXPERIENCE SMARTASURE
                        </button>
              </Link>

              <a
              href={`https://wa.me/7588876025?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              >
                <button className=" border-[.1px] bg-[#25D366] from-[#0A0A0A]-700 border-[#25D366] font-bold
                 text-[15px] text-[#000000] sm:px-5 sm:py-5 px-2.5 py-1.5 sm:rounded-full">
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
      className="w-full sm:mt-0 mt-8 h-full object-cover will-change-transform"
      
    />
           </div>
        </div>
    )
}