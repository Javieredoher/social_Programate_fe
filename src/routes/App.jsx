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
import PortfolioPage from "../components/portfolio/Portfolio";
import FormProject from "../components/FormProject/FormProject";

import ProfilePage from "../pages/ProfilePage";
import CreateResourcePage from "../pages/CreateResourcePage";

//Componentes test
import ForumQuestion from "../components/ForumQuestion/Questions";
import ForumResourcesList from "../components/ForumResourcesList/Recursos";
import ForumCreateResources from "../components/ForumCreateResources/ForumCreateResources";
import HomePage from "../pages/HomePage";
import AdminHomePage from "../pages/AdminHomePage";





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

                    <Route exact path="/Foro">
                        <ForumQuestion />
                        {/* <ForumResourcesList />
                        <ForumCreateResources /> */}
                    </Route>

                    <Route exact path="/adminhome">
                        <AdminHomePage/>
                    </Route>
                    
                </Switch>
            </Router>
        </DataProvider>

    );
};

export default App;
