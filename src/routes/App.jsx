import React from "react";
import "../assets/styles/global2.css";

// import FormPhotoUser from "../components/formPhotoUser/FormPhotoUser";
// import { ProfessionalInformation } from "../components/professionalInformation/ProfessionalInformation";

import { DataProvider } from "../context/DataContext";
import CompletePerfil from "../pages/CompletePerfil";

const App = () => {
    return (
        <DataProvider>
            <CompletePerfil />
            {/* <ProfessionalInformation /> */}
            {/* <FormPhotoUser /> */}
        </DataProvider>
    );
};

export default App;
