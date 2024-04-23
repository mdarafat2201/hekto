import React from "react";
import Flex from "../CommonComponent/Flex";
import { SiWindows11 } from "react-icons/si";
import { VscThreeBars } from "react-icons/vsc";
const ShopGridDefaultTop = () => {
  return (
    <>
      <div className="py-24">
        <div className="container">
          <Flex className={"items-center justify-between"}>
            <div>
              <h1 className="text-2xl mb-2 font-JosefinSans text-main_font_color font-bold">
                Ecommerce Acceories & Fashion item
              </h1>
              <h3 className="text-sm font-Latofont font-normal text-main_font_color opacity-40 ">
                About 9,620 results (0.62 seconds)
              </h3>
            </div>
            <Flex className={"items-center gap-x-6"}>
              <Flex className={"items-center gap-x-2"}>
                <span className=" text-base font-Latofont font-normal text-main_font_color">
                  Per Page:
                </span>
                <input type="text" className=" bg-white border w-14  block " />
              </Flex>
              <Flex className={"items-center gap-x-2"}>
                <span className=" text-base font-Latofont font-normal text-main_font_color">
                  Sort By:
                </span>
                <select
                  name="drop-dwon"
                  className="bg-white border py-1  px-3 block text-sm font-Latofont font-normal text-main_font_color opacity-40"
                >
                  <option value={"Best Match"}>Best Match</option>
                  <option value={"Best Match"}>Best Match</option>
                  <option value={"Best Match"}>Best Match</option>
                </select>
              </Flex>
              <Flex className={"items-center gap-x-2"}>
                <span className=" text-base font-Latofont font-normal text-main_font_color">
                  View:
                </span>
                <SiWindows11 className="text-xs" />
                <VscThreeBars />
                <input
                  type="text"
                  className=" bg-white border ml-4 w-[162px]  block "
                />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default ShopGridDefaultTop;
