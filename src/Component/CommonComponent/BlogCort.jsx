import React from "react";
import productsImg25 from "../../assets/productsImg25.png";
import { FaPenNib, FaCalendarAlt } from "react-icons/fa";
import Flex from "./Flex";
const BlogCort = ({ img, name, dite, title, ditles, More }) => {
  return (
    <>
      <div className="w-[370px] md:w-[320px] lg:w-[370px] lg:my-20 my-8 rounded group box_shod">
        <img src={img ? img : productsImg25} alt={productsImg25} />
        <div className="px-5">
          <Flex className={"items-center gap-x-8 mt-5"}>
            <Flex className={"items-center gap-x-2"}>
              <FaPenNib className="text-secondary_font_color" />
              <h4 className=" font-JosefinSans  text-sm text-main_font_color font-bold">
                {name ? name : "SaberAli"}
              </h4>
            </Flex>
            <Flex className={"items-center gap-x-2"}>
              <FaCalendarAlt className="text-[#FFA454]" />
              <h4 className=" font-JosefinSans  text-sm text-main_font_color font-bold">
                {dite ? dite : "21 August,2020"}
              </h4>
            </Flex>
          </Flex>
          <h2 className=" font-JosefinSans text-md my-5 group-hover:text-secondary_font_color text-main_font_color font-bold">
            {title ? title : "Top esssential Trends in 2021"}
          </h2>
          <p className=" font-Latofont text-md text-main_font_color font-normal opacity-40 ">
            {ditles
              ? ditles
              : "More off this less hello samlande lied much over tightly circa horse taped mightly "}
          </p>
          <ul>
            <li className="font-Latofont text-md text-main_font_color group-hover:text-secondary_font_color py-4 font-normal">
              <a href="#"> {More ? More : "Read More"}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogCort;
