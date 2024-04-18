import React from "react";
import Bannerimg from "../../../assets/bannerimg.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

// Next Arrow function
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "60px",
        height: "60px",
        position: "absolute",
        left: "33px",
        top: "40%",
        transform: "translateY(-40%)",
        border: "1px solid var(--secondary_font_color)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center h-full cursor-pointer  hover:bg-main_font_color rounded-full">
        <FaLongArrowAltLeft className="text-base text-secondary_font_color " />
      </div>
    </div>
  );
}

//Pre Arrow function
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "60px",
        height: "60px",
        top: "40%",
        transform: "translateY(-40%)",
        right: "33px",
        position: "absolute",
        zIndex: "1",
        border: "1px solid var(--secondary_font_color)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center  items-center h-full cursor-pointer hover:bg-main_font_color rounded-full">
        <FaLongArrowAltRight className="text-base text-secondary_font_color" />
      </div>
    </div>
  );
}

const Banner = () => {
  // Slider setting
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={Bannerimg} alt={Bannerimg} />
        </div>
        <div>
          <img src={Bannerimg} alt={Bannerimg} />
        </div>
        <div>
          <img src={Bannerimg} alt={Bannerimg} />
        </div>
        <div>
          <img src={Bannerimg} alt={Bannerimg} />
        </div>
      </Slider>
    </>
  );
};

export default Banner;
