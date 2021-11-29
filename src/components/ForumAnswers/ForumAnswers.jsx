import React, { useEffect, useState, useContext } from "react";
import {
    BrowserRouter as Router,
    useParams,
    useLocation,
} from "react-router-dom";
import { getData, getDataAll, sendData, deleteData } from "../../helpers/fetch";
import styles from "./ForumAnswers.module.css";
import { DataContext } from "../../context/DataContext";

const ForumAnswers = () => {
    const { questionId } = useParams();
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [postComments, setPostComments] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [clear, setClear] = useState(false);
    const [comment, setComment] = useState("");
    const [question, setQuestion] = useState([]);
    const [userComment, setUserComment] = useState([]);

    const { setDataUser, idUser } = useContext(DataContext);

    const searchUrl = idUser;


    const userInfo = async () => {
        const data = await getData("users", searchUrl);
        setUser(data);
    };

    const commentInfo = async () => {
        const data = await getData("posts", questionId);
        setComments((comments) => data.comments);
        console.log(comments, "commets");
    };

    const submitData = async (e) => {
        e.preventDefault();

        try {
            await sendData(`posts/comment/${questionId}`, postComments);
            setRefresh((refresh) => !refresh);
        } catch (error) {
            console.log("Error" + error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComment(value);
        setPostComments({ ...postComments, [name]: value, user_id: searchUrl });
    };

    const getUsers = async () => {
        const data = await getDataAll(`users`);
        console.log(data)
        setUsers(data);
    };

    useEffect(() => {
        userInfo();
        commentInfo();
        getUsers();
    }, []);
    useEffect(() => {
        commentInfo();
    }, [refresh, setRefresh]);

    const onUpdate = () => {
        setRefresh((refresh) => !refresh);
        setComment("");
    };

    useEffect(() => {
        const singleQuestions = async () => {
            const data = await getData("posts", questionId);
            setQuestion(data);
        };
        singleQuestions();
    }, [questionId]);

    const onName = (id) => {

/*         console.log(users)
        const user = users.filter((user) => user._id === id);
        //console.log(user)
        const userFilter = user[0];
        //console.log(id)
        //console.log(userFilter);
        return `${userFilter.firstName} ${userFilter.lastName}`;
    };

    const onImage = (id) => {
        const user = users.filter((user) => user._id === id);
        const userFilter = user[0];
        //console.log(userFilter);
        return userFilter.avatar; */

        // console.log(users, "users");
        if (users.length > 0) {
            const user = users?.filter((user) => user._id === id);
            const userFilter = user[0];
            // console.log(userFilter.firstName, comments, "nombres");
            return `${userFilter.firstName} ${userFilter.lastName}`;
        }
    };

    const onImage = (id) => {
        // console.log(id, users, "id Imagen");
        if (users.length > 0) {
            const user = users?.filter((user) => user._id === id);
            const userFilter = user[0];
            return userFilter.avatar;
        }
        // console.log(userFilter);

    };

    const onDelete = async (id) => {
        await deleteData("comments", id);
        setRefresh((refresh) => !refresh);
    };

    console.log(question)

    return (
        <>
            <div className={styles.questionContainerMain}>
                <div className={styles.containerQuestion}>
                    <h5 className={styles.question}>{question.title}</h5>
                    <p className={styles.dateQuestion}>
                        Creado: {question.createdAt}{" "}
                    </p>
                </div>
                <div className={styles.tagsContainer}></div>
                <div className={styles.infoContainer}>
                    <p className={styles.name}>Pablito perez</p>
                </div>
            </div>
            <p className={styles.title}>Respuestas</p>
            <div className={styles.questionContainerMain}>
                <form className={styles.from_container} onSubmit={submitData}>
                    <div className={styles.forms}>
                        <h3>Tu respuesta</h3>
                        <textarea
                            placeholder="Escribe tu respuesta"
                            className={styles.nom}
                            type="text"
                            name="comment"
                            value={comment}
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                    <div className={styles.enviar}>
                        <button onClick={onUpdate} className="btn">
                            Responder
                        </button>
                    </div>
                </form>
            </div>
            <p className={styles.title}>Otras respuestas</p>
            {comments.map((comment, i) => (
                <div key={i} className={styles.questionContainerMain}>
                    <br />
                    <p className={styles.name}>{onName(comment.user_id)}</p>
                    <img src={onImage(comment.user_id)} />

                    <p className={styles.name}>{comment.comment}</p>
                    <p className={styles.dateQuestion}>
                        Creado: {question.createdAt}{" "}
                    </p>
                    {user._id === comment.user_id && (
                        <span
                            className={styles.links}
                            onClick={() => onDelete(comment._id)}
                        >
                            Eliminar
                        </span>
                    )}
                </div>
            ))}

            <br />
        </>
    );
};

export default ForumAnswers;
