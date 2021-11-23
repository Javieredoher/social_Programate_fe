import React, { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { getDataAll } from "../../../helpers/fetch";

import News from "./News";

const Posts = () => {
    const { getPosts, setGetPosts, idUser, dataUser } = useContext(DataContext);

    const { firstName, middleName, lastName, cohorte, avatar } = dataUser;

    useEffect(async () => {
        try {
            const data = await getDataAll("posts");
            const filterData = data.filter(
                (posts) => posts.user_info === idUser
            );
            setGetPosts(filterData);
        } catch (error) {
            console.log(error);
        }
    }, []);
    console.log(dataUser);
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
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        cohorte={cohorte}
                        avatar={avatar}
                        key={post._id}
                    />
                ) : post.type === "jobs" ? (
                    <Jobs />
                ) : post.type === "event" ? (
                    <Jobs />
                ) : null
            )}
        </Fragment>
    );
};

export default Posts;
