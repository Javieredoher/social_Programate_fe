import React from "react";
import styles from "./NotAccess.module.css";
import ImgAccess from "../../assets/images/notAccess.png";

const NotAccess = () => {
    return (
        <section className={styles.access_container}>
            <picture className={styles.card_img}>
                <img src={ImgAccess} alt="sin-acceso" className={styles.notaccess} />
            </picture>
        </section>
    )
};

export default NotAccess;
