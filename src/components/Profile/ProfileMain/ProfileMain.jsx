import React, { Fragment, useContext, useEffect } from "react";
import style from "./ProfileMain.module.css";
/* import medalla1 from "../../../assets/images/medalla1.png";
import medalla2 from "../../../assets/images/medalla2.png";
import medalla3 from "../../../assets/images/medalla3.png"; */
import { DataContext } from "../../../context/DataContext";
import { Link, useNavigate } from "react-router-dom";


const ProfileMain = ({ dataProfile }) => {
    const { dataUser, idUser } = useContext(DataContext);
    const { avatar, firstName, middleName, lastName, cohorte } = dataUser;

    let navigate = useNavigate();

    const editProfile = () => {
        // console.log(idUser);
        navigate(`/formprofile/${idUser}`);
    };
    useEffect(() => {
        console.log(dataProfile, idUser);
    }, []);

    return (
        <Fragment>
            <form className={style.container}>
                <section className={style.cont}>
                    <div className={style.circulo_cont}>
                        <div className={style.circulo}>
                            <img src={avatar} alt="Foto" />
                        </div>
                    </div>

                    <div className={style.img_cont}>
                        {/*                         <div>
                            <img src={medalla1} alt="imagen1" />
                            <img src={medalla2} alt="imagen2" />
                            <img src={medalla3} alt="imagen3" />
                        </div> */}
                        <div className={style.but_cont}>
                            <Link to="/portfolio">
                                <button>Ver portafolio</button>
                            </Link>
                            <a href={dataProfile?.github} target="_blank">
                                <button type="button">Ver Github</button>
                            </a>
                        </div>
                    </div>
                </section>

                <section className={style.tex_cont}>
                    <div className={style.tex}>
                        <p>
                            <b>
                                {firstName} {middleName} {lastName}
                            </b>
                            <br /> {cohorte.name}
                        </p>
                    </div>

                    <div className={style.icon} onClick={editProfile}>
                        <p className={style.tex_editar}>Editar perfil</p>
                        <i className="fas fa-pencil-alt"></i>
                    </div>
                </section>
            </form>
        </Fragment>
    );
};

export default ProfileMain;
