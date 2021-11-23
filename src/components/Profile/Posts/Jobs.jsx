import React from "react";
import style from "./Posts.module.css";

const News = () => {
    return (
        <section className={style.container1}>
            <div className={style.container2}>
                <div className={style.icon_cont1}>
                    <div className={style.icon}>
                        <i className="far fa-user-circle"></i>
                    </div>
                    <p>
                        <b>Juan Hernando Fernandez</b>
                        <br />
                        QuakCoders
                        <br /> <span>2 hr</span>
                    </p>
                    <div>
                        <i className="fas fa-pencil-alt"></i>
                    </div>
                    <i className="far fa-trash-alt"></i>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi accusantium ipsam explicabo saepe, dolorum quo
                        accusamus, quisquam nihil recusandae optio possimus
                        aliquam deleniti, aspernatur error! Corrupti sequi nihil
                        officiis molestiae?
                    </p>
                </div>
                <div className={style.icon_cont2}>
                    <div className={style.like}>
                        <i className="far fa-thumbs-up"></i>
                        <span>23</span>
                    </div>
                    <div>
                        <i className="far fa-comment-dots"></i>
                        <span>20</span>
                    </div>
                    <div>
                        <i className="fas fa-share"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
