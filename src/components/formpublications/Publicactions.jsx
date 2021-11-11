import React, { Fragment } from 'react';
import styles from "../formpublications/publications.module.css";


const Publications = () => {


    return (
        <Fragment>
            <form className={styles.form_container}>
                <h1>Noticias</h1>
                <div className={styles.form}>
                    <h3>Nombre de la notcia</h3>
                    <input className={styles.news} type="text" name="news"/>
                    <br />
                </div>

                <div className={styles.form}>
                    <h3>Contenido escrito de la misma</h3>
                    <textarea className={styles.content} type="text" name="content" rows="5" cols="80"></textarea>
                    <input className={styles.content} type="text" name="content" />
                    <br />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </Fragment>
    );
};

export default Publications;
