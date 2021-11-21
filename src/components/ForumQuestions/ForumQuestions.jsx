import React from "react";
import styles from "./ForumQuestions.module.css";
import { Question } from "./Question";
import { RiQuestionLine } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { BiMessageAdd } from "react-icons/bi";
import data from "./data.json";

const ForumQuestions = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__global}>
        <div className={styles.section__head}>
          <h1 className={styles.section__title}>
            PREGUNTAS
            <RiQuestionLine size="27"/>
          </h1>
          <hr className={styles.section__lineTitle} />
        </div>
        <div className={styles.section__options}>
          <div className={styles.container__search}>
            <input type="text" className={styles.searchQuestion} />
          </div>
          <div className={styles.btn__container}>
            <button className={styles.btn__addfilter}>Añadir <BiMessageAdd /></button>
            <button className={styles.btn__addfilter}>Filtro <BiFilterAlt/></button>
          </div>
          <div className={styles.questionAnswer}>
            <p>4 respuestas</p>
            <p>30 preguntas</p>
          </div>
        </div>
        <div className={styles.section__container}>
          {
            data.map((data) => (
              <Question key={data.id} data={data} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ForumQuestions;
