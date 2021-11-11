import React, { useState } from "react";
import "./ProfessionalInformation.css";

export const ProfessionalInformation = () => {
    const { institution, setInstitution } = useState("");
    const { position, setPosition } = useState("");
    const { company, setCompany } = useState("");
    const { description, setDescription } = useState("");

    return (
        <div className="form-professional-information">
            <div className="education">
                {/* Seccion de educación formal  */}
                <div className="title">
                    <h2> Educación </h2>
                </div>
                <label htmlFor="institution">Institución Educativa* </label>
                <input
                    type="text"
                    className="input-personal"
                    name="institution"
                    id="institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="nombre de la institución"
                />
                {/* seccion de las fechas */}
                <label htmlFor="email">Fecha inicio </label>
                <input
                    type="date"
                    className="input-date"
                    name="fecha inicio"
                    id="fecha inicio"
                />

                <label htmlFor="edad">Fecha fin</label>
                <input
                    type="date"
                    className="input-date"
                    name="fecha fin"
                    id="fecha fin"
                />

                <form
                    name="formulario"
                    className="blue-button"
                    method="post"
                    action="/send.php"
                    encType="multipart/form-data"
                >
                    <label htmlFor="edad">Añadir certificado</label>

                    <input
                        type="file"
                        name="adjunto"
                        accept=".pdf,.jpg,.png"
                        multiple
                    />
                </form>
            </div>
            {/* Experiencia laboral */}
            <div className="experience">
                <div className="title">
                    <h2>Experiencia</h2>
                </div>

                <label htmlFor="position"> Cargo </label>
                <input
                    type="text"
                    className="input-personal"
                    name="position"
                    id="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="Desarrollador backend Java"
                />
                <label htmlFor="company"> Empresa </label>
                <input
                    type="text"
                    className="input-personal"
                    name="company"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nombre de la empresa"
                />

                <label htmlFor="email">Fecha inicio </label>
                <input
                    type="date"
                    className="input-date"
                    name="fecha inicio"
                    id="fecha inicio"
                />

                <label htmlFor="edad">Fecha fin</label>
                <input
                    type="date"
                    className="input-date"
                    name="fecha fin"
                    id="fecha fin"
                />

                <label htmlFor="description"> Descripción </label>
                <input
                    type="textarea"
                    className="input-personal"
                    name="description"
                    id="description"
                    value={description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Realicé..."
                />
            </div>
        </div>
    );
};
