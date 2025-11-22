"use client";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopButton from "../button-tab-sections/TopButton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

const ACMEvents = () => {
  const eventImages = [
    { name: "HackNSU", color: "from-blue-500 to-cyan-500" },
    { name: "Technovation", color: "from-purple-500 to-pink-500" },
    { name: "Hour of Code", color: "from-green-500 to-emerald-500" },
    { name: "Programming Contest", color: "from-orange-500 to-red-500" },
    { name: "Innovation Challenge", color: "from-indigo-500 to-purple-500" },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05) translateZ(20px)`;
      });
    };

    const handleMouseLeave = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateZ(0)";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const CustomArrow = (props) => {
    const { className, style, onClick, right } = props;
    return (
      <button
        className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 ${
          right ? "-right-6" : "-left-6"
        }`}
        onClick={onClick}
        aria-label={right ? "Next" : "Previous"}
      >
        {right ? <BsChevronRight /> : <BsChevronLeft />}
      </button>
    );
  };

  const CustomSlides = ({ item, index }) => {
    return (
      <div className="px-3">
        <div
          ref={(el) => (cardRefs.current[index] = el)}
          className="group relative h-[24rem] md:h-[28rem] rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/30"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)] animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
            {/* Icon/Emoji */}
            <div className="mb-6 text-6xl md:text-7xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              {index === 0 && "💻"}
              {index === 1 && "🚀"}
              {index === 2 && "📚"}
              {index === 3 && "🏆"}
              {index === 4 && "💡"}
            </div>
            
            {/* Event Name */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transform group-hover:scale-105 transition-transform duration-500">
              {item.name}
            </h3>
            
            {/* Decorative Line */}
            <div className={`w-16 h-1 bg-gradient-to-r ${item.color} rounded-full mb-4 transform group-hover:scale-x-150 transition-transform duration-500`}></div>
            
            {/* Hover Effect Text */}
            <p className="text-white/60 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Explore our events
            </p>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    nextArrow: <CustomArrow right={true} />,
    prevArrow: <CustomArrow right={false} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const route = useRouter();

  return (
    <MaxWidthWrapper>
      <div
        id="events"
        className="py-16 md:py-24 lg:py-32 relative w-full"
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              Our Events
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            OUR EVENTS
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
            Join us for exciting competitions, workshops, and tech gatherings
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="mt-12 md:mt-16">
          <Slider {...settings}>
            {eventImages.map((item, index) => (
              <CustomSlides key={index} item={item} index={index} />
            ))}
          </Slider>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            variant="secondary"
            className="px-8 md:px-12 h-12 md:h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            onClick={() => route.push("/our-events")}
          >
            See All Events
          </Button>
        </div>

        <TopButton />
      </div>
    </MaxWidthWrapper>
  );
};

export default ACMEvents;
