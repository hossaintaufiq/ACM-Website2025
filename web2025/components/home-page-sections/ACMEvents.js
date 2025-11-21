"use client";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopButton from "../button-tab-sections/TopButton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ACMEvents = () => {
  const eventImages = [
    "HackNSU",
    "Technovation",
    "Hour of Code",
    "Programming Contest",
    "Innovation Challenge",
  ];

  const CustomArrow = (props) => {
    const { className, style, onClick, right } = props;
    return (
      <button
        className={`bg-transparent text-3xl  absolute top-[50%] ${
          right ? "-right-[30px]" : "-left-[30px]"
        }`}
        onClick={onClick}
      >
        {right ? <BsChevronRight /> : <BsChevronLeft />}
      </button>
    );
  };

  const CustomSlides = ({ item }) => {
    return (
      <div className="mx-3 h-[20rem] flex items-center justify-center bg-gray-400 bg-opacity-5 hover:bg-opacity-20 border border-gray-100/50 rounded-[1.875rem] shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-sm text-3xl text-white">
        <span className="-rotate-45 text-center">{item}</span>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    nextArrow: <CustomArrow right={true} />,
    prevArrow: <CustomArrow right={false} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
        className="py-7 md:py-10 lg:py-32 relative w-full text-center md:text-start"
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl">OUR EVENTS</h1>

        {/* Slider */}
        <div className="mt-6 md:mt-16 w-full">
          <Slider {...settings}>
            {eventImages.map((item, index) => {
              return <CustomSlides key={index} item={item} />;
            })}
          </Slider>
        </div>

        {/* Button */}
        <div className="text-center mt-[3.0625rem] md:mt-16">
          <Button
            variant="secondary"
            className="px-8 md:px-12 md:h-12 md:font-bold md:text-2xl"
            onClick={() => route.push("https://www.facebook.com/nsuacmsc")}
          >
            See Upcoming
          </Button>
        </div>

        <TopButton />
      </div>
    </MaxWidthWrapper>
  );
};

export default ACMEvents;
