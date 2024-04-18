import React from "react";
import { CgMail } from "react-icons/cg";
import Flex from "../../CommonComponent/Flex";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-[#7E33E0] py-4 px-2 sm:px-0">
        <div className="container">
          <Flex
            className={
              "items-center flex-col sm:flex-row gap-y-2 sm:gap-y-0 justify-between"
            }
          >
            <Flex className={"items-center flex-wrap "}>
              <Flex className={"items-center pr-12"}>
                <div className="text-main_bg_color mr-3 font-JosefinSans font-bold text-sm ">
                  <CgMail />
                </div>
                <div className="text-main_bg_color  font-JosefinSans font-bold text-sm ">
                  <h2>mhhasanul@gmail.com</h2>
                </div>
              </Flex>
              <Flex className={"items-center "}>
                <div className="text-main_bg_color mr-3  font-JosefinSans font-bold text-sm ">
                  <FiPhoneCall />
                </div>
                <div className="text-main_bg_color font-JosefinSans font-bold text-sm ">
                  <h2>(12345)67890</h2>
                </div>
              </Flex>
            </Flex>
            <Flex className={"items-center gap-x-2 sm:gap-x-4"}>
              <div>
                <ul className="flex items-center text-main_bg_color ml-2 sm:ml-3 font-JosefinSans font-bold text-sm">
                  <li className="mr-1">
                    <Link to={"/"}> English</Link>
                  </li>
                  <IoIosArrowDown />
                </ul>
              </div>
              <div>
                <ul className="flex items-center  text-main_bg_color ml-2 sm:ml-3 font-JosefinSans font-bold text-sm">
                  <li className="mr-1">
                    <Link to={"/"}> USD</Link>
                  </li>
                  <IoIosArrowDown />
                </ul>
              </div>
              <div>
                <ul className="flex items-center  text-main_bg_color ml-2 sm:ml-3 font-JosefinSans font-bold text-sm">
                  <li className="mr-1">
                    <Link to={"/"}> Login</Link>
                  </li>
                  <MdManageAccounts />
                </ul>
              </div>
              <div>
                <ul className="flex items-center  text-main_bg_color ml-2 sm:ml-3 font-JosefinSans font-bold text-sm">
                  <li className="mr-1">
                    <Link to={"/"}> Wishlist</Link>
                  </li>
                  <GiSelfLove />
                </ul>
              </div>
              <div className="text-main_bg_color font-bold text-sm">
                <FiShoppingCart />
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Header;
