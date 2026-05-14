import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleAnalytics } from '@next/third-parties/google'
// main -> app -> four pages
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GoogleAnalytics gaId="G-5G5ZMBEJY5" />
  </StrictMode>,
)
