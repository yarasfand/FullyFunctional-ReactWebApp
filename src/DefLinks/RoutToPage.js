import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageBody from "../Components/HomePage/homePageBody/HomePageBody";
import AboutUs from "../Components/AboutUs/AboutUsMain/AboutUs";
import ContactUsMain from "../Components/Contactus/ContactUsMain/ContactusMain";
import LandingPage from "../Components/LandingPage/LandingPageMain/LandingPage"; 
import ServicesMain from "../Components/Services/ServicesMainComp/ServicesMain";

function RoutToPage() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePageBody />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element = {< ServicesMain/>} />
      <Route path="/contact-us" element = {<ContactUsMain />} />
    </Routes>
  );
}

export default RoutToPage;
