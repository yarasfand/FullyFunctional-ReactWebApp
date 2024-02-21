// HomePageRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageMain from "../Components/HomePage/homePageBody/HomePageMain";
import AboutUs from "../Components/AboutUs/AboutUsMain/AboutUs";
import ServicesMain from "../Components/Services/ServicesMainComp/ServicesMain";
import ProductsMain from "../Components/Products/ProductsMain/ProductsMain";
import ContactUsMain from "../Components/Contactus/ContactUsMain/ContactusMain";
import ProductDetails from "../Components/Products/ProductDetails/ProductDetails";

function HomePageRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePageMain/>} /> 
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<ServicesMain /> } />
      <Route path="/products" element={<ProductsMain /> } />
      <Route path="/contact-us" element={<ContactUsMain />} />
      <Route path="/home/products/:productType" element={<ProductDetails />} />  
      
    </Routes>
  );
}

export default HomePageRoutes;
