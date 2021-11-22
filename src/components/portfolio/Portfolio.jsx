import React, { Fragment } from 'react'
import style from './Portfolio.module.css'

const Portfolio = () => {
  
    return (
        <Fragment>
            <div className={style.container}>
               <section>
                <div className={style.title_container}>
                    <div className={style.title}>
                        <h1>Chat red social </h1>
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam doloremque, itaque cumque error odit quaerat fugit  </p>
                </div>
                </section>
                
                <section className={style.section1}>
                    <div className={style.tex}>
                        <p>INTOCOL</p>
                        <p>COMUNICACIONES</p>
                    </div>
                    <div className={style.icon_chat}>
                        <div className={style.icon}><i class="far fa-comments"></i></div>
                        <button className={style.boton_principal}>Ingresar</button>
                        <div className={style.tex2}>
                            <p>Crea tu cuenta</p>
                            <a class="nav-list" href="#">Regístarte ahora</a>
                        </div>

                    </div>
                </section>


                <secton className={style.section_container2}>
                    <div className={style.boton2}>
                        <button className={style.boton_principal2}>proyecto</button>
                        <button className={style.boton_principal2}>Github</button>
                    </div>

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


                </secton>

            </div>



            {/* segunda componente */}
        
            <div className={style.container}>
                <section>
                <div className={style.title_container}>
                    <div className={style.title}>
                        <h1>Chat red social </h1>
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam doloremque, itaque cumque error odit quaerat fugit  </p>
                </div>
                </section>

                <section className={style.section1}>
                    <div className={style.tex}>
                        <p>INTOCOL</p>
                        <p>COMUNICACIONES</p>
                    </div>
                    <div className={style.icon_chat}>
                        <div className={style.icon}><i class="far fa-comments"></i></div>
                        <button className={style.boton_principal}>Ingresar</button>
                        <div className={style.tex2}>
                            <p>Crea tu cuenta</p>
                            <a class="nav-list" href="#">Regístarte ahora</a>
                        </div>

                    </div>
                </section>


                <secton className={style.section_container2}>
                    <div className={style.boton2}>
                        <button className={style.boton_principal2}>proyecto</button>
                        <button className={style.boton_principal2}>Github</button>
                    </div>

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


                </secton>

            </div>


        </Fragment>
    )
}

export default Portfolio
