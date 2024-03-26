import React from "react";
import HomeMainFirst from "../HomeMainFirst/HomeMainFirst";
import HomeMainMid from "../HomeMainMid/HomeMainMid";
import HomeMainInfo from "../HomeMainInfo/HomeMainInfo";
import HomeMainLast from "../HomeMainLast/HomeMainLast";
import Footer from "../../HomePage/footer/Footer";

function HomeMain(){

    return(
        <div id = "HomeMain">
            <HomeMainFirst/>
            <HomeMainMid/>
            <HomeMainInfo/>
            <HomeMainLast/>
            <Footer/>
        </div>
        
    );
}

export default HomeMain;