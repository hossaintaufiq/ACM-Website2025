"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ExecutivePanel() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // 3D tilt effect on hover/touch - works on both desktop and mobile
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const isTouch = 'touches' in e;
      const clientX = isTouch ? (e as TouchEvent).touches[0]?.clientX : (e as MouseEvent).clientX;
      const clientY = isTouch ? (e as TouchEvent).touches[0]?.clientY : (e as MouseEvent).clientY;
      
      if (clientX === undefined || clientY === undefined) return;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        if (rect.left <= clientX && clientX <= rect.right && rect.top <= clientY && clientY <= rect.bottom) {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08) translateZ(30px)`;
        } else {
          card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateZ(0)";
        }
      });
    };

    const handleLeave = () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateZ(0)";
        }
      });
    };

    // Desktop events
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    
    // Mobile touch events
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleLeave);
    };
  }, []);

  const executivePanel = [
    {
      name: "Ms. Silvia Ahmed",
      designation: "Faculty Sponsor",
      image: "/executive-panel/FacultySponsor.webp",
      gradient: "from-yellow-500/30 via-orange-500/30 to-red-500/30",
      borderColor: "border-yellow-500/50",
    },
    {
      name: "MD. Saroar Mahmud",
      designation: "Chair",
      image: "/executive-panel/saroar.jpg",
      gradient: "from-blue-500/30 via-cyan-500/30 to-teal-500/30",
      borderColor: "border-blue-500/50",
    },
    {
      name: "Tamjidul Islam",
      designation: "Vice Chair",
      image: "/executive-panel/Tamjid.jpg",
      gradient: "from-purple-500/30 via-pink-500/30 to-rose-500/30",
      borderColor: "border-purple-500/50",
    },
    {
      name: "Md. Atikur Rahman Shafi",
      designation: "Secretary",
      image: "/executive-panel/Shafi.jpg",
      gradient: "from-green-500/30 via-emerald-500/30 to-teal-500/30",
      borderColor: "border-green-500/50",
    },
    {
      name: "Sajid Hasan Safin",
      designation: "Treasurer",
      image: "/executive-panel/Sajid Hasan Safin.webp",
      gradient: "from-indigo-500/30 via-blue-500/30 to-purple-500/30",
      borderColor: "border-indigo-500/50",
    },
    {
      name: "Noshin Nawar",
      designation: "Membership Chair",
      image: "/executive-panel/Noshin.JPG",
      gradient: "from-pink-500/30 via-rose-500/30 to-red-500/30",
      borderColor: "border-pink-500/50",
    },
    {
      name: "Mubashshira Kaisar",
      designation: "Webmaster",
      image: "/executive-panel/Mubashshira.png",
      gradient: "from-cyan-500/30 via-blue-500/30 to-indigo-500/30",
      borderColor: "border-cyan-500/50",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            EXECUTIVE PANEL
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Meet the dedicated leaders driving innovation and excellence
          </p>
        </div>

        {/* Faculty Sponsor - Featured with Creative Design */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="group relative"
            style={{ transformStyle: "preserve-3d" }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(0)}
            onTouchEnd={() => setHoveredIndex(null)}
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Middle Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Image Container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-border animate-spin-slow" style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor", padding: "4px" }}></div>
              
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 group-hover:border-yellow-400/50 transition-all duration-300">
                <Image
                  src={executivePanel[0].image}
                  alt={executivePanel[0].name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Name and Designation */}
            <div className="mt-6 text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                {executivePanel[0].name}
              </h3>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full">
                <p className="text-sm md:text-base text-yellow-300 font-semibold">
                  {executivePanel[0].designation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Members Grid - Creative Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {executivePanel.slice(1).map((member, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index + 1] = el; }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={() => setHoveredIndex(index + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index + 1)}
              onTouchEnd={() => setHoveredIndex(null)}
            >
              {/* Floating Card Effect */}
              <div className={`relative bg-white/5 backdrop-blur-xl border-2 ${member.borderColor} rounded-3xl p-6 transition-all duration-500 ${hoveredIndex === index + 1 ? "shadow-2xl" : "shadow-lg"}`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 ${member.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ boxShadow: `0 0 20px ${member.borderColor.replace('border-', '').replace('/50', '')}` }}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Image with Creative Frame */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-4">
                    {/* Outer Glow */}
                    <div className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Hexagon/Octagon Frame Effect */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 rounded-full border-3 border-white/30 group-hover:border-white/60 transition-all duration-300"></div>
                      <div className="absolute inset-2 rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 176px"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-full border-2 border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300`}>
                      <span className="text-white text-xs">⭐</span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 text-center group-hover:text-blue-300 transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Designation Badge */}
                  <div className={`px-3 py-1 bg-gradient-to-r ${member.gradient} backdrop-blur-sm border border-white/20 rounded-full`}>
                    <p className="text-xs md:text-sm text-white font-medium">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: "0.2s" }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
       {/* <div className="text-center mt-16">
          <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden group">
            <span className="relative z-10">Become A Member</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>*/}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
