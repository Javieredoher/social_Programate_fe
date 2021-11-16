import React, { Fragment } from "react";
import styles from "../makingpost/Makingpost.module.css";

const Makingpost = () => {
    return (
        <Fragment>
            <div className={styles.card_container}>
                <div className={styles.card}>
                <i class="bx bxs-user"></i>
                <select name="" id="post" className={styles.share}>
                    <option value="">Crear públicacion</option>
                    <option value="comentario">Añadir comentario</option>
                    <option value="documento">Añadir documento</option>
                    <option value="noticia">Añadir noticia</option>
                    <option value="imagen">Añadir imagen</option>
                </select>
                </div>
            </div>
        </Fragment>
    );
};

export default Makingpost;
