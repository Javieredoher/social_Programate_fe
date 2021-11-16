import React, { createContext, useState } from "react";

export const DataContext = createContext();

const idUser = "618ee9c333508b6f7a9200d1";

export const DataProvider = ({ children }) => {
    const initialState = {
        _id: idUser,
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
        _id: "618ea996e890a86c5d63fd6a",
    });

    return (
        <DataContext.Provider
            value={{
                dataProfile,
                setDataProfile,
                dataUser,
                setDataUser,
                idUser,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
