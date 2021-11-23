import React from "react";

import styles from "../Navbar/Navbar.module.css";
import logo from "../../assets/images/logo.png";
import logoperfil from "../../assets/images/logo-perfil.png";
import { BiGroup } from "react-icons/bi";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import DropdownLogOut from "./DropdownLogOut";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className={styles.globalNav}>
            <div className={styles.globalNavContent}>
                <nav className={styles.navBar}>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            <Link to="/home">
                                <img src={logo} alt="Prográmate" />
                            </Link>
                        </li>
                        <li className={styles.navListItem}>
                            <BiGroup size="24" />
                            <Link to="/community">
                                <span>Comunidad</span>
                            </Link>
                        </li>
                        <li className={styles.navListItem}>
                            <BiMessageRoundedAdd size="24" />
                            <Link to="/forum">
                                <span>Foro</span>
                            </Link>
                        </li>

                        <li className={styles.navListItem}>
                            {/* <img src={logoperfil} alt="Prográmate" /> */}
                            <DropdownLogOut />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
