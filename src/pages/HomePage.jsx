import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RenderPostHome from "../components/RenderPostHome/RenderPostHome";
import EventCard from "../components/EventsCard/EventCard";
import JobCard from "../components/JobCard/JobCard";
import Notification from "../components/Notifications/Notification";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Notification />
            <RenderPostHome />
            <EventCard />
            <JobCard />

            <Footer />
        </>
    );
};

export default HomePage;
