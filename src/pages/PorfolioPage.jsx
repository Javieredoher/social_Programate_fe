import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar";
import Porfolio from "../components/Porfolio/Porfolio";


const PorfolioPage = () => {
    return (
        <>
            {/* <Navbar/>                         */}
            <Porfolio/>
            <Footer/>
        </>
    );
};

export default PorfolioPage;
