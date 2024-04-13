import React from "react";
import newproductsdata from "../../../../ProductsData/newproductsdata";
import Newproducts from "../../CommonComponent/newproducts";
import Flex from "../../CommonComponent/Flex";

const LeatestProducts = () => {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div>
              <h2 className="text-center font-JosefinSans mb-12 text-4xl text-main_font_color font-bold">
                Leatest Products
              </h2>
            </div>
            <div className=" ml-[400px]">
              <ul className="flex items-center gap-x-14  ">
                <li className="font-JosefinSans text-md font-normal text-main_font_color hover:text-secondary_font_color">
                  <a href="#">New Arrival</a>
                </li>
                <li className="font-JosefinSans text-md font-normal text-main_font_color hover:text-secondary_font_color">
                  <a href="#">Best Seller</a>
                </li>
                <li className="font-JosefinSans text-md font-normal text-main_font_color hover:text-secondary_font_color">
                  <a href="#">Featured</a>
                </li>
                <li className="font-JosefinSans text-md font-normal text-main_font_color hover:text-secondary_font_color">
                  <a href="#">Special Offer</a>
                </li>
              </ul>
            </div>
            <Flex className={"items-center justify-between flex-wrap"}>
              {newproductsdata?.map((item) => (
                <Newproducts
                  key={item.id}
                  img={item.imgs}
                  title={item.title}
                  dichcont={item.dichcont}
                  prich={item.prich}
                />
              ))}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeatestProducts;
