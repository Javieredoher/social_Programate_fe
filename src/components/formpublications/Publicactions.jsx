import React, { Fragment } from "react";
import styles from "../formpublications/publications.module.css";

const Publications = () => {
    return (
        <Fragment>
            <form className={styles.form_container}>
                <h1>Noticias</h1>
                <div className={styles.form}>
                    <h3>Nombre de la notcia</h3>
                    <input className={styles.input} type="text" name="news" />
                    <br />
                </div>

                <div className={styles.form}>
                    <h3>Contenido escrito de la misma</h3>
                    <textarea
                        className={styles.textarea}
                        type="text"
                        name="content"
                        rows=""
                        cols=""
                    ></textarea>
                    <br />
                </div>

                <div className={styles.form}>
                    <h3>Tecnologías</h3>
                    <input className={styles.input} type="text" name="tecno" />
                    <br />
                    <div className={styles.tecno}>
                        <button>HTML5</button>
                        <button>CSS3</button>
                        <button>JavaScript</button>
                        <button>React</button>
                        <button>Angular</button>
                        <button>MySQL</button>
                        <button>Nodejs</button>
                        <button>MongoDB</button>
                    </div>
                </div>

                <div className={styles.form}>
                    <h3>Imagen</h3>
                    <input
                        className={StyleSheet.input}
                        type="file"
                        name="image"
                    />
                    <br />
                </div>
                <div className={styles.send}>
                    <button className="btn" type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
};

export default Publications;
