import React, { useState } from 'react'
// import QRCode from "qrcode.react"
import { QRCodeCanvas } from "qrcode.react";

const QrGenerator = () => {
  const [inputText, setInputText] = useState("")
  return (
    <div>
      <h2>Qr code generator</h2>
      <input type="text"
        placeholder='Enter text to generate qr code'
        value={inputText}
        onChange={(e) => { setInputText(e.target.value) }}
      />
      <div className="mt-12 bg-red-500">
        {inputText && <QRCodeCanvas value={inputText} size={200} className='bg-slate-400' />}
      </div>
    </div>
  )
}

export default QrGenerator
