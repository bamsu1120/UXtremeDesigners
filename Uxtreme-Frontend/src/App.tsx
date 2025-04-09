import { useState } from "react";
import FriendHub from "./components/student-tinder/FriendHub";

function App() {
  const [count, setCount] = useState(0);
  const friends = [
    {
      id: 0,
      name: "user1",
      program: "SOEN",
      classYear: "2026",
      passions: ["food", "bs"],
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
