import React from "react";
import styles from "./NotAccess.module.css";
// import ImgAccess from "../../assets/images/notAccess.png";

const NotAccess = () => {
    return (
        <section className={styles.access_container}>
            <div className={styles.notallowed_container}>
            <h1 className={styles.title_container}>405 Not Allowed</h1>
            </div>
            {/* <picture className={styles.card_img}>
                <img src={ImgAccess} alt="sin-acceso" className={styles.notaccess} />
            </picture> */}
        </section>
    )
};

export default NotAccess;
