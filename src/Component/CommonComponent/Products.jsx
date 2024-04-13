import React from "react";
import ProductsImg1 from "../../assets/productsImg1.png";
import DotsImg from "../../assets/dotsImg.png";
import { GiSelfLove } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import Flex from "./Flex";
import Button from "./Button";
const Products = ({ className, Title, Code, prich, Imgs, dostImg }) => {
  return (
    <>
      <div className={className}>
        <div className="w-64 box_shod group relative overflow-hidden rounded">
          <div className="bg-secondary_bg_color  px-12 py-8">
            <img src={Imgs ? Imgs : ProductsImg1} alt={Imgs} />
          </div>
          <div className="text-center py-4 bg-main_bg_color transition-all hover:bg-green-300 ">
            <h3 className="text-secondary_font_color  text-lg font-bold font-Latofont">
              {Title ? Title : "Cantilever chair"}
            </h3>
            <div className="pl-24 py-3">
              <img src={dostImg ? dostImg : DotsImg} alt={DotsImg} />
            </div>
            <p className="font-JosefinSans text-sm font-normal text-main_font_color">
              {Code ? Code : "Code - Y523201"}
            </p>
            <span className="pt-3 font-JosefinSans text-sm font-normal text-main_font_color">
              {prich ? prich : "$42.00"}
            </span>
          </div>
          {/* =================Overlay================= */}

          <div className="absolute top-3 -left-60 group-hover:left-3 transition-all">
            <Flex className={"items-center"}>
              <div className="text-main_font_color w-[46px] p-[15px] rounded-full hover:bg-green-200 hover:text-[#08D15F]">
                <FiShoppingCart className="cursor-pointer" />
              </div>
              <div className="text-main_font_color w-[46px] p-[15px] rounded-full hover:bg-green-200 hover:text-[#08D15F]">
                <GiSelfLove className="cursor-pointer" />
              </div>
              <div className="text-main_font_color w-[46px] p-[15px] rounded-full hover:bg-green-200 hover:text-[#08D15F]">
                <FaSearchPlus className="cursor-pointer" />
              </div>
            </Flex>
            <div className="pl-14 pt-28">
              <Button
                className={"px-3 py-2 bg-[#08D15F] rounded cursor-pointer "}
                title={"View Details"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
