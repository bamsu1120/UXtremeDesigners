import React, { useState } from "react";
import { programs } from "../../constants/filterOptions";
import FriendCard, { Friend } from "./FriendCard";
import "./FriendHub.css"; // We'll define styles here

type FriendsList = {
  friends: Friend[];
};
const FriendHub: React.FC<FriendsList> = ({ friends }) => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [passions, setPassions] = useState<Set<string>>(new Set());
  const [newPassion, setNewPassion] = useState("");

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
            onChange={(e) => setNewPassion(e.target.value.toLowerCase)}
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
        {friends
          .filter((friend) => {
            return (
              Array.from(friend.passions).some(
                (passion) => passions.has(passion) || passions.size === 0
              ) &&
              (friend.program === selectedProgram || !selectedProgram)
            );
          })
          .map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
      </div>
    </div>
  );
};

export default FriendHub;
