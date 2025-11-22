"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  BsChevronDown,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import SimpleCounter from "./SimpleCounter";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Hero = () => {
  const route = useRouter();
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    
    const handleMouseMove = (e, card) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (card) => {
      if (!card) return;
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    };

    // Attach event listeners to each card
    cards.forEach((card) => {
      if (card) {
        card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
        card.addEventListener("mouseleave", () => handleMouseLeave(card));
      }
    });

    return () => {
      cards.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", (e) => handleMouseMove(e, card));
          card.removeEventListener("mouseleave", () => handleMouseLeave(card));
        }
      });
    };
  }, []);

  const stats = [
    { value: 30, label: "workshops", suffix: "+" },
    { value: 13, label: "events", suffix: "+" },
    { value: 15, label: "seminars", suffix: "+" },
    { value: 3, label: "publications", prefix: "0" },
  ];

  return (
    <div className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#0a1128] to-[#020817] opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(33,90,215,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      {/* Floating 3D Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>

      <MaxWidthWrapper className="relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col items-center md:items-start justify-center min-h-[70vh]">
          {/* Main Heading with 3D Effect */}
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
                WELCOME TO
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-delayed">
                NSU ACM STUDENT CHAPTER
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mt-4 max-w-2xl">
              Empowering the next generation of computing professionals through innovation, collaboration, and excellence.
            </p>
          </div>

          {/* CTA Buttons with 3D Effect */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12">
            <Button
              className="px-8 md:px-12 h-12 md:h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            onClick={() => window.location.href = 'https://www.facebook.com/nsuacmsc'}
            >
              Join Now
            </Button>
            <Button
              variant="secondary"
              className="px-8 md:px-12 h-12 md:h-14 text-lg font-semibold bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transform transition-all duration-300 hover:scale-105"
              onClick={() => route.push('/our-events')}
            >
              Explore Events
            </Button>
          </div>
        </div>

        {/* Stats Cards with 3D Effect */}
        <div className="mt-16 md:mt-24 lg:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 transform transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    <SimpleCounter 
                      end={stat.value} 
                      duration={2.5} 
                      prefix={stat.prefix || ""} 
                      suffix={stat.suffix || ""} 
                    />
            </div>
                  <p className="text-sm md:text-base lg:text-lg text-white/70 uppercase tracking-wider">
                    {stat.label}
                  </p>
            </div>
            </div>
            ))}
            </div>
          </div>

        {/* Social Links with 3D Effect */}
        <div className="hidden md:flex md:flex-col gap-6 md:gap-8 text-3xl lg:text-4xl items-end mt-12 md:mt-16">
          {[
            { icon: BsFacebook, href: "https://www.facebook.com/nsuacmsc", label: "Facebook" },
            { icon: BsLinkedin, href: "https://bd.linkedin.com/company/nsuacmsc", label: "LinkedIn" },
            { icon: BsGithub, href: "https://github.com/NSU-ACM-SC", label: "GitHub" },
            { icon: BsYoutube, href: "https://www.youtube.com/@nsuacmstudentchapter4819", label: "YouTube" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transform transition-all duration-300 hover:scale-125 hover:rotate-12"
              aria-label={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a href="#about" className="animate-bounce">
            <div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center p-2">
              <BsChevronDown className="text-white/60 animate-pulse" />
            </div>
          </a>
        </div>
      </MaxWidthWrapper>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(30px) translateX(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(20px) translateX(-30px); }
          66% { transform: translateY(-20px) translateX(30px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-delayed {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-delayed {
          background-size: 200% 200%;
          animation: gradient-delayed 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
