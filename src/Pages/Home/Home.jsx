import React from "react";
import Header from "../../Component/HomeComponet/Header/Header";
import Navber from "../../Component/HomeComponet/Navber/Navber";
import Banner from "../../Component/HomeComponet/Banner/Banner";
import FeaturedProducts from "../../Component/HomeComponet//FeaturedProducts/FeaturedProducts";
import LeatestProducts from "../../Component/HomeComponet/LeatestProducts/LeatestProducts";
//import productsdata from "../../../ProductsData/productsdata";
const Home = () => {
  return (
    <div>
      <Header />
      <Navber />
      <Banner />
      <FeaturedProducts />
      <LeatestProducts />
    </div>
  );
};

export default Home;
