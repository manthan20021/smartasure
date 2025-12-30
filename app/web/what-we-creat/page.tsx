"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function HorizontalTest() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    const totalWidth = panels.length * window.innerWidth;

    // ⭐ FORCE horizontal width
    gsap.set(track, { width: totalWidth });

    gsap.to(track, {
      x: -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
      },
    });

  


    
    ScrollTrigger.refresh();
  }, []);

  return (
    <div>

      <section
      ref={sectionRef}
      className="h-screen bg-[#D5D5D5]  overflow-hidden "
    >
      <div ref={trackRef} className="flex h-screen w-screen">

        {/* panal1 */}
        <div className="panel w-screen h-screen bg-[#D5D5D5] flex items-center justify-center">
          <div>
              <h5 className="text-[180px] mt-[100px]  font-medium">
                An ecosystem
              </h5>
              <h5 className="text-[180px]  font-medium">
                of intelligence.
              </h5>
            </div>
        </div>

        {/* panal2 */}
        <div className="panel w-screen h-screen bg-[#D5D5D5] flex items-center justify-center">
           <video
              src="/light.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-l-full w-full h-full object-cover"
            />
        </div> 

        {/* panal3 */}
        <div className="panel w-screen h-screen bg-[#D5D5D5] flex items-center justify-center">
           <video
              src="/switchs.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=" w-full h-full object-cover"
            />
        </div>

         {/* panal3 */}
        <div className="panel w-screen h-screen bg-[#D5D5D5] flex items-center justify-center">
           <video
              src="/hometheatre.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=" w-full h-full object-cover"
            />
        </div>       
      </div>
    </section>

    
    </div>
  );
}
