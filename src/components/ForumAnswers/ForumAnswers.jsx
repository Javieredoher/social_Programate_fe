import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { getData } from "../../helpers/fetch";
import styles from "./ForumAnswers.module.css";

const ForumAnswers = () => {
  const { questionId } = useParams();

  console.log(questionId);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const singleQuestions = async () => {
      const data = await getData("posts", questionId);
      setQuestion(data);
    };
    singleQuestions();
  }, [questionId]);
  
  return (
    <div className={styles.questionContainerMain}>
      <div className={styles.containerQuestion}>
        <h5 className={styles.question}>{question.title}</h5>
        <p className={styles.dateQuestion}>Creado: {question.createdAt} </p>
      </div>
      <div className={styles.tagsContainer}>
        
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.name}>Jhonatan Mosquera Velez</p>
      </div>
    </div>
  );
};

export default ForumAnswers;
