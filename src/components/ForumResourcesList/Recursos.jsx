import React from "react";
import Recurso from "./Recurso";
import "./recursos.module.css";

const Recursos = () => {
  return (
    <div className="questionMain">
      <div className="SearchContainer">
        <h2>Recursos</h2>
        <input
          type="search"
          name=""
          className="searchInput"
          id="searchQuestion"
          placeholder="Buscar recurso ..."
        />
      </div>

      <div className="btnsContainer ">
        <button className="btn btn-warning">Añadir Recurso</button>
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filtro
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1 ">
            <li>
              <a className="dropdown-item" href="#!">
                Mis Recursos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Mas recientes
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Mas antiguas
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Mas puntuadas
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="messagesContainer">
        <p>
          <b>4 </b> Respuestas
        </p>
        <p>
          <b>30 </b>Recursos
        </p>
      </div> */}

      <div className="questionsContainer">
        <Recurso />
        <Recurso />
        <Recurso />
        <Recurso />
        <Recurso />
        <Recurso />
      </div>
    </div>
  );
};

export default Recursos;