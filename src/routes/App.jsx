import React from "react";
import "../assets/styles/global2.css";

import LatestPosts from "../components/LatestPosts/LatestPosts.jsx";

import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import EditProfile from "../pages/EditProfile";

//Componentes test
import ForumQuestion from "../components/ForumQuestion/Questions";
import ForumResourcesList from "../components/ForumResourcesList/Recursos";
import ForumCreateResources from "../components/ForumCreateResources/ForumCreateResources";
import FormEventEdit from "../components/FormEvent/FormEventEdit";

const App = () => {
    return (
        <DataProvider>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/home"
                        element={<Start />}
                        // <RenderPostHome />
                        // <EventCard />
                        // <JobCard />}>
                    />

                    <Route
                        exact
                        path="/formprofile"
                        element={<CompletePerfil />}
                    />

                    <Route
                        exact
                        path="/formprofile/:id"
                        element={<EditProfile />}
                    />

                    <Route
                        exact
                        path="/formevent"
                        element={<FormEventPage />}
                    />

                    <Route
                        exact
                        path="/formeventedit/:id"
                        element={<FormEventEdit />}
                    />

                    <Route exact path="/formnews" element={<FormNewsPage />} />

                    <Route
                        exact
                        path="/formnews/:id"
                        element={<FormNewsPage />}
                    />

                    <Route exact path="/formjobs" element={<FormJobsPage />} />

                    <Route
                        exact
                        path="/formjobs/:id"
                        element={<FormJobsPage />}
                    />

                    {/*<Route exact path="/community">
                    <CommunityPage />
                </Route> */}

                    <Route
                        exact
                        path="/portfolio"
                        element={<PortfolioPage />}
                    />
                    {/* 
                <Route exact path="/formproject">
                    <FormProject />
                </Route>

                <Route exact path="/formproject/:id">
                    <FormProject />
                </Route>

                <Route exact path="/createresource">
                    <CreateResourcePage />
                </Route>  */}

                    <Route exact path="/profile" element={<ProfilePage />} />

                    {/* <Route exact path="/Foro">
                    <ForumQuestion /> */}
                    {/* <ForumResourcesList />
                        <ForumCreateResources /> */}
                    {/* </Route> */}

                    {/* <Route exact path="/adminpost">
                    <LatestPosts />
                </Route> */}
                </Routes>
            </Router>
        </DataProvider>
    );
};

export default App;
