import React from "react";
import style from "./eventCard.module.css";
import events from "../../events.json";
import { EventCardSon } from "./EventCardSon";

/* This is the father component of Event Card */
const EventCard = () => {
    return (
        <div className={style.cardContainer}>
            {events.map((props) => (
                <EventCardSon
                    key={props.id}
                    avatar={props.avatar}
                    name_person={props.name_person}
                    cohort={props.cohort}
                    time={props.time}
                    event_name={props.event_name}
                    date_place={props.date_place}
                    inscription_link={props.inscription_link}
                    type={props.type}
                />
            ))}
        </div>
    );
};

export default EventCard;
