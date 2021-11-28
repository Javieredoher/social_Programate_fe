import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { getDataAll } from "../../helpers/fetch";
import Technologies from "./Technologies/Technologies";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileSkills from "./Profileskills/ProfileSkills";
import ProfileEducation from "./ProfileEducation/ProfileEducation";
import ProfileExperience from "./ProfileExperience/ProfileExperience";
import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import Posts from "./Posts/Posts";
import style from "./Posts/Posts.module.css";
import { useState } from "react";
import ProfileMainHome from "./ProfileMainHome/ProfileMainHome";

const BodyProfile = () => {
    const { idUser, setDataProfile, dataProfile } = useContext(DataContext);
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        if (path === "/" || path === "/home") {
            setShowMain(true);
        }
    }, []);

    useEffect(async () => {
        if (idUser) {
            try {
                const data = await getDataAll("profiles");
                const filterData = data.filter(
                    (profile) => profile.user_info._id === idUser
                );
                setDataProfile(filterData[0]);
            } catch (error) {
                console.log(error);
            }
        }
    }, [idUser]);
    return (
        <div className={style.containBodyProfile}>
            {!showMain ? (
                <ProfileMain dataProfile={dataProfile} />
            ) : (
                <ProfileMainHome dataProfile={dataProfile} />
            )}

            <ProfileAbout />
            <ProfileSkills />
            <ProfileEducation />
            <ProfileExperience />
            <Technologies />
            <ProfileLanguages />
            <Posts />
        </div>
    );
};

export default BodyProfile;
