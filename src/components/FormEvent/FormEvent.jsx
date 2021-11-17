import React, { Fragment, useState } from "react";
import style from "./FormEvent.module.css";

const FormEvent = () => {
    const [datos, setDatos] = useState({
        nombre_de_la_oferta: "",
        Tipo_de_perfil: "",
    });

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(`${datos.nombre_de_la_oferta} ${datos.Tipo_de_perfil}`);
    };

    return (
        <Fragment>
            <form className={style.from_container} onSubmit={enviarDatos}>
                <div className={style.forms}>
                    <h3>Nombre del evento</h3>
                    <input
                        placeholder="nombre del evento"
                        className={style.nom}
                        type="text"
                        name="Evento"
                        onChange={handleInputChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Lugar</h3>
                    <input
                        placeholder="lugar"
                        className={style.nom}
                        type="text"
                        name="Nombre_de_lugar"
                        onChange={handleInputChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Fecha</h3>
                    <input
                        placeholder="fecha"
                        className={style.nom}
                        type="text"
                        name="Fecha"
                        onChange={handleInputChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Link de inscripcion</h3>
                    <input
                        placeholder="link"
                        className={style.nom}
                        type="text"
                        name="Link"
                        onChange={handleInputChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                            <h3>Tegnologías</h3>         
                    <input
                        className={style.nom}
                        type="text"
                        name="Tegnologías"
                    />
                            
                    <br />
                            
                    <div className={style.tecnologias}>
                                  <button>HTML</button>
                                  <button>CSS</button>
                                  <button>Javascript</button>
                                  <button>React</button>
                                  <button>Angular</button>
                                  <button>MySQL</button>
                                  <button>Nodejs</button>
                                  <button>MongoDB</button>
                                
                    </div>
                            
                </div>

                <div className={style.enviar}>
                    <button className="btn" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
            <h3>
                {datos.nombre_de_la_oferta} - {datos.Tipo_de_perfil}
            </h3>
        </Fragment>
    );
};
export default FormEvent;
