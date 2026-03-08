import SlideLayout from "../SlideLayout";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Tablet, Wifi, ArrowLeftRight } from "lucide-react";

const ArchitectureSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <motion.h2
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        System <span style={{ color: "hsl(170 85% 50%)" }}>Architecture</span>
      </motion.h2>
      <p className="text-lg mb-10" style={{ color: "hsl(215 15% 60%)" }}>
        Peer-to-Peer (P2P) Network Topology — Decentralized, Zero-Server Model
      </p>

      <div className="flex-1 flex gap-12">
        {/* Left: Traditional Cloud Model */}
        <motion.div
          className="flex-1 flex flex-col rounded-2xl p-8"
          style={{
            background: "hsl(0 60% 50% / 0.06)",
            border: "1px solid hsl(0 60% 50% / 0.2)",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2" style={{ color: "hsl(0 70% 60%)" }}>
            ✕ Traditional Model
          </h3>
          <p className="text-base mb-6" style={{ color: "hsl(215 15% 55%)" }}>
            Centralized server dependency — single point of failure
          </p>

          {/* Visual: Star topology around a server */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-[400px] h-[320px]">
              {/* Central server */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-xl" style={{ background: "hsl(0 60% 50% / 0.15)", border: "2px solid hsl(0 60% 50% / 0.4)" }}>
                <p className="text-base font-bold text-center" style={{ color: "hsl(0 70% 60%)" }}>☁ Cloud<br/>Server</p>
              </div>
              {/* Devices around */}
              {[
                { top: "0%", left: "10%", Icon: Laptop },
                { top: "0%", left: "70%", Icon: Smartphone },
                { top: "75%", left: "0%", Icon: Tablet },
                { top: "75%", left: "75%", Icon: Laptop },
                { top: "40%", left: "-5%", Icon: Smartphone },
                { top: "40%", left: "85%", Icon: Tablet },
              ].map((d, i) => (
                <motion.div
                  key={i}
                  className="absolute p-3 rounded-lg"
                  style={{ top: d.top, left: d.left, background: "hsl(220 20% 15%)", border: "1px solid hsl(220 15% 25%)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <d.Icon size={24} style={{ color: "hsl(215 15% 60%)" }} />
                </motion.div>
              ))}
              {/* Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                {[
                  [55, 15, 200, 150], [310, 15, 200, 150],
                  [30, 260, 200, 170], [330, 260, 200, 170],
                  [20, 150, 180, 160], [370, 150, 220, 160],
                ].map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="hsl(0 60% 50% / 0.3)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {["Single point of failure", "Data stored on 3rd party", "Internet required", "Privacy risks"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-sm" style={{ background: "hsl(0 60% 50% / 0.1)", color: "hsl(0 70% 65%)", border: "1px solid hsl(0 60% 50% / 0.2)" }}>
                ✕ {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: P2P Model (Secure-Drop) */}
        <motion.div
          className="flex-1 flex flex-col rounded-2xl p-8"
          style={{
            background: "hsl(170 85% 50% / 0.06)",
            border: "1px solid hsl(170 85% 50% / 0.2)",
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2" style={{ color: "hsl(170 85% 50%)" }}>
            ✓ Secure-Drop P2P Model
          </h3>
          <p className="text-base mb-6" style={{ color: "hsl(215 15% 55%)" }}>
            Direct device-to-device — no intermediary, no server
          </p>

          {/* Visual: Mesh topology */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-[400px] h-[320px]">
              {/* Central Wi-Fi symbol */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full"
                style={{ background: "hsl(170 85% 50% / 0.1)", border: "2px dashed hsl(170 85% 50% / 0.3)" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Wifi size={32} style={{ color: "hsl(170 85% 50%)" }} />
              </motion.div>
              {/* Devices in mesh */}
              {[
                { top: "0%", left: "15%", Icon: Laptop },
                { top: "0%", left: "65%", Icon: Smartphone },
                { top: "75%", left: "5%", Icon: Tablet },
                { top: "75%", left: "70%", Icon: Laptop },
                { top: "35%", left: "-5%", Icon: Smartphone },
                { top: "35%", left: "85%", Icon: Tablet },
              ].map((d, i) => (
                <motion.div
                  key={i}
                  className="absolute p-3 rounded-lg"
                  style={{ top: d.top, left: d.left, background: "hsl(220 20% 15%)", border: "1px solid hsl(170 85% 50% / 0.3)" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <d.Icon size={24} style={{ color: "hsl(170 85% 50%)" }} />
                </motion.div>
              ))}
              {/* P2P mesh lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                {[
                  [80, 20, 280, 20], [80, 20, 25, 150],
                  [280, 20, 370, 150], [25, 150, 50, 260],
                  [370, 150, 310, 260], [50, 260, 310, 260],
                  [80, 20, 310, 260], [280, 20, 50, 260],
                ].map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="hsl(170 85% 50% / 0.2)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {["No single point of failure", "Data stays on device", "Works offline", "Full privacy"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-sm" style={{ background: "hsl(170 85% 50% / 0.1)", color: "hsl(170 85% 50%)", border: "1px solid hsl(170 85% 50% / 0.2)" }}>
                ✓ {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Academic footnote */}
      <p className="text-sm mt-6 italic" style={{ color: "hsl(215 15% 45%)" }}>
        Ref: Lua et al. (2005), "A survey and comparison of peer-to-peer overlay network schemes," IEEE Communications Surveys & Tutorials
      </p>
    </div>
  </SlideLayout>
);

export default ArchitectureSlide;
