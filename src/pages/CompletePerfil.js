import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import Form_PersonalInfo from "../components/formInfo/Form_PersonalInfo";
import FormPhotoUser from "../components/formPhotoUser/FormPhotoUser";
import { ProfessionalInformation } from "../components/professionalInformation/ProfessionalInformation";
import { DataContext } from "../context/DataContext";
import { getDataAll } from "../helpers/fetch";

const CompletePerfil = () => {

    const { sendData } = useContext(DataContext);
    const [status, setStatus] = useState(false)
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
        })

    }, [setItems, items])



    return (
        <>
            {status ?

                <Navigate replace to="/formevent" /> :
                <>
                    <FormPhotoUser id={_id} />
                    <Form_PersonalInfo id={_id} />
                    <ProfessionalInformation id={_id} />
                </>


            }
            {/* <FormPhotoUser id={_id} />
            <Form_PersonalInfo id={_id} />
            <ProfessionalInformation id={_id} /> */}


        </>
    );
};

export default CompletePerfil;
