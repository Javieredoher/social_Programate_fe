import React from "react";
import { Link } from "react-router-dom";
import styles from "./ForumQuestions.module.css"

export const Question = ({ data, user }) => {
  let date = data.createdAt.slice(0, 10);

  return (
    <div className={styles.questionContainerMain}>
      <div className={styles.containerQuestion}>
        <h5 className={styles.question}>{data.title}</h5>
        <p className={styles.dateQuestion}>Creado: {date}</p>
      </div>
      <div className={styles.tagsContainer}>
        {
          data.tags.map((tag, index) => (
            <h6 key={index} className={styles.tagsItems}>{tag} </h6>
          ))
        }
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.name}>Jhonatan Mosquera Velez</p>
        <Link to={"/questions/" + data._id} state={{ from: "user" }} className={styles.btn__question}>Responder</Link>
      </div>
    </div>
  );
};