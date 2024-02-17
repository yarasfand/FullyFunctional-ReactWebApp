import React from "react";
import AboveNavbar from "../NavComponents/AboveNavbar";
import NavBar from "../NavComponents/NavBar";


function LayoutFixedNav({ children }) {

    return (
        <div>
            <div>
                <AboveNavbar />
                <NavBar />
            </div>
                {children}
        </div>
    );
}

export default LayoutFixedNav;