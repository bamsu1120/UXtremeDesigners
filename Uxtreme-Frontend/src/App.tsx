import { useState } from 'react'
import MainPage from './components/main-page'
import EventCard from './components/EventCard'
import EventDetails from './components/EventDetails'


// const friends = [
//   {
//     id: 0,
//     name: "user1",
//     program: "History",
//     classYear: "2026",
//     passions: new Set(["anime", "food", "bs"]),
//     clubs: ["Space Concordia", "IEEE"],
//     imageUrl: "user1.jpg",
//     bio: `Hi, I'm Amy, a computer science major at Concordia University. 
//   I enjoy coding in Java and Python, and recently developed a fitness-tracking mobile app. 
//   I'm passionate about Hackathons and promoting diversity in tech. 
//   Let's connect and collaborate!`,
//   },
// ];

// return (
//   <>
//     <FriendHub friends={Array(5).fill(friends).flat()} />

function App() {
  return (
    <>
      <MainPage/>
      {/* <EventCard
        image="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/07/forest.jpg"
        title="Hike up Mont Royal"
        date="Saturday, April 12th"
        location="1260 Remembrance Road, Montréal, CA H3H 1A2"
        price="Free"
        club="Concordia Outdoors Club"
        attendees={17}
        capacity={20}
        isFree={true}
      />
      <EventDetails
        image="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/07/forest.jpg"
        title="Hike up Mont Royal"
        date="Saturday, April 12th"
        location="1260 Remembrance Road, Montréal, CA H3H 1A2"
        price={15}
        club="Concordia Outdoors Club"
        attendees={17}
        capacity={20}
        isFree={true}
        interested={25}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        tags={["hiking", "nature", "outdoors"]}
      /> */}
    </>
  )
}

export default App
