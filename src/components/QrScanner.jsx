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
        <div className="">
            <div className='mx-auto bg-red-400 h-[98vh] w-screen flex justify-between items-center flex-col'>
                <div className="pt-20">
                    <h2>QrCode Scanner</h2>
                    <input
                        type="file"
                        accept='image/*'
                        onChange={handleFileChange}
                        ref={scannerRef} />
                    <div id="qr-reader" style={{ width: "300px", margin: "auto" }}></div>
                    <p>Scan Result : {scanResult || "No QrCode Detected"}</p>
                </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L21.8,138.7C43.6,117,87,75,131,96C174.5,117,218,203,262,202.7C305.5,203,349,117,393,96C436.4,75,480,117,524,144C567.3,171,611,181,655,176C698.2,171,742,149,785,165.3C829.1,181,873,235,916,218.7C960,203,1004,117,1047,117.3C1090.9,117,1135,203,1178,224C1221.8,245,1265,203,1309,154.7C1352.7,107,1396,53,1418,26.7L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default QrScanner
