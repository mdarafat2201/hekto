import React from "react";
import BlogCort from "../../CommonComponent/BlogCort";
import productsImg25 from "../../../assets/productsImg25.png";
import productsImg26 from "../../../assets/productsImg26.png";
import productsImg27 from "../../../assets/productsImg27.png";
import Flex from "../../CommonComponent/Flex";
//import { FaPenNib, FaCalendarAlt } from "react-icons/fa";

const LeatestBlog = () => {
  const Blogdata = [
    {
      id: 1,
      img: productsImg25,
      name: "SaberAli",
      dite: "21 August,2020",
      title: "Top esssential Trends in 2021",
      ditles:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      More: "Read More",
    },
    {
      id: 1,
      img: productsImg26,
      name: "Surfauxion",
      dite: "21 August,2020",
      title: "Top esssential Trends in 2021",
      ditles:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      More: "Read More",
    },
    {
      id: 1,
      img: productsImg27,
      name: "SaberAli",
      dite: "21 August,2020",
      title: "Top esssential Trends in 2021",
      ditles:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      More: "Read More",
    },
  ];
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div>
              <h2 className="text-center font-JosefinSans text-4xl text-main_font_color font-bold">
                Leatest Blog
              </h2>
            </div>
            <Flex className={"items-center justify-between"}>
              {Blogdata?.map((item) => (
                <BlogCort
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  dite={item.dite}
                  title={item.title}
                  ditles={item.ditles}
                  More={item.More}
                />
              ))}
            </Flex>

            {/* <div className="w-[370px] my-20 rounded group box_shod">
              <img src={productsImg25} alt={productsImg25} />
              <div className="px-5">
                <Flex className={"items-center gap-x-8 mt-5"}>
                  <Flex className={"items-center gap-x-2"}>
                    <FaPenNib className="text-secondary_font_color" />
                    <h4 className=" font-JosefinSans  text-sm text-main_font_color font-bold">
                      SaberAli
                    </h4>
                  </Flex>
                  <Flex className={"items-center gap-x-2"}>
                    <FaCalendarAlt className="text-[#FFA454]" />
                    <h4 className=" font-JosefinSans  text-sm text-main_font_color font-bold">
                      21 August,2020
                    </h4>
                  </Flex>
                </Flex>
                <h2 className=" font-JosefinSans text-md my-5 group-hover:text-secondary_font_color text-main_font_color font-bold">
                  Top esssential Trends in 2021
                </h2>
                <p className=" font-Latofont text-md text-main_font_color font-normal opacity-40 ">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <ul>
                  <li className="font-Latofont text-md text-main_font_color group-hover:text-secondary_font_color py-4 font-normal">
                    <a href="#"> Read More</a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeatestBlog;
