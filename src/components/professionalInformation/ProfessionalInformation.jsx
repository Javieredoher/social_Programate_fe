import React, { useContext, useEffect, useState } from "react";
import style from "./ProfessionalInformation.module.css";

import { DataContext } from "../../context/DataContext";
import { getDataUser, sendDataUser, updateDataUser } from "../../helpers/fetch";
import { BiX } from "react-icons/bi";

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

    //Traer data del usuario
    useEffect(async () => {
        const data = await getDataUser("users", idUser);
        setDataUser(data);
    }, []);
    {
    }

    //Enviar data del usuario al modelo de user y profile
    const sendData = async (e) => {
        if (dataProfile) {
            e.preventDefault();

            await sendDataUser("profiles", {
                user_info,
                github,
                description,
                technicalSkills,
                softSkills,
                lenguages,
                prev_studes,
                experience,
                user_info,
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

    const [education, setEducation] = useState([
        { institution: "", eduDateInit: "", eduDateEnd: "", certificate: "" },
        { institution: "", eduDateInit: "", eduDateEnd: "", certificate: "" },
        { institution: "", eduDateInit: "", eduDateEnd: "", certificate: "" },
    ]);
    const [experienceNew, setExperience] = useState([
        {
            charge: "",
            company: "",
            jobDateInit: "",
            jobDateFin: "",
            descriptionJob: "",
        },
        {
            charge: "",
            company: "",
            jobDateInit: "",
            jobDateFin: "",
            descriptionJob: "",
        },
        {
            charge: "",
            company: "",
            jobDateInit: "",
            jobDateFin: "",
            descriptionJob: "",
        },
    ]);

    // Guardar los cambios de la educación
    const onChangeEducation = ({ target }) => {
        const idEducation = target.parentElement.parentElement.id;
        const { name, value } = target;

        switch (idEducation) {
            case "0":
                education[0][name] = value;
                setEducation([...education]);
            case "1":
                education[1][name] = value;
                setEducation([...education]);
            case "2":
                education[2][name] = value;
                setEducation([...education]);
        }
    };

    const [nameFile, setNameFile] = useState(["0", "0", "0"]);
    const onFileChange1 = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
            education[0].certificate = reader.result;
            setEducation([...education]);
        };

        if (file.type === "application/pdf") {
            setNameFile([...nameFile, (nameFile[0] = file.name)]);
        }

        // console.log(education);
    };

    const onFileChange2 = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
            education[1].certificate = reader.result;
            setEducation([...education]);
        };

        if (file.type === "application/pdf") {
            setNameFile([...nameFile, (nameFile[1] = file.name)]);
        }

        console.log(education);
    };

    const onFileChange3 = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
            education[2].certificate = reader.result;
            setEducation([...education]);
        };

        if (file.type === "application/pdf") {
            setNameFile([...nameFile, (nameFile[2] = file.name)]);
        }
    };

    const deleteCertificate = (e) => {
        const idEducation = e.target.parentElement.parentElement.id;
        switch (idEducation) {
            case "0":
                setEducation([...education, (education[0].certificate = "")]);
                setNameFile([...nameFile, (nameFile[0] = "")]);
            case "1":
                setEducation([...education, (education[1].certificate = "")]);
                setNameFile([...nameFile, (nameFile[1] = "")]);
            case "2":
                setEducation([...education, (education[2].certificate = "")]);
                setNameFile([...nameFile, (nameFile[2] = "")]);
        }
    };

    const [countEdu, setcountEdu] = useState(1);
    const addEducation = () => {
        if (countEdu === 1) {
            showFormEducation[1] = true;
            setShowFormEducation([...showFormEducation]);
            setcountEdu(2);
        } else if (countEdu == 2) {
            showFormEducation[2] = true;
            setShowFormEducation([...showFormEducation]);
        }
    };

    const [showFormEducation, setShowFormEducation] = useState([
        true,
        false,
        false,
    ]);

    useEffect(() => {
        const sliceEducation = education.slice(0, countEdu);
        setDataProfile({
            ...dataProfile,
            prev_studes: sliceEducation,
        });
    }, [education]);

    const [countExp, setcountExp] = useState(1);
    const addExperience = () => {
        if (countExp === 1) {
            showFormExperience[1] = true;
            setShowFormExperience([...showFormExperience]);
            setcountExp(2);
        } else if (countExp == 2) {
            showFormExperience[2] = true;
            setShowFormExperience([...showFormExperience]);
        }
    };

    const [showFormExperience, setShowFormExperience] = useState([
        true,
        false,
        false,
    ]);

    //Guardar los cambios de la experiencia
    const onChangeExperience = ({ target }) => {
        const idEducation = target.parentElement.parentElement.id;
        const { name, value } = target;
        switch (idEducation) {
            case "0":
                experienceNew[0][name] = value;
                setExperience([...experienceNew]);
            case "1":
                experienceNew[1][name] = value;
                setExperience([...experienceNew]);
            case "2":
                experienceNew[2][name] = value;
                setExperience([...experienceNew]);
        }
        // setExperience({
        //     ...experienceNew,
        //     [name]: value,
        // });
        // setDataProfile({
        //     ...dataProfile,
        //     experience: [Object.values(experienceNew)],
        // });
    };
    useEffect(() => {
        const sliceExperience = experienceNew.slice(0, countExp);
        setDataProfile({
            ...dataProfile,
            experience: sliceExperience,
        });
        // console.log(dataProfile);
    }, [experienceNew]);

    return (
        <div className={style.formProfessionalInformation}>
            <div className={style.education}>
                {/* Seccion de educación formal  */}
                <div className={style.title}>
                    <h2> Educación </h2>
                    <i
                        className="fa-solid fa-plus icon"
                        onClick={addEducation}
                    ></i>
                </div>

                {showFormEducation[0] ? (
                    <div className={style.education} id="0">
                        <div className={style.inputs}>
                            <label
                                className={style.label}
                                htmlFor="institution"
                            >
                                Institución Educativa*
                            </label>
                            <input
                                type="text"
                                className={style.inputPersonal}
                                name="institution"
                                id="institution"
                                value={education[0].institution}
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
                                value={education[0].eduDateInit}
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
                                value={education[0].eduDateEnd}
                                onChange={onChangeEducation}
                            />
                        </div>

                        <div name="formulario" className={style.inputFile}>
                            <label className={style.label} htmlFor="edad">
                                Añadir certificado <span>*pdf *jpg *png</span>
                            </label>

                            <input
                                type="file"
                                name="certificate"
                                accept="application/pdf, image/jpg, image/png"
                                multiple
                                onChange={onFileChange1}
                            />
                        </div>
                        {education[0].certificate && nameFile[0].length <= 1 ? (
                            <div className={style.containDelete}>
                                <BiX
                                    className={style.deleteImg}
                                    onClick={deleteCertificate}
                                />
                                <img
                                    className={style.imgDocument}
                                    src={education[0].certificate}
                                    alt="Document"
                                />
                            </div>
                        ) : null}
                        {nameFile[0].length > 1 ? (
                            <div className={style.containDelete}>
                                <BiX
                                    className={style.deleteImg}
                                    onClick={deleteCertificate}
                                />
                                <h5 className={style.nameFile}>{nameFile}</h5>
                                {/* <embed
                             src={education.certificate}
                             type="application/pdf"
                             width="300px"
                             height="600px"
                         /> */}
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>

            {showFormEducation[1] ? (
                <div className={style.education} id="1">
                    <div className={style.inputs}>
                        <label className={style.label} htmlFor="institution">
                            Institución Educativa*
                        </label>
                        <input
                            type="text"
                            className={style.inputPersonal}
                            name="institution"
                            id="institution"
                            value={education[1].institution}
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
                            value={education[1].eduDateInit}
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
                            value={education[1].eduDateEnd}
                            onChange={onChangeEducation}
                        />
                    </div>

                    <div name="formulario" className={style.inputFile}>
                        <label className={style.label} htmlFor="edad">
                            Añadir certificado <span>*pdf *jpg *png</span>
                        </label>

                        <input
                            type="file"
                            name="certificate"
                            accept="application/pdf, image/jpg, image/png"
                            multiple
                            onChange={onFileChange2}
                        />
                    </div>
                    {education[1].certificate && nameFile[1].length <= 1 ? (
                        <div className={style.containDelete}>
                            <BiX
                                className={style.deleteImg}
                                onClick={deleteCertificate}
                            />
                            <img
                                className={style.imgDocument}
                                src={education[1].certificate}
                                alt="Document"
                            />
                        </div>
                    ) : null}
                    {nameFile[1].length > 1 ? (
                        <div className={style.containDelete}>
                            <BiX
                                className={style.deleteImg}
                                onClick={deleteCertificate}
                            />
                            <h5 className={style.nameFile}>{nameFile}</h5>
                        </div>
                    ) : null}
                </div>
            ) : null}

            {showFormEducation[2] ? (
                <div className={style.education} id="2">
                    <div className={style.inputs}>
                        <label className={style.label} htmlFor="institution">
                            Institución Educativa*
                        </label>
                        <input
                            type="text"
                            className={style.inputPersonal}
                            name="institution"
                            id="institution"
                            value={education[2].institution}
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
                            value={education[2].eduDateInit}
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
                            value={education[2].eduDateEnd}
                            onChange={onChangeEducation}
                        />
                    </div>

                    <div name="formulario" className={style.inputFile}>
                        <label className={style.label} htmlFor="edad">
                            Añadir certificado <span>*pdf *jpg *png</span>
                        </label>

                        <input
                            type="file"
                            name="certificate"
                            accept="application/pdf, image/jpg, image/png"
                            multiple
                            onChange={onFileChange3}
                        />
                    </div>
                    {education[2].certificate && nameFile[2].length <= 1 ? (
                        <div className={style.containDelete}>
                            <BiX
                                className={style.deleteImg}
                                onClick={deleteCertificate}
                            />
                            <img
                                className={style.imgDocument}
                                src={education[2].certificate}
                                alt="Document"
                            />
                        </div>
                    ) : null}
                    {nameFile[2].length > 1 ? (
                        <div className={style.containDelete}>
                            <BiX
                                className={style.deleteImg}
                                onClick={deleteCertificate}
                            />
                            <h5 className={style.nameFile}>{nameFile}</h5>
                        </div>
                    ) : null}
                </div>
            ) : null}

            {/* Experiencia laboral */}
            <div className={style.experience}>
                <div className={style.title}>
                    <h2>Experiencia</h2>
                    <i
                        className="fa-solid fa-plus icon"
                        onClick={addExperience}
                    ></i>
                </div>

                {showFormExperience[0] ? (
                    <div className={style.experience} id="0">
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
                            <label
                                className={style.label}
                                htmlFor="description"
                            >
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
                ) : null}

                {showFormExperience[1] ? (
                    <div className={style.experience} id="1">
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
                            <label
                                className={style.label}
                                htmlFor="description"
                            >
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
                ) : null}

                {showFormExperience[2] ? (
                    <div className={style.experience} id="2">
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
                            <label
                                className={style.label}
                                htmlFor="description"
                            >
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
                ) : null}
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
