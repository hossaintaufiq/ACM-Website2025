"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../../app/assets/img/gallery/4.jpg";
import Img2 from "../../app/assets/img/gallery/hackNSU1.jpg";
import Img3 from "../../app/assets/img/gallery/hackNSU3.jpg";
import Img4 from "../../app/assets/img/gallery/hoc0.jpg";
import Img5 from "../../app/assets/img/gallery/hoc1.jpg";
import Img6 from "../../app/assets/img/gallery/hoc2.jpg";
import Img7 from "../../app/assets/img/gallery/innovationChallenge1.jpg";
import Img8 from "../../app/assets/img/gallery/innovationChallenge2.jpg";
import Img9 from "../../app/assets/img/gallery/innovationChallenge3.jpg";
import Img10 from "../../app/assets/img/gallery/innovationChallenge4.jpg";
import Img11 from "../../app/assets/img/gallery/result.jpg";
import Image from "next/image";

const Gallery = () => {
  const eventImages = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
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

  const CustomSlides = ({ item, key }) => {
    return (
      <div className="relative w-full h-32 md:h-72">
      <Image
        src={item}
          fill
          sizes="(max-width: 768px) 25vw, 20vw"
        alt={`Gallery Image ${key}`}
          className="object-cover object-center"
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
