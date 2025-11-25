"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

// Professional team member card - ExecutivePanel style, no animations
function TeamMember({ name, designation, image, index, gradient, borderColor }: { 
  name: string; 
  designation?: string; 
  image: string; 
  index: number;
  gradient: string;
  borderColor: string;
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative w-full">
      {/* Card Container - Same size for all, responsive padding */}
      <div className={`relative bg-white/5 backdrop-blur-xl border-2 ${borderColor} rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col items-center shadow-lg`}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Image with Frame - Responsive Size */}
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
                      src={image}
                      alt={name}
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

          {/* Name - Responsive text and min-height */}
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white mb-1 sm:mb-2 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center px-1">
            {name}
          </h3>

          {/* Designation Badge - Responsive padding */}
          {designation && (
            <div className={`px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r ${gradient} backdrop-blur-sm border border-white/20 rounded-full`}>
              <p className="text-[10px] sm:text-xs md:text-sm text-white font-medium whitespace-nowrap">
                {designation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Professional Team Section Component
function TeamSection({ 
  title, 
  subTeams 
}: { 
  title: string; 
  subTeams: Array<{ 
    subTitle: string; 
    members: Array<{ name: string; designation?: string; image: string }>; 
    columns?: string;
  }>; 
}) {
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

  return (
    <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      {/* Section Title - Responsive */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 px-4">
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      
      {subTeams.map((subTeam, subIndex) => (
        <div key={subIndex} className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Sub-team Title - Responsive */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-2">
              {subTeam.subTitle}
            </h3>
          </div>

          {/* Members Grid - Responsive gaps and columns */}
          <div className={`grid ${subTeam.columns || "grid-cols-2 md:grid-cols-3"} gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0`}>
            {subTeam.members.map((member, index) => {
              const gradientIndex = index % gradients.length;
              return (
                <TeamMember 
                  key={`${subIndex}-${index}`} 
                  {...member} 
                  index={index}
                  gradient={gradients[gradientIndex]}
                  borderColor={borderColors[gradientIndex]}
                />
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default function ChapterOfficialsPage() {
  // Memoize team data for performance
  const subExecutives = useMemo(() => [
    {
      subTitle: "Team Corporate",
      members: [
        { name: "Sudipta Karmaker", image: "/teams/sub-executives/Corporate/Sudipta_Karmaker.webp" },
        { name: "Atahar Hossain", image: "/teams/sub-executives/Corporate/Atahar_Hossain.webp" },
        { name: "Rayta Binte Noor", image: "/teams/sub-executives/Corporate/Rayta_Binte_Noor.webp" },
        { name: "Augustine Gomes", image: "/teams/sub-executives/Corporate/Augustine_Gomes.webp" },
      ],
      columns: "grid-cols-2 md:grid-cols-4",
    },
    {
      subTitle: "Team Promotions",
      members: [
        { name: "Arefin Amin", image: "/teams/sub-executives/Promotion/Arefin_Amin.webp" },
        { name: "Khondker Tamzidur Rahman", image: "/teams/sub-executives/Promotion/Khondker_Tamzidur_Rahman.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
    {
      subTitle: "Team Provision",
      members: [
        { name: "Arafat Rahat Efty", image: "/teams/sub-executives/Provision/Arafat_Rahat_Efty.webp" },
        { name: "ASM Tayeeb", image: "/teams/sub-executives/Provision/ASM_Tayeeb.webp" },
        { name: "Sajid Rahman", image: "/teams/sub-executives/Provision/Sajid_Rahman_ACM.webp" },
        { name: "Adrito Bhuiyan", image: "/teams/sub-executives/Provision/Adrito_Bhuiyan.webp" },
        { name: "Ahmed As Sadik", image: "/teams/sub-executives/Provision/Ahmed_As_Sadik.webp" },
      ],
      columns: "grid-cols-2 md:grid-cols-3",
    },
    {
      subTitle: "Team Publications",
      members: [
        { name: "Nafisa Tabassum", image: "/teams/sub-executives/Publication/Nafisa_Tabassum.webp" },
        { name: "Raisa Zahin", image: "/teams/sub-executives/Publication/Raisa_Zahin.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
  ], []);

  const coordinators = useMemo(() => [
    {
      subTitle: "Web Group",
      members: [
        { name: "Arefin Amin", image: "/teams/coordinators/Web/Arefin_Amin.webp" },
        { name: "Hossain Ahmmed Taufiq", image: "/teams/coordinators/Web/Hossain_Ahmmed_Taufiq.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
    {
      subTitle: "Admin Group",
      members: [
        { name: "Shafaat Bin Zaman", image: "/teams/coordinators/Admin/Shafaat_Bin_Zaman.webp" },
        { name: "Adrito Bhuiyan", image: "/teams/coordinators/Admin/Adrito_Bhuiyan.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
    {
      subTitle: "Cultural Group",
      members: [
        { name: "Humayra Rahman Nipa", image: "/teams/coordinators/Cultural/Humayra_Rahman_Nipa.webp" },
        { name: "Sheikh Musfika Lowrin", image: "/teams/coordinators/Cultural/Sheikh_Musfika_Lowrin.webp" },
        { name: "Saif Ahmed", image: "/teams/coordinators/Cultural/Saif_Ahmed.webp" },
        { name: "Shafaat Bin Zaman", image: "/teams/coordinators/Cultural/Shafaat_Bin_Zaman.webp" },
      ],
      columns: "grid-cols-2 md:grid-cols-4",
    },
    {
      subTitle: "Design & Decor Group",
      members: [
        { name: "Rafia Ferdous Duti", image: "/teams/coordinators/Design/Rafia_Ferdous_Duti.webp" },
        { name: "Afia Zaheen", image: "/teams/coordinators/Design/Afia_Zaheen.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
    {
      subTitle: "Media & Documentation Group",
      members: [
        { name: "Khondker Tamzidur Rahman", image: "/teams/coordinators/M&D/Khondker_Tamzidur_Rahman.webp" },
        { name: "Albid Nawar", image: "/teams/coordinators/M&D/Albid_Nawar.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
    {
      subTitle: "Research & Development Group",
      members: [
        { name: "Al Mustafiz Bappy", image: "/teams/coordinators/R&D/Al_Mustafiz_Bappy.webp" },
        { name: "Fatema Tabassum Elma", image: "/teams/coordinators/R&D/Fatema_Tabassum_Elma.webp" },
        { name: "Saif Mohammed", image: "/teams/coordinators/R&D/Saif_Mohammed.webp" },
      ],
      columns: "grid-cols-2 md:grid-cols-3",
    },
  ], []);

  const incharges = useMemo(() => [
    {
      subTitle: "Team Corporate",
      members: [
        { name: "Anindo Kumar Biswas", image: "/teams/incharges/Corporate/Anindo_Kumar_Biswas.webp" },
        { name: "Al Mustafiz Bappy", image: "/teams/incharges/Corporate/Al_Mustafiz_Bappy.webp" },
        { name: "Arif Faysal Shakib", image: "/teams/incharges/Corporate/Arif_Faysal_Shakib.webp" },
      ],
      columns: "grid-cols-2 md:grid-cols-3",
    },
    {
      subTitle: "Team Promotions",
      members: [
        { name: "Shafin Raiyan", image: "/teams/incharges/Promotion/Shafin_Raiyan.webp" },
        { name: "Tahminuzzaman Nahian", image: "/teams/incharges/Promotion/Tahminuzzaman_Nahian.webp" },
        { name: "Syed Shadman Zahin", image: "/teams/incharges/Promotion/Syed_Shadman_Zahin.webp" },
        { name: "Aminul Islam", image: "/teams/incharges/Promotion/Aminul Islam.webp" },
        { name: "G. M. Siam", image: "/teams/incharges/Promotion/G._M._Siam.webp" },
      ],
      columns: "grid-cols-2 md:grid-cols-3",
    },
    {
      subTitle: "Team Provision",
      members: [
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
      columns: "grid-cols-2 md:grid-cols-3",
    },
    {
      subTitle: "Team Publications",
      members: [
        { name: "Tasmia Ferdous", image: "/teams/incharges/Publication/Tasmia_Ferdous.webp" },
        { name: "Ilhum Rahman Pushpita", image: "/teams/incharges/Publication/Ilhum_Rahman_Pushpita.webp" },
        { name: "Abdullah Nur Ifaz", image: "/teams/incharges/Publication/Abdullah_Nur_Ifaz.webp" },
        { name: "Aisha Naziha", image: "/teams/incharges/Publication/Aisha_Naziha.webp" },
      ],
      columns: "grid-cols-2 md:grid-cols-4",
    },
  ], []);

  const moderators = useMemo(() => [
    {
      subTitle: "Web Group",
      members: [
        { name: "Tahminuzzaman Nahian", image: "/teams/moderators/Web/Tahminuzzaman_Nahian.webp" },
        { name: "Saif Mohammed", image: "/teams/moderators/Web/Saif_Mohammed.webp" },
        { name: "Aisha Naziha", image: "/teams/moderators/Web/Aisha_Naziha.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-3",
    },
    {
      subTitle: "Admin Group",
      members: [
        { name: "Rodela Chowdhury", image: "/teams/moderators/Admin/Rodela_Chowdhury.webp" },
        { name: "Shabab Sadatain Jaffry", image: "/teams/moderators/Admin/Shabab_Sadatain_Jaffry.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
    {
      subTitle: "Cultural Group",
      members: [
        { name: "Raisa Zahin", image: "/teams/moderators/Cultural/raisa_zahin.webp" },
        { name: "Jukta Bhowmik", image: "/teams/moderators/Cultural/Jukta_Bhowmik.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
    {
      subTitle: "Design & Decor Group",
      members: [
        { name: "Esrat Smriti", image: "/teams/moderators/Design/Esrat_Smriti.webp" },
        { name: "Nafisa Tasneem", image: "/teams/moderators/Design/Nafisa_Tasneem.webp" },
        { name: "Raisa Zahin", image: "/teams/moderators/Design/raisa_zahin.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-3",
    },
    {
      subTitle: "Research & Development Group",
      members: [
        { name: "Arefin Amin", image: "/teams/moderators/Research/Arefin_Amin.webp" },
        { name: "Hossain Ahmmed Taufiq", image: "/teams/moderators/Research/Hossain_Ahmmed_Taufiq.webp" },
      ],
      columns: "grid-cols-1 md:grid-cols-2",
    },
  ], []);

  return (
    <div className="min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Professional Page Header - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              Chapter Officials
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 px-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              CHAPTER OFFICIALS
            </span>
          </h1>
          
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Meet the dedicated officials leading our chapter
          </p>
        </div>

        {/* Faculty Sponsor Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 px-4">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                FACULTY SPONSOR
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Faculty Sponsor - Centered */}
          <div className="flex justify-center px-2 sm:px-0">
            <TeamMember 
              name="Ms. Silvia Ahmed"
              designation="Faculty Sponsor"
              image="/executive-panel/FacultySponsor.webp"
              index={0}
              gradient="from-yellow-500/30 via-orange-500/30 to-red-500/30"
              borderColor="border-yellow-500/50"
            />
          </div>
        </div>

        {/* Executive Panel Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 px-4">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                EXECUTIVE PANEL
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Executive Panel Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
            {[
              { name: "MD. Saroar Mahmud", designation: "Chair", image: "/executive-panel/saroar.jpg", gradient: "from-blue-500/30 via-cyan-500/30 to-teal-500/30", borderColor: "border-blue-500/50" },
              { name: "Tamjidul Islam", designation: "Vice Chair", image: "/executive-panel/Tamjid.jpg", gradient: "from-purple-500/30 via-pink-500/30 to-rose-500/30", borderColor: "border-purple-500/50" },
              { name: "Md. Atikur Rahman Shafi", designation: "Secretary", image: "/executive-panel/Shafi.jpg", gradient: "from-green-500/30 via-emerald-500/30 to-teal-500/30", borderColor: "border-green-500/50" },
              { name: "Sajid Hasan Safin", designation: "Treasurer", image: "/executive-panel/Sajid Hasan Safin.webp", gradient: "from-indigo-500/30 via-blue-500/30 to-purple-500/30", borderColor: "border-indigo-500/50" },
              { name: "Noshin Nawar", designation: "Membership Chair", image: "/executive-panel/Noshin.JPG", gradient: "from-pink-500/30 via-rose-500/30 to-red-500/30", borderColor: "border-pink-500/50" },
              { name: "Mubashshira Kaisar", designation: "Webmaster", image: "/executive-panel/Mubashshira.png", gradient: "from-cyan-500/30 via-blue-500/30 to-indigo-500/30", borderColor: "border-cyan-500/50" },
            ].map((member, index) => (
              <TeamMember 
                key={index} 
                {...member} 
                index={index}
                gradient={member.gradient}
                borderColor={member.borderColor}
              />
            ))}
          </div>
        </div>

        {/* Team Sections */}
        <TeamSection title="SUB-EXECUTIVES" subTeams={subExecutives} />
        <TeamSection title="COORDINATORS" subTeams={coordinators} />
        <TeamSection title="INCHARGES" subTeams={incharges} />
        <TeamSection title="MODERATORS" subTeams={moderators} />
      </div>
    </div>
  );
}
