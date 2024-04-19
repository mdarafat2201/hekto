import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";
import Button from "./Button";
import Flex from "./Flex";
import FooterItem from "./FooterItem";
const FooterTop = () => {
  return (
    <>
      <div className="bg-secondary_bg_color px-3 sm:px-10 md:px-5 lg:px-0 py-20">
        <div className="container">
          <div>
            <Flex className={"items-start flex-wrap justify-between"}>
              <div>
                <img src={FooterLogo} alt={FooterLogo} />
                <div className="py-8">
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="py-3 pl-5 w-[200px]  sm:w-[240px] md:w-[200px] lg:w-[240px]"
                  />
                  <Button
                    className={"py-3 px-10 bg-secondary_font_color rounded"}
                    title={"Sign Up"}
                  />
                </div>
                <h4 className="font-Latofont text-sm mb-2 text-main_font_color font-normal  opacity-60">
                  Contact Info
                </h4>
                <p className="font-Latofont text-sm text-main_font_color font-normal  opacity-60">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
              <FooterItem
                title={"Catagories"}
                allitem={[
                  "Laptops & Computers",
                  "Cameras & Photography",
                  "Smart Phones & Tablets",
                  "Video Games & Consoles",
                  "Waterproof Headphones",
                ]}
              />
              <FooterItem
                title={"Customer Care"}
                allitem={[
                  "My Account",
                  "Discount",
                  "Returns",
                  "Orders History",
                  "Order Tracking",
                ]}
              />
              <FooterItem
                title={"Pages"}
                allitem={[
                  "Blog",
                  "Browse the Shop",
                  "Category",
                  "Pre-Built Pages",
                  "Visual Composer Elements",
                  "WooCommerce Pages",
                ]}
              />
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
