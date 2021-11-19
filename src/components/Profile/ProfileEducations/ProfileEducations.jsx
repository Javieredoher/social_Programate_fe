import React, {Fragment} from 'react'

import style from './ProfileEducations.module.css'

const ProfileEducations = () => {
    return (
        <Fragment>
            <secction className={style.container1}>
                <div className={style.container2}>
                   
                <div className={style.icon_cont2}>
                        <div><i class="fas fa-graduation-cap"></i></div>
                        <p><b>Desarrollador Fullstack</b><br /> Educamas <br /> <span>2019-2021</span></p>
                    </div>
                </div>
            </secction>
            
        </Fragment>
    )
}

export default ProfileEducations