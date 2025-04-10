import { useState } from "react";

import FriendActivity, { Status } from "./friend-activity";
import EventHub, { Event } from "./event-hub";
import FriendHub from "./student-tinder/FriendHub";
import { Friend } from "./student-tinder/FriendCard";

import events from '../stubdata/events.json';

import './main-page.css'

export type EventRegistration = {
    event: Event;
    type: 'Going' | 'Interested';
}

function MainPage() {
    const [currentView, setCurrentView] = useState("Events"); //Valid values: Events, Friends, Your Events

    // Used to find in the stubs the current users friends and Events
    const [userFriends, setUserFriends] = useState<Friend[]>([]);
    const [userEvents, setUserEvents] = useState<EventRegistration[]>([]);
    const [notifVisible, setNotifVisible] = useState<boolean>(false);

    function toggleNotifs(){
        setNotifVisible(!notifVisible);
    }
  
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
                <div className="notif-parent">
                    <div className="container">
                        <img src="./src/assets/message.png" alt="message" />
                        <img src="./src/assets/bell.png" alt="bell" className="bell-icon" onClick={()=> toggleNotifs()}/>
                        <a href="#">
                            <img src="./src/assets/choppa.jpg" alt="Profile Picture" className='icon'/>
                        </a>
                    </div>
                        {notifVisible &&
                            <div className="notif-container">
                                <div className="notif">
                                    <img src="./src/assets/choppa.jpg" alt="profile picture" className="icon"/>
                                    <p>Invited you </p>
                                    <button>Event</button>
                                </div>
                                <div className="notif">
                                    <img src="./src/assets/choppa.jpg" alt="profile picture" className="icon"/>
                                    <p>Invited you </p>
                                    <button>Event</button>
                                </div>
                            </div>
                        }
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
                        {userFriends.map((friend)=>(
                            <FriendActivity
                                key={friend.id}
                                friendName={friend.name}
                                status={friend.status as Status}
                                image={friend.imageUrl}
                            />
                        ))}
                    </div>
                </div>
                <div className="main-content">
                    {currentView === "Events" && 
                        <EventHub
                            unregisterEnabled={false}
                            userEvents={userEvents}
                            setUserEvents={setUserEvents}
                            events={events as Event[]}
                            header="Event Hub"
                        />}
                    {currentView === "Friends" && 
                        <FriendHub
                            friends={userFriends}
                            setFriends={setUserFriends}
                        />
                    }
                    {currentView === "Your Events" &&    
                        <EventHub
                            unregisterEnabled={true}
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