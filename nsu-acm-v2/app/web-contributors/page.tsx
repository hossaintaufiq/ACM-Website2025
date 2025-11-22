"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

// Professional team member card - ExecutivePanel style, no animations
function TeamMember({ name, designation, image, index, gradient, borderColor }: { 
  name: string; 
  designation?: string; 
  image: string; 
  index: number;
  gradient: string;
  borderColor: string;
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative w-full">
      {/* Card Container - Same size for all, responsive padding */}
      <div className={`relative bg-white/5 backdrop-blur-xl border-2 ${borderColor} rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col items-center shadow-lg`}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Image with Frame - Responsive Size */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 mb-2 sm:mb-3 md:mb-4">
            {/* Outer Glow */}
            <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-br ${gradient} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
            
            {/* Circular Image Frame */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-2 sm:border-3 border-white/30"></div>
              <div className="absolute inset-1 sm:inset-2 rounded-full overflow-hidden">
                {!imageError ? (
                  <>
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-slate-700 animate-pulse"></div>
                    )}
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 144px, (max-width: 1280px) 160px, 176px"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => {
                        setImageError(true);
                        setImageLoaded(false);
                      }}
                    />
                  </>
                ) : (
                  <div className="w-full h-full bg-slate-700/50 flex items-center justify-center">
                    <span className="text-slate-400 text-[10px] sm:text-xs">Image not found</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name - Responsive text and min-height */}
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white mb-1 sm:mb-2 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center px-1">
            {name}
          </h3>

          {/* Designation Badge - Responsive padding */}
          {designation && (
            <div className={`px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r ${gradient} backdrop-blur-sm border border-white/20 rounded-full`}>
              <p className="text-[10px] sm:text-xs md:text-sm text-white font-medium whitespace-nowrap">
                {designation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WebContributorsPage() {
  const gradients = [
    "from-blue-500/30 via-cyan-500/30 to-teal-500/30",
    "from-purple-500/30 via-pink-500/30 to-rose-500/30",
    "from-green-500/30 via-emerald-500/30 to-teal-500/30",
    "from-orange-500/30 via-red-500/30 to-pink-500/30",
    "from-indigo-500/30 via-blue-500/30 to-purple-500/30",
    "from-pink-500/30 via-rose-500/30 to-red-500/30",
    "from-cyan-500/30 via-blue-500/30 to-indigo-500/30",
  ];

  const borderColors = [
    "border-blue-500/50",
    "border-purple-500/50",
    "border-green-500/50",
    "border-orange-500/50",
    "border-indigo-500/50",
    "border-pink-500/50",
    "border-cyan-500/50",
  ];

  // Memoize team data for performance
  const webContributorsV2 = useMemo(() => [
    { name: "Hossain Ahmmed Taufiq", designation: "Coordinator", image: "/teams/coordinators/Web/Hossain_Ahmmed_Taufiq.webp" },
  ], []);

  const webContributorsV1 = useMemo(() => [
    { name: "Ahmed Kiser", designation: "Team Leader", image: "/teams/web-contributors/kaiser.jpg" },
    { name: "Sheaikh Nazibur Rahman", designation: "Coordinator", image: "/teams/web-contributors/Nazibur.jpg" },
    { name: "Abdul Alim Rakib", designation: "Moderator", image: "/teams/web-contributors/Alim.jpg" },
    { name: "Aminul Islam", designation: "Member", image: "/teams/web-contributors/img-1.jpg" },
    { name: "Arefin Amin", designation: "Member", image: "/teams/web-contributors/img-2.jpg" },
    { name: "Sazid Hasan Shafin", designation: "Member", image: "/teams/web-contributors/img-4.jpg" },
    { name: "Aisha", designation: "Member", image: "/teams/web-contributors/img-5.png" },
    { name: "Tahminuzzaman Nahian", designation: "Member", image: "/teams/web-contributors/img-6.jpg" },
    { name: "Shakia Tasnim", designation: "Member", image: "/teams/web-contributors/shakia.jpg" },
    { name: "Rummamil Abrar Ifty", designation: "Member", image: "/teams/web-contributors/rummamil.jpg" },
  ], []);

  return (
    <div className="min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Professional Page Header - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              Web Team
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 px-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              WEB CONTRIBUTORS
            </span>
          </h1>
          
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            The talented developers building and maintaining our website
          </p>
        </div>

        {/* Version 2 Developers Section - Responsive */}
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                WEB Version 2.1 Developers
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Web Contributors Grid - Responsive gaps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
          {webContributorsV2.map((member, index) => {
            const gradientIndex = index % gradients.length;
            return (
              <TeamMember 
                key={index} 
                {...member} 
                index={index}
                gradient={gradients[gradientIndex]}
                borderColor={borderColors[gradientIndex]}
              />
            );
          })}
          </div>
        </div>

        {/* Version 1 Developers Section - Responsive */}
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                WEB Version 1.0 Developers
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Web Contributors Grid - Responsive gaps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
          {webContributorsV1.map((member, index) => {
            const gradientIndex = index % gradients.length;
            return (
              <TeamMember 
                key={index} 
                {...member} 
                index={index}
                gradient={gradients[gradientIndex]}
                borderColor={borderColors[gradientIndex]}
              />
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
