import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { deleteData, getData, getDataAll, sendData } from "../../helpers/fetch";
import styles from "./Comment_likes.module.css";
import style from "./Posts.module.css";

const News = ({
    description,
    technologies,
    softSkills,
    title,
    company,
    place,
    modality,
    salary,
    contact,
    id,
    user,
}) => {
    const { setGetPosts, idUser } = useContext(DataContext);
    const [showComments, setShowComments] = useState(false);
    const [moreComments, setMoreComments] = useState(false);
    const [inputComment, setInputComment] = useState("")
    const [postComments, setPostComments] = useState([]);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [userPost, setUserPost] = useState();
    const commentInfo = async () => {
        const data = await getData("posts", id);

        setComments(comments => data.comments);

    }
    const getUsers = async () => {
        const data = await getDataAll(`users`);
        setUsers(data);
    }
    const getUser = async () => {
        try {
            const data = await getData("users", user);
            setUserPost(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser();
        commentInfo()
        getUsers();

    }, []);
    useEffect(() => {
        commentInfo()
    }, [refresh, setRefresh])
    let navigate = useNavigate();


    const submitData = async (e) => {
        e.preventDefault();

        try {
            await sendData(`posts/comment/${id}`, postComments);
            setInputComment("")
            setRefresh(!refresh)
        } catch (error) {
            console.log("Error" + error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputComment(value)
        setPostComments({ ...postComments, [name]: value, user_id: idUser })

    };

    const toggle = () => {
        console.log("click");
        setShowComments(!showComments)
    }
    const onName = (id) => {
        const user = users.filter(user => user._id === id)
        const userFilter = user[0];
        console.log(userFilter);
        return `${userFilter.firstName} ${userFilter.lastName}`
    }

    const onImage = (id) => {
        const user = users.filter(user => user._id === id)
        const userFilter = user[0];
        return userFilter.avatar
    }

    const onDelete = async (id) => {
        await deleteData('comments', id)
        setRefresh(!refresh)


    }

    const deletePost = async () => {
        try {
            await deleteData("posts", id);

            const data = await getDataAll("posts");
            setGetPosts(data.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    const previewComment = (comment, index) => {
        return (
            <div key={index} className={styles.comments}>
                <div className={styles.comment_div}>
                    <div className={styles.header}>
                        <img className={styles.img} src={onImage(comment.user_id)} alt={comment.user_id} />
                        <span className={styles.name}>{onName(comment.user_id)}</span>

                    </div>

                    <span>{comment.comment}</span>
                    {comment.user_id === idUser &&
                        <span onClick={() => onDelete(comment._id)} className={styles.delete} >Eliminar
                        </span>}
                </div>

            </div>
        )
    }
    return (
        <section className={style.container1}>
            <div className={style.container2}>
                <div className={style.icon_cont1}>
                    <div className={style.postUser}>
                        <div className={style.icon}>
                            {userPost?.avatar ? (
                                <img src={userPost?.avatar} alt="Foto" />
                            ) : (
                                <i className="far fa-user-circle"></i>
                            )}
                        </div>
                        <p>
                            <b>
                                {userPost?.firstName} {userPost?.middleName}{" "}
                                {userPost?.lastName}
                            </b>
                            <br />
                            {userPost?.cohorte?.name}
                            {/* <br /> <span>2 hr</span> */}
                        </p>
                    </div>
                    {idUser === user && (
                        <div className={style.iconsModify}>
                            <i
                                className="fas fa-pencil-alt"
                                onClick={() => navigate(`/formjobs/${id}`)}
                            ></i>
                            <i
                                className="far fa-trash-alt"
                                onClick={deletePost}
                            ></i>
                        </div>
                    )}
                </div>
                <div className={style.news}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className={style.techContain}>
                        Tecnologías:
                        {technologies &&
                            technologies.map((tech, index) => (
                                <span key={`tech${index}`}>{tech}</span>
                            ))}
                    </div>
                    <div className={style.techContain}>
                        Habilidades:
                        {softSkills &&
                            softSkills.map((soft, index) => (
                                <span key={`soft${index}`}>{soft}</span>
                            ))}
                    </div>
                    <p>Empresa: {company}</p>
                    <p>Lugar: {place}</p>
                    <p>Modalidad: {modality}</p>
                    <p>Salario: {salary}</p>
                    <p>Contacto: {contact}</p>
                </div>
                <div className={style.icon_cont2}>
                    <div className={style.like}>
                        <i className="far fa-thumbs-up"></i>
                        <span>23</span>
                    </div>
                    <div className={style.like}>
                        <i onClick={toggle} className="far fa-comment-dots"></i>
                        <span>{comments.length}</span>
                    </div>
                    <div>
                        <i className="fas fa-share"></i>
                    </div>
                </div>
                {showComments &&

                    <div>
                        <p>deja tu comentario</p>
                        <form className={styles.form} onSubmit={submitData}>
                            <textarea name="comment" value={inputComment} className={styles.input_comment} onChange={handleChange} ></textarea>
                            <button className={styles.submit}>Enviar</button>
                        </form>
                        {comments.map((comment, index) => (
                            index < 2 && previewComment(comment, index)
                        ))}

                        <span className={styles.more_comment} onClick={() => setMoreComments(!moreComments)}>Ver más comentarios</span>
                        {moreComments &&
                            comments.map((comment, index) => (
                                index >= 2 &&
                                previewComment(comment, index)
                            ))
                        }


                    </div>

                }
            </div>
        </section>
    );
};

export default News;
