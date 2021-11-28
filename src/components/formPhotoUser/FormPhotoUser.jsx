import React, { useContext, useEffect, useState } from "react";
import style from "./formPhoto.module.css";
import { BiTrash } from "react-icons/bi";
import logo from "../../assets/images/logo-a-color-.jpg";

import { DataContext } from "../../context/DataContext";

const FormPhotoUser = () => {
    const { dataUser, setDataUser } = useContext(DataContext);

    const [pathImage, setPathImage] = useState("");

    const deleteImage = () => {
        setDataUser({
            ...dataUser,
            avatar: "",
        });
    };
    // useEffect(() => {
    //     setDataUser({
    //         ...dataUser,
    //         _id: id,
    //     })
    // }, [])

    const onFileChange = (e) => {
        if (e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < 200000) {
                if (file.type.includes("image")) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onload = function load() {
                        setPathImage(reader.result);
                        setDataUser({
                            ...dataUser,
                            avatar: reader.result,
                        });
                    };
                } else {
                    console.log("Hubo un error");
                }
            } else {
                alert(`El tamaño máximo es 200 KB`);
            }
        }
    };

    return (
        <>
            <div className={style.headerPerfil}>
                <img src={logo} alt="Educamás" />
                <h2>Completa tu perfil</h2>
            </div>
            <div className={style.welcome}>
                {/* <p>Hola {dataUser.firstName}, completa tus datos</p> */}
                <p>Hola {dataUser.firstName}, completa tus datos</p>
            </div>
            <form>
                <div className={style.containPhoto}>
                    <div className={style.iconsHead}>
                        <label className={style.label} htmlFor="photo">
                            Foto de perfil
                        </label>
                        <div className={style.icons}>
                            <div className={style.inputFile}>
                                <i className="fa-solid fa-plus icon"></i>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg, image/jpg, image/svg"
                                    className="photoFile"
                                    placeholder="Foto"
                                    onChange={onFileChange}
                                />
                            </div>
                            <BiTrash
                                onClick={deleteImage}
                                className={style.icon}
                            />
                        </div>
                    </div>
                    <div className={style.fileImage}>
                        {dataUser.avatar ? (
                            <img src={dataUser.avatar} alt="Foto-usuario" />
                        ) : null}
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormPhotoUser;
