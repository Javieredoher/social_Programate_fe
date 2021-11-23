/*import React, { useState } from "react";
import { Link } from "react-router-dom";
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import logoperfil from "../../assets/images/logo-perfil.png";

function DropdownLogOut() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.dropdownLogOut}>
            <div
                className={styles.dropdownBtn}
                onClick={(e) => setIsActive(!isActive)}
            >
                <img src={logoperfil} alt="Prográmate" />
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className={styles.dropdownContent}>
                    <Link to="/profile">
                        <div className={styles.dropdownItem}>Ver perfil</div>
                    </Link>
                    <Link to="/formnews">
                        {" "}
                        {/* This is a temporal link. It has to be changed */}
                        <div className={styles.dropdownClose}>
                            Cerrar Sesión
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default DropdownLogOut;
