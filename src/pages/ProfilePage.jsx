import React, { useContext, useEffect } from "react";
import "../assets/styles/global2.css";

import Posts from "../components/Profile/Posts/Posts";
import ProfileLanguages from "../components/Profile/ProfileLanguages/ProfileLanguages";
import Technologies from "../components/Profile/Technologies/Technologies";
import ProfileEducation from "../components/Profile/ProfileEducation/ProfileEducation";
import ProfileMain from "../components/Profile/ProfileMain/ProfileMain";
import ProfileSkills from "../components/Profile/Profileskills/ProfileSkills";
import ProfileAbout from "../components/Profile/ProfileAbout/ProfileAbout";
import "../assets/styles/global2.css";
import ProfileExperience from "../components/Profile/ProfileExperience/ProfileExperience";
import { getDataAll } from "../helpers/fetch";
import { DataContext } from "../context/DataContext";

const ProfilePage = () => {
    const { idUser, setDataProfile, dataProfile } = useContext(DataContext);

    // console.log(idUser)

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
    // console.log(dataProfile);
    return (
        <div>
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

export default ProfilePage;
