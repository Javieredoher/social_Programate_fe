import React from "react";
import style from "./jobCard.module.css";
import jobs from "../../jobvacancies.json";
import { BiLike, BiMessageRoundedDots, BiShare } from "react-icons/bi";

const jobCard = () => {
    return (
        <div className={style.cardContainer}>
            <h2>Nombre</h2>
            <h3>Cohorte </h3>
            <h3>hace 3 horas</h3>
            <h3>ofertas de trabajo </h3>
            <div className={style.imageContainer}>
                <img width={300} height={800} src={imageNews} alt="noticia" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                vero id expedita modi omnis, animi velit natus a earum facilis
                incidunt minima obcaecati similique nesciunt nam aut quaerat,
                quia numquam.
            </p>
            <BiLike className={style.like} size="40px"></BiLike>

            <BiMessageRoundedDots
                className={style.comment}
                size="40px"
            ></BiMessageRoundedDots>
            <BiShare className={style.share} size="40px"></BiShare>
        </div>
    );
};

export default jobCard;
