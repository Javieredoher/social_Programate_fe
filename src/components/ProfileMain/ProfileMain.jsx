import React, { Fragment } from 'react'
import style from './ProfileMain.module.css'
import medalla1 from '../../assets/images/medalla1.png'
import medalla2 from '../../assets/images/medalla2.png'
import medalla3 from '../../assets/images/medalla3.png'

const ProfileMain = () => {
    return (
        <Fragment >
            <form className={style.container}>

                <secction className={style.cont}>

                    <div className={style.circulo_cont}>
                        <div className={style.circulo}></div>
                    </div>

                    <div className={style.img_cont}>
                        <div>
                            <img src={medalla1} alt="imagen1" />
                            <img src={medalla2} alt="imagen2" />
                            <img src={medalla3} alt="imagen3" />
                        </div>
                        <div className={style.but_cont}>
                            <button>Ver portafolio</button>
                            <button>Ver Github</button>
                        </div>
                    </div>
                </secction>

                <secction className={style.tex_cont}>
                    <div className={style.tex}>
                        <p><b>Juan Hernando Fernández</b><br /> QuakCoders</p>
                    </div>
                    <div className={style.icon}>
                        <p div className={style.tex_editar}>Editar perfil</p>
                        <i class="fas fa-pencil-alt"></i>
                    </div>

                </secction>

            </form>
        </Fragment>
    )
}

export default ProfileMain
