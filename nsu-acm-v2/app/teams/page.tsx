"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState } from "react";

// Lazy-loaded team member component with Intersection Observer
function TeamMember({ name, designation, image, index }: { name: string; designation?: string; image: string; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  });

  const [imageError, setImageError] = useState(false);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 mb-4 group">
        {!imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg border-2 border-[#9747FF] group-hover:border-[#2F92D0] transition-all duration-300 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-lg border-2 border-[#9747FF] bg-slate-700/50 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Image not found</span>
          </div>
        )}
      </div>
      <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-white mt-2">{name}</h3>
      {designation && (
        <p className="text-[10px] md:text-sm text-slate-400 italic mt-1">{designation}</p>
      )}
    </div>
  );
}

// Team section component with sub-teams
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="mb-16 md:mb-24">
      <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        {title}
      </h2>
      
      {subTeams.map((subTeam, subIndex) => (
        <div key={subIndex} className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 md:mb-12 text-white/90">
            {subTeam.subTitle}
          </h3>
          <div className={`grid ${subTeam.columns || "grid-cols-2 md:grid-cols-3"} gap-6 md:gap-8`}>
            {subTeam.members.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default function TeamsPage() {
  // Web Contributors
  const webContributors = [
    { name: "Ahmed Kiser", designation: "Team Leader", image: "/teams/web-contributors/kaiser.jpg" },
    { name: "Sheaikh Nazibur Rahman", designation: "Coordinator", image: "/teams/web-contributors/Nazibur.jpg" },
    { name: "Abdul Alim Rakib", designation: "Moderator", image: "/teams/web-contributors/Alim.jpg" },
    { name: "Aminul Islam", designation: "Member", image: "/teams/web-contributors/img-1.jpg" },
    { name: "Arefin Amin", designation: "Member", image: "/teams/web-contributors/img-2.jpg" },
    { name: "Sazid Hasan Shafin", designation: "Member", image: "/teams/web-contributors/img-4.jpg" },
    { name: "Aisha", designation: "Member", image: "/teams/web-contributors/img-5.png" },
    { name: "Tahminuzzaman Nahian", designation: "Member", image: "/teams/web-contributors/img-6.jpg" },
    { name: "Shakia Tasnim", designation: "Member", image: "/teams/web-contributors/shakia.jpg" },
    { name: "Rummamil Abrar Ifty", designation: "Member", image: "/teams/web-contributors/rummamil.jpg" },
  ];

  // Sub-Executives
  const subExecutives = [
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
  ];

  // Coordinators
  const coordinators = [
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
  ];

  // Incharges
  const incharges = [
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
  ];

  // Moderators
  const moderators = [
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
  ];

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Our Teams
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            OUR TEAMS
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Meet the dedicated members driving innovation and excellence
          </p>
        </div>

        {/* Web Contributors Section */}
        <TeamSection 
          title="WEB CONTRIBUTORS" 
          subTeams={[{ subTitle: "", members: webContributors, columns: "grid-cols-2 md:grid-cols-3" }]} 
        />

        {/* Sub-Executives Section */}
        <TeamSection title="SUB-EXECUTIVES" subTeams={subExecutives} />

        {/* Coordinators Section */}
        <TeamSection title="COORDINATORS" subTeams={coordinators} />

        {/* Incharges Section */}
        <TeamSection title="INCHARGES" subTeams={incharges} />

        {/* Moderators Section */}
        <TeamSection title="MODERATORS" subTeams={moderators} />

        {/* CTA Section */}
        <div className="text-center mt-20">
          <p className="text-white/60 mb-6 text-lg">Want to join our team?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}
