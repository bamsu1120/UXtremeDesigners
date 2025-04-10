import React, { createContext, useEffect, useContext, useState, ReactNode } from 'react';

type EventStatus = {
    interestedEvents: string[]; // using event titles for better continuity :-)
    goingEvents: string[];
    toggleInterested: (eventTitle: string) => void;
    toggleGoing: (eventTitle: string) => void;
};

const EventContext = createContext<EventStatus | undefined>(undefined);

export const EventProvider = ({ children }: { children: ReactNode }) => {

    // added this for local storage, has to be change if we're using backend
    // when user reconnects to the app, the interested events are still saved
    const [interestedEvents, setInterestedEvents] = useState<string[]>(() =>
        JSON.parse(localStorage.getItem('interestedEvents') || '[]')
    );
    const [goingEvents, setGoingEvents] = useState<string[]>(() =>
        JSON.parse(localStorage.getItem('goingEvents') || '[]')
    );

    const toggleInterested = (eventTitle: string) => {
        setInterestedEvents(prev => {
            const updated = prev.includes(eventTitle)
                ? prev.filter(title => title !== eventTitle)
                : [...prev, eventTitle];
            // testing
            console.log("update interested events:", updated)
            return updated;

        });
    };

    const toggleGoing = (eventTitle: string) => {
        setGoingEvents(prev => {
            const updated = prev.includes(eventTitle)
                ? prev.filter(title => title !== eventTitle)
                : [...prev, eventTitle];
            // testing
            console.log("update going events:", updated)
            return updated;
        });
    };

    // Save to localStorage when state changes
    useEffect(() => {
        localStorage.setItem('interestedEvents', JSON.stringify(interestedEvents));
    }, [interestedEvents]);

    useEffect(() => {
        localStorage.setItem('goingEvents', JSON.stringify(goingEvents));
    }, [goingEvents]);

    return (
        <EventContext.Provider value={{ interestedEvents, goingEvents, toggleInterested, toggleGoing }}>
            {children}
        </EventContext.Provider>
    );
};

// for easier use of EventContext
export const useEventContext = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};
