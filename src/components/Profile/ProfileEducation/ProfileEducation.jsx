import React, {Fragment} from 'react'
import ProfileEducations from '../ProfileEducations/ProfileEducations'


import style from './ProfileEducation.module.css'

const ProfileEducation = () => {
    return (
        <Fragment>
            <secction className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}><p>Educacion</p></div>
                        <div><i class="fas fa-pencil-alt"></i></div>
                    </div>
                    <div className={style.icon_cont2}>
                        <div><i class="fas fa-graduation-cap"></i></div>
                        <p><b>Desarrollador Fullstack</b><br /> Educamas <br /> <span>2019-2021</span></p>
                    </div>
                    <ProfileEducations/>
                </div>
            </secction>
            
        </Fragment>
    )
}

export default ProfileEducation