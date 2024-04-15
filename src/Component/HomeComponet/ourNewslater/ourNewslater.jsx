import React from "react";
import bannerimg2 from "../../../assets/bannerimg2.png";
import logoItem from "../../../assets/logoItem.png";
import Button from "../../CommonComponent/Button";
const ourNewslater = () => {
  return (
    <>
      <div className="relative">
        <img src={bannerimg2} alt={bannerimg2} />
        <div className="left-[420px] top-[100px]  absolute">
          <h2 className="text-center mb-8 font-JosefinSans  text-4xl text-main_font_color font-bold">
            Get Leatest Update By Subscribe <br /> Our Newslater
          </h2>
          <Button
            className={"py-3 px-8 ml-[212px]  bg-secondary_font_color"}
            title={"Shop Now"}
          />
        </div>
      </div>
      <div className="container">
        <div className="my-20 mx-[250px]">
          <img src={logoItem} alt={logoItem} />
        </div>
      </div>
    </>
  );
};

export default ourNewslater;
