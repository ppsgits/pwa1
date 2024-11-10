document.addEventListener("DOMContentLoaded", () => {
    const qrCodeReader = new Html5Qrcode("qr-reader");

    function onScanSuccess(decodedText, decodedResult) {
        // Handle the result (display it on the page, log it, etc.)
        document.getElementById("result").textContent = `Scanned Text: ${decodedText}`;
        qrCodeReader.stop(); // Stop the camera after a successful scan
    }

    function onScanFailure(error) {
        console.warn(`QR Code no match: ${error}`);
    }

    // Function to start the QR code scanning
    function startScanner() {
        qrCodeReader.start(
            { facingMode: "environment" }, // Use the back camera
            { fps: 10, qrbox: 250 },
            onScanSuccess,
            onScanFailure
        ).catch(error => {
            console.error("Camera start failed:", error);
            alert("Failed to access the camera. Please check permissions.");
        });
    }

    // Start scanner on button click
    document.getElementById("start-scan-btn").addEventListener("click", startScanner);
});
