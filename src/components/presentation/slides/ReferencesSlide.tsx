import SlideLayout from "../SlideLayout";
import { FileText } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const refs = [
  "RFC 6762 — Multicast DNS (mDNS) Protocol Specification",
  "RFC 6455 — The WebSocket Protocol",
  "IEEE 802.11 — Wireless LAN Medium Access Control (MAC) and Physical Layer (PHY) Specifications",
  "W3C Web Crypto API — Cryptographic Operations in Web Applications",
  "WebRTC 1.0: Real-Time Communication Between Browsers — W3C Recommendation",
  "NIST SP 800-38D — Recommendation for Block Cipher Modes of Operation: GCM",
  "Rescorla, E. — \"The Transport Layer Security (TLS) Protocol Version 1.3\" (RFC 8446)",
];

const team = [
  { name: "Anushka Walia", roll: "1000017918" },
  { name: "Varun Ruhella", roll: "1000018804" },
  { name: "Aditya Singh", roll: "1000018909" },
];

const ReferencesSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-10">
        <FileText size={40} style={{ color: "hsl(170 85% 50%)" }} />
        <h2 className="text-5xl font-bold">References</h2>
      </div>

      <div className="flex-1 flex gap-10">
        {/* References list */}
        <div className="flex-1 flex flex-col gap-4">
          {refs.map((ref, i) => (
            <div
              key={i}
              className="flex items-start gap-6 p-5 rounded-xl"
              style={{
                background: "hsl(220 20% 12% / 0.8)",
                border: "1px solid hsl(220 15% 22%)",
              }}
            >
              <span
                className="text-lg font-bold w-10 text-center flex-shrink-0"
                style={{ color: "hsl(170 85% 50% / 0.5)" }}
              >
                [{i + 1}]
              </span>
              <p className="text-lg" style={{ color: "hsl(210 20% 80%)" }}>{ref}</p>
            </div>
          ))}
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center gap-4 px-6">
          <div
            className="p-6 rounded-2xl"
            style={{ background: "white" }}
          >
            <QRCodeSVG
              value="https://github.com/secure-drop"
              size={180}
              level="H"
              fgColor="#0d1117"
            />
          </div>
          <p className="text-base font-semibold text-center" style={{ color: "hsl(170 85% 50%)" }}>
            Scan to explore
          </p>
          <p className="text-sm text-center" style={{ color: "hsl(215 15% 60%)" }}>
            Project Repository
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-6" style={{ borderTop: "1px solid hsl(220 15% 22%)" }}>
        <div className="flex gap-10">
          {team.map((t) => (
            <div key={t.roll} className="text-center">
              <p className="text-base font-semibold" style={{ color: "hsl(210 20% 95%)" }}>{t.name}</p>
              <p className="text-sm" style={{ color: "hsl(170 85% 50% / 0.7)" }}>{t.roll}</p>
            </div>
          ))}
        </div>
        <p className="text-xl font-semibold" style={{ color: "hsl(170 85% 50%)" }}>
          Thank you! Open to questions.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default ReferencesSlide;
