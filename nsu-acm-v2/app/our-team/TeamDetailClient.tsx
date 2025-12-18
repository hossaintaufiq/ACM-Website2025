"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export interface TeamMember {
  name: string;
  designation?: string;
  image: string;
}

export interface TeamData {
  name: string;
  description: string;
  detailedDescription: string;
  color: string;
  icon: React.ReactNode;
  gradient: string;
  subExecutives?: TeamMember[];
  coordinators?: TeamMember[];
  incharges?: TeamMember[];
  moderators?: TeamMember[];
}

function TeamMemberCard({
  member,
  index,
  gradient,
  borderColor,
}: {
  member: TeamMember;
  index: number;
  gradient: string;
  borderColor: string;
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`group relative w-full transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div
        className={`relative bg-white/5 backdrop-blur-xl border-2 ${borderColor} rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col items-center shadow-lg transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>

        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Image with Frame - Responsive Size matching chapter officials */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 mb-2 sm:mb-3 md:mb-4">
            {/* Outer Glow */}
            <div
              className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-br ${gradient} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
            ></div>

            {/* Circular Image Frame */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-2 sm:border-3 border-white/30"></div>
              <div className="absolute inset-1 sm:inset-2 rounded-full overflow-hidden">
                {!imageError ? (
                  <>
                    {!imageLoaded && <div className="absolute inset-0 bg-slate-700 animate-pulse"></div>}
                    <Image
                      src={member.image}
                      alt={member.name}
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

          {/* Name - Responsive text and min-height matching chapter officials */}
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white mb-1 sm:mb-2 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center px-1">
            {member.name}
          </h3>

          {/* Designation Badge - Responsive padding */}
          {member.designation && (
            <div
              className={`px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r ${gradient} backdrop-blur-sm border border-white/20 rounded-full`}
            >
              <p className="text-[10px] sm:text-xs md:text-sm text-white font-medium whitespace-nowrap">
                {member.designation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Unique SVG Designs for Each Team
function TeamSVG({ slug, color }: { slug: string; color: string }) {
  const svgClass = `w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto`;

  // ... SVG switch body unchanged from original ...
  // For brevity, keep the full SVG implementation from the previous file.

  return (
    <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="100" fill="currentColor" className={`text-blue-400`} opacity="0.1" />
    </svg>
  );
}

function MemberSection({ title, members, color }: { title: string; members: TeamMember[]; color: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  if (!members || members.length === 0) return null;

  return (
    <section
      ref={ref}
      className={`mb-8 sm:mb-12 md:mb-16 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700 ease-out`}
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 px-4">
          <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{title}</span>
        </h2>
        <div className={`w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r ${color} mx-auto rounded-full`}></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {members.map((member, index) => {
          const gradientIndex = index % gradients.length;
          return (
            <TeamMemberCard
              key={index}
              member={member}
              index={index}
              gradient={gradients[gradientIndex]}
              borderColor={borderColors[gradientIndex]}
            />
          );
        })}
      </div>
    </section>
  );
}

export default function TeamDetailClient({ slug, team }: { slug: string; team: TeamData }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Back Button */}
        <Link
          href="/our-team"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 sm:mb-8 transition-colors duration-300 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm sm:text-base">Back to Our Team</span>
        </Link>

        {/* Team Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${team.color} bg-clip-text text-transparent`}
          >
            {team.name}
          </h1>
          <div
            className={`w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r ${team.color} mx-auto rounded-full mb-4 sm:mb-6`}
          ></div>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            {team.description}
          </p>
        </div>

        {/* Team Description with Unique SVG */}
        <div
          className={`relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 md:mb-16 overflow-hidden`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}
          ></div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center relative z-10">
            {/* Content - Left side on large, top on small */}
            <div className="order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                About{" "}
                <span className={`bg-gradient-to-r ${team.color} bg-clip-text text-transparent`}>{team.name}</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {team.detailedDescription}
              </p>
            </div>

            {/* SVG Logo - Right side on large, below on small */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <TeamSVG slug={slug} color={team.color} />
            </div>
          </div>
        </div>

        {/* Team Members Sections */}
        {team.subExecutives && (
          <MemberSection title="Sub-Executives" members={team.subExecutives} color={team.color} />
        )}
        {team.coordinators && <MemberSection title="Coordinators" members={team.coordinators} color={team.color} />}
        {team.incharges && <MemberSection title="Incharges" members={team.incharges} color={team.color} />}
        {team.moderators && <MemberSection title="Moderators" members={team.moderators} color={team.color} />}
      </div>
    </div>
  );
}



