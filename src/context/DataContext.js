import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { studyField, experienceField } from "../helpers/formProfile";

export const DataContext = createContext();

const idUser = "6193dc60f58b9543f26a7cad";

export const DataProvider = ({ children }) => {
    const initialState = {
        user_info: idUser,
        github: "",
        description: "",
        technicalSkills: [],
        softSkills: [],
        lenguages: [],
        prev_studes: [{ ...studyField, id: uuid() }],
        experience: [{ ...experienceField, id: uuid() }],
    };
    const [dataProfile, setDataProfile] = useState(initialState);
    const [dataUser, setDataUser] = useState({
        avatar: "",
        cohorte: { num: 1, name: "" },
        contactNumber: null,
        email: "",
        firstName: "",
        lastName: "",
        middleName: "",
        passwordHash: "",
        program: "Progamate",
        rol: 1,
        secondSurname: "",
        state: true,
        _id: idUser,
    });
    const [posts, setPosts] = useState({
        user_info: idUser,
        likes: [],
        title: "",
        type: "",
        softSkills: [],
        comments: [],
        description: "",
        profile: "",
        images: "",
        company: "",
        salary: "",
        modality: "",
        contact: "",
        input_foro: "",
        link: "",
        tags: "",
        dateEvent: "",
        technologies: [],
        place: "",
    });

    const initialStatePortfolio = {
        profile_id: idUser,
        image: "",
        title: "",
        description_proyect: "",
        deploy: "",
        proyect_link: "",
        technologies: [],
    };
    const [portfolio, setPortfolio] = useState(initialStatePortfolio);

    const [postsEvent, setPostsEvent] = useState({
        user_info: idUser,
        title: "",
        type: "",
        description: "",
        link: "",
        dateEvent: "",
        technologies: [],
        place: "",
    });
    const [postsJobs, setPostsJobs] = useState({
        user_info: idUser,
        title: "",
        type: "",
        company: "",
        technologies: [],
        softSkills: [],
        place: "",
        modality: "",
        salary: "",
        contact: "",
        description: "",
    });

    const [getPosts, setGetPosts] = useState();

    return (
        <DataContext.Provider
            value={{
                dataProfile,
                setDataProfile,
                dataUser,
                setDataUser,
                idUser,
                posts,
                setPosts,
                postsEvent,
                setPostsEvent,
                setPortfolio,
                portfolio,
                initialStatePortfolio,
                postsJobs,
                setPostsJobs,
                getPosts,
                setGetPosts,
                idUser,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
