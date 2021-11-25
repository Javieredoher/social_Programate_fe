import React, { Fragment, useState, useContext, useEffect } from "react";
import style from "./FormEvent.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import HardSkills from "../formInfo/HardSkills";
import { getData, sendData, updateData } from "../../helpers/fetch";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FormEvent = () => {
    const { postsEvent, setPostsEvent } = useContext(DataContext);
    const {
        user_info,
        title,
        type,
        description,
        link,
        dateEvent,
        technologies,
        place,
    } = postsEvent;
    const history = useHistory();
    const params = useParams();

    /* const [techs, setTechs] = useState([]); */
    const [technical, setTechnical] = useState([]);

    //Enviar data del usuario al modelo de user y profile
    const submitData = async (e) => {
        e.preventDefault();

        if (
            postsEvent.title.length <= 0 ||
            postsEvent.description.length <= 0 ||
            postsEvent.link.length <= 0 ||
            postsEvent.dateEvent.length <= 0 ||
            postsEvent.technologies.length <= 0 ||
            postsEvent.place.length <= 0
        ) {
            Swal.fire({
                title: "Completar datos",
                text: "Todos los campos son obligatorios",
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
                timer: "6000",
            });
        } else {
            try {
                if (!params.id) {
                    await sendData("posts", {
                        user_info,
                        title,
                        description,
                        link,
                        dateEvent,
                        technologies,
                        place,
                    });
                } else {
                    await updateData("posts", params.id, {
                        user_info,
                        title,
                        description,
                        link,
                        dateEvent,
                        technologies,
                        place,
                    });
                }

                history.push("/home");
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostsEvent({ ...postsEvent, [name]: value });
    };

    /*   const onCapture = (e) => {
        const value = e.target.value;

        if (e.key === "Enter" && value.length > 0) {
            techs.push(e.target.value);
            setPostsEvent({ ...postsEvent, technologies: techs });
            e.target.value = "";
            e.preventDefault();
        }
    }; */

    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);

            setPostsEvent({
                ...postsEvent,
                technologies: technical,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

    const getDataEvent = async (id) => {
        try {
            const dataEvent = await getData("posts", id);
            setPostsEvent(dataEvent);
            setTechnical(dataEvent.technologies);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (params.id) {
            getDataEvent(params.id);
        }
    }, []);
    /* useEffect(() => {}, [postsEvent, setPostsEvent, techs, setTechs]); */
    useEffect(() => {
        setPostsEvent({ ...postsEvent, type: "event" });
    }, []);

    return (
        <Fragment>
            <div className={style.headerPerfil}>
                <img src={logo} alt="Educamás" />
                <h2>Agregar evento</h2>
            </div>
            <form className={style.from_container} onSubmit={submitData}>
                <div className={style.forms}>
                    <h3>Nombre del evento</h3>
                    <input
                        placeholder="Nombre del evento"
                        className={style.nom}
                        type="text"
                        name="title"
                        onChange={handleChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Descripción</h3>
                    <input
                        placeholder="Breve descripción del evento"
                        className={style.nom}
                        type="textarea"
                        name="description"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Lugar</h3>
                    <input
                        placeholder="Lugar"
                        className={style.nom}
                        type="text"
                        name="place"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Fecha del evento</h3>
                    <input
                        className={style.nom}
                        type="date"
                        name="dateEvent"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Link de inscripción</h3>
                    <input
                        placeholder="Link de inscripción"
                        className={style.nom}
                        type="text"
                        name="link"
                        onChange={handleChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Tecnologías</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="technologies"
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
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                <div className={style.enviar}>
                    <button className="btn">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
};
export default FormEvent;
