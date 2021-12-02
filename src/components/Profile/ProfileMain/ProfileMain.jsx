import React, { Fragment, useContext, useEffect } from "react";
import style from "./ProfileMain.module.css";
import { DataContext } from "../../../context/DataContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import altImg from "../../../assets/images/avatar.png";

const ProfileMain = ({ dataProfile }) => {
    const { dataUser, idUser } = useContext(DataContext);
    const { avatar, firstName, middleName, lastName, cohorte } = dataUser;

    let navigate = useNavigate();
    const params = useParams();

    const editProfile = () => {
        navigate(`/formprofile/${idUser}`);
    };

    return (
        <Fragment>
            <div className={style.container}>
                <section className={style.cont}>
                    <div className={style.circulo_cont}>
                        <div className={style.circulo}>
                            {avatar ? (
                                <img src={avatar} alt="Foto" />
                            ) : (
                                <img src={altImg} alt="Foto" />
                            )}
                        </div>
                    </div>

                    <div className={style.img_cont}>
                        <div className={style.but_cont}>
                            {!params.id ? (
                                <Link to="/portfolio">
                                    <button className={style.button}>
                                        Ver portafolio
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    onClick={() =>
                                        navigate(`/portfolio/${params.id}`)
                                    } className={style.button}
                                >
                                    Ver portafolio
                                </button>
                            )}

                            <a href={dataProfile?.github} target="_blank">
                                <button className={style.button} type="button">
                                    Ver Github
                                </button>
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
                    {!params.id && (
                        <div className={style.icon} onClick={editProfile}>
                            <p className={style.tex_editar}>Editar perfil</p>
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                    )}
                </section>
            </div>
        </Fragment>
    );
};

export default ProfileMain;
