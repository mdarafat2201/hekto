import React from "react";

import productsdata from "../../../../ProductsData/productsdata";
import Products from "../../CommonComponent/Products";
import Flex from "../../CommonComponent/Flex";

const FeaturedProducts = () => {
  return (
    <>
      <div className="py-24 ">
        <div className="container">
          <div>
            <div>
              <h2 className="text-center font-JosefinSans mb-12 text-[25px] sm:text-4xl text-main_font_color font-bold">
                Featured Products
              </h2>
            </div>
            <Flex
              className={
                "items-center flex-wrap mx-[60px] sm:mx-[30px] md:mx-[80px] lg:mx-0 gap-y-10 md:gap-y-14 lg:gap-y-0 justify-between"
              }
            >
              {productsdata?.map((item) => (
                <Products
                  key={item.id}
                  Imgs={item.Imgs}
                  Title={item.Title}
                  dostImg={item.dostImg}
                  Code={item.Code}
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

export default FeaturedProducts;
