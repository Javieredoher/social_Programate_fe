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
            <form>
                <div className={style.form_container}>
                    {/* <div className={style.forms}>
                    <label>Nombre *</label>
                    <input
                        className={style.nom}
                        type="text"
                        name="name"
                        value={dataProfile.name}
                        // onChange={onChange}
                    />
                </div> */}

                    <div className={style.forms}>
                        <label>Link de Git Hub</label>
                        <input className={style.input_nom}
                            type="text"
                            name="github"
                            value={dataProfile.github}
                            onChange={onChange}
                        />
                    </div>

                    {/* <div className={style.forms}>
                    <label>Cohorte *</label>
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
                        <label>Tecnologías</label>
                        <input className={style.input_nom}
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
                        <label>Habilidades blandas</label>
                        <input className={style.input_nom}
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
                        <label>Idiomas</label>
                        <input className={style.input_nom}
                            type="text"
                            name="lenguages"
                            onKeyDown={onKeyLanguages}
                        />

                        <div className={style.tecnologias}
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

                    <div className={style.forms}>
                        <label>Acerca de</label>
                        <textarea className={style.textarea}
                            rows="3"
                            name="description"
                            value={dataProfile.description}
                            onChange={onChange}
                        ></textarea>
                    </div>

                </div>
            </form>
        </Fragment>
    );
};
export default Form_PersonalInfo;


