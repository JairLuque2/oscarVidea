import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { CancionesApp } from './CancionesApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CancionesApp />
    </BrowserRouter>
  </React.StrictMode>
)
