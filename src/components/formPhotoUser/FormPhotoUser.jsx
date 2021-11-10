import React, { useState } from "react";
import style from "./formPhoto.module.css";
import { BiTrash } from "react-icons/bi";
import logo from "../../assets/images/logo-a-color-.jpg";

import UploadPhoto from "../../services/UploadPhoto";

const FormPhotoUser = () => {
    const [name, setName] = useState("");
    const [file, setFile] = useState();
    const [pathImage, setPathImage] = useState("");

    const sendImage = (e) => {
        if (file) {
            e.preventDefault();
            UploadPhoto.sendImages(file).then((result) => {
                console.log("resultado: ", result);
            });
        } else {
            e.preventDefault();
            console.log("no hay imagen cargada");
        }
    };

    const onFileChange = (e) => {
        // const file = e.target.files[0];

        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            if (file.type.includes("image")) {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function load() {
                    setPathImage(reader.result);
                };
                setFile(file);
            } else {
                console.log("Hubo un error");
            }
        }
    };

    return (
        <>
            <div className={style.headerPerfil}>
                <img src={logo} alt="Educamás" />
                <h2>Completa tu perfil</h2>
            </div>
            <form>
                <div className={style.containPhoto}>
                    <div className={style.iconsHead}>
                        <label htmlFor="photo">Foto de perfil</label>
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
                            <BiTrash className={style.icon} />
                        </div>
                    </div>
                    <div className={style.fileImage}>
                        {pathImage.length > 0 ? (
                            <img src={pathImage} alt="Foto-usuario" />
                        ) : null}
                    </div>
                </div>
                <button type="submit" onClick={sendImage}>
                    Enviar
                </button>
                {/* <div className="contain-name contain-input">
                    <label htmlFor="name">Nombre*</label>
                    <input type="text" name="name" />
                </div>

                <div className="contain-cohort contain-input">
                    <label htmlFor="cohort">Cohorte*</label>
                    <input type="text" name="cohort" />
                </div>

                <div className="contain-aboutMe contain-input">
                    <label htmlFor="aboutMe">Acerca de</label>
                    <textarea name="aboutMe" rows="2"></textarea>
                </div>

                <div className="contain-skills contain-input">
                    <label htmlFor="softSkills">Habilidades blandas</label>
                    <input type="softSkills" name="softSkills" />
                </div>


                <div className="contain-technology contain-input">
                    <label htmlFor="technology">Tecnologías</label>
                    <input type="tecnology" name="tecnology" />
                </div>

                <div className="contain-languages contain-input">
                    <label htmlFor="languages">Idiomas</label>
                    <input type="languages" name="languages" />
                </div> */}
            </form>
        </>
    );
};

export default FormPhotoUser;
