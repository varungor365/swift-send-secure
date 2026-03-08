import SlideLayout from "../SlideLayout";
import { FileText } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const refs = [
  "RFC 6762 — Cheshire, S. & Krochmal, M. (2013). \"Multicast DNS.\" IETF Standards Track.",
  "RFC 6455 — Fette, I. & Melnikov, A. (2011). \"The WebSocket Protocol.\" IETF Standards Track.",
  "RFC 8446 — Rescorla, E. (2018). \"The Transport Layer Security (TLS) Protocol Version 1.3.\" IETF.",
  "NIST SP 800-38D — Dworkin, M.J. (2007). \"Recommendation for GCM Mode of Operation.\" NIST.",
  "W3C WebRTC 1.0 — Bergkvist et al. (2021). \"Real-Time Communication Between Browsers.\" W3C Rec.",
  "W3C Web Crypto API — Watson, M. (2017). \"Web Cryptography API.\" W3C Recommendation.",
  "IEEE 802.11ax — IEEE (2021). \"High-Efficiency Wireless LAN Amendment.\" IEEE Standards.",
  "Lua, E.K. et al. (2005). \"A Survey of P2P Overlay Network Schemes.\" IEEE Comm. Surveys.",
  "Stute, M. et al. (2019). \"A Billion Open Interfaces for Eve and Mallory: MitM, DoS, and Tracking Attacks on iOS and macOS Through Apple Wireless Direct Link.\" USENIX Security.",
  "Boneh, D. & Shoup, V. (2020). \"A Graduate Course in Applied Cryptography.\" Stanford.",
];

const team = [
  { name: "Anushka Walia", roll: "1000017918" },
  { name: "Varun Ruhella", roll: "1000018804" },
  { name: "Aditya Singh", roll: "1000018909" },
];

const ReferencesSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8">
        <FileText size={36} style={{ color: "hsl(170 85% 50%)" }} />
        <h2 className="text-5xl font-bold">References</h2>
      </div>

      <div className="flex-1 flex gap-8">
        {/* References list */}
        <div className="flex-1 flex flex-col gap-3">
          {refs.map((ref, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-3.5 rounded-lg"
              style={{
                background: "hsl(220 20% 12% / 0.8)",
                border: "1px solid hsl(220 15% 22%)",
              }}
            >
              <span
                className="text-sm font-bold w-8 text-center flex-shrink-0"
                style={{ color: "hsl(170 85% 50% / 0.5)" }}
              >
                [{i + 1}]
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(210 20% 80%)" }}>{ref}</p>
            </div>
          ))}
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <div className="p-5 rounded-2xl" style={{ background: "white" }}>
            <QRCodeSVG
              value="https://github.com/secure-drop"
              size={160}
              level="H"
              fgColor="#0d1117"
            />
          </div>
          <p className="text-sm font-semibold text-center" style={{ color: "hsl(170 85% 50%)" }}>
            Project Repository
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid hsl(220 15% 22%)" }}>
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
