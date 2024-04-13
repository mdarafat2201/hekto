import React from "react";
import productsImg5 from "../../assets/productsImg5.png";
import Flex from "../CommonComponent/Flex";
const newproducts = ({ img, title, dichcont, prich }) => {
  return (
    <>
      <div className="w-[360px] py-[58px]">
        <div className="bg-secondary_bg_color h-[270px] pl-[50px] pt-8 pb-2">
          <img src={img ? img : productsImg5} alt={productsImg5} />
        </div>
        <Flex className={"items-center justify-between mt-4"}>
          <div className="relative">
            <h3 className="font-JosefinSans text-md font-normal text-main_font_color">
              {title ? title : "Comfort Handy Craft"}
            </h3>
            <div className="w-[148px] left-0 -bottom-2 absolute h-[4px] bg-secondary_bg_color"></div>
          </div>

          <Flex className={"items-center gap-x-2 "}>
            <span className="font-JosefinSans text-md font-normal text-main_font_color">
              {dichcont ? dichcont : "$42.00"}
            </span>

            <div className="relative ">
              <p className="font-JosefinSans text-sm font-normal text-secondary_font_color">
                {prich ? prich : "$65.00"}
              </p>
              <div className="w-[43px] left-0 bottom-[10px] absolute h-[1px] bg-secondary_font_color"></div>
            </div>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default newproducts;
