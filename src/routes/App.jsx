import React, { useEffect } from 'react'
import "../assets/styles/global2.css";
import { DataProvider } from "../context/DataContext";

//Login Redux

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Autentification from "../components/autentication/Autentification";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchGetUser, dispatchLogin, fetchUser } from '../redux/actions/authAction'

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
import Notifications from "../components/Notifications/Notifications";



//import CreateResourcePage from "../pages/CreateResourcePage";


const App = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token)
    const auth = useSelector(state => state.auth)


    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedAgoraUser')
        const firstLogin = localStorage.getItem('firstLogin')
        if (firstLogin && loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            const refreshtoken = user.refresh_token

            const getToken = async () => {
                const res = await axios.post('http://localhost:3001/api/refresh_token', { refreshtoken })
                console.log(res)
                dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
            }
            getToken()

        }
    }, [auth.isLogged, dispatch])

    useEffect(() => {
        if (token) {
            const getUser = () => {
                dispatch(dispatchLogin())
                return fetchUser(token).then(res => {
                    dispatch(dispatchGetUser(res))
                })
            }
            getUser()
        }

    }, [token, dispatch])

    return (
        <>

            {/* <DataProvider>


                <Router>

                    <Autentification />




                </Router>

            </DataProvider>
        

                   <Route exact path="/adminhome">
                        <AdminHomePage/>
                    </Route>


                  {/*Forum Routes

                  
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


                    {/* Testing Area 

                    <Route exact path="/notify">
                        <Notifications />
                    </Route>

                    
                
            </Router>
        </DataProvider> */}

       </>


    );
};

export default App;
