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

    // 🔴 mobile / tablet = disable horizontal scroll
    if (window.innerWidth < 1024) {
      ScrollTrigger.killAll();
      gsap.set(track, { clearProps: "all" });
      return;
    }

    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    const totalWidth = panels.length * window.innerWidth;

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
        anticipatePin: 1,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className="w-full sm:block hidden bg-[#D5D5D5]">
      <div
        ref={sectionRef}
        className="
          relative
          h-screen
          w-full
          overflow-hidden
        "
      >
        <div
          ref={trackRef}
          className="
            flex
            h-full
            w-full
            flex-col
            lg:flex-row
          "
        >
          {/* PANEL 1 */}
          <div className="panel  w-full h-screen flex items-center justify-center">
            <div className="text-center">
              <h5 className="text-[42px] sm:text-[64px] lg:text-[160px] font-medium text-white">
                AN ECOSYSTEM
              </h5>
              <h5 className="mt-[-10px] sm:mt-[-30px] lg:mt-[-90px] text-[42px] sm:text-[64px] lg:text-[160px] font-medium">
                OF INTELLIGENCE
              </h5>
            </div>
          </div>

          {/* PANEL 2 */}
          <div className="panel w-full h-screen flex items-center justify-center">
            <video
              src="https://res.cloudinary.com/duisqp8c9/video/upload/v1767192087/light-home_mfooxb.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="
                w-full
                h-full
                object-cover
                lg:rounded-l-full
              "
            />
          </div>

          {/* PANEL 3 */}
          <div className="panel w-full h-screen flex items-center justify-center">
            <video
              src="https://res.cloudinary.com/duisqp8c9/video/upload/v1767192345/switchs_k9hfmh.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            />
          </div>

          {/* PANEL 4 */}
          <div className="panel w-full h-screen flex items-center justify-center">
            <video
              src="https://res.cloudinary.com/duisqp8c9/video/upload/v1767192666/curten_tflior.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
