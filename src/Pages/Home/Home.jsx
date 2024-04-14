import React from "react";
import Header from "../../Component/HomeComponet/Header/Header";
import Navber from "../../Component/HomeComponet/Navber/Navber";
import Banner from "../../Component/HomeComponet/Banner/Banner";
import FeaturedProducts from "../../Component/HomeComponet//FeaturedProducts/FeaturedProducts";
import LeatestProducts from "../../Component/HomeComponet/LeatestProducts/LeatestProducts";
import ShopexOffer from "../../Component/HomeComponet/ShopexOffer/ShopexOffer";
import TrendingPoducts from "../../Component/HomeComponet/TrendingPoducts/TrendingPoducts";
import TGProducts from "../../Component/HomeComponet/TGProducts/TGProducts";
const Home = () => {
  return (
    <div>
      <Header />
      <Navber />
      <Banner />
      <FeaturedProducts />
      <LeatestProducts />
      <ShopexOffer />
      <TrendingPoducts />
      <TGProducts />
    </div>
  );
};

export default Home;
