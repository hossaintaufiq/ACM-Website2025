"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }
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

  const aboutImages = [
    "/about/aboutacm.jpg",
    "/about/aboutacm2.jpg",
    "/about/aboutacm3.jpg",
    "/about/aboutacm4.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const mainTeams = [
    "Provision",
    "Promotion",
    "Publication",
    "Corporation",
  ];

  const floatingTeams = [
    "Web Group",
    "Admin Group",
    "Design & Decor Group",
    "Research & Development Group",
    "Cultural Group",
    "Photography & Cinematography Group",
  ];

  const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 px-2 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-out`}
      >
        <div className="inline-block mb-2 sm:mb-3 md:mb-4">
          <span className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
            {subtitle || "About Us"}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent break-words">
            {title}
          </span>
        </h2>
        <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
    );
  };

  const TeamCard = ({ name, index }: { name: string; index: number }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`group relative ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-500 ease-out`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="relative h-full rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-5 md:p-6 lg:p-8 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white text-center break-words">
            {name}
          </p>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-transparent group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-transparent rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-300"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  NSU ACM Chapter
                </span>
              </h1>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-4 sm:mb-6">
                Working in NSU since 2017
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6">
                NSU ACM Student Chapter is one of the <span className="text-blue-400 font-semibold">680 chapters</span> around the world and was the <span className="text-purple-400 font-semibold">first student chapter</span> of the Association for Computing Machineries in Bangladesh. It was officially chartered on <span className="text-blue-400 font-semibold">17th January 2017</span>.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                NSU ACM SC serves the wide scope of ACM to advance computing as a science and profession. One of the signature events of NSU ACM SC is <span className="text-blue-400 font-semibold">Technovation</span>, which contains versatile competitions for students such as Hackathon, Mobile, and App contest, Megabots Clash, Gaming contest, Robo F1, IT Business Idea Challenge, and so on. Technovation may be considered as a spectacular congregation of incredibly brilliant young minds.
              </p>
            </div>
            <div className="order-1 md:order-2 relative w-full">
              {isMounted && (
                <div
                  ref={cardRef}
                  className="relative group w-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-0.5 sm:p-1 backdrop-blur-sm w-full">
                    <div className="bg-slate-900 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden about-slider w-full">
                      <Slider {...sliderSettings}>
                        {aboutImages.map((img, index) => (
                          <div key={index} className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-square lg:aspect-[4/3]">
                            <Image
                              src={img}
                              alt={`About ACM ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-110"
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                              priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About ACM Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeader title="ABOUT ACM" />
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                The Association for Computing Machinery (ACM) is a US-based international learned society for computing. It was founded in <span className="text-blue-400 font-semibold">1947</span> and is the world's <span className="text-purple-400 font-semibold">largest scientific and educational computing society</span>. The ACM is a non-profit professional membership group, claiming nearly <span className="text-blue-400 font-semibold">100,000 students and professional members</span> as of 2019. Its headquarters are in 1601 Broadway, Times Square, New York City.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                The ACM is an umbrella organization for academic and scholarly interests in computer science (informatics). Its motto is <span className="text-blue-400 font-semibold italic">"Advancing Computing as a Science & Profession."</span>
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                ACM strengthens the profession's collective voice through strong leadership, promoting the highest standards, and recognizing technical excellence. ACM supports its members' professional growth by providing opportunities for life-long learning, career development, and professional networking.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                ACM is organized into over <span className="text-blue-400 font-semibold">171 local chapters</span> and <span className="text-purple-400 font-semibold">37 Special Interest Groups (SIGs)</span>, through which it conducts most of its activities. Additionally, there are over <span className="text-blue-400 font-semibold">500 college and university chapters</span>. The first student chapter was founded in 1961 at the University of Louisiana at Lafayette.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                ACM publishes over <span className="text-blue-400 font-semibold">50 journals</span>, including the prestigious Journal of the ACM, and two general magazines for computer professionals, Communications of the ACM. ACM desires to provide an immersive student experience, with an educational program that is associated with the business continuously. ACM targets to reinforce confidence and mindfulness—giving students the necessary abilities to perceive and accept opportunities.
              </p>
              <button className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 px-5 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 text-white font-semibold text-xs sm:text-sm md:text-base rounded-lg sm:rounded-xl md:rounded-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 w-full sm:w-auto">
                By Laws
              </button>
            </div>
            <div className="hidden md:flex relative justify-center items-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <Image
                  src="/about/logo.png"
                  alt="ACM Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 256px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is NSU ACM SC Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeader title="WHAT IS NSU ACM SC?" />
          
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                One of the signature events of NSU ACM SC is <span className="text-blue-400 font-semibold">Technovation</span>, which contains versatile competitions for students such as Hackathon, Mobile, and App contest, Megabots Clash, Gaming contest, Robo F1, IT Business Idea Challenge, and so on. Technovation may be considered as a spectacular congregation of incredibly brilliant young minds.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                There is the signature Hackathon of NSU ACM SC, <span className="text-purple-400 font-semibold">Hack-NSU</span>, which is an excellent opportunity for students and tech enthusiasts alike. It is held at North South University premises, and the program attracts students from various universities all over the country. The event is a part of ACM-SC's goal to promote and develop fresh minds' ideas and thoughts and give those ideas a new dimension.
              </p>
            </div>
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group mb-4 sm:mb-0">
              <Image
                src="/about/img-2.PNG"
                alt="NSU ACM Event"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                Another well-known event of ACM is the <span className="text-blue-400 font-semibold">NSU ACM SC Innovation Challenge</span>, where students in their final year get the opportunity to showcase the project they had built over 8 months using their ideas and skills. In alignment with the Department of Electrical and Computer Engineering of North South University, it aims to assist members of the university community in excelling in computer engineering and computer science.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                The organization also puts in strenuous efforts in supporting the cause of North South University to produce <span className="text-purple-400 font-semibold">world-class graduates</span>.
              </p>
            </div>
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group">
              <Image
                src="/about/img-3.PNG"
                alt="NSU ACM Innovation Challenge"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Main Team */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <SectionHeader title="TEAM" subtitle="Main Team" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {mainTeams.map((team, index) => (
                <TeamCard key={index} name={team} index={index} />
              ))}
            </div>
          </div>

          {/* Floating Team */}
          <div>
            <SectionHeader title="FLOATING TEAM" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {floatingTeams.map((team, index) => (
                <TeamCard key={index} name={team} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
