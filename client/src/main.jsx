import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      afterSignInUrl={import.meta.env.VITE_AFTER_SIGN_IN_URL}
      afterSignUpUrl={import.meta.env.VITE_AFTER_SIGN_UP_URL}
      afterSignOutUrl={import.meta.env.VITE_AFTER_SIGN_OUT_URL}
    >

      <BrowserRouter>

        <AppContextProvider>
          <App />
        </AppContextProvider>

      </BrowserRouter>

    </ClerkProvider>

  </StrictMode>
)