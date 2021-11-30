import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import AdminHome from "../components/adminHome/AdminHome";
import AdminNavbar from "../components/adminHome/adminNavbar/adminNavbar";

const AdminHomePage = () => {
    return (
        <>
            <AdminNavbar/>                        
            <AdminHome/>
            <Footer />
        </>
    );
};

export default AdminHomePage;
