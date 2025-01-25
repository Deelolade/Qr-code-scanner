import React from 'react'
import QrGenerator from './components/QrGenerator'
import QrScanner from './components/QrScanner'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<QrGenerator />} />
        <Route path="/scanner" element={<QrScanner />} />
      </Routes>
    </div>
  )
}

export default App
