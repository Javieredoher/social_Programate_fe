import React, { Fragment } from 'react'
import style from './AdminHome.module.css'

const AdminHome = () => {
    return (
        <Fragment>
            <div className={style.container}>

                <section>

                    <div className={style.cont}>

                        <div className={style.icon}>
                            <div><i class="fas fa-users"></i></div>
                            <p>Usuario</p>
                        </div>

                        <div className={style.icon}>
                            <div><i class="fas fa-chalkboard-teacher"></i></div>
                            <p>Ofertas</p>
                        </div>

                        <div className={style.icon}>
                            <div><i class="fas fa-newspaper"></i></div>
                            <p>Publicaciones</p>
                        </div>

                    </div>
                </section>

            </div>

        </Fragment>
    )
}

export default AdminHome
