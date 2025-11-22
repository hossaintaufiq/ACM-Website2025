"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const eventImages = [
    "https://nsusc.acm.org/assets/img/technovation/technovation4.jpg",
    "https://nsusc.acm.org/assets/img/technovation/technovation3.jpg",
    "https://nsusc.acm.org/assets/img/technovation/technovation6.jpg",
    "https://nsusc.acm.org/assets/img/technovation/technovation7.jpg",
    "https://nsusc.acm.org/assets/img/hacknsu/hackNSU3.jpg",
    "https://nsusc.acm.org/assets/img/innovation/innovationChallenge3.jpg",
    "https://nsusc.acm.org/assets/img/innovation/innovationChallenge4.jpg",
    "https://nsusc.acm.org/assets/img/innovation/innovationChallenge1.jpg",
    "https://nsusc.acm.org/assets/img/hacknsu/hackNSU1.jpg",
    "https://nsusc.acm.org/assets/img/hacknsu/4.jpg",
    "https://nsusc.acm.org/assets/img/hoc/hoc0.jpg",
    "https://nsusc.acm.org/assets/img/hoc/hoc1.jpg",
    "https://nsusc.acm.org/assets/img/hoc/hoc2.jpg",
    "https://nsusc.acm.org/assets/img/innovation/innovationChallenge3.jpg",
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const CustomSlides = ({ index, item, key }) => {
    return (
      <div className="relative w-full h-[19.3125rem]">
      <Image
        key={key}
          fill
          sizes="(max-width: 768px) 25vw, 20vw"
          className="object-cover object-center"
        src={item}
        alt="Event Image"
          loading="lazy"
      />
      </div>
    );
  };

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
  return (
    <div className="bg-white">
      <Slider {...settings}>
        {eventImages.map((item, index) => {
          return <CustomSlides key={index} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default Gallery;
