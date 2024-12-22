import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './GlobalStyles.js'
import App from './App.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App question="What does “CSS” stand for?" answer="Cool Styling Strategy"/>
    <Breadcrumbs />
    <GlobalStyles />
  </StrictMode>,
)
