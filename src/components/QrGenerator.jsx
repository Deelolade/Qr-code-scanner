import React, { useEffect, useRef, useState } from 'react'
// import QRCode from "qrcode.react"
import { QRCodeCanvas } from "qrcode.react";

const QrGenerator = () => {
  const [inputText, setInputText] = useState("")
  const qrCodeRef = useRef(null);

  const downloadQRCode = () => {
    if (qrCodeRef.current) {
      const canvas = qrCodeRef.current.querySelector("canvas"); // Get the canvas inside the QRCodeCanvas
      if (canvas) {
        const url = canvas.toDataURL("image/png"); // Convert canvas to a PNG URL
        const link = document.createElement("a");
        link.href = url;
        link.download = "qrcode.png"; // Name of the file
        link.click();
      } else {
        console.error("Canvas element not found!");
      }
    } else {
      console.error("QR Code container is not rendered yet!");
    }
  };
  useEffect(() => {
    console.log(qrCodeRef.current?.innerHTML); // Log the structure
  }, []);

  return (
    <div className="h-[100vh] " id="qr-generator">
      <div className='mx-auto text-center flex justify-center items-center flex-col'>
        <div className="mt-20">
          <div className="h-[29vh]">
            {inputText && (<QRCodeCanvas value={inputText} ref={qrCodeRef} size={300} className=' border-8 border-white rounded-lg shadow-lg mx-auto' />)}
          </div>
          <div className="">
            <h2 className='text-6xl font-bold my-12 '>Qr code generator</h2>
            <input
              type="text"
              placeholder="Enter text to generate QR code"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              className="w-[60vw] md:w-[50vw] lg:w-[30vw] h-16 outline-none px-6 font-medium rounded-full shadow-lg bg-white/30 backdrop-blur-md border border-white/40 text-black placeholder-black"
            />
          </div>
          {inputText && (
            <button
              onClick={downloadQRCode}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download QR Code
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default QrGenerator
