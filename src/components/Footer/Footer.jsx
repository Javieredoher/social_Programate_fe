import React from "react";
import styles from "./Footer.module.css";
import logoProgramate from "../../assets/images/Programate-1-alta.png";
import logoEducamas from "../../assets/images/logo-blanco-alta-.png";
import logoFacebook from "../../assets/images/facebook.png";
import logoLinkedin from "../../assets/images/linkedin.png";
import logoInstagram from "../../assets/images/instagram.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerFooter}>
                <img
                    className={styles.logoEducamas}
                    src={logoEducamas}
                    alt="Educamas"
                />
                <div className={styles.logoRedes}>
                    <ul className={styles.listRedes}>
                        <li>
                            <a href="https://www.facebook.com/Somos-EducaM%C3%A1s-109393514766174">
                                <img
                                    className={styles.logoSocial}
                                    src={logoFacebook}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/educam%C3%A1s/">
                                <img
                                    className={styles.logoSocial}
                                    src={logoLinkedin}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/somoseducamas/">
                                <img
                                    className={styles.logoSocial}
                                    src={logoInstagram}
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <span className={styles.copyright}>
                        &copy; Todos los derechos reservados
                    </span>
                </div>

                <img
                    className={styles.logoProgramate}
                    src={logoProgramate}
                    alt="Programate"
                />
            </div>
        </footer>
    );
};

export default Footer;
