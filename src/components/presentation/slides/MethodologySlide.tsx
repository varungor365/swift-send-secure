import SlideLayout from "../SlideLayout";
import { Radio, Handshake, Lock, ArrowRightLeft, ArrowRight } from "lucide-react";

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

const MethodologySlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <h2 className="text-5xl font-bold mb-14">
        How It <span style={{ color: "hsl(170 85% 50%)" }}>Works</span>
      </h2>

      <div className="flex-1 flex items-center">
        <div className="flex items-start gap-4 w-full">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              <div
                className="flex flex-col items-center text-center p-8 rounded-2xl flex-1"
                style={{
                  background: "hsl(220 20% 12% / 0.8)",
                  border: `1px solid ${step.color}33`,
                }}
              >
                <span className="text-4xl font-black mb-4" style={{ color: `${step.color}66` }}>
                  {step.num}
                </span>
                <div
                  className="p-5 rounded-xl mb-6"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}40` }}
                >
                  <step.icon size={44} style={{ color: step.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "hsl(215 15% 60%)" }}>
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={32} className="mx-2 flex-shrink-0" style={{ color: "hsl(215 15% 60%)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default MethodologySlide;
