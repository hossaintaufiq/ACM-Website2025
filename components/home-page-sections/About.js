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

const About = () => {
  const aboutImages = [AboutACM, AboutACM2, AboutACM3, AboutACM4];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 1,
    arrows: false,
    centerPadding: "60px",
    cssEase: "linear",
    accessibility: false,
  };

  const CustomSlides = ({ item, key }) => {
    return (
      <Image
        src={item}
        width={"100%"}
        alt={`About Image ${key}`}
        className="w-full h-40 md:h-96 lg:h-[30rem] object-cover object-center rounded-xl"
      />
    );
  };

  const route = useRouter()
  return (
    <MaxWidthWrapper className='py-7 md:py-20 lg:py-32'>
      <section id="about" className="relative text-center md:text-start">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-6xl">WHO WE ARE</h1>
        {/* Description */}
        <p className="mt-3 md:mt-6 lg:mt-12 text-sm md:text-lg lg:text-xl text-muted-foreground tracking-tight italic">
          We are the first student chapter of the Association for Computing
          Machineries in Bangladesh. NSU ACM Student Chapter is one of 680
          chapters worldwide and contributes to the broad scope of ACM by
          advancing computing as a science and profession.
        </p>
        {/* Picture */}
        <div className="w-full mt-6 md:mt-12">
          <Slider {...settings}>
            {aboutImages.map((item, index) => {
              return <CustomSlides key={index} item={item} />;
            })}
          </Slider>
        </div>
        {/* Button */}
        <div className="flex items-center justify-center mt-[3.0625rem]">
          <Button
            variant="secondary"
            className="px-[2.9rem] md:px-16 md:h-12 md:font-bold md:text-2xl"
            onClick={() => route.push('https://www.facebook.com/nsuacmsc')}
          >
            Learn More
          </Button>
        </div>
        {/* UpArrow */}
        <div className="">
          <TopButton />
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default About;
