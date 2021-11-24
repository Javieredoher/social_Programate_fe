import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Form_PersonalInfo from "../components/formInfo/Form_PersonalInfo";
import FormPhotoUser from "../components/formPhotoUser/FormPhotoUser";
import { ProfessionalInformation } from "../components/professionalInformation/ProfessionalInformation";
import { DataContext } from "../context/DataContext";
import { getDataAll } from "../helpers/fetch";

const CompletePerfil = () => {
    
    
    const { sendData } = useContext(DataContext);
    const [status, setStatus] = useState(false)
    const [statusOff, setStatusOff] = useState(true)
    const [items, setItems] = useState([])
    const auth = useSelector(state => state.auth)

    const token = useSelector(state => state.token)
    const { _id, email } = auth.user;

    useEffect(async () => {
        const { email } = auth.user;
        const data = await getDataAll(`profiles`)


        data.map((value) => {
            setItems(items => [...items, value]);
        })

    }, []);
    useEffect(() => {
        items.map((item) => {
            if (item.user_info.email === email) {
                setStatus(status => true)
            }
            if (item.user_info.rol === 0 || item.user_info.state === false) {
                setStatusOff(false)
            }
        })

    }, [setItems, items])

    console.log(_id)
    //619e91439d72f976d888e360
   

    return (
        <>
            {statusOff ?



                status ?


                    <Navigate replace to="/" />

                    :
                    <>
                        <FormPhotoUser id={_id} />
                        <Form_PersonalInfo id={_id} />
                        <ProfessionalInformation id={_id} />
                    </>
                : <Navigate replace to="/dontallow" />


            }



        </>
    );
};

export default CompletePerfil;
