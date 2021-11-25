import React, { useContext } from "react";

import Form_PersonalInfo from "../components/FormInfo/Form_PersonalInfo";
import FormPhotoUser from "../components/formPhotoUser/FormPhotoUser";
import { ProfessionalInformation } from "../components/professionalInformation/ProfessionalInformation";
import { DataContext } from "../context/DataContext";

const CompletePerfil = () => {
    const { sendData } = useContext(DataContext);

    return (
        <>
            <FormPhotoUser />
            <Form_PersonalInfo />
            <ProfessionalInformation />
        </>
    );
};

export default CompletePerfil;
