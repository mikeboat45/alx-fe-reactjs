import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<BrowserRouter>
    		<App />
	</BrowserRouter>
  </React.StrictMode>
);
