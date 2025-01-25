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
    <div className="h-[90vh] ">
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
              className="w-[30vw] h-16 outline-none px-6 font-medium rounded-full shadow-lg bg-white/30 backdrop-blur-md border border-white/40 text-black placeholder-black"
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
      <div className=" bottom-0 absolute w-full -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,32L30,64C60,96,120,160,180,176C240,192,300,160,360,122.7C420,85,480,43,540,26.7C600,11,660,21,720,37.3C780,53,840,75,900,101.3C960,128,1020,160,1080,160C1140,160,1200,128,1260,101.3C1320,75,1380,53,1410,42.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
    </div>
  )
}

export default QrGenerator
