"use client"

import ReactLenis from "lenis/react";
import BrandPhilosophy from "./web/brand-philosophy/page";
//import Hero from "./web/hero/page";
import About from "./web/about/page";
import WhatWeCreat from "./web/what-we-creat/page";
import SmartHomeExperience from "./web/experience/page";
import Hero2 from "./web/hero2/page";
import Hero from "./web/hero/page";
import HowItWorks from "./web/how-it-works/page";
import Footer from "./web/footer/page";
import NaveBar from "@/components/navbar/Nave";
import TrionnCursor from "@/components/curcer/Curcer";
import { useEffect, useState } from "react";
import Loader from "@/components/Loder";
import gsap from "gsap";
;

export default function Home() {

   const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      gsap.from(".page-content", {
        top:0,
        left: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }
  }, [loaded]);
  
  return (    
       <ReactLenis root className="h-full w-full bg-[#0F0F0F]">
         {!loaded && <Loader onComplete={() => setLoaded(true)} />}
<TrionnCursor/>
<NaveBar/>
 <Hero2/>
    <About/>
    <BrandPhilosophy/>
    <WhatWeCreat/>
    <SmartHomeExperience/>
    <Hero/>
    <HowItWorks/>
    <Footer/>
    
    </ReactLenis>
   
  );
}
