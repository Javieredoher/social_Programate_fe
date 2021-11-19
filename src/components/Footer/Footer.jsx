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
              <a href="https://www.facebook.com/Somos-EducaM%C3%A1s-109393514766174">
                <img className="logo" src={logoFacebook} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/educam%C3%A1s/">
                <img className="logo" src={logoLinkedin} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/somoseducamas/">
                <img className="logo" src={logoInstagram} alt="" />
              </a>
            </li>
          </ul>
          <span className="copyright">
            &copy; Todos los derechos reservados
          </span>
        </div>

        <img className="logoProgramate" src={logoProgramate} alt="Programate" />
      </div>
    </footer>
  );
};

export default Footer;
