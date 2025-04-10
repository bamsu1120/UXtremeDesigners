import React, {useState} from 'react';
import './EventDetails.css';

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
    onRegister: (rtype: 'Going' | 'Interested') => void;
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
    onBack,
    onRegister
}) => {

    const [inviteVisible, setInviteVisible] = useState<boolean>(false);

    function toggleInvites(){
        setInviteVisible(!inviteVisible);
    }

    return (
        <div className="event-details-page">
            <button className='back-button' onClick={onBack}>Back</button>
            <h1>{title}</h1>
            <button className="club-button">{club}</button>
            <div className="location-date">
                <h3>{location}</h3>
                <span>{date}</span>
            </div>

            <div className="event-image-wrapper">
                <img src={image} alt={title} className="event-image" />
            </div>

            <div className="yay">
                <div className="attendance-info">
                    <div className='going-interested'><strong>{attendees} Going</strong> | <strong>{interested} Interested</strong></div>
                    <div className="action-buttons">
                        <button className="interested" onClick={()=>{
                            onRegister('Interested');
                        }}>Interested ?</button>
                        <button className="going" onClick={()=>{
                            onRegister('Going');
                        }}>Going ✔</button>
                        <button className="invite" onClick={toggleInvites} >Invite</button>
                    </div>
                    {inviteVisible &&
                            <div className="notif-container">
                                <div className="notif invite">
                                    <img src="./src/assets/choppa.jpg" alt="profile picture" className="icon"/>
                                    <button>Invite</button>
                                </div>
                                <div className="notif invite">
                                    <img src="./src/assets/choppa.jpg" alt="profile picture" className="icon"/>
                                    <button>Invite</button>
                                </div>
                            </div>
                        }
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
