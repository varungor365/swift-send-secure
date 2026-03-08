import SlideLayout from "../SlideLayout";
import { motion } from "framer-motion";
import { ShieldCheck, Key, Lock, FileKey, AlertTriangle, CheckCircle } from "lucide-react";

const cryptoSteps = [
  {
    icon: Key,
    title: "Key Generation",
    detail: "ECDH P-256 key pair generated per session via Web Crypto API",
    ref: "NIST FIPS 186-4",
  },
  {
    icon: FileKey,
    title: "Key Exchange",
    detail: "Ephemeral keys exchanged over WebSocket signaling channel",
    ref: "RFC 6455",
  },
  {
    icon: Lock,
    title: "AES-256-GCM Encryption",
    detail: "Symmetric encryption with 96-bit IV, 128-bit authentication tag",
    ref: "NIST SP 800-38D",
  },
  {
    icon: ShieldCheck,
    title: "Integrity Verification",
    detail: "GCM mode provides built-in AEAD — authentication + encryption",
    ref: "RFC 5116",
  },
];

const threats = [
  { threat: "Man-in-the-Middle", mitigation: "Ephemeral ECDH key agreement; no reuse", status: "mitigated" },
  { threat: "Data Exfiltration", mitigation: "Zero cloud upload; data never leaves LAN", status: "mitigated" },
  { threat: "Replay Attack", mitigation: "Unique 96-bit IV per encryption operation", status: "mitigated" },
  { threat: "Brute Force", mitigation: "AES-256: 2¹²⁸ operations (infeasible)", status: "mitigated" },
];

const SecurityAnalysisSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <motion.h2
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Security <span style={{ color: "hsl(170 85% 50%)" }}>Analysis</span>
      </motion.h2>
      <p className="text-lg mb-8" style={{ color: "hsl(215 15% 60%)" }}>
        Cryptographic Protocol Design & Threat Modeling
      </p>

      <div className="flex-1 flex gap-10">
        {/* Left: Crypto pipeline */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(145 70% 50%)" }}>
            Cryptographic Pipeline
          </h3>
          {cryptoSteps.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5 p-5 rounded-xl"
              style={{
                background: "hsl(220 20% 12% / 0.8)",
                border: "1px solid hsl(170 85% 50% / 0.15)",
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: "hsl(170 85% 50% / 0.1)", border: "1px solid hsl(170 85% 50% / 0.3)" }}
                >
                  <step.icon size={24} style={{ color: "hsl(170 85% 50%)" }} />
                </div>
                <span className="text-xs font-bold" style={{ color: "hsl(170 85% 50% / 0.5)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1" style={{ color: "hsl(210 20% 92%)" }}>
                  {step.title}
                </h4>
                <p className="text-base mb-1" style={{ color: "hsl(215 15% 60%)" }}>
                  {step.detail}
                </p>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "hsl(200 80% 55% / 0.1)", color: "hsl(200 80% 60%)" }}>
                  {step.ref}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Threat model */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-4" style={{ color: "hsl(40 90% 55%)" }}>
            Threat Model Analysis
          </h3>
          <div className="flex flex-col gap-3 mb-6">
            {threats.map((t, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-xl"
                style={{
                  background: "hsl(220 20% 12% / 0.8)",
                  border: "1px solid hsl(145 70% 50% / 0.15)",
                }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} style={{ color: "hsl(40 90% 55%)" }} />
                    <span className="text-base font-bold" style={{ color: "hsl(210 20% 92%)" }}>
                      {t.threat}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded" style={{ background: "hsl(145 70% 50% / 0.1)", color: "hsl(145 70% 50%)" }}>
                    <CheckCircle size={12} /> MITIGATED
                  </span>
                </div>
                <p className="text-sm" style={{ color: "hsl(215 15% 55%)" }}>
                  {t.mitigation}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Cipher strength box */}
          <motion.div
            className="p-5 rounded-xl mt-auto"
            style={{
              background: "linear-gradient(135deg, hsl(170 85% 50% / 0.08), hsl(145 70% 50% / 0.08))",
              border: "1px solid hsl(170 85% 50% / 0.25)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-base font-bold mb-1" style={{ color: "hsl(170 85% 50%)" }}>
              Computational Security Guarantee
            </p>
            <p className="text-sm" style={{ color: "hsl(215 15% 55%)" }}>
              AES-256 requires 2<sup>128</sup> operations for brute-force — exceeding capacity of all known 
              computing architectures including projected quantum systems (Grover's algorithm).
            </p>
          </motion.div>
        </div>
      </div>

      <p className="text-sm mt-4 italic" style={{ color: "hsl(215 15% 45%)" }}>
        Ref: Dworkin, M.J. (2007), NIST SP 800-38D; Boneh & Shoup (2020), "A Graduate Course in Applied Cryptography"
      </p>
    </div>
  </SlideLayout>
);

export default SecurityAnalysisSlide;
