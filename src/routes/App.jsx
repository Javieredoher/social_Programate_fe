import React from "react";
import "../assets/styles/global2.css";
import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Revisar
import LatestPosts from "../components/LatestPosts/LatestPosts.jsx";

import AdminHomePage from "../pages/AdminHomePage";

import CompletePerfil from "../pages/CompletePerfil";
import FormNewsPage from "../pages/FormNewsPage";
import FormEventPage from "../pages/FormEventPage";

import FormJobsPage from "../pages/FormJobsPage";
import CommunityPage from "../pages/CommunityPage";
import PortfolioPage from "../components/portfolio/Portfolio";
import FormProject from "../components/FormProject/FormProject";

import ProfilePage from "../pages/ProfilePage";

import HomePage from "../pages/HomePage";

//Foro
import ForumHome from "../components/ForumHome/ForumHome";
import ForumQuestions from "../components/ForumQuestions/ForumQuestions";
import ForumAnswers from "../components/ForumAnswers/ForumAnswers";
import ForumResources from "../components/ForumResources/ForumResources";
import ForumViewResource from "../components/ForumViewResource/ForumViewResource";
import ForumAddResources from "../components/ForumAddResources/ForumAddResources";
import ForumAddQuestion from "../components/ForumAddQuestion/ForumAddQuestion";



//import CreateResourcePage from "../pages/CreateResourcePage";


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


                    <Route exact path="/profile">
                        <ProfilePage/>
                    </Route>

                    <Route exact path="/adminhome">
                        <AdminHomePage/>
                    </Route>


                  {/*Forum Routes*/}

                  
                    <Route exact path="/forum">
                        <ForumHome/>
                    </Route>
                    <Route exact path="/questions">
                        <ForumQuestions />
                    </Route>
                    <Route exact path="/questions/:questionId">
                        <ForumAnswers />
                    </Route>
                    <Route exact path="/addquestion">
                        <ForumAddQuestion />
                    </Route>
                    
                    
                    <Route exact path="/resources">
                        <ForumResources />
                    </Route>
                    <Route exact path="/resources/:resourceId">
                        <ForumViewResource />
                    </Route>
                    <Route exact path="/addresource">
                        <ForumAddResources />
                    </Route>
                </Switch>
            </Router>
        </DataProvider>

    );
};

export default App;
