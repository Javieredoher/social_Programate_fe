import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import style from "../components/UsersList/UsersList.module.css";


import UsersList from "../components/UsersList/UsersList";

const CommunityPage = () => {
    return (
        <>
            <Navbar />
            <div className={style.communityPage}>
                <UsersList />
            </div>

            <Footer />
        </>
    );
};

export default CommunityPage;
