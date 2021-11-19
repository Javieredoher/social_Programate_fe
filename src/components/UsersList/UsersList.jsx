import React, { Fragment } from 'react'
import ImagDama from '../../assets/images/ImagDama.png'
import ImagCaballero from '../../assets/images/ImagCaballero.png'
import style from './UsersList.module.css'

const UsersList
 = () => {
    return (
        <Fragment>
            <div className={style.container}>

                <div className={style.card}>
                    <img className={style.img} src={ImagDama} alt="ImagDama" />
                    <p>Pepita Pérez<br/>
                        ult. vez a las 14:21</p>
                    <ul className={style.icon_green}>
                        <i class="far fa-user"></i>
                    </ul>
                </div>

                <div className={style.card}>
                    <img className={style.img} src={ImagCaballero} alt="ImagCaballero" />
                    <p>Pepita Pérez<br/>
                        ult. vez a las 14:21</p>
                    <ul className={style.icon_green}>
                        <i class="far fa-user"></i>
                    </ul>
                </div>

                <div className={style.card}>
                    <img className={style.img} src={ImagDama} alt="ImagDama" />
                    <p>Pepita Pérez<br/>
                        ult. vez a las 14:21</p>
                    <ul className={style.icon_Gray}>
                        <i class="far fa-user"></i>
                    </ul>
                </div>

                <div className={style.card}>
                    <img className={style.img} src={ImagCaballero} alt="ImagCaballero" />
                    <p>Pepita Pérez<br/>
                        ult. vez a las 14:21</p>
                    <ul className={style.icon_green}>
                        <i class="far fa-user"></i>
                    </ul>
                </div>

                <div className={style.card}>
                    <img className={style.img} src={ImagDama} alt="ImagDama" />
                    <p>Pepita Pérez<br/>
                        ult. vez a las 14:21</p>
                    <ul className={style.icon_green}>
                        <i class="far fa-user"></i>
                    </ul>
                </div>

                <div className={style.card}>
                    <img className={style.img} src={ImagCaballero} alt="ImagCaballero" />
                    <p>Pepita Pérez<br/>
                        ult. vez a las 14:21</p>
                    <ul className={style.icon_Gray}>
                        <i class="far fa-user"></i>
                    </ul>
                </div>

                <div className={style.card}>
                    <img className={style.img} src={ImagDama} alt="ImagDama" />
                    <p>Pepita Pérez<br/>
                        ult. vez a las 14:21</p>
                    <ul className={style.icon_green}>
                        <i class="far fa-user"></i>
                    </ul>
                </div>

                <div className={style.card}>
                    <img className={style.img} src={ImagCaballero} alt="ImagCaballero" />
                    <p>Pepita Pérez<br/>
                        ult. vez a las 14:21</p>
                    <ul className={style.icon_Gray}>
                        <i class="far fa-user"></i>
                    </ul>
                </div>


            </div>

        </Fragment>


    )
}

export default UsersList

