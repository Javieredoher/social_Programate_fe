import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar"
import EditProject from "../components/FormProject/FormProject";



const EditProjectPage = () => {
   

    return (
        <>
            {/* <Navbar/>                         */}
            <EditProject/>
            <Footer/>
        </>
    );
};

export default EditProjectPage;