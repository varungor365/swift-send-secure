import SlideLayout from "../SlideLayout";
import { Check, X, Minus } from "lucide-react";

const features = ["Easy Setup", "Cross-Platform", "Encrypted", "No Ads", "Offline", "Open Standards"];

const tools = [
  { name: "FTP", values: [false, true, false, true, true, true] },
  { name: "AirDrop", values: [true, false, true, true, true, false] },
  { name: "SHAREit", values: [true, true, false, false, true, false] },
  { name: "Secure-Drop", values: [true, true, true, true, true, true] },
];

const LitReviewSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <h2 className="text-5xl font-bold mb-12">
        Literature <span style={{ color: "hsl(170 85% 50%)" }}>Review</span>
      </h2>

      <div className="flex-1 flex items-start">
        <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "0 8px" }}>
          <thead>
            <tr>
              <th className="text-left text-xl p-5 font-semibold" style={{ color: "hsl(215 15% 60%)" }}>Solution</th>
              {features.map((f) => (
                <th key={f} className="text-center text-lg p-5 font-semibold" style={{ color: "hsl(215 15% 60%)" }}>{f}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, ti) => {
              const isSecureDrop = tool.name === "Secure-Drop";
              return (
                <tr
                  key={tool.name}
                  className="rounded-xl"
                  style={{
                    background: isSecureDrop ? "hsl(170 85% 50% / 0.1)" : "hsl(220 20% 12% / 0.8)",
                    border: isSecureDrop ? "2px solid hsl(170 85% 50% / 0.4)" : undefined,
                  }}
                >
                  <td className="text-xl font-bold p-5 rounded-l-xl" style={{ color: isSecureDrop ? "hsl(170 85% 50%)" : "hsl(210 20% 92%)" }}>
                    {tool.name}
                  </td>
                  {tool.values.map((v, i) => (
                    <td key={i} className="text-center p-5">
                      {v ? (
                        <Check size={28} className="inline-block" style={{ color: "hsl(145 70% 50%)" }} />
                      ) : (
                        <X size={28} className="inline-block" style={{ color: "hsl(0 75% 55%)" }} />
                      )}
                    </td>
                  ))}
                  <td className="rounded-r-xl" />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-lg mt-4" style={{ color: "hsl(215 15% 60%)" }}>
        Secure-Drop bridges the gap: AirDrop's frictionless experience, built on open web standards for universal access.
      </p>
    </div>
  </SlideLayout>
);

export default LitReviewSlide;
