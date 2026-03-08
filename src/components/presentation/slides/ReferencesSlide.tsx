import SlideLayout from "../SlideLayout";
import { FileText } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const refs = [
  "Rahalkar, C. & Virgaonkar, A. (2024). \"Secure Device-to-Device File Transfer Protocol.\" arXiv:2411.13827.",
  "Dukiya, R. et al. (2024). \"SecureLink P2P Using WebRTC: Enhancing Security in Decentralized File Sharing.\" IJRAR, Vol. 11.",
  "Salihu, S.A. et al. (2019). \"On the Design and Implementation of Peer-to-Peer Communication Using WebRTC.\" Science Journal.",
  "Werner, M. \"Peer-to-Peer Networking using Open Web Technologies.\" HAW Hamburg.",
  "RFC 8827 — Rescorla, E. (2021). \"WebRTC Security Architecture.\" IETF Standards Track.",
  "RFC 6455 — Fette, I. & Melnikov, A. (2011). \"The WebSocket Protocol.\" IETF Standards Track.",
  "RFC 6762 — Cheshire, S. & Krochmal, M. (2013). \"Multicast DNS.\" IETF Standards Track.",
  "NIST SP 800-38D — Dworkin, M.J. (2007). \"Recommendation for GCM Mode of Operation.\" NIST.",
  "W3C WebRTC 1.0 — Bergkvist et al. (2021). \"Real-Time Communication Between Browsers.\" W3C Rec.",
  "Stute, M. et al. (2019). \"MitM, DoS, and Tracking Attacks on iOS/macOS Through AWDL.\" USENIX Security.",
  "Lua, E.K. et al. (2005). \"A Survey of P2P Overlay Network Schemes.\" IEEE Comm. Surveys & Tutorials.",
  "Boneh, D. & Shoup, V. (2020). \"A Graduate Course in Applied Cryptography.\" Stanford University.",
];

const team = [
  { name: "Anushka Walia", roll: "1000017918" },
  { name: "Varun Ruhella", roll: "1000018804" },
  { name: "Aditya Singh", roll: "1000018909" },
];

const ReferencesSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <FileText size={36} style={{ color: "hsl(170 85% 50%)" }} />
        <h2 className="text-5xl font-bold">References</h2>
      </div>

      <div className="flex-1 flex gap-6">
        {/* References list — two columns */}
        <div className="flex-1 grid grid-cols-2 gap-x-5 gap-y-2.5 content-start">
          {refs.map((ref, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg"
              style={{
                background: "hsl(220 20% 12% / 0.8)",
                border: `1px solid ${i < 5 ? "hsl(170 85% 50% / 0.15)" : "hsl(220 15% 22%)"}`,
              }}
            >
              <span
                className="text-xs font-bold w-7 text-center flex-shrink-0 mt-0.5"
                style={{ color: i < 5 ? "hsl(170 85% 50% / 0.7)" : "hsl(170 85% 50% / 0.4)" }}
              >
                [{i + 1}]
              </span>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(210 20% 80%)" }}>{ref}</p>
            </div>
          ))}
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center gap-3 px-3 flex-shrink-0">
          <div className="p-4 rounded-2xl" style={{ background: "white" }}>
            <QRCodeSVG
              value="https://github.com/secure-drop"
              size={140}
              level="H"
              fgColor="#0d1117"
            />
          </div>
          <p className="text-xs font-semibold text-center" style={{ color: "hsl(170 85% 50%)" }}>
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
