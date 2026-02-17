"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card  key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        WHAT WE CREATE
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Lighting that understands mood, me, and presence crafting the perfect atmosphere, always",
    title: "Smart Lighting & Ambience ",
    src: "https://res.cloudinary.com/duisqp8c9/image/upload/v1771300684/ChatGPT_Image_Feb_16_2026_07_49_06_PM_po8qai.png",
    content: <></>,
  },
  {
    category: "Minimal. Elegant. Intelligent. Every touch feels intentional.",
    title: "Designer Smart Switches.",
    src:"https://res.cloudinary.com/duisqp8c9/image/upload/v1771300677/ChatGPT_Image_Feb_16_2026_07_52_08_PM_t2ejnu.png",
    content: <></>,
  
  },
  {
    category: "Cinema-grade sound and visuals, orchestrated effortlessly at your command.",
    title: "Home Theatre Automation ",
    src:"https://res.cloudinary.com/duisqp8c9/image/upload/v1771303080/Gemini_Generated_Image_8vd6z78vd6z78vd6_xue8p3.png",
    content: <></>,
  },

  {
    category: "Silent motion. Perfect ming. Luxury that moves with the sun.",
    title: "Curtain & Blind Automation",
    src:"https://res.cloudinary.com/duisqp8c9/image/upload/v1771303071/Gemini_Generated_Image_u0308hu0308hu030_xjwcl0.png",
    content: <></>,
  },
  {
    category: "Arrive. Enter. Secure. Without interruption.",
    title: "Gate & Access Automation ",
    src: "https://res.cloudinary.com/duisqp8c9/image/upload/v1771303071/Gemini_Generated_Image_gxy0wegxy0wegxy0_jwt9ip.png",
    content: <></>,
  },
  {
    category: "Advanced protection engineered with discretion security that never sleeps.",
    title: "Smart Locks & Security ",
    src: "https://res.cloudinary.com/duisqp8c9/image/upload/v1771303069/Gemini_Generated_Image_3owu8d3owu8d3owu_lzegqn.png",
    content: <></>,
  },
  {
    category: "One interface. Total command. Anywhere. Anyme.",
    title: "Unified App & Voice Control ",
    src: "https://res.cloudinary.com/duisqp8c9/image/upload/v1771303009/Gemini_Generated_Image_k73te6k73te6k73t_stnwaf.png",
    content: <></>,
  },
];
