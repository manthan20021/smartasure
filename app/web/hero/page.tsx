"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useState, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const div1Ref = useRef<HTMLTableSectionElement | null>(null);

  const message = encodeURIComponent(
    "Hi 👋 I want to know more about your smart switches."
  );

  /* ---------------- detect screen safely ---------------- */
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  /* ---------------- mouse tracking (desktop only) ---------------- */
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop]);

  /* ---------------- lenis + scrolltrigger ---------------- */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    if (div1Ref.current) {
      gsap.fromTo(
        div1Ref.current,
        { y: 0 },
        {
          y: 0,
          scrollTrigger: {
            trigger: div1Ref.current,
            start: "top 80%",
            end: "+=1800",
            scrub: true,
          },
        }
      );
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  /* ---------------- card tilt (SAFE) ---------------- */
  const getCardStyle = (index: number) => {
    if (!isDesktop) return {};

    const card = cardsRef.current[index];
    if (!card) return {};

    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const deltaX = mousePos.x - cardCenterX;
    const deltaY = mousePos.y - cardCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const tiltAmount = 18;

    return {
      transform: `perspective(1000px)
        rotateX(${Math.sin(angle) * tiltAmount}deg)
        rotateY(${Math.cos(angle) * tiltAmount}deg)`,
      transition: "transform 0.15s ease-out",
    };
  };

  const cards = [
    { color: "bg-gradient-to-br from-blue-700 to-[#3F3F3F]", txt: "PREMIUM GRADE AUTOMATION SYSTEMS" },
    { color: "bg-gradient-to-br from-red-700 to-[#3F3F3F]", txt: "BESPOKE DESIGN FOR EVERY RESIDENCE" },
    { color: "bg-gradient-to-br from-green-700 to-[#3F3F3F]", txt: "SEAMLESS INTEGRATION ACROSS DEVICES" },
    { color: "bg-gradient-to-br from-orange-700 to-[#3F3F3F]", txt: "ELEGANT INTERFACES WITH TIMELESS AESTHETICS" },
    { color: "bg-gradient-to-br from-pink-700 to-[#3F3F3F]", txt: "PROFESSIONAL INSTALLATION & SUPPORT" },
    { color: "bg-gradient-to-br from-yellow-700 to-[#3F3F3F]", txt: "SMART LIVING SIMPLIFIED" },
  ];

  return (
    <section
      ref={div1Ref}
      className="
        w-full min-h-screen
        px-6 sm:px-10 lg:px-20
        pt-24
        flex flex-col lg:flex-row
        gap-16
        items-center lg:items-start
        justify-between
      "
    >
      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="mt-10 lg:mt-40 text-[36px] sm:text-[48px] lg:text-[60px] font-semibold text-[#B3B3B3]">
          WHY SMARTASURE
        </h1>

        <p className="mt-4 text-xs sm:text-sm md:text-base font-light tracking-[0.35em] leading-loose text-[#5f5f5f]">
          Crafted for those who expect more.
        </p>

        <a
          href={`https://wa.me/7588876025?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="
            mt-6
            px-8 sm:px-10
            h-[56px] sm:h-[68px]
            rounded-full
            bg-white
            text-[#5f5f5f]
            text-lg sm:text-2xl
            font-semibold
          ">
            Book a Private Demo
          </button>
        </a>
      </div>

      {/* RIGHT CARDS */}
      <div
        className="
          w-full lg:w-[909px]
          grid
          grid-cols-1 sm:grid-cols-2
          gap-4
          px-0 sm:px-4
        "
      >
       {cards.map((card, index) => (
  <div
    key={index}
    ref={(el) => {
      cardsRef.current[index] = el;
    }}
    style={getCardStyle(index)}
    className={`
      ${card.color}
      h-[180px] sm:h-[200px]
      w-full
      rounded-2xl
      px-6 sm:px-10
      shadow-2xl
      flex items-center justify-center
      text-center
      text-lg sm:text-xl lg:text-2xl
      font-semibold
      cursor-pointer
      transform-gpu
    `}
  >
    {card.txt}
  </div>
))}

      </div>
    </section>
  );
}
