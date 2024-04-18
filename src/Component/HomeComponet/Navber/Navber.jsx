import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Flex from "../../CommonComponent/Flex";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Navber = () => {
  const [isShow, setisShow] = useState(false);
  //HandleNavIcon funtionality
  const HandleNavIcon = () => {
    setisShow(!isShow);
  };
  return (
    <>
      <div className="py-4 px-2 lg:px-0 bg-main_bg_color">
        <div className="container">
          <Flex
            className={
              "items-center flex-wrap md:flex-nowrap  gap-y-5 sm:gap-y-0  justify-between"
            }
          >
            <div>
              <img src={Logo} alt={Logo} />
            </div>

            <div className={"  md:hidden"}>
              <Flex>
                <div>
                  <input
                    type="text"
                    placeholder="search"
                    className="p-3 w-[160px] sm:w-[290px] bg-[#D9D9D9]"
                  />
                </div>
                <div className="bg-secondary_font_color w-12 p-2 text-[28px] text-center">
                  <IoSearch />
                </div>
              </Flex>
            </div>

            <div
              className={`absolute md:static  ${
                isShow
                  ? " absolute w-full z-10 bg-green-300 py-2 top-[150px] left-0 transition-all"
                  : "-left-[100%]"
              }`}
            >
              <ul className="flex items-center md:gap-x-3 lg:gap-x-8 flex-col gap-y-2 sm:gap-y-0 md:flex-row">
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
            <div className=" cursor-pointer md:hidden" onClick={HandleNavIcon}>
              {isShow === true ? <RxCross2 /> : <FaBars />}
            </div>
            <div className={" hidden md:block"}>
              <Flex>
                <div>
                  <input
                    type="text"
                    placeholder="search"
                    className="p-3 md:w-[210px] lg:w-[280px] bg-[#D9D9D9]"
                  />
                </div>
                <div className="bg-secondary_font_color w-12 p-2 text-[28px] text-center">
                  <IoSearch />
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Navber;
