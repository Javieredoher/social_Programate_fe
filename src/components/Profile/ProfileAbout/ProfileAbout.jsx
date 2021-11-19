import React from 'react'
import style from './ProfileAbout.module.css'

const ProfileAbout = () => {
    return (
        <>
            <secction className={style.container1}>
            <div className={style.container2}>
                <div className={style.icon_cont}>
                    <div className={style.title}><p>Acerca de</p></div>
                   <div><i class="fas fa-pencil-alt"></i></div> 
                </div>
                <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam doloremque, itaque cumque error odit quaerat fugit </p></div>
            </div>
            </secction>
        </>
    )
}

export default ProfileAbout