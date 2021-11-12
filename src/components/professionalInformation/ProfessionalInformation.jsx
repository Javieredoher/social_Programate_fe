import React, { useContext, useState } from "react";
import style from "./ProfessionalInformation.module.css";

import { DataContext } from "../../context/DataContext";
import { getDataUser, sendDataUser } from "../../helpers/fetch";

export const ProfessionalInformation = () => {
    const { dataUser, setDataUser, dataPhoto } = useContext(DataContext);
    const {
        user_info,
        github,
        description,
        technicalSkills,
        softSkills,
        lenguages,
        prev_studes,
        experience,
    } = dataUser;

    const { avatar } = dataPhoto;

    const getData = async () => {
        await getDataUser("endponit");
        console.log(getData);
    };
    // getData();

    const sendData = async (e) => {
        if (dataUser) {
            e.preventDefault();
            // sendDataUser(file).then((result) => {
            //     console.log("resultado: ", result);
            // });
            setDataUser({
                ...dataUser,
                prev_studes: education,
            });
            setDataUser({
                ...dataUser,
                experience: experience,
            });
            console.log(dataUser);
            const respData = await sendDataUser("endPoint", {
                user_info,
                github,
                description,
                technicalSkills,
                softSkills,
                lenguages,
                prev_studes,
                experience,
            });
            const respPhoto = await sendDataUser("endPoint", { avatar });
        } else {
            e.preventDefault();
            console.log("Error");
        }
    };

    const [pathDocument, setPathDocument] = useState("");
    const [education, setEducation] = useState({
        institution: "",
        eduDateInit: "",
        eduDateFin: "",
        certificate: "",
    });
    const [experienceNew, setExperience] = useState({
        charge: "",
        company: "",
        jobDateInit: "",
        jobDateFin: "",
        descriptionJob: "",
    });

    const onChangeEducation = ({ target }) => {
        const { name, value } = target;
        setEducation({
            ...education,
            [name]: value,
        });
        setDataUser({
            ...dataUser,
            prev_studes: Object.values(education),
        });
        // console.log(Object.values(education));
    };
    const onChangeExperience = ({ target }) => {
        const { name, value } = target;
        setExperience({
            ...experienceNew,
            [name]: value,
        });
        setDataUser({
            ...dataUser,
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
                console.log(reader.result);
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
                        name="eduDateFin"
                        id="fecha fin"
                        value={education.eduDateFin}
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
                <img src={pathDocument} alt="Document" />
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
