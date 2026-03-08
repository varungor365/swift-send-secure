import SlideLayout from "../SlideLayout";
import { FileText } from "lucide-react";

const refs = [
  "RFC 6762 — Multicast DNS (mDNS) Protocol Specification",
  "RFC 6455 — The WebSocket Protocol",
  "IEEE 802.11 — Wireless LAN Medium Access Control (MAC) and Physical Layer (PHY) Specifications",
  "W3C Web Crypto API — Cryptographic Operations in Web Applications",
  "WebRTC 1.0: Real-Time Communication Between Browsers — W3C Recommendation",
  "NIST SP 800-38D — Recommendation for Block Cipher Modes of Operation: GCM",
  "Rescorla, E. — \"The Transport Layer Security (TLS) Protocol Version 1.3\" (RFC 8446)",
];

const ReferencesSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-12">
        <FileText size={40} style={{ color: "hsl(170 85% 50%)" }} />
        <h2 className="text-5xl font-bold">References</h2>
      </div>

      <div className="flex-1 flex flex-col gap-5">
        {refs.map((ref, i) => (
          <div
            key={i}
            className="flex items-start gap-6 p-6 rounded-xl"
            style={{
              background: "hsl(220 20% 12% / 0.8)",
              border: "1px solid hsl(220 15% 22%)",
            }}
          >
            <span
              className="text-xl font-bold w-10 text-center flex-shrink-0"
              style={{ color: "hsl(170 85% 50% / 0.5)" }}
            >
              [{i + 1}]
            </span>
            <p className="text-lg" style={{ color: "hsl(215 15% 60%)" }}>{ref}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-2xl font-semibold" style={{ color: "hsl(170 85% 50%)" }}>
          Thank you! We are now open to questions.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default ReferencesSlide;
