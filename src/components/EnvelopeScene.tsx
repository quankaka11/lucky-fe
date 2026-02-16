import { useState, useCallback } from "react";
import envelopeImg from "@/assets/envelope.png";
import { useConfetti } from "@/components/Confetti";
import FortuneFlow from "@/components/FortuneFlow";
import {
  type UIStatus,
  type LixiResult,
  LIXI_CONFIG,
  randomLixi,
  getWish,
} from "@/lib/lixi-config";

export default function EnvelopeScene() {
  const [status, setStatus] = useState<UIStatus>("idle");
  const [result, setResult] = useState<LixiResult | null>(null);
  const [wishLoaded, setWishLoaded] = useState(false);

  useConfetti(status === "revealed" ? result?.confetti ?? null : null);

  const handleOpen = useCallback(async () => {
    if (status !== "idle") return;

    // Random result immediately
    const imageType = randomLixi();
    const config = LIXI_CONFIG[imageType];

    setStatus("opening");
    setWishLoaded(false);

    // Start fetching wish in parallel with animation
    const wishPromise = getWish(imageType);

    // Wait for opening animation
    await new Promise((r) => setTimeout(r, 1400));

    setResult({
      imageType,
      imageUrl: config.image,
      wishText: "",
      confetti: config.confetti,
    });
    setStatus("revealed");

    // Load wish text (fade in separately)
    const wishText = await wishPromise;
    setResult((prev) =>
      prev ? { ...prev, wishText } : null
    );
    setWishLoaded(true);
  }, [status]);

  const handleReset = useCallback(() => {
    setStatus("idle");
    setResult(null);
    setWishLoaded(false);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-festive px-4 py-8 overflow-hidden relative">
      {/* Decorative lanterns */}
      <div className="absolute top-0 left-8 text-4xl opacity-60 animate-pulse">🏮</div>
      <div className="absolute top-4 right-12 text-3xl opacity-50 animate-pulse" style={{ animationDelay: "0.5s" }}>🏮</div>
      <div className="absolute top-2 left-1/3 text-2xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }}>🏮</div>

      {status === "idle" && (
        <IdleScreen onOpen={handleOpen} />
      )}

      {status === "opening" && (
        <OpeningScreen />
      )}

      {status === "revealed" && result && (
        <RevealScreen
          result={result}
          wishLoaded={wishLoaded}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

function IdleScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="flex flex-col items-center gap-8 animate-[fade-in_0.5s_ease-out]">
      <h1 className="text-4xl md:text-5xl font-bold text-gold-gradient text-center leading-tight">
        Bốc Lì Xì
        <br />
        <span className="text-3xl md:text-4xl">Lấy Lộc Đầu Năm</span>
      </h1>

      <p className="text-muted-foreground text-sm tracking-wide">
        Mỗi người 1 lần/ngày • Chạm để thử vận may
      </p>

      <button
        onClick={onOpen}
        className="group relative focus:outline-none"
        aria-label="Bốc lì xì"
      >
        <div className="animate-idle-shake transition-transform group-hover:scale-110 group-active:scale-95">
          <img
            src={envelopeImg}
            alt="Phong bao lì xì"
            className="w-52 h-auto drop-shadow-2xl glow-red"
          />
        </div>
      </button>

      <button
        onClick={onOpen}
        className="mt-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg
                   shadow-lg hover:shadow-xl transition-all duration-300
                   hover:scale-105 active:scale-95
                   glow-red animate-pulse-glow"
      >
        🧧 LIXI!
      </button>

      <FortuneFlow />
    </div>
  );
}

function OpeningScreen() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="animate-vigorous-shake">
        <img
          src={envelopeImg}
          alt="Đang mở..."
          className="w-52 h-auto drop-shadow-2xl animate-envelope-open"
        />
      </div>
      <p className="text-accent text-lg font-semibold animate-pulse mt-4">
        Đang mở phong bao...
      </p>
    </div>
  );
}

function RevealScreen({
  result,
  wishLoaded,
  onReset,
}: {
  result: LixiResult;
  wishLoaded: boolean;
  onReset: () => void;
}) {
  const isSpecial = result.imageType === "special";
  const config = LIXI_CONFIG[result.imageType];

  return (
    <div className="flex flex-col items-center gap-6 animate-float-up max-w-sm w-full">
      {/* Label */}
      <div
        className={`text-3xl md:text-4xl font-bold text-center ${
          isSpecial ? "text-gold-gradient text-5xl" : "text-accent"
        }`}
      >
        {config.label}
      </div>

      {/* Image */}
      <div className={`relative ${isSpecial ? "glow-gold" : ""} rounded-2xl overflow-hidden`}>
        <img
          src={result.imageUrl}
          alt={config.label}
          className={`w-96 max-h-96 object-contain rounded-2xl shadow-2xl ${isSpecial ? "animate-pulse-glow" : ""
            }`}
        />
        {isSpecial && (
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gold/10 rounded-2xl" />
        )}
      </div>

      {/* Wish text */}
      <div
        className={`min-h-[3rem] text-center px-4 transition-all duration-500 ${
          wishLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p
          className={`text-lg leading-relaxed ${
            isSpecial
              ? "text-gold-gradient text-xl font-bold"
              : "text-foreground/90"
          }`}
        >
          {result.wishText}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-3 mt-4">
        <div className="flex gap-4">
          <button
            onClick={onReset}
            className="px-6 py-3 rounded-full border border-accent/30 text-accent
                       hover:bg-accent/10 transition-all duration-200 font-medium"
          >
            🔄 Bốc lại
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Lì Xì May Mắn",
                  text: `Tôi bốc được ${config.label}! ${result.wishText}`,
                });
              }
            }}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground
                       hover:bg-primary/90 transition-all duration-200 font-medium
                       shadow-lg"
          >
            📤 Chia sẻ
          </button>
        </div>

        <FortuneFlow />
      </div>
    </div>
  );
}
