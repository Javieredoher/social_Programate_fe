import React, { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import style from "./Form_PersonalInfo.module.css";

const Form_PersonalInfo = () => {
    const { dataUser, setDataUser } = useContext(DataContext);

    const [technical, setTechnical] = useState([]);
    const [softSkills, setSoftSkills] = useState([]);
    const [languages, setLanguages] = useState([]);

    const onChange = ({ target }) => {
        const { name, value } = target;
        setDataUser({
            ...dataUser,
            [name]: value,
        });
    };

    const onKeyHardSkills = (e) => {
        if (e.key === "Enter") {
            const addTech = technical.push(e.target.value);
            setDataUser({
                ...dataUser,
                technicalSkills: technical,
            });
            e.preventDefault();
        }
    };

    const onKeySoftSkills = (e) => {
        if (e.key === "Enter") {
            const addTech = softSkills.push(e.target.value);
            setDataUser({
                ...dataUser,
                softSkills: softSkills,
            });
            e.preventDefault();
        }
    };

    const onKeyLanguages = (e) => {
        if (e.key === "Enter") {
            const addTech = languages.push(e.target.value);
            setDataUser({
                ...dataUser,
                lenguages: languages,
            });
            e.preventDefault();
        }
    };

    // const onSelectChange = (e) => {
    //     setDataUser({
    //         ...dataUser,
    //         cohorte: {
    //             name: e.target.options[e.target.selectedIndex].text,
    //             num: parseInt(e.target.options[e.target.selectedIndex].value),
    //         },
    //     });
    // };

    return (
        <Fragment>
            <form className={style.form_container}>
                {/* <div className={style.forms}>
                    <h3>Nombre *</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="name"
                        value={dataUser.name}
                        // onChange={onChange}
                    />
                </div> */}

                <div className={style.forms}>
                    <h3>Link de Git Hub</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="github"
                        value={dataUser.github}
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
                        value={dataUser.cohorte}
                        onChange={onChange}
                    /> */}
                {/* </div> */}

                <div className={style.forms}>
                    <h3>Acerca de</h3>
                    <textarea
                        className={style.textarea}
                        rows="3"
                        name="description"
                        value={dataUser.description}
                        onChange={onChange}
                    ></textarea>
                </div>

                <div className={style.forms}>
                    <h3>Tecnologías</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="technicalSkills"
                        // value={technical[0]}
                        // onChange={onChangeKey}
                        onKeyDown={onKeyHardSkills}
                    />
                    <div className={style.tecnologias}>
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>Javascript</button>
                        <button>React</button>
                        <button>Angular</button>
                        <button>MySQL</button>
                        <button>Nodejs</button>
                        <button>MongoDB</button>
                    </div>
                </div>

                <div className={style.forms}>
                    <h3>Habilidades blandas</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="softSkills"
                        // value={softSkills[0]}
                        onKeyDown={onKeySoftSkills}
                    />
                    <div className={style.tecnologias}>
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>Javascript</button>
                        <button>React</button>
                        <button>Angular</button>
                        <button>MySQL</button>
                        <button>Nodejs</button>
                        <button>MongoDB</button>
                    </div>
                </div>

                <div className={style.forms}>
                    <h3>Idiomas</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="lenguages"
                        // value={languages[0]}
                        onKeyDown={onKeyLanguages}
                    />
                </div>
            </form>
        </Fragment>
    );
};
export default Form_PersonalInfo;
