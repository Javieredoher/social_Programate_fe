import React, { Fragment, useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import ProfileEducations from "../ProfileEducations/ProfileEducations";

import style from "./ProfileEducation.module.css";

const ProfileEducation = () => {
    const { dataProfile } = useContext(DataContext);
    const { prev_studes } = dataProfile;

    return (
        <Fragment>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Educacion</p>
                        </div>
                    </div>
                    {prev_studes.map((study, index) => (
                        <div className={style.icon_cont2} key={index}>
                            <div>
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <p>
                                <b>{study.degree}</b>
                                <br /> {study.institution} <br />
                                <span>
                                    {study.eduDateInit.slice(0, 7)} hasta{" "}
                                    {study.eduDateEnd.slice(0, 7)}
                                </span>
                            </p>
                        </div>
                    ))}

                    {/* <ProfileEducations /> */}
                </div>
            </section>
        </Fragment>
    );
};

export default ProfileEducation;
