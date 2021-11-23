import React, { useEffect } from 'react'
import "../assets/styles/global2.css";
import { DataProvider } from "../context/DataContext";

//Login Redux

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Autentification from "../components/autentication/Autentification";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchGetUser, dispatchLogin, fetchUser } from '../redux/actions/authAction'
import Logout from '../components/Logout/Logout';

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

//Testing imports
import Notifications from "../components/Notifications/Notifications";
import Navbar from "../components/Navbar/Navbar";

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
        
        <DataProvider>
            <Router>         

{/*                 <Autentification>

                <Autentification/> */}

                <Routes>


                    {/*  Model:
                        <Route exact path="/" element={} /> 
                    */}

                    {/* Admin */}
                    
                    <Route exact path="/adminhome" element={<AdminHomePage/>} />

                    {/* Home */}

                    <Route exact path="/home" element={<HomePage/>} /> 

                    {/* Community */}

                    <Route exact path="/community" element={<CommunityPage/>} /> 

                    {/* Profile */}

                    <Route exact path="/profile" element={<ProfilePage/>} /> 
                    <Route exact path="/formprofile" element={<CompletePerfil/>} />
                    <Route exact path="/portfolio" element={<PortfolioPage/>} /> 
                    <Route exact path="/formproject" element={<FormProject />} />
                    <Route exact path="/formproject/:id" element={<FormProject />} />
                     
                    {/* Forms */}
                    <Route exact path="/formevent" element={<FormEventPage/>} /> 
                    <Route exact path="/formnew" element={<FormNewsPage/>} /> 
                    <Route exact path="/formnews/:id" element={<FormNewsPage />} />
                    <Route exact path="/formjob" element={<FormJobsPage/>} />             


                    <Logout />

                    {/* Foro */}
                    <Route exact path="/forum" element={<ForumHome/>} />
                    <Route exact path="/questions" element={<ForumQuestions/>} />
                    <Route exact path="/questions/:questionId" element={<ForumAnswers/>} />
                    <Route exact path="/addquestion" element={<ForumAddQuestion/>} />
                    <Route exact path="/resources" element={<ForumResources />} />
                    <Route exact path="/resources/:resourceId" element={<ForumViewResource />} />
                    <Route exact path="/addresource" element={<ForumAddResources />} />


                      
                    {/* Testing Routes to visualize components */}
                    <Route exact path="/notify" element={<Notifications />} />


                </Routes>    


            </Router>
        </DataProvider> 

    );
};

export default App;
