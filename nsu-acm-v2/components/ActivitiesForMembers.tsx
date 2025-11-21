"use client";

import { useEffect, useRef } from "react";

// Professional SVG Icons
const ResearchIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const WorkshopsIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ContestIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const EventsIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const SeminarsIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const StudySessionsIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SportsIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function ActivitiesForMembers() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 3D tilt effect on hover/touch - works on both desktop and mobile
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const isTouch = 'touches' in e;
      const clientX = isTouch ? (e as TouchEvent).touches[0]?.clientX : (e as MouseEvent).clientX;
      const clientY = isTouch ? (e as TouchEvent).touches[0]?.clientY : (e as MouseEvent).clientY;
      
      if (clientX === undefined || clientY === undefined) return;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        if (rect.left <= clientX && clientX <= rect.right && rect.top <= clientY && clientY <= rect.bottom) {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05) translateZ(20px)`;
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

  const activities = [
    { name: "Research", icon: <ResearchIcon />, color: "from-blue-500 to-cyan-500" },
    { name: "Workshops", icon: <WorkshopsIcon />, color: "from-purple-500 to-pink-500" },
    { name: "Contest", icon: <ContestIcon />, color: "from-orange-500 to-red-500" },
    { name: "Events", icon: <EventsIcon />, color: "from-green-500 to-emerald-500" },
    { name: "Seminars", icon: <SeminarsIcon />, color: "from-indigo-500 to-purple-500" },
    { name: "Study Sessions", icon: <StudySessionsIcon />, color: "from-pink-500 to-rose-500" },
    { name: "Sports Programs", icon: <SportsIcon />, color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Activities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            ACTIVITIES FOR MEMBERS
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
            Engage in diverse activities designed to enhance your skills and build connections
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="group relative h-32 md:h-40 lg:h-44 rounded-xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center z-10">
                {/* Professional Icon */}
                <div className={`mb-3 text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ${activity.color.replace('from-', 'text-').replace('to-', 'text-').split(' ')[0]}`}>
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
              <div className={`absolute -inset-1 bg-gradient-to-r ${activity.color} rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            Become A Member
          </button>
        </div>
      </div>
    </section>
  );
}

