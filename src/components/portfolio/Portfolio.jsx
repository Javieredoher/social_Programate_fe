import React, { Fragment, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getDataAll } from "../../helpers/fetch";
import style from "./Portfolio.module.css";
import Project from "./Project";
import { DataContext } from "../../context/DataContext";
import Swal from "sweetalert2";

const Portfolio = () => {
    const history = useHistory();

    const { portfolio } = useContext(DataContext);

    const [dataPortfolios, setdataPortfolios] = useState([]);

    const getDataPort = async () => {
        try {
            const data = await getDataAll("portfolios");
            const filterData = data.filter(
                (project) => project.profile_id === portfolio.profile_id
            );
            setdataPortfolios(filterData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getDataPort();
    }, []);

    const addProject = () => {
        if (dataPortfolios.length < 10) {
            history.push("/formproject");
        } else {
            Swal.fire({
                title: "Máximo de proyectos",
                text: "No puedes subir más de diez proyectos",
                icon: "warning",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
                timer: "6000",
            });
        }
    };

    return (
        <Fragment>
            <div className={style.container}>
               <section>
                <div className={style.title_container}>
                    <div className={style.title}>
                        <h1>Chat red social </h1>
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam doloremque, itaque cumque error odit quaerat fugit  </p>
                </div>
                </section>
                
                <section className={style.section1}>
                    <div className={style.tex}>
                        <p>INTOCOL</p>
                        <p>COMUNICACIONES</p>
                    </div>
                    <div className={style.icon_chat}>
                        <div className={style.icon}><i class="far fa-comments"></i></div>
                        <button className={style.boton_principal}>Ingresar</button>
                        <div className={style.tex2}>
                            <p>Crea tu cuenta</p>
                            <a class="nav-list" href="#">Regístarte ahora</a>
                        </div>

                    </div>
                </section>


                <secton className={style.section_container2}>
                    <div className={style.boton2}>
                        <button className={style.boton_principal2}>proyecto</button>
                        <button className={style.boton_principal2}>Github</button>
                    </div>

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


                </secton>

            </div>



            {/* segunda componente */}
        
            <div className={style.container}>
                <section>
                <div className={style.title_container}>
                    <div className={style.title}>
                        <h1>Chat red social </h1>
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam doloremque, itaque cumque error odit quaerat fugit  </p>
                </div>
                </section>

                <section className={style.section1}>
                    <div className={style.tex}>
                        <p>INTOCOL</p>
                        <p>COMUNICACIONES</p>
                    </div>
                    <div className={style.icon_chat}>
                        <div className={style.icon}><i class="far fa-comments"></i></div>
                        <button className={style.boton_principal}>Ingresar</button>
                        <div className={style.tex2}>
                            <p>Crea tu cuenta</p>
                            <a class="nav-list" href="#">Regístarte ahora</a>
                        </div>

                    </div>
                </section>


                <secton className={style.section_container2}>
                    <div className={style.boton2}>
                        <button className={style.boton_principal2}>proyecto</button>
                        <button className={style.boton_principal2}>Github</button>
                    </div>

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


                </secton>

            </div>


        </Fragment>
    );
};

export default Portfolio;
