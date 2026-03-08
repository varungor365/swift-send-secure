import SlideLayout from "../SlideLayout";
import { Gauge, Cpu, Wifi, Battery } from "lucide-react";

const metrics = [
  {
    icon: Gauge,
    title: "Transfer Speed",
    value: "~120 MB/s",
    subtitle: "on 5GHz Wi-Fi",
    color: "hsl(170 85% 50%)",
  },
  {
    icon: Wifi,
    title: "2.4GHz vs 5GHz",
    value: "3x faster",
    subtitle: "on 5GHz networks",
    color: "hsl(200 80% 55%)",
  },
  {
    icon: Cpu,
    title: "Encryption Overhead",
    value: "<5% CPU",
    subtitle: "for 1GB file on laptop",
    color: "hsl(145 70% 50%)",
  },
  {
    icon: Battery,
    title: "Mobile Impact",
    value: "Minimal",
    subtitle: "battery drain on mobile",
    color: "hsl(40 90% 55%)",
  },
];

const DataSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <h2 className="text-5xl font-bold mb-6">
        Performance <span style={{ color: "hsl(170 85% 50%)" }}>Benchmarks</span>
      </h2>
      <p className="text-xl mb-12" style={{ color: "hsl(215 15% 60%)" }}>
        Benchmarking against cloud uploads across different hardware and network conditions
      </p>

      <div className="flex-1 grid grid-cols-2 gap-8">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-8 p-10 rounded-2xl"
            style={{
              background: "hsl(220 20% 12% / 0.8)",
              border: `1px solid ${m.color}33`,
            }}
          >
            <div
              className="p-6 rounded-2xl"
              style={{ background: `${m.color}15`, border: `1px solid ${m.color}40` }}
            >
              <m.icon size={48} style={{ color: m.color }} />
            </div>
            <div>
              <p className="text-lg font-medium mb-1" style={{ color: "hsl(215 15% 60%)" }}>{m.title}</p>
              <p className="text-4xl font-black" style={{ color: m.color }}>{m.value}</p>
              <p className="text-base mt-1" style={{ color: "hsl(215 15% 60%)" }}>{m.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default DataSlide;
