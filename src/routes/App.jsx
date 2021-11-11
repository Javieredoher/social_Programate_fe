import React from "react";
import "../assets/styles/global2.css";

import FormPhotoUser from "../components/formPhotoUser/FormPhotoUser";

import { DataProvider } from "../context/DataContext";

const App = () => {
    return (
        <DataProvider>
            <FormPhotoUser />
        </DataProvider>
    );
};

export default App;
