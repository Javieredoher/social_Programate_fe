import React, { Fragment } from 'react'
import style from './AdminHome.module.css'
import AdminCommunity from './adminCommunity/AdminCommunity'
import Adminjob from './adminJob/Adminjob'


const AdminHome = () => {
    return (
        <Fragment>
            <div className={style.container}>

                <section>

                    <div className={style.cont}>


                        <AdminCommunity/>

                        <Adminjob/>

                    </div>

                </section>

            </div>

        </Fragment>
    )
}

export default AdminHome
