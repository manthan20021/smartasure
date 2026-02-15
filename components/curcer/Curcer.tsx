import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const bigRingRef = useRef<HTMLDivElement>(null);
  const smallRingRef = useRef<HTMLDivElement>(null);
  const pointRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // POINT – instant (sticks to cursor)
      gsap.set(pointRef.current, {
        x: e.clientX,
        y: e.clientY,
      });

      // SMALL RING – little delay
      gsap.to(smallRingRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.28,
        ease: "power3.out",
      });

      // BIG RING – more delay
      gsap.to(bigRingRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.55,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* BIG RING */}
      <div
        ref={bigRingRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997]
                   -translate-x-1/2 -translate-y-1/2
                   h-16 w-16 rounded-full border-2 "
        style={{
          borderColor: "#464cef",
          boxShadow: "0 0 22px #46a3ef",
        }}
      />

      {/* SMALL RING */}
      <div
        ref={smallRingRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998]
                   -translate-x-1/2 -translate-y-1/2
                   h-10 w-10 rounded-full border-2"
        style={{
          borderColor: "#abbafc",
          boxShadow: "0 0 16px #fcabf7",
        }}
      />

      {/* POINT */}
      <div
        ref={pointRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]
                   -translate-x-1/2 -translate-y-1/2
                   h-2 w-2 rounded-full"
        style={{
          backgroundColor: "#fde68a",
          boxShadow: "0 0 10px #fde68a",
        }}
      />
    </>
  );
}
