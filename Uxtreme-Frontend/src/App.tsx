import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventCard from '../components/EventCard'
import EventDetails from '../components/EventDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <EventCard
        image="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/07/forest.jpg"
        title="Hike up Mont Royal"
        date="Saturday, April 12th"
        location="1260 Remembrance Road, Montréal, CA H3H 1A2"
        price="Free"
        club="Concordia Outdoors Club"
        attendees={17}
        capacity={20}
        isFree={true}
      /> */}
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
      />
    </>
  )
}

export default App
