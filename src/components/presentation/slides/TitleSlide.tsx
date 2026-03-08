import SlideLayout from "../SlideLayout";
import { Shield, Lock, Wifi } from "lucide-react";

const team = [
  { name: "Anushka Walia", roll: "1000017918" },
  { name: "Varun Ruhella", roll: "1000018804" },
  { name: "Aditya Singh", roll: "1000018909" },
];

const TitleSlide = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Icon cluster */}
      <div className="flex items-center gap-6 mb-10">
        <div className="p-5 rounded-2xl" style={{ background: "hsl(170 85% 50% / 0.1)", border: "1px solid hsl(170 85% 50% / 0.3)" }}>
          <Shield size={48} style={{ color: "hsl(170 85% 50%)" }} />
        </div>
        <div className="p-5 rounded-2xl" style={{ background: "hsl(170 85% 50% / 0.1)", border: "1px solid hsl(170 85% 50% / 0.3)" }}>
          <Lock size={48} style={{ color: "hsl(170 85% 50%)" }} />
        </div>
        <div className="p-5 rounded-2xl" style={{ background: "hsl(170 85% 50% / 0.1)", border: "1px solid hsl(170 85% 50% / 0.3)" }}>
          <Wifi size={48} style={{ color: "hsl(170 85% 50%)" }} />
        </div>
      </div>

      <h1 className="text-7xl font-black tracking-tight mb-4" style={{ color: "hsl(170 85% 50%)" }}>
        Secure-Drop
      </h1>
      <p className="text-2xl font-light mb-12" style={{ color: "hsl(210 20% 85%)" }}>
        Offline, End-to-End Encrypted Peer-to-Peer File Transfer
      </p>

      {/* Divider */}
      <div className="w-32 h-[2px] mb-10" style={{ background: "linear-gradient(90deg, transparent, hsl(170 85% 50%), transparent)" }} />

      {/* Team with roll numbers */}
      <div className="flex gap-16 mb-10">
        {team.map((t) => (
          <div key={t.roll} className="text-center">
            <p className="text-xl font-semibold" style={{ color: "hsl(210 20% 95%)" }}>{t.name}</p>
            <p className="text-lg" style={{ color: "hsl(170 85% 50% / 0.7)" }}>{t.roll}</p>
          </div>
        ))}
      </div>

      {/* Guide & University */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg" style={{ color: "hsl(210 20% 80%)" }}>
          Under the guidance of <span className="font-semibold" style={{ color: "hsl(210 20% 95%)" }}>Dr. Kirti Gupta</span>
        </p>
        <p className="text-base" style={{ color: "hsl(215 15% 60%)" }}>
          Assistant Professor, SOC • DIT University
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default TitleSlide;
