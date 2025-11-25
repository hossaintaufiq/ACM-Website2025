"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { useInView } from "react-intersection-observer";

interface TeamMember {
  name: string;
  designation?: string;
  image: string;
}

interface TeamData {
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

// Team data with all members
const teamsData: Record<string, TeamData> = {
  "team-corporate": {
    name: "Team Corporate",
    description: "Sponsorship acquisition and corporate relations",
    detailedDescription: "Team Corporate is responsible for building and maintaining relationships with corporate sponsors and partners. They work tirelessly to secure funding and resources that enable NSU ACM Student Chapter to organize successful events and initiatives. Their negotiation skills and business acumen are crucial for the chapter's growth and sustainability.",
    color: "from-emerald-500 to-teal-500",
    icon: null,
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    subExecutives: [
      { name: "Sudipta Karmaker", image: "/teams/sub-executives/Corporate/Sudipta_Karmaker.webp" },
      { name: "Atahar Hossain", image: "/teams/sub-executives/Corporate/Atahar_Hossain.webp" },
      { name: "Rayta Binte Noor", image: "/teams/sub-executives/Corporate/Rayta_Binte_Noor.webp" },
      { name: "Augustine Gomes", image: "/teams/sub-executives/Corporate/Augustine_Gomes.webp" },
    ],
    incharges: [
      { name: "Anindo Kumar Biswas", image: "/teams/incharges/Corporate/Anindo_Kumar_Biswas.webp" },
      { name: "Al Mustafiz Bappy", image: "/teams/incharges/Corporate/Al_Mustafiz_Bappy.webp" },
      { name: "Arif Faysal Shakib", image: "/teams/incharges/Corporate/Arif_Faysal_Shakib.webp" },
    ],
  },
  "team-promotions": {
    name: "Team Promotions",
    description: "Graphic design and creative content creation",
    detailedDescription: "Team Promotions is the creative powerhouse of NSU ACM Student Chapter. They specialize in graphic design, creating visually stunning promotional materials, social media content, and event branding. Their artistic vision and attention to detail ensure that every event and initiative has a professional and engaging visual identity that captures attention and communicates our message effectively.",
    color: "from-blue-500 to-cyan-500",
    icon: null,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    subExecutives: [
      { name: "Arefin Amin", image: "/teams/sub-executives/Promotion/Arefin_Amin.webp" },
      { name: "Khondker Tamzidur Rahman", image: "/teams/sub-executives/Promotion/Khondker_Tamzidur_Rahman.webp" },
    ],
    incharges: [
      { name: "Shafin Raiyan", image: "/teams/incharges/Promotion/Shafin_Raiyan.webp" },
      { name: "Tahminuzzaman Nahian", image: "/teams/incharges/Promotion/Tahminuzzaman_Nahian.webp" },
      { name: "Syed Shadman Zahin", image: "/teams/incharges/Promotion/Syed_Shadman_Zahin.webp" },
      { name: "Aminul Islam", image: "/teams/incharges/Promotion/Aminul Islam.webp" },
      { name: "G. M. Siam", image: "/teams/incharges/Promotion/G._M._Siam.webp" },
    ],
  },
  "team-provision": {
    name: "Team Provision",
    description: "Event organization and logistics management",
    detailedDescription: "Team Provision is the backbone of every event organized by NSU ACM Student Chapter. They handle all aspects of event planning, from venue setup to coordination, ensuring that every detail is perfectly executed. Their organizational skills, attention to logistics, and ability to manage multiple tasks simultaneously make them essential for the smooth operation of all chapter activities.",
    color: "from-orange-500 to-red-500",
    icon: null,
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    subExecutives: [
      { name: "Arafat Rahat Efty", image: "/teams/sub-executives/Provision/Arafat_Rahat_Efty.webp" },
      { name: "ASM Tayeeb", image: "/teams/sub-executives/Provision/ASM_Tayeeb.webp" },
      { name: "Sajid Rahman", image: "/teams/sub-executives/Provision/Sajid_Rahman_ACM.webp" },
      { name: "Adrito Bhuiyan", image: "/teams/sub-executives/Provision/Adrito_Bhuiyan.webp" },
      { name: "Ahmed As Sadik", image: "/teams/sub-executives/Provision/Ahmed_As_Sadik.webp" },
    ],
    incharges: [
      { name: "Adnan Shafi", image: "/teams/incharges/Provision/Adnan_Shafi.webp" },
      { name: "Ahmed As Sadik", image: "/teams/incharges/Provision/Ahmed_As_Sadik.webp" },
      { name: "Ahnaf Tahmid Ananto", image: "/teams/incharges/Provision/Ahnaf_Tahmid_Ananto.webp" },
      { name: "Humayra Rahman Nipa", image: "/teams/incharges/Provision/Humayra_Rahman_Nipa.webp" },
      { name: "Sanjana Absar", image: "/teams/incharges/Provision/Sanjana_Absar.webp" },
      { name: "Shafaat Bin Zaman", image: "/teams/incharges/Provision/Shafaat_Bin_Zaman.webp" },
      { name: "Shabab Sadatain Jaffry", image: "/teams/incharges/Provision/Shabab_Sadatain_Jaffry.webp" },
      { name: "Tahira Islam Ruba", image: "/teams/incharges/Provision/Tahira_Islam_Ruba.webp" },
      { name: "Zaima Hossain", image: "/teams/incharges/Provision/Zaima_Hossain.webp" },
    ],
  },
  "team-publications": {
    name: "Team Publications",
    description: "Content writing and public speaking",
    detailedDescription: "Team Publications is responsible for creating compelling written content and delivering engaging presentations. They write articles, social media posts, event descriptions, and other materials that communicate the chapter's activities and achievements. Additionally, they provide skilled anchors and speakers for events, ensuring professional and engaging communication with audiences.",
    color: "from-purple-500 to-pink-500",
    icon: null,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    subExecutives: [
      { name: "Nafisa Tabassum", image: "/teams/sub-executives/Publication/Nafisa_Tabassum.webp" },
      { name: "Raisa Zahin", image: "/teams/sub-executives/Publication/Raisa_Zahin.webp" },
    ],
    incharges: [
      { name: "Tasmia Ferdous", image: "/teams/incharges/Publication/Tasmia_Ferdous.webp" },
      { name: "Ilhum Rahman Pushpita", image: "/teams/incharges/Publication/Ilhum_Rahman_Pushpita.webp" },
      { name: "Abdullah Nur Ifaz", image: "/teams/incharges/Publication/Abdullah_Nur_Ifaz.webp" },
      { name: "Aisha Naziha", image: "/teams/incharges/Publication/Aisha_Naziha.webp" },
    ],
  },
  "web-group": {
    name: "Web Group",
    description: "Website development and maintenance",
    detailedDescription: "The Web Group is responsible for developing, maintaining, and updating the NSU ACM Student Chapter website. They ensure that the website is user-friendly, visually appealing, and up-to-date with the latest information about events, teams, and activities. Their technical expertise keeps the chapter's digital presence strong and accessible.",
    color: "from-indigo-500 to-purple-500",
    icon: null,
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    coordinators: [
      { name: "Arefin Amin", image: "/teams/coordinators/Web/Arefin_Amin.webp" },
      { name: "Hossain Ahmmed Taufiq", image: "/teams/coordinators/Web/Hossain_Ahmmed_Taufiq.webp" },
    ],
    moderators: [
      { name: "Tahminuzzaman Nahian", image: "/teams/moderators/Web/Tahminuzzaman_Nahian.webp" },
      { name: "Saif Mohammed", image: "/teams/moderators/Web/Saif_Mohammed.webp" },
      { name: "Aisha Naziha", image: "/teams/moderators/Web/Aisha_Naziha.webp" },
    ],
  },
  "admin-group": {
    name: "Admin Group",
    description: "Administrative support and coordination",
    detailedDescription: "The Admin Group provides essential administrative support to ensure smooth operations across all chapter activities. They handle documentation, record-keeping, member management, and coordination between different teams. Their organizational skills and attention to detail are crucial for maintaining efficiency and professionalism in all chapter operations.",
    color: "from-slate-500 to-gray-500",
    icon: null,
    gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
    coordinators: [
      { name: "Shafaat Bin Zaman", image: "/teams/coordinators/Admin/Shafaat_Bin_Zaman.webp" },
      { name: "Adrito Bhuiyan", image: "/teams/coordinators/Admin/Adrito_Bhuiyan.webp" },
    ],
    moderators: [
      { name: "Rodela Chowdhury", image: "/teams/moderators/Admin/Rodela_Chowdhury.webp" },
      { name: "Shabab Sadatain Jaffry", image: "/teams/moderators/Admin/Shabab_Sadatain_Jaffry.webp" },
    ],
  },
  "design-decor-group": {
    name: "Design & Decor Group",
    description: "Event decoration and visual design",
    detailedDescription: "The Design & Decor Group transforms event spaces into visually stunning environments. They handle event decoration, stage design, and visual aesthetics for all chapter events. Their creative vision and attention to detail ensure that every event has a professional and memorable atmosphere that enhances the overall experience for participants and attendees.",
    color: "from-pink-500 to-rose-500",
    icon: null,
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    coordinators: [
      { name: "Rafia Ferdous Duti", image: "/teams/coordinators/Design/Rafia_Ferdous_Duti.webp" },
      { name: "Afia Zaheen", image: "/teams/coordinators/Design/Afia_Zaheen.webp" },
    ],
    moderators: [
      { name: "Esrat Smriti", image: "/teams/moderators/Design/Esrat_Smriti.webp" },
      { name: "Nafisa Tasneem", image: "/teams/moderators/Design/Nafisa_Tasneem.webp" },
      { name: "Raisa Zahin", image: "/teams/moderators/Design/raisa_zahin.webp" },
    ],
  },
  "research-development-group": {
    name: "Research & Development Group",
    description: "Technical research and innovation projects",
    detailedDescription: "The Research & Development Group focuses on technical innovation and research initiatives. They work on cutting-edge projects, explore new technologies, and contribute to the advancement of computing knowledge. Their work helps position NSU ACM Student Chapter as a leader in technical innovation and provides valuable learning opportunities for members interested in research and development.",
    color: "from-green-500 to-emerald-500",
    icon: null,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    coordinators: [
      { name: "Al Mustafiz Bappy", image: "/teams/coordinators/R&D/Al_Mustafiz_Bappy.webp" },
      { name: "Fatema Tabassum Elma", image: "/teams/coordinators/R&D/Fatema_Tabassum_Elma.webp" },
      { name: "Saif Mohammed", image: "/teams/coordinators/R&D/Saif_Mohammed.webp" },
    ],
    moderators: [
      { name: "Arefin Amin", image: "/teams/moderators/Research/Arefin_Amin.webp" },
      { name: "Hossain Ahmmed Taufiq", image: "/teams/moderators/Research/Hossain_Ahmmed_Taufiq.webp" },
    ],
  },
  "cultural-group": {
    name: "Cultural Group",
    description: "Cultural events and activities",
    detailedDescription: "The Cultural Group organizes and manages cultural events and activities that celebrate diversity and creativity. They plan cultural programs, performances, and activities that bring members together and create a vibrant, inclusive community. Their work ensures that NSU ACM Student Chapter is not just about technology, but also about building a strong, culturally rich community.",
    color: "from-yellow-500 to-orange-500",
    icon: null,
    gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
    coordinators: [
      { name: "Humayra Rahman Nipa", image: "/teams/coordinators/Cultural/Humayra_Rahman_Nipa.webp" },
      { name: "Sheikh Musfika Lowrin", image: "/teams/coordinators/Cultural/Sheikh_Musfika_Lowrin.webp" },
      { name: "Saif Ahmed", image: "/teams/coordinators/Cultural/Saif_Ahmed.webp" },
      { name: "Shafaat Bin Zaman", image: "/teams/coordinators/Cultural/Shafaat_Bin_Zaman.webp" },
    ],
    moderators: [
      { name: "Raisa Zahin", image: "/teams/moderators/Cultural/raisa_zahin.webp" },
      { name: "Jukta Bhowmik", image: "/teams/moderators/Cultural/Jukta_Bhowmik.webp" },
    ],
  },
  "media-documentation-group": {
    name: "Media and Documentation Group",
    description: "Event documentation and media production",
    detailedDescription: "The Media and Documentation Group captures and documents all chapter events and activities. They create high-quality photos and videos that showcase the chapter's work, preserve memories, and create promotional content. Their visual storytelling skills help communicate the impact and value of NSU ACM Student Chapter's activities to a wider audience.",
    color: "from-cyan-500 to-blue-500",
    icon: null,
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    coordinators: [
      { name: "Khondker Tamzidur Rahman", image: "/teams/coordinators/M&D/Khondker_Tamzidur_Rahman.webp" },
      { name: "Albid Nawar", image: "/teams/coordinators/M&D/Albid_Nawar.webp" },
    ],
  },
};

function TeamMemberCard({ member, index, gradient, borderColor }: { member: TeamMember; index: number; gradient: string; borderColor: string }) {
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
      <div className={`relative bg-white/5 backdrop-blur-xl border-2 ${borderColor} rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col items-center shadow-lg transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Image with Frame - Responsive Size matching chapter officials */}
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
            <div className={`px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r ${gradient} backdrop-blur-sm border border-white/20 rounded-full`}>
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
  
  switch (slug) {
    case "team-corporate":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="corporateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Handshake/Business Icon */}
          <circle cx="200" cy="150" r="120" fill="url(#corporateGrad)" opacity="0.2" />
          <path d="M150 120 L180 150 L150 180" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={`text-emerald-400`} fill="none" />
          <path d="M250 120 L220 150 L250 180" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={`text-teal-400`} fill="none" />
          <rect x="140" y="140" width="120" height="20" rx="10" fill="url(#corporateGrad)" />
          <circle cx="170" cy="150" r="8" fill="currentColor" className={`text-emerald-400`} />
          <circle cx="230" cy="150" r="8" fill="currentColor" className={`text-teal-400`} />
        </svg>
      );
    
    case "team-promotions":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="promoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Design/Palette Icon */}
          <circle cx="200" cy="150" r="100" fill="url(#promoGrad)" opacity="0.2" />
          <path d="M120 150 Q200 100 280 150 Q200 200 120 150" fill="url(#promoGrad)" opacity="0.4" />
          <circle cx="160" cy="130" r="15" fill="#3b82f6" opacity="0.6" />
          <circle cx="200" cy="120" r="15" fill="#06b6d4" opacity="0.6" />
          <circle cx="240" cy="130" r="15" fill="#8b5cf6" opacity="0.6" />
          <rect x="150" y="160" width="100" height="40" rx="5" fill="url(#promoGrad)" opacity="0.3" />
        </svg>
      );
    
    case "team-provision":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="provisionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Event/Organization Icon */}
          <circle cx="200" cy="150" r="110" fill="url(#provisionGrad)" opacity="0.2" />
          <rect x="130" y="100" width="140" height="100" rx="10" fill="url(#provisionGrad)" opacity="0.3" />
          <circle cx="160" cy="130" r="8" fill="currentColor" className={`text-orange-400`} />
          <circle cx="200" cy="130" r="8" fill="currentColor" className={`text-red-400`} />
          <circle cx="240" cy="130" r="8" fill="currentColor" className={`text-pink-400`} />
          <rect x="140" y="150" width="120" height="4" rx="2" fill="url(#provisionGrad)" />
          <rect x="140" y="165" width="100" height="4" rx="2" fill="url(#provisionGrad)" />
          <rect x="140" y="180" width="110" height="4" rx="2" fill="url(#provisionGrad)" />
        </svg>
      );
    
    case "team-publications":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Writing/Publication Icon */}
          <circle cx="200" cy="150" r="110" fill="url(#pubGrad)" opacity="0.2" />
          <rect x="130" y="100" width="140" height="100" rx="5" fill="url(#pubGrad)" opacity="0.3" />
          <line x1="150" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="3" className={`text-purple-400`} />
          <line x1="150" y1="150" x2="250" y2="150" stroke="currentColor" strokeWidth="3" className={`text-pink-400`} />
          <line x1="150" y1="170" x2="220" y2="170" stroke="currentColor" strokeWidth="3" className={`text-rose-400`} />
          <circle cx="160" cy="120" r="5" fill="currentColor" className={`text-purple-400`} />
        </svg>
      );
    
    case "web-group":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Web/Network Icon */}
          <circle cx="200" cy="150" r="100" fill="url(#webGrad)" opacity="0.2" />
          <circle cx="200" cy="150" r="60" stroke="currentColor" strokeWidth="2" className={`text-indigo-400`} fill="none" />
          <circle cx="200" cy="150" r="40" stroke="currentColor" strokeWidth="2" className={`text-purple-400`} fill="none" />
          <circle cx="200" cy="150" r="20" fill="url(#webGrad)" />
          <line x1="200" y1="50" x2="200" y2="90" stroke="currentColor" strokeWidth="2" className={`text-indigo-400`} />
          <line x1="200" y1="210" x2="200" y2="250" stroke="currentColor" strokeWidth="2" className={`text-indigo-400`} />
          <line x1="50" y1="150" x2="90" y2="150" stroke="currentColor" strokeWidth="2" className={`text-purple-400`} />
          <line x1="310" y1="150" x2="350" y2="150" stroke="currentColor" strokeWidth="2" className={`text-purple-400`} />
        </svg>
      );
    
    case "admin-group":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="adminGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Admin/Clipboard Icon */}
          <circle cx="200" cy="150" r="100" fill="url(#adminGrad)" opacity="0.2" />
          <rect x="150" y="100" width="100" height="120" rx="5" fill="url(#adminGrad)" opacity="0.3" />
          <rect x="160" y="110" width="80" height="15" rx="2" fill="currentColor" className={`text-slate-400`} opacity="0.5" />
          <line x1="170" y1="140" x2="230" y2="140" stroke="currentColor" strokeWidth="2" className={`text-slate-400`} />
          <line x1="170" y1="160" x2="230" y2="160" stroke="currentColor" strokeWidth="2" className={`text-gray-400`} />
          <line x1="170" y1="180" x2="210" y2="180" stroke="currentColor" strokeWidth="2" className={`text-slate-400`} />
          <circle cx="165" cy="200" r="3" fill="currentColor" className={`text-slate-400`} />
          <circle cx="200" cy="200" r="3" fill="currentColor" className={`text-gray-400`} />
        </svg>
      );
    
    case "design-decor-group":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Design/Decor Icon */}
          <circle cx="200" cy="150" r="100" fill="url(#designGrad)" opacity="0.2" />
          <rect x="130" y="100" width="140" height="100" rx="10" fill="url(#designGrad)" opacity="0.3" />
          <circle cx="160" cy="130" r="12" fill="#ec4899" opacity="0.6" />
          <circle cx="200" cy="120" r="12" fill="#f43f5e" opacity="0.6" />
          <circle cx="240" cy="130" r="12" fill="#fb7185" opacity="0.6" />
          <path d="M140 160 Q200 140 260 160" stroke="currentColor" strokeWidth="3" className={`text-pink-400`} fill="none" />
          <rect x="150" y="180" width="100" height="15" rx="3" fill="url(#designGrad)" opacity="0.4" />
        </svg>
      );
    
    case "research-development-group":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Research/Innovation Icon */}
          <circle cx="200" cy="150" r="100" fill="url(#rdGrad)" opacity="0.2" />
          <circle cx="200" cy="150" r="50" stroke="currentColor" strokeWidth="3" className={`text-green-400`} fill="none" />
          <path d="M180 130 L200 110 L220 130" stroke="currentColor" strokeWidth="3" className={`text-emerald-400`} fill="none" />
          <circle cx="200" cy="150" r="8" fill="url(#rdGrad)" />
          <line x1="200" y1="158" x2="200" y2="200" stroke="currentColor" strokeWidth="3" className={`text-green-400`} />
          <line x1="150" y1="150" x2="120" y2="150" stroke="currentColor" strokeWidth="2" className={`text-emerald-400`} />
          <line x1="250" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="2" className={`text-emerald-400`} />
        </svg>
      );
    
    case "cultural-group":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="culturalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Cultural/Performance Icon */}
          <circle cx="200" cy="150" r="100" fill="url(#culturalGrad)" opacity="0.2" />
          <path d="M150 200 Q200 100 250 200" stroke="currentColor" strokeWidth="4" className={`text-yellow-400`} fill="none" />
          <circle cx="180" cy="160" r="8" fill="currentColor" className={`text-yellow-400`} />
          <circle cx="200" cy="150" r="8" fill="currentColor" className={`text-orange-400`} />
          <circle cx="220" cy="160" r="8" fill="currentColor" className={`text-yellow-400`} />
          <rect x="170" y="180" width="60" height="30" rx="5" fill="url(#culturalGrad)" opacity="0.4" />
        </svg>
      );
    
    case "media-documentation-group":
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="photoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Camera/Photography Icon */}
          <circle cx="200" cy="150" r="100" fill="url(#photoGrad)" opacity="0.2" />
          <rect x="140" y="120" width="120" height="80" rx="10" fill="url(#photoGrad)" opacity="0.3" />
          <circle cx="200" cy="160" r="25" stroke="currentColor" strokeWidth="3" className={`text-cyan-400`} fill="none" />
          <circle cx="200" cy="160" r="15" fill="currentColor" className={`text-blue-400`} opacity="0.3" />
          <rect x="180" y="200" width="40" height="8" rx="2" fill="url(#photoGrad)" />
          <circle cx="170" cy="130" r="5" fill="currentColor" className={`text-cyan-400`} />
        </svg>
      );
    
    default:
      return (
        <svg className={svgClass} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="100" fill="currentColor" className={`text-blue-400`} opacity="0.1" />
        </svg>
      );
  }
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
    <section ref={ref} className={`mb-8 sm:mb-12 md:mb-16 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-out`}>
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 px-4">
          <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {title}
          </span>
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

export default function TeamDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  // Handle both Promise and direct params
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const team = teamsData[resolvedParams.slug];

  if (!team) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20 md:pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Team Not Found</h1>
          <Link href="/our-team" className="text-blue-400 hover:text-blue-300">
            Return to Our Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Back Button */}
        <Link
          href="/our-team"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 sm:mb-8 transition-colors duration-300 group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm sm:text-base">Back to Our Team</span>
        </Link>

        {/* Team Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${team.color} bg-clip-text text-transparent`}>
            {team.name}
          </h1>
          <div className={`w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r ${team.color} mx-auto rounded-full mb-4 sm:mb-6`}></div>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            {team.description}
          </p>
        </div>

        {/* Team Description with Unique SVG */}
        <div className={`relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 md:mb-16 overflow-hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center relative z-10">
            {/* Content - Left side on large, top on small */}
            <div className="order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                About <span className={`bg-gradient-to-r ${team.color} bg-clip-text text-transparent`}>{team.name}</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {team.detailedDescription}
              </p>
            </div>

            {/* SVG Logo - Right side on large, below on small */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <TeamSVG slug={resolvedParams.slug} color={team.color} />
            </div>
          </div>
        </div>

        {/* Team Members Sections */}
        {team.subExecutives && (
          <MemberSection title="Sub-Executives" members={team.subExecutives} color={team.color} />
        )}
        {team.coordinators && (
          <MemberSection title="Coordinators" members={team.coordinators} color={team.color} />
        )}
        {team.incharges && (
          <MemberSection title="Incharges" members={team.incharges} color={team.color} />
        )}
        {team.moderators && (
          <MemberSection title="Moderators" members={team.moderators} color={team.color} />
        )}
      </div>
    </div>
  );
}

