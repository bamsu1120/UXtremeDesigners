import React, { useState } from "react";
import { passions, programs } from "../../constants/filterOptions";
import FriendCard, { Friend } from "./FriendCard";
import "./FriendHub.css"; // We'll define styles here

type FriendsList = {
  friends: Friend[];
};

const FriendHub: React.FC<FriendsList> = ({ friends }) => {
  const [selectedProgram, setSelectedProgram] = useState("");

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
          {programs.map((program) => (
            <option key={program} value={program}>
              {program}
            </option>
          ))}
        </select>

        <select className="dropdown">
          <option>Class</option>
        </select>

        <div className="passions-filter">
          <span className="filter-label">Passions</span>
          {passions.map((passion) => (
            <span key={passion} className="tag">
              {passion}
            </span>
          ))}
          <button className="add-button">+</button>
        </div>
      </div>

      <div className="friends-list">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendHub;
