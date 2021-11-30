import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";
import { getData, getDataAll } from "../../../helpers/fetch";
import style from "./ProfileAbout.module.css";

const ProfileAbout = () => {
    const { dataProfile } = useContext(DataContext);

    return (
        <>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Acerca de</p>
                        </div>
                    </div>
                    <div>
                        <p>{dataProfile?.description}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileAbout;
