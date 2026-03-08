import SlideLayout from "../SlideLayout";
import { motion } from "framer-motion";
import { Microscope, Globe, Brain, Layers, Fingerprint } from "lucide-react";

const futureWork = [
  {
    icon: Layers,
    title: "Multi-Hop Relay Transfer",
    desc: "Extend range beyond single LAN using relay nodes with onion-style encryption layers, enabling file transfer across connected subnets.",
    tags: ["Overlay Networks", "Routing Algorithms"],
    color: "hsl(170 85% 50%)",
  },
  {
    icon: Fingerprint,
    title: "Zero-Knowledge Authentication",
    desc: "Implement ZK-SNARK based device verification to authenticate peers without revealing identity — advancing trustless P2P security.",
    tags: ["ZK Proofs", "Privacy-Preserving"],
    color: "hsl(200 80% 55%)",
  },
  {
    icon: Brain,
    title: "Adaptive Chunk Optimization",
    desc: "ML-based dynamic chunk sizing that adapts to real-time network conditions, bandwidth fluctuations, and device capabilities.",
    tags: ["Machine Learning", "Network QoS"],
    color: "hsl(40 90% 55%)",
  },
  {
    icon: Globe,
    title: "Progressive Web App (PWA)",
    desc: "Full offline-first PWA with service workers for instant loading, push notifications for transfer requests, and native-like UX.",
    tags: ["Service Workers", "Installable"],
    color: "hsl(145 70% 50%)",
  },
  {
    icon: Microscope,
    title: "Formal Security Verification",
    desc: "Apply model checking (ProVerif/Tamarin) to formally verify the cryptographic protocol against symbolic and computational attackers.",
    tags: ["Formal Methods", "Protocol Analysis"],
    color: "hsl(280 70% 60%)",
  },
];

const FutureScopeSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <motion.h2
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Future <span style={{ color: "hsl(170 85% 50%)" }}>Scope</span>
      </motion.h2>
      <p className="text-lg mb-10" style={{ color: "hsl(215 15% 60%)" }}>
        Research Directions & Potential Extensions
      </p>

      <div className="flex-1 flex flex-col gap-5">
        {futureWork.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-6 p-6 rounded-xl"
            style={{
              background: "hsl(220 20% 12% / 0.8)",
              border: `1px solid ${item.color}22`,
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
            whileHover={{ borderColor: `${item.color}66` }}
          >
            <div
              className="p-4 rounded-xl flex-shrink-0"
              style={{ background: `${item.color}12`, border: `1px solid ${item.color}30` }}
            >
              <item.icon size={32} style={{ color: item.color }} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(215 15% 60%)" }}>
                {item.desc}
              </p>
              <div className="flex gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded text-xs font-medium"
                    style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}25` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-sm mt-4 italic" style={{ color: "hsl(215 15% 45%)" }}>
        Research avenues aligned with IEEE P2P Computing, ACM CCS Security, and W3C Web Standards tracks
      </p>
    </div>
  </SlideLayout>
);

export default FutureScopeSlide;
