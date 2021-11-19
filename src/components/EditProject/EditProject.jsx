import React, { Fragment } from 'react'
import style from './EditProject.module.css'
import crud from '../../assets/images/crud.png'

const EditProject = () => {
    return (
        <Fragment>
      <form className={style.from_container}>

        <div className={style.title}>
        <h1>Editar proyecto</h1>
        <hr/>
        </div>

        <div className={style.container_img}>
        <div className={style.img}>
        <div><h3>Imagen del proyecto</h3></div><br />
          <img src={crud} alt="imagen"/>
        </div>

        <div className={style.trash}>
          <h2>+</h2>
        <i class="far fa-trash-alt"></i>
        </div>
        </div>
        

        <div className={style.forms} >
        <h3>Nombre del proyecto *</h3>
        <input className={style.nom} type="text" name="nombre" />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Descripción *</h3>
        <textarea className={style.textarea}rows="3" name="Acerca de" >
        </textarea><br />
        </div>

        <div className={style.forms}>
        <h3>Link de despliegue *</h3>
        <input className={style.nom} type="text" name="Git Hub" />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Link de repositorio *</h3>
        <input className={style.nom} type="text" name="Cohorte" />
        <br />
        </div>


        <div className={style.forms}>
        <h3>Tegnologías utilizadas</h3>
        <input className={style.nom} type="text" name="Tegnologías" />
        <br />
        <div className={style.tecnologias}>
          <button>HTML</button>
          <button>CSS</button>
          <button>Javascript</button>
          <button>React</button>
          <button>Angular</button>
          <button>MySQL</button>
          <button>Nodejs</button>
          <button>MongoDB</button>
        </div>
        </div>
        
        <div className={style.boton_envia_container}>
        <button className={style.boton_envia}>Guardar</button>
        </div>

      </form>
    </Fragment>
    )
}

export default EditProject
