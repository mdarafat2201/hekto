import React from "react";
import productsImg11 from "../../assets/productsImg11.png";
import Flex from "./Flex";
const TGProductsCort = ({ img, title, dichcot, prach }) => {
  return (
    <>
      <div className="w-[270px] bg-main_bg_color my-8 box_shod p-3">
        <div className="mb-4">
          <img src={img ? img : productsImg11} alt={productsImg11} />
        </div>
        <div className="text-center">
          <h3 className="font-JosefinSans mb-2 text-md font-normal text-main_font_color">
            {title ? title : "Comfort Handy Craft"}
          </h3>
          <Flex className={"items-center gap-x-4 mb-8 px-[60px]"}>
            <span className="font-JosefinSans text-md font-normal text-main_font_color">
              {dichcot ? dichcot : "$42.00"}
            </span>

            <div className="relative ">
              <p className="font-JosefinSans text-sm font-normal text-main_font_color opacity-40">
                {prach ? prach : "$65.00"}
              </p>
              <div className="w-[43px] left-0 bottom-[10px] absolute h-[1px] bg-main_font_color opacity-40 "></div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default TGProductsCort;
