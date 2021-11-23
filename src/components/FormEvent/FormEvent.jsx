import React, { Fragment, useState, useContext, useEffect } from "react";
import style from "./FormEvent.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import { sendData, updateData } from "../../helpers/fetch";
import Swal from "sweetalert2";


            //  para crear alertas
const mostrarAlerta = () => {

    Swal.fire({
        icon: 'error',
        title: 'Bienvenido',
        text: 'Por favor llena todos los espacios',
        footer: '<a  href="">Esta información es muy importante</a>',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ffcc02',
        timer: '6000'

      }).then(respuesta=>{
          if(respuesta)
          Swal({
        Text:'La información se envio con exito',
        icon: 'success',
        timer: "6000"
    })
      })
}

  

const FormEvent = () => {


    const { postsEvent, setPostsEvent } = useContext(DataContext);
    const [techs, setTechs] = useState([]);

    //Enviar data del usuario al modelo de user y profile
    
    const submitData = async (e) => {
        
        e.preventDefault();
        try {
            await sendData("posts", postsEvent);
        } catch (error) {
            console.log("Error" + error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostsEvent({ ...postsEvent, [name]: value });
    };

    const onCapture = (e) => {
        const value = e.target.value;

        if (e.key === "Enter" && value.length > 0) {
            techs.push(e.target.value);
            setPostsEvent({ ...postsEvent, technologies: techs });
            e.target.value = "";
            e.preventDefault();
        }
    };
    useEffect(() => { }, [postsEvent, setPostsEvent, techs, setTechs]);
    useEffect(() => {
        setPostsEvent({ ...postsEvent, type: "event" });
    }, []);

    return (
        <Fragment>

            <div className={style.headerPerfil}>
                <img src={logo} alt="Educamás" />
                <h2>Agregar evento</h2>
            </div>

            <form className={style.from_container} onSubmit={submitData}>
               
                <div className={style.forms}>
                    <label for="nombre">Nombre del evento</label>
                    <input
                        placeholder="Nombre del evento"
                        className={style.nom}
                        type="text"
                        name="title"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <label for="descripcion">Descripción</label>
                    <input
                        placeholder="Breve descripción del evento"
                        className={style.nom}
                        type="textarea"
                        name="description"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <label for="lugar">Lugar</label>
                    <input
                        placeholder="Lugar"
                        className={style.nom}
                        type="text"
                        name="place"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <label for="fecha">Fecha del evento</label>
                    <input
                        className={style.nom}
                        type="date"
                        name="dateEvent"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <label for="link">Link de inscripción</label>
                    <input
                        placeholder="Link de inscripción"
                        className={style.nom}
                        type="text"
                        name="link"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>

                    <label for="Technologies">Tegnologías</label>
                    <input
                        className={style.nom}
                        type="text"
                        placeholder="Tecnologías <Enter> para guardarla"
                        name="technologies"
                        onKeyDown={onCapture}
                    />

                    <br />

                    <div className={style.tecnologias}>
                        {techs.map((tech, index) => (
                            <button key={index}>{tech}</button>
                        ))}
                    </div>

                     </div>

                <div className={style.enviar}>
                    <button className="btn" type="submit" onClick={() => mostrarAlerta()}>Enviar</button>
                </div>

            </form>

        </Fragment>
    );
};
export default FormEvent;
