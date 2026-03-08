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
      <p className="text-lg mb-6" style={{ color: "hsl(215 15% 60%)" }}>
        Comparative Analysis of Existing File Transfer Solutions
      </p>

      <div className="flex items-start">
        <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "0 5px" }}>
          <thead>
            <tr>
              <th className="text-left text-lg p-3 font-semibold" style={{ color: "hsl(215 15% 60%)" }}>Solution</th>
              <th className="text-center text-sm p-3 font-semibold" style={{ color: "hsl(215 15% 50%)" }}>Year</th>
              {features.map((f) => (
                <th key={f} className="text-center text-base p-3 font-semibold" style={{ color: "hsl(215 15% 60%)" }}>{f}</th>
              ))}
              <th className="text-center text-sm p-3 font-semibold" style={{ color: "hsl(215 15% 50%)" }}>Protocol</th>
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
                  <td className="text-lg font-bold p-3 rounded-l-xl" style={{ color: isSecureDrop ? "hsl(170 85% 50%)" : "hsl(210 20% 92%)" }}>
                    {tool.name}
                  </td>
                  <td className="text-center text-sm p-3" style={{ color: "hsl(215 15% 50%)" }}>
                    {tool.year}
                  </td>
                  {tool.values.map((v, i) => (
                    <td key={i} className="text-center p-3">
                      {v ? (
                        <Check size={22} className="inline-block" style={{ color: "hsl(145 70% 50%)" }} />
                      ) : (
                        <X size={22} className="inline-block" style={{ color: "hsl(0 75% 55%)" }} />
                      )}
                    </td>
                  ))}
                  <td className="text-center text-xs p-3 rounded-r-xl" style={{ color: isSecureDrop ? "hsl(170 85% 50% / 0.7)" : "hsl(215 15% 50%)" }}>
                    {tool.ref}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Key research citations */}
      <motion.div
        className="grid grid-cols-2 gap-4 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="p-4 rounded-xl" style={{ background: "hsl(220 20% 12% / 0.8)", border: "1px solid hsl(200 80% 55% / 0.2)" }}>
          <p className="text-sm font-bold mb-1" style={{ color: "hsl(200 80% 55%)" }}>Rahalkar & Virgaonkar (2024)</p>
          <p className="text-xs" style={{ color: "hsl(215 15% 55%)" }}>
            "Secure Device-to-Device File Transfer Protocol" — addresses encryption overhead & cloud storage limitations using WebRTC stack
          </p>
          <span className="text-xs italic" style={{ color: "hsl(215 15% 45%)" }}>arXiv:2411.13827</span>
        </div>
        <div className="p-4 rounded-xl" style={{ background: "hsl(220 20% 12% / 0.8)", border: "1px solid hsl(170 85% 50% / 0.2)" }}>
          <p className="text-sm font-bold mb-1" style={{ color: "hsl(170 85% 50%)" }}>Dukiya et al. (2024)</p>
          <p className="text-xs" style={{ color: "hsl(215 15% 55%)" }}>
            "SecureLink P2P Using WebRTC" — equal peer participation model with integrated eavesdropping countermeasures
          </p>
          <span className="text-xs italic" style={{ color: "hsl(215 15% 45%)" }}>IJRAR, Vol. 11</span>
        </div>
      </motion.div>

      {/* Research gap */}
      <motion.div
        className="p-4 rounded-xl mt-4"
        style={{
          background: "linear-gradient(135deg, hsl(170 85% 50% / 0.08), hsl(200 80% 55% / 0.08))",
          border: "1px solid hsl(170 85% 50% / 0.2)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-sm" style={{ color: "hsl(215 15% 60%)" }}>
          <span className="font-bold" style={{ color: "hsl(170 85% 50%)" }}>Research Gap: </span>
          Rahalkar (2024) identifies WebRTC encryption overhead as an open problem. Dukiya (2024) validates P2P WebRTC but lacks offline capability.
          Salihu et al. (2019) detail WebRTC threat models but don't address cross-platform browser-only access. 
          <span className="font-semibold" style={{ color: "hsl(170 85% 50%)" }}> Secure-Drop unifies all dimensions.</span>
        </p>
      </motion.div>
    </div>
  </SlideLayout>
);

export default LitReviewSlide;
