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

// Professional Year Section Component
function YearSection({ year, members }: { year: string; members: Array<{ name: string; designation?: string; image: string }> }) {
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
      {/* Year Title - Responsive */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            {year}
          </span>
        </h2>
        <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Members Grid - Responsive gaps */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
        {members.map((member, index) => {
          const gradientIndex = index % gradients.length;
          return (
            <TeamMember 
              key={index} 
              {...member} 
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

export default function ExChapterOfficialsPage() {
  // Memoize team data for performance
  const exOfficials2024 = useMemo(() => [
    { name: "Foyez Ahmed", designation: "Chair", image: "/teams/ex-chapter-officials/2024/Chair Foyez_Ahmed.png" },
    { name: "Ahmed Kiser", designation: "Vice Chair", image: "/teams/ex-chapter-officials/2024/Vice Chair Ahmed_Kiser.png" },
    { name: "Reem Gazi Mahmud Hossain", designation: "Secretary", image: "/teams/ex-chapter-officials/2024/Secretary Reem Gazi Mahmud Hossain.jpg" },
    { name: "Rasel Ahmed Raju", designation: "Treasurer", image: "/teams/ex-chapter-officials/2024/Treasurer Rasel Ahmed Raju.jpg" },
    { name: "Maimuna Hafsa", designation: "Membership Chair", image: "/teams/ex-chapter-officials/2024/Membership Chair Maimuna_Hafsa.JPG" },
    { name: "Mohammed", designation: "Webmaster", image: "/teams/ex-chapter-officials/2024/Webmaster Mohammed.jpg" },
  ], []);

  const exOfficials2023 = useMemo(() => [
    { name: "Md Saeem Hossain Shanto", designation: "Chair", image: "/teams/ex-chapter-officials/2023/Md Saeem Hossain Shanto.png" },
    { name: "Meherun Nessa Maria", designation: "Vice Chair", image: "/teams/ex-chapter-officials/2023/Meherun Nessa Maria.png" },
    { name: "Tahiat Hakim Himel", designation: "Secretary & Treasurer", image: "/teams/ex-chapter-officials/2023/Tahiat Hakim Himel.jpg" },
    { name: "Mrittika Sengupta", designation: "Membership Chair", image: "/teams/ex-chapter-officials/2023/Mrittika Sengupta.png" },
    { name: "Rawshan Tabbasum Etika", designation: "Webmaster", image: "/teams/ex-chapter-officials/2023/Rawshan Tabbasum Etika.png" },
  ], []);

  const exOfficials2022 = useMemo(() => [
    { name: "Abdullah Al Hasan Labib", designation: "Chair", image: "/teams/ex-chapter-officials/2022/Abdullah Al Hasan Labib (Chairman).jpg" },
    { name: "Md. Mashruf Ehsan", designation: "Vice Chair", image: "/teams/ex-chapter-officials/2022/Md. Mashruf Ehsan.jpg" },
    { name: "Md. Abdullah Al Sayed", designation: "Secretary", image: "/teams/ex-chapter-officials/2022/Md. Abdullah Al Sayed (Secretary).jpg" },
    { name: "Shafayet Rajit", designation: "Treasurer", image: "/teams/ex-chapter-officials/2022/ShafayetRajit.jpg" },
    { name: "Nazmoon Nahar Punom", designation: "Webmaster", image: "/teams/ex-chapter-officials/2022/Punom.jpg" },
  ], []);

  const exOfficials2021 = useMemo(() => [
    { name: "Afsana Chowdhury Reevu", designation: "Chair", image: "/teams/ex-chapter-officials/2021/AfsanaChowdhuryReevu_ChapterChair.jpg" },
    { name: "Sudipta Bhatta", designation: "Vice Chair", image: "/teams/ex-chapter-officials/2021/Sudipta Bhatta Vice Chair.jpg" },
    { name: "Hasibul Hassan", designation: "Secretary", image: "/teams/ex-chapter-officials/2021/Hasibul Hassan.jpg" },
    { name: "S.H.M.Ali Bin Rashid", designation: "Treasurer", image: "/teams/ex-chapter-officials/2021/S.H.M.Ali Bin Rashid.jpg" },
    { name: "Zakaria Mahamud Khan", designation: "Membership Chair", image: "/teams/ex-chapter-officials/2021/Zakaria Mahamud Khan.jpg" },
    { name: "Mahira Ibnath Joytu", designation: "Webmaster", image: "/teams/ex-chapter-officials/2021/Mahira Ibnath Joytu_Sub-Executive_O&L.jpg" },
  ], []);

  const exOfficials2020 = useMemo(() => [
    { name: "Sabbir Mollah", designation: "Chair", image: "/teams/ex-chapter-officials/2020/Sabbir Mollah.jpg" },
    { name: "Meherab Mamun Ratul", designation: "Vice Chair", image: "/teams/ex-chapter-officials/2020/Meherab Mamun Ratul.jpg" },
    { name: "Abdullah Al Rafi", designation: "Secretary", image: "/teams/ex-chapter-officials/2020/Abdullah_Al_Rafi.jpg" },
    { name: "Sayem Ahmed", designation: "Treasurer", image: "/teams/ex-chapter-officials/2020/Sayem.jpg" },
    { name: "Kazi Ayesha Rahman", designation: "Membership Chair", image: "/teams/ex-chapter-officials/2020/Kazi Ayesha Rahman.jpg" },
    { name: "Shadab Hafiz Choudhury", designation: "Webmaster", image: "/teams/ex-chapter-officials/2020/Shadab Hafiz Choudhury Webmaster.jpg" },
  ], []);

  const exOfficials2019 = useMemo(() => [
    { name: "Mahbuba Tasmin", designation: "Chair", image: "/teams/ex-chapter-officials/2019/Mahbuba Tasmin.jpg" },
    { name: "Taniz Mahmud Fahim", designation: "Vice Chair", image: "/teams/ex-chapter-officials/2019/Taniz Mahmud Fahim_Membership Chair.jpg" },
    { name: "Md. Mahidur Rahman", designation: "Secretary", image: "/teams/ex-chapter-officials/2019/Mahidur Rahman.jpg" },
    { name: "Mostafa Didar", designation: "Treasurer", image: "/teams/ex-chapter-officials/2019/Mostafa Didar.jpg" },
    { name: "Sabbir Mollah", designation: "Webmaster", image: "/teams/ex-chapter-officials/2019/Sabbir Mollah.jpg" },
  ], []);

  const exOfficials2018 = useMemo(() => [
    { name: "Aziz Arman", designation: "Chair", image: "/teams/ex-chapter-officials/2018/Aziz Arman_Chair.jpg" },
    { name: "Asif Ahmed Niloy", designation: "Vice Chair", image: "/teams/ex-chapter-officials/2018/Asif Ahmed Neloy_Vice Chair.jpg" },
    { name: "Muhammad Shafayat Oshman", designation: "Secretary", image: "/teams/ex-chapter-officials/2018/Muhammad Shafayat Oshman_General Secretary.JPG" },
    { name: "Badiuzzaman Pranto", designation: "Treasurer", image: "/teams/ex-chapter-officials/2018/Badiuzzaman Pranto_Treasurer.jpg" },
    { name: "Taniz Mahmud Fahim", designation: "Membership Chair", image: "/teams/ex-chapter-officials/2018/Taniz Mahmud Fahim_Membership Chair.JPG" },
  ], []);

  const exOfficials2017 = useMemo(() => [
    { name: "Aziz Arman", designation: "Chair", image: "/teams/ex-chapter-officials/2017/Aziz Arman_Chair.jpg" },
    { name: "Shawon Ashraf", designation: "Vice Chair", image: "/teams/ex-chapter-officials/2017/Shawon Ashraf_Outgoing VC.jpg" },
    { name: "Asif Ahmed Neloy", designation: "Secretary", image: "/teams/ex-chapter-officials/2017/Asif Ahmed Neloy_Vice Chair.jpg" },
    { name: "Abdullah Al Noman", designation: "Treasurer", image: "/teams/ex-chapter-officials/2017/Abdullah Al Noman_Outgoing Treasurer.jpg" },
  ], []);

  return (
    <div className="min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Professional Page Header - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              Former Officials
            </span>
          </div>
          
          
          
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Honoring the past leaders who shaped our chapter
          </p>
        </div>

        {/* Ex-Faculty Sponsor Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                EX-FACULTY SPONSOR
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Ex-Faculty Sponsor Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
            {[
              { name: "DR. TANZILUR RAHMAN (TnR)", designation: "(2021-2023)", image: "/teams/ex-faculty/Dr Tanzilur Rahman.jpg", gradient: "from-yellow-500/30 via-orange-500/30 to-red-500/30", borderColor: "border-yellow-500/50" },
              { name: "Mr. Syed Athar Bin Amir (saa3)", designation: "(2018-2021)", image: "/teams/ex-faculty/syed athar bin amir.jpg", gradient: "from-blue-500/30 via-cyan-500/30 to-teal-500/30", borderColor: "border-blue-500/50" },
              { name: "Mr Zunayeed Bin Zahir (ZbZ)", designation: "(2017-2018)", image: "/teams/ex-faculty/Mr Zunayeed Bin Zahir (ZbZ).jpg", gradient: "from-purple-500/30 via-pink-500/30 to-rose-500/30", borderColor: "border-purple-500/50" },
              { name: "Dr. Shazzad Hossain (SZZ)", designation: "(2016-2017) & (2023-2024)", image: "/teams/ex-faculty/Dr.Shazzad Hosain.jpg", gradient: "from-green-500/30 via-emerald-500/30 to-teal-500/30", borderColor: "border-green-500/50" },
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

        {/* Year Sections */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 px-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              FORMER CHAPTER OFFICIALS
            </span>
          </h1>
        <YearSection year="2024" members={exOfficials2024} />
        <YearSection year="2023" members={exOfficials2023} />
        <YearSection year="2022" members={exOfficials2022} />
        <YearSection year="2021" members={exOfficials2021} />
        <YearSection year="2020" members={exOfficials2020} />
        <YearSection year="2019" members={exOfficials2019} />
        <YearSection year="2018" members={exOfficials2018} />
        <YearSection year="2017" members={exOfficials2017} />
      </div>
    </div>
  );
}
