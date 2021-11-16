import React, { useContext, useEffect, useState } from "react";
import style from "./ProfessionalInformation.module.css";

import { DataContext } from "../../context/DataContext";
import { getDataUser, sendDataUser, updateDataUser } from "../../helpers/fetch";

export const ProfessionalInformation = () => {
    const { dataProfile, setDataProfile, dataUser, setDataUser, idUser } =
        useContext(DataContext);
    const {
        user_info,
        github,
        description,
        technicalSkills,
        softSkills,
        lenguages,
        prev_studes,
        experience,
    } = dataProfile;

    const {
        avatar,
        cohorte,
        contactNumber,
        email,
        firstName,
        lastName,
        middleName,
        passwordHash,
        program,
        rol,
        secondSurname,
        state,
        _id,
    } = dataUser;

    // const [idUser, setIdUser] = useState("618ea996e890a86c5d63fd6a");

    //Traer data del usuario
    useEffect(async () => {
        const data = await getDataUser("users", idUser);
        setDataUser(data);
        // console.log(dataUser);
    }, []);
    {
    }
    // console.log(dataProfile);

    //Enviar data del usuario al modelo de user y profile
    const sendData = async (e) => {
        // console.log(dataUser);
        if (dataProfile) {
            e.preventDefault();

            setDataProfile({
                ...dataProfile,
                prev_studes: education,
            });
            setDataProfile({
                ...dataProfile,
                experience: experience,
            });
            console.log(dataProfile);
            await sendDataUser("profiles", {
                user_info,
                github,
                description,
                technicalSkills,
                softSkills,
                lenguages,
                prev_studes,
                experience,
            });

            await updateDataUser("users", idUser, {
                avatar,
                cohorte,
                contactNumber,
                email,
                firstName,
                lastName,
                middleName,
                passwordHash,
                program,
                rol,
                secondSurname,
                state,
                _id,
            });
        } else {
            e.preventDefault();
            console.log("Error");
        }
    };

    const [pathDocument, setPathDocument] = useState("");
    const [education, setEducation] = useState({
        institution: "",
        eduDateInit: "",
        eduDateEnd: "",
        certificate: "",
    });
    const [experienceNew, setExperience] = useState({
        charge: "",
        company: "",
        jobDateInit: "",
        jobDateFin: "",
        descriptionJob: "",
    });

    // Guardar los cambios de la educación
    const onChangeEducation = ({ target }) => {
        const { name, value } = target;
        setEducation({
            ...education,
            [name]: value,
        });
        setDataProfile({
            ...dataProfile,
            prev_studes: Object.values(education),
        });
        // console.log(Object.values(education));
    };

    //Guardar los cambios de la experiencia
    const onChangeExperience = ({ target }) => {
        const { name, value } = target;
        setExperience({
            ...experienceNew,
            [name]: value,
        });
        setDataProfile({
            ...dataProfile,
            experience: Object.values(experienceNew),
        });
    };

    const onFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            // console.log(file);

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function load() {
                setPathDocument(reader.result);
                setEducation({ ...education, certificate: reader.result });
                // console.log(reader.result);
            };
        }
    };

    return (
        <div className={style.formProfessionalInformation}>
            <div className={style.education}>
                {/* Seccion de educación formal  */}
                <div className={style.title}>
                    <h2> Educación </h2>
                </div>
                <div className={style.inputs}>
                    <label className={style.label} htmlFor="institution">
                        Institución Educativa*
                    </label>
                    <input
                        type="text"
                        className={style.inputPersonal}
                        name="institution"
                        id="institution"
                        value={education.institution}
                        onChange={onChangeEducation}
                        placeholder="nombre de la institución"
                    />
                </div>
                {/* seccion de las fechas */}
                <div className={style.containDate}>
                    <label className={style.label} htmlFor="email">
                        Fecha inicio{" "}
                    </label>
                    <input
                        type="date"
                        className={style.inputDate}
                        name="eduDateInit"
                        id="fecha inicio"
                        value={education.eduDateInit}
                        onChange={onChangeEducation}
                    />
                </div>
                <div className={style.containDate}>
                    <label className={style.label} htmlFor="edad">
                        Fecha fin
                    </label>
                    <input
                        type="date"
                        className={style.inputDate}
                        name="eduDateEnd"
                        id="fecha fin"
                        value={education.eduDateEnd}
                        onChange={onChangeEducation}
                    />
                </div>

                <div name="formulario" className={style.inputFile}>
                    <label className={style.label} htmlFor="edad">
                        Añadir certificado
                    </label>

                    <input
                        type="file"
                        name="certificate"
                        accept="application/pdf, image/jpg, image/png"
                        multiple
                        // value={dataUser.certificate}
                        onChange={onFileChange}
                    />
                </div>
                {pathDocument ? (
                    <img
                        className={style.imgDocument}
                        src={pathDocument}
                        alt="Document"
                    />
                ) : null}
            </div>

            {/* Experiencia laboral */}
            <div className={style.experience}>
                <div className={style.title}>
                    <h2>Experiencia</h2>
                </div>
                <div className={style.inputs}>
                    <label className={style.label} htmlFor="position">
                        Cargo
                    </label>
                    <input
                        type="text"
                        className={style.inputPersonal}
                        name="charge"
                        id="position"
                        value={experience.charge}
                        onChange={onChangeExperience}
                        placeholder="Desarrollador backend Java"
                    />
                </div>

                <div className={style.inputs}>
                    <label className={style.label} htmlFor="company">
                        Empresa
                    </label>
                    <input
                        type="text"
                        className={style.inputPersonal}
                        name="company"
                        id="company"
                        value={experience.company}
                        onChange={onChangeExperience}
                        placeholder="Nombre de la empresa"
                    />
                </div>
                <div className={style.containDate}>
                    <label className={style.label} htmlFor="email">
                        Fecha inicio{" "}
                    </label>
                    <input
                        type="date"
                        className={style.inputDate}
                        name="jobDateInit"
                        id="fecha inicio"
                        value={experience.jobDateInit}
                        onChange={onChangeExperience}
                    />
                </div>

                <div className={style.containDate}>
                    <label className={style.label} htmlFor="edad">
                        Fecha fin
                    </label>
                    <input
                        type="date"
                        className={style.inputDate}
                        name="jobDateFin"
                        id="fecha fin"
                        value={experience.jobDateFin}
                        onChange={onChangeExperience}
                    />
                </div>

                <div className={style.inputs}>
                    <label className={style.label} htmlFor="description">
                        {" "}
                        Descripción{" "}
                    </label>
                    <input
                        type="textarea"
                        className={style.inputPersonal}
                        name="descriptionJob"
                        id="description"
                        value={experience.descriptionJob}
                        onChange={onChangeExperience}
                        placeholder="Realicé..."
                    />
                </div>
            </div>
            <button
                className={style.btnSubmit}
                type="submit"
                onClick={sendData}
            >
                Guardar cambios
            </button>
        </div>
    );
};
