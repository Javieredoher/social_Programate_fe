import React from 'react'
import style from './ProfileSkiles.module.css'

const ProfileSkiles = () => {
    return (
        <>
            <secction className={style.container1}>
            <div className={style.container2}>
                <div className={style.icon_cont}>
                    <div className={style.title}><p>Habilidades</p></div>
                   <div><i class="fas fa-pencil-alt"></i></div> 
                </div>
                <div><p>Trabajo en equipo - Adaptación al cambio -Gestión del tiempo</p></div>
            </div>
            </secction>
        </>
    )
}

export default ProfileSkiles
