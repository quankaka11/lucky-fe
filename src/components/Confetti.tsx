import { useEffect } from "react";
import confetti from "canvas-confetti";
import type { ConfettiLevel } from "@/lib/lixi-config";

const configs: Record<ConfettiLevel, () => void> = {
  small: () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#FFD700", "#FF4444", "#FF6B6B"],
    });
  },
  medium: () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FF4444", "#FF6B6B", "#FFA500"],
    });
  },
  large: () => {
    const duration = 2000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FFD700", "#FF4444", "#FFA500"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FFD700", "#FF4444", "#FFA500"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  },
  epic: () => {
    const duration = 4000;
    const end = Date.now() + duration;
    const colors = ["#FFD700", "#FF4444", "#FFA500", "#FF69B4", "#00FF88"];

    // Initial burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors,
      startVelocity: 45,
    });

    // Continuous sides
    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.5 },
        colors,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.5 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  },
};

export function useConfetti(level: ConfettiLevel | null) {
  useEffect(() => {
    if (level) {
      configs[level]();
    }
  }, [level]);
}
