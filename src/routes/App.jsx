import React from "react";
import "../assets/styles/global2.css";
import EventCard from "../components/eventsCard/EventCard";

// import "../components/formnews/Formnews.module.css";
// import Formnews from "../components/formnews/Formnews";
import Makingpost from "../components/makingpost/Makingpost";
import RenderPostHome from "../components/RenderPostHome/RenderPostHome";

const App = () => {
    return (
        // <Formnews />
        <div>
            <Makingpost />
            <RenderPostHome />
            <RenderPostHome />
            <RenderPostHome />
            <EventCard />
        </div>
    );
};

export default App;
