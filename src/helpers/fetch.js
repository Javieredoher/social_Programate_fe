// import "babel-polyfill";
import "regenerator-runtime/runtime";
const API = "http://localhost:4000";

export const getDataUser = async (endpoint) => {
    const url = `${API}/${endpoint}`;
    const resp = await fetch(url);
    return await resp.json();
};

export const sendDataUser = async (endpoint, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
};
