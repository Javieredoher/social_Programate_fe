import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const initialState = {
        user_info: 111111,
        github: "",
        description: "",
        technicalSkills: [],
        softSkills: [],
        lenguages: [],
        prev_studes: [],
        experience: [],
    };
    const [dataUser, setDataUser] = useState(initialState);
    const [dataPhoto, setDataPhoto] = useState({
        avatar: "",
    });

    return (
        <DataContext.Provider
            value={{
                dataUser,
                setDataUser,
                dataPhoto,
                setDataPhoto,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
