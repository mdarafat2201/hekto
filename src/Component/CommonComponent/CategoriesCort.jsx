import React from "react";
import productsImg21 from "../../assets/productsImg21.png";
const CategoriesCort = ({ img, title, prich }) => {
  return (
    <>
      <div className="w-[270px] my-14">
        <div className=" h-[270px] bg-secondary_bg_color pt-[60px] pl-[50px] rounded-full">
          <img src={img ? img : productsImg21} alt={productsImg21} />
        </div>
        <div className=" text-center mt-7">
          <h3 className="font-JosefinSans mb-1 text-md font-normal text-main_font_color">
            {title ? title : "Mini LCW Chair"}
          </h3>
          <p className="font-JosefinSans text-sm font-normal text-main_font_color ">
            {prich ? prich : "$56.00"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoriesCort;
