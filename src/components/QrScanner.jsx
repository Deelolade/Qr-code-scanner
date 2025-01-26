import React, { useEffect, useRef, useState } from 'react'

import { Html5Qrcode } from "html5-qrcode";
const QrScanner = () => {
    const [scanResult, setScanResult] = useState("");
    const scannerRef = useRef(null);
    const [isScanning, setIsScanning] = useState(false);
    useEffect(() => {
        const Qrcode = new Html5Qrcode("qr-reader");
        let isRunning = false;
        const QrCodeSuccessCallback = (decodedtext) => {
            setScanResult(decodedtext);
            if (isRunning) {
                Qrcode.stop()
                isRunning = false;
            }
        }
        Qrcode
            .start(
                { facingmode: "environment" },
                { fps: 10, qrbox: 250 },
                QrCodeSuccessCallback
            )
            .then(() => {
                isRunning = true;
                setIsScanning(true);
                console.log("Qr code scanning started")
            })
            .catch((err) => {
                console.error("Qr code scanning failed", err)
                setIsScanning(false);
            })
        return () => {
            if (isRunning) {
                Qrcode.stop().catch((err) => console.error("failed to stop scanner", err))
            }
        }
    }, [])
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const html5QrCode = new Html5Qrcode("qr-reader");
            html5QrCode
                .scanFile(file, true) // Enable scanning of inverted QR codes
                .then((decodedText) => {
                    setScanResult(decodedText);
                })
                .catch((err) => {
                    console.error("Error scanning the file", err);
                });
        }
    }
    const deleteData = () => {
        setScanResult('')
        if (scanResult === "") {
            "qr-reader" === 0
        }
    }
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-light-secondary dark:bg-dark-primary" id='qr-scanner'>
            <div className=''>
                <div className="text-center mx-auto">
                    <h2 className='text-6xl font-bold my-12 text-light-primary dark:text-dark-secondary'>QrCode Scanner</h2>
                    {scanResult.length < 1 && (
                        <input
                            type="file"
                            accept='image/*'
                            onChange={handleFileChange}
                            ref={scannerRef}
                            className='w-[60vw] md:w-[50vw] lg:w-[30vw] my-4 pt-3 h-14  py-auto outline-none px-6 font-medium rounded-full shadow-lg bg-white/30 backdrop-blur-md border border-white/40 text-light-primary placeholder:text-light-secondary dark:text-white dark:placeholder-white ' />
                    )}
                    <div id="qr-reader" className='max-w-[30vw] h-[40vh] mx-auto' />
                    {/* {scanResult && (
                    )} */}
                    <p className='text-2xl font-bold my-12 text-light-primary dark:text-dark-secondary'>Scan Result : {scanResult || "No QrCode Detected"}</p>
                    {scanResult && (
                        <button
                            onClick={deleteData}
                            className="mt-4 px-4 py-2 bg-light-primary dark:bg-dark-primary dark:border-2 dark:text-dark-secondary text-light-secondary font-bold rounded-lg shadow hover:scale-105  transition"
                        >
                            Delete Data
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default QrScanner
