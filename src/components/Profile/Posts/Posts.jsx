import React, { Fragment } from 'react'

import style from './Posts.module.css'

const Posts = () => {
    return (
        <Fragment>
            <secction className={style.container1}>
                <div className={style.container2}>

                    <div className={style.icon_cont1}>
                        <div className={style.icon}><i class="far fa-user-circle"></i></div>
                        <p><b>Juan Hernando Fernandez</b><br />QuakCoders<br /> <span>2 hr</span></p>

                    </div>
                    <div>
                        <p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium ipsam explicabo saepe, dolorum quo accusamus, quisquam nihil recusandae optio possimus aliquam deleniti, aspernatur error! Corrupti sequi nihil officiis molestiae?</p></p>
                    </div>
                    <div className={style.icon_cont2}>
                    <div className={style.icon_cont3}><i class="far fa-thumbs-up"></i><div><span>23</span></div></div>
                    <div><i class="far fa-comment-dots"></i></div>
                    <div><i class="fas fa-share"></i></div>
                    </div>
                </div>
            </secction>

        </Fragment>
    )
}

export default Posts