import React from "react";
import "../assets/styles/global2.css";
import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompletePerfil from "../pages/CompletePerfil";

const App = () => {
    return (
        <DataProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <CompletePerfil />
                    </Route>
                </Switch>
            </Router>
        </DataProvider>
    );

};

export default App;

