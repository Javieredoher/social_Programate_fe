import React from "react";
import style from "./ProfileEducation.module.css";

const Education = ({ study }) => {
    console.log(study);
    return (
        <div className={style.icon_cont2}>
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
            {study.certificate.length > 0 && (
                <img
                    className={style.certificate}
                    src={study.certificate}
                    alt="
            Certificado"
                />
            )}
        </div>
    );
};

export default Education;
