import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Servicebtn.css';

function Servicesbtn() {
    
    return (
        <div className="Services-top">
            <section className="servicesTopContainer" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ServicesHeading">
                                <h2>Services</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 ">
                            <div className="buttonInService">
                                <svg style={{ position: 'absolute', width: '0', height: '0' }} width="0" height="0" >
                                    <defs >
                                        <symbol id="icon-paperplane" viewBox="0 0 1024 1024">
                                            <title>paperplane</title>
                                            <path
                                                className="path1"
                                                d="M1009.376 5.12c-5.312-3.424-11.36-5.12-17.376-5.12-6.176 0-12.384 1.76-17.76 5.376l-960 640c-9.888 6.56-15.328 18.112-14.048 29.952 1.216 11.808 8.896 22.016 19.936 26.368l250.368 100.192 117.728 206.016c5.632 9.888 16.096 16 27.424 16.128 0.128 0 0.224 0 0.352 0 11.232 0 21.664-5.952 27.424-15.552l66.464-110.816 310.24 124.064c3.808 1.536 7.808 2.272 11.872 2.272 5.44 0 10.816-1.376 15.68-4.128 8.448-4.736 14.24-13.056 15.872-22.624l160-960c2.080-12.576-3.488-25.184-14.176-32.128zM100.352 664.864l741.6-494.432-539.2 577.184c-2.848-1.696-5.376-3.936-8.512-5.184l-193.888-77.568zM326.048 770.112c-0.064-0.128-0.16-0.192-0.224-0.32l606.176-648.8-516.768 805.184-89.184-156.064zM806.944 947.488l-273.312-109.312c-6.496-2.56-13.248-3.424-19.936-3.808l420.864-652.416-127.616 765.536z"
                                            ></path>
                                        </symbol>
                                    </defs>
                                </svg>

                                <a href="https://google.com" target="_blank" rel="noreferrer" className="contact-button">
                                    Contact
                                    <svg className="icon icon-paperplane">
                                        <use xlinkHref="#icon-paperplane"></use>
                                    </svg>
                                    <span>pioneer@gmail.com</span>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            

        </div>
    );
}


export default Servicesbtn;