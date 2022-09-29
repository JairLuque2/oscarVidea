import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { CancionesApp } from './CancionesApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CancionesApp />
    </HashRouter>
  </React.StrictMode>
)
