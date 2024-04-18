import React from "react";
import Header from "../../HomeComponet/Header/Header";
import Navber from "../../HomeComponet/Navber/Navber";
import Footer from "../../HomeComponet/Footer/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
