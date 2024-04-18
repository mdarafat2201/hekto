import React from "react";
import Banner from "../../Component/HomeComponet/Banner/Banner";
import FeaturedProducts from "../../Component/HomeComponet//FeaturedProducts/FeaturedProducts";
import LeatestProducts from "../../Component/HomeComponet/LeatestProducts/LeatestProducts";
import ShopexOffer from "../../Component/HomeComponet/ShopexOffer/ShopexOffer";
import TrendingPoducts from "../../Component/HomeComponet/TrendingPoducts/TrendingPoducts";
import TGProducts from "../../Component/HomeComponet/TGProducts/TGProducts";
import DiscountItem from "../../Component/HomeComponet/DiscountItem/DiscountItem";
import TopCategories from "../../Component/HomeComponet/TopCategories/TopCategories";
import OurNewslater from "../../Component/HomeComponet/ourNewslater/ourNewslater";
import LeatestBlog from "../../Component/HomeComponet/LeatestBlog/LeatestBlog";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <LeatestProducts />
      <ShopexOffer />
      <TrendingPoducts />
      <TGProducts />
      <DiscountItem />
      <TopCategories />
      <OurNewslater />
      <LeatestBlog />
    </div>
  );
};

export default Home;
