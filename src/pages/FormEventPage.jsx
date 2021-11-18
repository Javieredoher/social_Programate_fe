import React, { useContext } from "react";


import FormEvent from "../components/FormEvent/FormEvent";
import { DataContext } from "../context/DataContext";

const FormEventPage = () => {

    const { sendData } = useContext(DataContext);

    return (
        <>
            <FormEvent />
        </>
    );
};

export default FormEventPage;
