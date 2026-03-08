import React, { useState, useEffect, useCallback } from "react";
import ScaledSlide from "./ScaledSlide";
import { slides } from "./slideData";
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  MessageSquare,
  X,
} from "lucide-react";

const PresentationApp: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);

  const goNext = useCallback(() => {
    setCurrentSlide((s) => Math.min(s + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((s) => Math.max(s - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen();
      } else if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, toggleFullscreen]);

  useEffect(() => {
    const handleFSChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (document.fullscreenElement) {
        setShowThumbnails(false);
        setShowNotes(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFSChange);
    return () => document.removeEventListener("fullscreenchange", handleFSChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;
  const slideInfo = slides[currentSlide];

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden" style={{ background: "hsl(220 25% 6%)" }}>
      {/* Toolbar */}
      {!isFullscreen && (
        <div
          className="h-14 flex items-center justify-between px-4 flex-shrink-0 z-50"
          style={{
            background: "hsl(220 20% 10%)",
            borderBottom: "1px solid hsl(220 15% 18%)",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold" style={{ color: "hsl(170 85% 50%)" }}>
              Secure-Drop
            </span>
            <span style={{ color: "hsl(215 15% 40%)" }}>|</span>
            <span className="text-sm" style={{ color: "hsl(215 15% 60%)" }}>
              Presentation
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className="px-3 py-1.5 rounded-md text-sm transition-colors"
              style={{
                background: showThumbnails ? "hsl(170 85% 50% / 0.15)" : "transparent",
                color: showThumbnails ? "hsl(170 85% 50%)" : "hsl(215 15% 60%)",
                border: "1px solid hsl(220 15% 22%)",
              }}
            >
              Slides
            </button>
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 transition-colors"
              style={{
                background: showNotes ? "hsl(170 85% 50% / 0.15)" : "transparent",
                color: showNotes ? "hsl(170 85% 50%)" : "hsl(215 15% 60%)",
                border: "1px solid hsl(220 15% 22%)",
              }}
            >
              <MessageSquare size={14} /> Notes
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 transition-colors"
              style={{
                background: "hsl(170 85% 50% / 0.15)",
                color: "hsl(170 85% 50%)",
                border: "1px solid hsl(170 85% 50% / 0.3)",
              }}
            >
              <Maximize size={14} /> Present
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Thumbnails sidebar */}
        {showThumbnails && !isFullscreen && (
          <div
            className="w-52 flex-shrink-0 overflow-y-auto py-3 px-2 space-y-2"
            style={{
              background: "hsl(220 20% 8%)",
              borderRight: "1px solid hsl(220 15% 18%)",
            }}
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="w-full text-left rounded-lg overflow-hidden transition-all"
                style={{
                  border: i === currentSlide
                    ? "2px solid hsl(170 85% 50%)"
                    : "2px solid transparent",
                  opacity: i === currentSlide ? 1 : 0.6,
                }}
              >
                <div
                  className="relative overflow-hidden rounded-md"
                  style={{ aspectRatio: "16/9", background: "hsl(220 25% 8%)" }}
                >
                  <div style={{ transform: "scale(0.1)", transformOrigin: "top left", width: 1920, height: 1080 }}>
                    <slide.component />
                  </div>
                </div>
                <div className="px-2 py-1.5 flex items-center gap-2">
                  <span className="text-xs font-bold" style={{ color: "hsl(170 85% 50% / 0.5)" }}>
                    {i + 1}
                  </span>
                  <span className="text-xs truncate" style={{ color: "hsl(215 15% 60%)" }}>
                    {slide.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Main canvas */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 relative overflow-hidden">
            <ScaledSlide>
              <CurrentSlideComponent />
            </ScaledSlide>
          </div>

          {/* Navigation bar */}
          <div
            className="h-12 flex items-center justify-center gap-4 flex-shrink-0"
            style={{
              background: "hsl(220 20% 10%)",
              borderTop: "1px solid hsl(220 15% 18%)",
            }}
          >
            <button
              onClick={goPrev}
              disabled={currentSlide === 0}
              className="p-2 rounded-md transition-colors disabled:opacity-30"
              style={{ color: "hsl(210 20% 92%)" }}
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-mono" style={{ color: "hsl(215 15% 60%)" }}>
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={goNext}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-md transition-colors disabled:opacity-30"
              style={{ color: "hsl(210 20% 92%)" }}
            >
              <ChevronRight size={20} />
            </button>
            {isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-md ml-4"
                style={{ color: "hsl(215 15% 60%)" }}
              >
                <Minimize size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Speaker notes panel */}
      {showNotes && !isFullscreen && (
        <div
          className="h-48 flex-shrink-0 overflow-y-auto p-5"
          style={{
            background: "hsl(220 20% 10%)",
            borderTop: "1px solid hsl(220 15% 18%)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: "hsl(170 85% 50% / 0.15)", color: "hsl(170 85% 50%)" }}>
                🎤 {slideInfo.speaker}
              </span>
              <span className="text-sm font-semibold" style={{ color: "hsl(210 20% 92%)" }}>
                {slideInfo.title}
              </span>
            </div>
            <button onClick={() => setShowNotes(false)} style={{ color: "hsl(215 15% 60%)" }}>
              <X size={16} />
            </button>
          </div>
          <p className="text-sm leading-relaxed italic" style={{ color: "hsl(215 15% 60%)" }}>
            {slideInfo.notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default PresentationApp;
