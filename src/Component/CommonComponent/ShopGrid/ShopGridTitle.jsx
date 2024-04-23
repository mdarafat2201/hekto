import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const ShopGridTitle = () => {
  return (
    <>
      <div className="pt-14 pb-24 bg-secondary_bg_color">
        <div className="container">
          <div>
            <h1 className=" text-4xl mb-2 font-JosefinSans text-main_font_color font-bold">
              Shop Grid Default
            </h1>
            <BreadCrumb />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopGridTitle;
