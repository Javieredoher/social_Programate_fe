import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import logoperfil from "../../assets/images/logo-perfil.png";
import { BiGroup } from "react-icons/bi";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiBell } from "react-icons/bi";


const Navbar = () => {
    return (
        <header className="global-nav">
            <div className="global-nav__content">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <img src={logo} alt="Prográmate" />
                        </li>
                        <li className="nav__list-item">
                            <BiGroup size="24" />
                            <span>Comunidad</span>
                        </li>
                        <li className="nav__list-item">
                            <BiMessageRoundedAdd size="24" />
                            <span>Foro</span>
                        </li>

                        <li className="nav__list-item">
                            <img src={logoperfil} alt="Prográmate" />
                        </li>
                    </ul>
                </nav>                
            </div>
        </header>
    );
};

export default Navbar;