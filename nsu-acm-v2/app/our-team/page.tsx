"use client";

import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Team {
  name: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  gradient: string;
  slug: string;
}

// Professional SVG Icons
const TeamIcons = {
  Corporate: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Promotions: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21L17 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 11L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 15L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Provision: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Publications: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Web: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Admin: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Design: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  Research: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.663 17H14.673M12 3V1M18.364 4.636L17.657 3.929M21 12H19M4 12H2M6.343 4.343L5.636 3.636M3.343 15.657L4.05 16.364M16.657 15.657L15.95 16.364M12 18.469V19A2 2 0 1 1 8 19V18.469" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Cultural: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19C9 19.7956 9.31607 20.5587 9.87868 21.1213C10.4413 21.6839 11.2044 22 12 22C12.7956 22 13.5587 21.6839 14.1213 21.1213C14.6839 20.5587 15 19.7956 15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 19C9 18.2044 9.31607 17.4413 9.87868 16.8787C10.4413 16.3161 11.2044 16 12 16C12.7956 16 13.5587 16.3161 14.1213 16.8787C14.6839 17.4413 15 18.2044 15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 19C9 17.3431 7.65685 16 6 16C4.34315 16 3 17.3431 3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 19V12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Photography: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
};

const mainTeams: Team[] = [
  {
    name: "Team Corporate",
    description: "Sponsorship acquisition and corporate relations. They build strategic partnerships with industry leaders and secure essential funding for chapter initiatives. Their expertise in negotiation and relationship management ensures sustainable growth and impactful collaborations.",
    color: "from-emerald-500 to-teal-500",
    icon: TeamIcons.Corporate,
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    slug: "team-corporate",
  },
  {
    name: "Team Promotions",
    description: "Graphic design and creative content creation. They craft visually compelling materials that capture attention and communicate our message effectively. Their innovative designs and artistic vision bring every event and initiative to life with professional branding.",
    color: "from-blue-500 to-cyan-500",
    icon: TeamIcons.Promotions,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    slug: "team-promotions",
  },
  {
    name: "Team Provision",
    description: "Event organization and logistics management. They coordinate every detail from venue setup to execution, ensuring seamless operations. Their meticulous planning and organizational skills guarantee that every event runs smoothly and exceeds expectations.",
    color: "from-orange-500 to-red-500",
    icon: TeamIcons.Provision,
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    slug: "team-provision",
  },
  {
    name: "Team Publications",
    description: "Content writing and public speaking. They create engaging written materials and provide skilled anchors for events. Their communication expertise ensures that our message reaches audiences clearly and professionally, both in writing and through live presentations.",
    color: "from-purple-500 to-pink-500",
    icon: TeamIcons.Publications,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    slug: "team-publications",
  },
];

const floatingGroups: Team[] = [
  {
    name: "Web Group",
    description: "Website development and maintenance. They create and maintain our digital presence using modern web technologies. Their technical expertise ensures our website is user-friendly, responsive, and always up-to-date with the latest information.",
    color: "from-indigo-500 to-purple-500",
    icon: TeamIcons.Web,
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    slug: "web-group",
  },
  {
    name: "Admin Group",
    description: "Administrative support and coordination. They handle documentation, member management, and ensure smooth operations across all teams. Their organizational skills and attention to detail keep the chapter running efficiently and professionally.",
    color: "from-slate-500 to-gray-500",
    icon: TeamIcons.Admin,
    gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
    slug: "admin-group",
  },
  {
    name: "Design & Decor Group",
    description: "Event decoration and visual design. They transform event spaces into captivating environments that enhance the overall experience. Their creative vision and attention to detail create memorable atmospheres for all chapter activities.",
    color: "from-pink-500 to-rose-500",
    icon: TeamIcons.Design,
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    slug: "design-decor-group",
  },
  {
    name: "Research & Development Group",
    description: "Technical research and innovation projects. They explore cutting-edge technologies and develop innovative solutions. Their research initiatives contribute to the advancement of computing knowledge and position our chapter as a leader in technical innovation.",
    color: "from-green-500 to-emerald-500",
    icon: TeamIcons.Research,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    slug: "research-development-group",
  },
  {
    name: "Cultural Group",
    description: "Cultural events and activities. They organize programs that celebrate diversity and creativity within our community. Their events bring members together and foster a vibrant, inclusive environment that goes beyond technology.",
    color: "from-yellow-500 to-orange-500",
    icon: TeamIcons.Cultural,
    gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
    slug: "cultural-group",
  },
  {
    name: "Media and Documentation Group",
    description: "Event documentation and media production. They capture high-quality photos and videos that showcase our chapter's work and preserve memories. Their visual storytelling skills communicate the impact of our activities through compelling media content.",
    color: "from-cyan-500 to-blue-500",
    icon: TeamIcons.Photography,
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    slug: "media-documentation-group",
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
      <Link href={`/our-team/${team.slug}`}>
        <div
          ref={cardRef}
          className="relative group cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* 3D Card */}
          <div className={`relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 hover:border-white/30 hover:shadow-2xl h-full flex flex-col ${isFloating ? "hover:shadow-purple-500/30" : "hover:shadow-blue-500/30"}`}>
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>

          {/* 3D Shadow Effect */}
          <div className={`absolute -inset-1 bg-gradient-to-br ${team.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl sm:rounded-3xl transition-opacity duration-500 -z-10`}></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full" style={{ transformStyle: "preserve-3d" }}>
            {/* Icon and Title Row */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4">
              {/* Professional Icon */}
              <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${team.color} p-2 sm:p-2.5 md:p-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <div className="text-white w-full h-full">
                  {team.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className={`flex-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r ${team.color} bg-clip-text text-transparent leading-tight`}>
                {team.name}
              </h3>
            </div>

            {/* Description - flex-grow to push button down */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed flex-grow">
              {team.description}
            </p>

            {/* Details Button - Centered */}
            <div className="my-6 flex items-center justify-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${team.color} bg-opacity-10 hover:bg-opacity-20 border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300 group-hover:scale-105`}>
                <span className="text-xs sm:text-sm font-semibold text-white">View Details</span>
                <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Decorative Element */}
            <div className={`h-0.5 w-full bg-gradient-to-r ${team.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
          </div>

          {/* 3D Edge Highlights */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        </div>
      </Link>
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
                <div key={index} className="relative h-full">
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
                <div key={index} className="relative h-full">
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
              { name: "Former Chapter Officials", href: "/ex-chapter-officials", color: "from-purple-500 to-pink-500" },
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
