import MainPage from './components/main-page'
import { Routes, Route } from 'react-router-dom';

import SignUp from './components/signup';

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/home" element={<MainPage />} />
        </Routes>
    </>
  )
}

export default App
