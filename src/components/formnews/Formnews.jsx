import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "./Formnews.module.css";
import { sendData } from "../../helpers/fetch";

import { DataContext } from "../../context/DataContext";
import HardSkills from "./HardSkills";
import { useHistory } from "react-router-dom";

const Formnews = () => {
    const { posts, setPosts } = useContext(DataContext);

    const { title, type, description, images, technologies } = posts;

    const history = useHistory();

    useEffect(() => {
        setPosts({ ...posts, type: "news" });
    }, []);

    //Enviar data de la noticia al modelo de post
    const submitData = async (e) => {
        e.preventDefault();

        try {
            await sendData("posts", {
                title,
                description,
                images,
                technologies,
                type,
            });
            history.push("/formevent");
        } catch (error) {
            console.log(error);
        }
    };

    const onChange = ({ target }) => {
        const { name, value } = target;
        setPosts({
            ...posts,
            [name]: value,
        });
    };

    const [technical, setTechnical] = useState([]);
    const onKeyTechnologies = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setPosts({
                ...posts,
                technologies: technical,
            });
            e.target.value = "";
            e.preventDefault();
            // console.log(posts, technical);
        }
    };

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size < 200000) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function load() {
                setPosts({ ...posts, images: reader.result });
            };
        } else {
            alert(`El tamaño máximo es 200 KB`);
        }
    };

    return (
        <Fragment>
            <form className={styles.form_container} onSubmit={submitData}>
                <h1>Noticias</h1>
                <div className={styles.form}>
                    <h3>Nombre de la noticia</h3>
                    <input
                        className={styles.input}
                        type="text"
                        name="title"
                        onChange={onChange}
                    />
                    <br />
                </div>

                <div className={styles.form}>
                    <h3>Contenido escrito de la misma</h3>
                    <textarea
                        className={styles.textarea}
                        type="text"
                        name="description"
                        rows=""
                        cols=""
                        onChange={onChange}
                    ></textarea>
                    <br />
                </div>

                <div className={styles.form}>
                    <h3>Tecnologías</h3>
                    <input
                        className={styles.input}
                        type="text"
                        name="tecno"
                        onKeyDown={onKeyTechnologies}
                    />
                    <br />
                    <div className={styles.tecno}>
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

                <div className={styles.form}>
                    <h3>Imagen</h3>
                    <input
                        className={styles.image}
                        type="file"
                        name="image"
                        onChange={onFileChange}
                    />
                    <br />
                </div>
                <div className={styles.send}>
                    <button className="btn">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
};

export default Formnews;
