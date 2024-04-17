import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Flex from "./Flex";
const FooterBottem = () => {
  return (
    <>
      <div className="bg-[#E7E4F8] py-4">
        <div className="container">
          <Flex className={"items-center justify-around"}>
            <h3 className="font-Latofont text-md text-main_font_color font-normal  opacity-60">
              ©Webecy - All Rights Reserved
            </h3>
            <Flex className="items-center gap-x-3">
              <div className="bg-main_font_color w-8 p-2 rounded-full text-main_bg_color cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="bg-main_font_color w-8 p-2 rounded-full text-main_bg_color cursor-pointer">
                <FaInstagram />
              </div>
              <div className="bg-main_font_color w-8 p-2 rounded-full text-main_bg_color cursor-pointer">
                <FaTwitter />
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default FooterBottem;
