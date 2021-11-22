import React from "react";
import "../assets/styles/global2.css";
import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompletePerfil from "../pages/CompletePerfil";
import FormNewsPage from "../pages/FormNewsPage";
import FormEventPage from "../pages/FormEventPage";
import FormEventEdit from "../components/FormEvent/FormEventEdit";
import FormJobsPage from "../pages/FormJobsPage";
import Lista_Usuarios from "../components/lista_usuarios/Lista_Usuarios";
import Autentification from "../components/autentication/Autentification";


const App = () => {
    return (
        <DataProvider>
            <Router>

                <Routes>

                    <Route exact path="/formprofile" element={<CompletePerfil />} />
                    <Route exact path="/formevent" element={<FormEventPage />} />
                    <Route exact path="/editevent" element={<FormEventEdit />} />

                </Routes>
            </Router>
            <Autentification />
        </DataProvider>
    );

};

export default App;

