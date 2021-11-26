import React, { Fragment, useContext, useState, useEffect } from "react";
import style from "./FormJobs.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import { sendData } from "../../helpers/fetch";
import HardSkills from "../formInfo/HardSkills";
import SoftSkills from "../formInfo/SoftSkills";
import { useNavigate } from "react-router-dom";

const FormJobs = () => {
    const { postsJobs, setPostsJobs, idUser } = useContext(DataContext);

    const [technical, setTechnical] = useState([]);
    const [softSkills, setsoftSkills] = useState([]);

    const navigate = useNavigate();

    //Enviar data del usuario al modelo de user y profile
    const submitData = async (e) => {
        e.preventDefault();
        try {
            await sendData("posts", postsJobs);
            navigate("/home");
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
            user_info: idUser,
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
        <div className={style.section}>
            <div className={style.headerPerfil}>
                <img src={logo} alt="Educamás" />
                <h2 className={style.title}>Agregar una oferta</h2>
            </div>
            <form className={style.from_container} onSubmit={submitData}>
                <div className={style.forms}>
                    <h3 className={style.subtitle}>Nombre de la oferta</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="title"
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3 className={style.subtitle}>Empresa</h3>
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
                    <h3 className={style.subtitle}>Tecnologías</h3>
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
                    <h3 className={style.subtitle}>Habilidades blandas</h3>
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
                    <h3 className={style.subtitle}>Lugar de la oferta</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="place"
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    {/* Revisar
                    <h3 className={style.subtitle}>Modalidad</h3>
                    <select className={style.select} name="modality">*/}

                    <h3>Modalidad</h3>
                    <select
                        className={style.select}
                        name="modality"
                        onChange={onSelectChange}
                        /* value="modality" */
                    >
                        <option value="select">Selecciona la modalidad</option>

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
                    <h3 className={style.subtitle}>Salario</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="salary"
                        onChange={onChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3 className={style.subtitle}>Contacto</h3>

                    <input
                        className={style.nom}
                        type="text"
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
                    <button className={style.btn} type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};
export default FormJobs;
