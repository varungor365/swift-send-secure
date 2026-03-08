import SlideLayout from "../SlideLayout";
import { BookOpen, Target, Search, Cog, Wrench, BarChart3, CheckCircle, Heart, FileText, List, Network, ShieldCheck, Microscope } from "lucide-react";

const items = [
  { num: "01", title: "Introduction & Problem Statement", icon: BookOpen },
  { num: "02", title: "Research Objectives", icon: Target },
  { num: "03", title: "Literature Review", icon: Search },
  { num: "04", title: "System Architecture", icon: Network },
  { num: "05", title: "Methodology & Protocol", icon: Cog },
  { num: "06", title: "Security Analysis", icon: ShieldCheck },
  { num: "07", title: "Technology Stack", icon: Wrench },
  { num: "08", title: "Experimental Results", icon: BarChart3 },
  { num: "09", title: "Conclusion", icon: CheckCircle },
  { num: "10", title: "Future Scope", icon: Microscope },
  { num: "11", title: "Societal Impact", icon: Heart },
  { num: "12", title: "References", icon: FileText },
];

const IndexSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-10">
        <List size={40} style={{ color: "hsl(170 85% 50%)" }} />
        <h2 className="text-5xl font-bold">Agenda</h2>
      </div>

      <div className="grid grid-cols-3 gap-5 flex-1 content-start">
        {items.map((item) => (
          <div
            key={item.num}
            className="flex items-center gap-4 p-5 rounded-xl transition-all"
            style={{
              background: "hsl(220 20% 12% / 0.8)",
              border: "1px solid hsl(220 15% 22%)",
            }}
          >
            <span className="text-2xl font-black" style={{ color: "hsl(170 85% 50% / 0.4)" }}>
              {item.num}
            </span>
            <item.icon size={24} style={{ color: "hsl(170 85% 50%)" }} />
            <span className="text-lg font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default IndexSlide;
