import React from "react";
import "./Footer.css";
import logoProgramate from "../../assets/images/Programate-1-alta.png";
import logoEducamas from "../../assets/images/logo-blanco-alta-.png";
import logoFacebook from "../../assets/images/facebook.png";
import logoLinkedin from "../../assets/images/linkedin.png";
import logoInstagram from "../../assets/images/instagram.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-footer">
                <img
                    className="logoEducamas"
                    logoEducamas
                    src={logoEducamas}
                    alt="Educamas"
                />
                <div className="logo-redes">
                    <ul className="list-redes">
                        <li>
                            <img className="logo" src={logoFacebook} alt="" />
                        </li>
                        <li>
                            <img className="logo" src={logoLinkedin} alt="" />
                        </li>
                        <li>
                            <img className="logo" src={logoInstagram} alt="" />
                        </li>
                    </ul>
                    <span className="copyright">
                        &copy; Todos los derechos reservados
                    </span>
                </div>

                <img
                    className="logoProgramate"
                    src={logoProgramate}
                    alt="Programate"
                />
            </div>
        </footer>
    );
};

export default Footer;
