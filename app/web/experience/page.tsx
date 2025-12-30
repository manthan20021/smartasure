import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {Lightbulb, Thermometer, Lock, Music, Wifi, Sun, Moon} from 'lucide-react';
import Lenis from 'lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const SmartHomeExperience: React.FC = () => {
  const [activeControl, setActiveControl] = useState<string>('lights');
  const [lightColor, setLightColor] = useState({r:106, g:25, b:155});
  const [temperature, setTemperature] = useState(22);
  const [isLocked, setIsLocked] = useState(false);
  const [brightness, setBrightness] = useState(80);
  const [musicVolume, setMusicVolume] = useState(50);
  const phoneRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      transition: { duration: 2, repeat: Infinity }
    });
  }, [controls]);

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

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 10,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
              end: "+=600",
             scrub: true,
          },
        }
      );
    }

    
     if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { 
            opacity: 0, 
            x: 100,
        },
        {
          opacity: 1,
          x: 10,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
              end: "+=600",
             scrub: true,
          },
        }
      );
    }
  },[])

  const getLightColorString = () => {
    const adjustedR = Math.floor((lightColor.r * brightness) / 100);
    const adjustedG = Math.floor((lightColor.g * brightness) / 100);
    const adjustedB = Math.floor((lightColor.b * brightness) / 100);
    return `rgb(${adjustedR}, ${adjustedG}, ${adjustedB})`;
  };

  const handleColorChange = (color: string, value: number) => {
    setLightColor(prev => ({ ...prev, [color]: value }));
  };

  const colorPresets = [
    { name: 'Warm White', r: 255, g: 240, b: 200 },
    { name: 'Cool White', r: 200, g: 230, b: 255 },
    { name: 'Sunset', r: 255, g: 120, b: 50 },
    { name: 'Ocean', r: 50, g: 150, b: 255 },
    { name: 'Forest', r: 100, g: 200, b: 100 },
    { name: 'Lavender', r: 200, g: 150, b: 255 },
    { name: 'Rose', r: 255, g: 100, b: 150 },
    { name: 'Gold', r: 255, g: 200, b: 0 },
  ];

  return (
    <div  style={{
       backgroundColor: getLightColorString()
      }}
    
    className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

              <div className="w-full ml-10">
            <h5 ref={titleRef}
            className="text-[70px] font-medium ">YOUR HOME</h5>
            <h5 ref={textRef}
            className="text-[70px] font-medium ">PERFECTLY IN SYNC WITH YOU</h5>
            <p className="text-[25px] ml-3 text-[#999999]">
                Wake up to natural light gently filling your room. 
Watch your home secure itself as you leave. 
Return to comfort, warmth, and calm already prepared. 
SmartaSure homes do not just func on. 
They an cipate. 

            </p>
        </div>

          {/* Right Side - Interactive Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center"
          >
            <motion.div
              ref={phoneRef}
              animate={controls}
              className="relative w-80 h-[650px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] shadow-2xl border-8 border-gray-800 p-4"
              style={{
                boxShadow: `0 0 100px ${getLightColorString()}, 0 0 50px ${getLightColorString()}, 0 20px 60px rgba(0,0,0,0.5)`
              }}
            >
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <Wifi size={14} />
                    <div className="w-6 h-3 border border-white rounded-sm relative">
                      <div className="absolute inset-0.5 bg-white rounded-sm" style={{ width: '70%' }} />
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 py-4">
                  <h2 className="text-2xl font-bold">SmartaSure</h2>
                  <p className="text-sm text-gray-400">Home Control</p>
                </div>

                {/* Control Tabs */}
                <div className="flex gap-2 px-6 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                  {[
                    { id: 'lights', icon: Lightbulb, label: 'Lights' },
                    { id: 'temp', icon: Thermometer, label: 'Climate' },
                    { id: 'security', icon: Lock, label: 'Security' },
                    { id: 'music', icon: Music, label: 'Music' }
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveControl(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                        activeControl === tab.id
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <tab.icon size={16} />
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

                {/* Control Panel */}
                <div className="flex-1 px-6 overflow-y-auto scrollbar-hide pb-6">
                  {activeControl === 'lights' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm mb-2 font-medium">Brightness: {brightness}%</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={brightness}
                          onChange={(e) => setBrightness(Number(e.target.value))}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                          style={{
                            background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${brightness}%, #374151 ${brightness}%, #374151 100%)`
                          }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm mb-3 font-medium">RGB Color Control</label>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-medium">Red</span>
                              <span className="bg-red-500/20 px-2 py-0.5 rounded">{lightColor.r}</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="255"
                              value={lightColor.r}
                              onChange={(e) => handleColorChange('r', Number(e.target.value))}
                              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                              style={{
                                background: `linear-gradient(to right, #000 0%, #ef4444 100%)`
                              }}
                            />
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-medium">Green</span>
                              <span className="bg-green-500/20 px-2 py-0.5 rounded">{lightColor.g}</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="255"
                              value={lightColor.g}
                              onChange={(e) => handleColorChange('g', Number(e.target.value))}
                              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                              style={{
                                background: `linear-gradient(to right, #000 0%, #22c55e 100%)`
                              }}
                            />
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-medium">Blue</span>
                              <span className="bg-blue-500/20 px-2 py-0.5 rounded">{lightColor.b}</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="255"
                              value={lightColor.b}
                              onChange={(e) => handleColorChange('b', Number(e.target.value))}
                              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                              style={{
                                background: `linear-gradient(to right, #000 0%, #3b82f6 100%)`
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="w-full h-20 rounded-xl mt-4 shadow-lg border-2 border-gray-600 flex items-center justify-center"
                          style={{ backgroundColor: getLightColorString() }}
                        >
                          <span className="text-xs font-semibold bg-black/50 px-3 py-1 rounded-full">
                            Current Color
                          </span>
                        </div>
                      </div>

                      {/* Color Palette */}
                      <div>
                        <label className="block text-sm mb-3 font-medium">Color Presets</label>
                        <div className="grid grid-cols-4 gap-2">
                          {colorPresets.map((preset) => (
                            <motion.button
                              key={preset.name}
                              whileTap={{ scale: 0.9 }}
                              whileHover={{ scale: 1.1 }}
                              onClick={() => setLightColor({ r: preset.r, g: preset.g, b: preset.b })}
                              className="aspect-square rounded-xl border-2 border-gray-600 hover:border-white transition-all relative group shadow-lg"
                              style={{ backgroundColor: `rgb(${preset.r}, ${preset.g}, ${preset.b})` }}
                            >
                              <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold opacity-0 group-hover:opacity-100 bg-black/70 rounded-xl transition-opacity px-1">
                                {preset.name}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeControl === 'temp' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-2xl p-6 border border-white/10">
                        <div className="text-7xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">{temperature}°C</div>
                        <p className="text-sm text-gray-300">Current Temperature</p>
                      </div>
                      <input
                        type="range"
                        min="16"
                        max="30"
                        value={temperature}
                        onChange={(e) => setTemperature(Number(e.target.value))}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #3b82f6 0%, #22c55e 50%, #ef4444 100%)`
                        }}
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 py-4 rounded-xl flex items-center justify-center gap-2 hover:from-orange-500/30 hover:to-red-500/30 transition-all">
                          <Sun size={20} className="text-orange-400" />
                          <span>Heat</span>
                        </button>
                        <button className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 py-4 rounded-xl flex items-center justify-center gap-2 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all">
                          <Moon size={20} className="text-blue-400" />
                          <span>Cool</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeControl === 'security' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ 
                            scale: isLocked ? 1 : [1, 1.1, 1],
                            rotate: isLocked ? 0 : [0, -5, 5, -5, 0]
                          }}
                          transition={{ duration: 0.5 }}
                          className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 shadow-2xl ${
                            isLocked ? 'bg-gradient-to-br from-red-500 to-red-700' : 'bg-gradient-to-br from-green-500 to-green-700'
                          }`}
                        >
                          <Lock size={56} />
                        </motion.div>
                        <p className="text-2xl font-bold mb-2">
                          {isLocked ? 'Home Secured' : 'Home Unlocked'}
                        </p>
                        <p className="text-sm text-gray-400">
                          {isLocked ? 'All access points locked' : 'Ready to secure'}
                        </p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsLocked(!isLocked)}
                        className={`w-full py-5 rounded-xl font-semibold text-lg transition-all shadow-lg ${
                          isLocked 
                            ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' 
                            : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                        }`}
                      >
                        {isLocked ? '🔓 Unlock Home' : '🔒 Lock Home'}
                      </motion.button>
                      <div className="space-y-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="flex items-center justify-between text-sm">
                          <span>🚪 Front Door</span>
                          <span className="text-green-400 font-semibold">Locked</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>🚪 Back Door</span>
                          <span className="text-green-400 font-semibold">Locked</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>🪟 Windows</span>
                          <span className="text-green-400 font-semibold">Secured</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>🚗 Garage</span>
                          <span className="text-green-400 font-semibold">Closed</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeControl === 'music' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <motion.div 
                          className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-3xl flex items-center justify-center mb-4 shadow-2xl"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <Music size={64} />
                        </motion.div>
                        <p className="text-xl font-bold">Ambient Jazz</p>
                        <p className="text-sm text-gray-400 mt-1">🎵 Living Room • Now Playing</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium">Volume</label>
                          <span className="text-sm bg-purple-500/20 px-3 py-1 rounded-full">{musicVolume}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={musicVolume}
                          onChange={(e) => setMusicVolume(Number(e.target.value))}
                          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${musicVolume}%, #374151 ${musicVolume}%, #374151 100%)`
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-3 font-medium">Play in Rooms</label>
                        <div className="grid grid-cols-3 gap-2">
                          {['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Garden', 'All Rooms'].map((room) => (
                            <motion.button
                              key={room}
                              whileTap={{ scale: 0.9 }}
                              className="bg-gradient-to-br from-gray-700 to-gray-800 hover:from-purple-600 hover:to-pink-600 py-3 px-2 rounded-xl text-[10px] font-medium transition-all border border-gray-600 hover:border-purple-400"
                            >
                              {room}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
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