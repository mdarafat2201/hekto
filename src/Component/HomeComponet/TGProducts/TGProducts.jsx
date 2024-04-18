import React from "react";
import TGProductsCort from "../../CommonComponent/TGProductsCort";
import TGProductsdata from "../../../../ProductsData/TGProductsdata";
import Flex from "../../CommonComponent/Flex";
import productsImg15 from "../../../assets/productsImg15.png";
import productsImg16 from "../../../assets/productsImg16.png";
import productsImg17 from "../../../assets/productsImg17.png";
import productsImg18 from "../../../assets/productsImg18.png";
import productsImg19 from "../../../assets/productsImg19.png";
const TGProducts = () => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div>
              <h2 className="text-center font-JosefinSans text-[25px] sm:text-4xl text-main_font_color font-bold">
                Trending Products
              </h2>
            </div>
            <Flex
              className={
                "items-center flex-wrap px-14 sm:px-5 md:px-16 lg:px-0 justify-between"
              }
            >
              {TGProductsdata?.map((item) => (
                <TGProductsCort
                  img={item.img}
                  title={item.title}
                  dichcot={item.dichcot}
                  prach={item.prach}
                />
              ))}
            </Flex>

            <div className="my-5">
              <Flex
                className={
                  "items-center px-4 sm:px-24 md:px-3 lg:px-0 gap-y-6 flex-wrap justify-between"
                }
              >
                <div className="w-[420px] md:w-[355px] lg:w-[420px] h-[290px] bg-[#FFF6FB] ">
                  <div className="pt-8 ml-6">
                    <h2 className=" font-JosefinSans  text-[26px] text-main_font_color font-bold">
                      23% off in all products
                    </h2>
                    <ul>
                      <li className="font-JosefinSans  text-md font-normal text-secondary_font_color">
                        <a href="#">Shop Now</a>
                      </li>
                    </ul>
                  </div>
                  <div className="ml-[200px]">
                    <img src={productsImg15} alt={productsImg15} />
                  </div>
                </div>
                <div className="w-[420px] md:w-[355px] lg:w-[420px] h-[290px] bg-secondary_bg_color">
                  <div className="pt-8 ml-6">
                    <h2 className=" font-JosefinSans  text-[26px] text-main_font_color font-bold">
                      23% off in all products
                    </h2>
                    <ul>
                      <li className="font-JosefinSans  text-md font-normal text-secondary_font_color">
                        <a href="#">View Collection</a>
                      </li>
                    </ul>
                  </div>
                  <div className="ml-[100px]">
                    <img src={productsImg16} alt={productsImg16} />
                  </div>
                </div>

                <div>
                  <Flex className={"items-center mb-5 gap-x-3"}>
                    <div className="bg-secondary_bg_color w-[107px] px-[20px]">
                      <img src={productsImg17} alt={productsImg17} />
                    </div>
                    <div>
                      <h3 className="font-JosefinSans mb-1 text-md font-normal text-main_font_color">
                        Executive Seat chair
                      </h3>
                      <div className="relative ">
                        <p className="font-JosefinSans text-sm font-normal text-main_font_color ">
                          $32.00
                        </p>
                        <div className="w-[43px] left-0 bottom-[10px] absolute h-[1px] bg-main_font_color  "></div>
                      </div>
                    </div>
                  </Flex>
                  <Flex className={"items-center mb-5 gap-x-3"}>
                    <div className="bg-secondary_bg_color w-[107px] px-[20px]">
                      <img src={productsImg18} alt={productsImg18} />
                    </div>
                    <div>
                      <h3 className="font-JosefinSans mb-1 text-md font-normal text-main_font_color">
                        Executive Seat chair
                      </h3>
                      <div className="relative ">
                        <p className="font-JosefinSans text-sm font-normal text-main_font_color ">
                          $32.00
                        </p>
                        <div className="w-[43px] left-0 bottom-[10px] absolute h-[1px] bg-main_font_color  "></div>
                      </div>
                    </div>
                  </Flex>
                  <Flex className={"items-center mb-5 gap-x-3"}>
                    <div className="bg-secondary_bg_color w-[107px] px-[20px]">
                      <img src={productsImg19} alt={productsImg19} />
                    </div>
                    <div>
                      <h3 className="font-JosefinSans mb-1 text-md font-normal text-main_font_color">
                        Executive Seat chair
                      </h3>
                      <div className="relative ">
                        <p className="font-JosefinSans text-sm font-normal text-main_font_color ">
                          $32.00
                        </p>
                        <div className="w-[43px] left-0 bottom-[10px] absolute h-[1px] bg-main_font_color  "></div>
                      </div>
                    </div>
                  </Flex>
                </div>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TGProducts;
