import FriendHub from "./components/student-tinder/FriendHub";
import EventHub from "./components/event-hub"

function App() {
  const friends = [
    {
      id: 0,
      name: "user1",
      program: "History",
      classYear: "2026",
      passions: new Set(["anime", "food", "bs"]),
      clubs: ["Space Concordia", "IEEE"],
      imageUrl: "user1.jpg",
      bio: `Hi, I'm Amy, a computer science major at Concordia University. 
    I enjoy coding in Java and Python, and recently developed a fitness-tracking mobile app. 
    I'm passionate about Hackathons and promoting diversity in tech. 
    Let's connect and collaborate!`,
    },
  ];

  return (
    <>
      <FriendHub friends={Array(5).fill(friends).flat()} />
    </>
  );
}

export default App;
