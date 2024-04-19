import React from "react";
import Flex from "../../CommonComponent/Flex";
import CategoriesCort from "../../CommonComponent/CategoriesCort";
import productsImg21 from "../../../assets/productsImg21.png";
import productsImg22 from "../../../assets/productsImg22.png";
import productsImg23 from "../../../assets/productsImg23.png";
import productsImg24 from "../../../assets/productsImg24.png";

const TopCategories = () => {
  const Categoriesdata = [
    {
      id: 1,
      img: productsImg21,
      title: "Mini LCW Chair",
      prich: "$56.00",
    },
    {
      id: 1,
      img: productsImg22,
      title: "Mini LCW Chair",
      prich: "$56.00",
    },
    {
      id: 1,
      img: productsImg23,
      title: "Mini LCW Chair",
      prich: "$56.00",
    },
    {
      id: 1,
      img: productsImg24,
      title: "Mini LCW Chair",
      prich: "$56.00",
    },
  ];

  return (
    <>
      <div>
        <div className="container">
          <div>
            <div>
              <h2 className="text-center font-JosefinSans mb-8 text-3xl sm:text-4xl text-main_font_color font-bold">
                Top Categories
              </h2>
            </div>
            <Flex className="items-conter flex-wrap px-14 sm:px-0 md:px-10 lg:px-0 justify-between">
              {Categoriesdata?.map((item) => (
                <CategoriesCort
                  key={item.id}
                  img={item.img}
                  title={item.title}
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

export default TopCategories;
