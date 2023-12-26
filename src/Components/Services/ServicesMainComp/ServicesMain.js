import Footer from "../../HomePage/footer/Footer";
import Servicesbtn from "../SericesBanner/Servicesbtn";
import Services from "../ServicesMid/Services";
import {React,useEffect} from 'react';


function ServicesMain() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Servicesbtn/>
            <Services />
            <Footer/>
        </div>
    );
}

export default ServicesMain;