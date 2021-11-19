import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar"
import Portfolio from "../components/portfolio/Portfolio";



const PortfolioPage = () => {
   

    return (
        <>
            {/* <Navbar/>                         */}
            <Portfolio/>
            <Footer/>
        </>
    );
};

export default PortfolioPage;