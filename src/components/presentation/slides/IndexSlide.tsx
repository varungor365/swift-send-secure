import SlideLayout from "../SlideLayout";
import { BookOpen, Target, Search, Cog, Wrench, BarChart3, CheckCircle, Heart, FileText, List } from "lucide-react";

const items = [
  { num: "01", title: "Introduction", icon: BookOpen },
  { num: "02", title: "Objectives", icon: Target },
  { num: "03", title: "Literature Review", icon: Search },
  { num: "04", title: "Methodology", icon: Cog },
  { num: "05", title: "Tools Used", icon: Wrench },
  { num: "06", title: "Data Collection", icon: BarChart3 },
  { num: "07", title: "Conclusion", icon: CheckCircle },
  { num: "08", title: "Benefit for Society", icon: Heart },
  { num: "09", title: "References", icon: FileText },
];

const IndexSlide = () => (
  <SlideLayout>
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-12">
        <List size={40} style={{ color: "hsl(170 85% 50%)" }} />
        <h2 className="text-5xl font-bold">Agenda</h2>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1 content-start">
        {items.map((item) => (
          <div
            key={item.num}
            className="flex items-center gap-5 p-6 rounded-xl transition-all"
            style={{
              background: "hsl(220 20% 12% / 0.8)",
              border: "1px solid hsl(220 15% 22%)",
            }}
          >
            <span className="text-3xl font-black" style={{ color: "hsl(170 85% 50% / 0.4)" }}>
              {item.num}
            </span>
            <item.icon size={28} style={{ color: "hsl(170 85% 50%)" }} />
            <span className="text-xl font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default IndexSlide;
