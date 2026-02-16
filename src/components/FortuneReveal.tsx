import {
  type FortuneResult,
  ratingStars,
  ratingLabel,
  ratingColor,
  FORTUNE_MODES,
  type FortuneMode,
} from "@/lib/fortune-config";

interface FortuneRevealProps {
  result: FortuneResult;
  onClose: () => void;
}

export default function FortuneReveal({ result, onClose }: FortuneRevealProps) {
  const { fortune } = result;
  const modeConfig = FORTUNE_MODES[fortune.category as FortuneMode];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-[fade-in_0.3s_ease-out]">
      <div className="relative max-w-sm w-full mx-4 animate-float-up" style={{ animationDelay: "0s", opacity: 1, animation: "float-up 0.6s ease-out forwards" }}>
        {/* Card */}
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary/30 to-accent/20 p-6 text-center">
            <div className="text-4xl mb-2">{fortune.emoji}</div>
            <h2 className="text-2xl font-bold text-gold-gradient font-serif">
              {fortune.title}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent">
                {modeConfig?.emoji} {modeConfig?.label}
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 py-3 border-b border-border">
            <span className={`text-lg tracking-wider ${ratingColor(fortune.rating)}`}>
              {ratingStars(fortune.rating)}
            </span>
            <span className={`text-sm font-medium ${ratingColor(fortune.rating)}`}>
              {ratingLabel(fortune.rating)}
            </span>
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* Summary */}
            <p className="text-foreground font-medium text-center text-lg leading-relaxed">
              {fortune.summary}
            </p>

            {/* Detail */}
            <div className="bg-muted/30 rounded-xl p-4">
              <p className="text-sm text-foreground/80 leading-relaxed">
                {fortune.detail}
              </p>
            </div>

            {/* Advice */}
            <div className="flex items-start gap-2">
              <span className="text-accent text-lg mt-0.5">💡</span>
              <p className="text-sm text-accent leading-relaxed">
                {fortune.advice}
              </p>
            </div>

            {/* Lucky Element */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>🍀</span>
              <span>May mắn: {fortune.luckyElement}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 p-5 pt-0">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-xl border border-accent/30 text-accent
                         hover:bg-accent/10 transition-all duration-200 font-medium text-sm"
            >
              🔄 Bốc lại
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: `Quẻ: ${fortune.title}`,
                    text: `${fortune.emoji} ${fortune.title}\n${fortune.summary}\n💡 ${fortune.advice}`,
                  });
                }
              }}
              className="flex-1 px-4 py-3 rounded-xl bg-primary text-primary-foreground
                         hover:bg-primary/90 transition-all duration-200 font-medium text-sm
                         shadow-lg"
            >
              📤 Chia sẻ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
