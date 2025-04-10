import React from 'react';
import './EventDetails.css';
import { useEventContext } from '../context/EventContext';


type EventDetailProps = {
    image: string;
    title: string;
    date: string;
    location: string;
    price: string;
    club: string;
    attendees: number;
    interested: number;
    capacity: number;
    isFree: boolean;
    description: string;
    tags: string[]
    onBack: () => void;
};

const EventDetails: React.FC<EventDetailProps> = ({
    title,
    location,
    date,
    image,
    attendees,
    interested,
    isFree,
    price,
    description,
    club,
    tags,
    onBack
}) => {
    const { interestedEvents, goingEvents, toggleInterested, toggleGoing } = useEventContext();
    const isInterested = interestedEvents.includes(title);
    const isGoing = goingEvents.includes(title);

    return (
        <div className="event-details-page">
            <button onClick={onBack}>Back</button>
            <h1>{title}</h1>
            <button className="club-button">{club}</button>
            <div className="location-date">
                <h3>{location}</h3>
                <span>{date}</span>
            </div>

            <div className="event-image-wrapper">
                <img src={image} alt={title} className="event-image" />
            </div>

            <div className="attendance-info">
                <div className='going-interested'><strong>{attendees} Going</strong> | <strong>{interested} Interested</strong></div>
                <div className="action-buttons">
                    {/* when clicking on button EventContext is called and that event is store in the array */}
                    <button
                        className={`interested ${isInterested ? 'active' : ''}`}
                        onClick={() => toggleInterested(title)}
                    >
                        {isInterested ? 'Interested ✔' : 'Interested ?'}
                    </button>

                    <button
                        className={`going ${isGoing ? 'active' : ''}`}
                        onClick={() => toggleGoing(title)}
                    >
                        {isGoing ? 'Going ✔' : 'Going ?'}
                    </button>

                    <button className="invite">Invite</button>
                </div>
            </div>

            {/* if it's a free event, we use the class "free-entry" otherwise we use the class "paid-entry" */}
            <p className={isFree ? "free-entry" : "paid-entry"}>
                {isFree ? "✔ Free entry" : <>{price}</>}
            </p>

            <p className="event-description">
                {description}
            </p>

            <div className="event-hashtags">
                {tags.map((tag, index) => (
                    <span className="hashtag" key={index}>#{tag}</span>
                ))}
            </div>

        </div >
    );
};

export default EventDetails;
