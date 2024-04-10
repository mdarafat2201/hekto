import React from "react";
import Logo from "../../../assets/Logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Flex from "../../CommonComponent/Flex";
const Navber = () => {
  return (
    <>
      <div className="py-4 bg-main_bg_color">
        <div className="container">
          <Flex className={"items-center justify-between"}>
            <div>
              <img src={Logo} alt={Logo} />
            </div>
            <div>
              <ul className="flex items-center gap-x-8">
                <li className="flex items-center gap-x-1 text-[#0D0E43] font-Latofont font-normal text-sm">
                  <a href="#">Home</a>
                  <IoIosArrowDown />
                </li>
                <li className=" text-[#0D0E43] font-Latofont font-normal text-sm">
                  <a href="#">Pages</a>
                </li>
                <li className=" text-[#0D0E43] font-Latofont font-normal text-sm">
                  <a href="#">Products</a>
                </li>
                <li className=" text-[#0D0E43] font-Latofont font-normal text-sm">
                  <a href="#">Blog</a>
                </li>
                <li className=" text-[#0D0E43] font-Latofont font-normal text-sm">
                  <a href="#">Shop</a>
                </li>
                <li className=" text-[#0D0E43] font-Latofont font-normal text-sm">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <Flex>
              <div>
                <input
                  type="text"
                  placeholder="search"
                  className="p-3 w-[280px] bg-[#D9D9D9]"
                />
              </div>
              <div className="bg-secondary_font_color w-12 p-2 text-[28px] text-center">
                <IoSearch />
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Navber;
