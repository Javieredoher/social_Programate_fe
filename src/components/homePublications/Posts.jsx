import React, { Fragment, useContext, useEffect } from "react";

import News from "./News";
import Jobs from "./Jobs";
import Events from "./Events";
import { getDataAll } from "../../helpers/fetch";
import { DataContext } from "../../context/DataContext";
import { useState } from "react";

const Posts = () => {
    const { getPosts, setGetPosts, filterHome, setFilterHome } =
        useContext(DataContext);

    const [dataUsers, setDataUsers] = useState([]);

    useEffect(async () => {
        try {
            const data = await getDataAll("users");
            setDataUsers(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const filteredUser = () => {
        const filteredUser = dataUsers.filter(
            (user) =>
                user?.firstName?.toLowerCase().includes(filterHome) ||
                user?.middleName?.toLowerCase().includes(filterHome) ||
                user?.lastName?.toLowerCase().includes(filterHome)
        );

        return filteredUser;
    };

    const filterPosts = () => {
        if (filterHome.length !== 0) {
            const filtered = getPosts.filter(
                (post) =>
                    post?.type?.toLowerCase().includes(filterHome) ||
                    post?.technologies
                        ?.map((tech) => tech.toLowerCase())
                        .includes(filterHome) ||
                    filteredUser()
                        .map((user) => user._id)
                        .includes(post?.user_info)
            );
            return filtered;
        } else {
            return getPosts;
        }
    };

    useEffect(async () => {
        try {
            const data = await getDataAll("posts");
            setGetPosts(data.reverse());
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <Fragment>
            {filterPosts()?.map((post) =>
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
