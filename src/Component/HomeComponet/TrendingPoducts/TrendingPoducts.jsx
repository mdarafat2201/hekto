import React from "react";
import TrendingPoductsImg from "../../../assets/TrendingPoductsImg.png";
import Button from "../../CommonComponent/Button";
import Flex from "../../CommonComponent/Flex";
const TrendingPoducts = () => {
  return (
    <>
      <div className="px-4 py-4 my-24 bg-secondary_bg_color sm:px-[120px] md:px-5">
        <div className="container">
          <Flex className={"items-center flex-col md:flex-row justify-between"}>
            <div>
              <img src={TrendingPoductsImg} alt={TrendingPoductsImg} />
            </div>
            <div>
              <h2 className=" font-JosefinSans mb-8 text-[20px] sm:text-3xl lg:text-4xl text-main_font_color font-bold">
                Unique Features Of leatest & Trending Poducts
              </h2>
              <Flex className={"items-center gap-x-3 mb-3 "}>
                <div className="w-3 h-3  bg-secondary_font_color rounded-full"></div>
                <p className="font-normal  font-Latofont text-sm text-[#1A0B5B] opacity-35">
                  All frames constructed with hardwood solids and laminates
                </p>
              </Flex>
              <Flex className={"items-center gap-x-3 mb-3 "}>
                <div className="w-3 h-3  bg-main_font_color rounded-full"></div>
                <p className="font-normal font-Latofont text-sm text-[#1A0B5B] opacity-35 mr-0 lg:mr-[200px]">
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </p>
              </Flex>
              <Flex className={"items-center gap-x-3 mb-5"}>
                <div className="w-3 h-3  bg-green-400 rounded-full"></div>
                <p className="font-normal font-Latofont text-sm text-[#1A0B5B]  opacity-35">
                  AArms, backs and seats are structurally reinforced
                </p>
              </Flex>

              <Flex className={"items-center gap-x-5"}>
                <Button
                  className={
                    "py-3 px-5 bg-secondary_font_color text-main_bg_color rounded"
                  }
                  title={"Add To Cart"}
                />
                <div>
                  <h3 className="font-JosefinSans  text-sm text-main_font_color font-bold">
                    B&B Italian Sofa
                  </h3>
                  <span className="font-JosefinSans  text-sm text-main_font_color font-bold">
                    $32.00
                  </span>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default TrendingPoducts;
