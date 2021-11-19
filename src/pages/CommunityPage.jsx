import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/header/Navbar"

import UsersList from "../components/UsersList/UsersList"


const CommunityPage = () => {
   

    return (
        <>
            {/* <Navbar/>                         */}
            <UsersList/>
            <Footer/>
        </>
    );
};

export default CommunityPage;
