import SlideLayout from "../SlideLayout";
import { WifiOff, ShieldCheck, Monitor } from "lucide-react";

const objectives = [
  {
    icon: WifiOff,
    title: "Zero Internet Dependency",
    desc: "Operates entirely over local Wi-Fi network. No cloud, no uploads, no external servers.",
    accent: "hsl(170 85% 50%)",
  },
  {
    icon: ShieldCheck,
    title: "AES-256 Encryption",
    desc: "Military-grade encryption ensures complete data privacy. Keys never leave the local network.",
    accent: "hsl(145 70% 50%)",
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    desc: "Works on Windows, Mac, Android & Linux through any modern web browser.",
    accent: "hsl(200 80% 55%)",
  },
];

const ObjectivesSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <h2 className="text-5xl font-bold mb-14">
        Project <span style={{ color: "hsl(170 85% 50%)" }}>Objectives</span>
      </h2>

      <div className="flex-1 flex gap-10">
        {objectives.map((obj, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center text-center p-10 rounded-2xl"
            style={{
              background: "hsl(220 20% 12% / 0.8)",
              border: `1px solid ${obj.accent}33`,
            }}
          >
            <div
              className="p-6 rounded-2xl mb-8"
              style={{ background: `${obj.accent}15`, border: `1px solid ${obj.accent}40` }}
            >
              <obj.icon size={56} style={{ color: obj.accent }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: obj.accent }}>
              {obj.title}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: "hsl(215 15% 60%)" }}>
              {obj.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default ObjectivesSlide;
