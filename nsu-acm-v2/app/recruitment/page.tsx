"use client";

import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface TeamCard {
  name: string;
  character: string;
  description: string;
  gradient: string;
  borderColor: string;
  icon: string;
}

const teams: TeamCard[] = [
  {
    name: "Team Promotions",
    character: "Mystique",
    description: "Carefully manipulating each stroke of colour with handpicked and precise fonts, Team Promotions creates the most magical and creative graphic works. XMen's Mystique may change into any color or shape, but Team Promotions does a great job at making digital artwork that changes to fit the occasion.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    borderColor: "border-blue-500/50",
    icon: "🎨",
  },
  {
    name: "Team Publications",
    character: "Hawkeye",
    description: "With Hawkeye level of precision, Team Publications makes sure each writing is a hundred percent authentic with no hint of AI. Their greatest weapon is their mind through which they deliver their wisdom that requires the same level of mastery to develop intricate spells. Not only that but they also exhibit a stark-like confidence in their public speaking skills and showcase them in anchoring for our events.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    borderColor: "border-purple-500/50",
    icon: "✍️",
  },
  {
    name: "Team Provision",
    character: "The Avengers",
    description: "The Avengers represent the transformative power of teamwork where different individuals unite together to make the impossible possible. Every event is perfectly orchestrated by the relentless effort of Team Provision which embodies the fact that they are our real-life superheroes who work behind the scenes. From organizing events to wrapping up and volunteering they make sure everything is perfectly balanced, as things should be.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    borderColor: "border-orange-500/50",
    icon: "⚡",
  },
  {
    name: "Team Corporate",
    character: "Wakanda",
    description: "While Wakanda possesses the world's rarest and valuable metal vibranium, at NSU ACM SC we have our very own vibranium known as Team Corporate. Their invaluable skill of gathering sponsorships is the very reason why we have been able to launch several successful events. The underdogs have effectively proven their negotiating skills from time to time through successful fundraising.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    borderColor: "border-emerald-500/50",
    icon: "💎",
  },
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

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Join?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                Find out where you belong by joining our student chapter!
              </p>
              <div className="inline-block">
                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50">
                  Join Us Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Credits Section */}
        <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-slate-300 font-semibold">Design by:</span>{" "}
                <span className="text-blue-400">Arefin Amin</span>, Sub - Executive, Team Promotions;{" "}
                <span className="text-blue-400">Syed Shadman Zahin</span>, In - Charge, Team Promotions
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-slate-300 font-semibold">Caption by:</span>{" "}
                <span className="text-blue-400">Tasmia Ferdous</span>, In - Charge, Team Publications
              </p>
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

      {/* Icon */}
      <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{team.icon}</div>

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

