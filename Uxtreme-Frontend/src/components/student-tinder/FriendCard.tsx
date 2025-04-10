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
  status: string;
};

type Props = {
  friend: Friend;
  onBlock: (id: number) => void;
  onFollow: (id: number) => void;
};

const FriendCard: React.FC<Props> = ({ friend, onBlock, onFollow}) => {
  return (
    <div className="friend-card">
      <img
        src={friend.imageUrl}
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
          <button className="btn btn-yellow">Message<img src="./src/assets/search.png" alt="search" width={'15px'} height={'15px'}/></button>
          <button className="btn btn-yellow" onClick={() => {
            onFollow(friend.id);
          }}>Invite <img src="./src/assets/mail.png" alt="mail" width={'15px'} height={'15px'}/></button>
          <button className="btn btn-red" onClick={()=> {
            onBlock(friend.id);
          }}>✖</button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
