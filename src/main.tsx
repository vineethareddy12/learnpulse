// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import './i18n' // Initialize i18n

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
          Loading...
        </div>
      }
    >
      {/* App intentionally not rendered */}
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Loading...
      </div>
    </Suspense>
  </Provider>
)
