import React, { Fragment, useState} from 'react'
import style from './FormJobs.module.css'


const FormJobs = () => {

// Revisar los State al momento de aplicar funcionalidad

  const [datos, setDatos] = useState({
    nombre_de_la_oferta: '',
    Tipo_de_perfil: ''
  })

  const handleInputChange = (event) =>{
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log(`${datos.nombre_de_la_oferta} ${datos.Tipo_de_perfil}`)

  }
 
  return (
    <Fragment>
      <form className={style.from_container} onSubmit={sendData}>

        <div className={style.forms} >
        <h3>Nombre de la oferta</h3>
        <input 
        placeholder="" 
        className={style.nom} 
        type="text" 
        name="nombre_de_la_oferta"  
        onChange={handleInputChange} 
        />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Empresa</h3>
        <input 
        placeholder="" 
        className={style.nom} 
        type="text" 
        name="Tipo_de_perfil"  
        onChange={handleInputChange} 
        />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Tecnologías solicitadas</h3>
        <input className={style.nom} type="text" name="Tecnologías solicitadas" />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Habilidades blandas</h3>
        <input className={style.nom} type="text" name="Habilidades blandas" /><br />
        </div>

        <div className={style.forms}>
        <h3>Lugar de la oferta</h3>
        <input className={style.nom} type="text" name="Lugar de la oferta" />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Remota / Presencial / Hibrida</h3>
        <input className={style.nom} type="text" name="Remota / Presencial / Hibrida" />
        <br />
        </div>

        <div className={style.forms}>
        <h3>Salario</h3>
        <input className={style.nom} type="text" name="Salario"/>
        <br />
        </div>

        <div className={style.forms}>
        <h3>Contacto</h3>
        <input className={style.nom} type="Contacto" />
        <br />
        </div>

        <div className={style.enviar}>
            <button className="btn" type="submit">Enviar</button>
        </div>


      </form>
      <h3>{datos.nombre_de_la_oferta} - {datos.Tipo_de_perfil}</h3>
    </Fragment>
  )
}
export default FormJobs
