import React from "react";

const Pregunta = () => {
  return (
    <div className="questionContainerMain">
      <h5>Como realizar consultas en mySQL?</h5>
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
        <button className="btn btn-warning btnResponse">Responder</button>
      </div>
    </div>
  );
};

export default Pregunta;
