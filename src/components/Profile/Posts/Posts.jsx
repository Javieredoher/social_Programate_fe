import React, { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { getDataAll } from "../../../helpers/fetch";

import News from "./News";
import Jobs from "./Jobs";
import Events from "./Events";

const Posts = () => {
    const { getPosts, setGetPosts, idUser, dataUser } = useContext(DataContext);

    const { firstName, middleName, lastName, cohorte, avatar } = dataUser;

    useEffect(async () => {
        try {
            const data = await getDataAll("posts");
            const filterData = data.filter(
                (posts) => posts.user_info === idUser
            );
            setGetPosts(filterData.reverse());
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
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        cohorte={cohorte}
                        avatar={avatar}
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
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        cohorte={cohorte}
                        avatar={avatar}
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
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        cohorte={cohorte}
                        avatar={avatar}
                        key={post._id}
                    />
                ) : null
            )}
        </Fragment>
    );
};

export default Posts;
