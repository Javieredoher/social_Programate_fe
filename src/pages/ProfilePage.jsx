import React from "react";
import "../assets/styles/global2.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import BodyProfile from "../components/Profile/BodyProfile";

const ProfilePage = () => {
    return (
        <>
            <Navbar />
            <BodyProfile />
            <Footer />
        </>
    );
};

export default ProfilePage;
