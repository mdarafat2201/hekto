import React from "react";
import tickmark from "../../../assets/tickmark.png";
import Flex from "../../CommonComponent/Flex";
import Button from "../../CommonComponent/Button";
import productsImg20 from "../../../assets/productsImg20.png";
const DiscountItem = () => {
  return (
    <>
      <div className="my-[100px]">
        <div className="container">
          <div>
            <div>
              <h2 className="text-center font-JosefinSans  text-4xl text-main_font_color font-bold">
                Discount Item
              </h2>
            </div>

            <div className=" ml-[475px] mt-8">
              <ul className="flex items-center gap-x-8  ">
                <li className="font-JosefinSans text-md font-normal text-main_font_color hover:text-secondary_font_color">
                  <a href="#">Wood Chair</a>
                </li>
                <li className="font-JosefinSans text-md font-normal text-main_font_color hover:text-secondary_font_color">
                  <a href="#">Plastic Chair</a>
                </li>
                <li className="font-JosefinSans text-md font-normal text-main_font_color hover:text-secondary_font_color">
                  <a href="#">Sofa Colletion</a>
                </li>
              </ul>
            </div>

            <Flex className={"items-center justify-between"}>
              <div>
                <h2 className=" font-JosefinSans  text-4xl text-main_font_color font-bold">
                  20% Discount Of All Products
                </h2>
                <h4 className="font-JosefinSans text-md mt-4 font-normal text-secondary_font_color">
                  Eams Sofa Compact
                </h4>
                <p className="font-JosefinSans my-5 text-md font-normal text-main_font_color opacity-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget <br /> feugiat habitasse nec, bibendum condimentum.
                </p>
                <Flex className={"items-center gap-x-[44px] mb-9"}>
                  <div>
                    <Flex className={"items-center gap-x-2 mb-3 "}>
                      <img src={tickmark} alt={tickmark} />
                      <p className="font-JosefinSans text-md font-normal text-main_font_color opacity-40">
                        Material expose like metals
                      </p>
                    </Flex>
                    <Flex className={"items-center gap-x-2 "}>
                      <img src={tickmark} alt={tickmark} />
                      <p className="font-JosefinSans text-md font-normal text-main_font_color opacity-40">
                        Simple neutral colours.
                      </p>
                    </Flex>
                  </div>
                  <div>
                    <Flex className={"items-center gap-x-2 mb-3"}>
                      <img src={tickmark} alt={tickmark} />
                      <p className="font-JosefinSans text-md font-normal text-main_font_color opacity-40">
                        Clear lines and geomatric figures
                      </p>
                    </Flex>
                    <Flex className={"items-center gap-x-2 "}>
                      <img src={tickmark} alt={tickmark} />
                      <p className="font-JosefinSans text-md font-normal text-main_font_color opacity-40">
                        Material expose like metals
                      </p>
                    </Flex>
                  </div>
                </Flex>
                <Button
                  className={
                    "py-5 px-12 cursor-pointer bg-secondary_font_color rounded"
                  }
                  title={"Shop Now"}
                />
              </div>
              <div>
                <img src={productsImg20} alt={productsImg20} />
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountItem;
