"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function OurEvents() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const events = [
    { 
      name: "HackNSU", 
      description: "Annual hackathon bringing together developers and innovators",
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      name: "Technovation", 
      description: "Technology innovation showcase and competition",
      color: "from-purple-500 to-pink-500" 
    },
    { 
      name: "Hour of Code", 
      description: "Educational coding workshops for all skill levels",
      color: "from-green-500 to-emerald-500" 
    },
    { 
      name: "Programming Contest", 
      description: "Competitive programming challenges and competitions",
      color: "from-orange-500 to-red-500" 
    },
    { 
      name: "Innovation Challenge", 
      description: "Platform for creative tech solutions and ideas",
      color: "from-indigo-500 to-purple-500" 
    },
  ];

  // Slider Settings - Mobile first approach
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1, // Default to 1 for mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
    arrows: false,
    swipe: true,
    draggable: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          swipe: true,
          draggable: true,
          touchMove: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          swipe: true,
          draggable: true,
          touchMove: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          swipe: true,
          draggable: true,
          touchMove: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  // Professional Slide Component
  const CustomSlides = ({ item, index }: { item: typeof events[0]; index: number }) => {
    return (
      <div className="px-2 sm:px-3">
        <div className="relative h-[20rem] md:h-[22rem] rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 w-full">
          {/* Subtle Gradient Accent */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
            {/* Top Section - Event Number */}
            <div className="flex items-start justify-between mb-4">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent opacity-20`}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Middle Section - Event Name and Description */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                {item.name}
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom Section - Decorative Element */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className={`w-16 h-0.5 bg-gradient-to-r ${item.color} rounded-full`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Our Events
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            OUR EVENTS
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
            Join us for exciting competitions, workshops, and tech gatherings
          </p>
        </div>

        {/* Simple Auto Sliding Carousel */}
        {isMounted && (
          <div className="mt-12 md:mt-16 our-events-slider">
            <Slider {...settings}>
              {events.map((item, index) => (
                <CustomSlides key={index} item={item} index={index} />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
}
