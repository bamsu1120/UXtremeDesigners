import {useEffect, useState} from 'react'
import EventCard, {EventCardProps} from './EventCard'
import EventDetails from './EventDetails';

import './event-hub.css'

import events from '../stubdata/events.json';

export type Event = {
    image: string;
    title: string;
    date: string;
    location: string;
    price: string;
    club: string;
    attendees: number;
    capacity: number;
    isFree: boolean;
    description: string;
    interested: number;
    tags: string[];
};

function EventHub(){
 const [filteredList, setFilteredList] = useState<EventCardProps[]>(events as EventCardProps[])
 const [detailMode, setDetailMode] = useState<boolean>(false);
 const [selectedEvent, setSelectedEvent] = useState<Event>(events.find((event)=> event.title === "") as Event);
 const [searchQuery, setSearchQuery] = useState<string>("");

 //Tags provided by User
 //Search Parameter
 //Are Friends Attending
 //Refilter Lists
    useEffect(()=>{
        setFilteredList((events.filter((event) => event.title.toLowerCase().includes(searchQuery)) ?? []) as EventCardProps[]);
    },[searchQuery])

    function updateSearchQuery(event: React.ChangeEvent<HTMLInputElement>){
        setSearchQuery(event.target.value);
    }

    function loadEventDetails(eventName: string){
        setSelectedEvent(events.find((event)=> event.title === eventName) as Event);
        setDetailMode(true);
    }

  return (
    <>
    {!detailMode ?
        <div className="event-container">
            <div className="top">
                <h1>
                    Event Hub
                </h1>
                <input type="text" className='input-myLocation' placeholder='Search' onChange={updateSearchQuery}/>
            </div>
            <div className="scroll">
                {filteredList.map((event, index) => (
                    <EventCard
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
            />
        </div>
    }
    </>
  )
}

export default EventHub
