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
    return (
        <div className='mx-auto bg-red-400 w-screen text-center'>
            <h2>QrCode Scanner</h2>
            <input
                type="file"
                accept='image/*'
                onChange={handleFileChange}
                ref={scannerRef} />
            <div id="qr-reader" style={{ width: "300px", margin: "auto" }}></div>
            <p>Scan Result : {scanResult || "No QrCode Detected"}</p>
        </div>
    )
}

export default QrScanner
