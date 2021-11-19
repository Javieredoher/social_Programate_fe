import React from "react";
import "../assets/styles/global2.css";
import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompletePerfil from "../pages/CompletePerfil";
import FormNewsPage from "../pages/FormNewsPage";
import FormEventPage from "../pages/FormEventPage";
import Start from "../components/Start";
import FormJobsPage from "../pages/FormJobsPage";
import CommunityPage from "../pages/CommunityPage";
import PortfolioPage from '../components/portfolio/Portfolio'
import FormProject from '../components/FormProject/FormProject'
import ProfilePage from "../pages/ProfilePage";
import CreateResourcePage from "../pages/CreateResourcePage";

const App = () => {
    return (
        <DataProvider>

            <Router>      
                <Switch>
      
                    <Route exact path="/">
                        <Start />
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

                    <Route exact path="/createresource">
                        <CreateResourcePage />
                    </Route>

                    <Route exact path="/profile">
                        <ProfilePage/>
                    </Route>


                </Switch>
            </Router>
        </DataProvider>

    );
};



export default App;
