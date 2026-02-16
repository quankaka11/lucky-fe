import { useState } from "react";
import {
  type FortuneMode,
  FORTUNE_MODES,
} from "@/lib/fortune-config";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface FortuneModeSelectorProps {
  open: boolean;
  onClose: () => void;
  onSelect: (mode: FortuneMode) => void;
}

const MODE_ORDER: FortuneMode[] = [
  "random",
  "tai_loc",
  "tinh_duyen",
  "suc_khoe",
  "cong_danh",
  "gia_dao",
];

export default function FortuneModeSelector({
  open,
  onClose,
  onSelect,
}: FortuneModeSelectorProps) {
  const [hoveredMode, setHoveredMode] = useState<FortuneMode | null>(null);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-gold-gradient font-serif">
            🔮 Chọn Loại Quẻ
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Chọn lĩnh vực bạn muốn xem vận mệnh
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {MODE_ORDER.map((mode) => {
            const config = FORTUNE_MODES[mode];
            const isHovered = hoveredMode === mode;

            return (
              <button
                key={mode}
                onClick={() => onSelect(mode)}
                onMouseEnter={() => setHoveredMode(mode)}
                onMouseLeave={() => setHoveredMode(null)}
                className={`
                  flex flex-col items-center gap-2 p-4 rounded-xl
                  border transition-all duration-200
                  ${
                    isHovered
                      ? "border-accent bg-accent/10 scale-105 shadow-lg"
                      : "border-border bg-muted/30 hover:border-accent/50"
                  }
                `}
              >
                <span className="text-3xl">{config.emoji}</span>
                <span className="font-semibold text-foreground text-sm">
                  {config.label}
                </span>
                <span className="text-xs text-muted-foreground leading-tight text-center">
                  {config.description}
                </span>
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
