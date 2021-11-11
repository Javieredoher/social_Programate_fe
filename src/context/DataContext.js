import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [pathImage, setPathImage] = useState("");
    const [file, setFile] = useState();

    return (
        <DataContext.Provider
            value={{
                pathImage,
                setPathImage,
                file,
                setFile,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
