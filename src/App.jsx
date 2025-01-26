import React from 'react'
import QrGenerator from './components/QrGenerator'
import QrScanner from './components/QrScanner'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <QrGenerator />
      <QrScanner />
      <Footer />
    </div>
  )
}

export default App
