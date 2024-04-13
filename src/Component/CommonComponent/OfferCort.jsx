import React from "react";
import freeDeliveryImg from "../../assets/freeDeliveryImg.png";
const OfferCort = ({ img, title, ditles }) => {
  return (
    <>
      <div className="w-[270px] bg-main_bg_color my-8 box_shod text-center ">
        <div className="pl-28 pt-14">
          <img src={img ? img : freeDeliveryImg} alt={img} />
        </div>
        <div className="px-[33px] pb-11">
          <h3 className="font-JosefinSans my-5  text-md text-main_font_color font-bold">
            {title ? title : "24/7 Support1"}
          </h3>
          <p className="left-0 font-normal font-Latofont text-sm text-[#1A0B5B] opacity-35">
            {ditles
              ? ditles
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida"}
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferCort;
