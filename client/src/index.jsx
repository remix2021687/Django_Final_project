import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { Components } from './components/Components'
import { RouteCompontents } from './Routes/Routes'
import '../assets/css/index.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App Routes={RouteCompontents} Components={Components} />
    </BrowserRouter>
  </React.StrictMode>,
)
