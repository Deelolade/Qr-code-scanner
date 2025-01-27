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

  const deleteData =()=>{
    setInputText('')
  }
  return (
    <div className="  xs:h-auto sm:h-screen w-screen  bg-light-secondary dark:bg-dark-primary" id="qr-generator">
      <div className='mx-auto text-center flex justify-center items-center h-screen'>
        <div className="">
          <div className="">
            {inputText && (<QRCodeCanvas value={inputText} ref={qrCodeRef} size={300} className=' max-w-[70vw]  h-[30vh] md:h-[40vh] border-8 border-white rounded-lg shadow-lg mx-auto' />)}
          </div>
          <div className=" ">
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold my-12 text-light-primary dark:text-dark-secondary'>QrCode generator</h2>
            <input
              type="text"
              placeholder="Enter text to generate QR code"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              className="w-[90vw] md:w-[55vw] lg:w-[35vw] h-16 outline-none px-6 font-medium rounded-full shadow-lg bg-white/30 backdrop-blur-md border border-white/40 text-light-primary placeholder:text-light-secondary dark:text-white dark:placeholder-white"
            />
          </div>
          <div className="xs:w-[80vw] lg:w-[20vw] mx-auto flex justify-evenly mt-6">
          {inputText && (
            <button
              onClick={downloadQRCode}
              className="mt-4 px-4 py-2 xs:text-sm sm:text-[15px]  bg-light-primary dark:bg-dark-primary dark:border-2 dark:text-dark-secondary text-light-secondary font-bold rounded-lg shadow hover:scale-105  transition"
            >
              Download QR Code
            </button>
          )}
          {inputText && (
            <button
              onClick={deleteData}
              className="mt-4 px-4 py-2 xs:text-sm sm:text-[15px] bg-light-primary dark:bg-dark-primary dark:border-2 dark:text-dark-secondary text-light-secondary font-bold rounded-lg shadow hover:scale-105  transition"
            >
              Delete Data
            </button>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QrGenerator
