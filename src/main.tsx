import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ScrollToTop from './ScrollToTop.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/portfolio'> 
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
