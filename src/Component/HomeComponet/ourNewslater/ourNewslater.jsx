import React from "react";
import bannerimg2 from "../../../assets/bannerimg2.png";
import logoItem from "../../../assets/logoItem.png";
import Button from "../../CommonComponent/Button";
const ourNewslater = () => {
  return (
    <>
      <div className="relative">
        <img src={bannerimg2} alt={bannerimg2} />

        <div className="lg:left-[420px] md:left-20 left-14  lg:top-[100px] md:top-5  top-0 absolute">
          <h2 className="text-center lg:mb-8 md:mb-6 sm:mb-4 mb-1 font-JosefinSans text-sm  sm:text-4xl text-main_font_color font-bold">
            Get Leatest Update By Subscribe <br /> Our Newslater
          </h2>
          <div className="mx-14 sm:mx-0">
            <Button
              className={
                "sm:py-3 py-2 sm:px-8 px-6 sm:mx-[212px]   bg-secondary_font_color"
              }
              title={"Shop Now"}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="lg:my-20 py-8 mx-5 lg:mx-[250px]">
          <img src={logoItem} alt={logoItem} />
        </div>
      </div>
    </>
  );
};

export default ourNewslater;
