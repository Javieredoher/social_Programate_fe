// import "babel-polyfill";
import "regenerator-runtime/runtime";
const API = "http://localhost:3000/api";

export const getData = async (endpoint, id) => {
    const url = `${API}/${endpoint}/${id}`;
    const resp = await fetch(url);
    // await console.log(resp.json());
    return await resp.json();
};

export const sendData = async (endpoint, data) => {
    const url = `${API}/${endpoint}`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
};

export const updateData = async (endpoint, id, data) => {
    const url = `${API}/${endpoint}/${id}`;
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
};
