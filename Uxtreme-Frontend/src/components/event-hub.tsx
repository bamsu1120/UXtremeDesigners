import {useEffect, useState} from 'react'
import EventCard, {EventCardProps} from './EventCard'
import EventDetails from './EventDetails';
import { ToastContainer, toast } from 'react-toastify';
import { EventRegistration } from './main-page';

import './event-hub.css'

export type Event = {
    image: string;
    title: string;
    date: string;
    location: string;
    price: string;
    club: string;
    friends_attending: boolean;
    attendees: number;
    capacity: number;
    isFree: boolean;
    description: string;
    interested: number;
    tags: string[];
};

export type EventHubProps ={
    userEvents: EventRegistration[];
    setUserEvents: React.Dispatch<React.SetStateAction<EventRegistration[]>>;
    header: string;
    events: Event[]
    unregisterEnabled: boolean
}

function EventHub({
    userEvents,
    setUserEvents,
    header,
    events,
    unregisterEnabled
}: EventHubProps){
 const [filteredList, setFilteredList] = useState<Event[]>(events as Event[])
 const [detailMode, setDetailMode] = useState<boolean>(false);
 const [selectedEvent, setSelectedEvent] = useState<Event>(events.find((event)=> event.title === "") as Event);
 const [searchQuery, setSearchQuery] = useState<string>("");

 const [friendsFilter, setFriendsFilter] = useState<boolean>(false)

 //Tags provided by User
 //Search Parameter
 //Are Friends Attending
 //Refilter Lists

    function onUnregister(title: string){
        setUserEvents([...userEvents.filter((event) => event.event.title !== title)])
    }

    function registerEvent(type: 'Going' | 'Interested'){
        toast(`Event registered successfully. ${selectedEvent.title}`,{
            className: "black-background",
            progressClassName: "yellow-progress",
          });
        const reg = userEvents.find((Registration) => Registration.event.title === selectedEvent.title);
        if(!reg){
            const registration: EventRegistration = {
                event: selectedEvent,
                type: type
            }
            setUserEvents([...userEvents, registration])
            console.log(userEvents)
        }else {
            reg.type = type
        }
    }

    useEffect(()=>{
        setFilteredList((events.filter((event) => {
            if(friendsFilter){
                return event.title.toLowerCase().includes(searchQuery.toLowerCase()) && event.friends_attending
            } else{
                return event.title.toLowerCase().includes(searchQuery.toLowerCase())
            }
        }) ?? []) as Event[]);
    },[searchQuery, events, friendsFilter])

    function updateSearchQuery(event: React.ChangeEvent<HTMLInputElement>){
        setSearchQuery(event.target.value);
    }

    function loadEventDetails(eventName: string){
        setSelectedEvent(events.find((event)=> event.title === eventName) as Event);
        setDetailMode(true);
    }

    function toggleFriends(){
        setFriendsFilter(!friendsFilter);
        console.log(friendsFilter);
    }

  return (
    <>
    <ToastContainer/>
    {!detailMode ?
        <div className="event-container">
            <div className="top">
                <h1>
                    {header}
                </h1>
                <input type="text" className='input-myLocation' placeholder='Search' onChange={updateSearchQuery}/>
                <div className="friend-toggle">
                    <label className="toggle-switch">
                        <input type="checkbox" onChange={toggleFriends}/>
                        <div className="toggle-switch-background">
                            <div className="toggle-switch-handle"></div>
                        </div>
                    </label>
                    <p>Friends Attending</p>
                </div>
            </div>
            <div className="scroll">
                {filteredList.map((event) => (
                    <EventCard
                        onUnregister={onUnregister}
                        unregisterVisible={unregisterEnabled}
                        viewDetails={loadEventDetails}
                        {...event}
                    />
                ))}
            </div>
        </div>
        :
        <div className="event-container">
            <EventDetails
                {...selectedEvent}
                onBack={()=>{
                    setDetailMode(false)
                }}
                onRegister={registerEvent}
            />
        </div>
    }
    </>
  )
}

export default EventHub
