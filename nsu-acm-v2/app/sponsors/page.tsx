"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface SponsorSection {
  title: string;
  date: string;
  sponsors: string[];
}

export default function SponsorsPage() {
  const sponsorSections: SponsorSection[] = [
    {
      title: "NSU Capstone Innovation Challenge",
      date: "April, 2017",
      sponsors: [
        "abcradio.png",
        "thedailystar.png",
        "jugantor.png",
        "jamuna.png",
        "shout.png",
        "jagonews24.png",
      ],
    },
    {
      title: "Innovation Challenge",
      date: "August, 2017",
      sponsors: [
        "jamuna.png",
        "radiodhol.png",
        "shout.png",
      ],
    },
    {
      title: "Innovation Challenge Season 3 Idea Generation",
      date: "October, 2017",
      sponsors: [
        "BIF-Logo.png",
        "foorti.png",
        "dailysun.png",
        "charismatic.png",
        "studentbd24.png",
      ],
    },
    {
      title: "Innovation Challenge Season 3",
      date: "December, 2017",
      sponsors: [
        "gpaccelerator.jpg",
        "dailysun.png",
      ],
    },
    {
      title: "Technovation",
      date: "February, 2018",
      sponsors: [
        "pfec.png",
        "sibl-logo.png",
        "jamuna.png",
        "dailysun.png",
        "asus.png",
        "infolink.png",
        "ticketchai.png",
        "foorti.png",
      ],
    },
    {
      title: "Innovation Challenge Season 4",
      date: "April, 2018",
      sponsors: [
        "gpaccelerator.jpg",
        "ipe.png",
        "torongo.png",
        "news24.png",
        "kalerkontho.png",
        "foorti.png",
      ],
    },
    {
      title: "HackNSU",
      date: "April, 2019",
      sponsors: [
        "gic.png",
        "brother.png",
        "airposted.png",
        "banglanews.png",
        "ujalapaints.png",
        "dailysun.png",
        "infolink.png",
      ],
    },
    {
      title: "Innovation Challenge Season 7",
      date: "April, 2019",
      sponsors: [
        "bkash.png",
      ],
    },
    {
      title: "Innovation Challenge Season 8",
      date: "August, 2019",
      sponsors: [
        "shopnshipbd.png",
        "banglalink.png",
        "kalerkontho.png",
        "weddingeye.png",
        "satv.png",
      ],
    },
    {
      title: "Technovation 2.0",
      date: "November, 2019",
      sponsors: [
        "indexgrp.png",
        "islamicbank.png",
        "71.png",
        "foorti.png",
        "kalerkontho.png",
        "mtndew.png",
        "dotNet.png",
        "weddingdream.png",
        "floraltd.png",
      ],
    },
    {
      title: "HackNSU Season 2",
      date: "September, 2021",
      sponsors: [
        "shomoy.png",
        "bohubrihi.png",
      ],
    },
    {
      title: "Our Previous Workshop Partners",
      date: "",
      sponsors: [
        "creativeit.png",
        "shikhbeshobai.png",
        "rotor-solution.png",
        "robodoc.png",
        "AT logo.jpg",
      ],
    },
  ];

  const SponsorSection = ({ section, index }: { section: SponsorSection; index: number }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <section
        ref={ref}
        className={`mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-out`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 px-1">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight break-words hyphens-auto">
            {section.title}
          </h2>
          {section.date && (
            <p className="text-blue-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-mono opacity-90 mt-1 sm:mt-2">
              {section.date}
            </p>
          )}
          <div className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 sm:mt-3 md:mt-4 rounded-full"></div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 px-1">
          {section.sponsors.map((sponsor, idx) => {
            const imagePath = `/sponsors/${sponsor}`;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-square bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 border border-white/10 hover:border-blue-500/50 active:border-blue-500/70 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-blue-500/20">
                  {/* Glow Effect */}
                  {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl blur-xl -z-10"></div>
                  )}

                  {/* Sponsor Logo */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={imagePath}
                      alt={sponsor.replace(/\.(png|jpg|jpeg)$/i, "")}
                      fill
                      className="object-contain p-0.5 sm:p-1 md:p-1.5 lg:p-2 transform group-hover:scale-110 group-active:scale-95 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Our Sponsors
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              SPONSORS
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2">
            Our Previous <span className="text-blue-400 font-semibold">Sponsors & Partners</span>
          </p>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Sponsor Sections */}
        <div>
          {sponsorSections.map((section, index) => (
            <SponsorSection key={index} section={section} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-32 text-center px-2">
          <div className="relative inline-block w-full max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl md:rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight px-1">
                Interested in Becoming a Sponsor?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto px-1">
                Join our community of partners and help us create amazing events and opportunities for students
              </p>
              <button className="px-5 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 text-white font-semibold text-xs sm:text-sm md:text-base rounded-lg sm:rounded-xl md:rounded-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
