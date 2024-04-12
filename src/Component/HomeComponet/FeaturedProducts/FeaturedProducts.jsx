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
              <h2 className="text-center font-JosefinSans mb-12 text-4xl text-main_font_color font-bold">
                Featured Products
              </h2>
            </div>
            <Flex className={"items-center justify-between"}>
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
