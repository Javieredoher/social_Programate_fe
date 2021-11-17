import React, {Fragment} from 'react';
import styles from './Commentbox.module.css';

const Commentbox = () => {
    return (
        <Fragment>
            <div className={styles.card_container}>
                <div className={styles.card}>
                <i class="bx bxs-user"></i>
                <input type="text" className={styles.input_box} placeholder="Añadir un comentario"/>
                </div>
                <div className={styles.button_box}>
                <button type="submit" className={styles.btn}>Públicar</button>
                </div>
            </div>
        </Fragment>
    )
};

export default Commentbox;
