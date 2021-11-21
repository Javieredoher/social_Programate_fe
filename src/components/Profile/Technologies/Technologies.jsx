import React from 'react'
import style from './Technologies.module.css'

const Technologies = () => {
    return (
        <>
            <secction className={style.container1}>
            <div className={style.container2}>
                <div className={style.icon_cont}>
                    <div className={style.title}><p>Tegnologías</p></div>
                   <div><i class="fas fa-pencil-alt"></i></div> 
                </div>
                <div><p>React (hooks) - Node.js - Express - MongoDB - Talwind - Sass - Less</p></div>
            </div>
            </secction>
        </>
    )
}

export default Technologies