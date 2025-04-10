import React, { createContext, useEffect, useContext, useState, ReactNode } from 'react';

type FriendStatus = {
    friends: string[]; // store usernames or IDs
    addFriend: (username: string) => void;
    removeFriend: (username: string) => void;
    isFriend: (username: string) => boolean;
};

const FriendContext = createContext<FriendStatus | undefined>(undefined);

export const FriendProvider = ({ children }: { children: ReactNode }) => {

    // localStorage-backed state for friends list
    const [friends, setFriends] = useState<string[]>(() =>
        JSON.parse(localStorage.getItem('friendsList') || '[]')
    );

    const addFriend = (username: string) => {
        setFriends(prev => {
            const updated = [...new Set([...prev, username])];
            console.log("add friend:", updated);
            return updated;
        });
    };

    const removeFriend = (username: string) => {
        setFriends(prev => {
            const updated = prev.filter(friend => friend !== username);
            console.log("remove friend:", updated);
            return updated;
        });
    };

    const isFriend = (username: string) => friends.includes(username);

    useEffect(() => {
        localStorage.setItem('friendsList', JSON.stringify(friends));
    }, [friends]);

    return (
        <FriendContext.Provider value={{ friends, addFriend, removeFriend, isFriend }}>
            {children}
        </FriendContext.Provider>
    );
};

// use with button in friend hub, but we don't have add/delete friend button
export const useFriendContext = () => {
    const context = useContext(FriendContext);
    if (!context) {
        throw new Error('useFriendContext must be used within a FriendProvider');
    }
    return context;
};
