import React from 'react'
import { BrowserRouter as Router, useParams } from "react-router-dom";
import styles from './ForumAnswers.module.css'

const ForumAnswers = () => {
    const {questionId} = useParams();
    console.log(questionId)
    return (
        <div>
            <h1>Detalle preguntas</h1>
        </div>
    )
}

export default ForumAnswers