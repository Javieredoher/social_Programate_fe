import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import RenderPostHome from "../components/RenderPostHome/RenderPostHome";
import EventCard from "../components/EventsCard/EventCard";
import JobCard from "../components/JobCard/JobCard";
import Posts from "../components/homePublications/Posts";

const HomePage = () => {
    return (
        <>
            <Navbar />

            <Posts />
            {/* <RenderPostHome />
            <EventCard />
            <JobCard /> */}

            <Footer />
        </>
    );
};

export default HomePage;
