import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

// Pages
import Home from './pages/Home'
import Streaming from './pages/Streaming'
import Technology from './pages/Technology'
import Business from './pages/Business'
import Impact from './pages/Impact'
import Partners from './pages/Partners'
import About from './pages/About'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="streaming" element={<Streaming />} />
          <Route path="technology" element={<Technology />} />
          <Route path="business" element={<Business />} />
          <Route path="impact" element={<Impact />} />
          <Route path="partners" element={<Partners />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
