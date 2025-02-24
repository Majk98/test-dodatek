import { useState } from "react";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("")
  const [qrCode, setQrCode] = useState("")

  const generateQRCode = () => {
    if (input) {
      setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
    }
  };

  return (
    <div className="container">
      <h2>Generátor QR kódů</h2>
      <div className="qr-section">
        <input type="text" placeholder="Zadej URL nebo text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={generateQRCode}>Generovat QR kód</button>    
        {qrCode && <img src={qrCode} alt="QR Code" />}
      </div>
    </div>
  );
};

export default QRCodeGenerator
