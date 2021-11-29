import React, { useState, Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDataAll } from "../../helpers/fetch";
import style from "./UsersList.module.css";
//import ImagDama from '../../assets/images/ImagDama.png'
//import ImagCaballero from '../../assets/images/ImagCaballero.png'

const UsersList = () => {
    const [toogle, setToogle] = useState(true);
    const [allUser, setAllUser] = useState([]);

    const navigate = useNavigate();

    useEffect(async () => {
        const dataToEdit = await getDataAll("users");

        setAllUser(dataToEdit);
    }, []);
    useEffect(() => {}, [allUser, setAllUser]);

    const onToggle = (id) => {
        allUser.map((user) => {
            if (user._id === id) {
                // console.log(id, user._id);
                user.state = !user.state;
                // console.log(user.state);
                setAllUser(allUser);
            }
        });
    };

    return (
        <Fragment>
            <div className={style.container}>
                {allUser.map((user) => (
                    <div key={user._id} className={style.card}>
                        <img
                            className={style.img}
                            src={user.avatar}
                            alt="ImagDama"
                        />
                        <p className={style.p}>
                            {user.firstName}{" "}
                            {user.middleName && user.middleName}
                            <br />
                            {user.state ? "En línea" : "off line"}
                        </p>
                        <button
                            type="button"
                            onClick={() => navigate(`/profile/${user._id}`)}
                        >
                            Ver perfil
                        </button>
                        <ul
                            className={
                                user.state ? style.icon_green : style.icon_Gray
                            }
                        >
                            <i
                                onClick={() => onToggle(user._id)}
                                className="far fa-user"
                            ></i>
                        </ul>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default UsersList;
