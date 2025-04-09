import React from "react";
import "./FriendCard.css";

export type Friend = {
  id: number;
  name: string;
  program: string;
  classYear: string;
  passions: string[];
  clubs: string[];
  imageUrl: string;
  bio: string;
};

type Props = {
  friend: Friend;
};

const FriendCard: React.FC<Props> = ({ friend }) => {
  return (
    <div className="friend-card">
      <img
        src={`/user-profile-images/${friend.imageUrl}`}
        alt={friend.name}
        className="friend-image"
      />
      <div className="friend-content">
        <div>
          <h2 className="friend-name">{friend.name}</h2>
          <h3 className="friend-subheading">About Me</h3>
          <p className="friend-bio">{friend.bio}</p>

          <div className="friend-tags">
            {friend.clubs.map((club, idx) => (
              <span key={idx} className="friend-tag">
                {club}
              </span>
            ))}
          </div>
        </div>

        <div className="friend-buttons">
          <button className="btn btn-yellow">Message 🔍</button>
          <button className="btn btn-yellow">Invite ✉️</button>
          <button className="btn btn-red">Block ✖</button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
