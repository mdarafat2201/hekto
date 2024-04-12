import React from "react";
import ProductsImg1 from "../../assets/productsImg1.png";
import DotsImg from "../../assets/dotsImg.png";
const Products = ({ className, Title, Code, prich, Imgs, dostImg }) => {
  return (
    <>
      <div className={className}>
        <div className="w-64 box_shod">
          <div className="bg-secondary_bg_color  px-12 py-8">
            <img src={Imgs ? Imgs : ProductsImg1} alt={Imgs} />
          </div>
          <div className="text-center py-4 bg-main_bg_color ">
            <h3 className="text-secondary_font_color  text-lg font-bold font-Latofont">
              {Title ? Title : "Cantilever chair"}
            </h3>
            <div className="pl-24 py-3">
              <img src={dostImg ? dostImg : DotsImg} alt={DotsImg} />
            </div>
            <p className="font-JosefinSans text-sm font-normal text-main_font_color">
              {Code ? Code : "Code - Y523201"}
            </p>
            <span className="pt-3 font-JosefinSans text-sm font-normal text-main_font_color">
              {prich ? prich : "$42.00"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
