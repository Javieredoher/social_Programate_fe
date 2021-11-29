// React imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Login imports
import Login from "../../pages/auth/login/Login";
import ForgotPassword from "../../pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "../../pages/auth/resetPassword/ResetPassword";

//Not found import
import NotFound from "../notFound/NotFound";
import Redirect from "../Redirect/Redirect";
import DontAllow from "../Messages/DontAllow";

//Forms import
import CompletePerfil from "../../pages/CompletePerfil";
import EditProfile from "../../pages/EditProfile";
import FormEventPage from "../../pages/FormEventPage";
import FormEventEdit from "../../components/FormEvent/FormEventEdit";
import FormNewsPage from "../../pages/FormNewsPage";
import FormJobsPage from "../../pages/FormJobsPage";

//Community imports
import CommunityPage from "../../pages/CommunityPage";

//Forum imports
import ForumQuestions from "../ForumQuestions/ForumQuestions";
import ForumAnswers from "../ForumAnswers/ForumAnswers";
import ForumAddQuestion from "../ForumAddQuestion/ForumAddQuestion";
import ForumPage from "../../pages/ForumPage";
import ForumAnswersPage from "../../pages/ForumAnswersPage";
import ForumQuestionsPage from "../../pages/ForumQuestionsPage";

//home
import HomePage from "../../pages/HomePage";

//Profile
import ProfilePage from "../../pages/ProfilePage";
import PortfolioPage from "../../pages/PortfolioPage";
import FormProject from "../../components/FormProject/FormProject";

//admin
import AdminHomePage from "../../pages/AdminHomePage";

function Autentification() {
    const auth = useSelector((state) => state.auth);
    const { isLogged, isAdmin } = auth;
    // useEffect(() => {

    // }, [isLogged])

    return (
        <>
            <Routes>
                {/* Model */}

                {/* <Route exact path="/formprofile" element={isLogged ? < CompletePerfil /> : <NotFound />} /> 

        */}

                {/* Login */}
                <Route
                    exact
                    path="/"
                    element={isLogged ? <HomePage /> : <Login />}
                />
                <Route
                    exact
                    path="/login"
                    element={isLogged ? <HomePage /> : <Login />}
                />
                <Route
                    exact
                    path="/forgot_password"
                    element={<ForgotPassword />}
                    exact
                />
                <Route
                    exact
                    path="/user/reset/:token"
                    element={isLogged ? <NotFound /> : <ResetPassword />}
                />

                {/* Flow elements */}
                <Route exact path="/redirect" element={<Redirect />} />
                <Route exact path="/dontallow" element={<DontAllow />} />

                {/* Admin
        validate => admin */}
                <Route
                    exact
                    path="/adminhome"
                    element={isLogged ? <AdminHomePage /> : <NotFound />}
                />

                {/* Home */}
                <Route
                    exact
                    path="/home"
                    element={isLogged ? <HomePage /> : <NotFound />}
                />

                {/* Community */}
                <Route
                    exact
                    path="/community"
                    element={isLogged ? <CommunityPage /> : <NotFound />}
                />

                {/* Profile */}
                <Route
                    exact
                    path="/formprofile"
                    element={isLogged ? <CompletePerfil /> : <NotFound />}
                />
                <Route
                    exact
                    path="/formprofile/:id"
                    element={isLogged ? <EditProfile /> : <NotFound />}
                />

                <Route
                    exact
                    path="/profile"
                    element={isLogged ? <ProfilePage /> : <NotFound />}
                />
                <Route
                    exact
                    path="/profile/:id"
                    element={isLogged ? <ProfilePage /> : <NotFound />}
                />

                <Route
                    exact
                    path="/portfolio"
                    element={isLogged ? <PortfolioPage /> : <NotFound />}
                />
                <Route
                    exact
                    path="/portfolio/:id"
                    element={isLogged ? <PortfolioPage /> : <NotFound />}
                />

                <Route
                    exact
                    path="/formproject"
                    element={isLogged ? <FormProject /> : <NotFound />}
                />
                <Route
                    exact
                    path="/formproject/:id"
                    element={isLogged ? <FormProject /> : <NotFound />}
                />

                {/* Forms */}
                <Route
                    exact
                    path="/formevent"
                    element={isLogged ? <FormEventPage /> : <NotFound />}
                />
                <Route
                    exact
                    path="/formeventedit/:id"
                    element={isLogged ? <FormEventEdit /> : <NotFound />}
                />

                <Route
                    exact
                    path="/formnews"
                    element={isLogged ? <FormNewsPage /> : <NotFound />}
                />
                <Route
                    exact
                    path="/formnews/:id"
                    element={isLogged ? <FormNewsPage /> : <NotFound />}
                />

                <Route
                    exact
                    path="/formjobs"
                    element={isLogged ? <FormJobsPage /> : <NotFound />}
                />
                <Route
                    exact
                    path="/formjobs/:id"
                    element={isLogged ? <FormJobsPage /> : <NotFound />}
                />

                {/* Forum */}
                <Route
                    exact
                    path="/questions"
                    element={isLogged ? <ForumPage /> : <NotFound />}
                />
                <Route
                    exact
                    path="/questions/:questionId"
                    element={isLogged ? <ForumAnswersPage /> : <NotFound />}
                />
                <Route
                    exact
                    path="/addquestion"
                    element={isLogged ? <ForumQuestionsPage /> : <NotFound />}
                />

                {/* Testing Routes to visualize components */}
            </Routes>
        </>
    );
}

export default Autentification;
