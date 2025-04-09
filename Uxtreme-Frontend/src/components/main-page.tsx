import { useState } from "react";

import FriendActivity, { Status } from "./friend-activity";
import EventHub, { Event } from "./event-hub";

import events from '../stubdata/events.json';

import friends from '../stubdata/friends.json'
import './main-page.css'

export type EventRegistration = {
    event: Event;
    type: 'Going' | 'Interested';
}

function MainPage() {
    const [currentView, setCurrentView] = useState("Events"); //Valid values: Events, Friends, Your Events

    // Used to find in the stubs the current users friends and Events
    // const [userFriends, setUserFriends] = useState<string[]>([]);
    const [userEvents, setUserEvents] = useState<EventRegistration[]>([]);
  
    return (
      <>
        <div className="background">
            <div className="top-navbar">
                <div className="container">
                    <a href="#">
                        <img src="./src/assets/conUlogo.png" alt="Concordia Logo" className='icon'/>
                    </a>
                    <form action="" method="post">
                        <input type="text" className='input-myLocation' placeholder='I am at...'/>
                    </form>
                </div>
                <div className="container">
                    <img src="./src/assets/message.png" alt="message" />
                    <img src="./src/assets/bell.png" alt="bell" />
                    <a href="#">
                        <img src="./src/assets/choppa.jpg" alt="Profile Picture" className='icon'/>
                    </a>
                </div>
            </div>
            <div className="body-container">
                <div className="side-navbar">
                    <div className="container vert">
                        <button className='button-s1' onClick={()=>{setCurrentView("Events")}}>
                            <img src="./src/assets/people.png" alt="people" />  Event Hub
                        </button>
                        <button className='button-s1' onClick={()=>{setCurrentView("Friends")}}>
                            <img src="./src/assets/mood.png" alt="people" />  Friend Finder
                        </button>
                        <button className='button-s2' onClick={()=>{setCurrentView("Your Events")}}>
                            My Events
                        </button>
                    </div>
                    <div className="container friends">
                        {friends.friends.map((friend)=>(
                            <FriendActivity
                                key={friend.friendname}
                                friendName={friend.friendname}
                                status={friend.status as Status}
                                image="./src/assets/choppa.jpg"
                            />
                        ))}
                    </div>
                </div>
                <div className="main-content">
                    {currentView === "Events" && 
                        <EventHub
                            userEvents={userEvents}
                            setUserEvents={setUserEvents}
                            events={events as Event[]}
                            header="Event Hub"
                        />}
                    {currentView === "Friends" && <p>no</p>}
                    {currentView === "Your Events" &&    
                        <EventHub
                            userEvents={userEvents}
                            setUserEvents={setUserEvents}
                            header="Your Events"
                            events={userEvents.map((reg) => reg.event)}
                        />}
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default MainPage