"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function JoinUs() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Gallery images - matching web2025
  const galleryImages = [
    "/join-us-gallery/4.jpg",
    "/join-us-gallery/hackNSU1.jpg",
    "/join-us-gallery/hackNSU3.jpg",
    "/join-us-gallery/hoc0.jpg",
    "/join-us-gallery/hoc1.jpg",
    "/join-us-gallery/hoc2.jpg",
    "/join-us-gallery/innovationChallenge1.jpg",
    "/join-us-gallery/innovationChallenge2.jpg",
    "/join-us-gallery/innovationChallenge3.jpg",
    "/join-us-gallery/innovationChallenge4.jpg",
    "/join-us-gallery/result.jpg",
  ];

  // Hidden arrow components (matching web2025)
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  // Exact settings from web2025 Gallery
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 2,
    centerPadding: "60px",
    cssEase: "ease-in-out",
    accessibility: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Custom slide component matching web2025
  const CustomSlides = ({ item, index }: { item: string; index: number }) => {
    return (
      <div className="relative w-full h-32 md:h-72">
        <Image
          src={item}
          fill
          sizes="(max-width: 768px) 25vw, 20vw"
          alt={`Gallery Image ${index}`}
          className="object-cover object-center"
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <>
      {/* Sliding Gallery - Exact match to web2025 */}
      {isMounted && (
        <div className="bg-white">
          <Slider {...settings}>
            {galleryImages.map((item, index) => {
              return <CustomSlides key={index} item={item} index={index} />;
            })}
          </Slider>
        </div>
      )}
    </>
  );
}
