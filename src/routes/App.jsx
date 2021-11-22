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

import ForumHome from "../components/ForumHome/ForumHome";
import ForumQuestions from "../components/ForumQuestions/ForumQuestions";
import ForumAnswers from "../components/ForumAnswers/ForumAnswers";
import ForumResources from "../components/ForumResources/ForumResources";
import ForumViewResource from "../components/ForumViewResource/ForumViewResource";
import ForumAddResources from "../components/ForumAddResources/ForumAddResources";
import ForumAddQuestion from "../components/ForumAddQuestion/ForumAddQuestion";


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

                    <Route exact path="/profile">
                        <ProfilePage/>
                    </Route>
                    
                    // Forum Routes 
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
                    
                    // Test Foro
                    // path="/forum" Ok
                    // path="/forum/questions" Lista de preguntas
                    // path="/forum/questions/question" crear y editar pregunta
                    // path="/forum/questions/question/:id" ver pregunta y agregar comentario 

                    // path="/forum/resources" Lista de recursos
                    // path="/forum/resources/resources" Lista de recursos
                    // path="/forum/questions/question/:id" ver pregunta y agregar comentario 


                </Switch>
            </Router>
        </DataProvider>

    );
};


export default App;
