"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = { value: 0 };

    gsap.to(counter, {
      value: 100,
      duration: 2,
      rotation:0,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.floor(counter.value));
      },
      onComplete: () => {
        gsap.to(".loader", {
          y: "-100%",
          duration: 1,
          rotation:180,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div className="loader fixed inset-0 z-[9999] bg-[#E0EEEE] flex items-center justify-center">
      <h1 className="text-gray-800 text-[120px] font-bold">
        {count}%
      </h1>
    </div>
  );
}
