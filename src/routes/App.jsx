import React from "react";
import "../assets/styles/global2.css";


import LatestPosts from "../components/LatestPosts/LatestPosts.jsx";

import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompletePerfil from "../pages/CompletePerfil";
import FormNewsPage from "../pages/FormNewsPage";
import FormEventPage from "../pages/FormEventPage";
import Start from "../components/Start";
import FormJobsPage from "../pages/FormJobsPage";
import CommunityPage from "../pages/CommunityPage";
import PortfolioPage from "../components/portfolio/Portfolio";
import FormProject from "../components/FormProject/FormProject";
import RenderPostHome from "../components/RenderPostHome/RenderPostHome";
import EventCard from "../components/EventsCard/EventCard";
import JobCard from "../components/JobCard/JobCard";
import ProfilePage from "../pages/ProfilePage";
import CreateResourcePage from "../pages/CreateResourcePage";



const App = () => {
    return (

        <DataProvider>


            <Router>

                <Switch>

      
                    <Route exact path="/home">
                        <Start />
                        <RenderPostHome />
                        <EventCard />
                        <JobCard />
                    </Route>                 


                    <Route exact path="/formprofile">
                        <CompletePerfil />
                    </Route>

                    <Route exact path="/formevent">
                        <FormEventPage />
                    </Route>

                    <Route exact path="/formnews">
                        <FormNewsPage />
                    </Route>

                    <Route exact path="/formnews/:id">
                        <FormNewsPage />
                    </Route>

                    <Route exact path="/formjobs">
                        <FormJobsPage />
                    </Route>


                    <Route exact path="/community">
                        <CommunityPage />
                    </Route>

                    <Route exact path="/portfolio">
                        <PortfolioPage />
                    </Route>

                    <Route exact path="/formproject">
                        <FormProject />
                    </Route>

                    <Route exact path="/formproject/:id">
                        <FormProject />
                    </Route>

                    <Route exact path="/createresource">
                        <CreateResourcePage />
                    </Route>

                    <Route exact path="/profile">
                        <ProfilePage/>
                    </Route>

                    <Route exact path="/adminpost">
                        <LatestPosts/>
                    </Route>
                    

                </Switch>
            </Router>
        </DataProvider>

    );
};

export default App;
