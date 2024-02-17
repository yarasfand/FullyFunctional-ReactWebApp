import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageBody from "../Components/HomePage/homePageBody/HomePageBody";
import LandingPage from "../Components/LandingPage/LandingPageMain/LandingPage"; 
import ProductDetails from "../Components/Products/ProductDetails/ProductDetails";

function RoutToPage() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home/*" element={<HomePageBody />} />
      <Route path="/home/products/:productType" element={<ProductDetails />} />  
    </Routes>
  );
}

export default RoutToPage;  
