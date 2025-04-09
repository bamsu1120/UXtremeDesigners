import './friend-activity.css'

export type Status = "online" | "offline" | "idle" | "error";

type FriendProps = {
    friendName: string,
    status: Status,
    image: string
};

const FriendActivity: React.FC<FriendProps> = ({
    friendName,
    status,
    image
}) => {

  return (
    <div className="friend-container">
        <div className="yes">
            <img src={image} alt="Profile pic" className='icon'/>
            <div className={`status-dot ${status}`}></div>
        </div>
        <p>{friendName}</p>
    </div>
  )
}

export default FriendActivity
