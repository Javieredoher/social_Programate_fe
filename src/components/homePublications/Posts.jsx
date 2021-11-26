import React, { Fragment, useContext, useEffect, useState } from "react";

import News from "./News";
import Jobs from "./Jobs";
import Events from "./Events";
import { getData, getDataAll } from "../../helpers/fetch";
import { DataContext } from "../../context/DataContext";

const Posts = () => {
    const { getPosts, setGetPosts, dataUser } = useContext(DataContext);

    const { firstName, middleName, lastName, cohorte, avatar } = dataUser;

    // useEffect(async () => {
    //     if (idUser) {
    //         try {
    //             const data = await getData("users", idUser);
    //             setDataUser(data);
    //             console.log(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }, [idUser]);

    useEffect(async () => {
        try {
            const data = await getDataAll("posts");
            setGetPosts(data.reverse());
        } catch (error) {
            console.log(error);
        }
    }, [getPosts]);

    return (
        <Fragment>
            {getPosts?.map((post) =>
                post.type === "news" ? (
                    <News
                        description={post.description}
                        images={post.images}
                        technologies={post.technologies}
                        title={post.title}
                        id={post._id}
                        user={post.user_info ? post.user_info : ""}
                        key={post._id}
                    />
                ) : post.type === "jobs" ? (
                    <Jobs
                        description={post.description}
                        technologies={post.technologies}
                        softSkills={post.softSkills}
                        title={post.title}
                        company={post.company}
                        place={post.place}
                        modality={post.modality}
                        salary={post.salary}
                        contact={post.contact}
                        id={post._id}
                        user={post.user_info ? post.user_info : ""}
                        key={post._id}
                    />
                ) : post.type === "event" ? (
                    <Events
                        description={post.description}
                        technologies={post.technologies}
                        title={post.title}
                        place={post.place}
                        link={post.link}
                        dateEvent={post.dateEvent}
                        id={post._id}
                        user={post.user_info ? post.user_info : ""}
                        key={post._id}
                    />
                ) : null
            )}
        </Fragment>
    );
};

export default Posts;
