import { useState, useCallback } from "react";
import FortuneModeSelector from "@/components/FortuneModeSelector";
import FortuneReveal from "@/components/FortuneReveal";
import {
  type FortuneMode,
  type FortuneResult,
  getFortune,
} from "@/lib/fortune-config";

interface FortuneFlowProps {
  triggerClassName?: string;
}

export default function FortuneFlow({ triggerClassName }: FortuneFlowProps) {
  const [showModeSelector, setShowModeSelector] = useState(false);
  const [status, setStatus] = useState<"idle" | "drawing" | "revealed">("idle");
  const [result, setResult] = useState<FortuneResult | null>(null);

  const handleOpenModes = useCallback(() => {
    setShowModeSelector(true);
  }, []);

  const handleSelectMode = useCallback(async (mode: FortuneMode) => {
    setShowModeSelector(false);
    setStatus("drawing");

    // Animate for a moment
    await new Promise((r) => setTimeout(r, 3500));

    const fortuneResult = await getFortune(mode);
    setResult(fortuneResult);
    setStatus("revealed");
  }, []);

  const handleClose = useCallback(() => {
    setStatus("idle");
    setResult(null);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpenModes}
        className={
          triggerClassName ??
          `px-8 py-3 rounded-full border border-accent/40 text-accent
           font-semibold text-base hover:bg-accent/10 hover:border-accent
           transition-all duration-300 hover:scale-105 active:scale-95`
        }
      >
        🔮 Bốc Quẻ
      </button>

      {/* Mode Selector Modal */}
      <FortuneModeSelector
        open={showModeSelector}
        onClose={() => setShowModeSelector(false)}
        onSelect={handleSelectMode}
      />

      {/* Drawing animation overlay */}
      {status === "drawing" && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="relative w-40 h-64">
            {/* Fortune sticks inside the tube */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 flex justify-center">
              {/* Sticks that shake */}
              <div className="relative w-24 h-44 animate-fortune-box-shake origin-bottom">
                {[
                  { num: "11", left: "8%", rot: "-8deg", delay: "0s", h: "140px" },
                  { num: "36", left: "22%", rot: "-3deg", delay: "0.05s", h: "148px" },
                  { num: "4", left: "38%", rot: "2deg", delay: "0.1s", h: "152px" },
                  { num: "29", left: "54%", rot: "5deg", delay: "0.08s", h: "144px" },
                  { num: "7", left: "70%", rot: "9deg", delay: "0.03s", h: "138px" },
                ].map((stick, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 w-3 rounded-t-sm"
                    style={{
                      left: stick.left,
                      height: stick.h,
                      transform: `rotate(${stick.rot})`,
                      animationDelay: stick.delay,
                    }}
                  >
                    {/* Stick body - bamboo color */}
                    <div className="w-full h-full rounded-t-sm"
                      style={{ background: "linear-gradient(90deg, #d4a056, #e8c078, #d4a056)" }} />
                    {/* Red tip */}
                    <div className="absolute top-0 left-0 w-full h-6 rounded-t-sm"
                      style={{ background: "linear-gradient(180deg, #c0392b, #e74c3c)" }} />
                    {/* Number on stick */}
                    <div className="absolute top-7 left-1/2 -translate-x-1/2 text-[9px] font-bold text-red-900">
                      {stick.num}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The falling stick */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-stick-fall">
              <div className="w-3 h-36 relative" style={{ transform: "rotate(15deg)" }}>
                <div className="w-full h-full rounded-t-sm"
                  style={{ background: "linear-gradient(90deg, #d4a056, #e8c078, #d4a056)" }} />
                <div className="absolute top-0 left-0 w-full h-6 rounded-t-sm"
                  style={{ background: "linear-gradient(180deg, #c0392b, #e74c3c)" }} />
                <div className="absolute top-7 left-1/2 -translate-x-1/2 text-[9px] font-bold text-red-900">
                  ★
                </div>
              </div>
            </div>

            {/* Bamboo tube */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-24 rounded-b-2xl overflow-hidden"
              style={{
                background: "linear-gradient(90deg, #8B5E3C, #C4883C, #D4A056, #C4883C, #8B5E3C)",
                boxShadow: "inset 0 -8px 16px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.4)",
              }}>
              {/* Band around the tube */}
              <div className="absolute top-4 left-0 w-full h-4"
                style={{
                  background: "linear-gradient(90deg, #6B3A1F, #A0642C, #C4883C, #A0642C, #6B3A1F)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }} />
              {/* Second band */}
              <div className="absolute top-0 left-0 w-full h-2"
                style={{
                  background: "linear-gradient(90deg, #6B3A1F, #A0642C, #C4883C, #A0642C, #6B3A1F)",
                }} />
            </div>
          </div>

          <p className="text-accent text-lg font-semibold animate-pulse mt-4">
            Đang lắc quẻ...
          </p>
        </div>
      )}

      {/* Fortune Reveal */}
      {status === "revealed" && result && (
        <FortuneReveal result={result} onClose={handleClose} />
      )}
    </>
  );
}
