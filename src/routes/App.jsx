import React from "react";
import "../assets/styles/global2.css";


import LatestPosts from "../components/LatestPosts/LatestPosts.jsx";

import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompletePerfil from "../pages/CompletePerfil";
import FormNewsPage from "../pages/FormNewsPage";
import FormEventPage from "../pages/FormEventPage";

import FormJobsPage from "../pages/FormJobsPage";
import CommunityPage from "../pages/CommunityPage";

import FormProject from "../components/FormProject/FormProject";

import ProfilePage from "../pages/ProfilePage";
import CreateResourcePage from "../pages/CreateResourcePage";
import AdminHome from "../components/adminHome/AdminHome";
import HomePage from "../pages/HomePage";


import PorfolioPage from "../pages/PorfolioPage";

import JobOffers from "../components/JobOffers/JobOffers";





//Componentes test







const App = () => {
    return (

        <DataProvider>


            <Router>

                <Switch>
      
                    <Route exact path="/home">
                        <HomePage/>
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

                    <Route exact path="/Porfolio">
                        <PorfolioPage />
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

                    <Route exact path="/adminHome">
                        <AdminHome/>
                    </Route>

                    <Route exact path="/adminpost">
                        <LatestPosts/>
                    </Route>

                    
                    <Route exact path="/edwin">
                        <JobOffers/>
                    </Route>

                
                    
                </Switch>
            </Router>
        </DataProvider>

    );
};

export default App;
