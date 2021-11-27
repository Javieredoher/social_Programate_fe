import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RenderPostHome from "../components/RenderPostHome/RenderPostHome";
import EventCard from "../components/EventsCard/EventCard";
import JobCard from "../components/JobCard/JobCard";
import Posts from "../components/homePublications/Posts";
import Dropdown from "../components/makingpost/Dropdown";
import FilterHome from "../components/filterHome/FilterHome";
import style from "../components/filterHome/filterHome.module.css";
import Notification from "../components/Notifications/Notification";

const HomePage = () => {
    return (
        <>

            <Navbar /> 

            <Notification/>  
            
            <div className={style.containBody}>
                <div className={style.containFilter}>
                    <FilterHome />
                    <Dropdown />
                </div>
                <Posts />

                             
            </div>
            {/* <RenderPostHome />

            <EventCard />
            <JobCard /> */}

            <Footer />
        </>
    );
};

export default HomePage;
