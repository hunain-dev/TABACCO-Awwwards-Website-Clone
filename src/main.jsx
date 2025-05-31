import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Topmen from './Components/Topmen/Topmen.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <Topmen  />
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
