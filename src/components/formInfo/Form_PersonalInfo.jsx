import React, { Fragment, useContext, useRef, useState } from "react";
import style from "./Form_PersonalInfo.module.css";
import Languages from "./Languages";
import { DataContext } from "../../context/DataContext";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

const Form_PersonalInfo = () => {
    const { dataProfile, setDataProfile } = useContext(DataContext);

    const [technical, setTechnical] = useState([]);
    const [softSkills, setsoftSkills] = useState([]);
    const [languages, setLanguages] = useState([]);

    const onChange = ({ target }) => {
        const { name, value } = target;
        setDataProfile({
            ...dataProfile,
            [name]: value,
        });
    };

    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setDataProfile({
                ...dataProfile,
                technicalSkills: technical,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    const onKeySoftSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            const addTech = softSkills.push(e.target.value);
            setDataProfile({
                ...dataProfile,
                softSkills: softSkills,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    // let targetSkill = useRef("null");
    const onKeyLanguages = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            languages.push(e.target.value);
            setDataProfile({
                ...dataProfile,
                lenguages: languages,
            });
            e.target.value = "";
            // console.log(languages);

            e.preventDefault();
        }
    };

    return (
        <Fragment>
            <form className={style.form_container}>
                {/* <div className={style.forms}>
                    <h3>Nombre *</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="name"
                        value={dataProfile.name}
                        // onChange={onChange}
                    />
                </div> */}

                <div className={style.forms}>
                    <h3>Link de Git Hub</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="github"
                        value={dataProfile.github}
                        onChange={onChange}
                    />
                </div>

                {/* <div className={style.forms}>
                    <h3>Cohorte *</h3>
                    <select
                        className={style.nom}
                        name="cohorte"
                        defaultValue="0"
                        // onChange={onSelectChange}
                    >
                        <option value="0">Cohorte</option>
                        <option value="1">Primeros</option>
                        <option value="2">Quackoders</option>
                    </select> */}
                {/* <input
                        className={style.nom}
                        type="text"
                        name="cohorte"
                        value={dataProfile.cohorte}
                        onChange={onChange}
                    /> */}
                {/* </div> */}

                <div className={style.forms}>
                    <h3>Acerca de</h3>
                    <textarea
                        className={style.textarea}
                        rows="3"
                        name="description"
                        value={dataProfile.description}
                        onChange={onChange}
                    ></textarea>
                </div>

                <div className={style.forms}>
                    <h3>Tecnologías</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="technicalSkills"
                        onKeyDown={onKeyHardSkills}
                    />
                    <div className={style.tecnologias} id="technologias">
                        {technical.map((skill, index) => (
                            <HardSkills
                                skill={skill}
                                key={index}
                                technical={technical}
                                setTechnical={setTechnical}
                            />
                        ))}
                    </div>
                </div>

                <div className={style.forms}>
                    <h3>Habilidades blandas</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="softSkills"
                        onKeyDown={onKeySoftSkills}
                    />
                    <div className={style.tecnologias}>
                        {softSkills.map((skill, index) => (
                            <SoftSkills
                                skill={skill}
                                key={index}
                                softSkills={softSkills}
                                setsoftSkills={setsoftSkills}
                            />
                        ))}
                    </div>
                </div>

                <div className={style.forms}>
                    <h3>Idiomas</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="lenguages"
                        onKeyDown={onKeyLanguages}
                    />
                    <div
                        className={style.tecnologias}
                        id="languages"
                        // ref={targetSkill}
                    >
                        {languages.map((skill, index) => (
                            <Languages
                                skill={skill}
                                key={index}
                                languages={languages}
                                setLanguages={setLanguages}
                            />
                        ))}
                    </div>
                </div>
            </form>
        </Fragment>
    );
};
export default Form_PersonalInfo;


