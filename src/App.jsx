import React from 'react'
import QrGenerator from './components/QrGenerator'
import QrScanner from './components/QrScanner'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      
      <QrGenerator />
      <h1 className="text-gray-900 dark:text-gray-100">
  Welcome to Dark Mode!
</h1>
<p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
  Tailwind makes dark mode super easy!
</p>
      <QrScanner />
    </div>
  )
}

export default App
