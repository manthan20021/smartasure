"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";




import { useState, useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);


export default function Hero(){

  const [mousePos, setMousePos] = useState({x:0,  y: 0});
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]); 
  const div1Ref = useRef<HTMLDivElement | null>(null);
  
 const message = encodeURIComponent(
  "Hi 👋 I want to know more about your smart switches."
);


  useEffect(() => {
    const handleMouseMove = (e : MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  useEffect(()=>{
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
  {y: 0 },
  {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: div1Ref.current,
      start: "top 80%",
      end: "+=1800", // ⭐ BIG distance = SLOW
      scrub: true,
    },
  }
);
    }


  },[])

  

  const getCardStyle = (index: number) => {
  const card = cardsRef.current[index];
  if (!card) return {};

  const rect = card.getBoundingClientRect();
  const cardCenterX = rect.left + rect.width / 2;
  const cardCenterY = rect.top + rect.height / 2;

  const deltaX = mousePos.x - cardCenterX;
  const deltaY = mousePos.y - cardCenterY;

  const angle = Math.atan2(deltaY, deltaX);
  const tiltAmount = 25;

  return {
    transform: `perspective(1000px) rotateX(${Math.sin(angle) * tiltAmount}deg) rotateY(${Math.cos(angle) * tiltAmount}deg)`,
    transition: "transform 0.2s ease-out",
  };
};



  const cards = [
    { color: 'bg-gradient-to-br from-blue-700 to-[#3F3F3F]', txt:'REPPMIUM GRADE AUTOMAION ON SYSTEMS'},
    { color: 'bg-gradient-to-br from-red-700 to-[#3F3F3F]', txt:'BESPOKE DESIGN FOR EVERY RESIDENCE'},
    { color: 'bg-gradient-to-br from-green-700 to-[#3F3F3F]', txt:'SEAMLESS INTEGRA ON ACROSS DEVICES'},
    { color: 'bg-gradient-to-br from-orange-700 to-[#3F3F3F]', txt:'ELEGANT INTERFACES WITH MELESS AESTHETICS'},
    { color: 'bg-gradient-to-br from-pink-700 to-[#3F3F3F]', txt:'PROFESSIONAL INSTALLATION AND DEDICATED SUPPORT'},
    { color: 'bg-gradient-to-br from-yellow-700 to-[#3F3F3F]',  txt:'REPPMIUM GRADE AUTOMAION ON SYSTEMS'},
    
  ];
  
    return(
        <div ref={div1Ref} className="w-full  h-full pl-20 pt-20 flex items-center justify-between  bg-cover ">
            {/* heding and sub text */}
            <div>
                 <h1
      className={`mt-40 leading-15 text-[60px] font-semibold text-[#B3B3B3] tracking-wide`}
    > 
    WHY SMARTASURE 
    </h1>
   <p className="
  text-sm md:text-base
  font-light
  tracking-[0.35em]
  leading-loose
  text-[#5f5f5f]
  animate-subtle-blink
">
  Cra ed for those who expect more. 
</p>


 <a
              href={`https://wa.me/7588876025?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              >
<button className="px-10 h-[68px] rounded-l-full bg-white text-[#5f5f5f] text-2xl mt-5 font-semibold">Book a Private Demo </button>
</a>
            </div>

            {/* 3d models */}

             <div className="h-full w-[909px] px-9 grid grid-cols-2 gap-2.5 pr-2 py-4">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            style={getCardStyle(index)}
            className={`${card.color} rounded-2xl px-12 relative h-[202px] w-[422px] shadow-2xl flex items-center justify-center text-white text-3xl font-bold cursor-pointer transform-gpu overflow-hidden`}
          >
          <h1>{card.txt}</h1>
          </div>
        ))}
      
    </div>
            

        </div>
    )
}


