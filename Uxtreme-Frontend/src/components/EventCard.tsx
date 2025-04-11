import React, {useEffect, useState} from 'react';
import './EventCard.css'

import { Friend } from './student-tinder/FriendCard';

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
    attending: number[];
    friends: Friend[];
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
    onUnregister,
    friends,
    attending
}) => {

    const [friendsAreGoing, setFriendsAttending] = useState<boolean>();

    useEffect(()=>{
        setFriendsAttending(attending.some((attendee) => friends.find((friend) => attendee === friend.id)))
    },[friends])


    return (
        <div className="yup">
            {unregisterVisible && <button className='unregister' onClick={()=>{
                onUnregister(title);
            }}>unregister</button>}
            {friendsAreGoing && <div className="friends-cards">
            {
                friends.map((friend) => {
                    if(attending.includes(friend.id)){
                        return <img src={friend.imageUrl} alt="pfp" className='icon' />
                    }
                })
            }
            </div>}
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
