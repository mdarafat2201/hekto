import React from "react";
import BlogCort from "../../CommonComponent/BlogCort";
import productsImg25 from "../../../assets/productsImg25.png";
import productsImg26 from "../../../assets/productsImg26.png";
import productsImg27 from "../../../assets/productsImg27.png";
import Flex from "../../CommonComponent/Flex";

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
            <Flex
              className={
                "items-center px-4 sm:px-32 md:px-10 lg:px-0 flex-wrap justify-between"
              }
            >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LeatestBlog;
