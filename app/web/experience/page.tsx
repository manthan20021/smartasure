"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Lightbulb,
  Thermometer,
  Lock,
  Music,
  Wifi,
  Sun,
  Moon,
} from "lucide-react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmartHomeExperience: React.FC = () => {
  const [activeControl, setActiveControl] = useState("lights");
  const [lightColor, setLightColor] = useState({ r: 10, g: 10, b: 10 });
  const [brightness, setBrightness] = useState(80);
  const [temperature, setTemperature] = useState(22);
  const [isLocked, setIsLocked] = useState(false);
  const [musicVolume, setMusicVolume] = useState(50);

  const phoneRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      transition: { duration: 2, repeat: Infinity },
    });
  }, [controls]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            scrub: true,
          },
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const getLightColorString = () => {
    const r = Math.floor((lightColor.r * brightness) / 100);
    const g = Math.floor((lightColor.g * brightness) / 100);
    const b = Math.floor((lightColor.b * brightness) / 100);
    return `rgb(${r},${g},${b})`;
  };

  const colorPresets = [
    { name: "Warm", r: 255, g: 240, b: 200 },
    { name: "Cool", r: 200, g: 230, b: 255 },
    { name: "Sunset", r: 255, g: 120, b: 50 },
    { name: "Ocean", r: 50, g: 150, b: 255 },
  ];

  return (
    <div
      className="min-h-screen text-white transition-colors duration-500"
      style={{ backgroundColor: getLightColorString() }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-[40px] sm:text-[55px] lg:text-[70px] font-medium"
            >
              YOUR HOME
            </h1>
            <h2
              ref={textRef}
              className="text-[32px] sm:text-[45px] lg:text-[70px] font-medium"
            >
              PERFECTLY IN SYNC WITH YOU
            </h2>
            <p className="mt-4 text-[16px] sm:text-[20px] text-gray-300 max-w-xl mx-auto lg:mx-0">
              Wake up to natural light. Leave home securely. Return to comfort
              already prepared.
            </p>
          </div>

          {/* RIGHT PHONE */}
          <motion.div className="flex justify-center">
            <motion.div
              ref={phoneRef}
              animate={controls}
              className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-black rounded-[3rem] border-8 border-gray-800 p-4"
              style={{
                boxShadow: `0 0 60px ${getLightColorString()}`,
              }}
            >
              <div className="w-full h-full bg-gray-900 rounded-[2rem] flex flex-col overflow-hidden">

                {/* STATUS BAR */}
                <div className="flex justify-between px-5 py-2 text-xs">
                  <span>9:41</span>
                  <Wifi size={14} />
                </div>

                {/* HEADER */}
                <div className="px-5 py-3">
                  <h3 className="text-xl font-bold">SmartaSure</h3>
                  <p className="text-xs text-gray-400">Home Control</p>
                </div>

                {/* TABS */}
                <div className="flex gap-2 px-4 overflow-x-auto pb-2">
                  {[
                    { id: "lights", icon: Lightbulb },
                    { id: "temp", icon: Thermometer },
                    { id: "security", icon: Lock },
                    { id: "music", icon: Music },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveControl(t.id)}
                      className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm ${
                        activeControl === t.id
                          ? "bg-purple-600"
                          : "bg-gray-700"
                      }`}
                    >
                      <t.icon size={16} />
                    </button>
                  ))}
                </div>

                {/* CONTENT */}
                <div className="flex-1 px-4 overflow-y-auto">

                  {/* LIGHTS */}
                  {activeControl === "lights" && (
                    <div className="space-y-4">
                      <label>Brightness: {brightness}%</label>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={brightness}
                        onChange={(e) =>
                          setBrightness(Number(e.target.value))
                        }
                        className="w-full"
                      />

                      {["r", "g", "b"].map((c) => (
                        <input
                          key={c}
                          type="range"
                          min={0}
                          max={255}
                          value={lightColor[c as "r"]}
                          onChange={(e) =>
                            setLightColor({
                              ...lightColor,
                              [c]: Number(e.target.value),
                            })
                          }
                          className="w-full"
                        />
                      ))}

                      <div className="grid grid-cols-4 gap-2">
                        {colorPresets.map((p) => (
                          <button
                            key={p.name}
                            onClick={() =>
                              setLightColor({ r: p.r, g: p.g, b: p.b })
                            }
                            className="h-10 rounded"
                            style={{
                              background: `rgb(${p.r},${p.g},${p.b})`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TEMP */}
                  {activeControl === "temp" && (
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-bold">
                        {temperature}°C
                      </div>
                      <input
                        type="range"
                        min={16}
                        max={30}
                        value={temperature}
                        onChange={(e) =>
                          setTemperature(Number(e.target.value))
                        }
                        className="w-full"
                      />
                      <div className="flex gap-3">
                        <button className="flex-1 bg-orange-500 py-3 rounded-xl">
                          <Sun />
                        </button>
                        <button className="flex-1 bg-blue-500 py-3 rounded-xl">
                          <Moon />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SECURITY */}
                  {activeControl === "security" && (
                    <div className="text-center space-y-4">
                      <div className="text-2xl">
                        {isLocked ? "🔒 Secured" : "🔓 Unlocked"}
                      </div>
                      <button
                        onClick={() => setIsLocked(!isLocked)}
                        className="w-full bg-red-600 py-3 rounded-xl"
                      >
                        Toggle Lock
                      </button>
                    </div>
                  )}

                  {/* MUSIC */}
                  {activeControl === "music" && (
                    <div className="space-y-4">
                      <label>Volume {musicVolume}%</label>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={musicVolume}
                        onChange={(e) =>
                          setMusicVolume(Number(e.target.value))
                        }
                        className="w-full"
                      />
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeExperience;
