import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import { deleteData, getDataAll } from "../../../helpers/fetch";
import style from "./Posts.module.css";

const News = ({
    description,
    technologies,
    title,
    place,
    link,
    dateEvent,
    id,
    firstName,
    middleName,
    lastName,
    cohorte,
    avatar,
}) => {
    const { setGetPosts, idUser } = useContext(DataContext);

    let navigate = useNavigate();

    const deletePost = async () => {
        console.log("borrado");
        try {
            await deleteData("posts", id);

            const data = await getDataAll("posts");
            const filterData = data.filter(
                (posts) => posts.user_info === idUser
            );
            setGetPosts(filterData.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={style.container1}>
            <div className={style.container2}>
                <div className={style.icon_cont1}>
                    <div className={style.postUser}>
                        <div className={style.icon}>
                            {avatar ? (
                                <img src={avatar} alt="Foto" />
                            ) : (
                                <i className="far fa-user-circle"></i>
                            )}
                        </div>
                        <p>
                            <b>
                                {firstName} {middleName} {lastName}
                            </b>
                            <br />
                            {cohorte.name}
                            {/* <br /> <span>2 hr</span> */}
                        </p>
                    </div>
                    <div className={style.iconsModify}>
                        <i
                            className="fas fa-pencil-alt"
                            onClick={() => navigate(`/formeventedit/${id}`)}
                        ></i>
                        <i
                            className="far fa-trash-alt"
                            onClick={deletePost}
                        ></i>
                    </div>
                </div>
                <div className={style.news}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>Link: {link}</p>
                    <p>Lugar: {place}</p>
                    <p>Fecha: {dateEvent}</p>
                    <div className={style.techContain}>
                        Tecnologías:
                        {technologies &&
                            technologies.map((tech, index) => (
                                <span key={`technologies${index}`}>{tech}</span>
                            ))}
                    </div>
                </div>
                <div className={style.icon_cont2}>
                    <div className={style.like}>
                        <i className="far fa-thumbs-up"></i>
                        <span>23</span>
                    </div>
                    <div className={style.like}>
                        <i className="far fa-comment-dots"></i>
                        <span>20</span>
                    </div>
                    <div>
                        <i className="fas fa-share"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
