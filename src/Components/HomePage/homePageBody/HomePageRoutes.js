// HomePageRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageMain from "./HomePageMain";
import AboutUs from "../../AboutUs/AboutUsMain/AboutUs";
import ContactUsMain from "../../Contactus/ContactUsMain/ContactusMain";
import ServicesMain from "../../Services/ServicesMainComp/ServicesMain";
import ProductsMain from "../../Products/ProductsMain/ProductsMain";

function HomePageRoutes() {
  return (
    <Routes>
      <Route index element={<HomePageMain />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<ServicesMain />} />
      <Route path="/products" element={<ProductsMain />} />
      <Route path="/contact-us" element={<ContactUsMain />} />
    </Routes>
  );
}

export default HomePageRoutes;
