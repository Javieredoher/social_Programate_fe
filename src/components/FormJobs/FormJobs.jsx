import React, { Fragment, useContext, useState, useEffect } from "react";
import style from "./FormJobs.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import { sendData } from "../../helpers/fetch";
import HardSkills from "../formInfo/HardSkills";
import SoftSkills from "../formInfo/SoftSkills";

const FormJobs = () => {
    const { postsJobs, setPostsJobs } = useContext(DataContext);

    const [technical, setTechnical] = useState([]);
    const [softSkills, setsoftSkills] = useState([]);

    //Enviar data del usuario al modelo de user y profile
    const submitData = async (e) => {
        e.preventDefault();
        try {
            await sendData("posts", postsJobs);
        } catch (error) {
            console.log("Error" + error);
        }
    };

    const onChange = ({ target }) => {
        console.log(postsJobs);
        const { name, value } = target;
        setPostsJobs({
            ...postsJobs,
            [name]: value,
        });
    };

    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setPostsJobs({
                ...postsJobs,
                technologies: technical,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    const onKeySoftSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            const addTech = softSkills.push(e.target.value);
            setPostsJobs({
                ...postsJobs,
                softSkills: softSkills,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    const onSelectChange = (e) => {
        setPostsJobs({
            ...postsJobs,
            modality: e.target.options[e.target.selectedIndex].value,
        });
    };

    useEffect(() => {
        setPostsJobs({ ...postsJobs, type: "jobs" });
    }, []);

    return (
        <Fragment>
            <div className={style.headerPerfil}>
                <img src={logo} alt="Educamás" />
                <h2>Agregar una oferta</h2>
            </div>
            <form className={style.from_container} onSubmit={submitData}>
                <div className={style.forms}>
                    <h3>Nombre de la oferta</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="title"
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Empresa</h3>
                    <input
                        placeholder=""
                        className={style.nom}
                        type="text"
                        name="company"
                        onChange={onChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Tecnologías</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="technicalSkills"
                        onKeyDown={onKeyHardSkills}
                    />
                    <br />
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
                    <br />
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
                    <h3>Lugar de la oferta</h3>
                    <input
                        className={style.nom}
                        className={style.nom}
                        type="text"
                        name="place"
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Modalidad</h3>
                    <select
                        className={style.select}
                        name="modality"
                        onChange={onSelectChange}
                    >
                        <option className={style.opcion} value="Presencial">
                            presencial
                        </option>
                        <option className={style.opcion} value="hibrida">
                            hibrida
                        </option>
                        <option className={style.opcion} value="remota">
                            remota
                        </option>
                    </select>
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Salario</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="salary"
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Contacto</h3>
                    <input
                        className={style.nom}
                        type="contact"
                        name="contact"
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Descripción de la oferta</h3>
                    <textarea
                        className={style.textarea}
                        type="text"
                        name="description"
                        rows=""
                        cols=""
                        value={postsJobs.description}
                        onChange={onChange}
                    ></textarea>
                    <br />
                </div>
                <div className={style.enviar}>
                    <button className="btn" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </Fragment>
    );
};
export default FormJobs;
