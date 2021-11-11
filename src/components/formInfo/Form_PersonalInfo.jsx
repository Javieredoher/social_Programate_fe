import React, { Fragment } from 'react'
import style from './Form_PersonalInfo.module.css'

// import { useForm } from "react-hook-form"

const Form_PersonalInfo = () => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);
  return (
    <Fragment>
      <form className={style.from_container}>

        <div className={style.forms} >
        <h3>Nombre *</h3>
        <input className={style.nom} type="text" name="nombre" />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Link del Git Hub</h3>
        <input className={style.nom} type="text" name="Git Hub" />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Cohorte *</h3>
        <input className={style.nom} type="text" name="Cohorte" />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Acerca de</h3>
        <textarea className={style.textarea}rows="3" name="Acerca de" >
        </textarea><br />
        </div>

        <div className={style.forms}>
        <h3>Tegnologías</h3>
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
        
      
        
        <div className={style.forms}>
        <h3>Idiomas</h3>
        <input className={style.nom} type="text" name="Idiomas" />
        <br />
        </div>

      </form>
    </Fragment>
  )
}
export default Form_PersonalInfo
