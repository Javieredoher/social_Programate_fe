/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../makingpost/Makingpost.css";
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownLogOut = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <div className="dropdownLogOut">
                <div
                    className="dropdownBtn"
                    onClick={(e) => setIsActive(!isActive)}
                >
                    Perfil
                    <span className="fas fa-caret-down"></span>
                </div>
                {isActive && (
                    <div className="dropdownContent">
                        <Link to="/profile">
                            <div className="dropdownProfile">Ver perfil</div>
                        </Link>
                        <Link to="/formnews">
                            <div className="dropdownLogOut">Cerrar Sesión</div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownLogOut;

/*
function Dropdown() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="dropdown">
            <div
                className="dropdown-btn"
                onClick={(e) => setIsActive(!isActive)}
            >
                Crear una publicación
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    <Link to="/formevent">
                        <div className="dropdown-item">Evento</div>
                    </Link>
                    <Link to="/formnews">
                        <div className="dropdown-item">Noticia</div>
                    </Link>
                    <Link to="/formjobs">
                        <div className="dropdown-item">Oferta Laboral</div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
*/
