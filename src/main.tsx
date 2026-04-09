// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from 'react-dom/client'
import './index.css'

// Permanent Loading Component
const Loading = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      Loading...
    </div>
  )
}

// Render ONLY Loading (App is never rendered)
createRoot(document.getElementById('root')!).render(
  <Loading />
)
    
