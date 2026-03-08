import SlideLayout from "../SlideLayout";
import { Shield, Lock, Wifi } from "lucide-react";

const TitleSlide = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Icon cluster */}
      <div className="flex items-center gap-6 mb-12">
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

      <h1 className="text-7xl font-black tracking-tight mb-6" style={{ color: "hsl(170 85% 50%)" }}>
        Secure-Drop
      </h1>
      <p className="text-2xl font-light mb-16" style={{ color: "hsl(215 15% 60%)" }}>
        Offline, End-to-End Encrypted Peer-to-Peer File Transfer
      </p>

      {/* Divider */}
      <div className="w-32 h-[2px] mb-16" style={{ background: "linear-gradient(90deg, transparent, hsl(170 85% 50%), transparent)" }} />

      {/* Team */}
      <div className="flex gap-16">
        {["Varun Ruhella", "Aditya Singh", "Anushka Walia"].map((name) => (
          <div key={name} className="text-center">
            <p className="text-xl font-semibold" style={{ color: "hsl(210 20% 92%)" }}>{name}</p>
          </div>
        ))}
      </div>

      <p className="text-lg mt-10" style={{ color: "hsl(215 15% 60%)" }}>
        Capstone Project • DIT University
      </p>
    </div>
  </SlideLayout>
);

export default TitleSlide;
