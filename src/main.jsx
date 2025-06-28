import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './assets/css/styles.css'
import './assets/scss/styles.scss'
// import"./assets/js/main.js"
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
