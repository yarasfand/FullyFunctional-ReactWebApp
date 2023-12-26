import { React , useEffect } from "react";
import Overview from "../Overview/Overview";
import TimeLine from "../Timline/Timeline";
import Footer from "../../HomePage/footer/Footer";
import AboutUsTeam from "../OurTeam/AboutUsTeam";


function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Overview />
      <TimeLine/>
      <AboutUsTeam/>
      <Footer/>
    </div>
  );
}

export default AboutUs;
