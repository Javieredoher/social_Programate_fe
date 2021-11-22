import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import style from './AdminHome.module.css'

const AdminHome = () => {
    return (
        <Fragment>
            <div className={style.container}>

                <section>

                    <div className={style.cont}>

                        <Link to="/formprofile" className={style.icon}>
                        <div><i class="fas fa-users"></i></div>
                            <p>Usuarios</p>
                        </Link>
                        
                        <Link to="/profile" className={style.icon}>
                            <div><i class="fas fa-chalkboard-teacher"></i></div>
                            <p>Ofertas</p>
                        </Link>

                        <Link to="/portfolio" className={style.icon}>
                            <div><i class="fas fa-newspaper"></i></div>
                            <p>Publicaciones</p>
                        </Link>

                    </div>
                </section>


            </div>

        </Fragment>
    )
}

export default AdminHome
