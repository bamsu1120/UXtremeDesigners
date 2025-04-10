import React from 'react';
import './EventCard.css'

export type EventCardProps = {
    image?: string;
    title: string;
    date: string;
    location: string;
    price: string;
    club: string;
    attendees: number;
    capacity: number;
    isFree: boolean;
    viewDetails?: (eventTitle: string) => void;
    unregisterVisible?: boolean;
    onUnregister: (title: string) => void;
};

const EventCard: React.FC<EventCardProps> = ({
    image,
    title,
    date,
    location,
    club,
    attendees,
    capacity,
    isFree,
    viewDetails,
    unregisterVisible = false,
    onUnregister
}) => {
    return (
        <div className="yup">
            {unregisterVisible && <button className='unregister' onClick={()=>{
                onUnregister(title);
            }}>unregister</button>}
            <div className="event-card">
                <img src={image} alt={title} className="event-image" />
                <div className="event-details">
                    <div className='event-header'>
                        <h2>{title}</h2>
                        <span className='capacity'>{attendees} / {capacity}</span>
                    </div>
                    <p>{date}</p>
                    <p>{location}</p>
                    <p className={isFree ? "free-entry" : "paid-entry"}>
                        {isFree ? "✔ Free entry" : `$$ Paid entry`}
                    </p>
                    <div className="event-footer">
                        <button className="club-button">{club}</button>
                        {/* add a onClick so that it redirects to Event Details */}
                        <button className="see-details" onClick={() => {
                            viewDetails?.(title);
                        }}>See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
