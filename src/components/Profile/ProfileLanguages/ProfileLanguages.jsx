import React, {Fragment} from 'react'

import style from './ProfileLanguages.module.css'

const ProfileLanguages = () => {
    return (
        <Fragment>
            <secction className={style.container1}>
                <div className={style.container2}>
                   
                <div className={style.icon_cont2}>
                        <div><i class="far fa-check-circle"></i></div>
                        <p className={style.text_cont}><b>Ingles avanzado</b></p>
                        <div className={style.pencil_cont}><i class="fas fa-pencil-alt"></i></div> 
                    </div>
                </div>
            </secction>
            
        </Fragment>
    )
}

export default ProfileLanguages