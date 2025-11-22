"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopButton from "../button-tab-sections/TopButton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

const Activities = () => {
  const activities = [
    { name: "Research", icon: "🔬", color: "from-blue-500 to-cyan-500" },
    { name: "Workshops", icon: "🛠️", color: "from-purple-500 to-pink-500" },
    { name: "Contest", icon: "🏅", color: "from-orange-500 to-red-500" },
    { name: "Events", icon: "🎉", color: "from-green-500 to-emerald-500" },
    { name: "Seminars", icon: "📊", color: "from-indigo-500 to-purple-500" },
    { name: "Study Sessions", icon: "📖", color: "from-pink-500 to-rose-500" },
    { name: "Sports Programs", icon: "⚽", color: "from-yellow-500 to-orange-500" },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05) translateZ(30px)`;
      });
    };

    const handleMouseLeave = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateZ(0)";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const route = useRouter();

  return (
    <MaxWidthWrapper>
      <div className="py-16 md:py-24 lg:py-32 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Activities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
          ACTIVITIES FOR MEMBERS
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
            Engage in diverse activities designed to enhance your skills and build connections
          </p>
        </div>

        {/* 3D Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {activities.map((activity, index) => (
              <div
                key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative h-32 md:h-40 lg:h-48 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/30 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} blur-2xl`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center z-10">
                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-2 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {activity.icon}
                </div>
                
                {/* Activity Name */}
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white transform group-hover:scale-105 transition-transform duration-500">
                  {activity.name}
                </h3>
              </div>

              {/* Shine Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${activity.color}`}></div>
              
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${activity.color} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            variant="secondary"
            className="px-8 md:px-12 h-12 md:h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            onClick={() => route.push("https://www.facebook.com/nsuacmsc")}
          >
            Become A Member
          </Button>
        </div>

        <TopButton />
      </div>
    </MaxWidthWrapper>
  );
};

export default Activities;
