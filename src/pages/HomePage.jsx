import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RenderPostHome from "../components/RenderPostHome/RenderPostHome";
import EventCard from "../components/EventsCard/EventCard";
import JobCard from "../components/JobCard/JobCard";
import Posts from "../components/homePublications/Posts";
import Dropdown from "../components/makingpost/Dropdown";
import FilterHome from "../components/filterHome/FilterHome";
import BodyProfile from "../components/Profile/BodyProfile";
import Portfolio from "../components/portfolio/Portfolio";
import style from "../components/filterHome/filterHome.module.css";
import Notification from "../components/Notifications/Notification";

import Media from "react-media";

const HomePage = () => {
    // const [widthScreen, setWidthScreen] = useState();

    return (
        <div className={style.homePage}>
            <Navbar />
            {/* <Notification /> */}

            <div className={style.containBody}>
                <Media query="(min-width: 1024px)">
                    {(matches) => {
                        return (
                            matches && (
                                <div className={style.containProfile}>
                                    <BodyProfile />
                                </div>
                            )
                        );
                    }}
                </Media>
                <div className={style.mainContent}>
                    <div className={style.containFilter}>
                        <FilterHome />
                        <Dropdown />
                    </div>
                    <Posts />
                </div>
                <Media query="(min-width: 1024px)">
                    {(matches) => {
                        return (
                            matches && (
                                <div className={style.containNotifications}>
                                    <Notification />
                                </div>
                            )
                        );
                    }}
                </Media>
            </div>
            {/* <RenderPostHome />
            <EventCard />
            <JobCard /> */}
            <Footer />
        </div>
    );
};

export default HomePage;
