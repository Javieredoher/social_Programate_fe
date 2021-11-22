import React from "react";
import "./recursos.module.css";
import like from "../../assets/images/like.png";

const Recurso = () => {
  return (
    <div className="questionContainerMain">
      <h5>Las mejores plantillas para tu portafolio</h5>
      <div className="typeContainer">
        <h6 className="typeResource">Documentacion</h6>
      </div>

      <div className="tagsContainer">
        <h6>Html</h6>
        <h6>Backend</h6>
        <h6>css</h6>
      </div>
      <div className="infoContainer">
        <div className="nameDate">
          <p>
            <b>Pepito Perez</b>
          </p>
          <p>10/07/21</p>
        </div>
        <div className="btnLikeContainer">
          <img className="btnLike" src={like} alt="Me gusta" />
          <span>30</span>
        </div>
      </div>
    </div>
  );
};

export default Recurso;