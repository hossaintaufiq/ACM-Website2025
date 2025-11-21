"use client";

import { useEffect, useRef } from "react";

export default function GlobalCodeParticles() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating code particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      const codeSymbols = ["{", "}", "<", ">", "/", "=", "(", ")", "[", "]", ";", ":", "*", "+", "-"];
      
      // Clear existing particles
      particlesRef.current.innerHTML = "";
      
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement("div");
        particle.className = "code-particle";
        particle.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        particle.style.left = `${Math.random() * 30}%`; // Keep on left side (0-30%)
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${8 + Math.random() * 8}s`;
        particle.style.fontSize = `${12 + Math.random() * 10}px`;
        particle.style.opacity = `${0.3 + Math.random() * 0.4}`;
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div
      ref={particlesRef}
      className="fixed left-0 top-0 w-[30%] h-full overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <style jsx>{`
        @keyframes code-float {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }

        .code-particle {
          position: absolute;
          color: rgba(59, 130, 246, 0.5);
          font-family: 'Courier New', monospace;
          font-weight: bold;
          animation: code-float linear infinite;
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
          user-select: none;
        }
      `}</style>
    </div>
  );
}

