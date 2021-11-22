import React from 'react'
import styles from './ForumAddQuestion.module.css'

const ForumAddQuestion = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__global}>
        <form className={styles.containerForum}>
          <h2 className={styles.title}>Crear recurso</h2>
        </form>
      </div>
    </section>
  )
}

export default ForumAddQuestion;
