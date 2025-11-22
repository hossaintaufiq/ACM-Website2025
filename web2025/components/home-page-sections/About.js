"use client";
import Image from "next/image";
import TopButton from "../button-tab-sections/TopButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutACM from "../../app/assets/img/about_acm/aboutacm.jpg";
import AboutACM2 from "../../app/assets/img/about_acm/aboutacm2.jpg";
import AboutACM3 from "../../app/assets/img/about_acm/aboutacm3.jpg";
import AboutACM4 from "../../app/assets/img/about_acm/aboutacm4.jpg";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

const About = () => {
  const aboutImages = [AboutACM, AboutACM2, AboutACM3, AboutACM4];
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 1,
    arrows: false,
    centerPadding: "0px",
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    accessibility: false,
  };

  const CustomSlides = ({ item, key }) => {
    return (
      <div className="relative w-full h-64 md:h-96 lg:h-[32rem] overflow-hidden rounded-2xl">
      <Image
        src={item}
          fill
          sizes="100vw"
        alt={`About Image ${key}`}
          className="object-cover object-center transition-transform duration-700 hover:scale-110"
          loading={key === 0 ? "eager" : "lazy"}
          priority={key === 0}
      />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
    );
  };

  const route = useRouter();

  return (
    <MaxWidthWrapper className="py-16 md:py-24 lg:py-32">
      <section id="about" className="relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base text-blue-400 font-semibold uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            WHO WE ARE
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                We are the <span className="text-blue-400 font-semibold">first student chapter</span> of the Association for Computing Machineries in Bangladesh.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                NSU ACM Student Chapter is one of <span className="text-purple-400 font-semibold">680 chapters worldwide</span> and contributes to the broad scope of ACM by advancing computing as a science and profession.
        </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Innovation", "Collaboration", "Excellence", "Community"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image Carousel with 3D Effect */}
          <div
            ref={cardRef}
            className="order-1 md:order-2 relative group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-1 backdrop-blur-sm">
              <div className="bg-[#020817] rounded-3xl overflow-hidden">
          <Slider {...settings}>
                  {aboutImages.map((item, index) => (
                    <CustomSlides key={index} item={item} key={index} />
                  ))}
          </Slider>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center mt-12">
          <Button
            variant="secondary"
            className="px-8 md:px-12 h-12 md:h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            onClick={() => route.push("https://www.facebook.com/nsuacmsc")}
          >
            Learn More
          </Button>
        </div>

        {/* Top Button */}
        <div className="mt-12">
          <TopButton />
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default About;
