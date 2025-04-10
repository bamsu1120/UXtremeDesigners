import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { EventProvider } from './context/EventContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* for context */}
    {/* <EventProvider> */}
    <App />
    {/* </EventProvider> */}
  </StrictMode>,
)
