import React from "react";
import style from "./Footer.module.css";
import logoProgramate from "../../assets/images/Programate-1-alta.png";
import logoEducamas from "../../assets/images/logo-blanco-alta-.png";
import logoFacebook from "../../assets/images/facebook.png";
import logoLinkedin from "../../assets/images/linkedin.png";
import logoInstagram from "../../assets/images/instagram.png";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container_footer}>
                <img
                    className={style.logoEducamas}
                    src={logoEducamas}
                    alt="Educamas"
                />
                <div className={style.logo_redes}>
                    <ul className={style.list_redes}>
                        <li>
                            <a href="https://www.facebook.com/Somos-EducaM%C3%A1s-109393514766174">
                                <img
                                    className={style.logo}
                                    src={logoFacebook}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/educam%C3%A1s/">
                                <img
                                    className={style.logo}
                                    src={logoLinkedin}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/somoseducamas/">
                                <img
                                    className={style.logo}
                                    src={logoInstagram}
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <span className={style.copyright}>
                        &copy; Todos los derechos reservados
                    </span>
                </div>

                <img
                    className={style.logoProgramate}
                    src={logoProgramate}
                    alt="Programate"
                />
            </div>
        </footer>
    );
};

export default Footer;
