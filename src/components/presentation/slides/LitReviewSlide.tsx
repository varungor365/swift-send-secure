import SlideLayout from "../SlideLayout";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  "Zero Config",
  "Cross-Platform",
  "E2E Encrypted",
  "No Ads / Tracking",
  "Offline Mode",
  "Open Standards",
];

const tools = [
  { name: "FTP/SFTP", year: "1971/1999", values: [false, true, false, true, true, true], ref: "RFC 959, RFC 4253" },
  { name: "Apple AirDrop", year: "2011", values: [true, false, true, true, true, false], ref: "AWDL Protocol" },
  { name: "SHAREit", year: "2013", values: [true, true, false, false, true, false], ref: "Proprietary" },
  { name: "Snapdrop", year: "2015", values: [true, true, false, true, false, true], ref: "WebRTC-based" },
  { name: "Secure-Drop", year: "2025", values: [true, true, true, true, true, true], ref: "WebRTC + Web Crypto" },
];

const LitReviewSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <motion.h2
        className="text-5xl font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Literature <span style={{ color: "hsl(170 85% 50%)" }}>Review</span>
      </motion.h2>
      <p className="text-lg mb-8" style={{ color: "hsl(215 15% 60%)" }}>
        Comparative Analysis of Existing File Transfer Solutions
      </p>

      <div className="flex-1 flex items-start">
        <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "0 6px" }}>
          <thead>
            <tr>
              <th className="text-left text-lg p-4 font-semibold" style={{ color: "hsl(215 15% 60%)" }}>Solution</th>
              <th className="text-center text-sm p-4 font-semibold" style={{ color: "hsl(215 15% 50%)" }}>Year</th>
              {features.map((f) => (
                <th key={f} className="text-center text-base p-4 font-semibold" style={{ color: "hsl(215 15% 60%)" }}>{f}</th>
              ))}
              <th className="text-center text-sm p-4 font-semibold" style={{ color: "hsl(215 15% 50%)" }}>Protocol Basis</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, ti) => {
              const isSecureDrop = tool.name === "Secure-Drop";
              return (
                <motion.tr
                  key={tool.name}
                  className="rounded-xl"
                  style={{
                    background: isSecureDrop ? "hsl(170 85% 50% / 0.1)" : "hsl(220 20% 12% / 0.8)",
                    border: isSecureDrop ? "2px solid hsl(170 85% 50% / 0.4)" : undefined,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + ti * 0.1 }}
                >
                  <td className="text-lg font-bold p-4 rounded-l-xl" style={{ color: isSecureDrop ? "hsl(170 85% 50%)" : "hsl(210 20% 92%)" }}>
                    {tool.name}
                  </td>
                  <td className="text-center text-sm p-4" style={{ color: "hsl(215 15% 50%)" }}>
                    {tool.year}
                  </td>
                  {tool.values.map((v, i) => (
                    <td key={i} className="text-center p-4">
                      {v ? (
                        <Check size={24} className="inline-block" style={{ color: "hsl(145 70% 50%)" }} />
                      ) : (
                        <X size={24} className="inline-block" style={{ color: "hsl(0 75% 55%)" }} />
                      )}
                    </td>
                  ))}
                  <td className="text-center text-xs p-4 rounded-r-xl" style={{ color: isSecureDrop ? "hsl(170 85% 50% / 0.7)" : "hsl(215 15% 50%)" }}>
                    {tool.ref}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Research gap */}
      <motion.div
        className="p-5 rounded-xl mt-4"
        style={{
          background: "linear-gradient(135deg, hsl(170 85% 50% / 0.08), hsl(200 80% 55% / 0.08))",
          border: "1px solid hsl(170 85% 50% / 0.2)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-base" style={{ color: "hsl(215 15% 60%)" }}>
          <span className="font-bold" style={{ color: "hsl(170 85% 50%)" }}>Research Gap Identified: </span>
          No existing solution simultaneously achieves zero-configuration setup, true cross-platform support, end-to-end encryption, 
          and offline capability using open web standards. Secure-Drop addresses this gap through WebRTC data channels combined with 
          the W3C Web Crypto API.
        </p>
      </motion.div>

      <p className="text-sm mt-3 italic" style={{ color: "hsl(215 15% 45%)" }}>
        Ref: Schollmeier (2001), "A Definition of Peer-to-Peer Networking"; Oram (2001), "Peer-to-Peer: Harnessing the Power of Disruptive Technologies"
      </p>
    </div>
  </SlideLayout>
);

export default LitReviewSlide;
