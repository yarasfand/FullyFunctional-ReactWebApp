import Footer from "../../HomePage/footer/Footer";
import Services from "../ServicesMid/Services";
import {React,useEffect} from 'react';


function ServicesMain() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Services />
            <Footer/>
        </div>
    );
}

export default ServicesMain;