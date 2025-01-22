import React from 'react'
import QrGenerator from './components/QrGenerator'
import QrScanner from './components/QrScanner'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<QrGenerator />} />
        <Route path="/scanner" element={<QrScanner />} />
      </Routes>
  )
}

export default App
