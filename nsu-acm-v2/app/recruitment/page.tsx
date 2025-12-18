"use client";

import { useInView } from "react-intersection-observer";
// import Link from "next/link";

interface TeamCard {
  name: string;
  description: string;
  skills: string[];
  gradient: string;
  borderColor: string;
  icon: React.ReactNode;
}

interface FloatingGroup {
  name: string;
  description: string;
  gradient: string;
  skills: string[];
}

interface SkillCategory {
  category: string;
  groups: FloatingGroup[];
  gradient: string;
}

// Professional SVG Icons for Teams
const TeamIcons = {
  Promotions: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21L17 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 11L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 15L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  Provision: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Corporate: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const teams: TeamCard[] = [
  {
    name: "Team Promotions",
    description: "Team Promotions creates visually stunning graphic works and digital artwork. They specialize in creating promotional materials, social media content, and event branding that captures attention and communicates our message effectively. Their creative vision and attention to detail ensure every event has a professional visual identity.",
    skills: ["Graphic Design", "Digital Art", "Branding", "Social Media Design", "Visual Communication"],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    borderColor: "border-blue-500/50",
    icon: TeamIcons.Promotions,
  },
  {
    name: "Team Publications",
    description: "Team Publications ensures authentic and engaging written content. They create compelling articles, social media posts, event descriptions, and other materials that communicate the chapter's activities. Additionally, they provide skilled anchors and speakers for events, ensuring professional and engaging communication with audiences.",
    skills: ["Content Writing", "Public Speaking", "Anchoring", "Copywriting", "Communication"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    borderColor: "border-purple-500/50",
    icon: TeamIcons.Publications,
  },
  {
    name: "Team Provision",
    description: "Team Provision is the backbone of every event. They handle all aspects of event planning, from venue setup to coordination, ensuring that every detail is perfectly executed. Their organizational skills, attention to logistics, and ability to manage multiple tasks simultaneously make them essential for smooth operations.",
    skills: ["Event Planning", "Logistics Management", "Coordination", "Organization", "Project Management"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    borderColor: "border-orange-500/50",
    icon: TeamIcons.Provision,
  },
  {
    name: "Team Corporate",
    description: "Team Corporate builds and maintains relationships with corporate sponsors and partners. They work tirelessly to secure funding and resources that enable successful events and initiatives. Their negotiation skills and business acumen are crucial for the chapter's growth and sustainability.",
    skills: ["Sponsorship", "Business Relations", "Negotiation", "Fundraising", "Networking"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    borderColor: "border-emerald-500/50",
    icon: TeamIcons.Corporate,
  },
];

const skillCategories: SkillCategory[] = [
  {
    category: "Technical Skills",
    gradient: "from-blue-500 to-cyan-500",
    groups: [
      {
        name: "Web Group",
        description: "The Web Group is responsible for developing, maintaining, and updating the NSU ACM Student Chapter website. They ensure that the website is user-friendly, visually appealing, and up-to-date with the latest information about events, teams, and activities. Members work with modern web technologies to create responsive and interactive experiences that showcase the chapter's work effectively.",
        gradient: "from-indigo-500 to-purple-500",
        skills: ["Web Development", "Frontend Development", "Backend Development", "Full Stack Development", "UI/UX Design", "React", "Next.js", "TypeScript", "Responsive Design"],
      },
      {
        name: "Research & Development Group",
        description: "The Research & Development Group focuses on technical innovation and research initiatives. They work on cutting-edge projects, explore new technologies, and contribute to the advancement of computing knowledge. Members engage in research activities, develop innovative solutions, and participate in technical projects that push the boundaries of technology. Their work helps position NSU ACM Student Chapter as a leader in technical innovation.",
        gradient: "from-green-500 to-emerald-500",
        skills: ["Research", "Innovation", "Technical Projects", "Problem Solving", "Algorithm Design", "Data Analysis", "Machine Learning", "Software Development", "Technical Writing"],
      },
    ],
  },
  {
    category: "Creative & Design Skills",
    gradient: "from-purple-500 to-pink-500",
    groups: [
      {
        name: "Design & Decor Group",
        description: "The Design & Decor Group transforms event spaces into visually stunning environments. They handle event decoration, stage design, and visual aesthetics for all chapter events. Members work on creating memorable atmospheres that enhance the overall experience for participants and attendees. Their creative vision and attention to detail ensure that every event has a professional and engaging visual presentation.",
        gradient: "from-pink-500 to-rose-500",
        skills: ["Interior Design", "Event Decoration", "Visual Design", "Aesthetics", "Creative Planning", "Space Planning", "Color Theory", "Theme Design", "Stage Setup"],
      },
      {
        name: "Media and Documentation Group",
        description: "The Media and Documentation Group captures and documents all chapter events and activities. They create high-quality photos and videos that showcase the chapter's work, preserve memories, and create promotional content. Members specialize in photography, videography, and post-production editing. Their visual storytelling skills help communicate the impact and value of NSU ACM Student Chapter's activities to a wider audience through compelling media content.",
        gradient: "from-cyan-500 to-blue-500",
        skills: ["Photography", "Videography", "Video Editing", "Photo Editing", "Documentation", "Media Production", "Post-Production", "Storytelling", "Content Creation"],
      },
    ],
  },
  {
    category: "Administrative & Cultural Skills",
    gradient: "from-orange-500 to-red-500",
    groups: [
      {
        name: "Admin Group",
        description: "The Admin Group provides essential administrative support to ensure smooth operations across all chapter activities. They handle documentation, record-keeping, member management, and coordination between different teams. Members work behind the scenes to maintain organizational efficiency, manage databases, handle communications, and ensure that all administrative processes run smoothly. Their organizational skills and attention to detail are crucial for maintaining professionalism in all chapter operations.",
        gradient: "from-slate-500 to-gray-500",
        skills: ["Administration", "Documentation", "Record Keeping", "Data Management", "Coordination", "Management", "Organization", "Communication", "Database Management"],
      },
      {
        name: "Cultural Group",
        description: "The Cultural Group organizes and manages cultural events and activities that celebrate diversity and creativity. They plan cultural programs, performances, and activities that bring members together and create a vibrant, inclusive community. Members coordinate cultural events, manage performances, and create engaging activities that foster a sense of community and belonging. Their work ensures that NSU ACM Student Chapter is not just about technology, but also about building a strong, culturally rich community.",
        gradient: "from-yellow-500 to-orange-500",
        skills: ["Event Management", "Cultural Programs", "Performance Coordination", "Entertainment", "Community Building", "Program Planning", "Talent Management", "Cultural Activities", "Team Coordination"],
      },
    ],
  },
];

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            {/* Main Hero Content */}
            <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-wider">
                  ✦ Join Our Community ✦
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Join NSU ACM
                  </span>
                  <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Student Chapter
                  </span>
                </h1>
                
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200/90 font-light leading-relaxed">
                    Where <span className="text-white font-semibold">Innovation</span> Meets <span className="text-white font-semibold">Collaboration</span>
                  </p>
                </div>
              </div>

              {/* Description Text */}
              <div className="max-w-5xl mx-auto mt-10 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
                  <span className="text-blue-400 font-semibold">NSU ACM Student Chapter</span> brings together exceptional individuals who share a common passion for computing and innovation. We believe that success lies in <span className="text-purple-300 font-semibold">collaboration</span> rather than competition, creating something greater than the sum of our parts.
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                    Four Unique Teams
                  </span>
                  <span className="text-slate-500">✦</span>
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                    6 Skill-Based Groups
                  </span>
                  <span className="text-slate-500">✦</span>
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                    Exceptional Individuals
                  </span>
                  <span className="text-slate-500">✦</span>
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                    Shared Vision
                  </span>
                  <span className="text-slate-500">✦</span>
                  <span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                    Endless Opportunities
                  </span>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
                  Whether you're interested in <span className="text-blue-300">technical development</span>, <span className="text-purple-300">creative design</span>, <span className="text-pink-300">event management</span>, or <span className="text-cyan-300">corporate relations</span>, there's a place for you here. Join our <span className="text-purple-300 font-semibold">6 skill-based groups</span> and become part of a community that values innovation and excellence.
                </p>
              </div>

              {/* Scroll Indicator */}
              <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">Explore Our Teams</span>
                <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Teams Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
                  Core Teams
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Core Teams
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
                Four essential teams that form the foundation of our chapter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {teams.map((team, index) => (
                <TeamCard key={team.name} team={team} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skill-Based Groups Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm md:text-base text-purple-400 font-semibold uppercase tracking-wider">
                  Skill-Based Groups
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Team
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
                Explore our 6 skill-based groups and find the perfect fit for your talents and interests
              </p>
            </div>

            {/* Skill Categories */}
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {skillCategories.map((category, catIndex) => (
                <SkillCategorySection key={catIndex} category={category} index={catIndex} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 text-center">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm md:text-base text-blue-300 font-semibold uppercase tracking-wider">
                  Recruitment Coming Soon
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Join?
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 mb-8 sm:mb-10">
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
                  Find out where you belong by joining our student chapter!
                </p>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="px-6 py-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-emerald-400/30 w-full max-w-sm">
                    <p className="text-xs sm:text-sm text-emerald-300/80 uppercase tracking-wider mb-2">Next Recruitment Period</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      Spring 2026
                    </p>
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-400 max-w-md">
                    We will announce recruitment details and application procedures closer to the date. Stay connected with us for updates.
                  </p>
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
      {/* Team Name with Logo */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4">
        {/* Professional Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-20 rounded-lg blur-sm`}></div>
          <div className={`relative w-full h-full bg-gradient-to-br ${team.gradient} p-2 sm:p-2.5 md:p-3 rounded-lg flex items-center justify-center text-white`}>
            {team.icon}
          </div>
        </div>
        
        {/* Team Name */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex-1">
          <span className={`bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
            {team.name}
          </span>
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-4">
        {team.description}
      </p>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {team.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 hover:opacity-10 rounded-2xl sm:rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
}

function SkillCategorySection({ category, index }: { category: SkillCategory; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Category Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
          {category.category}
        </h3>
        <div className={`w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r ${category.gradient} mx-auto rounded-full`}></div>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {category.groups.map((group, groupIndex) => (
          <FloatingGroupCard key={groupIndex} group={group} index={groupIndex} />
        ))}
      </div>
    </div>
  );
}

function FloatingGroupCard({ group, index }: { group: FloatingGroup; index: number }) {
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
      <div className={`h-1 w-full bg-gradient-to-r ${group.gradient} rounded-full mb-3 sm:mb-4`}></div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3">
        {group.name}
      </h3>
      <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
        {group.description}
      </p>
      
      {/* Skills Section */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs sm:text-sm text-slate-400 mb-2 font-semibold uppercase tracking-wider">Skills & Technologies</p>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-slate-300 hover:bg-white/10 hover:border-white/20 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
}
