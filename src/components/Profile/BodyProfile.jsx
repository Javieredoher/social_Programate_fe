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

const BodyProfile = () => {
    const { idUser, setDataProfile, dataProfile } = useContext(DataContext);

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
            <ProfileMain dataProfile={dataProfile} />
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
