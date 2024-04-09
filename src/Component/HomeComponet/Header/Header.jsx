import React from "react";
import { CgMail } from "react-icons/cg";
import Flex from "../../CommonComponent/Flex";
const Header = () => {
  return (
    <>
      <div className="bg-[#7E33E0] py-4">
        <div className="container">
          <Flex className={"items-center"}>
            <Flex className={"items-center"}>
              <div className="text-main_bg_color font-JosefinSans font-bold text-sm ">
                <CgMail />
              </div>
              <div className="text-main_bg_color ml-3 font-JosefinSans font-bold text-sm ">
                <h2>mhhasanul@gmail.com</h2>
              </div>
            </Flex>
            <Flex className={"items-center"}>
              <div className="text-main_bg_color font-JosefinSans font-bold text-sm ">
                <CgMail />
              </div>
              <div className="text-main_bg_color ml-3 font-JosefinSans font-bold text-sm ">
                <h2>mhhasanul@gmail.com</h2>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Header;
