import React, { useEffect, useState } from "react";
import styles from "./ForumQuestions.module.css";
import { Question } from "./Question";
import { RiQuestionLine } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { BiMessageAdd } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDataAll, getData } from "../../helpers/fetch";
import { Search } from "./Search";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const ForumQuestions = () => {
    const [questions, setQuestions] = useState([]);

    const query = useQuery();
    const search = query.get("search");

    const allQuestions = async () => {
        const searchUrl = search ? "?title=" + search : "?type=questions";
        const data = await getDataAll(`posts${searchUrl}`);
        setQuestions(data);
    };

    useEffect(() => {
        allQuestions();
    }, [search]);

    return (
        <section className={styles.section}>
            <div className={styles.section__global}>
                <div className={styles.section__head}>
                    <h1 className={styles.section__title}>
                        PREGUNTAS
                        <RiQuestionLine size="27" />
                    </h1>
                    <hr className={styles.section__lineTitle} />
                </div>
                <div className={styles.section__options}>
                    <Search />
                    <div className={styles.btn__container}>
                        <Link
                            to="/addquestion"
                            className={styles.btn__question}
                        >
                            Añadir <BiMessageAdd />
                        </Link>
                        <button className={styles.btn__question}>
                            Filtro <BiFilterAlt />
                        </button>
                    </div>
                    <div className={styles.questionAnswer}>
                        <p>4 respuestas</p>
                        <p>{questions.length} preguntas</p>
                    </div>
                </div>
                <div className={styles.section__container}>
                    {questions.map((data) => (
                        <Question key={data._id} data={data} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForumQuestions;
