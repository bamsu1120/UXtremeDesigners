import React, { useState } from "react";
import { programs } from "../../constants/filterOptions";
import FriendCard, { Friend } from "./FriendCard";
import "./FriendHub.css"; // We'll define styles here

import people from '../../stubdata/people.json'

type FriendsList = {
  friends: Friend[];
  setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
};

const FriendHub: React.FC<FriendsList> = ({friends, setFriends}) => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [passions, setPassions] = useState<Set<string>>(new Set());
  const [newPassion, setNewPassion] = useState("");

  const [randomPeople, setRandomPeople] = useState(people);

  const handleBlock = (personId: number) => {
    setRandomPeople(randomPeople.filter((person) => person.id !== personId));
  }

  const handleFollow = (id: number) => {
    const newFriends = people.find((person) => person.id === id);
    if(friends && newFriends){
      setFriends([...friends, newFriends])
    }
    setRandomPeople(randomPeople.filter((person) => person.id !== id));
  }

  const handleAddPassion = () => {
    if (newPassion.trim()) {
      setPassions(new Set(passions).add(newPassion.trim().toLowerCase()));
      setNewPassion("");
    }
  };

  const handleRemovePassions = (passion: string) => {
    const modifiedSet = new Set(passions);
    modifiedSet.delete(passion);
    setPassions(modifiedSet);
  };

  return (
    <div className="friend-hub">
      <h1 className="title">Friend Finder</h1>

      <div className="filters">
        <select
          className="dropdown"
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
        >
          <option value="" disabled>
            Program
          </option>
          {programs.sort().map((program) => (
            <option key={program} value={program}>
              {program}
            </option>
          ))}
        </select>

        <select className="dropdown">
          <option>Class</option>
        </select>

        <div className="passions-filter">
          <span className="filter-label">Passions:</span>
          <input
            type="text"
            placeholder="Add passion"
            value={newPassion}
            onChange={(e) => setNewPassion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddPassion();
              }
            }}
            className="passion-input"
          />

          <button className="add-button" onClick={handleAddPassion}>
            +
          </button>
        </div>

        {[...passions].map((passion) => (
          <button
            key={passion}
            className="passion-tag"
            onClick={() => handleRemovePassions(passion)}
          >
            {passion} ❌
          </button>
        ))}
      </div>

      <div className="friends-list">
        {randomPeople
          .filter((friend) => {
            return (
              Array.from(friend.passions).some(
                (passion) => passions.has(passion) || passions.size === 0
              ) &&
              (friend.program === selectedProgram || !selectedProgram)
            );
          })
          .map((friend) => {
            if(!friends.find((actualfriend) => friend.id === actualfriend.id)) return <FriendCard key={friend.id} friend={friend} onBlock={handleBlock} onFollow={handleFollow}/>;
          })}
      </div>
    </div>
  );
};

export default FriendHub;
