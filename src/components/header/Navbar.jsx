import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import logoperfil from "../../assets/images/logo-perfil.png";
import { BiGroup } from "react-icons/bi";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { Search } from "./Search";

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
                            <BiBell size="24" />
                            <span>Notificaciones</span>
                        </li>
                        <li className="nav__list-item">
                            {/* <BiSearchAlt2 size="24" /> */}
                        </li>
                        <li className="nav__list-item">
                            <img src={logoperfil} alt="Prográmate" />
                        </li>
                    </ul>
                </nav>

                <div className="main">
                    <div className="topbar">
                        <div className="tittle">
                            <h2>Notificaciones</h2>
                        </div>
                        <div className="description">
                            <h4>Anteriores</h4>
                        </div>

                        <div className="notification">
                            <ul>
                                <li className="first">Diana Gomez</li>
                                <li className="fuzzy space">
                                    ha comentado tu publicación “Oferta Mercado
                                    Libre”
                                </li>
                            </ul>
                            <ul>
                                <li className="fuzzy first">2 hr</li>
                                <li className="fuzzy small__space">Ver mas</li>
                            </ul>
                        </div>
                        <div className="notification">
                            <ul>
                                <li className="first">Diana Gomez</li>
                                <li className="fuzzy space">
                                    ha comentado tu publicación “Oferta Mercado
                                    Libre”
                                </li>
                            </ul>
                            <ul>
                                <li className="fuzzy first">2 hr</li>
                                <li className="fuzzy small__space">Ver mas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;