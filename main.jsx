import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react'
import './input.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
     domain="dev-xa8bgmxpnpblrvnp.us.auth0.com"
    clientId="o3oNHWxm2rhoLolNnmaEDFS8hb3oj8QA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)
