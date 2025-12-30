import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Curcer(){
    
     const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createSmoke = (e: MouseEvent) => {
      const smoke = document.createElement("div");
      document.body.appendChild(smoke);

      smoke.style.position = "fixed";
      smoke.style.left = `${e.clientX}px`;
      smoke.style.top = `${e.clientY}px`;
      smoke.style.width = "6px";
      smoke.style.height = "6px";
      smoke.style.borderRadius = "50%";
      smoke.style.background = "rgba(169,0,255)";
      smoke.style.pointerEvents = "none";
      smoke.style.filter = "blur(2px)";
      smoke.style.transform = "translate(-50%, -50%)";
      smoke.style.zIndex = "9999";

      gsap.to(smoke, {
        scale: 3,   
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => smoke.remove(),
      });
    };

    window.addEventListener("mousemove", createSmoke);
    return () => window.removeEventListener("mousemove", createSmoke);
  }, []);




    return(
         <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent mix-blend-difference"
      />
    )
}