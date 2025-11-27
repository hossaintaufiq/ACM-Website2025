"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const computerRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "NSU ACM SC";

  useEffect(() => {
    // Typing animation for NSU ACM
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Reset after a delay
        setTimeout(() => {
          currentIndex = 0;
          setTypedText("");
        }, 2000);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // Mouse parallax effect for 3D laptop
    const handleMouseMove = (e: MouseEvent) => {
      if (!computerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 12;
      const y = (clientY / innerHeight - 0.5) * 12;

      computerRef.current.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Side - Welcome Message */}
          <div className="space-y-4 animate-fade-in">
            <div className="inline-block mb-2">
              <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
                Welcome to
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                NSU ACM 
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-1">
                Student Chapter
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
              Empowering the next generation of computing professionals through innovation, collaboration, and excellence.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              We are the first student chapter of the Association for Computing Machinery in Bangladesh. Join us in shaping the future of technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/recruitment" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 text-center">
                Join Us
              </Link>
              <Link href="/about" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 text-center">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50 -ml-4">
              {[
                { value: 30, label: "Workshops", suffix: "+" },
                { value: 13, label: "Events", suffix: "+" },
                { value: 20, label: "Seminars", suffix: "+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Monitor */}
          <div className="relative h-[400px] lg:h-[480px] flex items-center justify-center">
            <div
              ref={computerRef}
              className="relative w-full h-full perspective-1200"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 3D Monitor */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 monitor-3d" style={{ transformStyle: "preserve-3d" }}>
                
                {/* Monitor Screen */}
                <div className="relative" style={{ transform: "rotateX(-5deg)", transformOrigin: "bottom center" }}>
                  {/* Monitor Frame */}
                  <div className="w-[400px] h-[280px] md:w-[480px] md:h-[336px] lg:w-[560px] lg:h-[392px] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-lg border-3 border-slate-700 shadow-2xl relative">
                    {/* Top Bezel with Camera and Speaker */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-900 to-slate-950 rounded-t-lg border-b-2 border-slate-800 flex items-center justify-center">
                      {/* Camera */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-950 rounded-full border-2 border-slate-700"></div>
                      {/* Speaker Grills */}
                      <div className="absolute top-2.5 left-16 w-24 h-0.5 bg-slate-800 rounded-full"></div>
                      <div className="absolute top-2.5 right-16 w-24 h-0.5 bg-slate-800 rounded-full"></div>
                    </div>
                    
                    {/* Screen Display Area - Full Screen */}
                    <div className="absolute top-8 left-2 right-2 bottom-2 bg-slate-950 rounded-md overflow-hidden">
                      {/* Editor Top Bar */}
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border-b border-slate-800">
                        <div className="flex gap-1">
                          <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="ml-2 text-[10px] md:text-xs text-slate-400 font-mono">code.js</div>
                        <div className="ml-auto text-[10px] text-slate-500">●</div>
                      </div>

                      {/* Code Editor Content - Full Screen */}
                      <div className="p-4 font-mono text-xs md:text-sm h-full bg-slate-950 overflow-hidden">
                        {/* Line Numbers */}
                        <div className="absolute left-3 top-12 text-[10px] md:text-xs text-slate-600 space-y-3 font-mono">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={num}>{num}</div>
                          ))}
                        </div>

                        {/* Code Lines */}
                        <div className="pl-10 md:pl-12 space-y-3">
                          {/* Line 1 */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-purple-400">const</span>
                            <span className="text-blue-400">organization</span>
                            <span className="text-white">=</span>
                            <span className="text-green-400">&apos;</span>
                            <span className="text-green-400 typing-text font-semibold">{typedText}</span>
                            {typedText.length < fullText.length && (
                              <span className="text-green-400 animate-cursor-blink text-lg">|</span>
                            )}
                            <span className="text-green-400">&apos;</span>
                            <span className="text-slate-500">;</span>
                          </div>

                          {/* Line 2 */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-purple-400">const</span>
                            <span className="text-blue-400">motto</span>
                            <span className="text-white">=</span>
                            <span className="text-green-400">&apos;</span>
                            <span className="text-green-400">Empowering Students</span>
                            <span className="text-green-400">&apos;</span>
                            <span className="text-slate-500">;</span>
                          </div>

                          {/* Line 3 */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-purple-400">function</span>
                            <span className="text-yellow-400">joinACM</span>
                            <span className="text-white">()</span>
                            <span className="text-white">{'{'}</span>
                          </div>

                          {/* Line 4 */}
                          <div className="flex items-center gap-2 pl-4 flex-wrap">
                            <span className="text-purple-400">return</span>
                            <span className="text-green-400">&apos;Success&apos;</span>
                            <span className="text-slate-500">;</span>
                          </div>

                          {/* Line 5 */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-white">{'}'}</span>
                          </div>

                          {/* Line 6 */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-blue-400">joinACM</span>
                            <span className="text-white">();</span>
                          </div>
                        </div>
                      </div>

                      {/* Screen Glow Effect */}
                      <div className="absolute inset-0 bg-blue-500/10 rounded-md blur-xl -z-10 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Screen Side Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-700/50"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-slate-700/50"></div>
                  </div>

                  {/* Monitor Stand - Neck */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-b-lg border-2 border-slate-600 shadow-lg">
                    <div className="absolute inset-1 bg-slate-800 rounded"></div>
                  </div>
                </div>

                {/* Monitor Base/Stand */}
                <div className="absolute top-[calc(100%+0.25rem)] left-1/2 -translate-x-1/2" style={{ transform: "rotateX(5deg)", transformOrigin: "top center" }}>
                  {/* Base Platform */}
                  <div className="w-48 h-5 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-lg border-2 border-slate-600 shadow-2xl relative">
                    {/* Base Top Surface */}
                    <div className="absolute inset-1 bg-slate-800/50 rounded"></div>
                    
                    {/* Base Side Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-600/50"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-slate-600/50"></div>
                    
                    {/* Base Front Edge */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-950 rounded-b-lg"></div>
                  </div>

                  {/* Base Bottom */}
                  <div className="absolute top-full left-0 right-0 h-2 bg-gradient-to-b from-slate-950 to-slate-900 rounded-b-lg">
                    {/* Rubber Feet */}
                    <div className="absolute bottom-0 left-6 w-10 h-1.5 bg-slate-950 rounded-b-lg"></div>
                    <div className="absolute bottom-0 right-6 w-10 h-1.5 bg-slate-950 rounded-b-lg"></div>
                  </div>
                </div>

                {/* Shadow Under Monitor */}
                <div className="absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-80 h-6 bg-black/30 rounded-full blur-2xl"></div>
              </div>

              {/* Central Glow Effect */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes cursor-blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        @keyframes key-press {
          0%, 100% {
            background-color: rgb(71, 85, 105);
            transform: translateY(0);
            box-shadow: 0 0 0 rgba(100, 116, 139, 0);
          }
          50% {
            background-color: rgb(100, 116, 139);
            transform: translateY(1px);
            box-shadow: 0 2px 4px rgba(100, 116, 139, 0.3);
          }
        }

        @keyframes typing-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
          }
          50% {
            text-shadow: 0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.4);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-cursor-blink {
          animation: cursor-blink 1s ease-in-out infinite;
        }

        .animate-key-press {
          animation: key-press 2s ease-in-out infinite;
        }

        .typing-text {
          animation: typing-glow 1.5s ease-in-out infinite;
        }

        .perspective-1200 {
          perspective: 1200px;
        }

        .monitor-3d {
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </div>
  );
}
