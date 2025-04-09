import { useState } from "react";
import FriendCard from "./components/FriendCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FriendCard
        friend={{
          id: 0,
          name: "user1",
          program: "SOEN",
          classYear: "2026",
          passions: ["food", "bs"],
          clubs: ["Space Concordia", "IEEE"],
          imageUrl: "user1.jpg",
          bio: `Hi, I'm Amy, a computer science major at Concordia University. I enjoy coding in Java and Python, and recently developed a fitness-tracking mobile app. 
          I'm passionate about Hackathons and promoting diversity in tech. 
          Let's connect and collaborate!`,
        }}
      />
    </>
  );
}

export default App;
