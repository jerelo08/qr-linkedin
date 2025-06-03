// pages/jeremy.tsx
import QRCode from 'react-qr-code';

export default function JeremyPage() {
  const linkedInURL = "https://www.linkedin.com/in/jeremy-c-7052aa11a/";

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}>
      <h1>Scan QR Code LinkedIn Carlo</h1>
      <div style={{ background: "white", padding: "16px" }}>
        <QRCode value={linkedInURL} size={256} />
      </div>
      <p style={{ marginTop: "20px" }}>{linkedInURL}</p>
    </main>
  );
}
