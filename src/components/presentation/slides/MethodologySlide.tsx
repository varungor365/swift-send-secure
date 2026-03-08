import SlideLayout from "../SlideLayout";
import { Radio, Handshake, Lock, ArrowRightLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Radio,
    num: "01",
    title: "Discovery",
    desc: "Multicast DNS lets devices on the same Wi-Fi automatically 'see' each other",
    color: "hsl(170 85% 50%)",
  },
  {
    icon: Handshake,
    num: "02",
    title: "Handshake",
    desc: "WebSocket connection established to securely exchange encryption keys",
    color: "hsl(200 80% 55%)",
  },
  {
    icon: Lock,
    num: "03",
    title: "Encryption",
    desc: "File is encrypted locally on the sender's device using AES-256",
    color: "hsl(145 70% 50%)",
  },
  {
    icon: ArrowRightLeft,
    num: "04",
    title: "Transfer",
    desc: "Data flows directly peer-to-peer via WebRTC in chunks. No server holds the file.",
    color: "hsl(40 90% 55%)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const arrowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 + 0.15, duration: 0.4 },
  }),
};

const MethodologySlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <motion.h2
        className="text-5xl font-bold mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How It <span style={{ color: "hsl(170 85% 50%)" }}>Works</span>
      </motion.h2>

      {/* Flow line */}
      <div className="flex-1 flex items-center">
        <div className="flex items-start gap-4 w-full">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              <motion.div
                className="flex flex-col items-center text-center p-8 rounded-2xl flex-1"
                style={{
                  background: "hsl(220 20% 12% / 0.8)",
                  border: `1px solid ${step.color}33`,
                }}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.03, borderColor: step.color }}
              >
                <span className="text-4xl font-black mb-4" style={{ color: `${step.color}66` }}>
                  {step.num}
                </span>
                <motion.div
                  className="p-5 rounded-xl mb-6"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}40` }}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: i * 0.3 + 0.2, duration: 0.5 }}
                >
                  <step.icon size={44} style={{ color: step.color }} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "hsl(215 15% 60%)" }}>
                  {step.desc}
                </p>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  className="mx-2 flex-shrink-0"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={arrowVariants}
                >
                  <ArrowRight size={32} style={{ color: "hsl(215 15% 60%)" }} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default MethodologySlide;
