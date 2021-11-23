import React, { createContext, useState } from "react";

export const DataContext = createContext();

const idUser = "618ea996e890a86c5d63fd6a";

export const DataProvider = ({ children }) => {
    const initialState = {
        user_info: idUser,
        github: "",
        description: "",
        technicalSkills: [],
        softSkills: [],
        lenguages: [],
        prev_studes: [],
        experience: [],
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
        user_info: "",
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
        title: "",
        type: "",
        description: "",
        link: "",
        dateEvent: "",
        technologies: [],
        place: "",
    });
    const [postsJobs, setPostsJobs] = useState({
        title: "",
        type: "",
        company: "",
        technologies: [],
        softSkills: [],
        place: "",
        modality: "",
        salary: "",
        contact: "",
    });

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
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
