import React, { useContext } from "react";


import Formnews from "../components/formnews/Formnews";
import { DataContext } from "../context/DataContext";

const FormNewsPage = () => {

    const { sendData } = useContext(DataContext);

    return (
        <>
            <Formnews />
        </>
    );
};

export default FormNewsPage;