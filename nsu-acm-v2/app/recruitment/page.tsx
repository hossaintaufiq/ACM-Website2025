"use client";

import { useInView } from "react-intersection-observer";

interface TeamCard {
  name: string;
  character: string;
  description: string;
  gradient: string;
  borderColor: string;
  icon: React.ReactNode;
}

interface FloatingTeam {
  name: string;
  gradient: string;
}

// Professional SVG Icons for Teams
const TeamIcons = {
  Promotions: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400"/>
    </svg>
  ),
  Publications: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"/>
      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"/>
      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"/>
      <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"/>
    </svg>
  ),
  Provision: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"/>
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"/>
    </svg>
  ),
  Corporate: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"/>
      <circle cx="12" cy="12" r="2" fill="currentColor" className="text-teal-400"/>
    </svg>
  ),
};

const teams: TeamCard[] = [
  {
    name: "Team Promotions",
    character: "Mystique",
    description: "Carefully manipulating each stroke of colour with handpicked and precise fonts, Team Promotions creates the most magical and creative graphic works. XMen's Mystique may change into any color or shape, but Team Promotions does a great job at making digital artwork that changes to fit the occasion.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    borderColor: "border-blue-500/50",
    icon: TeamIcons.Promotions,
  },
  {
    name: "Team Publications",
    character: "Hawkeye",
    description: "With Hawkeye level of precision, Team Publications makes sure each writing is a hundred percent authentic with no hint of AI. Their greatest weapon is their mind through which they deliver their wisdom that requires the same level of mastery to develop intricate spells. Not only that but they also exhibit a stark-like confidence in their public speaking skills and showcase them in anchoring for our events.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    borderColor: "border-purple-500/50",
    icon: TeamIcons.Publications,
  },
  {
    name: "Team Provision",
    character: "The Avengers",
    description: "The Avengers represent the transformative power of teamwork where different individuals unite together to make the impossible possible. Every event is perfectly orchestrated by the relentless effort of Team Provision which embodies the fact that they are our real-life superheroes who work behind the scenes. From organizing events to wrapping up and volunteering they make sure everything is perfectly balanced, as things should be.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    borderColor: "border-orange-500/50",
    icon: TeamIcons.Provision,
  },
  {
    name: "Team Corporate",
    character: "Wakanda",
    description: "While Wakanda possesses the world's rarest and valuable metal vibranium, at NSU ACM SC we have our very own vibranium known as Team Corporate. Their invaluable skill of gathering sponsorships is the very reason why we have been able to launch several successful events. The underdogs have effectively proven their negotiating skills from time to time through successful fundraising.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    borderColor: "border-emerald-500/50",
    icon: TeamIcons.Corporate,
  },
];

const floatingTeams: FloatingTeam[] = [
  { name: "Web Group", gradient: "from-blue-500 to-cyan-500" },
  { name: "Admin Group", gradient: "from-purple-500 to-pink-500" },
  { name: "Design & Decor Group", gradient: "from-orange-500 to-red-500" },
  { name: "Research & Development Group", gradient: "from-emerald-500 to-teal-500" },
  { name: "Cultural Group", gradient: "from-pink-500 to-rose-500" },
  { name: "Photography & Cinematography Group", gradient: "from-indigo-500 to-purple-500" },
];

export default function RecruitmentPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Floating Decorative Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-32 right-8 sm:right-16 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 sm:w-40 sm:h-40 bg-cyan-500/20 rounded-full blur-2xl animate-float-slow"></div>
          
          <div className="max-w-7xl mx-auto relative">
            {/* Main Hero Content */}
            <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-wider">
                  ✦ Join Our Mission ✦
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    Mutants and Outcasts
                  </span>
                  <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Unite Together
                  </span>
                </h1>
                
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200/90 font-light leading-relaxed">
                    Under <span className="text-white font-semibold">Xavier&apos;s Vision</span> of Coexistence
                  </p>
                </div>
              </div>

              {/* Quote Highlight */}
              <div className="max-w-4xl mx-auto mt-8 sm:mt-10 md:mt-12">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 border border-white/10">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 leading-relaxed font-medium">
                      &quot;<span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-bold">Diversity is a strength</span>&quot;
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                      <span className="text-xs sm:text-sm text-slate-400 italic">— Professor Xavier</span>
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Text */}
              <div className="max-w-5xl mx-auto mt-10 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
                  In a world where uniqueness is often misunderstood, <span className="text-blue-400 font-semibold">NSU ACM Student Chapter</span> stands as a beacon of unity. Just as Xavier brought together mutants from all walks of life, we unite exceptional individuals who share a common passion for computing and innovation.
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                    Four Unique Teams
                  </span>
                  <span className="text-slate-500">✦</span>
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                    Exceptional Individuals
                  </span>
                  <span className="text-slate-500">✦</span>
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                    Shared Vision
                  </span>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
                  <span className="text-purple-300 font-semibold">NSU ACM Student Chapter</span> firmly believes that success lies in <span className="text-blue-300">collaboration</span> rather than competition. Together, we create something greater than the sum of our parts.
                </p>
              </div>

              {/* Avengers Quote */}
              <div className="max-w-3xl mx-auto mt-10 sm:mt-12 md:mt-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"></div>
                  <p className="relative text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed italic font-light">
                    We stand together as equals,<br className="hidden sm:block" />
                    <span className="text-blue-300 font-semibold"> just like the Avengers.</span>
                  </p>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">Discover Your Team</span>
                <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Teams
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
                Discover where you belong in our student chapter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {teams.map((team, index) => (
                <TeamCard key={team.name} team={team} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Team Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Join Team
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
                Explore our floating teams and find your perfect fit
              </p>
            </div>

            {/* Floating Teams Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {floatingTeams.map((team, index) => (
                <FloatingTeamCard key={team.name} team={team} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 text-center">
              {/* Semester Badge */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm md:text-base text-blue-300 font-semibold uppercase tracking-wider">
                  📅 Recruitment Coming Soon
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Join?
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
                  Find out where you belong by joining our student chapter!
                </p>
                
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-emerald-400/30">
                  <span className="text-lg sm:text-xl md:text-2xl">🎓</span>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-emerald-300/80 uppercase tracking-wider">Next Recruitment</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-white">
                      Spring 2026
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="inline-block">
                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" disabled>
                  Stay Tuned for Updates
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function TeamCard({ team, index }: { team: TeamCard; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative bg-white/5 backdrop-blur-xl border-2 ${team.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Character Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <div className={`bg-gradient-to-r ${team.gradient} text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-sm border border-white/20`}>
          {team.character}
        </div>
      </div>

      {/* Professional Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-20 rounded-xl blur-sm`}></div>
        <div className={`relative w-full h-full bg-gradient-to-br ${team.gradient} p-3 sm:p-4 rounded-xl flex items-center justify-center`}>
          {team.icon}
        </div>
      </div>

      {/* Team Name */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
        <span className={`bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
          {team.name}
        </span>
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
        {team.description}
      </p>

      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 hover:opacity-10 rounded-2xl sm:rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
}

function FloatingTeamCard({ team, index }: { team: FloatingTeam; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${team.gradient} rounded-full mb-3 sm:mb-4`}></div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
        {team.name}
      </h3>
      <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
}

