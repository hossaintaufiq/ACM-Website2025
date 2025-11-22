"use client";

import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Team {
  name: string;
  description: string;
  color: string;
  icon: string;
  gradient: string;
}

const mainTeams: Team[] = [
  {
    name: "Team Corporate",
    description: "Sponsorship acquisition and corporate relations",
    color: "from-emerald-500 to-teal-500",
    icon: "💼",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },
  {
    name: "Team Promotions",
    description: "Graphic design and creative content creation",
    color: "from-blue-500 to-cyan-500",
    icon: "🎨",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
  },
  {
    name: "Team Provision",
    description: "Event organization and logistics management",
    color: "from-orange-500 to-red-500",
    icon: "⚡",
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
  },
  {
    name: "Team Publications",
    description: "Content writing and public speaking",
    color: "from-purple-500 to-pink-500",
    icon: "✍️",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
  },
];

const floatingGroups: Team[] = [
  {
    name: "Web Group",
    description: "Website development and maintenance",
    color: "from-indigo-500 to-purple-500",
    icon: "🌐",
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
  },
  {
    name: "Admin Group",
    description: "Administrative support and coordination",
    color: "from-slate-500 to-gray-500",
    icon: "📋",
    gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
  },
  {
    name: "Design & Decor Group",
    description: "Event decoration and visual design",
    color: "from-pink-500 to-rose-500",
    icon: "🎭",
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
  },
  {
    name: "Research & Development Group",
    description: "Technical research and innovation projects",
    color: "from-green-500 to-emerald-500",
    icon: "🔬",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  },
  {
    name: "Cultural Group",
    description: "Cultural events and activities",
    color: "from-yellow-500 to-orange-500",
    icon: "🎪",
    gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
  },
  {
    name: "Photography & Cinematography Group",
    description: "Event documentation and media production",
    color: "from-cyan-500 to-blue-500",
    icon: "📸",
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
  },
];

function TeamCard3D({ team, index, isFloating = false }: { team: Team; index: number; isFloating?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        ref={cardRef}
        className="relative group cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 3D Card */}
        <div className={`relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-white/30 hover:shadow-2xl ${isFloating ? "hover:shadow-purple-500/30" : "hover:shadow-blue-500/30"}`}>
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>

          {/* 3D Shadow Effect */}
          <div className={`absolute -inset-1 bg-gradient-to-br ${team.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl sm:rounded-3xl transition-opacity duration-500 -z-10`}></div>

          {/* Content */}
          <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
            {/* Icon */}
            <div className="mb-3 sm:mb-4">
              <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${team.color} text-3xl sm:text-4xl md:text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {team.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${team.color} bg-clip-text text-transparent`}>
              {team.name}
            </h3>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {team.description}
            </p>

            {/* Decorative Element */}
            <div className={`mt-3 sm:mt-4 h-0.5 sm:h-1 w-full bg-gradient-to-r ${team.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
          </div>

          {/* 3D Edge Highlights */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-2 sm:mb-3 md:mb-4">
            <span className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Organizational Structure
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Discover the four core teams and six floating groups that make NSU ACM Student Chapter thrive
          </p>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 sm:mt-4 md:mt-6 rounded-full"></div>
        </div>

        {/* Tree Structure */}
        <div className="relative">
          {/* Root Node - NSU ACM SC */}
          <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-2 border-white/20 rounded-2xl sm:rounded-3xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                  NSU ACM Student Chapter
                </h2>
              </div>
            </div>
          </div>

          {/* Main Branch - Connecting Line */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
            <div className="w-px h-8 sm:h-12 md:h-16 bg-gradient-to-b from-white/30 via-white/20 to-transparent"></div>
          </div>

          {/* Main Teams Branch */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            {/* Branch Label */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/90 mb-2">
                Main Teams
              </h3>
              <div className="w-24 sm:w-32 md:w-40 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
            </div>

            {/* Horizontal Branch Line */}
            <div className="relative mb-8 sm:mb-10 md:mb-12">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Main Teams Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative">
              {/* Vertical Lines from Branch to Teams */}
              {mainTeams.map((_, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-6 sm:h-8 md:h-10 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
              ))}

              {/* Team Cards */}
              {mainTeams.map((team, index) => (
                <div key={index} className="relative">
                  <TeamCard3D team={team} index={index} isFloating={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Floating Groups Branch */}
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
            {/* Connecting Line */}
            <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
              <div className="w-px h-8 sm:h-12 md:h-16 bg-gradient-to-b from-white/30 via-white/20 to-transparent"></div>
            </div>

            {/* Branch Label */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/90 mb-2">
                Floating Groups
              </h3>
              <div className="w-24 sm:w-32 md:w-40 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
            </div>

            {/* Horizontal Branch Line */}
            <div className="relative mb-8 sm:mb-10 md:mb-12">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Floating Groups Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative">
              {/* Vertical Lines from Branch to Groups */}
              {floatingGroups.map((_, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-6 sm:h-8 md:h-10 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
              ))}

              {/* Group Cards */}
              {floatingGroups.map((group, index) => (
                <div key={index} className="relative">
                  <TeamCard3D team={group} index={index} isFloating={true} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Explore More
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base px-2">
              View detailed information about our team members
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Chapter Officials", href: "/chapter-officials", color: "from-blue-500 to-cyan-500" },
              { name: "Ex-Chapter Officials", href: "/ex-chapter-officials", color: "from-purple-500 to-pink-500" },
              { name: "Web Contributors", href: "/web-contributors", color: "from-green-500 to-emerald-500" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r ${link.color} bg-clip-text text-transparent`}>
                    {link.name}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-white transition-colors duration-300">
                    <span>View Details</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
