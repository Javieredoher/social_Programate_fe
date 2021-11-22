import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar"
import Header from "../components/header/Header"

import UsersList from "../components/UsersList/UsersList"


const CommunityPage = () => {
   

    return (
        <>
             {/* <Navbar/>  */}
            <Header/> 
            <UsersList/>
            <Footer/>
        </>
    );
};

export default CommunityPage;
